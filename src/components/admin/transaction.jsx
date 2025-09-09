import React, { useState, useEffect } from "react";
import { 
  collection, query, orderBy, onSnapshot, 
  updateDoc, doc, where, getDocs, writeBatch
} from "firebase/firestore";
import { db } from "../../firebase";
import { 
  FaSearch, FaCheck, FaTimes, FaUser, FaMoneyBill, 
  FaHistory, FaFilter, FaDownload, FaCalendar,
  FaChartBar, FaArrowUp, FaArrowDown, FaMoneyCheckAlt,
  FaIdCard, FaClock, FaEye, FaCoins, FaWallet
} from "react-icons/fa";

const TransactionApprovalDashboard = () => {
  const [activeTab, setActiveTab] = useState("pending");
  const [transactions, setTransactions] = useState([]);
  const [users, setUsers] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [filterStatus, setFilterStatus] = useState("all");
  const [filterType, setFilterType] = useState("all");
  const [dateRange, setDateRange] = useState({ start: "", end: "" });
  const [selectedUser, setSelectedUser] = useState(null);
  const [loading, setLoading] = useState(true);
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

  const fetchTransactions = async () => {
    try {
      setLoading(true);
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
      const transactionRef = doc(db, "transactions", transaction.id);
      await updateDoc(transactionRef, { 
        status: "completed",
        approvedAt: new Date(),
        approvedBy: "admin"
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
      
      fetchTransactions();
    } catch (error) {
      console.error("Error approving transaction:", error);
    }
  };

  const rejectTransaction = async (transaction) => {
    try {
      const transactionRef = doc(db, "transactions", transaction.id);
      await updateDoc(transactionRef, { 
        status: "rejected",
        rejectedAt: new Date(),
        rejectedBy: "admin"
      });
      
      // If it's a withdrawal that was previously deducted, refund the user
      if (transaction.type === "withdrawal" && transaction.status === "pending") {
        const userRef = doc(db, "users", transaction.userId);
        const userDoc = await getDoc(userRef);
        
        if (userDoc.exists()) {
          const userData = userDoc.data();
          const newBalance = (userData.balance || 0) + transaction.amount;
          
          await updateDoc(userRef, {
            balance: newBalance
          });
        }
      }
      
      fetchTransactions();
    } catch (error) {
      console.error("Error rejecting transaction:", error);
    }
  };

  const bulkApprove = async (transactionIds) => {
    try {
      const batch = writeBatch(db);
      
      for (const id of transactionIds) {
        const transactionRef = doc(db, "transactions", id);
        batch.update(transactionRef, { 
          status: "completed",
          approvedAt: new Date(),
          approvedBy: "admin"
        });
      }
      
      await batch.commit();
      fetchTransactions();
    } catch (error) {
      console.error("Error bulk approving transactions:", error);
    }
  };

  const filteredTransactions = transactions.filter(transaction => {
    // Status filter
    if (activeTab !== "all" && transaction.status !== activeTab) return false;
    
    // Search term filter
    if (searchTerm) {
      const term = searchTerm.toLowerCase();
      return (
        transaction.userId.toLowerCase().includes(term) ||
        (transaction.userName && transaction.userName.toLowerCase().includes(term)) ||
        transaction.type.toLowerCase().includes(term) ||
        (transaction.amount && transaction.amount.toString().includes(term))
      );
    }
    
    // Type filter
    if (filterType !== "all" && transaction.type !== filterType) return false;
    
    // Date range filter
    if (dateRange.start && transaction.timestamp) {
      const transactionDate = transaction.timestamp.toDate();
      const startDate = new Date(dateRange.start);
      const endDate = dateRange.end ? new Date(dateRange.end) : new Date();
      
      if (transactionDate < startDate || transactionDate > endDate) return false;
    }
    
    return true;
  });

  const formatCurrency = (amount) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD'
    }).format(amount || 0);
  };

  const formatDate = (timestamp) => {
    if (!timestamp) return "";
    try {
      const date = timestamp.toDate();
      return date.toLocaleDateString() + " " + date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
    } catch (error) {
      return "";
    }
  };

  const getUserDetails = (userId) => {
    return users.find(user => user.id === userId) || {};
  };

  const getUserInitials = (name) => {
    if (!name) return "U";
    return name.split(' ')
      .map(part => part[0])
      .join('')
      .toUpperCase()
      .substring(0, 2);
  };

  if (loading) {
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
        <h1>Transaction Approval Dashboard</h1>
        <p>Manage and approve user transactions</p>
      </div>

      <div className="stats-grid">
        <div className="stat-card">
          <div className="stat-icon pending">
            <FaClock />
          </div>
          <div className="stat-content">
            <h3>{stats.pending}</h3>
            <p>Pending Transactions</p>
          </div>
        </div>
        
        <div className="stat-card">
          <div className="stat-icon approved">
            <FaCheck />
          </div>
          <div className="stat-content">
            <h3>{stats.approved}</h3>
            <p>Approved Transactions</p>
          </div>
        </div>
        
        <div className="stat-card">
          <div className="stat-icon rejected">
            <FaTimes />
          </div>
          <div className="stat-content">
            <h3>{stats.rejected}</h3>
            <p>Rejected Transactions</p>
          </div>
        </div>
        
        <div className="stat-card">
          <div className="stat-icon total">
            <FaMoneyBill />
          </div>
          <div className="stat-content">
            <h3>{stats.total}</h3>
            <p>Total Transactions</p>
          </div>
        </div>
        
        <div className="stat-card">
          <div className="stat-icon amount">
            <FaCoins />
          </div>
          <div className="stat-content">
            <h3>{formatCurrency(stats.totalAmount)}</h3>
            <p>Total Amount</p>
          </div>
        </div>
      </div>

      <div className="controls-row">
        <div className="search-box">
          <FaSearch />
          <input
            type="text"
            placeholder="Search transactions..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
        
        <div className="filter-group">
          <div className="filter-item">
            <label>Type:</label>
            <select value={filterType} onChange={(e) => setFilterType(e.target.value)}>
              <option value="all">All Types</option>
              <option value="deposit">Deposits</option>
              <option value="withdrawal">Withdrawals</option>
            </select>
          </div>
          
          <div className="filter-item">
            <label>From:</label>
            <input
              type="date"
              value={dateRange.start}
              onChange={(e) => setDateRange({...dateRange, start: e.target.value})}
            />
          </div>
          
          <div className="filter-item">
            <label>To:</label>
            <input
              type="date"
              value={dateRange.end}
              onChange={(e) => setDateRange({...dateRange, end: e.target.value})}
            />
          </div>
        </div>
      </div>

      <div className="tabs-container">
        <div className="tabs">
          <button 
            className={`tab ${activeTab === "pending" ? "active" : ""}`}
            onClick={() => setActiveTab("pending")}
          >
            Pending ({stats.pending})
          </button>
          <button 
            className={`tab ${activeTab === "completed" ? "active" : ""}`}
            onClick={() => setActiveTab("completed")}
          >
            Approved ({stats.approved})
          </button>
          <button 
            className={`tab ${activeTab === "rejected" ? "active" : ""}`}
            onClick={() => setActiveTab("rejected")}
          >
            Rejected ({stats.rejected})
          </button>
          <button 
            className={`tab ${activeTab === "all" ? "active" : ""}`}
            onClick={() => setActiveTab("all")}
          >
            All Transactions
          </button>
        </div>
      </div>

      <div className="transactions-container">
        <div className="transactions-list">
          <h2>{activeTab.charAt(0).toUpperCase() + activeTab.slice(1)} Transactions</h2>
          
          {filteredTransactions.length === 0 ? (
            <div className="empty-state">
              <FaMoneyBill size={48} />
              <p>No transactions found</p>
              <span>Try adjusting your search or filters</span>
            </div>
          ) : (
            <table className="transactions-table">
              <thead>
                <tr>
                  <th>User</th>
                  <th>Type</th>
                  <th>Amount</th>
                  <th>Gold</th>
                  <th>Date</th>
                  <th>Status</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {filteredTransactions.map(transaction => (
                  <tr key={transaction.id}>
                    <td>
                      <div className="user-cell">
                        <div className="user-avatar">
                          {getUserInitials(transaction.userName)}
                        </div>
                        <div>
                          <div className="user-name">{transaction.userName || "Unknown User"}</div>
                          <div className="user-id">ID: {transaction.userId}</div>
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
                    <td>{formatDate(transaction.timestamp)}</td>
                    <td>
                      <span className={`status status-${transaction.status}`}>
                        {transaction.status}
                      </span>
                    </td>
                    <td>
                      {transaction.status === "pending" && (
                        <div className="action-buttons">
                          <button 
                            className="btn-approve"
                            onClick={() => approveTransaction(transaction)}
                          >
                            <FaCheck /> Approve
                          </button>
                          <button 
                            className="btn-reject"
                            onClick={() => rejectTransaction(transaction)}
                          >
                            <FaTimes /> Reject
                          </button>
                        </div>
                      )}
                      {transaction.status !== "pending" && (
                        <span className="processed-info">
                          Processed by Admin
                        </span>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          )}
        </div>

        <div className="user-details-panel">
          <h2>User Details</h2>
          
          {selectedUser ? (
            <div className="user-details">
              <div className="user-header">
                <div className="user-avatar-large">
                  {getUserInitials(selectedUser.fullName || selectedUser.email)}
                </div>
                <div>
                  <h3>{selectedUser.fullName || "Unknown User"}</h3>
                  <p>{selectedUser.email || "No email"}</p>
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
              
              <div className="user-transactions">
                <h4>Recent Transactions</h4>
                {transactions
                  .filter(t => t.userId === selectedUser.id)
                  .slice(0, 5)
                  .map(transaction => (
                    <div key={transaction.id} className="user-transaction">
                      <div className="transaction-info">
                        <span className={`type ${transaction.type}`}>{transaction.type}</span>
                        <span className="amount">{formatCurrency(transaction.amount)}</span>
                      </div>
                      <div className="transaction-meta">
                        <span className="date">{formatDate(transaction.timestamp)}</span>
                        <span className={`status status-${transaction.status}`}>{transaction.status}</span>
                      </div>
                    </div>
                  ))
                }
              </div>
            </div>
          ) : (
            <div className="select-user-prompt">
              <FaUser size={48} />
              <p>Select a user to view details</p>
              <span>Click on a transaction to view user information</span>
            </div>
          )}
        </div>
      </div>

      <style jsx>{`
        .transaction-approval-dashboard {
          padding: 20px;
          background: #f5f7fa;
          min-height: 100vh;
        }
        
        .dashboard-header {
          margin-bottom: 20px;
        }
        
        .dashboard-header h1 {
          margin: 0;
          color: #2c3e50;
        }
        
        .dashboard-header p {
          margin: 5px 0 0;
          color: #7f8c8d;
        }
        
        .stats-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
          gap: 15px;
          margin-bottom: 20px;
        }
        
        .stat-card {
          background: white;
          border-radius: 10px;
          padding: 20px;
          display: flex;
          align-items: center;
          box-shadow: 0 2px 10px rgba(0,0,0,0.05);
        }
        
        .stat-icon {
          width: 50px;
          height: 50px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          margin-right: 15px;
          font-size: 20px;
          color: white;
        }
        
        .stat-icon.pending {
          background: #ffc107;
        }
        
        .stat-icon.approved {
          background: #28a745;
        }
        
        .stat-icon.rejected {
          background: #dc3545;
        }
        
        .stat-icon.total {
          background: #17a2b8;
        }
        
        .stat-icon.amount {
          background: #6f42c1;
        }
        
        .stat-content h3 {
          margin: 0;
          font-size: 24px;
          color: #2c3e50;
        }
        
        .stat-content p {
          margin: 5px 0 0;
          color: #7f8c8d;
          font-size: 14px;
        }
        
        .controls-row {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 20px;
          gap: 15px;
          flex-wrap: wrap;
        }
        
        .search-box {
          position: relative;
          flex: 1;
          min-width: 250px;
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
        
        .filter-group {
          display: flex;
          gap: 15px;
          align-items: center;
          flex-wrap: wrap;
        }
        
        .filter-item {
          display: flex;
          align-items: center;
          gap: 8px;
        }
        
        .filter-item label {
          font-size: 14px;
          color: #2c3e50;
          font-weight: 500;
        }
        
        .filter-item select, .filter-item input {
          padding: 8px 12px;
          border: 1px solid #ddd;
          border-radius: 5px;
          font-size: 14px;
        }
        
        .tabs-container {
          margin-bottom: 20px;
        }
        
        .tabs {
          display: flex;
          background: white;
          border-radius: 8px;
          overflow: hidden;
          box-shadow: 0 2px 5px rgba(0,0,0,0.05);
        }
        
        .tab {
          padding: 12px 20px;
          background: none;
          border: none;
          cursor: pointer;
          font-size: 14px;
          font-weight: 500;
          color: #7f8c8d;
          flex: 1;
          transition: all 0.3s ease;
        }
        
        .tab.active {
          background: #3498db;
          color: white;
        }
        
        .transactions-container {
          display: flex;
          gap: 20px;
        }
        
        .transactions-list {
          flex: 1;
          background: white;
          border-radius: 10px;
          padding: 20px;
          box-shadow: 0 2px 10px rgba(0,0,0,0.05);
        }
        
        .transactions-list h2 {
          margin-top: 0;
          color: #2c3e50;
          padding-bottom: 15px;
          border-bottom: 1px solid #eee;
        }
        
        .transactions-table {
          width: 100%;
          border-collapse: collapse;
        }
        
        .transactions-table th {
          background: #f8f9fa;
          padding: 12px 15px;
          text-align: left;
          font-weight: 600;
          color: #2c3e50;
          border-bottom: 1px solid #eee;
        }
        
        .transactions-table td {
          padding: 12px 15px;
          border-bottom: 1px solid #f1f3f4;
          color: #2c3e50;
        }
        
        .transactions-table tr:hover {
          background: #f8f9fa;
        }
        
        .user-cell {
          display: flex;
          align-items: center;
          gap: 10px;
        }
        
        .user-avatar {
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
        
        .status {
          padding: 4px 8px;
          border-radius: 12px;
          font-size: 12px;
          font-weight: 500;
        }
        
        .status-pending {
          background: #fff3cd;
          color: #856404;
        }
        
        .status-completed {
          background: #d4edda;
          color: #155724;
        }
        
        .status-rejected {
          background: #f8d7da;
          color: #721c24;
        }
        
        .action-buttons {
          display: flex;
          gap: 8px;
        }
        
        .btn-approve, .btn-reject {
          padding: 6px 10px;
          border: none;
          border-radius: 4px;
          cursor: pointer;
          font-size: 12px;
          display: flex;
          align-items: center;
          gap: 4px;
        }
        
        .btn-approve {
          background: #d4edda;
          color: #155724;
        }
        
        .btn-reject {
          background: #f8d7da;
          color: #721c24;
        }
        
        .processed-info {
          font-size: 12px;
          color: #7f8c8d;
        }
        
        .empty-state {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          padding: 40px;
          color: #7f8c8d;
          text-align: center;
        }
        
        .empty-state svg {
          margin-bottom: 15px;
          opacity: 0.5;
        }
        
        .user-details-panel {
          width: 350px;
          background: white;
          border-radius: 10px;
          padding: 20px;
          box-shadow: 0 2px 10px rgba(0,0,0,0.05);
        }
        
        .user-details-panel h2 {
          margin-top: 0;
          color: #2c3e50;
          padding-bottom: 15px;
          border-bottom: 1px solid #eee;
        }
        
        .user-header {
          display: flex;
          align-items: center;
          gap: 15px;
          margin-bottom: 20px;
        }
        
        .user-avatar-large {
          width: 60px;
          height: 60px;
          border-radius: 50%;
          background: #3498db;
          color: white;
          display: flex;
          align-items: center;
          justify-content: center;
          font-weight: bold;
          font-size: 20px;
          flex-shrink: 0;
        }
        
        .user-header h3 {
          margin: 0;
          color: #2c3e50;
        }
        
        .user-header p {
          margin: 5px 0 0;
          color: #7f8c8d;
        }
        
        .user-stats {
          margin-bottom: 20px;
        }
        
        .user-stat {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 10px 0;
          border-bottom: 1px solid #f1f3f4;
        }
        
        .user-stat:last-child {
          border-bottom: none;
        }
        
        .stat-label {
          font-weight: 500;
          color: #2c3e50;
        }
        
        .stat-value {
          color: #7f8c8d;
        }
        
        .user-transactions h4 {
          margin: 0 0 15px;
          color: #2c3e50;
        }
        
        .user-transaction {
          padding: 10px 0;
          border-bottom: 1px solid #f1f3f4;
        }
        
        .user-transaction:last-child {
          border-bottom: none;
        }
        
        .transaction-info {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 5px;
        }
        
        .transaction-meta {
          display: flex;
          justify-content: space-between;
          align-items: center;
          font-size: 12px;
          color: #7f8c8d;
        }
        
        .select-user-prompt {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          height: 300px;
          color: #7f8c8d;
          text-align: center;
        }
        
        .select-user-prompt svg {
          margin-bottom: 15px;
          opacity: 0.5;
        }
        
        .loading-container {
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
        
        @keyframes spin {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }
        
        @media (max-width: 992px) {
          .transactions-container {
            flex-direction: column;
          }
          
          .user-details-panel {
            width: 100%;
          }
          
          .controls-row {
            flex-direction: column;
            align-items: flex-start;
          }
          
          .search-box {
            width: 100%;
          }
        }
      `}</style>
    </div>
  );
};

export default TransactionApprovalDashboard;