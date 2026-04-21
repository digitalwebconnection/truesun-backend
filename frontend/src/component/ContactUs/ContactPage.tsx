import React, { useState, type JSX } from "react";
import { PhoneCall, MessageCircle, Mail, MapPin } from "lucide-react";

type Status = {
  loading: boolean;
  message: string;
  ok: boolean | null;
};

function ContactForm(): JSX.Element {
  const [status, setStatus] = useState<Status>({
    loading: false,
    message: "",
    ok: null,
  });
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [emailValidation, setEmailValidation] = useState<{status: 'idle'|'valid'|'error', msg: string}>({status: 'idle', msg: ''});
  const [phoneValidation, setPhoneValidation] = useState<{status: 'idle'|'valid'|'error', msg: string}>({status: 'idle', msg: ''});

  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const val = e.target.value.replace(/\D/g, '').slice(0, 10);
    setPhone(val);
    if (val.length === 0) {
      setPhoneValidation({status: 'idle', msg: ''});
    } else if (val.length < 10) {
      setPhoneValidation({status: 'error', msg: 'Incorrect.'});
    } else {
      setPhoneValidation({status: 'valid', msg: 'Valid phone number.'});
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

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus({ loading: true, message: "", ok: null });

    if (emailValidation.status === 'error' || phoneValidation.status === 'error' || !email || !phone || phone.length < 10) {
      setStatus({ loading: false, message: "Please fix the validation errors before submitting.", ok: false });
      return;
    }

    const form = e.currentTarget;
    const fd = new FormData(form);

    // append required access key (you provided this)
    fd.append("access_key", "379a21a3-04ba-4421-80fd-31fe44886bf5");

    // create subject with "Sun" title and append owner email for reference
    const name = fd.get("name")?.toString().trim() || "Website Visitor";
    fd.append("subject", `Sun - Owner Email | New enquiry from ${name}`);
    fd.append("owner_email", "info@truesun.in");
    fd.append("source", "Contact Page - TrueSun");

    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: fd,
      });

      const data = await res.json();

      if (data?.success) {
        setStatus({
          loading: false,
          message: "Thanks — enquiry submitted successfully.",
          ok: true,
        });
        form.reset();
        setEmail("");
        setPhone("");
        setEmailValidation({status: 'idle', msg: ''});
        setPhoneValidation({status: 'idle', msg: ''});
      } else {
        setStatus({
          loading: false,
          message: data?.message || "Submission failed. Please try again.",
          ok: false,
        });
      }
    } catch (err) {
      console.error(err);
      setStatus({
        loading: false,
        message: "Network error. Please try again.",
        ok: false,
      });
    }
  };

  return (
    <form className="mt-6 space-y-4" onSubmit={onSubmit} aria-live="polite">
      <div className="grid gap-4 sm:grid-cols-2">
        <div className="space-y-1">
          <label className="text-xs font-medium text-slate-700">Name</label>
          <input
            name="name"
            type="text"

            placeholder="Your name"
            required
            className="w-full rounded-lg border border-slate-300 px-3 py-2 text-sm focus:border-[#FC763A] focus:ring-2 focus:ring-[#FC763A]  focus:outline-none transition"
          />
        </div>

        <div className="space-y-1">
          <label className="text-xs font-medium text-slate-700">
            Company (optional)
          </label>
          <input
            name="company"
            type="text"
            placeholder="Company name"
            className="w-full rounded-lg border border-slate-300 px-3 py-2 text-sm focus:border-[#FC763A] focus:ring-2 focus:ring-[#FC763A] focus:outline-none transition"
          />
        </div>
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        <div className="space-y-1">
          <label className="text-xs font-medium text-slate-700">Email</label>
          <input
            name="email"
            type="email"
            placeholder="you@example.com"
            required
            value={email}
            onChange={handleEmailChange}
            className={`w-full rounded-lg border px-3 py-2 text-sm focus:outline-none transition ${
              emailValidation.status === 'error'
                ? "border-red-500 focus:border-red-500 focus:ring-2 focus:ring-red-500/20" 
                : emailValidation.status === 'valid'
                ? "border-emerald-500 focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/20"
                : "border-slate-300 focus:border-[#FC763A] focus:ring-2 focus:ring-[#FC763A]"
            }`}
          />
          {emailValidation.status === 'error' && <p className="text-xs text-red-500 mt-1">{emailValidation.msg}</p>}
          {emailValidation.status === 'valid' && <p className="text-xs text-emerald-500 mt-1">{emailValidation.msg}</p>}
        </div>

        <div className="space-y-1">
          <label className="text-xs font-medium text-slate-700">
            Phone / WhatsApp
          </label>
          <input
            name="phone"
            required
            type="tel"
            placeholder="+91......"
            value={phone}
            onChange={handlePhoneChange}
            className={`w-full rounded-lg border px-3 py-2 text-sm focus:outline-none transition ${
              phoneValidation.status === 'error'
                ? "border-red-500 focus:border-red-500 focus:ring-2 focus:ring-red-500/20" 
                : phoneValidation.status === 'valid'
                ? "border-emerald-500 focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/20"
                : "border-slate-300 focus:border-[#FC763A] focus:ring-2 focus:ring-[#FC763A]"
            }`}
          />
          {phoneValidation.status === 'error' && <p className="text-xs text-red-500 mt-1">{phoneValidation.msg}</p>}
          {phoneValidation.status === 'valid' && <p className="text-xs text-emerald-500 mt-1">{phoneValidation.msg}</p>}
        </div>
      </div>

      <div className="space-y-1">
        <label className="text-xs font-medium text-slate-700">
          Requirement Type
        </label>
        <select
          name="requirementType"
          required
          className="w-full rounded-lg border border-slate-600/50 px-3 py-2 text-sm focus:border-[#FC763A] focus:ring-2 focus:ring-[#FC763A] focus:outline-none transition"
        >
          <option>Rooftop – Residential</option>
          <option>Rooftop – Commercial</option>
          <option>Industrial / Factory</option>
          <option>Corporate / Multi-site</option>
          <option>Solar + Carbon Consulting</option>
          <option>Other / Not sure</option>
        </select>
      </div>

      <div className="space-y-1">
        <label className="text-xs font-medium text-slate-700">City / Location</label>
        <input
          name="city"
          required
          type="text"
          placeholder="City, State"
          className="w-full rounded-lg border border-slate-300 px-3 py-2 text-sm focus:border-[#FC763A] focus:ring-2 focus:ring-[#FC763A] focus:outline-none transition"
        />
      </div>

      <div className="space-y-1">
        <label className="text-xs font-medium text-slate-700">
          Describe your requirement
        </label>
        <textarea
          name="message"
          rows={4}
          placeholder="E.g. 200 kW rooftop for factory, monthly bill, timeline..."
          required
          className="w-full rounded-lg border border-slate-300 px-3 py-2 text-sm focus:border-[#FC763A] focus:ring-2 focus:ring-[#FC763A] focus:outline-none resize-none transition"
        />
      </div>

      <input type="hidden" name="source" value="Contact Page - TrueSun" />

      <button
        type="submit"
        disabled={status.loading}
        className="mt-2 bg-[#FC763A] text-white px-6 py-2.5 rounded-full text-sm font-medium shadow-md hover:shadow-lg hover:brightness-105 transition-all duration-300 disabled:opacity-60"
      >
        {status.loading ? "Sending..." : "Submit enquiry"}
      </button>

      <p className="text-[11px] text-slate-500 mt-2">
        We respect your privacy. Your details are used only to connect you with the
        TrueSun team.
      </p>

      {status.message && (
        <div
          className={`mt-3 text-sm ${status.ok ? "text-emerald-600" : "text-rose-600"}`}
          role={status.ok ? "status" : "alert"}
        >
          {status.message}
        </div>
      )}
    </form>
  );
}

const ContactPage: React.FC = () => {
  return (
    <div className="bg-slate-50 text-slate-800 min-h-screen py-16">
      {/* ========= PAGE TITLE ========= */}
      <div className="max-w-5xl mx-auto px-6 text-center mb-12">
        {/* Small pill badge */}
        <div className="inline-flex items-center gap-2 rounded-full bg-white shadow-sm border border-slate-200 px-4 py-1 text-[11px] font-medium text-slate-500 mb-4">
          <span className="h-1.5 w-1.5 rounded-full bg-[#FC763A] animate-pulse" />
          We respond within 24 hours
        </div>

        <h1 className="text-4xl font-semibold text-[#686868]">Contact <span className="text-[#FC763A]">TrueSun Energy</span></h1>

        {/* Gradient underline */}
        <div className="mt-3 h-1 w-24 mx-auto rounded-full bg-[#FC763A]" />

        <p className="text-slate-500 mt-4 max-w-3xl mx-auto">
          Have a question about rooftop solar, industrial power savings, or large-scale projects? Our team will guide you with clarity, feasibility insights and accurate savings numbers.
        </p>
      </div>

      {/* ========= CONTACT CARDS ========= */}
      <div className="max-w-7xl mx-auto px-6 grid gap-6 md:grid-cols-3 mb-16">
        {/* Phone */}
        <div className="group rounded-3xl border border-slate-200 bg-white p-8 shadow-sm hover:shadow-xl hover:-translate-y-1 hover:border-[#FC763A]/50 transition-all duration-300 ease-out relative overflow-hidden">
          <div className="absolute -top-4 -right-4 p-4 opacity-[0.03] group-hover:opacity-10 transition-opacity">
            <PhoneCall size={120} />
          </div>
          <div className="w-14 h-14 bg-orange-50 text-[#FC763A] rounded-xl flex items-center justify-center mb-6">
            <PhoneCall size={28} />
          </div>
          <p className="text-xs font-bold uppercase tracking-wide text-[#FC763A]">Call / WhatsApp</p>
          <h3 className="mt-2 text-xl font-bold text-slate-900">Talk to our team</h3>
          <p className="mt-2 text-sm text-slate-600 leading-relaxed">For quick queries, pricing estimates, or site visit scheduling.</p>
          <div className="mt-6 space-y-4 text-sm">
            <a href="tel:+918850845149" className="text-slate-800 font-semibold hover:text-[#FC763A] transition-colors flex items-center gap-3 text-base">
              <span className="w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center"><PhoneCall size={16} className="text-[#FC763A]" /></span> +91 88508 45149
            </a>
            <a href="https://wa.me/918850845149" target="_blank" rel="noreferrer" className="text-slate-800 font-semibold hover:text-emerald-500 transition-colors flex items-center gap-3 text-base">
              <span className="w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center"><MessageCircle size={16} className="text-emerald-500" /></span> Chat on WhatsApp
            </a>
          </div>
        </div>

        {/* Email */}
        <div className="group rounded-3xl border border-slate-200 bg-white p-8 shadow-sm hover:shadow-xl hover:-translate-y-1 hover:border-[#FC763A]/50 transition-all duration-300 ease-out relative overflow-hidden">
          <div className="absolute -top-4 -right-4 p-4 opacity-[0.03] group-hover:opacity-10 transition-opacity">
            <Mail size={120} />
          </div>
          <div className="w-14 h-14 bg-orange-50 text-[#FC763A] rounded-xl flex items-center justify-center mb-6">
            <Mail size={28} />
          </div>
          <p className="text-xs font-bold uppercase tracking-wide text-[#FC763A]">Email</p>
          <h3 className="mt-2 text-xl font-bold text-slate-900">Project Quotes</h3>
          <p className="mt-2 text-sm text-slate-600 leading-relaxed">Send RFQs, energy bills, tender details, or proposal requests.</p>
          <div className="mt-6 space-y-4 text-sm">
            <a href="mailto:info@truesun.in" className="text-slate-800 font-semibold hover:text-[#FC763A] transition-colors flex items-center gap-3 text-base break-all">
              <span className="w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center shrink-0"><Mail size={16} className="text-[#FC763A]" /></span> info@truesun.in
            </a>
          </div>
        </div>

        {/* Address */}
        <div className="group rounded-3xl border border-slate-200 bg-white p-8 shadow-sm hover:shadow-xl hover:-translate-y-1 hover:border-[#FC763A]/50 transition-all duration-300 ease-out relative overflow-hidden">
          <div className="absolute -top-4 -right-4 p-4 opacity-[0.03] group-hover:opacity-10 transition-opacity">
            <MapPin size={120} />
          </div>
          <div className="w-14 h-14 bg-orange-50 text-[#FC763A] rounded-xl flex items-center justify-center mb-6">
            <MapPin size={28} />
          </div>
          <p className="text-xs font-bold uppercase tracking-wide text-[#FC763A]">Office</p>
          <h3 className="mt-2 text-xl font-bold text-slate-900">Visit TrueSun</h3>
          <p className="mt-2 text-sm text-slate-600 leading-relaxed">Meet our engineering team and discuss your solar requirement in person.</p>
          <div className="mt-6 text-sm text-slate-800 font-medium flex items-start gap-3">
            <span className="w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center shrink-0"><MapPin size={16} className="text-[#FC763A]" /></span>
            <span className="leading-relaxed relative top-1">
              8th floor, B-Wing, Peninsula Business Park, Tower B, Lower Parel, 
              Mumbai - 400013
            </span>
          </div>
          <p className="mt-5 text-xs font-semibold text-slate-400">Appointments preferred · Parking available</p>
        </div>
      </div>

      {/* ========= FORM + MAP ========= */}
      <div className="max-w-7xl mx-auto px-6 grid gap-12 lg:grid-cols-2">
        {/* ---- FORM ---- */}
        <div className="p-6 border border-slate-600/20 rounded-2xl bg-white shadow-xl hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 ease-out">
          <h2 className="text-2xl font-semibold text-slate-900">Send us your requirement</h2>
          <p className="mt-2 text-sm text-slate-500">Share a few details and our team will get back with feasibility, savings estimate and next steps.</p>

          <ContactForm />
        </div>

        {/* ---- MAP + DETAILS ---- */}
        <div className="space-y-6">
          <div className="rounded-2xl overflow-hidden border border-slate-600/50 shadow-sm bg-white hover:shadow-xl hover:-translate-y-1 transition-all duration-300 ease-out">
            <div className="aspect-4/3 w-full">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3797.03742712239!2d72.8266296751532!3d18.998690154395128!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7cf494fee7d19%3A0xd15155d3f91eaee3!2sTrueSun%20Energy%20Solutions%20Private%20Limited!5e1!3m2!1sen!2sin!4v1775737153470!5m2!1sen!2sin"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="w-full h-full border-0"
                title="TrueSun Location"
              />
            </div>
          </div>

          <div className="p-7 border border-slate-900/20 rounded-2xl bg-white shadow-xl hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 ease-out">
            <h3 className="text-lg font-semibold text-slate-900">Areas We Serve</h3>
            <p className="mt-2 text-sm text-slate-600">TrueSun supports projects across Maharashtra and major industrial cities across India.</p>

            <div className="grid sm:grid-cols-2 gap-4 mt-4 text-sm">
              <div>
                <p className="text-slate-500">Primary Regions</p>
                <p> Maharashtra</p>
              </div>
              <div>
                <p className="text-slate-500">Typical Project Size</p>
                <p>20 kW – 5 MW+ (C&amp;I + Industrial)</p>
              </div>
            </div>

            <p className="text-xs text-slate-500 mt-4 border-t pt-3">
              Fast-track support available for urgent RFQs, tenders and corporate feasibility studies. Mention deadlines in your message for priority support.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
