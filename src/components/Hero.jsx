// src/components/Hero.jsx
import { Link } from "react-router-dom";
import "./Hero.css";

const Hero = () => {
  return (
    <section className="hero">
      <div className="container hero-inner">
        <div className="hero-text">
          <p className="section-label">Olympiafx Properties</p>
          <h1 className="hero-title">
            Find your land. <br />
            Build your home.
          </h1>
          <p className="hero-subtitle">
            Trusted, hands-on guidance for buying verified land or building a
            custom home from the ground up — wherever you are.
          </p>
        </div>

        <div className="hero-grid">
          <Link to="/buy-land" className="hero-card hero-card-land">
            <div className="hero-card-plot" aria-hidden="true">
              <svg viewBox="0 0 100 100" preserveAspectRatio="none">
                <line x1="0" y1="20" x2="100" y2="20" />
                <line x1="0" y1="40" x2="100" y2="40" />
                <line x1="0" y1="60" x2="100" y2="60" />
                <line x1="0" y1="80" x2="100" y2="80" />
                <line x1="20" y1="0" x2="20" y2="100" />
                <line x1="40" y1="0" x2="40" y2="100" />
                <line x1="60" y1="0" x2="60" y2="100" />
                <line x1="80" y1="0" x2="80" y2="100" />
              </svg>
            </div>
            <div className="hero-card-content">
              <span className="hero-card-eyebrow">Pathway 01</span>
              <h2 className="hero-card-title">I want to buy land</h2>
              <p className="hero-card-text">
                Tell us your preferred location, plot size, and budget — we'll
                match you with verified options.
              </p>
              <span className="hero-card-action">Start enquiry →</span>
            </div>
          </Link>

          <Link to="/build-home" className="hero-card hero-card-build">
            <div className="hero-card-plot" aria-hidden="true">
              <svg viewBox="0 0 100 100" preserveAspectRatio="none">
                <line x1="0" y1="20" x2="100" y2="20" />
                <line x1="0" y1="40" x2="100" y2="40" />
                <line x1="0" y1="60" x2="100" y2="60" />
                <line x1="0" y1="80" x2="100" y2="80" />
                <line x1="20" y1="0" x2="20" y2="100" />
                <line x1="40" y1="0" x2="40" y2="100" />
                <line x1="60" y1="0" x2="60" y2="100" />
                <line x1="80" y1="0" x2="80" y2="100" />
              </svg>
            </div>
            <div className="hero-card-content">
              <span className="hero-card-eyebrow">Pathway 02</span>
              <h2 className="hero-card-title">I want to build my home</h2>
              <p className="hero-card-text">
                Share your dream home specs, plot status, and budget — we'll
                bring it to life.
              </p>
              <span className="hero-card-action">Start enquiry →</span>
            </div>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Hero;
