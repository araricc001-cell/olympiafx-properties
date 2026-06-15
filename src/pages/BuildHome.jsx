// src/pages/BuildHome.jsx
import PageHeader from "../components/PageHeader";
import BuildLeadForm from "../components/BuildLeadForm";
import { whatsappLink } from "../config/siteConfig";
import "./FormPage.css";

const BuildHome = () => {
  return (
    <>
      <PageHeader
        label="Pathway 02"
        title="I want to build my home"
        subtitle="Share your dream home specifications and we'll work with you to bring it to life — from plot to move-in day."
      />

      <section className="section form-page">
        <div className="container form-page-inner">
          <BuildLeadForm />

          <div className="form-page-side">
            <h3>Prefer to chat directly?</h3>
            <p>
              If you'd rather speak with us right away, message us on
              WhatsApp and we'll respond as quickly as possible.
            </p>
            <a
              href={whatsappLink("Hello, I'm interested in building a home. Can you help?")}
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

export default BuildHome;
