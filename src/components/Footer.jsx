// src/components/Footer.jsx
import { SITE, whatsappLink } from "../config/siteConfig";
import "./Footer.css";

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container footer-inner">
        <div className="footer-brand">
          <span className="footer-brand-mark">O</span>
          <div>
            <p className="footer-brand-name">{SITE.brandName}</p>
            <p className="footer-tagline">Land. Homes. Honest guidance.</p>
          </div>
        </div>

        <div className="footer-contact">
          <a href={`mailto:${SITE.email}`} className="footer-link">
            {SITE.email}
          </a>
          <a href={`tel:${SITE.phone}`} className="footer-link">
            {SITE.phone}
          </a>
          <a
            href={whatsappLink()}
            target="_blank"
            rel="noopener noreferrer"
            className="footer-link footer-link-whatsapp"
          >
            Chat on WhatsApp
          </a>
        </div>

        <div className="footer-socials">
          <a href={SITE.socials.instagram} target="_blank" rel="noopener noreferrer" aria-label="Instagram">
            Instagram
          </a>
          <a href={SITE.socials.facebook} target="_blank" rel="noopener noreferrer" aria-label="Facebook">
            Facebook
          </a>
          <a href={SITE.socials.twitter} target="_blank" rel="noopener noreferrer" aria-label="Twitter">
            Twitter
          </a>
        </div>
      </div>

      <p className="footer-bottom">
        © {year} {SITE.brandName}. All rights reserved.
      </p>
    </footer>
  );
};

export default Footer;
