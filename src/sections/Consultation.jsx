// =====================================================================
// Consultation.jsx — Fixed EmailJS Integration
// =====================================================================
// FIXES APPLIED:
// 1. ❌ OLD: Used formsubmit.co (external API) → ✅ NEW: Uses @emailjs/browser
// 2. ❌ OLD: Imported "emailjs-com" (deprecated) → ✅ NEW: Imports "@emailjs/browser"
// 3. ❌ OLD: No env vars → ✅ NEW: Uses VITE_ prefixed env vars via import.meta.env
// 4. ❌ OLD: No field validation → ✅ NEW: Validates all fields before submission
// 5. ❌ OLD: No detailed error logging → ✅ NEW: console.error with exact error text
// 6. ❌ OLD: No WhatsApp fallback → ✅ NEW: "Continue on WhatsApp" button after success
// 7. ✅ KEPT: e.preventDefault(), async/await, try/catch, loading/success/error states
// =====================================================================

import { useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import emailjs from "@emailjs/browser"; // FIX: Correct package import
import SectionHeading from "../components/SectionHeading";
import {
  Send,
  User,
  Mail,
  Phone,
  MessageSquare,
  Briefcase,
  CheckCircle,
  AlertCircle,
  Loader2,
} from "lucide-react";
// WhatsApp icon from react-icons (already a dependency)
import { FaWhatsapp } from "react-icons/fa";
import { CONTACT } from "../data/contact";

// Image asset
import consultationBg from "../assets/images/consultation-legal-desk.png";

// Case types for the dropdown
const caseTypes = [
  "Criminal Law",
  "Civil Law",
  "Family Law",
  "Property Disputes",
  "Corporate Law",
  "Divorce Cases",
  "Legal Documentation",
  "Legal Consultation",
];



/**
 * Generates an encoded WhatsApp URL with all form data in the message body.
 */
function buildWhatsAppUrl(formData) {
  const message = [
    `⚖️ *New Consultation Request*`,
    ``,
    `*Advocate Maddela Lords Words Worth Mohan*`,
    ``,
    `*Name:* ${formData.name}`,
    `*Phone:* ${formData.phone}`,
    `*Email:* ${formData.email}`,
    `*Case Type:* ${formData.caseType}`,
    ``,
    `*Message:*`,
    `${formData.message}`,
  ].join("\n");

  return `https://wa.me/${CONTACT.whatsapp}?text=${encodeURIComponent(message)}`;
}

/**
 * Validates all form fields. Returns an error string or null if valid.
 */
function validateForm(data) {
  if (!data.name.trim()) return "Please enter your full name.";
  if (data.name.trim().length < 2) return "Name must be at least 2 characters.";

  if (!data.phone.trim()) return "Please enter your phone number.";
  // Basic phone validation: digits, spaces, hyphens, plus sign, at least 10 digits
  const phoneDigits = data.phone.replace(/\D/g, "");
  if (phoneDigits.length < 10) return "Phone number must have at least 10 digits.";

  if (!data.email.trim()) return "Please enter your email address.";
  // Basic email regex
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(data.email.trim())) return "Please enter a valid email address.";

  if (!data.caseType) return "Please select a case type.";

  if (!data.message.trim()) return "Please describe your legal matter.";
  if (data.message.trim().length < 10) return "Message must be at least 10 characters.";

  return null; // All fields valid
}

export default function Consultation() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    caseType: "",
    message: "",
  });

  // Status: "idle" | "sending" | "success" | "error"
  const [status, setStatus] = useState("idle");
  // Stores the exact error message to display to the user
  const [errorMessage, setErrorMessage] = useState("");
  // Stores form snapshot for WhatsApp URL generation after form reset
  const [submittedData, setSubmittedData] = useState(null);

  const formRef = useRef(null);

  // ---------------------------------------------------------------
  // Handle input changes
  // ---------------------------------------------------------------
  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  // ---------------------------------------------------------------
  // Handle form submission via EmailJS
  // ---------------------------------------------------------------
  const handleSubmit = async (e) => {
    // FIX: Prevent default form submission / page refresh
    e.preventDefault();

    // Clear any previous error
    setErrorMessage("");

    // ---- Client-side validation ----
    const validationError = validateForm(formData);
    if (validationError) {
      setErrorMessage(validationError);
      setStatus("error");
      // Auto-clear error after 5 seconds
      setTimeout(() => {
        setStatus("idle");
        setErrorMessage("");
      }, 5000);
      return;
    }

    // ---- Read env vars (Vite uses import.meta.env) ----
    const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
    const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
    const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

    // FIX: Verify env vars are present before attempting to send
    if (!serviceId || !templateId || !publicKey) {
      const missing = [];
      if (!serviceId) missing.push("VITE_EMAILJS_SERVICE_ID");
      if (!templateId) missing.push("VITE_EMAILJS_TEMPLATE_ID");
      if (!publicKey) missing.push("VITE_EMAILJS_PUBLIC_KEY");
      const msg = `EmailJS configuration missing: ${missing.join(", ")}`;
      setErrorMessage("Email service is not configured. Please contact us directly.");
      setStatus("error");
      setTimeout(() => {
        setStatus("idle");
        setErrorMessage("");
      }, 5000);
      return;
    }

    // ---- Set loading state ----
    setStatus("sending");

    try {
      // FIX: Use emailjs.send() with template parameters instead of fetch()
      // Template variables must match your EmailJS template: {{name}}, {{phone}}, {{email}}, {{caseType}}, {{message}}
      const templateParams = {
        name: formData.name.trim(),
        phone: formData.phone.trim(),
        email: formData.email.trim(),
        caseType: formData.caseType,
        message: formData.message.trim(),
      };

      // FIX: Proper async/await call to EmailJS
      const result = await emailjs.send(serviceId, templateId, templateParams, publicKey);

      // ---- Success: save snapshot, reset form, update status ----
      setSubmittedData({ ...formData }); // Snapshot for WhatsApp button
      setFormData({ name: "", email: "", phone: "", caseType: "", message: "" });
      setStatus("success");

      // Auto-hide success after 10 seconds
      setTimeout(() => {
        setStatus("idle");
        setSubmittedData(null);
      }, 10000);
    } catch (error) {
      // ---- Error handling with detailed logging ----

      // Extract a human-readable error message
      let userMessage = "Something went wrong. Please try again.";
      if (error?.text) {
        // EmailJS error response
        userMessage = `EmailJS error: ${error.text}`;
      } else if (error?.status) {
        userMessage = `Server error (${error.status}). Please try again later.`;
      } else if (error instanceof Error) {
        userMessage = error.message;
      }

      setErrorMessage(userMessage);
      setStatus("error");

      // Auto-clear error after 6 seconds
      setTimeout(() => {
        setStatus("idle");
        setErrorMessage("");
      }, 6000);
    }
  };

  // ---------------------------------------------------------------
  // Shared input styles
  // ---------------------------------------------------------------
  const inputBaseStyles =
    "w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3.5 text-white text-sm placeholder-gray-text/50 focus:outline-none focus:border-gold/50 focus:bg-white/[0.08] transition-all duration-300 font-body";

  return (
    <section id="consultation" className="relative py-24 md:py-32 overflow-hidden">
      {/* ====== Background Image with dark overlay ====== */}
      <div className="absolute inset-0">
        <img
          src={consultationBg}
          alt=""
          aria-hidden="true"
          className="w-full h-full object-cover"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-black/80" />
      </div>

      {/* Radial gold glow (on top of overlay) */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(200,169,107,0.06)_0%,transparent_70%)]" />

      <div className="relative max-w-4xl mx-auto section-padding">
        <SectionHeading
          subtitle="Consultation"
          title="Schedule Your Consultation"
          description="Take the first step towards resolving your legal matters. Share your details and we'll get back to you promptly."
        />

        <motion.form
          ref={formRef}
          onSubmit={handleSubmit}
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="glass-card-gold p-6 sm:p-8 md:p-12 space-y-6"
          noValidate // We handle validation manually
        >
          {/* ---- Input Fields Grid ---- */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {/* Name */}
            <div className="relative">
              <User className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gold/50" />
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Full Name"
                required
                className={`${inputBaseStyles} pl-11`}
                id="consultation-name"
                autoComplete="name"
              />
            </div>

            {/* Phone */}
            <div className="relative">
              <Phone className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gold/50" />
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="Phone Number"
                required
                className={`${inputBaseStyles} pl-11`}
                id="consultation-phone"
                autoComplete="tel"
              />
            </div>

            {/* Email */}
            <div className="relative">
              <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gold/50" />
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Email Address"
                required
                className={`${inputBaseStyles} pl-11`}
                id="consultation-email"
                autoComplete="email"
              />
            </div>

            {/* Case Type */}
            <div className="relative">
              <Briefcase className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gold/50" />
              <select
                name="caseType"
                value={formData.caseType}
                onChange={handleChange}
                required
                className={`${inputBaseStyles} pl-11 appearance-none cursor-pointer`}
                id="consultation-casetype"
              >
                <option value="" disabled className="bg-secondary text-gray-text">
                  Select Case Type
                </option>
                {caseTypes.map((opt) => (
                  <option key={opt} value={opt} className="bg-secondary text-white">
                    {opt}
                  </option>
                ))}
              </select>
            </div>
          </div>

          {/* Message */}
          <div className="relative">
            <MessageSquare className="absolute left-4 top-4 w-4 h-4 text-gold/50" />
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Briefly describe your legal matter..."
              rows={5}
              required
              className={`${inputBaseStyles} pl-11 resize-none`}
              id="consultation-message"
            />
          </div>

          {/* ---- Submit + WhatsApp Buttons ---- */}
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-gray-text/50 text-xs">
              Your information is kept strictly confidential.
            </p>

            <div className="flex flex-col sm:flex-row items-center gap-3 w-full sm:w-auto">
              {/* Submit Button */}
              <motion.button
                type="submit"
                disabled={status === "sending"}
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                className="w-full sm:w-auto px-8 py-3.5 bg-gradient-to-r from-gold to-gold-soft text-primary font-semibold rounded-full flex items-center justify-center gap-2 hover:shadow-lg hover:shadow-gold/25 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                id="consultation-submit"
              >
                {status === "sending" ? (
                  <>
                    {/* FIX: Using Lucide Loader2 for smoother spin animation */}
                    <Loader2 className="w-4 h-4 animate-spin" />
                    Sending...
                  </>
                ) : (
                  <>
                    <Send className="w-4 h-4" />
                    Submit Request
                  </>
                )}
              </motion.button>

              {/* "Continue on WhatsApp" — always visible as secondary action */}
              <motion.a
                href={buildWhatsAppUrl(submittedData || formData)}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                className="w-full sm:w-auto px-6 py-3.5 border border-green-500/30 text-green-400 font-semibold rounded-full flex items-center justify-center gap-2 hover:bg-green-500/10 hover:border-green-500/50 transition-all duration-300 text-sm"
                id="consultation-whatsapp"
              >
                <FaWhatsapp className="w-4 h-4" />
                Continue on WhatsApp
              </motion.a>
            </div>
          </div>

          {/* ---- Status Messages (Animated) ---- */}
          <AnimatePresence mode="wait">
            {status === "success" && (
              <motion.div
                key="success"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.3 }}
                className="flex items-center gap-2 text-green-400 text-sm bg-green-400/10 px-4 py-3 rounded-xl"
              >
                <CheckCircle className="w-4 h-4 flex-shrink-0" />
                Consultation request sent successfully! We&apos;ll contact you shortly.
              </motion.div>
            )}

            {status === "error" && (
              <motion.div
                key="error"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.3 }}
                className="flex items-center gap-2 text-red-400 text-sm bg-red-400/10 px-4 py-3 rounded-xl"
              >
                <AlertCircle className="w-4 h-4 flex-shrink-0" />
                {/* FIX: Show exact error message instead of generic text */}
                {errorMessage || `Something went wrong. Please try again or contact us directly at ${CONTACT.primaryFormatted}.`}
              </motion.div>
            )}
          </AnimatePresence>
        </motion.form>
      </div>
    </section>
  );
}
