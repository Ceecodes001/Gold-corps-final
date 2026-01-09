import React, { useState, useEffect } from "react";
import { 
  collection, query, orderBy, onSnapshot, 
  updateDoc, doc, where, getDocs, writeBatch, getDoc
} from "firebase/firestore";
import { db } from "../../firebase";
import { 
  FaSearch, FaCheck, FaTimes, FaUser, FaMoneyBill, 
  FaHistory, FaFilter, FaDownload, FaCalendar,
  FaChartBar, FaArrowUp, FaArrowDown, FaMoneyCheckAlt,
  FaIdCard, FaClock, FaEye, FaCoins, FaWallet,
  FaExclamationTriangle, FaSync, FaUserCheck, FaTrash, FaEdit
} from "react-icons/fa";

const TransactionApprovalDashboard = () => {
  const [activeTab, setActiveTab] = useState("pending");
  const [transactions, setTransactions] = useState([]);
  const [users, setUsers] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [filterType, setFilterType] = useState("all");
  const [dateRange, setDateRange] = useState({ start: "", end: "" });
  const [selectedUser, setSelectedUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [selectedTransaction, setSelectedTransaction] = useState(null);
  const [refreshing, setRefreshing] = useState(false);
  const [stats, setStats] = useState({
    pending: 0,
    approved: 0,
    rejected: 0,
    total: 0,
    totalAmount: 0
  });

  useEffect(() => {
    fetchTransactions();
    fetchUsers();
  }, []);

  // Real-time subscription for transactions
  useEffect(() => {
    if (loading) return;
    
    const q = query(collection(db, "transactions"), orderBy("timestamp", "desc"));
    const unsubscribe = onSnapshot(q, (querySnapshot) => {
      const transactionsData = [];
      querySnapshot.forEach((doc) => {
        transactionsData.push({ id: doc.id, ...doc.data() });
      });
      
      setTransactions(transactionsData);
      calculateStats(transactionsData);
      setRefreshing(false);
    }, (error) => {
      console.error("Error listening to transactions:", error);
      setError("Failed to load real-time transactions. Please refresh.");
    });

    return () => unsubscribe();
  }, [loading]);

  const fetchTransactions = async () => {
    try {
      setLoading(true);
      setError(null);
      const q = query(collection(db, "transactions"), orderBy("timestamp", "desc"));
      const querySnapshot = await getDocs(q);
      
      const transactionsData = [];
      querySnapshot.forEach((doc) => {
        transactionsData.push({ id: doc.id, ...doc.data() });
      });
      
      setTransactions(transactionsData);
      calculateStats(transactionsData);
    } catch (error) {
      console.error("Error fetching transactions:", error);
      setError("Failed to load transactions. Please check your connection.");
    } finally {
      setLoading(false);
    }
  };

  const fetchUsers = async () => {
    try {
      const q = query(collection(db, "users"));
      const querySnapshot = await getDocs(q);
      
      const usersData = [];
      querySnapshot.forEach((doc) => {
        usersData.push({ id: doc.id, ...doc.data() });
      });
      
      setUsers(usersData);
    } catch (error) {
      console.error("Error fetching users:", error);
    }
  };

  const calculateStats = (transactionsData) => {
    const pending = transactionsData.filter(t => t.status === "pending").length;
    const approved = transactionsData.filter(t => t.status === "completed").length;
    const rejected = transactionsData.filter(t => t.status === "rejected").length;
    const total = transactionsData.length;
    const totalAmount = transactionsData.reduce((sum, t) => sum + (t.amount || 0), 0);
    
    setStats({ pending, approved, rejected, total, totalAmount });
  };

  const approveTransaction = async (transaction) => {
    try {
      setError(null);
      const transactionRef = doc(db, "transactions", transaction.id);
      await updateDoc(transactionRef, { 
        status: "completed",
        approvedAt: new Date(),
        approvedBy: "admin",
        processedAt: new Date()
      });
      
      // If it's a deposit, update user balance
      if (transaction.type === "deposit") {
        const userRef = doc(db, "users", transaction.userId);
        const userDoc = await getDoc(userRef);
        
        if (userDoc.exists()) {
          const userData = userDoc.data();
          const newBalance = (userData.balance || 0) + transaction.amount;
          const newGoldBalance = (userData.goldBalance || 0) + (transaction.goldAmount || 0);
          
          await updateDoc(userRef, {
            balance: newBalance,
            goldBalance: newGoldBalance
          });
        }
      }
      
      // Show success message
      setSelectedTransaction({...transaction, status: "completed"});
      
    } catch (error) {
      console.error("Error approving transaction:", error);
      setError("Failed to approve transaction. Please try again.");
    }
  };

  const rejectTransaction = async (transaction) => {
    try {
      setError(null);
      const reason = prompt("Please enter reason for rejection:", "Transaction rejected by admin");
      if (reason === null) return; // User cancelled
      
      const transactionRef = doc(db, "transactions", transaction.id);
      await updateDoc(transactionRef, { 
        status: "rejected",
        rejectedAt: new Date(),
        rejectedBy: "admin",
        rejectionReason: reason,
        processedAt: new Date()
      });
      
      // Show success message
      setSelectedTransaction({...transaction, status: "rejected"});
      
    } catch (error) {
      console.error("Error rejecting transaction:", error);
      setError("Failed to reject transaction. Please try again.");
    }
  };

  const bulkApprove = async (selectedTransactions) => {
    try {
      setError(null);
      if (!window.confirm(`Are you sure you want to approve ${selectedTransactions.length} transactions?`)) {
        return;
      }

      const batch = writeBatch(db);
      
      for (const transaction of selectedTransactions) {
        const transactionRef = doc(db, "transactions", transaction.id);
        batch.update(transactionRef, { 
          status: "completed",
          approvedAt: new Date(),
          approvedBy: "admin",
          processedAt: new Date()
        });
        
        // If it's a deposit, we would need to handle user balance updates
        // This would require additional logic to process deposits in bulk
      }
      
      await batch.commit();
      
    } catch (error) {
      console.error("Error bulk approving transactions:", error);
      setError("Failed to bulk approve transactions. Please try again.");
    }
  };

  const filteredTransactions = transactions.filter(transaction => {
    // Status filter
    if (activeTab !== "all" && transaction.status !== activeTab) return false;
    
    // Search term filter
    if (searchTerm) {
      const term = searchTerm.toLowerCase();
      return (
        (transaction.userId && transaction.userId.toLowerCase().includes(term)) ||
        (transaction.userName && transaction.userName.toLowerCase().includes(term)) ||
        (transaction.type && transaction.type.toLowerCase().includes(term)) ||
        (transaction.amount && transaction.amount.toString().includes(term)) ||
        (transaction.id && transaction.id.toLowerCase().includes(term))
      );
    }
    
    // Type filter
    if (filterType !== "all" && transaction.type !== filterType) return false;
    
    // Date range filter
    if (dateRange.start && transaction.timestamp) {
      try {
        const transactionDate = transaction.timestamp.toDate();
        const startDate = new Date(dateRange.start);
        startDate.setHours(0, 0, 0, 0);
        
        const endDate = dateRange.end ? new Date(dateRange.end) : new Date();
        endDate.setHours(23, 59, 59, 999);
        
        if (transactionDate < startDate || transactionDate > endDate) return false;
      } catch (e) {
        console.error("Error parsing date:", e);
        return true; // Skip date filter if there's an error
      }
    }
    
    return true;
  });

  const formatCurrency = (amount) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 2
    }).format(amount || 0);
  };

  const formatDate = (timestamp) => {
    if (!timestamp) return "";
    try {
      const date = timestamp.toDate();
      const now = new Date();
      const diffInHours = (now - date) / (1000 * 60 * 60);
      
      if (diffInHours < 24) {
        return `Today, ${date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}`;
      } else if (diffInHours < 48) {
        return `Yesterday, ${date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}`;
      } else {
        return date.toLocaleDateString([], { 
          month: 'short', 
          day: 'numeric',
          hour: '2-digit', 
          minute: '2-digit' 
        });
      }
    } catch (error) {
      return "";
    }
  };

  const getUserDetails = (userId) => {
    return users.find(user => user.id === userId) || {};
  };

  const getUserInitials = (name) => {
    if (!name || name === "Unknown User") return "U";
    return name.split(' ')
      .map(part => part[0])
      .join('')
      .toUpperCase()
      .substring(0, 2);
  };

  const handleRefresh = () => {
    setRefreshing(true);
    fetchTransactions();
    fetchUsers();
  };

  const handleTransactionClick = (transaction) => {
    setSelectedTransaction(transaction);
    const user = getUserDetails(transaction.userId);
    setSelectedUser(user);
  };

  const exportTransactions = () => {
    const csvData = filteredTransactions.map(t => ({
      ID: t.id,
      User: t.userName || "Unknown",
      Type: t.type,
      Amount: t.amount,
      Gold: t.goldAmount || 0,
      Status: t.status,
      Date: formatDate(t.timestamp),
      UserID: t.userId
    }));

    const csvHeaders = Object.keys(csvData[0] || {}).join(',');
    const csvRows = csvData.map(row => Object.values(row).join(','));
    const csvContent = [csvHeaders, ...csvRows].join('\n');

    const blob = new Blob([csvContent], { type: 'text/csv' });
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `transactions_${new Date().toISOString().split('T')[0]}.csv`;
    a.click();
    window.URL.revokeObjectURL(url);
  };

  const clearFilters = () => {
    setSearchTerm("");
    setFilterType("all");
    setDateRange({ start: "", end: "" });
  };

  if (loading && transactions.length === 0) {
    return (
      <div className="loading-container">
        <div className="loading-spinner"></div>
        <p>Loading transactions...</p>
      </div>
    );
  }

  return (
    <div className="transaction-approval-dashboard">
      <div className="dashboard-header">
        <div className="header-content">
          <h1>Transaction Approval Dashboard</h1>
          <p>Manage and approve user transactions in real-time</p>
        </div>
        <div className="header-actions">
          <button 
            className="btn-refresh"
            onClick={handleRefresh}
            disabled={refreshing}
          >
            <FaSync className={refreshing ? "spinning" : ""} /> 
            {refreshing ? "Refreshing..." : "Refresh"}
          </button>
          <button 
            className="btn-export"
            onClick={exportTransactions}
            disabled={filteredTransactions.length === 0}
          >
            <FaDownload /> Export CSV
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

      <div className="stats-grid">
        <div className="stat-card pending">
          <div className="stat-icon">
            <FaClock />
          </div>
          <div className="stat-content">
            <h3>{stats.pending}</h3>
            <p>Pending</p>
          </div>
        </div>
        
        <div className="stat-card approved">
          <div className="stat-icon">
            <FaCheck />
          </div>
          <div className="stat-content">
            <h3>{stats.approved}</h3>
            <p>Approved</p>
          </div>
        </div>
        
        <div className="stat-card rejected">
          <div className="stat-icon">
            <FaTimes />
          </div>
          <div className="stat-content">
            <h3>{stats.rejected}</h3>
            <p>Rejected</p>
          </div>
        </div>
        
        <div className="stat-card total">
          <div className="stat-icon">
            <FaMoneyBill />
          </div>
          <div className="stat-content">
            <h3>{stats.total}</h3>
            <p>Total</p>
          </div>
        </div>
        
        <div className="stat-card amount">
          <div className="stat-icon">
            <FaCoins />
          </div>
          <div className="stat-content">
            <h3>{formatCurrency(stats.totalAmount)}</h3>
            <p>Total Amount</p>
          </div>
        </div>
      </div>

      <div className="controls-card">
        <div className="controls-header">
          <h3>Filters & Search</h3>
          <button 
            className="btn-clear"
            onClick={clearFilters}
          >
            Clear Filters
          </button>
        </div>
        
        <div className="controls-content">
          <div className="search-box">
            <FaSearch />
            <input
              type="text"
              placeholder="Search by user, amount, ID..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
          
          <div className="filter-group">
            <div className="filter-item">
              <label>Transaction Type:</label>
              <select value={filterType} onChange={(e) => setFilterType(e.target.value)}>
                <option value="all">All Types</option>
                <option value="deposit">Deposits</option>
                <option value="withdrawal">Withdrawals</option>
              </select>
            </div>
            
            <div className="filter-item">
              <label>Date Range:</label>
              <div className="date-inputs">
                <input
                  type="date"
                  value={dateRange.start}
                  onChange={(e) => setDateRange({...dateRange, start: e.target.value})}
                  placeholder="Start date"
                />
                <span>to</span>
                <input
                  type="date"
                  value={dateRange.end}
                  onChange={(e) => setDateRange({...dateRange, end: e.target.value})}
                  placeholder="End date"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="tabs-container">
        <div className="tabs">
          <button 
            className={`tab ${activeTab === "pending" ? "active" : ""}`}
            onClick={() => setActiveTab("pending")}
          >
            <FaClock /> Pending <span className="tab-count">{stats.pending}</span>
          </button>
          <button 
            className={`tab ${activeTab === "completed" ? "active" : ""}`}
            onClick={() => setActiveTab("completed")}
          >
            <FaCheck /> Approved <span className="tab-count">{stats.approved}</span>
          </button>
          <button 
            className={`tab ${activeTab === "rejected" ? "active" : ""}`}
            onClick={() => setActiveTab("rejected")}
          >
            <FaTimes /> Rejected <span className="tab-count">{stats.rejected}</span>
          </button>
          <button 
            className={`tab ${activeTab === "all" ? "active" : ""}`}
            onClick={() => setActiveTab("all")}
          >
            <FaHistory /> All <span className="tab-count">{stats.total}</span>
          </button>
        </div>
      </div>

      <div className="content-container">
        <div className="transactions-card">
          <div className="card-header">
            <h2>{activeTab.charAt(0).toUpperCase() + activeTab.slice(1)} Transactions</h2>
            <div className="card-info">
              <span className="count-badge">{filteredTransactions.length} transactions</span>
              {activeTab === "pending" && filteredTransactions.length > 0 && (
                <button 
                  className="btn-bulk-approve"
                  onClick={() => bulkApprove(filteredTransactions)}
                >
                  <FaCheck /> Bulk Approve All
                </button>
              )}
            </div>
          </div>
          
          {filteredTransactions.length === 0 ? (
            <div className="empty-state">
              <FaMoneyBill size={48} />
              <p>No transactions found</p>
              <span>Try adjusting your search or filters</span>
              <button 
                className="btn-clear"
                onClick={clearFilters}
              >
                Clear All Filters
              </button>
            </div>
          ) : (
            <div className="table-container">
              <table className="transactions-table">
                <thead>
                  <tr>
                    <th>User</th>
                    <th>Type</th>
                    <th>Amount</th>
                    <th>Date</th>
                    <th>Status</th>
                    <th>Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {filteredTransactions.map(transaction => (
                    <tr 
                      key={transaction.id}
                      className={`transaction-row ${selectedTransaction?.id === transaction.id ? 'selected' : ''}`}
                      onClick={() => handleTransactionClick(transaction)}
                    >
                      <td>
                        <div className="user-cell">
                          <div className="user-avatar">
                            {getUserInitials(transaction.userName)}
                          </div>
                          <div className="user-info">
                            <div className="user-name">{transaction.userName || "Unknown User"}</div>
                            <div className="user-id">{transaction.userId?.substring(0, 8)}...</div>
                          </div>
                        </div>
                      </td>
                      <td>
                        <span className={`transaction-type ${transaction.type}`}>
                          {transaction.type}
                          {transaction.type === "withdrawal" && transaction.status === "pending" && (
                            <span className="urgent-badge">!</span>
                          )}
                        </span>
                      </td>
                      <td>
                        <div className="amount-cell">
                          <span className="amount">{formatCurrency(transaction.amount)}</span>
                          {transaction.goldAmount > 0 && (
                            <span className="gold-amount">{transaction.goldAmount.toFixed(4)}g</span>
                          )}
                        </div>
                      </td>
                      <td>
                        <div className="date-cell">
                          {formatDate(transaction.timestamp)}
                        </div>
                      </td>
                      <td>
                        <span className={`status status-${transaction.status}`}>
                          {transaction.status}
                        </span>
                      </td>
                      <td>
                        {transaction.status === "pending" ? (
                          <div className="action-buttons">
                            <button 
                              className="btn-action btn-approve"
                              onClick={(e) => {
                                e.stopPropagation();
                                approveTransaction(transaction);
                              }}
                              title="Approve Transaction"
                            >
                              <FaCheck />
                            </button>
                            <button 
                              className="btn-action btn-reject"
                              onClick={(e) => {
                                e.stopPropagation();
                                rejectTransaction(transaction);
                              }}
                              title="Reject Transaction"
                            >
                              <FaTimes />
                            </button>
                          </div>
                        ) : (
                          <span className="processed-info">
                            {transaction.processedAt ? "Processed" : "Completed"}
                          </span>
                        )}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>

        <div className="details-card">
          <div className="card-header">
            <h2>Transaction Details</h2>
          </div>
          
          {selectedTransaction ? (
            <div className="details-content">
              <div className="transaction-details">
                <div className="detail-section">
                  <h3>Transaction Information</h3>
                  <div className="detail-grid">
                    <div className="detail-item">
                      <span className="detail-label">Transaction ID:</span>
                      <span className="detail-value">{selectedTransaction.id}</span>
                    </div>
                    <div className="detail-item">
                      <span className="detail-label">Type:</span>
                      <span className={`detail-value type-${selectedTransaction.type}`}>
                        {selectedTransaction.type}
                      </span>
                    </div>
                    <div className="detail-item">
                      <span className="detail-label">Amount:</span>
                      <span className="detail-value amount-large">
                        {formatCurrency(selectedTransaction.amount)}
                      </span>
                    </div>
                    <div className="detail-item">
                      <span className="detail-label">Gold Amount:</span>
                      <span className="detail-value">
                        {selectedTransaction.goldAmount ? `${selectedTransaction.goldAmount.toFixed(4)}g` : "N/A"}
                      </span>
                    </div>
                    <div className="detail-item">
                      <span className="detail-label">Status:</span>
                      <span className={`detail-value status-${selectedTransaction.status}`}>
                        {selectedTransaction.status}
                      </span>
                    </div>
                    <div className="detail-item">
                      <span className="detail-label">Date:</span>
                      <span className="detail-value">{formatDate(selectedTransaction.timestamp)}</span>
                    </div>
                  </div>
                </div>
                
                {selectedUser && (
                  <div className="detail-section">
                    <h3>User Information</h3>
                    <div className="user-header">
                      <div className="user-avatar-large">
                        {getUserInitials(selectedUser.fullName || selectedUser.email)}
                      </div>
                      <div className="user-info-large">
                        <div className="user-name-large">{selectedUser.fullName || "Unknown User"}</div>
                        <div className="user-email">{selectedUser.email || "No email"}</div>
                        <div className="user-id">ID: {selectedUser.id?.substring(0, 12)}...</div>
                      </div>
                    </div>
                    
                    <div className="user-stats">
                      <div className="user-stat">
                        <span className="stat-label">Balance:</span>
                        <span className="stat-value">{formatCurrency(selectedUser.balance || 0)}</span>
                      </div>
                      <div className="user-stat">
                        <span className="stat-label">Gold Balance:</span>
                        <span className="stat-value">{selectedUser.goldBalance ? `${selectedUser.goldBalance.toFixed(4)}g` : "0g"}</span>
                      </div>
                      <div className="user-stat">
                        <span className="stat-label">Joined:</span>
                        <span className="stat-value">{selectedUser.createdAt ? formatDate(selectedUser.createdAt) : "N/A"}</span>
                      </div>
                      <div className="user-stat">
                        <span className="stat-label">Last Active:</span>
                        <span className="stat-value">{selectedUser.lastActive ? formatDate(selectedUser.lastActive) : "N/A"}</span>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
          ) : (
            <div className="select-prompt">
              <FaEye size={48} />
              <p>Select a transaction to view details</p>
              <span>Click on any transaction row to see detailed information</span>
            </div>
          )}
        </div>
      </div>

      <style jsx>{`
        .transaction-approval-dashboard {
          padding: 20px;
          background: linear-gradient(135deg, #f5f7fa 0%, #e4e8f0 100%);
          min-height: 100vh;
          font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, sans-serif;
        }
        
        .dashboard-header {
          display: flex;
          justify-content: space-between;
          align-items: flex-start;
          margin-bottom: 24px;
          padding: 24px;
          background: white;
          border-radius: 16px;
          box-shadow: 0 4px 20px rgba(0,0,0,0.08);
        }
        
        .header-content h1 {
          margin: 0;
          color: #2c3e50;
          font-size: 28px;
          font-weight: 700;
        }
        
        .header-content p {
          margin: 8px 0 0;
          color: #7f8c8d;
          font-size: 15px;
        }
        
        .header-actions {
          display: flex;
          gap: 12px;
        }
        
        .btn-refresh, .btn-export {
          padding: 10px 20px;
          border: none;
          border-radius: 8px;
          cursor: pointer;
          display: flex;
          align-items: center;
          gap: 8px;
          font-size: 14px;
          font-weight: 500;
          transition: all 0.3s ease;
        }
        
        .btn-refresh {
          background: #3498db;
          color: white;
        }
        
        .btn-refresh:hover:not(:disabled) {
          background: #2980b9;
          transform: translateY(-1px);
        }
        
        .btn-refresh:disabled {
          opacity: 0.6;
          cursor: not-allowed;
        }
        
        .btn-export {
          background: #27ae60;
          color: white;
        }
        
        .btn-export:hover:not(:disabled) {
          background: #219653;
          transform: translateY(-1px);
        }
        
        .btn-export:disabled {
          opacity: 0.6;
          cursor: not-allowed;
        }
        
        .spinning {
          animation: spin 1s linear infinite;
        }
        
        .error-banner {
          display: flex;
          align-items: center;
          gap: 12px;
          padding: 16px 20px;
          background: linear-gradient(135deg, #ff6b6b 0%, #c0392b 100%);
          color: white;
          border-radius: 12px;
          margin-bottom: 24px;
          box-shadow: 0 4px 15px rgba(255, 107, 107, 0.2);
        }
        
        .error-banner button {
          margin-left: auto;
          background: none;
          border: none;
          font-size: 20px;
          cursor: pointer;
          color: white;
          opacity: 0.8;
        }
        
        .error-banner button:hover {
          opacity: 1;
        }
        
        .stats-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
          gap: 16px;
          margin-bottom: 24px;
        }
        
        .stat-card {
          background: white;
          border-radius: 16px;
          padding: 24px;
          display: flex;
          align-items: center;
          box-shadow: 0 4px 20px rgba(0,0,0,0.08);
          transition: all 0.3s ease;
          border: 2px solid transparent;
        }
        
        .stat-card:hover {
          transform: translateY(-2px);
          box-shadow: 0 8px 30px rgba(0,0,0,0.12);
        }
        
        .stat-card.pending {
          border-color: #ffc107;
        }
        
        .stat-card.approved {
          border-color: #28a745;
        }
        
        .stat-card.rejected {
          border-color: #dc3545;
        }
        
        .stat-card.total {
          border-color: #17a2b8;
        }
        
        .stat-card.amount {
          border-color: #6f42c1;
        }
        
        .stat-icon {
          width: 56px;
          height: 56px;
          border-radius: 12px;
          display: flex;
          align-items: center;
          justify-content: center;
          margin-right: 16px;
          font-size: 24px;
          color: white;
        }
        
        .stat-card.pending .stat-icon {
          background: linear-gradient(135deg, #ffc107 0%, #ff9800 100%);
        }
        
        .stat-card.approved .stat-icon {
          background: linear-gradient(135deg, #28a745 0%, #1e7e34 100%);
        }
        
        .stat-card.rejected .stat-icon {
          background: linear-gradient(135deg, #dc3545 0%, #c82333 100%);
        }
        
        .stat-card.total .stat-icon {
          background: linear-gradient(135deg, #17a2b8 0%, #117a8b 100%);
        }
        
        .stat-card.amount .stat-icon {
          background: linear-gradient(135deg, #6f42c1 0%, #5a32a3 100%);
        }
        
        .stat-content h3 {
          margin: 0;
          font-size: 28px;
          color: #2c3e50;
          font-weight: 700;
        }
        
        .stat-content p {
          margin: 8px 0 0;
          color: #7f8c8d;
          font-size: 14px;
          font-weight: 500;
        }
        
        .controls-card {
          background: white;
          border-radius: 16px;
          padding: 24px;
          margin-bottom: 24px;
          box-shadow: 0 4px 20px rgba(0,0,0,0.08);
        }
        
        .controls-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 20px;
        }
        
        .controls-header h3 {
          margin: 0;
          color: #2c3e50;
          font-size: 18px;
          font-weight: 600;
        }
        
        .btn-clear {
          padding: 8px 16px;
          background: #e9ecef;
          color: #495057;
          border: none;
          border-radius: 8px;
          cursor: pointer;
          font-size: 14px;
          font-weight: 500;
          transition: all 0.3s ease;
        }
        
        .btn-clear:hover {
          background: #dee2e6;
          transform: translateY(-1px);
        }
        
        .search-box {
          position: relative;
          margin-bottom: 20px;
        }
        
        .search-box svg {
          position: absolute;
          left: 16px;
          top: 50%;
          transform: translateY(-50%);
          color: #7f8c8d;
          font-size: 16px;
        }
        
        .search-box input {
          width: 100%;
          padding: 14px 14px 14px 48px;
          border: 2px solid #e9ecef;
          border-radius: 12px;
          font-size: 15px;
          transition: all 0.3s ease;
        }
        
        .search-box input:focus {
          outline: none;
          border-color: #3498db;
          box-shadow: 0 0 0 3px rgba(52, 152, 219, 0.1);
        }
        
        .filter-group {
          display: flex;
          gap: 24px;
          align-items: center;
          flex-wrap: wrap;
        }
        
        .filter-item {
          display: flex;
          align-items: center;
          gap: 12px;
          flex: 1;
          min-width: 200px;
        }
        
        .filter-item label {
          font-size: 14px;
          color: #2c3e50;
          font-weight: 600;
          min-width: 120px;
        }
        
        .filter-item select {
          flex: 1;
          padding: 12px;
          border: 2px solid #e9ecef;
          border-radius: 12px;
          font-size: 14px;
          background: white;
          transition: all 0.3s ease;
        }
        
        .filter-item select:focus {
          outline: none;
          border-color: #3498db;
          box-shadow: 0 0 0 3px rgba(52, 152, 219, 0.1);
        }
        
        .date-inputs {
          display: flex;
          align-items: center;
          gap: 12px;
          flex: 1;
        }
        
        .date-inputs input {
          flex: 1;
          padding: 12px;
          border: 2px solid #e9ecef;
          border-radius: 12px;
          font-size: 14px;
          transition: all 0.3s ease;
        }
        
        .date-inputs input:focus {
          outline: none;
          border-color: #3498db;
          box-shadow: 0 0 0 3px rgba(52, 152, 219, 0.1);
        }
        
        .date-inputs span {
          color: #7f8c8d;
          font-size: 14px;
        }
        
        .tabs-container {
          margin-bottom: 24px;
        }
        
        .tabs {
          display: flex;
          background: white;
          border-radius: 12px;
          overflow: hidden;
          box-shadow: 0 4px 20px rgba(0,0,0,0.08);
        }
        
        .tab {
          padding: 16px 24px;
          background: none;
          border: none;
          cursor: pointer;
          font-size: 15px;
          font-weight: 500;
          color: #7f8c8d;
          flex: 1;
          transition: all 0.3s ease;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 8px;
        }
        
        .tab:hover {
          background: #f8f9fa;
        }
        
        .tab.active {
          background: #3498db;
          color: white;
        }
        
        .tab-count {
          background: rgba(255, 255, 255, 0.2);
          padding: 2px 8px;
          border-radius: 12px;
          font-size: 12px;
          font-weight: 600;
        }
        
        .content-container {
          display: flex;
          gap: 24px;
        }
        
        .transactions-card, .details-card {
          background: white;
          border-radius: 16px;
          box-shadow: 0 4px 20px rgba(0,0,0,0.08);
          overflow: hidden;
        }
        
        .transactions-card {
          flex: 1;
        }
        
        .details-card {
          width: 400px;
        }
        
        .card-header {
          padding: 24px;
          border-bottom: 1px solid #e9ecef;
          display: flex;
          justify-content: space-between;
          align-items: center;
        }
        
        .card-header h2 {
          margin: 0;
          color: #2c3e50;
          font-size: 20px;
          font-weight: 600;
        }
        
        .card-info {
          display: flex;
          align-items: center;
          gap: 12px;
        }
        
        .count-badge {
          background: #e3f2fd;
          color: #1976d2;
          padding: 6px 12px;
          border-radius: 20px;
          font-size: 14px;
          font-weight: 500;
        }
        
        .btn-bulk-approve {
          padding: 8px 16px;
          background: linear-gradient(135deg, #28a745 0%, #1e7e34 100%);
          color: white;
          border: none;
          border-radius: 8px;
          cursor: pointer;
          font-size: 14px;
          font-weight: 500;
          display: flex;
          align-items: center;
          gap: 6px;
          transition: all 0.3s ease;
        }
        
        .btn-bulk-approve:hover {
          transform: translateY(-1px);
          box-shadow: 0 4px 15px rgba(40, 167, 69, 0.3);
        }
        
        .empty-state {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          padding: 60px 24px;
          color: #7f8c8d;
          text-align: center;
        }
        
        .empty-state svg {
          margin-bottom: 20px;
          opacity: 0.3;
        }
        
        .empty-state p {
          margin: 0 0 8px;
          font-size: 18px;
          font-weight: 500;
          color: #2c3e50;
        }
        
        .empty-state span {
          margin-bottom: 20px;
          font-size: 14px;
        }
        
        .table-container {
          overflow-x: auto;
          max-height: 600px;
          overflow-y: auto;
        }
        
        .transactions-table {
          width: 100%;
          border-collapse: collapse;
        }
        
        .transactions-table th {
          background: #f8f9fa;
          padding: 16px;
          text-align: left;
          font-weight: 600;
          color: #2c3e50;
          border-bottom: 1px solid #e9ecef;
          position: sticky;
          top: 0;
          z-index: 10;
        }
        
        .transactions-table td {
          padding: 16px;
          border-bottom: 1px solid #f1f3f4;
          color: #2c3e50;
          cursor: pointer;
          transition: all 0.2s ease;
        }
        
        .transaction-row:hover {
          background: #f8f9fa;
        }
        
        .transaction-row.selected {
          background: #e3f2fd;
          border-left: 4px solid #3498db;
        }
        
        .user-cell {
          display: flex;
          align-items: center;
          gap: 12px;
        }
        
        .user-avatar {
          width: 40px;
          height: 40px;
          border-radius: 50%;
          background: linear-gradient(135deg, #3498db 0%, #2c3e50 100%);
          color: white;
          display: flex;
          align-items: center;
          justify-content: center;
          font-weight: bold;
          font-size: 14px;
          flex-shrink: 0;
        }
        
        .user-info {
          display: flex;
          flex-direction: column;
        }
        
        .user-name {
          font-weight: 500;
          color: #2c3e50;
        }
        
        .user-id {
          font-size: 12px;
          color: #7f8c8d;
        }
        
        .transaction-type {
          padding: 6px 12px;
          border-radius: 20px;
          font-size: 12px;
          font-weight: 600;
          display: inline-flex;
          align-items: center;
          gap: 4px;
        }
        
        .transaction-type.deposit {
          background: linear-gradient(135deg, #d4edda 0%, #c3e6cb 100%);
          color: #155724;
        }
        
        .transaction-type.withdrawal {
          background: linear-gradient(135deg, #f8d7da 0%, #f5c6cb 100%);
          color: #721c24;
        }
        
        .urgent-badge {
          background: #dc3545;
          color: white;
          width: 18px;
          height: 18px;
          border-radius: 50%;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          font-size: 10px;
          font-weight: bold;
          margin-left: 4px;
        }
        
        .amount-cell {
          display: flex;
          flex-direction: column;
          gap: 4px;
        }
        
        .amount {
          font-weight: 600;
          color: #2c3e50;
          font-size: 15px;
        }
        
        .gold-amount {
          font-size: 12px;
          color: #f39c12;
          background: #fef9e7;
          padding: 2px 6px;
          border-radius: 4px;
          display: inline-block;
        }
        
        .date-cell {
          font-size: 13px;
          color: #7f8c8d;
        }
        
        .status {
          padding: 6px 12px;
          border-radius: 20px;
          font-size: 12px;
          font-weight: 600;
        }
        
        .status-pending {
          background: linear-gradient(135deg, #fff3cd 0%, #ffeaa7 100%);
          color: #856404;
        }
        
        .status-completed {
          background: linear-gradient(135deg, #d4edda 0%, #c3e6cb 100%);
          color: #155724;
        }
        
        .status-rejected {
          background: linear-gradient(135deg, #f8d7da 0%, #f5c6cb 100%);
          color: #721c24;
        }
        
        .action-buttons {
          display: flex;
          gap: 8px;
        }
        
        .btn-action {
          width: 36px;
          height: 36px;
          border: none;
          border-radius: 8px;
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 14px;
          transition: all 0.3s ease;
        }
        
        .btn-approve {
          background: linear-gradient(135deg, #28a745 0%, #1e7e34 100%);
          color: white;
        }
        
        .btn-approve:hover {
          transform: translateY(-2px);
          box-shadow: 0 4px 12px rgba(40, 167, 69, 0.3);
        }
        
        .btn-reject {
          background: linear-gradient(135deg, #dc3545 0%, #c82333 100%);
          color: white;
        }
        
        .btn-reject:hover {
          transform: translateY(-2px);
          box-shadow: 0 4px 12px rgba(220, 53, 69, 0.3);
        }
        
        .processed-info {
          font-size: 12px;
          color: #7f8c8d;
          font-style: italic;
        }
        
        .details-content {
          padding: 24px;
          max-height: 600px;
          overflow-y: auto;
        }
        
        .detail-section {
          margin-bottom: 32px;
        }
        
        .detail-section:last-child {
          margin-bottom: 0;
        }
        
        .detail-section h3 {
          margin: 0 0 20px;
          color: #2c3e50;
          font-size: 16px;
          font-weight: 600;
          padding-bottom: 12px;
          border-bottom: 2px solid #e9ecef;
        }
        
        .detail-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 16px;
        }
        
        .detail-item {
          display: flex;
          flex-direction: column;
          gap: 4px;
        }
        
        .detail-label {
          font-size: 13px;
          color: #7f8c8d;
          font-weight: 500;
        }
        
        .detail-value {
          font-size: 15px;
          color: #2c3e50;
          font-weight: 500;
        }
        
        .type-deposit {
          color: #28a745;
          background: #d4edda;
          padding: 4px 8px;
          border-radius: 4px;
          display: inline-block;
        }
        
        .type-withdrawal {
          color: #dc3545;
          background: #f8d7da;
          padding: 4px 8px;
          border-radius: 4px;
          display: inline-block;
        }
        
        .amount-large {
          font-size: 20px;
          font-weight: 700;
          color: #2c3e50;
        }
        
        .status-pending {
          color: #856404;
          background: #fff3cd;
          padding: 4px 8px;
          border-radius: 4px;
          display: inline-block;
        }
        
        .status-completed {
          color: #155724;
          background: #d4edda;
          padding: 4px 8px;
          border-radius: 4px;
          display: inline-block;
        }
        
        .status-rejected {
          color: #721c24;
          background: #f8d7da;
          padding: 4px 8px;
          border-radius: 4px;
          display: inline-block;
        }
        
        .user-header {
          display: flex;
          align-items: center;
          gap: 16px;
          margin-bottom: 24px;
        }
        
        .user-avatar-large {
          width: 64px;
          height: 64px;
          border-radius: 16px;
          background: linear-gradient(135deg, #3498db 0%, #2c3e50 100%);
          color: white;
          display: flex;
          align-items: center;
          justify-content: center;
          font-weight: bold;
          font-size: 20px;
          flex-shrink: 0;
        }
        
        .user-info-large {
          flex: 1;
        }
        
        .user-name-large {
          font-size: 18px;
          font-weight: 600;
          color: #2c3e50;
          margin-bottom: 4px;
        }
        
        .user-email {
          font-size: 14px;
          color: #7f8c8d;
          margin-bottom: 4px;
        }
        
        .user-stats {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 16px;
        }
        
        .user-stat {
          display: flex;
          flex-direction: column;
          gap: 4px;
        }
        
        .stat-label {
          font-size: 13px;
          color: #7f8c8d;
          font-weight: 500;
        }
        
        .stat-value {
          font-size: 15px;
          color: #2c3e50;
          font-weight: 500;
        }
        
        .select-prompt {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          height: 400px;
          color: #7f8c8d;
          text-align: center;
          padding: 40px;
        }
        
        .select-prompt svg {
          margin-bottom: 20px;
          opacity: 0.3;
        }
        
        .select-prompt p {
          margin: 0 0 8px;
          font-size: 16px;
          font-weight: 500;
          color: #2c3e50;
        }
        
        .select-prompt span {
          font-size: 14px;
        }
        
        .loading-container {
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          height: 400px;
          color: #7f8c8d;
        }
        
        .loading-spinner {
          width: 50px;
          height: 50px;
          border: 4px solid #f3f3f3;
          border-top: 4px solid #3498db;
          border-radius: 50%;
          animation: spin 1s linear infinite;
          margin-bottom: 20px;
        }
        
        @keyframes spin {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }
        
        @media (max-width: 1200px) {
          .content-container {
            flex-direction: column;
          }
          
          .details-card {
            width: 100%;
          }
          
          .filter-group {
            flex-direction: column;
            align-items: flex-start;
          }
          
          .filter-item {
            width: 100%;
          }
        }
        
        @media (max-width: 768px) {
          .dashboard-header {
            flex-direction: column;
            gap: 16px;
          }
          
          .header-actions {
            width: 100%;
            justify-content: flex-end;
          }
          
          .stats-grid {
            grid-template-columns: repeat(2, 1fr);
          }
          
          .tabs {
            flex-wrap: wrap;
          }
          
          .tab {
            flex: 1 0 calc(50% - 2px);
          }
          
          .card-header {
            flex-direction: column;
            gap: 12px;
            align-items: flex-start;
          }
          
          .card-info {
            width: 100%;
            justify-content: space-between;
          }
          
          .detail-grid, .user-stats {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </div>
  );
};

export default TransactionApprovalDashboard;