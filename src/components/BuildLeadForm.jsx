// src/components/BuildLeadForm.jsx
import { useState } from "react";
import { submitBuildLead } from "../api/leadsApi";
import "./FormStyles.css";

const initialState = {
  name: "",
  phone: "",
  bedrooms: "",
  style: "",
  plotOwnership: "",
  budget: "",
};

const BuildLeadForm = () => {
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
      await submitBuildLead(formData);
      setStatus("success");
      setFormData(initialState);
    } catch {
      setStatus("error");
    }
  };

  if (status === "success") {
    return (
      <div className="form-success">
        <h3>Thank you, {formData.name || "there"}!</h3>
        <p>
          We've received your build enquiry and will reach out to discuss
          your dream home. For a faster response, message us directly on
          WhatsApp using the button below.
        </p>
      </div>
    );
  }

  return (
    <form className="lead-form" onSubmit={handleSubmit}>
      <div className="form-row">
        <label htmlFor="build-name">Full name</label>
        <input
          id="build-name"
          name="name"
          type="text"
          required
          placeholder="e.g. Tunde Bakare"
          value={formData.name}
          onChange={handleChange}
        />
      </div>

      <div className="form-row">
        <label htmlFor="build-phone">Phone number</label>
        <input
          id="build-phone"
          name="phone"
          type="tel"
          required
          placeholder="e.g. 0801 234 5678"
          value={formData.phone}
          onChange={handleChange}
        />
      </div>

      <div className="form-row">
        <label htmlFor="bedrooms">Number of bedrooms</label>
        <select
          id="bedrooms"
          name="bedrooms"
          required
          value={formData.bedrooms}
          onChange={handleChange}
        >
          <option value="">Select bedrooms</option>
          <option value="1 - 2 bedrooms">1 - 2 bedrooms</option>
          <option value="3 bedrooms">3 bedrooms</option>
          <option value="4 bedrooms">4 bedrooms</option>
          <option value="5+ bedrooms">5+ bedrooms</option>
        </select>
      </div>

      <div className="form-row">
        <label htmlFor="style">Preferred style</label>
        <select id="style" name="style" required value={formData.style} onChange={handleChange}>
          <option value="">Select style</option>
          <option value="Modern / Contemporary">Modern / Contemporary</option>
          <option value="Bungalow">Bungalow</option>
          <option value="Duplex">Duplex</option>
          <option value="Smart home">Smart home</option>
          <option value="Traditional / Classic">Traditional / Classic</option>
          <option value="Not sure yet">Not sure yet</option>
        </select>
      </div>

      <div className="form-row">
        <label htmlFor="plotOwnership">Do you already own a plot?</label>
        <select
          id="plotOwnership"
          name="plotOwnership"
          required
          value={formData.plotOwnership}
          onChange={handleChange}
        >
          <option value="">Select an option</option>
          <option value="Yes, I own a plot">Yes, I own a plot</option>
          <option value="No, I need help finding land too">
            No, I need help finding land too
          </option>
          <option value="In progress / partially secured">In progress / partially secured</option>
        </select>
      </div>

      <div className="form-row">
        <label htmlFor="build-budget">Budget (₦)</label>
        <select
          id="build-budget"
          name="budget"
          required
          value={formData.budget}
          onChange={handleChange}
        >
          <option value="">Select budget range</option>
          <option value="Under ₦20,000,000">Under ₦20,000,000</option>
          <option value="₦20,000,000 - ₦50,000,000">₦20,000,000 - ₦50,000,000</option>
          <option value="₦50,000,000 - ₦100,000,000">₦50,000,000 - ₦100,000,000</option>
          <option value="₦100,000,000 and above">₦100,000,000 and above</option>
        </select>
      </div>

      <button type="submit" className="btn btn-primary btn-block" disabled={status === "submitting"}>
        {status === "submitting" ? "Sending…" : "Send enquiry"}
      </button>

      {status === "error" && (
        <p className="form-error">
          Something went wrong. Please try again or contact us on WhatsApp.
        </p>
      )}
    </form>
  );
};

export default BuildLeadForm;
