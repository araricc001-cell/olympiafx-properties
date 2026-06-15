// src/api/propertiesApi.js
// Provides featured land/property data. Replace the in-memory array with
// a real fetch() call to your CMS or database when ready.

const FEATURED_PROPERTIES = [
  {
    id: 1,
    type: "Land",
    title: "Riverside Plot — Epe, Lagos",
    size: "650 sqm",
    price: "₦18,000,000",
    description:
      "Dry, fenced plot with a deed of assignment, 5 mins from the Epe-Lekki expressway. Ideal for a family home or short-let villa.",
    image:
      "https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=900&q=80",
  },
  {
    id: 2,
    type: "Land",
    title: "Hilltop Acreage — Mowe, Ogun State",
    size: "1,200 sqm",
    price: "₦9,500,000",
    description:
      "Elevated, gated estate plot with C of O in progress, paved road access and 24-hour security on site.",
    image:
      "https://images.unsplash.com/photo-1500076656116-558758c991c1?auto=format&fit=crop&w=900&q=80",
  },
  {
    id: 3,
    type: "Build",
    title: "4-Bedroom Contemporary Duplex — Ibeju-Lekki",
    size: "320 sqm build",
    price: "From ₦65,000,000",
    description:
      "Completed for a client in 9 months — open-plan living, rooftop terrace, and solar backup. Now fully occupied.",
    image:
      "https://images.unsplash.com/photo-1568605114967-8130f3a36994?auto=format&fit=crop&w=900&q=80",
  },
  {
    id: 4,
    type: "Build",
    title: "3-Bedroom Bungalow — Abuja Outskirts",
    size: "210 sqm build",
    price: "From ₦38,000,000",
    description:
      "A turnkey bungalow built on a client-owned plot, featuring a courtyard layout suited to large families.",
    image:
      "https://images.unsplash.com/photo-1430285561322-7808604715df?auto=format&fit=crop&w=900&q=80",
  },
  {
    id: 5,
    type: "Land",
    title: "Commercial Frontage Plot — Sangotedo",
    size: "800 sqm",
    price: "₦35,000,000",
    description:
      "High-visibility road-front plot, suited for mixed residential-commercial development. Survey plan available.",
    image:
      "https://images.unsplash.com/photo-1444858345149-cd7f7c8e6f25?auto=format&fit=crop&w=900&q=80",
  },
  {
    id: 6,
    type: "Build",
    title: "5-Bedroom Smart Home — Ikoyi",
    size: "450 sqm build",
    price: "From ₦180,000,000",
    description:
      "A fully smart-enabled family home with home automation, a private pool, and landscaped gardens.",
    image:
      "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=900&q=80",
  },
];

/**
 * Returns the list of featured properties/projects.
 * Wrapped as a promise to mirror a real API call shape.
 */
export function fetchFeaturedProperties() {
  return Promise.resolve(FEATURED_PROPERTIES);
}

/**
 * Filter helper — by "Land" or "Build" type.
 */
export function fetchPropertiesByType(type) {
  if (!type || type === "All") return Promise.resolve(FEATURED_PROPERTIES);
  return Promise.resolve(FEATURED_PROPERTIES.filter((p) => p.type === type));
}
