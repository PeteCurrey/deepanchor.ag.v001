export const NAV_LINKS = [
  { name: "Marinas", href: "/marinas" },
  { name: "Passage Planner", href: "/passage-planner" },
  { name: "The Wake", href: "/the-wake" },
  { name: "Maintenance", href: "/maintenance" },
  { name: "Community", href: "/community" },
  { name: "Pricing", href: "/pricing" },
];

export const COAST_CATEGORIES = [
  "South Coast",
  "East Coast",
  "West Coast",
  "Wales",
  "Scotland",
  "Ireland",
  "Channel Islands",
  "Brittany",
  "Normandy",
];

export const FACILITY_ICONS = {
  fuel: "Fuel",
  water: "Water",
  wifi: "WiFi",
  showers: "Showers",
  laundry: "Laundry",
  crane: "Crane",
  chandlery: "Chandlery",
  bar: "Bar/Restaurant",
  electricity: "Electricity",
  security: "Security",
};

export const PRICING_TIERS = [
  {
    name: "Crew",
    price: 14,
    interval: "month",
    features: [
      "Marina Directory",
      "Basic Weather & Tides",
      "The Wake Editorial",
      "Maintenance Guides",
      "Community Access",
    ],
    cta: "Join the Crew",
    popular: false,
  },
  {
    name: "Captain",
    price: 39,
    interval: "month",
    features: [
      "Everything in Crew",
      "AI Passage Planner",
      "Tidal Gate Analysis",
      "Real-time NOTAM Alerts",
      "PDF Route Export",
      "Priority Support",
    ],
    cta: "Take Command",
    popular: true,
  },
  {
    name: "Marina",
    price: 49,
    interval: "month",
    features: [
      "Premium Listing",
      "Live Berth Management",
      "Direct Booking Integration",
      "Community Dashboard",
      "Lead Generation",
    ],
    cta: "List Your Marina",
    popular: false,
  },
];
