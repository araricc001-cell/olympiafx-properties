// src/components/LandLeadForm.jsx
import { useState } from "react";
import { submitLandLead } from "../api/leadsApi";
import "./FormStyles.css";

const initialState = {
  name: "",
  phone: "",
  location: "",
  plotSize: "",
  budget: "",
};

const LandLeadForm = () => {
  const [formData, setFormData] = useState(initialState);
  const [status, setStatus] = useState("idle"); // idle | submitting | success | error

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("submitting");

    try {
      await submitLandLead(formData);
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
          We've received your land enquiry and will reach out shortly with
          matching options. For a faster response, message us directly on
          WhatsApp using the button below.
        </p>
      </div>
    );
  }

  return (
    <form className="lead-form" onSubmit={handleSubmit}>
      <div className="form-row">
        <label htmlFor="name">Full name</label>
        <input
          id="name"
          name="name"
          type="text"
          required
          placeholder="e.g. Adaeze Okafor"
          value={formData.name}
          onChange={handleChange}
        />
      </div>

      <div className="form-row">
        <label htmlFor="phone">Phone number</label>
        <input
          id="phone"
          name="phone"
          type="tel"
          required
          placeholder="e.g. 0801 234 5678"
          value={formData.phone}
          onChange={handleChange}
        />
      </div>

      <div className="form-row">
        <label htmlFor="location">Preferred location</label>
        <input
          id="location"
          name="location"
          type="text"
          required
          placeholder="e.g. Epe, Lagos"
          value={formData.location}
          onChange={handleChange}
        />
      </div>

      <div className="form-row">
        <label htmlFor="plotSize">Plot size</label>
        <select
          id="plotSize"
          name="plotSize"
          required
          value={formData.plotSize}
          onChange={handleChange}
        >
          <option value="">Select plot size</option>
          <option value="Less than 300 sqm">Less than 300 sqm</option>
          <option value="300 - 600 sqm">300 - 600 sqm</option>
          <option value="600 - 1000 sqm">600 - 1000 sqm</option>
          <option value="1000 sqm and above">1000 sqm and above</option>
          <option value="Not sure yet">Not sure yet</option>
        </select>
      </div>

      <div className="form-row">
        <label htmlFor="budget">Budget (₦)</label>
        <select
          id="budget"
          name="budget"
          required
          value={formData.budget}
          onChange={handleChange}
        >
          <option value="">Select budget range</option>
          <option value="Under ₦5,000,000">Under ₦5,000,000</option>
          <option value="₦5,000,000 - ₦15,000,000">₦5,000,000 - ₦15,000,000</option>
          <option value="₦15,000,000 - ₦40,000,000">₦15,000,000 - ₦40,000,000</option>
          <option value="₦40,000,000 and above">₦40,000,000 and above</option>
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

export default LandLeadForm;
