import React, { useState } from "react";

export interface CtaPopupProps {
  onClose: () => void;
  title?: string;
  subtitle?: string;
}

const WEB3FORMS_ACCESS_KEY = "379a21a3-04ba-4421-80fd-31fe44886bf5";
const WEB3FORMS_URL = "https://api.web3forms.com/submit";

const CtaPopup: React.FC<CtaPopupProps> = ({ onClose, title = "Please leave your details", subtitle = "Our expert will get back to you shortly." }) => {
  const [submitting, setSubmitting] = useState(false);
  const [result, setResult] = useState<string | null>(null);

  const [phone, setPhone] = useState("");
  const [phoneValidation, setPhoneValidation] = useState<{status: 'idle'|'valid'|'error', msg: string}>({status: 'idle', msg: ''});

  const [email, setEmail] = useState("");
  const [emailValidation, setEmailValidation] = useState<{status: 'idle'|'valid'|'error', msg: string}>({status: 'idle', msg: ''});

  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const val = e.target.value.replace(/\D/g, '').slice(0, 10);
    setPhone(val);
    if (val.length === 0) {
      setPhoneValidation({status: 'idle', msg: ''});
    } else if (val.length < 10) {
      setPhoneValidation({status: 'error', msg: 'Mobile number must be exactly 10 digits.'});
    } else {
      setPhoneValidation({status: 'valid', msg: 'Valid mobile number.'});
    }
  };

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const val = e.target.value;
    setEmail(val);
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (val.length === 0) {
      setEmailValidation({status: 'idle', msg: ''});
    } else if (!emailRegex.test(val)) {
      setEmailValidation({status: 'error', msg: 'Incorrect email format.'});
    } else {
      setEmailValidation({status: 'valid', msg: 'Valid email address.'});
    }
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (phoneValidation.status === 'error' || emailValidation.status === 'error' || !phone || !email || phone.length < 10) {
      setResult("Please fix the validation errors before submitting.");
      return;
    }

    if (submitting) return;
    setSubmitting(true);
    setResult(null);

    const form = e.currentTarget;
    const formData = new FormData(form);

    // Mandatory key for web3forms
    formData.append("access_key", WEB3FORMS_ACCESS_KEY);
    formData.append("subject", "TrueSun - CTA Lead Enquiry");
    formData.append("source", "CTA Popup / TrueSun Website");

    try {
      const res = await fetch(WEB3FORMS_URL, {
        method: "POST",
        body: formData,
      });

      const data = await res.json();

      if (data.success) {
        setResult("Thank you! Request submitted successfully.");
        form.reset();

        setTimeout(() => {
          setSubmitting(false);
          onClose();
        }, 1500);
      } else {
        setResult(data.message ?? "Submission failed. Please try again or contact us.");
        setSubmitting(false);
      }
    } catch (err) {
      console.error("Submission error:", err);
      setResult("Network error. Please try again later.");
      setSubmitting(false);
    }
  };

  return (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/50 backdrop-blur-sm p-4 sm:p-6">
      <div className="relative w-full max-w-md rounded-2xl bg-white p-6 sm:p-8 shadow-xl border border-slate-100">
        <button
          type="button"
          onClick={onClose}
          className="absolute right-4 top-4 text-slate-400 hover:text-slate-700 transition-colors bg-slate-100 hover:bg-slate-200 rounded-full p-1"
          aria-label="Close popup"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
        </button>

        <div className="mb-6">
          <h2 className="text-xl font-bold text-slate-900 tracking-tight">
            {title}
          </h2>
          <p className="mt-1 text-sm text-slate-500 leading-relaxed">
            {subtitle}
          </p>
        </div>

        <form className="space-y-4" onSubmit={handleSubmit}>
          <div>
            <label className="mb-1.5 block text-xs font-semibold text-slate-700 uppercase tracking-wider">
              Full Name <span className="text-red-500">*</span>
            </label>
            <input
              name="name"
              type="text"
              required
              placeholder="Enter your full name"
              className="w-full rounded-lg border border-slate-300 px-4 py-2.5 text-sm outline-none focus:border-[#fc763a] focus:ring-2 focus:ring-[#fc763a]/20 transition-all bg-slate-50 focus:bg-white"
            />
          </div>

          <div>
            <label className="mb-1.5 block text-xs font-semibold text-slate-700 uppercase tracking-wider">
              Contact Number <span className="text-red-500">*</span>
            </label>
            <input
              name="phone"
              type="tel"
              required
              value={phone}
              onChange={handlePhoneChange}
              placeholder="Enter your 10-digit number"
              className={`w-full rounded-lg border px-4 py-2.5 text-sm outline-none transition-all bg-slate-50 focus:bg-white
              ${phoneValidation.status === 'error' ? "border-red-500 focus:ring-2 focus:ring-red-500/20" : phoneValidation.status === 'valid' ? "border-emerald-500 focus:ring-2 focus:ring-emerald-500/20" : "border-slate-300 focus:border-[#fc763a] focus:ring-2 focus:ring-[#fc763a]/20"}`}
            />
            {phoneValidation.status === 'error' && <p className="text-red-500 text-xs mt-1.5 font-medium">{phoneValidation.msg}</p>}
            {phoneValidation.status === 'valid' && <p className="text-emerald-600 text-xs mt-1.5 font-medium">{phoneValidation.msg}</p>}
          </div>

          <div>
            <label className="mb-1.5 block text-xs font-semibold text-slate-700 uppercase tracking-wider">
              Email ID <span className="text-red-500">*</span>
            </label>
            <input
              name="email"
              type="email"
              required
              value={email}
              onChange={handleEmailChange}
              placeholder="name@company.com"
              className={`w-full rounded-lg border px-4 py-2.5 text-sm outline-none transition-all bg-slate-50 focus:bg-white
              ${emailValidation.status === 'error' ? "border-red-500 focus:ring-2 focus:ring-red-500/20" : emailValidation.status === 'valid' ? "border-emerald-500 focus:ring-2 focus:ring-emerald-500/20" : "border-slate-300 focus:border-[#fc763a] focus:ring-2 focus:ring-[#fc763a]/20"}`}
            />
            {emailValidation.status === 'error' && <p className="text-red-500 text-xs mt-1.5 font-medium">{emailValidation.msg}</p>}
            {emailValidation.status === 'valid' && <p className="text-emerald-600 text-xs mt-1.5 font-medium">{emailValidation.msg}</p>}
          </div>

          <div>
            <label className="mb-1.5 block text-xs font-semibold text-slate-700 uppercase tracking-wider">
              Name of the Organization <span className="text-red-500">*</span>
            </label>
            <input
              name="organization"
              type="text"
              required
              placeholder="Enter your organization name"
              className="w-full rounded-lg border border-slate-300 px-4 py-2.5 text-sm outline-none focus:border-[#fc763a] focus:ring-2 focus:ring-[#fc763a]/20 transition-all bg-slate-50 focus:bg-white"
            />
          </div>

          <div className="pt-2">
            <button
              type="submit"
              disabled={submitting}
              className="w-full rounded-lg bg-linear-to-r from-[#FC763A] to-[#FFB347] py-3 text-sm font-bold text-white shadow-lg shadow-orange-500/30 transition-all duration-300 disabled:opacity-70 hover:shadow-orange-500/50 hover:-translate-y-0.5 active:translate-y-0"
            >
              {submitting ? "Submitting..." : "Submit Details"}
            </button>
          </div>

          {result && (
            <p
              className={`mt-3 text-center text-sm font-medium p-2 rounded-lg ${result.toLowerCase().includes("thank") || result.includes("Success")
                ? "bg-emerald-50 text-emerald-700 border border-emerald-100"
                : "bg-red-50 text-red-700 border border-red-100"
                }`}
            >
              {result}
            </p>
          )}

          <p className="mt-4 text-center text-xs text-slate-500">
            We value your privacy. Your information is secure.
          </p>
        </form>
      </div>
    </div>
  );
};

export default CtaPopup;
