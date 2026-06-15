# Olympiafx Properties

A minimalist, mobile-first React landing page for a real estate agent, built
around two lead pathways: **Buy Land** and **Build a Home**.

## Tech stack

- React 19 + Vite
- React Router (client-side routing)
- Plain CSS with design tokens (no UI framework)

## Project structure

```
src/
├── api/                  # API layer (lead submission + property data)
│   ├── leadsApi.js       # POST helpers for land/build/contact forms
│   └── propertiesApi.js  # Featured properties data + fetch helpers
├── components/           # Reusable UI components
│   ├── Navbar.jsx / .css
│   ├── Footer.jsx / .css
│   ├── Hero.jsx / .css          # The two big pathway cards
│   ├── About.jsx / .css
│   ├── FeaturedProperties.jsx / .css
│   ├── PropertyCard.jsx / .css
│   ├── LandLeadForm.jsx
│   ├── BuildLeadForm.jsx
│   ├── ContactForm.jsx
│   ├── FormStyles.css           # Shared styles for all forms
│   ├── PageHeader.jsx / .css
│   └── WhatsAppButton.jsx / .css
├── config/
│   └── siteConfig.js     # Brand name, email, phone, WhatsApp, socials
├── pages/                 # One file per route
│   ├── Home.jsx
│   ├── BuyLand.jsx
│   ├── BuildHome.jsx
│   ├── Properties.jsx
│   ├── Contact.jsx
│   ├── NotFound.jsx
│   └── FormPage.css / Properties.css / Contact.css / NotFound.css
├── App.jsx                # Routes + layout (Navbar, Footer, WhatsApp FAB)
├── main.jsx                # Entry point (wraps App in BrowserRouter)
└── index.css               # Global tokens & base styles
```

## Routes

| Path          | Page        |
|---------------|-------------|
| `/`           | Home (hero with 2 pathways, about, featured properties) |
| `/buy-land`   | "I want to buy land" lead form |
| `/build-home` | "I want to build my home" lead form |
| `/properties` | Full portfolio gallery with filters |
| `/contact`    | Contact form, email, phone, WhatsApp, socials |

## Getting started

```bash
npm install
npm run dev
```

Then open the printed local URL (usually `http://localhost:5173`).

### Build for production

```bash
npm run build
npm run preview
```

## Connecting a real backend

All lead forms call functions in `src/api/leadsApi.js`:

- `submitLandLead(payload)`
- `submitBuildLead(payload)`
- `submitContactForm(payload)`

By default these POST to `BASE_URL` (configurable via the `VITE_API_BASE_URL`
environment variable, e.g. in a `.env` file). If the request fails (no backend
configured yet), the lead is saved to `localStorage` under `olympiafx_leads`
so nothing is lost — replace this fallback once your backend is live.

`src/api/propertiesApi.js` currently returns static sample data for the
"Featured Properties" gallery. Replace `FEATURED_PROPERTIES` with a real
fetch from your CMS/database when ready.

## Editing contact details

All brand/contact info (email, phone, WhatsApp number, social links) lives in
one place: `src/config/siteConfig.js`.

- **Email**: olympiafxproperties@gmail.com
- **Phone**: +2349126600759
- **WhatsApp**: wa.me link generated from the phone number automatically
