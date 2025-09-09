import React, { useState, useEffect, useRef } from "react";
import { FaSyncAlt, FaArrowUp, FaArrowDown, FaClock } from "react-icons/fa";

const RealtimeGoldPrice = () => {
  const [price, setPrice] = useState(null);
  const [previousPrice, setPreviousPrice] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [currency, setCurrency] = useState("USD");
  const [priceHistory, setPriceHistory] = useState([]);
  const [lastUpdated, setLastUpdated] = useState(null);

  const priceRef = useRef();
  const retryTimeoutRef = useRef();

  // 🔑 API key
  const API_KEY = "f369cba8b4f18e797805679cfb09562b";

  const fetchGoldPrice = async () => {
    try {
      setLoading(true);
      setError(null);

      const response = await fetch(
        `https://api.metalpriceapi.com/v1/latest?api_key=${API_KEY}&base=XAU&currencies=${currency}`
      );

      if (!response.ok) throw new Error(`API Error: ${response.status}`);

      const data = await response.json();
      const newPrice = data.rates[currency];

      if (priceRef.current) {
        priceRef.current.classList.add("price-updating");
        setTimeout(() => {
          if (price !== null) setPreviousPrice(price);
          setPrice(newPrice);
          setLastUpdated(new Date());
          priceRef.current.classList.remove("price-updating");
        }, 500);
      } else {
        setPrice(newPrice);
        setLastUpdated(new Date());
      }

      setPriceHistory((prev) => {
        const newHistory = [...prev, { price: newPrice, timestamp: new Date() }];
        return newHistory.slice(-20);
      });
    } catch (err) {
      setError("Failed to fetch gold prices. Try again later.");
      console.error("Error fetching gold price:", err);
      if (retryTimeoutRef.current) clearTimeout(retryTimeoutRef.current);
      retryTimeoutRef.current = setTimeout(() => fetchGoldPrice(), 10000);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchGoldPrice();
    // Limit: 70 calls/month ≈ every 12 hours
    const interval = setInterval(fetchGoldPrice, 43200000);

    return () => {
      clearInterval(interval);
      if (retryTimeoutRef.current) clearTimeout(retryTimeoutRef.current);
    };
  }, [currency]);

  const calculateChange = () => {
    if (!previousPrice || price === null) return 0;
    return ((price - previousPrice) / previousPrice * 100).toFixed(2);
  };

  const formatCurrency = (value) => {
    if (value === null) return "--";
    return new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: currency,
      minimumFractionDigits: 2,
    }).format(value);
  };

  return (
    <div>
      {/* CSS inside component */}
      <style>{`
        body {
          background: #f9f9f9;
          font-family: "Poppins", sans-serif;
          display: flex;
          justify-content: center;
          padding: 20px;
        }

        .gold-card {
          background: white;
          border: 1px solid #e6c200;
          border-radius: 12px;
          padding: 24px;
          max-width: 420px;
          text-align: center;
          box-shadow: 0px 6px 18px rgba(0, 0, 0, 0.08);
          transition: transform 0.3s ease;
          margin: auto;
        }

        .gold-card:hover {
          transform: translateY(-4px);
          box-shadow: 0px 10px 24px rgba(0, 0, 0, 0.12);
        }

        .title {
          color: #333;
          font-size: 1.5rem;
          font-weight: 600;
          margin-bottom: 20px;
        }

        .price {
          font-size: 2.4rem;
          font-weight: bold;
          color: #b8860b; /* Darker premium gold */
          transition: all 0.4s ease;
        }

        .price-updating {
          transform: scale(1.08);
          color: #e6c200;
        }

        .change {
          font-size: 1rem;
          margin: 12px 0;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 6px;
        }

        .change.up {
          color: #1a8f3b;
        }

        .change.down {
          color: #c0392b;
        }

        .timestamp {
          font-size: 0.85rem;
          color: #666;
          margin-top: 12px;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 6px;
        }

        .refresh-btn {
          margin-top: 18px;
          padding: 10px 16px;
          background: #b8860b;
          border: none;
          border-radius: 6px;
          font-weight: 500;
          cursor: pointer;
          color: white;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 8px;
          transition: all 0.3s ease;
        }

        .refresh-btn:hover {
          background: #e6c200;
        }

        .error {
          color: #c0392b;
          font-weight: 500;
        }

        .loading {
          color: #b8860b;
          font-weight: 500;
        }
      `}</style>

      <div className="gold-card">
        <h2 className="title">Gold Price Tracker</h2>
        {loading && <p className="loading">Loading...</p>}
        {error && <p className="error">{error}</p>}
        {!loading && price !== null && (
          <div>
            <h3 ref={priceRef} className="price">
              {formatCurrency(price)}
            </h3>
            {previousPrice !== null && (
              <p
                className={`change ${price >= previousPrice ? "up" : "down"}`}
              >
                {price >= previousPrice ? (
                  <FaArrowUp />
                ) : (
                  <FaArrowDown />
                )}
                {formatCurrency(Math.abs(price - previousPrice))} (
                {calculateChange()}%)
              </p>
            )}
            <p className="timestamp">
              <FaClock />{" "}
              {lastUpdated && lastUpdated.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })}
            </p>
           
          </div>
        )}
      </div>
    </div>
  );
};

export default RealtimeGoldPrice;
