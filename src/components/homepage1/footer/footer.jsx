import React, { useEffect, useState } from "react";
import {
  FaAward,
  FaHandshake,
  FaGlobe,
  FaChartLine,
  FaUsers,
  FaChevronLeft,
  FaChevronRight,
  FaPlay,
} from "react-icons/fa";
import "./footer.css";
import { Link } from "react-router-dom";
import { Link as ScrollLink } from "react-scroll"; // 👈 import react-scroll
import GoldPlansSection from "../body-content/gold-plans";

const STATS = [
  {
    icon: <FaUsers />,
    label: "Trusted Investors",
    value: 3000,
    suffix: "+",
    sub: "Global investor community placing trust in our strategy",
    desc:
      "Thousands of investors choose Gold corps for long-term capital growth, risk-controlled exposure, and diversified access across assets.",
  },
  {
    icon: <FaChartLine />,
    label: "Employees",
    value: 5000,
    suffix: "",
    sub: "Experienced professionals powering global operations",
    desc:
      "A world-class team of geologists, traders, engineers and compliance experts committed to delivering measurable results.",
  },
  {
    icon: <FaGlobe />,
    label: "Countries",
    value: 6,
    suffix: "+",
    sub: "Strategic, jurisdiction-diverse footprint",
    desc:
      "Operations and partnerships across high-potential regions to capture premium resources and market access.",
  },
  {
    icon: <FaChartLine />,
    label: "Annual Growth",
    value: 80,
    suffix: "%",
    sub: "Sustained expansion through disciplined execution",
    desc:
      "Strong historical performance driven by portfolio quality and careful capital allocation.",
  },
];

const PARTNERS = [
  "Global Mining Consortium",
  "Frontier Capital Partners",
  "AgriGrowth International",
  "CryptoBridge Labs",
  "Sustainable Resources Alliance",
];

const TESTIMONIALS = [
  {
    quote:
      "Gold corps helped me diversify into real assets and crypto with clarity and confidence. Their team is responsive and deeply knowledgeable.",
    name: "Maria J. Finck",
    title: "Business Owner",
  },
  {
    quote:
      "From first contact to steady returns, Gold corps delivered tangible results. Their approach is conservative where it must be, bold where it counts.",
    name: "Hajime Omuro",
    title: "Operations Manager",
  },
  {
    quote:
      "I recommend Gold corps for any investor looking to combine sustainability with performance—transparent and trustworthy.",
    name: "James G. Wyatt",
    title: "Entrepreneur",
  },
];

function useCountUp(selector = ".stat-value", duration = 1200) {
  useEffect(() => {
    const els = document.querySelectorAll(selector);
    if (!els.length) return;

    els.forEach((el) => {
      const target = parseFloat(el.getAttribute("data-target")) || 0;
      const suffix = el.getAttribute("data-suffix") || "";
      const start = performance.now();

      const step = (now) => {
        const progress = Math.min((now - start) / duration, 1);
        const value = Math.floor(progress * target);
        el.textContent = `${value.toLocaleString()}${suffix}`;
        if (progress < 1) {
          requestAnimationFrame(step);
        } else {
          el.textContent = `${target.toLocaleString()}${suffix}`;
        }
      };
      requestAnimationFrame(step);
    });
  }, [selector, duration]);
}

export default function Landing() {
  const [index, setIndex] = useState(0);
  useEffect(() => {
    const t = setInterval(
      () => setIndex((i) => (i + 1) % TESTIMONIALS.length),
      6000
    );
    return () => clearInterval(t);
  }, []);

  useCountUp(".stat-value", 1200);

  const [email, setEmail] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Thanks — we'll reach out to ${email}`);
    setEmail("");
  };

  return (
    <main className="gold-landing">
      {/* HERO (Home) */}
      <header className="hero-section" id="home">
        <div className="hero-inner">
          <h1 className="hero-title">
            Gold Corps — Building Enduring Wealth Across Gold, Copper, Agriculture & Crypto
          </h1>
          <p className="hero-sub">
            Trusted by thousands across six countries, we blend resource expertise, trading precision,
            and sustainable practices to generate high-quality, long-term returns.
          </p>

          <div className="hero-cta">
             
            <button className="btn btn-outline">
              <FaPlay /> Watch Overview
            </button>
          </div>

          <div className="hero-stats">
            <div className="stat-inline">
              <span className="big">6+</span>
              <span className="label">Countries</span>
            </div>
            <div className="stat-inline">
              <span className="big">3,000+</span>
              <span className="label">Investors</span>
            </div>
            <div className="stat-inline">
              <span className="big">80%</span>
              <span className="label">Recent Growth</span>
            </div>
          </div>
        </div>
      </header>

      {/* Partner & Awards (About) */}
      <section className="partners-section" id="about">
        <div className="container">
          <h2>
            <FaAward className="icon" /> Partner Companies & Recognitions
          </h2>
          <p className="muted">
            Gold corps is recognized for innovation, transparency, and bridging traditional finance with the digital future.
            Our partners and award bodies span investment, sustainability and technology sectors.
          </p>

          <ul className="partner-list">
            {PARTNERS.map((p, i) => (
              <li key={i} className="partner-item">
                <span className="dot" /> {p}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Why Choose Us (Services) */}
      <section className="why-section" id="services">
        <div className="container split">
          <div className="col">
            <h2>
              <FaHandshake className="icon" /> Why Choose Gold corps
            </h2>
            <p className="muted">
              We combine disciplined capital allocation, deep technical knowledge, and a relentless focus on risk
              management — all aimed at creating durable capital appreciation and measurable social benefit.
            </p>

            <div className="features-grid">
              <div className="feature">
                <h3>Tailored Solutions</h3>
                <p>Personalised investment strategies aligned with your objectives and timeline.</p>
              </div>
              <div className="feature">
                <h3>Long-term Partnership</h3>
                <p>We invest alongside our clients and prioritize stability through cycles.</p>
              </div>
              <div className="feature">
                <h3>Active Opportunity Sourcing</h3>
                <p>Proprietary pipelines and global partnerships deliver differentiated deal flow.</p>
              </div>
              <div className="feature">
                <h3>24/7 Investor Support</h3>
                <p>Dedicated teams that act decisively whenever the market presents opportunity or risk.</p>
              </div>
            </div>
          </div>

          <aside className="col panel">
            <h3>Tailored for You</h3>
            <p>
              The deeper we understand your goals and constraints, the smarter we can allocate capital on your behalf —
              harvesting superior returns while managing downside exposure.
            </p>

            <div className="panel-list">
              <div>
                <strong>In Your Corner</strong>
                <p>We stand with investors through market cycles — protection and growth combined.</p>
              </div>
              <div>
                <strong>We Do the Work</strong>
                <p>Expert media buying and deal execution so your capital works efficiently.</p>
              </div>
              <div>
                <strong>Round-the-clock</strong>
                <p>Support across timezones and fast response for critical needs.</p>
              </div>
            </div>
          </aside>
        </div>
      </section>

      {/* Stats (Team) */}
      <section className="stats-section" id="team">
        <div className="container">
          <h2>
            <FaGlobe className="icon" /> Key Metrics & Performance
          </h2>
          <p className="muted">Performance that proves our strategy — clear metrics, transparent reporting.</p>

          <div className="stats-grid">
            {STATS.map((s, i) => (
              <div className="stat-card" key={i}>
                <div className="stat-icon">{s.icon}</div>
                <div
                  className="stat-value shimmer"
                  data-target={s.value}
                  data-suffix={s.suffix}
                  aria-label={`${s.value}${s.suffix}`}
                >
                  0
                </div>
                <div className="stat-label">{s.label}</div>
                <div className="stat-sub">{s.sub}</div>
                <div className="stat-desc muted">{s.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </section>



<GoldPlansSection />


      {/* Miners / Experience */}
      <section className="miners-section">
        <div className="container split">
          <div className="col">
            <h2>Our Miners — Reliability & Consistency</h2>
            <p className="muted">
              Since 2022, our mining and operations teams have consistently met investor obligations and optimized output
              across multiple sites.
            </p>
            <ul className="miner-list">
              <li><strong>Operational Excellence</strong> — Rigid maintenance and safety regimes ensure uptime and reliability.</li>
              <li><strong>Local Partnerships</strong> — Working with communities and regulators to ensure sustainable outcomes.</li>
              <li><strong>Transparent Payments</strong> — Reliable payouts and investor reporting are built into our processes.</li>
            </ul>
          </div>
          <aside className="col panel">
            <h3>Geographic Reach</h3>
            <div className="geo-grid">
              <div><strong>Latham</strong><span className="muted"> — Headquarters</span></div>
              <div><strong>Africa</strong><span className="muted"> — Resource operations</span></div>
              <div><strong>Asia</strong><span className="muted"> — Development & trading</span></div>
              <div><strong>Europe</strong><span className="muted"> — Finance & compliance</span></div>
              <div><strong>CIS</strong><span className="muted"> — Strategic partnerships</span></div>
            </div>
          </aside>
        </div>
      </section>

      {/* Testimonials */}
      <section className="testimonials-section" id="testimonial">
        <div className="container">
          <h2>
            <FaUsers className="icon" /> Investor Testimonials
          </h2>

          <div className="test-carousel">
            <button
              className="carousel-arrow left"
              onClick={() => setIndex((i) => (i - 1 + TESTIMONIALS.length) % TESTIMONIALS.length)}
              aria-label="Previous testimonial"
            >
              <FaChevronLeft />
            </button>

            <article className="testimonial-card" aria-live="polite">
              <blockquote>“{TESTIMONIALS[index].quote}”</blockquote>
              <cite>
                — {TESTIMONIALS[index].name}, <span className="muted">{TESTIMONIALS[index].title}</span>
              </cite>
            </article>

            <button
              className="carousel-arrow right"
              onClick={() => setIndex((i) => (i + 1) % TESTIMONIALS.length)}
              aria-label="Next testimonial"
            >
              <FaChevronRight />
            </button>
          </div>
        </div>
      </section>

      {/* CTA / Contact */}
      <section className="cta-section" id="contact">
        <div className="container cta-panel">
          <div>
            <h2>Let's Work Together</h2>
            <p className="muted">
              Our sustainability-driven business plan blends responsible mining, ethical trading, and long-term investor value.
              Join a select group of investors building something that lasts.
            </p>
          </div>

          <form className="cta-form" onSubmit={handleSubmit}>
            <label htmlFor="email" className="visually-hidden">Email address</label>
            <input
              id="email"
              type="email"
              placeholder="Enter your email"
              value={email}
              required
              onChange={(e) => setEmail(e.target.value)}
            />
            <button className="btn btn-primary" type="submit">Get a Quote</button>
          </form>
        </div>
      </section>

      {/* Footer */}
      <footer className="site-footer">
        <div className="container footer-grid">
          <div>
            <h4>Gold corps</h4>
            <p className="muted small">Multi-asset investing across gold, copper, agriculture & crypto.</p>
          </div>

          <div>
            <h5>Company</h5>
            <ul>
              <li><ScrollLink to="home" smooth={true} duration={600}>Home</ScrollLink></li>
              <li><ScrollLink to="about" smooth={true} duration={600}>About</ScrollLink></li>
              <li><ScrollLink to="services" smooth={true} duration={600}>Services</ScrollLink></li>
              <li><ScrollLink to="team" smooth={true} duration={600}>Team</ScrollLink></li>
              <li><ScrollLink to="testimonial" smooth={true} duration={600}>Testimonials</ScrollLink></li>
              <li><ScrollLink to="contact" smooth={true} duration={600}>Contact</ScrollLink></li>
            </ul>
          </div>

          <div>
          </div>
        </div>

        <div className="footer-bottom">
          <small>© {new Date().getFullYear()} Gold corps. All rights reserved.</small>
        </div>
      </footer>
    </main>
  );
}