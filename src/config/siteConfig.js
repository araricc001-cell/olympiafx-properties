// src/config/siteConfig.js
export const SITE = {
  brandName: "Olympiafx Properties",
  agentName: "Olympiafx Properties",
  email: "olympiafxproperties@gmail.com",
  phone: "+2349126600759",
  whatsappNumber: "2349126600759", // international format, no symbols, for wa.me links
  whatsappMessage: "Hello Olympiafx Properties, I'd like to enquire about a property.",
  socials: {
    instagram: "https://instagram.com/olympiafxproperties",
    facebook: "https://facebook.com/olympiafxproperties",
    twitter: "https://twitter.com/olympiafxprops",
  },
};

export const whatsappLink = (customMessage) => {
  const message = encodeURIComponent(customMessage || SITE.whatsappMessage);
  return `https://wa.me/${SITE.whatsappNumber}?text=${message}`;
};
