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
    title: "Business Development Associate",
    location: "Mumbai",
    type: "Full-time · On-site",
    experience: "3–4 years",
    salary: "₹4–8 LPA",

    summary:
      "The role focuses on generating and closing business opportunities in the rooftop solar sector by building strong client and partner relationships. Requires strategic thinking, proactive execution, and strong communication skills.",

    points: [
      "Cold calling, presentations, and pitching to senior management",
      "Identify, screen, and close new clients using multiple strategies",
      "Proposal development and price discovery",
      "Develop and execute sales strategies with clear targets",
      "Plan and manage marketing campaigns and budgets",
      "Build relationships with regulators and renewable energy authorities",
      "Track and close tender-based leads",
      "Develop and manage channel partners to drive business growth"
    ],

    skills: [
      "MBA / Masters / Engineering background",
      "3–4 years experience in rooftop solar (mandatory)",
      "Strong communication skills (English required)",
      "Strategic thinking and execution capability",
      "Goal-oriented and proactive mindset",
      "Industrial & commercial sector experience preferred",
      "Marathi language preferred"
    ],
  },

  {
    title: "Solar Site & Design Engineer",
    location: "Mumbai (Site Travel Required)",
    type: "Full-time · On-site",
    experience: "3–5 years",

    summary:
      "Responsible for end-to-end solar plant design, site analysis, execution supervision, and performance monitoring. Requires strong technical expertise in solar design tools and on-ground execution.",

    points: [
      "Conduct site visits and electricity bill analysis",
      "Design plant considering shadow analysis and site conditions",
      "Prepare structure layouts and specifications",
      "Create plant layouts using AutoCAD and SketchUp",
      "Perform generation analysis using PVsyst",
      "Prepare BOM, pricing, and proposals",
      "Handle LT & HT design and cost estimation",
      "Perform cable and structure calculations",
      "Supervise installation & commissioning teams",
      "Prepare project timelines and execution reports",
      "Handle tender submissions and documentation",
      "Monitor plant performance and troubleshoot issues",
      "Coordinate with technology and BoM providers"
    ],

    skills: [
      "3–5 years experience in solar rooftop projects",
      "Strong knowledge of AutoCAD, SketchUp, Helioscope",
      "Understanding of net metering & subsidy policies",
      "Knowledge of electrical & structural design",
      "Ability to read LT & HT electricity bills",
      "Experience with On-grid & Off-grid systems",
      "Good communication skills (English required)",
      "Marathi language preferred",
      "Own vehicle preferred"
    ],
  },
  {
  title: "Admin & Executive Assistant (EA)",
  location: "Mumbai (On-site)",
  type: "Full-time",
  experience: "1–3 years",

  summary:
    "Responsible for managing day-to-day administrative operations, supporting leadership with scheduling and coordination, maintaining records, and ensuring smooth communication across teams and external stakeholders.",

  points: [
    "Manage calendars across Microsoft Teams, Outlook, and Google Calendar",
    "Track and monitor expenses, including petty cash management",
    "Oversee office supplies and ensure smooth office operations",
    "Support client outreach through calls and follow-ups",
    "Maintain and update attendance records",
    "Update and manage CRM data regularly",
    "Coordinate with external agencies and vendors",
    "Handle documentation and maintain organized records",
    "Assist in team scheduling, planning, and reporting",
    "Maintain employee performance and activity reports",
    "Coordinate between Sales and Operations teams",
    "Manage onboarding documentation and joining formalities",
    "Respond to emails and handle communication efficiently"
  ],

  skills: [
    "1–3 years experience in administrative or EA role",
    "Strong organizational and multitasking skills",
    "Proficiency in MS Office (Excel, Word, Outlook)",
    "Experience with CRM tools is preferred",
    "Good communication and coordination skills",
    "Ability to handle confidential information",
    "Strong attention to detail",
    "Basic understanding of office operations",
    "Proactive and problem-solving mindset"
  ]
}
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
            <p className="text-xs font-bold uppercase tracking-[0.2em]" style={{ color: brandYellow }}>
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
      <section className="py-16 sm:py-10" style={{ backgroundColor: brandBlue }}>
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-12 text-center">
            <p className="text-xs font-bold uppercase tracking-[0.2em]" style={{ color: brandYellow }}>
              Our Culture & Foundation
            </p>
            <h2 className="mt-2 text-3xl font-bold text-white sm:text-4xl">
              The TrueSun Way
            </h2>
          </div>

          <div className="grid gap-6 md:grid-cols-4">
            {values.map((val) => (
              <div
                key={val.title}
                className="flex flex-col gap-3 rounded-xl bg-white/30 p-5 ring-1 ring-white/10 backdrop-blur-sm transition hover:bg-white/10"
              >
                <div className="h-8 w-8 text-center" style={{ color: brandYellow }}>
                  {val.icon}
                </div>
                <h3 className="text-base font-bold text-white pt-1">
                  {val.title}
                </h3>
                <p className="text-sm text-slate-200">{val.body}</p>
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
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-slate-500">
              Current Opportunities
            </p>
            <h2 className="mt-2 text-3xl font-bold text-[#686868] sm:text-4xl">
              Join Our Team
            </h2>
            <p className="mt-3 max-w-2xl mx-auto text-sm text-slate-600">
              Don&apos;t see a perfect role? Send your profile to{" "}
              <span className="font-semibold text-slate-800">
                info@truesun.in
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
                    className={`overflow-hidden transition-all duration-300 ${isOpen ? "max-h-[1000px] p-5 pt-0" : "max-h-0"
                      }`}
                  >
                    <div className="border-t pt-4">
                      {/* Summary */}
                      <p className="text-sm text-slate-700">{job.summary}</p>

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
                          href={`mailto:info@truesun.in?subject=Application - ${job.title} - TrueSun`}
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
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-slate-500">
              Your Journey
            </p>
            <h2 className="mt-2 text-3xl font-bold text-[#686868] sm:text-4xl">
              Our Simple Hiring Process
            </h2>
          </div>

          <div className="relative grid gap-8 md:grid-cols-4">
            {/* The vertical connector line for desktop */}
            <div className="absolute top-0 bottom-0 left-0 hidden w-full md:block">
              <div className="h-1 w-full absolute top-12 left-0 right-0" style={{ backgroundColor: brandYellow + "80" }} />
            </div>

            {steps.map((s) => (
              <div
                key={s.step}
                className="relative flex flex-col gap-2 rounded-2xl bg-white p-5 pt-10 shadow-lg ring-1 ring-slate-600/40 md:pt-16"
              >
                {/* Step Circle with Icon */}
                <div
                  className="absolute -top-3 left-1/2 -translate-x-1/2 md:-top-6 md:left-auto md:translate-x-0 h-10 w-10 md:h-12 md:w-12 rounded-full flex items-center justify-center border-4 z-10"
                  style={{ borderColor: brandYellow, backgroundColor: brandLight }}
                >
                  {s.icon}
                </div>

                {/* Step Number Badge */}
                <p
                  className="text-xs font-bold tracking-[0.16em] absolute top-2 right-4 rounded-full px-2 py-0.5"
                  style={{ color: brandBlue, backgroundColor: brandYellow + "30" }}
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