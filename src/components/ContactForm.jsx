// src/components/ContactForm.jsx
import { useState } from "react";
import { submitContactForm } from "../api/leadsApi";
import "./FormStyles.css";

const initialState = {
  name: "",
  email: "",
  phone: "",
  message: "",
};

const ContactForm = () => {
  const [formData, setFormData] = useState(initialState);
  const [status, setStatus] = useState("idle");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("submitting");

    try {
      await submitContactForm(formData);
      setStatus("success");
      setFormData(initialState);
    } catch {
      setStatus("error");
    }
  };

  if (status === "success") {
    return (
      <div className="form-success">
        <h3>Message sent!</h3>
        <p>Thanks for reaching out — we'll get back to you as soon as possible.</p>
      </div>
    );
  }

  return (
    <form className="lead-form" onSubmit={handleSubmit}>
      <div className="form-row">
        <label htmlFor="contact-name">Full name</label>
        <input
          id="contact-name"
          name="name"
          type="text"
          required
          placeholder="Your name"
          value={formData.name}
          onChange={handleChange}
        />
      </div>

      <div className="form-row">
        <label htmlFor="contact-email">Email address</label>
        <input
          id="contact-email"
          name="email"
          type="email"
          required
          placeholder="you@example.com"
          value={formData.email}
          onChange={handleChange}
        />
      </div>

      <div className="form-row">
        <label htmlFor="contact-phone">Phone number</label>
        <input
          id="contact-phone"
          name="phone"
          type="tel"
          placeholder="e.g. 0801 234 5678"
          value={formData.phone}
          onChange={handleChange}
        />
      </div>

      <div className="form-row">
        <label htmlFor="contact-message">Message</label>
        <textarea
          id="contact-message"
          name="message"
          rows="4"
          required
          placeholder="Tell us a bit about what you're looking for…"
          value={formData.message}
          onChange={handleChange}
        />
      </div>

      <button type="submit" className="btn btn-primary btn-block" disabled={status === "submitting"}>
        {status === "submitting" ? "Sending…" : "Send message"}
      </button>

      {status === "error" && (
        <p className="form-error">
          Something went wrong. Please try again or contact us on WhatsApp.
        </p>
      )}
    </form>
  );
};

export default ContactForm;
