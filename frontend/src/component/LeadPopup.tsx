 

import React, { useState } from "react";

export interface LeadPopupProps {
  onClose: () => void;
}

const WEB3FORMS_ACCESS_KEY = "379a21a3-04ba-4421-80fd-31fe44886bf5";
const WEB3FORMS_URL = "https://api.web3forms.com/submit";

const LeadPopup: React.FC<LeadPopupProps> = ({ onClose }) => {
  const [submitting, setSubmitting] = useState(false);
  const [result, setResult] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (submitting) return;
    setSubmitting(true);
    setResult(null);

    const form = e.currentTarget;
    const formData = new FormData(form);

    // Mandatory key for web3forms
    formData.append("access_key", WEB3FORMS_ACCESS_KEY);

    // Helpful metadata fields (optional)
    formData.append("subject", "TrueSun - Free Site Visit Request");
    formData.append("source", "LeadPopup / TrueSun Website");

    // Example: combine submitted fields into a single message_owner field if the user left owner message empty
    const userMsg = formData.get("message") ?? "";
    const ownerMsg = formData.get("owner_message") ?? "";
    if (!ownerMsg && userMsg) {
      formData.set(
        "owner_message",
        `Customer message: ${String(userMsg).trim()}`
      );
    }

    try {
      const res = await fetch(WEB3FORMS_URL, {
        method: "POST",
        body: formData,
      });

      const data = await res.json();

      if (data.success) {
        setResult("Thank you! Request submitted successfully.");
        // optionally reset the form
        form.reset();

        // close popup after a short confirmation (visible to user)
        setTimeout(() => {
          setSubmitting(false);
          onClose();
        }, 1200);
      } else {
        // web3forms returns success: false and may include error message
        setResult(
          data.message ?? "Submission failed. Please try again or contact us."
        );
        setSubmitting(false);
      }
    } catch (err) {
      console.error("Submission error:", err);
      setResult("Network error. Please try again later.");
      setSubmitting(false);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm">
      <div className="relative w-full max-w-md rounded-2xl bg-white p-6 shadow-xl">
        {/* Close button */}
        <button
          type="button"
          onClick={onClose}
          className="absolute right-3 top-3 text-gray-400 hover:text-gray-600"
          aria-label="Close popup"
        >
          ✕
        </button>

        <h2 className="mb-4 text-xl font-bold text-slate-900">
          Book Your Free Site Visit
        </h2>
        <p className="mb-4 text-sm text-slate-600">
          Share your details and our TrueSun team will contact you with a custom
          solar proposal for your home or business.
        </p>

        <form className="space-y-4" onSubmit={handleSubmit}>
          <div>
            <label className="mb-1 block text-xs font-medium text-slate-700">
              Full Name
            </label>
            <input
              name="name"
              type="text"
              required
              placeholder="Enter your name"
              className="w-full rounded-lg border px-3 py-2 text-sm outline-none focus:border-[#fc763a] focus:ring-1 focus:ring-[#fc763a]"
            />
          </div>

          <div>
            <label className="mb-1 block text-xs font-medium text-slate-700">
              Email (optional)
            </label>
            <input
              name="email"
              type="email"
              placeholder="name@example.com"
              className="w-full rounded-lg border px-3 py-2 text-sm outline-none focus:border-[#fc763a] focus:ring-1 focus:ring-[#fc763a]"
            />
          </div>

          <div>
            <label className="mb-1 block text-xs font-medium text-slate-700">
              Mobile Number
            </label>
            <input
              name="phone"
              type="tel"
              required
              placeholder="Enter your phone number"
              className="w-full rounded-lg border px-3 py-2 text-sm outline-none focus:border-[#fc763a] focus:ring-1 focus:ring-[#fc763a]"
            />
          </div>

          <div>
            <label className="mb-1 block text-xs font-medium text-slate-700">
              City / Location
            </label>
            <input
              name="city"
              type="text"
              placeholder="Eg. Thane, Pune, Navi Mumbai"
              className="w-full rounded-lg border px-3 py-2 text-sm outline-none focus:border-[#fc763a] focus:ring-1 focus:ring-[#fc763a]"
            />
          </div>

          <div>
            <label className="mb-1 block text-xs font-medium text-slate-700">
              Approx. Monthly Electricity Bill (₹)
            </label>
            <input
              name="bill"
              type="number"
              placeholder="Eg. 3000"
              className="w-full rounded-lg border px-3 py-2 text-sm outline-none focus:border-[#fc763a] focus:ring-1 focus:ring-[#fc763a]"
            />
          </div>


          <button
            type="submit"
            disabled={submitting}
            className="w-full rounded-full bg-linear-to-r from-[#FC763A] to-[#FFB347] py-2.5 text-sm font-semibold text-white shadow-md shadow-orange-300/60 transition disabled:opacity-60 hover:brightness-105 hover:shadow-lg"
          >
            {submitting ? "Submitting..." : "Submit & Request Call Back"}
          </button>

          {result && (
            <p
              className={`mt-2 text-center text-[12px] ${
                result.toLowerCase().includes("thank") || result.includes("Success")
                  ? "text-green-600"
                  : "text-red-600"
              }`}
            >
              {result}
            </p>
          )}

          <p className="mt-2 text-center text-[11px] text-slate-500">
            By submitting, you agree to be contacted by TrueSun for solar
            consultation. No spam, only relevant updates.
          </p>
        </form>
      </div>
    </div>
  );
};

export default LeadPopup;
