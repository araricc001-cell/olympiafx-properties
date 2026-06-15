// src/pages/BuyLand.jsx
import PageHeader from "../components/PageHeader";
import LandLeadForm from "../components/LandLeadForm";
import { whatsappLink } from "../config/siteConfig";
import "./FormPage.css";

const BuyLand = () => {
  return (
    <>
      <PageHeader
        label="Pathway 01"
        title="I want to buy land"
        subtitle="Tell us a little about what you're looking for and we'll match you with verified plots that fit your location, size, and budget."
      />

      <section className="section form-page">
        <div className="container form-page-inner">
          <LandLeadForm />

          <div className="form-page-side">
            <h3>Prefer to chat directly?</h3>
            <p>
              If you'd rather speak with us right away, message us on
              WhatsApp and we'll respond as quickly as possible.
            </p>
            <a
              href={whatsappLink("Hello, I'm interested in buying land. Can you help?")}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-outline"
            >
              Chat on WhatsApp
            </a>
          </div>
        </div>
      </section>
    </>
  );
};

export default BuyLand;
