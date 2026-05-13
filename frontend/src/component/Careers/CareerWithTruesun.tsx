import React, { useState } from "react";
// Assuming you have Lucide icons installed (npm install lucide-react)
import { Zap, Sun, Award, Handshake,  HardHat, FileText, Phone, CheckCircle, Mail, Users } from "lucide-react";

// --- Design Constants ---
const brandBlue = "#031E6C";
const brandYellow = "#F5B835";
const brandLight = "#F9FAFC"; // Very light off-white/grey

// --- Data (Unchanged) ---
const perks = [
  {
    icon: <Sun className="h-5 w-5" />,
    title: "Work on real solar impact",
    body: "Design and deliver rooftop and utility projects that reduce carbon footprints for homes, industries, and institutions.",
  },
  {
    icon: <Zap className="h-5 w-5" />,
    title: "Growth in a fast-moving industry",
    body: "Solar is growing rapidly in India. At TrueSun, you work on modern tech, tools, and processes that keep you ahead.",
  },
  {
    icon: <Award className="h-5 w-5" />,
    title: "Ownership & responsibility",
    body: "We believe in giving people clear goals, real responsibility, and the support to make decisions with confidence.",
  },
];

const values = [
  {
    icon: <Handshake className="h-5 w-5" />,
    title: "Customer-first",
    body: "We listen, educate, and always recommend what is right for the client—not just what is easy to sell.",
  },
  {
    icon: <HardHat className="h-5 w-5" />,
    title: "Safety & quality",
    body: "From design to installation, safety, standards, and quality of work always come before shortcuts.",
  },
  {
    icon: <FileText className="h-5 w-5" />,
    title: "Transparency",
    body: "Open communication, clear documentation, and honest timelines—internally and with customers & vendors.",
  },
  {
    icon: <Users className="h-5 w-5" />,
    title: "Team before ego",
    body: "We celebrate wins together and fix issues together. No blame culture—only solutions.",
  },
];

const openings = [
  {
    title: "Design Engineer - Rooftop Solar (India)",
    location: "Mumbai / Pan-India",
    type: "Full-time · On-site",
    experience: "3–4 years",
    summary:
      "We’re not looking for resume designers. We’re looking for someone who has actually designed and executed rooftop solar projects in India. Create practical layouts, handle stringing, SLDs, and optimize designs for performance and cost.\n\nWhy TrueSun: High ownership, zero bureaucracy, premium projects, and serious growth. We value people who think and act, not just talk.",
    points: [
      "Design 10 kW – 500 kW rooftop systems (residential, commercial, industrial)",
      "Create practical layouts (2D/3D), not just good-looking ones",
      "Handle stringing, SLDs, DC/AC cabling, BOQs",
      "Optimize designs to reduce cost without compromising performance",
      "Visit sites and ensure your design works on ground reality",
      "Factor in safety, structure, cleaning & maintenance from day one"
    ],
    skills: [
      "3–4 years real rooftop solar design experience in India",
      "Experience on actual sites, not just from office",
      "Strong in SketchUp, Helioscope, ARKA 360, PVsyst",
      "Ability to explain how your design saved cost in past projects",
      "NO theoretical or academic-only experience",
      "Must have handled end-to-end design",
      "Must be able to connect design with execution"
    ],
  },
  {
    title: "Senior Sales Executive – Rooftop Solar",
    location: "Mumbai",
    type: "Full-time · Field + Client Facing",
    experience: "2–5 years",
    salary: "₹5L – ₹6L Fixed + Incentives (Up to ₹8L CTC)",
    summary:
      "We are looking for a client-facing sales professional who can manage leads, build channel partners, and support the end-to-end sales process for rooftop solar projects. The role requires strong follow-up, basic technical understanding, and ownership of conversions.\n\nGrowth Opportunity: Fast-track growth into closing / Business Development role based on performance.",
    points: [
      "Call and qualify incoming leads",
      "Analyze electricity bills and explain basic savings/ROI",
      "Prepare and send proposals",
      "Follow up consistently to convert leads into customers",
      "Attend client meetings and site visits",
      "Build and manage channel partners (brokers, electricians, RWAs, architects)",
      "Generate new leads through partner network",
      "Maintain and update CRM daily (lead status, follow-ups, notes)",
      "Ensure strong pipeline tracking and no missed opportunities",
      "Coordinate with internal teams for design and execution",
      "Support closure of deals"
    ],
    skills: [
      "2–5 years experience in sales / solar / high-value products",
      "Good spoken and written English",
      "Confident interacting with clients",
      "Strong follow-up and ownership mindset",
      "Willing to do field work across Mumbai",
      "Comfortable using CRM tools (or quick learner)",
      "Important: Requires discipline in CRM and follow-ups",
      "Important: Involves working on high-value deals (₹10L+)"
    ],
  },
];

const steps = [
  {
    icon: <FileText className="h-6 w-6" style={{ color: brandBlue }} />,
    step: "01",
    title: "Share your profile",
    body: "Send us your updated resume, past work (if any), and a short note on why you want to work in solar.",
  },
  {
    icon: <Phone className="h-6 w-6" style={{ color: brandBlue }} />,
    step: "02",
    title: "Intro call",
    body: "Our HR / hiring team will schedule a quick call to understand your experience, interests, and expectations.",
  },
  {
    icon: <CheckCircle className="h-6 w-6" style={{ color: brandBlue }} />,
    step: "03",
    title: "Technical & culture fit",
    body: "Depending on the role, there may be a small assignment, technical round, or a meeting with the department head.",
  },
  {
    icon: <Mail className="h-6 w-6" style={{ color: brandBlue }} />,
    step: "04",
    title: "Offer & onboarding",
    body: "If we’re a mutual fit, we share the offer, onboarding plan, and your first 30–60–90 day roadmap.",
  },
];

// --- Component ---

const CareerWithTruesun: React.FC = () => {
const [openIndex, setOpenIndex] = useState<number | null>(0)
  return (
    <div className=" bg-slate-50 text-slate-900">

      {/* ===== WHY WORK WITH TRUESUN (PERKS) ===== */}
      <section
        id="life-at-truesun"
        className="py-8 sm:py-10"
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-10 text-center">
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#FC763A]">
              Your Career Benefits
            </p>
            <h2 className="mt-2 text-3xl font-bold text-[#686868] sm:text-4xl">
              Grow with the Sun
            </h2>
          </div>

          <div className="grid gap-8 md:grid-cols-3">
            {perks.map((perk) => (
              <div
                key={perk.title}
                className="flex flex-col gap-3 rounded-2xl bg-white p-6 shadow-xl transition duration-300 shadow-black/30 hover:shadow-2xl hover:scale-[1.02] ring-2 ring-slate-600/40"
              >
                <div className="flex items-center justify-center h-12 w-12 rounded-xl bg-slate-800 shadow-inner" style={{ color: brandBlue, backgroundColor: brandYellow + "20" }}>
                  {perk.icon}
                </div>
                <h3 className="text-lg font-bold text-slate-900 pt-1">
                  {perk.title}
                </h3>
                <p className="text-sm text-slate-600">
                  {perk.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <hr className="mx-auto max-w-7xl border-slate-200" />

      {/* ===== VALUES ===== */}
      <section className="py-8 md:py-12 bg-white border-y border-slate-100 relative">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-orange-50/80 via-white to-white -z-10" />
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-14 text-center">
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#FC763A]">
              Our Culture & Foundation
            </p>
            <h2 className="mt-3 text-3xl font-bold text-[#686868] sm:text-4xl">
              The TrueSun Way
            </h2>
          </div>

          <div className="grid gap-6 md:grid-cols-4">
            {values.map((val) => (
              <div
                key={val.title}
                className="group flex flex-col gap-3 rounded-2xl bg-white p-8 shadow-sm ring-1 ring-slate-100 transition-all hover:shadow-xl hover:shadow-orange-500/10 hover:-translate-y-1"
              >
                <div className="h-14 w-14 rounded-xl bg-orange-50 text-[#FC763A] flex items-center justify-center ring-1 ring-orange-100 group-hover:bg-[#FC763A] group-hover:text-white transition-colors">
                  {val.icon}
                </div>
                <h3 className="text-xl font-bold text-slate-900 pt-2">
                  {val.title}
                </h3>
                <p className="text-sm text-slate-600 leading-relaxed">{val.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <hr className="mx-auto max-w-7xl border-slate-200" />

      {/* ===== OPEN ROLES ===== */}
      <section
        id="open-roles"
        className="py-8 sm:py-10"
        style={{ backgroundColor: brandLight }}
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-0">

          {/* Header */}
          <div className="mb-10 text-center">
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#FC763A]">
              Current Opportunities
            </p>
            <h2 className="mt-2 text-3xl font-bold text-[#686868] sm:text-4xl">
              Join Our Team
            </h2>
            <p className="mt-3 max-w-2xl mx-auto text-sm text-black">
              Don&apos;t see a perfect role? Send your profile to{" "}
              <span className="font-semibold text-slate-800">
                support@truesun.in
              </span>{" "}
              for future consideration.
            </p>
          </div>

          {/* Job Cards */}
          <div className="space-y-4">
            {openings.map((job, index) => {
              const isOpen = openIndex === index

              return (
                <div
                  key={job.title}
                  className="rounded-2xl border border-slate-200 bg-white shadow-md transition"
                >
                  {/* HEADER */}
                  <button
                    onClick={() => setOpenIndex(isOpen ? null : index)}
                    className="flex w-full items-center justify-between p-5 text-left"
                  >
                    <div>
                      <h3 className="text-lg font-semibold text-[#FC763A]">
                        {job.title}
                      </h3>

                      <div className="mt-1 flex flex-wrap gap-2 text-xs text-slate-500">
                        <span>{job.location}</span>
                        <span>•</span>
                        <span>{job.type}</span>
                        <span>•</span>
                        <span>{job.experience}</span>
                        {job.salary && (
                          <>
                            <span>•</span>
                            <span className="font-medium text-slate-700">{job.salary}</span>
                          </>
                        )}
                      </div>
                    </div>

                    {/* Arrow */}
                    <span
                      className={`transition-transform ${isOpen ? "rotate-180" : ""
                        }`}
                    >
                      ▼
                    </span>
                  </button>

                  {/* CONTENT */}
                  <div
                    className={`overflow-hidden transition-all duration-300 ${isOpen ? "max-h-auto p-5 pt-0" : "max-h-0"
                      }`}
                  >
                    <div className="border-t py-4">
                      {/* Summary */}
                      <p className="text-sm text-slate-700 whitespace-pre-line">{job.summary}</p>

                      {/* Responsibilities */}
                      <h4 className="mt-4 text-sm font-semibold text-slate-900">
                        Key Responsibilities
                      </h4>
                      <ul className="mt-2 list-disc space-y-1 pl-5 text-sm text-slate-600">
                        {job.points.map((p) => (
                          <li key={p}>{p}</li>
                        ))}
                      </ul>

                      {/* Skills */}
                      <h4 className="mt-4 text-sm font-semibold text-slate-900">
                        Requirements
                      </h4>
                      <ul className="mt-2 list-disc space-y-1 pl-5 text-sm text-slate-600">
                        {job.skills.map((skill) => (
                          <li key={skill}>{skill}</li>
                        ))}
                      </ul>

                      {/* Apply Section */}
                      <div className="mt-5 flex flex-col items-start gap-3">
                        <p className="text-sm text-slate-600">
                          Apply now and get a response within 5 working days.
                        </p>

                        <a
                          href={`https://wa.me/918850845149?text=${encodeURIComponent(`Hello, I am interested in applying for the ${job.title} position at TrueSun.`)}`}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="rounded-full bg-linear-to-r from-[#FC763A] to-[#FFB347] px-6 py-3 text-sm font-semibold text-white shadow-md transition hover:scale-105"
                        >
                          Apply Now →
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>


      {/* ===== HIRING PROCESS ===== */}
      <section className="py-8 sm:py-10">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-10 text-center">
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#FC763A]">
              Your Journey
            </p>
            <h2 className="mt-2 text-3xl font-bold text-[#686868] sm:text-4xl">
              Our Simple Hiring Process
            </h2>
          </div>

          <div className="relative grid gap-8 md:grid-cols-4">
            {/* The vertical connector line for desktop */}
            <div className="absolute top-0 bottom-0 left-0 hidden w-full md:block">
              <div className="h-1 w-full absolute top-12 left-0 right-0 bg-[#FC763A]"/>
            </div>

            {steps.map((s) => (
              <div
                key={s.step}
                className="relative flex flex-col gap-2 rounded-2xl bg-white p-5 pt-10 shadow-lg ring-1 ring-slate-600/40 md:pt-16"
              >
                {/* Step Circle with Icon */}
                <div
                  className="absolute -top-3 left-1/2 -translate-x-1/2 md:-top-6 md:left-auto md:translate-x-0 h-10 w-10 md:h-12 md:w-12 rounded-full flex items-center justify-center border-4 z-10"
                  style={{ borderColor: '#FC763A', backgroundColor: brandLight }}
                >
                  {s.icon}
                </div>

                {/* Step Number Badge */}
                <p
                  className="text-xs font-bold tracking-[0.16em] absolute top-2 right-4 rounded-full px-2 py-0.5"
                  style={{ color: '#FC763A', backgroundColor: brandLight }}
                >
                  STEP {s.step}
                </p>

                <h3 className="text-lg font-bold text-slate-900 mt-2">
                  {s.title}
                </h3>
                <p className="text-sm text-slate-600">{s.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default CareerWithTruesun;