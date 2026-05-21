// =====================================================================
// Centralized contact information — Single source of truth
// =====================================================================
// Import this everywhere instead of hardcoding phone numbers.
// To update a number, change it HERE only.
// =====================================================================

export const CONTACT = {
  // Primary phone number (highlighted everywhere)
  primary: "+917013123933",
  primaryFormatted: "+91 70131 23933",

  // Secondary phone number
  secondary: "+919848460713",
  secondaryFormatted: "+91 98484 60713",

  // Email
  email: "mlwwmohan32@gmail.com",

  // WhatsApp (uses primary number, no + prefix for wa.me links)
  whatsapp: "917013123933",
  whatsappGreeting:
    "Hello Advocate Mohan garu, I would like to schedule a consultation.",

  // Office address
  address: "11-7-B/A, New Buildings, Chagalamarri",
  addressLine2: "Nandyal District, AP – 518553",
  addressFull: "Chagalamarri Mandal & Allagadda, Nandyal District, Andhra Pradesh",

  // Office timings
  timings: "Monday–Saturday: 4:00 PM – 8:00 PM",
  timingsShort: "Monday–Saturday | 4:00 PM – 8:00 PM",
  sundayNote: "office is closed on sundays",

  // Google Maps
  mapsUrl:
    "https://maps.app.goo.gl/jbgHEsMTXKxShxqh9",
  mapsEmbed:
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d572.7715365683455!2d78.5906172404544!3d14.961023379177648!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bb4630811b2c11f%3A0xc85be882d611ef3a!2sAdvocate%20Lord's%20Words%20Worth%20Mohan!5e1!3m2!1sen!2sin!4v1779383172998!5m2!1sen!2sin",
  mapsFallbackUrl:
    "https://maps.google.com/?q=14.961047750435215,78.591129082466481",

  // Social media
  socials: {
    facebook: "#",
    linkedin: "#",
    instagram: "#",
  },
};

/**
 * Builds a WhatsApp URL with an optional custom message.
 * Falls back to the default greeting if no message is provided.
 */
export function getWhatsAppUrl(message) {
  const text = message || CONTACT.whatsappGreeting;
  return `https://wa.me/${CONTACT.whatsapp}?text=${encodeURIComponent(text)}`;
}
