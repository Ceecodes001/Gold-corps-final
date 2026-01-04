import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FaCoins, FaArrowRight, FaCheck } from 'react-icons/fa';

const GOLD_PLANS = [
  {
    id: 1,
    name: "BEGINNERS PLAN",
    profitPercent: 5,
    min: 200,
    max: 19900,
    duration: 7,
    description: "Perfect for beginners starting with gold investment",
    features: ["Low minimum investment", "Quick returns", "Ideal for newcomers", "24/7 Support"]
  },
  {
    id: 2,
    name: "MASTERS PLAN", 
    profitPercent: 30,
    min: 20000,
    max: 999999,
    duration: 14,
    description: "Ideal for consistent wealth accumulation",
    features: ["Higher returns", "Medium-term investment", "Portfolio tracking", "Priority support"]
  },
  {
    id: 3,
    name: "PREMIUM PLAN",
    profitPercent: 50,
    min: 1000000,
    max: Infinity,
    duration: 30,
    description: "For premium investors building a substantial portfolio",
    features: ["Maximum returns", "Long-term growth", "VIP support", "Portfolio management", "Dedicated advisor"]
  }
];

const GoldPlansSection = () => {
  const navigate = useNavigate();
  const [selectedPlan, setSelectedPlan] = useState(null);

  const handlePlanSelect = (plan) => {
    setSelectedPlan(plan);
    sessionStorage.setItem('selectedGoldPlan', JSON.stringify(plan));
    navigate('/signup');
  };

  return (
    <section className="gold-plans-section" id="investment-plans">
      <div className="container">
        <div className="section-header">
          <h2>Exclusive Gold Investment Plans</h2>
          <p>Build your legacy with our premium gold investment opportunities</p>
        </div>

        <div className="gold-plans-container">
          {GOLD_PLANS.map(plan => (
            <div key={plan.id} className="gold-plan-card">
              <div className="plan-badge">
                <FaCoins className="plan-icon" />
                <span className="profit-badge">{plan.profitPercent}% Returns</span>
              </div>
              
              <h3 className="plan-title">{plan.name}</h3>
              
              <div className="plan-price-range">
                ${plan.min.toLocaleString()} - {plan.max === Infinity ? 'Custom' : `$${plan.max.toLocaleString()}`}
              </div>
              
              <div className="plan-duration">
                <span className="duration-label">Term:</span> {plan.duration} days
              </div>
              
              <p className="plan-description">{plan.description}</p>
               
              
              <div className="plan-actions">
                <button 
                  className="btn-primary plan-select-btn"
                  onClick={() => handlePlanSelect(plan)}
                >
                  Start Investing <FaArrowRight />
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="plans-footer">
          <p>💎 All investments are backed by physical gold reserves</p>
        </div>
      </div>

      <style jsx>{`
        .gold-plans-section {
          padding: 100px 0;
          background: linear-gradient(135deg, #0D0D0D 0%, #1a1a1a 100%);
          position: relative;
          overflow: hidden;
        }

        .gold-plans-section::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          height: 1px;
          background: linear-gradient(90deg, transparent, #FFD700, transparent);
        }

        .container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 20px;
          position: relative;
          z-index: 2;
        }

        .section-header {
          text-align: center;
          margin-bottom: 80px;
        }

        .section-header h2 {
          font-size: 3rem;
          font-weight: 700;
          margin-bottom: 20px;
          background: linear-gradient(90deg, #FFD700, #DAA520, #B8860B, #FFD700);
          background-size: 300% 300%;
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          animation: goldShimmer 4s ease infinite;
          letter-spacing: 1px;
        }

        .section-header p {
          font-size: 1.3rem;
          color: #ccc;
          max-width: 600px;
          margin: 0 auto;
          line-height: 1.6;
        }

        @keyframes goldShimmer {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }

        .gold-plans-container {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(380px, 1fr));
          gap: 40px;
          margin-bottom: 60px;
        }

        .gold-plan-card {
          background: linear-gradient(145deg, #1a1a1a 0%, #2d2d2d 100%);
          padding: 50px 35px;
          border-radius: 20px;
          text-align: center;
          transition: all 0.4s cubic-bezier(0.25, 0.8, 0.25, 1);
          border: 1px solid rgba(255, 215, 0, 0.15);
          position: relative;
          overflow: hidden;
          box-shadow: 0 8px 32px rgba(0, 0, 0, 0.3);
        }

        .gold-plan-card::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          height: 4px;
          background: linear-gradient(90deg, #FFD700, #DAA520, #B8860B);
        }

        .gold-plan-card::after {
          content: '';
          position: absolute;
          top: 0;
          left: -100%;
          width: 100%;
          height: 100%;
          background: linear-gradient(90deg, transparent, rgba(255, 215, 0, 0.05), transparent);
          transition: left 0.6s ease;
        }

        .gold-plan-card:hover {
          transform: translateY(-12px);
          border-color: #FFD700;
          box-shadow: 0 20px 50px rgba(255, 215, 0, 0.15);
        }

        .gold-plan-card:hover::after {
          left: 100%;
        }

        .plan-badge {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 12px;
          margin-bottom: 25px;
        }

        .plan-icon {
          font-size: 28px;
          color: #FFD700;
          filter: drop-shadow(0 2px 8px rgba(255, 215, 0, 0.3));
        }

        .profit-badge {
          background: linear-gradient(90deg, rgba(255, 215, 0, 0.15), rgba(218, 165, 32, 0.15));
          color: #FFD700;
          padding: 8px 18px;
          border-radius: 25px;
          font-size: 15px;
          font-weight: 600;
          border: 1px solid rgba(255, 215, 0, 0.3);
          backdrop-filter: blur(10px);
        }

        .plan-title {
          font-size: 1.8rem;
          font-weight: 700;
          color: #FFD700;
          margin-bottom: 20px;
          letter-spacing: 1px;
        }

        .plan-price-range {
          font-size: 2.2rem;
          font-weight: 800;
          color: #fff;
          margin-bottom: 15px;
          text-shadow: 0 2px 10px rgba(255, 255, 255, 0.1);
        }

        .plan-duration {
          color: #ccc;
          font-size: 1.1rem;
          margin-bottom: 25px;
          font-weight: 500;
        }

        .duration-label {
          color: #FFD700;
        }

        .plan-description {
          color: #aaa;
          margin-bottom: 30px;
          line-height: 1.6;
          font-size: 1.05rem;
        }

        .plan-features {
          margin-bottom: 40px;
          text-align: left;
        }

        .feature-item {
          display: flex;
          align-items: center;
          margin-bottom: 15px;
          color: #fff;
          font-weight: 500;
          font-size: 1rem;
        }

        .feature-icon {
          color: #27ae60;
          margin-right: 15px;
          font-size: 14px;
          flex-shrink: 0;
        }

        .plan-actions {
          display: flex;
          justify-content: center;
        }

        .btn-primary {
          padding: 16px 35px;
          background: linear-gradient(90deg, #FFD700, #DAA520);
          color: #1a1a1a;
          border: none;
          border-radius: 12px;
          cursor: pointer;
          transition: all 0.3s ease;
          font-weight: 700;
          font-size: 1.1rem;
          display: flex;
          align-items: center;
          gap: 10px;
          box-shadow: 0 6px 25px rgba(255, 215, 0, 0.3);
          text-transform: uppercase;
          letter-spacing: 0.5px;
        }

        .btn-primary:hover {
          transform: translateY(-3px);
          box-shadow: 0 10px 35px rgba(255, 215, 0, 0.5);
          background: linear-gradient(90deg, #DAA520, #FFD700);
        }

        .plans-footer {
          text-align: center;
          padding: 25px;
          background: rgba(255, 215, 0, 0.05);
          border-radius: 15px;
          border: 1px solid rgba(255, 215, 0, 0.1);
          backdrop-filter: blur(10px);
        }

        .plans-footer p {
          color: #FFD700;
          font-size: 1.1rem;
          margin: 0;
          font-weight: 600;
        }

        /* Responsive Design */
        @media (max-width: 968px) {
          .gold-plans-container {
            grid-template-columns: 1fr;
            gap: 30px;
          }

          .section-header h2 {
            font-size: 2.5rem;
          }
        }

        @media (max-width: 768px) {
          .gold-plans-section {
            padding: 80px 0;
          }

          .section-header h2 {
            font-size: 2.2rem;
          }

          .gold-plan-card {
            padding: 40px 25px;
          }

          .plan-price-range {
            font-size: 1.8rem;
          }
        }

        @media (max-width: 480px) {
          .container {
            padding: 0 15px;
          }

          .section-header h2 {
            font-size: 1.8rem;
          }

          .gold-plan-card {
            padding: 30px 20px;
          }

          .plan-price-range {
            font-size: 1.6rem;
          }

          .btn-primary {
            width: 100%;
            justify-content: center;
          }
        }
      `}</style>
    </section>
  );
};

export default GoldPlansSection;