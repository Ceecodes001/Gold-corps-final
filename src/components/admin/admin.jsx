import React, { useState, useEffect, useRef } from "react";
import { 
  collection, query, orderBy, onSnapshot, 
  updateDoc, doc, addDoc, serverTimestamp, writeBatch,
  getDocs, where, getDoc, setDoc
} from "firebase/firestore";
import { db } from "../../firebase";
import { 
  FaSearch, FaReply, FaCheck, FaUser, FaEnvelope, 
  FaEyeSlash, FaSort, FaSync, FaExclamationTriangle,
  FaSignOutAlt, FaClock, FaMoneyBill, FaChartLine,
  FaUsers, FaEye, FaBan, FaCheckCircle, FaTimesCircle,
  FaHistory, FaCog, FaUserCheck, FaUserClock, FaCoins,
  FaFilter, FaDownload, FaCalendar, FaChartBar,
  FaArrowUp, FaArrowDown, FaMoneyCheckAlt, FaIdCard
} from "react-icons/fa";
import { getAuth, signOut } from "firebase/auth";

// Hardcoded admin UID
const ADMIN_UID = "tSkkQjMfTMNhpqK92TxjvGVPUWa2";

const AdminDashboard = () => {
  const [activeTab, setActiveTab] = useState("users");
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
  const [transactions, setTransactions] = useState([]);
  const [users, setUsers] = useState([]);
  const [userActivities, setUserActivities] = useState([]);
  const [analytics, setAnalytics] = useState({
    totalUsers: 0,
    activeToday: 0,
    totalDeposits: 0,
    totalWithdrawals: 0,
    pendingTransactions: 0,
    totalRevenue: 0
  });
  
  const refreshIntervalRef = useRef(null);

  // Check if user is admin on component mount
  useEffect(() => {
    const auth = getAuth();
    const unsubscribe = auth.onAuthStateChanged((user) => {
      if (user && user.uid === ADMIN_UID) {
        setIsAdmin(true);
        setAuthChecked(true);
        fetchConversations();
        fetchTransactions();
        fetchUsers();
        calculateAnalytics();
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
        fetchTransactions();
        fetchUsers();
      }, 10000); // Refresh every 10 seconds
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
      setRefreshing(false);
    }
  };

  const fetchTransactions = async () => {
    if (!isAdmin) return;
    
    try {
      // Get all transactions
      const q = query(collection(db, "transactions"), orderBy("timestamp", "desc"));
      const querySnapshot = await getDocs(q);
      
      const transactionsData = [];
      querySnapshot.forEach((doc) => {
        transactionsData.push({ id: doc.id, ...doc.data() });
      });
      
      setTransactions(transactionsData);
    } catch (error) {
      console.error("Error fetching transactions:", error);
      setError("Failed to load transactions.");
    }
  };

  const fetchUsers = async () => {
    if (!isAdmin) return;
    
    try {
      // Get all users
      const q = query(collection(db, "users"));
      const querySnapshot = await getDocs(q);
      
      const usersData = [];
      querySnapshot.forEach((doc) => {
        usersData.push({ id: doc.id, ...doc.data() });
      });
      
      setUsers(usersData);
      calculateAnalytics(usersData, transactions);
    } catch (error) {
      console.error("Error fetching users:", error);
      setError("Failed to load users.");
    }
  };

  const calculateAnalytics = (usersData = users, transactionsData = transactions) => {
    if (!isAdmin) return;
    
    // Calculate analytics based on available data
    const totalUsers = usersData.length;
    
    // For demo purposes, set active users to 30% of total
    const activeToday = Math.round(usersData.length * 0.3);
    
    const totalDeposits = transactionsData
      .filter(t => t.type === "deposit" && t.status === "completed")
      .reduce((sum, t) => sum + (t.amount || 0), 0);
    
    const totalWithdrawals = transactionsData
      .filter(t => t.type === "withdrawal" && t.status === "completed")
      .reduce((sum, t) => sum + (t.amount || 0), 0);
    
    const pendingTransactions = transactionsData.filter(t => t.status === "pending").length;
    
    // Calculate revenue (deposits - withdrawals)
    const totalRevenue = totalDeposits - totalWithdrawals;
    
    setAnalytics({
      totalUsers,
      activeToday,
      totalDeposits,
      totalWithdrawals,
      pendingTransactions,
      totalRevenue
    });
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

  // Format currency
  const formatCurrency = (amount) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD'
    }).format(amount || 0);
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

  return (
    <div className="admin-dashboard">
      <div className="admin-header">
        <div className="header-title">
          <h1>Admin Dashboard</h1>
          <p>Manage users, transactions, and customer support</p>
        </div>
        <div className="header-actions">
          <div className="refresh-controls">
            <button 
              className={`btn-refresh ${autoRefreshEnabled ? 'active' : ''}`}
              onClick={() => {
                fetchConversations();
                fetchTransactions();
                fetchUsers();
              }}
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
          <span className="stat-number">{analytics.totalUsers}</span>
          <span className="stat-label">Total Users</span>
        </div>
        <div className="stat-item">
          <span className="stat-number">{analytics.activeToday}</span>
          <span className="stat-label">Active Today</span>
        </div>
        <div className="stat-item">
          <span className="stat-number">{formatCurrency(analytics.totalDeposits)}</span>
          <span className="stat-label">Total Deposits</span>
        </div>
        <div className="stat-item">
          <span className="stat-number">{formatCurrency(analytics.totalWithdrawals)}</span>
          <span className="stat-label">Total Withdrawals</span>
        </div>
        <div className="stat-item">
          <span className="stat-number">{analytics.pendingTransactions}</span>
          <span className="stat-label">Pending Transactions</span>
        </div>
        <div className="stat-item revenue">
          <span className="stat-number">{formatCurrency(analytics.totalRevenue)}</span>
          <span className="stat-label">Platform Revenue</span>
        </div>
        <div className="stat-item">
          <span className="stat-number">
            {formatRefreshTime(lastRefresh)}
          </span>
          <span className="stat-label">Last Refresh</span>
        </div>
      </div>

      <div className="admin-tabs">
        <button 
          className={`tab-button ${activeTab === "users" ? "active" : ""}`}
          onClick={() => setActiveTab("users")}
        >
          <FaUsers /> Users
        </button>
        <button 
          className={`tab-button ${activeTab === "transactions" ? "active" : ""}`}
          onClick={() => setActiveTab("transactions")}
        >
          <FaMoneyBill /> Transactions
        </button>
        <button 
          className={`tab-button ${activeTab === "chat" ? "active" : ""}`}
          onClick={() => setActiveTab("chat")}
        >
          <FaEnvelope /> Support Chat
        </button>
        <button 
          className={`tab-button ${activeTab === "analytics" ? "active" : ""}`}
          onClick={() => setActiveTab("analytics")}
        >
          <FaChartLine /> Analytics
        </button>
      </div>

      <div className="admin-content">
        {activeTab === "users" && (
          <div className="users-tab">
            <h2>User Management</h2>
            
            <div className="user-filters">
              <div className="search-box">
                <FaSearch />
                <input
                  type="text"
                  placeholder="Search users..."
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
                    className={activeFilter === "active" ? "active" : ""}
                    onClick={() => setActiveFilter("active")}
                  >
                    Active
                  </button>
                  <button 
                    className={activeFilter === "new" ? "active" : ""}
                    onClick={() => setActiveFilter("new")}
                  >
                    New
                  </button>
                </div>
              </div>
            </div>
            
            <div className="users-table-container">
              <table className="users-table">
                <thead>
                  <tr>
                    <th>User</th>
                    <th>Email</th>
                    <th>Balance</th>
                    <th>Gold</th>
                    <th>Status</th>
                    <th>Joined</th>
                    <th>Last Active</th>
                    <th>Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {users
                    .filter(user => {
                      if (!searchTerm) return true;
                      const term = searchTerm.toLowerCase();
                      return (
                        (user.fullName && user.fullName.toLowerCase().includes(term)) ||
                        (user.email && user.email.toLowerCase().includes(term)) ||
                        (user.id && user.id.toLowerCase().includes(term))
                      );
                    })
                    .map(user => (
                      <tr key={user.id}>
                        <td>
                          <div className="user-cell">
                            <div className="user-avatar-sm">
                              {getUserInitials(user.fullName || user.email)}
                            </div>
                            <div>
                              <div className="user-name">{user.fullName || "Unknown User"}</div>
                              <div className="user-id">ID: {user.id.substring(0, 8)}...</div>
                            </div>
                          </div>
                        </td>
                        <td>{user.email || "N/A"}</td>
                        <td>{formatCurrency(user.balance || 0)}</td>
                        <td>{user.goldBalance ? `${user.goldBalance.toFixed(4)}g` : "0g"}</td>
                        <td>
                          <span className={`status-indicator ${user.isOnline ? "online" : "offline"}`}>
                            {user.isOnline ? "Online" : "Offline"}
                          </span>
                        </td>
                        <td>{user.createdAt ? formatTime(user.createdAt) : "N/A"}</td>
                        <td>{user.lastActive ? formatTime(user.lastActive) : "N/A"}</td>
                        <td>
                          <div className="action-buttons">
                            <button className="btn-view">
                              <FaEye /> View
                            </button>
                            <button className="btn-edit">
                              <FaCog /> Edit
                            </button>
                          </div>
                        </td>
                      </tr>
                    ))
                  }
                </tbody>
              </table>
              
              {users.length === 0 && (
                <div className="no-data">
                  <FaUsers size={48} />
                  <p>No users found</p>
                </div>
              )}
            </div>
          </div>
        )}
        
        {activeTab === "transactions" && (
          <div className="transactions-tab">
            <h2>Transaction History</h2>
            
            <div className="transaction-filters">
              <div className="search-box">
                <FaSearch />
                <input
                  type="text"
                  placeholder="Search transactions..."
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
                    className={activeFilter === "deposit" ? "active" : ""}
                    onClick={() => setActiveFilter("deposit")}
                  >
                    Deposits
                  </button>
                  <button 
                    className={activeFilter === "withdrawal" ? "active" : ""}
                    onClick={() => setActiveFilter("withdrawal")}
                  >
                    Withdrawals
                  </button>
                </div>
              </div>
            </div>
            
            <div className="transactions-table-container">
              <table className="transactions-table">
                <thead>
                  <tr>
                    <th>User</th>
                    <th>Type</th>
                    <th>Amount</th>
                    <th>Gold</th>
                    <th>Date</th>
                    <th>Status</th>
                  </tr>
                </thead>
                <tbody>
                  {transactions
                    .filter(t => {
                      if (activeFilter === "all") return true;
                      return t.type === activeFilter;
                    })
                    .filter(t => {
                      if (!searchTerm) return true;
                      const term = searchTerm.toLowerCase();
                      return (
                        t.userId.toLowerCase().includes(term) ||
                        (t.userName && t.userName.toLowerCase().includes(term)) ||
                        t.type.toLowerCase().includes(term) ||
                        (t.amount && t.amount.toString().includes(term))
                      );
                    })
                    .map(transaction => (
                      <tr key={transaction.id}>
                        <td>
                          <div className="user-cell">
                            <div className="user-avatar-sm">
                              {getUserInitials(transaction.userName || "Unknown User")}
                            </div>
                            <div>
                              <div className="user-name">{transaction.userName || "Unknown User"}</div>
                              <div className="user-id">ID: {transaction.userId.substring(0, 8)}...</div>
                            </div>
                          </div>
                        </td>
                        <td>
                          <span className={`transaction-type ${transaction.type}`}>
                            {transaction.type}
                          </span>
                        </td>
                        <td>{formatCurrency(transaction.amount)}</td>
                        <td>{transaction.goldAmount ? `${transaction.goldAmount.toFixed(4)}g` : "N/A"}</td>
                        <td>{formatTime(transaction.timestamp)}</td>
                        <td>
                          <span className={`status-indicator ${transaction.status}`}>
                            {transaction.status}
                          </span>
                        </td>
                      </tr>
                    ))
                  }
                </tbody>
              </table>
              
              {transactions.length === 0 && (
                <div className="no-data">
                  <FaMoneyBill size={48} />
                  <p>No transactions found</p>
                </div>
              )}
            </div>
          </div>
        )}
        
        {activeTab === "chat" && (
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
        )}
        
        {activeTab === "analytics" && (
          <div className="analytics-tab">
            <h2>Platform Analytics</h2>
            
            <div className="analytics-grid">
              <div className="analytics-card">
                <div className="analytics-header">
                  <h3>User Growth</h3>
                  <FaUsers className="analytics-icon" />
                </div>
                <div className="analytics-content">
                  <div className="stat-big">{analytics.totalUsers}</div>
                  <div className="stat-label">Total Registered Users</div>
                  <div className="stat-trend">
                    <span className="trend-up">+12% this month</span>
                  </div>
                </div>
              </div>
              
              <div className="analytics-card">
                <div className="analytics-header">
                  <h3>Active Users</h3>
                  <FaUserCheck className="analytics-icon" />
                </div>
                <div className="analytics-content">
                  <div className="stat-big">{analytics.activeToday}</div>
                  <div className="stat-label">Active Today</div>
                  <div className="stat-trend">
                    <span className="trend-up">+5% from yesterday</span>
                  </div>
                </div>
              </div>
              
              <div className="analytics-card">
                <div className="analytics-header">
                  <h3>Revenue</h3>
                  <FaCoins className="analytics-icon" />
                </div>
                <div className="analytics-content">
                  <div className="stat-big">{formatCurrency(analytics.totalDeposits)}</div>
                  <div className="stat-label">Total Deposits</div>
                  <div className="stat-trend">
                    <span className="trend-up">+8% this week</span>
                  </div>
                </div>
              </div>
              
              <div className="analytics-card">
                <div className="analytics-header">
                  <h3>Withdrawals</h3>
                  <FaMoneyBill className="analytics-icon" />
                </div>
                <div className="analytics-content">
                  <div className="stat-big">{formatCurrency(analytics.totalWithdrawals)}</div>
                  <div className="stat-label">Total Withdrawals</div>
                  <div className="stat-trend">
                    <span className="trend-down">-3% this week</span>
                  </div>
                </div>
              </div>

              <div className="analytics-card">
                <div className="analytics-header">
                  <h3>Net Revenue</h3>
                  <FaChartLine className="analytics-icon" />
                </div>
                <div className="analytics-content">
                  <div className="stat-big">{formatCurrency(analytics.totalRevenue)}</div>
                  <div className="stat-label">Platform Profit</div>
                  <div className="stat-trend">
                    <span className="trend-up">+15% this month</span>
                  </div>
                </div>
              </div>

              <div className="analytics-card">
                <div className="analytics-header">
                  <h3>Pending Actions</h3>
                  <FaClock className="analytics-icon" />
                </div>
                <div className="analytics-content">
                  <div className="stat-big">{analytics.pendingTransactions}</div>
                  <div className="stat-label">Pending Transactions</div>
                  <div className="stat-trend">
                    <span className="trend-neutral">No change</span>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="charts-container">
              <div className="chart-card">
                <h3>User Growth Over Time</h3>
                <div className="chart-placeholder">
                  <FaChartBar size={48} />
                  <p>User growth chart will be displayed here</p>
                </div>
              </div>
              
              <div className="chart-card">
                <h3>Revenue vs Withdrawals</h3>
                <div className="chart-placeholder">
                  <FaChartLine size={48} />
                  <p>Revenue comparison chart will be displayed here</p>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>

      <style jsx>{`
        .admin-dashboard {
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
          margin: 5px 0 0;
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
          border-radius: 5px;
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
          color: #7f8c8d;
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
        
        .stat-item.revenue {
          background: linear-gradient(135deg, #4CAF50 0%, #2E7D32 100%);
          color: white;
        }
        
        .stat-item.revenue .stat-number,
        .stat-item.revenue .stat-label {
          color: white;
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
        
        .admin-tabs {
          display: flex;
          gap: 10px;
          margin-bottom: 20px;
          background: white;
          border-radius: 10px;
          padding: 10px;
          box-shadow: 0 2px 10px rgba(0,0,0,0.05);
        }
        
        .tab-button {
          padding: 12px 20px;
          background: none;
          border: none;
          border-radius: 5px;
          cursor: pointer;
          display: flex;
          align-items: center;
          gap: 8px;
          font-size: 14px;
          color: #7f8c8d;
        }
        
        .tab-button.active {
          background: #3498db;
          color: white;
        }
        
        .admin-content {
          background: white;
          border-radius: 10px;
          padding: 20px;
          box-shadow: 0 2px 10px rgba(0,0,0,0.05);
          min-height: 500px;
        }
        
        .admin-content h2 {
          margin-top: 0;
          color: #2c3e50;
          padding-bottom: 15px;
          border-bottom: 1px solid #eee;
        }
        
        .transaction-filters, .user-filters {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 20px;
          gap: 15px;
        }
        
        .search-box {
          position: relative;
          flex: 1;
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
          padding: 10px 10px 10px 40px;
          border: 1px solid #ddd;
          border-radius: 5px;
          font-size: 14px;
        }
        
        .filter-buttons {
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
        
        .transactions-table-container, .users-table-container {
          overflow-x: auto;
          border-radius: 8px;
          border: 1px solid #eee;
        }
        
        .transactions-table, .users-table {
          width: 100%;
          border-collapse: collapse;
        }
        
        .transactions-table th, .users-table th {
          background: #f8f9fa;
          padding: 12px 15px;
          text-align: left;
          font-weight: 600;
          color: #2c3e50;
          border-bottom: 1px solid #eee;
        }
        
        .transactions-table td, .users-table td {
          padding: 12px 15px;
          border-bottom: 1px solid #f1f3f4;
          color: #2c3e50;
        }
        
        .transactions-table tr:hover, .users-table tr:hover {
          background: #f8f9fa;
        }
        
        .user-cell {
          display: flex;
          align-items: center;
          gap: 10px;
        }
        
        .user-avatar-sm {
          width: 36px;
          height: 36px;
          border-radius: 50%;
          background: #3498db;
          color: white;
          display: flex;
          align-items: center;
          justify-content: center;
          font-weight: bold;
          font-size: 14px;
          flex-shrink: 0;
        }
        
        .user-name {
          font-weight: 500;
        }
        
        .user-id {
          font-size: 12px;
          color: #7f8c8d;
        }
        
        .transaction-type {
          padding: 4px 8px;
          border-radius: 4px;
          font-size: 12px;
          font-weight: 500;
        }
        
        .transaction-type.deposit {
          background: #d4edda;
          color: #155724;
        }
        
        .transaction-type.withdrawal {
          background: #f8d7da;
          color: #721c24;
        }
        
        .status-indicator {
          display: inline-flex;
          align-items: center;
          padding: 4px 8px;
          border-radius: 12px;
          font-size: 12px;
          font-weight: 500;
        }
        
        .status-indicator.pending {
          background: #fff3cd;
          color: #856404;
        }
        
        .status-indicator.completed {
          background: #d4edda;
          color: #155724;
        }
        
        .status-indicator.rejected {
          background: #f8d7da;
          color: #721c24;
        }
        
        .status-indicator.online {
          background: #d4edda;
          color: #155724;
        }
        
        .status-indicator.offline {
          background: #f8d7da;
          color: #721c24;
        }
        
        .action-buttons {
          display: flex;
          gap: 8px;
        }
        
        .btn-view, .btn-edit {
          padding: 6px 10px;
          border: none;
          border-radius: 4px;
          cursor: pointer;
          font-size: 12px;
          display: flex;
          align-items: center;
          gap: 4px;
        }
        
        .btn-view, .btn-edit {
          background: #e2e3e5;
          color: #383d41;
        }
        
        .no-data {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          padding: 40px;
          color: #7f8c8d;
          text-align: center;
        }
        
        .no-data svg {
          margin-bottom: 15px;
          opacity: 0.5;
        }
        
        .analytics-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
          gap: 20px;
          margin-bottom: 30px;
        }
        
        .analytics-card {
          background: #f8f9fa;
          border-radius: 10px;
          padding: 20px;
          box-shadow: 0 2px 5px rgba(0,0,0,0.05);
        }
        
        .analytics-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 15px;
        }
        
        .analytics-header h3 {
          margin: 0;
          color: #2c3e50;
          font-size: 16px;
        }
        
        .analytics-icon {
          color: #3498db;
          font-size: 20px;
        }
        
        .analytics-content {
          text-align: center;
        }
        
        .stat-big {
          font-size: 32px;
          font-weight: bold;
          color: #2c3e50;
          margin-bottom: 5px;
        }
        
        .stat-label {
          font-size: 14px;
          color: #7f8c8d;
          margin-bottom: 10px;
        }
        
        .stat-trend {
          font-size: 12px;
        }
        
        .trend-up {
          color: #28a745;
        }
        
        .trend-down {
          color: #dc3545;
        }
        
        .trend-neutral {
          color: #6c757d;
        }
        
        .charts-container {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
          gap: 20px;
        }
        
        .chart-card {
          background: #f8f9fa;
          border-radius: 10px;
          padding: 20px;
          box-shadow: 0 2px 5px rgba(0,0,0,0.05);
        }
        
        .chart-card h3 {
          margin-top: 0;
          color: #2c3e50;
        }
        
        .chart-placeholder {
          height: 200px;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          background: white;
          border-radius: 8px;
          color: #7f8c8d;
        }
        
        .chart-placeholder svg {
          margin-bottom: 15px;
          opacity: 0.5;
        }
        
        /* Chat styles */
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
          font-size: 极4px;
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
        
        .conversation-header h4 {
          margin: 0;
          font-size: 14px;
          color: #2c3e50;
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
        }
        
        .conversation-time {
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
          width: 50极;
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
         极ustify-content: center;
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
          padding: 10极 20px;
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
        
        .no-conversation-selected svg {
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
          border-top: 4px极 #3498db;
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
          
          .admin-tabs {
            overflow-x: auto;
            white-space: nowrap;
          }
          
          .transaction-filters, .user-filters {
            flex-direction: column;
            align-items: flex-start;
          }
          
          .action-buttons {
            flex-direction: column;
          }
          
          .charts-container {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </div>
  );
};

export default AdminDashboard;