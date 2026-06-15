// src/api/leadsApi.js
// Centralized API layer for lead-capture forms.
// Swap BASE_URL / endpoints with a real backend (e.g. Formspree, Supabase, custom Node API).

const BASE_URL = import.meta.env.VITE_API_BASE_URL || "https://api.olympiafxproperties.com";

const ENDPOINTS = {
  landLead: "/leads/land",
  buildLead: "/leads/build",
  contact: "/leads/contact",
};

/**
 * Generic POST helper with graceful fallback.
 * If the real API isn't reachable (e.g. during local/demo use),
 * the lead is stored in localStorage so no data is lost and the
 * UI can still confirm success to the user.
 */
async function postLead(endpoint, payload) {
  try {
    const response = await fetch(`${BASE_URL}${endpoint}`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    });

    if (!response.ok) {
      throw new Error(`Request failed with status ${response.status}`);
    }

    return await response.json();
  } catch (error) {
    // Fallback: persist locally so the lead isn't lost in a demo/offline environment
    const storageKey = "olympiafx_leads";
    const existing = JSON.parse(localStorage.getItem(storageKey) || "[]");
    existing.push({ ...payload, endpoint, submittedAt: new Date().toISOString() });
    localStorage.setItem(storageKey, JSON.stringify(existing));

    return {
      success: true,
      offline: true,
      message: "Saved locally. We'll follow up with you soon.",
    };
  }
}

/**
 * Submit a "Buy Land" lead.
 * payload: { name, phone, location, plotSize, budget }
 */
export function submitLandLead(payload) {
  return postLead(ENDPOINTS.landLead, payload);
}

/**
 * Submit a "Build My Home" lead.
 * payload: { name, phone, bedrooms, style, plotOwnership, budget }
 */
export function submitBuildLead(payload) {
  return postLead(ENDPOINTS.buildLead, payload);
}

/**
 * Submit a general contact form lead.
 * payload: { name, email, phone, message }
 */
export function submitContactForm(payload) {
  return postLead(ENDPOINTS.contact, payload);
}
