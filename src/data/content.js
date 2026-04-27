export const COMPANY = {
  name: "Ecorise Properties LLP",
  llpin: "ACK-6656",
  roc: "RoC-Mumbai",
  incorporated: "03 December 2024",
  status: "Active",
  partners: 2,
  designatedPartners: 2,
  tagline: "Your Single Window Solution for Land Procurement",
  address: "P No. 21, Devarao Nagar, Railway Station Road, Murud BK, Murud, Latur, Maharashtra 413510",
  addressShort: "Murud, Latur, Maharashtra 413510",
  phones: ["+91 9730118107", "+91 9309719475"],
  emails: ["ecoriseproperties@gmail.com"],
  whatsapp: "919730118107",
  officeAddress: "Office No. 46, Ground Floor, Patil Plaza, Parvati, Pune 411009"
};

export const STATS = [
  { value: 1200, suffix: "+", label: "Acres Acquired" },
  { value: 70,   suffix: "+", label: "Ground Agents" },
  { value: 50,   suffix: "+", label: "Locations" },
  { value: 10,   suffix: "+", label: "Years Experience" }
];

export const SERVICES = [
  { id: "01", title: "Land Procurement Facilitation" },
  { id: "02", title: "Land Investment Consultation" },
  { id: "03", title: "Agriculture Title Search" },
  { id: "04", title: "Legal Solutions for Agriculture Land" },
  { id: "05", title: "Liaison & Land Development" },
  { id: "06", title: "Revenue Record Updates" }
];

export const PROCESS = [
  { id: "01", title: "Site Visit & Identification" },
  { id: "02", title: "Documentation & MOU" },
  { id: "03", title: "Detailed Title Search" },
  { id: "04", title: "Sale Deed" },
  { id: "05", title: "Peaceful Possession" }
];

export const LAND_USES = [
  "Solar Power Plant",
  "Wind Energy",
  "Agro Farming",
  "Industrial Use",
  "Logistic Parks",
  "Residential Township"
];

export const WHY_US = [
  "1200+ Acres Acquired",
  "5000+ Acres Available",
  "70+ Ground Agents",
  "10+ Years of Experience"
];

export const NAV_LINKS = [
  { name: "About", href: "#about" },
  { name: "Services", href: "#services" },
  { name: "Process", href: "#process" },
  { name: "Land Use", href: "#land-types" },
  { name: "Contact", href: "#contact" }
];

export const LAND_REQUIREMENT_OPTIONS = [
  "Solar Power Plant",
  "Wind Power Plant",
  "Industrial Use",
  "Agro Farming"
];

// ─── Backward-Compatible Aliases ────────────────────────────────────────────
// These let old components keep working during the SSOT migration

export const companyInfo = COMPANY;

export const stats = STATS;

export const services = SERVICES.map((s, i) => ({
  ...s,
  icon: ["Map", "TrendingUp", "Search", "Scale", "Users", "Hammer"][i] || "Map",
  desc: [
    "Expert facilitation for industrial and agricultural land acquisition.",
    "Strategic advice on high-yield real estate investments.",
    "Meticulous legal verification of land ownership history.",
    "Comprehensive legal support for dispute-free transactions.",
    "Seamless coordination with government authorities.",
    "Assistance with 7/12 updates and revenue record corrections."
  ][i] || ""
}));

export const processSteps = PROCESS.map((p, i) => ({
  ...p,
  step: i + 1,
  desc: [
    "Pinpointing prime locations based on client requirements.",
    "Gathering and verifying all necessary statutory records.",
    "Rigorous legal audit of the property's history.",
    "Finalizing registration and legal transfer of ownership.",
    "Seamless handover and physical demarcation of land."
  ][i] || ""
}));

export const landUseTypes = LAND_USES.map(title => ({ title }));

export const whyChooseUs = WHY_US.map(title => ({ title, desc: "" }));

export const titleVerification = [
  { title: "Land Documentation", desc: "In-depth audit of 7/12 extract and mutation records." },
  { title: "Owner Verification", desc: "Verifying current and historical ownership details." },
  { title: "Legal Clearance", desc: "Ensuring land is free from any encumbrances or liens." },
  { title: "Record Updates", desc: "Assisting with updating necessary revenue records." }
];

export const testimonials = [
  { name: "Rahul D.", role: "Solar Project Developer", text: "Ecorise Properties made our 100-acre land acquisition seamless and transparent. Highly recommended!", rating: 5 },
  { name: "Priya S.", role: "Agro Investor", text: "Their title search and legal clearance services saved us from potential disputes. Excellent work.", rating: 5 },
  { name: "Vikram M.", role: "Logistics Company", text: "Found the perfect location for our warehouse thanks to their extensive network and ground agents.", rating: 4 }
];

// AdvancedServices used by AdvancedServices.jsx (legacy)
export const advancedServices = [
  { title: "7/12 Extract Verification", desc: "Comprehensive review of land records and ownership history from government portals." },
  { title: "Encumbrance Certificate", desc: "Verifying that the land is free from mortgages, liens, and legal disputes." },
  { title: "NA Order Facilitation", desc: "Assistance in obtaining Non-Agricultural land conversion orders from authorities." },
  { title: "Environmental Clearance", desc: "Guidance through the environmental impact assessment and clearance process." }
];

