// src/pages/Contact.jsx
import PageHeader from "../components/PageHeader";
import ContactForm from "../components/ContactForm";
import { SITE, whatsappLink } from "../config/siteConfig";
import "./Contact.css";

const Contact = () => {
  return (
    <>
      <PageHeader
        label="Get in touch"
        title="Contact Olympiafx Properties"
        subtitle="Have a question or ready to get started? Reach out through the form, WhatsApp, email, or social media."
      />

      <section className="section contact-page">
        <div className="container contact-inner">
          <ContactForm />

          <div className="contact-details">
            <div className="contact-detail-card">
              <h3>Contact details</h3>
              <a href={`mailto:${SITE.email}`} className="contact-detail-link">
                <span className="contact-detail-label">Email</span>
                {SITE.email}
              </a>
              <a href={`tel:${SITE.phone}`} className="contact-detail-link">
                <span className="contact-detail-label">Phone</span>
                {SITE.phone}
              </a>
              <a
                href={whatsappLink()}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-primary btn-block contact-whatsapp"
              >
                Chat on WhatsApp
              </a>
            </div>

            <div className="contact-detail-card">
              <h3>Follow us</h3>
              <div className="contact-socials">
                <a href={SITE.socials.instagram} target="_blank" rel="noopener noreferrer">
                  Instagram
                </a>
                <a href={SITE.socials.facebook} target="_blank" rel="noopener noreferrer">
                  Facebook
                </a>
                <a href={SITE.socials.twitter} target="_blank" rel="noopener noreferrer">
                  Twitter
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
