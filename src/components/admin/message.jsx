import React, { useState, useEffect, useRef } from "react";
import { 
  collection, query, orderBy, onSnapshot, 
  updateDoc, doc, addDoc, serverTimestamp, writeBatch,
  getDocs
} from "firebase/firestore";
import { db } from "../../firebase";
import { 
  FaSearch, FaReply, FaCheck, FaUser, FaEnvelope, 
  FaEyeSlash, FaSort, FaSync, FaExclamationTriangle,
  FaSignOutAlt, FaClock
} from "react-icons/fa";
import { getAuth, signOut } from "firebase/auth";

// Hardcoded admin UID
const ADMIN_UID = "tSkkQjMfTMNhpqK92TxjvGVPUWa2";

const AdminChatManagement = () => {
  const [conversations, setConversations] = useState([]);
  const [selectedConversation, setSelectedConversation] = useState(null);
  const [newMessage, setNewMessage] = useState("");
  const [searchTerm, setSearchTerm] = useState("");
  const [loading, setLoading] = useState(true);
  const [sending, setSending] = useState(false);
  const [sortOrder, setSortOrder] = useState("newest");
  const [activeFilter, setActiveFilter] = useState("all");
  const [refreshing, setRefreshing] = useState(false);
  const [error, setError] = useState(null);
  const [isAdmin, setIsAdmin] = useState(false);
  const [authChecked, setAuthChecked] = useState(false);
  const [autoRefreshEnabled, setAutoRefreshEnabled] = useState(true);
  const [lastRefresh, setLastRefresh] = useState(new Date());
  
  const refreshIntervalRef = useRef(null);

  // Check if user is admin on component mount
  useEffect(() => {
    const auth = getAuth();
    const unsubscribe = auth.onAuthStateChanged((user) => {
      if (user && user.uid === ADMIN_UID) {
        setIsAdmin(true);
        setAuthChecked(true);
        fetchConversations();
      } else {
        setIsAdmin(false);
        setAuthChecked(true);
        setError("Access denied. Admin privileges required.");
      }
    });

    return () => unsubscribe();
  }, []);

  // Set up auto-refresh interval
  useEffect(() => {
    if (isAdmin && autoRefreshEnabled) {
      refreshIntervalRef.current = setInterval(() => {
        fetchConversations();
      }, 5000); // Refresh every 5 seconds
    }

    return () => {
      if (refreshIntervalRef.current) {
        clearInterval(refreshIntervalRef.current);
      }
    };
  }, [isAdmin, autoRefreshEnabled]);

  const handleSignOut = () => {
    const auth = getAuth();
    signOut(auth).catch((error) => {
      console.error("Error signing out:", error);
      setError("Failed to sign out.");
    });
  };

  // Fetch all conversations only if admin
  useEffect(() => {
    if (isAdmin) {
      setLoading(true);
      fetchConversations();
    }
  }, [sortOrder, isAdmin]);

  const fetchConversations = async () => {
    if (!isAdmin) return;
    
    try {
      setRefreshing(true);
      setError(null);
      
      // Get all chat messages
      const q = query(collection(db, "chats"), orderBy("timestamp", "desc"));
      const querySnapshot = await getDocs(q);
      
      const conversationsData = [];
      querySnapshot.forEach((doc) => {
        conversationsData.push({ id: doc.id, ...doc.data() });
      });
      
      // Group messages by user
      const groupedConversations = groupConversationsByUser(conversationsData);
      
      // Sort conversations based on selected order
      const sortedConversations = sortConversations(groupedConversations, sortOrder);
      
      setConversations(sortedConversations);
      setLastRefresh(new Date());
      
      // If a conversation is selected, update it with latest messages
      if (selectedConversation) {
        const updatedConversation = sortedConversations.find(
          conv => conv.userId === selectedConversation.userId
        );
        if (updatedConversation) {
          setSelectedConversation(updatedConversation);
        }
      }
    } catch (error) {
      console.error("Error fetching conversations:", error);
      setError("Failed to load conversations. Please check your permissions.");
    } finally {
      setLoading(false);
      setRefreshing(false);
    }
  };

  // Group messages by user to create conversation threads
  const groupConversationsByUser = (messages) => {
    const grouped = {};
    
    messages.forEach(message => {
      const userId = message.userId;
      if (!grouped[userId]) {
        grouped[userId] = {
          userId,
          userName: message.userName || "Unknown User",
          userEmail: message.userEmail || "No email",
          messages: [],
          unreadCount: 0,
          lastMessage: message.timestamp,
          hasUnreadAdminMessages: false
        };
      }
      
      // Add message to the user's conversation
      grouped[userId].messages.push(message);
      
      // Check for unread admin messages (messages from admin that user hasn't read)
      if (!message.read && message.isAdmin) {
        grouped[userId].hasUnreadAdminMessages = true;
        grouped[userId].unreadCount++;
      }
      
      // Update last message timestamp
      if (message.timestamp && (!grouped[userId].lastMessage || 
          message.timestamp.toDate() > grouped[userId].lastMessage.toDate())) {
        grouped[userId].lastMessage = message.timestamp;
      }
    });
    
    return Object.values(grouped);
  };

  // Sort conversations based on selected criteria
  const sortConversations = (conversations, order) => {
    const sorted = [...conversations];
    
    switch(order) {
      case "newest":
        return sorted.sort((a, b) => {
          const dateA = a.lastMessage ? a.lastMessage.toDate() : new Date(0);
          const dateB = b.lastMessage ? b.lastMessage.toDate() : new Date(0);
          return dateB - dateA;
        });
      case "oldest":
        return sorted.sort((a, b) => {
          const dateA = a.lastMessage ? a.lastMessage.toDate() : new Date(0);
          const dateB = b.lastMessage ? b.lastMessage.toDate() : new Date(0);
          return dateA - dateB;
        });
      case "unread":
        return sorted.sort((a, b) => b.unreadCount - a.unreadCount);
      case "name":
        return sorted.sort((a, b) => a.userName.localeCompare(b.userName));
      default:
        return sorted;
    }
  };

  // Filter conversations based on search term and status
  const filteredConversations = conversations.filter(conv => {
    // Status filter
    if (activeFilter === "unread" && conv.unreadCount === 0) return false;
    if (activeFilter === "read" && conv.unreadCount > 0) return false;
    
    // Search term filter
    if (searchTerm) {
      const term = searchTerm.toLowerCase();
      return (
        conv.userName.toLowerCase().includes(term) ||
        conv.userId.toLowerCase().includes(term) ||
        conv.userEmail.toLowerCase().includes(term) ||
        conv.messages.some(msg => 
          msg.message && msg.message.toLowerCase().includes(term)
        )
      );
    }
    
    return true;
  });

  // Select a conversation to view
  const handleSelectConversation = async (conversation) => {
    if (!isAdmin) return;
    
    setSelectedConversation(conversation);
    
    // Mark admin messages as read
    const unreadMessages = conversation.messages.filter(
      msg => !msg.read && msg.isAdmin
    );
    
    if (unreadMessages.length > 0) {
      try {
        const batch = writeBatch(db);
        unreadMessages.forEach(msg => {
          const msgRef = doc(db, "chats", msg.id);
          batch.update(msgRef, { read: true });
        });
        
        await batch.commit();
        
        // Update local state to reflect read status
        setConversations(prev => prev.map(conv => 
          conv.userId === conversation.userId 
            ? {...conv, unreadCount: 0, hasUnreadAdminMessages: false} 
            : conv
        ));
      } catch (error) {
        console.error("Error marking messages as read:", error);
        setError("Failed to mark messages as read.");
      }
    }
  };

  // Send a reply to the user
  const handleSendReply = async (e) => {
    e.preventDefault();
    if (!newMessage.trim() || !selectedConversation || !isAdmin) return;
    
    setSending(true);
    try {
      await addDoc(collection(db, "chats"), {
        userId: selectedConversation.userId,
        userName: selectedConversation.userName,
        userEmail: selectedConversation.userEmail,
        message: newMessage.trim(),
        isAdmin: true,
        timestamp: serverTimestamp(),
        read: false
      });
      
      setNewMessage("");
      
      // Refresh the conversations to show the new message
      fetchConversations();
    } catch (error) {
      console.error("Error sending reply:", error);
      setError("Failed to send message. Please check your permissions.");
    } finally {
      setSending(false);
    }
  };

  // Format timestamp
  const formatTime = (timestamp) => {
    if (!timestamp) return "";
    try {
      const date = timestamp.toDate();
      const now = new Date();
      const diffInHours = (now - date) / (1000 * 60 * 60);
      
      if (diffInHours < 24) {
        return date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
      } else {
        return date.toLocaleDateString([], { month: 'short', day: 'numeric' });
      }
    } catch (error) {
      return "";
    }
  };

  // Format time for last refresh
  const formatRefreshTime = (date) => {
    return date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', second: '2-digit' });
  };

  // Get user initials for avatar
  const getUserInitials = (name) => {
    if (!name || name === "Unknown User") return "U";
    return name.split(' ')
      .map(part => part[0])
      .join('')
      .toUpperCase()
      .substring(0, 2);
  };

  // Toggle auto-refresh
  const toggleAutoRefresh = () => {
    setAutoRefreshEnabled(!autoRefreshEnabled);
  };

  // Show loading while checking authentication
  if (!authChecked) {
    return (
      <div className="admin-loading">
        <div className="loading-spinner"></div>
        <p>Checking permissions...</p>
      </div>
    );
  }

  // Show access denied if not admin
  if (!isAdmin) {
    return (
      <div className="access-denied">
        <div className="access-denied-content">
          <FaExclamationTriangle size={48} />
          <h2>Access Denied</h2>
          <p>You need administrator privileges to access this page.</p>
          <button onClick={handleSignOut} className="btn-signout">
            <FaSignOutAlt /> Sign Out
          </button>
        </div>
      </div>
    );
  }

  if (loading) {
    return (
      <div className="admin-loading">
        <div className="loading-spinner"></div>
        <p>Loading conversations...</p>
      </div>
    );
  }

  return (
    <div className="admin-chat-management">
      <div className="admin-header">
        <div className="header-title">
          <h1>Customer Support Management</h1>
          <p>Manage and respond to user inquiries</p>
        </div>
        <div className="header-actions">
          <div className="refresh-controls">
            <button 
              className={`btn-refresh ${autoRefreshEnabled ? 'active' : ''}`}
              onClick={fetchConversations}
              disabled={refreshing}
            >
              <FaSync className={refreshing ? "spinning" : ""} /> 
              {refreshing ? "Refreshing..." : "Refresh Now"}
            </button>
            <button 
              className={`btn-auto-refresh ${autoRefreshEnabled ? 'active' : ''}`}
              onClick={toggleAutoRefresh}
            >
              <FaClock /> 
              {autoRefreshEnabled ? "Auto: ON" : "Auto: OFF"}
            </button>
          </div>
          <button onClick={handleSignOut} className="btn-signout">
            <FaSignOutAlt /> Sign Out
          </button>
        </div>
      </div>

      {error && (
        <div className="error-banner">
          <FaExclamationTriangle /> 
          <span>{error}</span>
          <button onClick={() => setError(null)}>×</button>
        </div>
      )}

      <div className="header-stats">
        <div className="stat-item">
          <span className="stat-number">{conversations.length}</span>
          <span className="stat-label">Total Conversations</span>
        </div>
        <div className="stat-item">
          <span className="stat-number">
            {conversations.filter(c => c.unreadCount > 0).length}
          </span>
          <span className="stat-label">Unread Conversations</span>
        </div>
        <div className="stat-item">
          <span className="stat-number">
            {conversations.reduce((total, conv) => total + conv.messages.length, 0)}
          </span>
          <span className="stat-label">Total Messages</span>
        </div>
        <div className="stat-item">
          <span className="stat-number">
            {autoRefreshEnabled ? "ON" : "OFF"}
          </span>
          <span className="stat-label">Auto Refresh</span>
        </div>
        <div className="stat-item">
          <span className="stat-number">
            {formatRefreshTime(lastRefresh)}
          </span>
          <span className="stat-label">Last Refresh</span>
        </div>
      </div>

      <div className="admin-conversation-container">
        {/* Conversation List */}
        <div className="conversation-list">
          <div className="conversation-filters">
            <div className="search-box">
              <FaSearch />
              <input
                type="text"
                placeholder="Search conversations..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
            
            <div className="filter-controls">
              <div className="filter-buttons">
                <button 
                  className={activeFilter === "all" ? "active" : ""}
                  onClick={() => setActiveFilter("all")}
                >
                  All
                </button>
                <button 
                  className={activeFilter === "unread" ? "active" : ""}
                  onClick={() => setActiveFilter("unread")}
                >
                  Unread
                </button>
              </div>
              
              <div className="sort-dropdown">
                <select 
                  value={sortOrder} 
                  onChange={(e) => setSortOrder(e.target.value)}
                >
                  <option value="newest">Newest First</option>
                  <option value="oldest">Oldest First</option>
                  <option value="unread">Unread First</option>
                  <option value="name">By Name</option>
                </select>
                <FaSort />
              </div>
            </div>
          </div>

          <div className="conversations">
            {filteredConversations.length === 0 ? (
              <div className="no-conversations">
                <FaEnvelope size={48} />
                <p>No conversations found</p>
                <span>Try adjusting your search or filters</span>
              </div>
            ) : (
              filteredConversations.map(conversation => (
                <div
                  key={conversation.userId}
                  className={`conversation-item ${selectedConversation && selectedConversation.userId === conversation.userId ? 'active' : ''} ${conversation.hasUnreadAdminMessages ? 'unread' : ''}`}
                  onClick={() => handleSelectConversation(conversation)}
                >
                  <div className="conversation-avatar">
                    {getUserInitials(conversation.userName)}
                  </div>
                  <div className="conversation-details">
                    <div className="conversation-header">
                      <h4>{conversation.userName}</h4>
                      <span className="conversation-time">
                        {formatTime(conversation.lastMessage)}
                      </span>
                    </div>
                    <p className="conversation-email">{conversation.userEmail}</p>
                    <p className="conversation-preview">
                      {conversation.messages.length > 0 && 
                      conversation.messages[conversation.messages.length - 1]?.message 
                        ? conversation.messages[conversation.messages.length - 1].message.substring(0, 70) + '...'
                        : 'No messages'}
                    </p>
                  </div>
                  {conversation.unreadCount > 0 && (
                    <span className="unread-badge">{conversation.unreadCount}</span>
                  )}
                </div>
              ))
            )}
          </div>
        </div>

        {/* Conversation View */}
        <div className="conversation-view">
          {selectedConversation ? (
            <>
              <div className="conversation-header">
                <div className="user-info">
                  <div className="user-avatar">
                    {getUserInitials(selectedConversation.userName)}
                  </div>
                  <div>
                    <h3>{selectedConversation.userName}</h3>
                    <p className="user-email">{selectedConversation.userEmail}</p>
                    <p className="user-id">User ID: {selectedConversation.userId}</p>
                  </div>
                </div>
              </div>

              <div className="message-list">
                {selectedConversation.messages
                  .sort((a, b) => {
                    const dateA = a.timestamp ? a.timestamp.toDate() : new Date(0);
                    const dateB = b.timestamp ? b.timestamp.toDate() : new Date(0);
                    return dateA - dateB;
                  })
                  .map(message => (
                    <div
                      key={message.id}
                      className={`message ${message.isAdmin ? 'admin-message' : 'user-message'} ${message.read ? 'read' : 'unread'}`}
                    >
                      <div className="message-avatar">
                        {message.isAdmin ? 'A' : getUserInitials(selectedConversation.userName)}
                      </div>
                      <div className="message-content">
                        <div className="message-header">
                          <span className="message-sender">
                            {message.isAdmin ? 'Admin' : selectedConversation.userName}
                          </span>
                          <span className="message-time">
                            {formatTime(message.timestamp)}
                          </span>
                        </div>
                        <p>{message.message || "No message content"}</p>
                        {!message.read && message.isAdmin && (
                          <span className="unread-indicator">
                            <FaEyeSlash /> Unread
                          </span>
                        )}
                      </div>
                    </div>
                  ))
                }
              </div>

              <form onSubmit={handleSendReply} className="message-input-form">
                <div className="input-container">
                  <input
                    type="text"
                    value={newMessage}
                    onChange={(e) => setNewMessage(e.target.value)}
                    placeholder="Type your response..."
                    disabled={sending}
                  />
                  <button
                    type="submit"
                    disabled={sending || !newMessage.trim()}
                    className="btn-send"
                  >
                    {sending ? 'Sending...' : (
                      <>
                        <FaReply /> Send
                      </>
                    )}
                  </button>
                </div>
              </form>
            </>
          ) : (
            <div className="no-conversation-selected">
              <FaEnvelope size={64} />
              <h3>Select a conversation</h3>
              <p>Choose a conversation from the list to view messages and respond to users.</p>
            </div>
          )}
        </div>
      </div>

      <style jsx>{`
        .admin-chat-management {
          padding: 20px;
          background: #f5f7fa;
          min-height: 100vh;
        }
        
        .admin-header {
          display: flex;
          justify-content: space-between;
          align-items: flex-start;
          margin-bottom: 20px;
          padding: 20px;
          background: white;
          border-radius: 10px;
          box-shadow: 0 2px 10px rgba(0,0,0,0.05);
        }
        
        .header-title h1 {
          margin: 0;
          color: #2c3e50;
        }
        
        .header-title p {
          margin: 5px 0 极;
          color: #7f8c8d;
        }
        
        .header-actions {
          display: flex;
          flex-direction: column;
          gap: 10px;
          align-items: flex-end;
        }
        
        .refresh-controls {
          display: flex;
          gap: 10px;
        }
        
        .btn-refresh, .btn-auto-refresh {
          padding: 10px 15px;
          background: #3498db;
          color: white;
          border: none;
          border-radius: 5极;
          cursor: pointer;
          display: flex;
          align-items: center;
          gap: 8px;
          font-size: 14px;
        }
        
        .btn-refresh.active, .btn-auto-refresh.active {
          background: #27ae60;
        }
        
        .btn-auto-refresh {
          background: #95a5a6;
        }
        
        .btn-signout {
          padding: 10px 15px;
          background: #e74c3c;
          color: white;
          border: none;
          border-radius: 5px;
          cursor: pointer;
          display: flex;
          align-items: center;
          gap: 8px;
          font-size: 14px;
        }
        
        .btn-refresh:disabled {
          background: #bdc3c7;
          cursor: not-allowed;
        }
        
        .spinning {
          animation: spin 1s linear infinite;
        }
        
        @keyframes spin {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }
        
        .error-banner {
          display: flex;
          align-items: center;
          gap: 10px;
          padding: 15px;
          background: #ffebee;
          color: #c62828;
          border-radius: 8px;
          margin-bottom: 20px;
        }
        
        .error-banner button {
          margin-left: auto;
          background: none;
          border: none;
          font-size: 18px;
          cursor: pointer;
          color: #c62828;
        }
        
        .access-denied {
          display: flex;
          justify-content: center;
          align-items: center;
          height: 100vh;
          background: #f5f7fa;
        }
        
        .access-denied-content {
          text-align: center;
          padding: 40px;
          background: white;
          border-radius: 10px;
          box-shadow: 0 4px 20px rgba(0,0,0,0.1);
          max-width: 500px;
        }
        
        .access-denied-content h2 {
          color: #e74c3c;
          margin: 20px 0 10px;
        }
        
        .access-denied-content p {
          color: #7极8c8d;
          margin-bottom: 20px;
        }
        
        .header-stats {
          display: flex;
          gap: 20px;
          margin-bottom: 20px;
          flex-wrap: wrap;
        }
        
        .stat-item {
          display: flex;
          flex-direction: column;
          align-items: center;
          padding: 15px;
          background: white;
          border-radius: 8px;
          min-width: 120px;
          box-shadow: 0 2px 5px rgba(0,0,0,0.05);
        }
        
        .stat-number {
          font-size: 18px;
          font-weight: bold;
          color: #3498db;
        }
        
        .stat-label {
          font-size: 12px;
          color: #7f8c8d;
          text-align: center;
        }
        
        .admin-conversation-container {
          display: flex;
          gap: 20px;
          height: calc(100vh - 240px);
        }
        
        .conversation-list {
          width: 400px;
          background: white;
          border-radius: 10px;
          box-shadow: 0 2px 10px rgba(0,0,0,0.05);
          display: flex;
          flex-direction: column;
        }
        
        .conversation-filters {
          padding: 15px;
          border-bottom: 1px solid #eee;
        }
        
        .search-box {
          position: relative;
          margin-bottom: 15px;
        }
        
        .search-box svg {
          position: absolute;
          left: 12px;
          top: 50%;
          transform: translateY(-50%);
          color: #7f8c8d;
        }
        
        .search-box input {
          width: 100%;
          padding: 10px 10极 10px 40px;
          border: 1px solid #ddd;
          border-radius: 5px;
          font-size: 14px;
        }
        
        .filter-controls {
          display: flex;
          justify-content: space-between;
          align-items: center;
          gap: 10px;
        }
        
        .filter-b极ttons {
          display: flex;
          gap: 5px;
        }
        
        .filter-buttons button {
          padding: 6px 12px;
          background: #f8f9fa;
          border: 1px solid #eee;
          border-radius: 5px;
          cursor: pointer;
          font-size: 13px;
        }
        
        .filter-buttons button.active {
          background: #3498db;
          color: white;
          border-color: #3498db;
        }
        
        .sort-dropdown {
          position: relative;
        }
        
        .sort-dropdown select {
          padding: 6px 30px 6px 10px;
          border: 1px solid #ddd;
          border-radius: 5px;
          font-size: 13极;
          appearance: none;
          background: white;
        }
        
        .sort-dropdown svg {
          position: absolute;
          right: 10px;
          top: 50%;
          transform: translateY(-50%);
          pointer-events: none;
          color: #7f8c8d;
        }
        
        .conversations {
          flex: 1;
          overflow-y: auto;
        }
        
        .conversation-item {
          display: flex;
          align-items: center;
          padding: 15px;
          border-bottom: 1px solid #f1f3f4;
          cursor: pointer;
          transition: background 0.2s;
          position: relative;
        }
        
        .conversation-item:hover {
          background: #f8f9fa;
        }
        
        .conversation-item.active {
          background: #e3f2fd;
        }
        
        .conversation-item.unread {
          background: #fff8e1;
          border-left: 3px solid #ffc107;
        }
        
        .conversation-avatar {
          width: 40px;
          height: 40px;
          border-radius: 50%;
          background: #3498db;
          color: white;
          display: flex;
          align-items: center;
          justify-content: center;
          margin-right: 15px;
          flex-shrink: 0;
          font-weight: bold;
          font-size: 14px;
        }
        
        .conversation-details {
          flex: 1;
          min-width: 0;
        }
        
        .conversation-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 5px;
        }
        
        .conversation-header h极 {
          margin: 0;
          font-size: 14px;
          color: #2c3e50;
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
        }
        
        .极onversation-time {
          font-size: 11px;
          color: #7f8c8d;
          white-space: nowrap;
          margin-left: 10px;
        }
        
        .conversation-email {
          margin: 0 0 5px 0;
          font-size: 12px;
          color: #7f8c8d;
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
        }
        
        .conversation-preview {
          margin: 0;
          font-size: 13px;
          color: #7f8c8d;
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
        }
        
        .unread-badge {
          background: #e74c3c;
          color: white;
          border-radius: 50%;
          width: 20px;
          height: 20px;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 12px;
          font-weight: bold;
          flex-shrink: 0;
          margin: 0 10px;
        }
        
        .no-conversations {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          height: 200px;
          color: #7f8c8d;
          text-align: center;
          padding: 20px;
        }
        
        .no-conversations svg {
          margin-bottom: 10px;
          opacity: 0.5;
        }
        
        .no-conversations span {
          font-size: 13px;
          margin-top: 5px;
        }
        
        .conversation-view {
          flex: 1;
          background: white;
          border-radius: 10px;
          box-shadow: 0 2px 10px rgba(0,0,0,0.05);
          display: flex;
          flex-direction: column;
        }
        
        .conversation-header {
          padding: 20px;
          border-bottom: 1px solid #eee;
          display: flex;
          justify-content: space-between;
          align-items: center;
        }
        
        .user-info {
          display: flex;
          align-items: center;
        }
        
        .user-avatar {
          width: 50px;
          height: 50px;
          border-radius: 50%;
          background: #3498db;
          color: white;
          display: flex;
          align-items: center;
          justify-content: center;
          margin-right: 15px;
          font-weight: bold;
          font-size: 18px;
        }
        
        .user-email, .user-id {
          margin: 2px 0;
          font-size: 13px;
          color: #7f8c8d;
        }
        
        .message-list {
          flex: 1;
          padding: 20px;
          overflow-y: auto;
          display: flex;
          flex-direction: column;
          gap: 15px;
        }
        
        .message {
          display: flex;
          gap: 10px;
        }
        
        .user-message {
          align-self: flex-start;
        }
        
        .admin-message {
          align-self: flex-end;
          flex-direction: row-reverse;
        }
        
        .message-avatar {
          width: 36px;
          height: 36px;
          border-radius: 50%;
          background: #e0e0e0;
          display: flex;
          align-items: center;
          justify-content: center;
          font-weight: bold;
          font-size: 12px;
          flex-shrink: 0;
        }
        
        .admin-message .message-avatar {
          background: #3498db;
          color: white;
        }
        
        .message-content {
          max-width: 70%;
          padding: 12px 16px;
          border-radius: 18px;
          position: relative;
        }
        
        .user-message .message-content {
          background: #f1f3f4;
          color: #2c3e50;
          border-bottom-left-radius: 5px;
        }
        
        .admin-message .message-content {
          background: #3498db;
          color: white;
          border-bottom-right-radius: 5px;
        }
        
        .message-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 5px;
        }
        
        .message-sender {
          font-size: 12px;
          font-weight: bold;
        }
        
        .message-time {
          font-size: 11px;
          opacity: 0.8;
        }
        
        .unread-indicator {
          display: flex;
          align-items: center;
          gap: 4px;
          font-size: 11px;
          margin-top: 5px;
          opacity: 0.8;
        }
        
        .message-input-form {
          padding: 20px;
          border-top: 1px solid #eee;
        }
        
        .input-container {
          display: flex;
          gap: 10px;
        }
        
        .input-container input {
          flex: 1;
          padding: 12px 15px;
          border-radius: 20px;
          border: 1px solid #ddd;
          outline: none;
          font-size: 14px;
        }
        
        .input-container input:focus {
          border-color: #3498db;
        }
        
        .btn-send {
          padding: 10px 20px;
          background: #3498db;
          color: white;
          border: none;
          border-radius: 20px;
          cursor: pointer;
          display: flex;
          align-items: center;
          gap: 5px;
          font-size: 14px;
        }
        
        .btn-send:disabled {
          background: #bdc3c7;
          cursor: not-allowed;
        }
        
        .no-conversation-selected {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          height: 100%;
          color: #7f8c8d;
          text-align: center;
          padding: 20px;
        }
        
        .极o-conversation-selected svg {
          margin-bottom: 15px;
          opacity: 0.5;
        }
        
        .no-conversation-selected h3 {
          margin: 0 0 10px 0;
          color: #2c3e50;
        }
        
        .no-conversation-selected p {
          margin: 0;
          max-width: 300px;
          line-height: 1.5;
        }
        
        .admin-loading {
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          height: 200px;
          color: #7f8c8d;
        }
        
        .loading-spinner {
          width: 40px;
          height: 40px;
          border: 4px solid #f3f3f3;
          border-top: 4px solid #3498db;
          border-radius: 50%;
          animation: spin 1s linear infinite;
          margin-bottom: 15px;
        }
        
        @media (max-width: 992px) {
          .admin-conversation-container {
            flex-direction: column;
            height: auto;
          }
          
          .conversation-list {
            width: 100%;
            height: 300px;
          }
          
          .admin-header {
            flex-direction: column;
            gap: 15px;
          }
          
          .header-stats {
            flex-wrap: wrap;
          }
          
          .header-actions {
            width: 100%;
            justify-content: flex-end;
          }
        }
      `}</style>
    </div>
  );
};

export default AdminChatManagement;