import React from "react";
import { motion, type Variants, easeInOut, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";
import nitumam from "../../assets/team/NituMam.jpg"
import Saif from "../../assets/team/SaifTeam.jpeg";
import rc from "../../assets/team/MrRc.jpeg"
/* -------------------- Types -------------------- */
type Leader = {
  name: string;
  title: string;
  image: string;
  bio: string;
  tags: string[];
  linkedin?: string;
};

/* -------------------- Data -------------------- */
const LEADERS: Leader[] = [
  {
    name: "Nitu Goel",
    title: "Founder & CEO",
    image: nitumam,
    bio: "20+ years in clean energy and climate finance, steering multi-MW programs and strategic partnerships that scale reliable solar outcomes.Trusted leader in forging high-impact collaborations with policymakers, investors, developers, and global technology partners to advance decarbonization at scale.Committed to transforming the clean energy landscape through strategic vision, operational excellence, and long-term value creation in solar and sustainable infrastructure.",
    tags: ["Climate Strategy", "Solar EPC", "Partnerships"],
    linkedin: "https://www.linkedin.com/in/nitug/",
  },
  {
    name: "R.C. Goyal",
    title: "Head of Project Finance",
    image: rc,
    bio: "Chartered Accountant leading bankable structures, SPVs, and risk frameworks to accelerate distributed solar portfolios across India.Bringing deep financial expertise in project structuring, compliance, and investment strategy to support scalable renewable energy ventures.Specialized in designing robust financial models, optimizing capital deployment, and ensuring regulatory alignment for large-scale solar initiatives.",
    tags: ["Project Finance", "Risk & Compliance", "SPV Structuring"],
    linkedin: "https://www.linkedin.com/company/truesun/",
  },
  {
    name: "MD Saif Ansari.",
    title: "Site Engineer",
    image: Saif,
    bio: "He holds a Diploma in Electrical Engineering with hands-on experience in electrical and solar energy systems. His expertise includes site inspections, electricity bill analysis, BOQ preparation, design drawings, and proposal development. He also manages site execution, client coordination, and project follow-ups to ensure smooth and efficient project delivery. His focus is on providing reliable, practical, and cost-effective electrical and solar solutions.",
    tags: ["Performance PR", "Open Access", "O&M"],
    linkedin: "https://www.linkedin.com/in/md-saif-ansari-753a80288/",
  },
];

/* -------------------- Motion Variants -------------------- */
const container: Variants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { when: "beforeChildren", staggerChildren: 0.12 },
  },
};

const card: Variants = {
  hidden: { opacity: 0, y: 22, scale: 0.98 },
  show: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { type: "spring", stiffness: 120, damping: 16 },
  },
};

// Reusable subtle fade-up
const fadeUpProps = {
  initial: { opacity: 0, y: 14 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.3 },
  transition: { duration: 0.5, ease: easeInOut as any },
};

/* -------------------- FAQ (boxed, matching SolarFAQ design) -------------------- */

function FAQSection() {
  const faqs = [
    {
      id: "f1",
      q: "Can you help with subsidies?",
      a: "Yes, we handle end-to-end documentation and DISCOM coordination for applicable schemes.",
    },
    {
      id: "f2",
      q: "Do you offer O&M?",
      a: "We provide AMC and remote monitoring with SLAs tailored to your plant size.",
    },
    {
      id: "f3",
      q: "What warranties do I get?",
      a: "Typically 30-year performance on modules, 5–10 years on inverters, and workmanship warranty.",
    },
    {
      id: "f4",
      q: "How soon can I go live?",
      a: "Residential systems often go live in 2–4 weeks depending on approvals; commercial timelines vary.",
    },
  ];

  const [openItem, setOpenItem] = React.useState<string | null>(null);

  return (
    <section className="bg-linear-to-br from-white via-amber-50/50 to-emerald-50/50 py-16">
      <script type="application/ld+json" dangerouslySetInnerHTML={{
        __html: `
{
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [{
    "@type": "Question",
    "name": "Can you help with subsidies?",
    "acceptedAnswer": {
      "@type": "Answer",
      "text": "Yes, we handle end-to-end documentation and DISCOM coordination for applicable schemes."
    }
  },{
    "@type": "Question",
    "name": "Do you offer O&M?",
    "acceptedAnswer": {
      "@type": "Answer",
      "text": "We provide AMC and remote monitoring with SLAs tailored to your plant size."
    }
  },{
    "@type": "Question",
    "name": "What warranties do I get?",
    "acceptedAnswer": {
      "@type": "Answer",
      "text": "Typically 30-year performance on modules, 5–10 years on inverters, and workmanship warranty."
    }
  },{
    "@type": "Question",
    "name": "How soon can I go live?",
    "acceptedAnswer": {
      "@type": "Answer",
      "text": "Residential systems often go live in 2–4 weeks depending on approvals; commercial timelines vary."
    }
  }]
}
      ` }} />
      <div className="mx-auto max-w-4xl px-4">
        <motion.div {...fadeUpProps} className="mx-auto mb-12 text-center">
          <h2 className="text-4xl font-black tracking-tight text-[#686868]">
            Frequently Asked <span className="text-[#FC763A]">Questions</span>
          </h2>
          <p className="mt-4 text-lg text-gray-500">Quick answers to common questions</p>
        </motion.div>

        <div className="space-y-6">
          {faqs.map(({ id, q, a }, index) => {
            const isOpen = openItem === id;
            const slideFrom = index % 2 === 0 ? 80 : -80;

            return (
              <motion.div
                key={id}
                initial={{ opacity: 0, x: slideFrom }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{
                  duration: 0.6,
                  delay: 0.1,
                  type: "spring",
                  stiffness: 100,
                }}
                className={`group overflow-hidden rounded-2xl border transition-shadow duration-300 ${isOpen
                    ? "border-[#FC763A] bg-orange-50/30 shadow-lg"
                    : "border-gray-200 bg-white hover:border-orange-300 hover:shadow-md"
                  }`}
              >
                <button
                  onClick={() => setOpenItem(isOpen ? null : id)}
                  className="flex w-full items-center justify-between p-6 text-left"
                >
                  <span
                    className={`text-lg font-bold transition-colors ${isOpen ? "text-[#FC763A]" : "text-gray-900"
                      }`}
                  >
                    {q}
                  </span>

                  <div
                    className={`ml-4 shrink-0 rounded-full p-1 transition-colors ${isOpen ? "bg-[#FC763A] text-white" : "bg-gray-100 text-gray-500"
                      }`}
                  >
                    <ChevronDown
                      className={`h-5 w-5 transition-transform duration-500 ${isOpen ? "rotate-180" : ""
                        }`}
                    />
                  </div>
                </button>

                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{
                        duration: 0.4,
                        ease: [0.04, 0.62, 0.23, 0.98],
                      }}
                    >
                      <div className="px-6 pb-6">
                        <div className="mb-4 h-px w-full bg-orange-100" />
                        <p className="text-gray-600 leading-relaxed italic">{a}</p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

/* -------------------- Main Section -------------------- */
export default function LeadershipSectionModern() {
  return (
    <section className="relative overflow-hidden bg-linear-to-b from-white via-amber-50/20 to-white py-10 sm:py-14">
      {/* Soft ambient glows */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <motion.div
          aria-hidden
          className="absolute left-1/2 top-[22%] h-[680px] w-[680px] -translate-x-1/2 rounded-full blur-3xl"
          style={{
            background:
              "radial-gradient(closest-side, rgba(251,191,36,0.18), transparent 70%)",
          }}
          animate={{ rotate: 360 }}
          transition={{ duration: 40, repeat: Infinity }}
        />
        <div
          aria-hidden
          className="absolute bottom-[-6%] right-[-6%] h-[380px] w-[380px] rounded-full blur-3xl"
          style={{
            background:
              "radial-gradient(closest-side, rgba(253,186,116,0.12), transparent 70%)",
          }}
        />
        <motion.div
          aria-hidden
          className="absolute bottom-[10%] left-[-8%] h-80 w-[320px] rounded-full blur-2xl"
          style={{
            background:
              "conic-gradient(from 210deg, rgba(250,204,21,0.10), transparent 40%, rgba(251,191,36,0.10))",
          }}
          animate={{ rotate: -360 }}
          transition={{ duration: 50, repeat: Infinity }}
        />
      </div>

      {/* Heading */}
      <div className="mx-auto max-w-3xl px-6 text-center">
        <p className="text-sm font-semibold uppercase tracking-wider text-[#FC763A]">
          Meet the Visionaries
        </p>
        <h2 className="mt-2 text-4xl font-extrabold tracking-tight text-[#686868] sm:text-5xl">
          Meet Our Team Membes
        </h2>
        <p className="mt-4 text-lg text-neutral-600">
          A seasoned group shaping renewable energy with financial rigor, technical depth,
          and delivery excellence.
        </p>
      </div>

      {/* Cards */}
      <motion.div
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
        className="mx-auto mt-12 grid max-w-6xl grid-cols-1 gap-8 px-6 sm:grid-cols-2 lg:grid-cols-3"
      >
        {LEADERS.map((m) => (
          <motion.article
            key={m.name}
            variants={card}
            whileHover={{ y: -6, scale: 1.01 }}
            className="group relative flex flex-col h-full overflow-hidden rounded-2xl bg-white shadow-2xl shadow-black/30 ring-2 ring-amber-600/20 transition-all"
          >
            {/* subtle gradient border on hover */}
            <div
              className="pointer-events-none absolute inset-0 rounded-2xl opacity-0 transition-opacity duration-300 group-hover:opacity-100"
              style={{
                background:
                  "linear-gradient(180deg, rgba(255,255,255,0.96), rgba(255,255,255,0.98)) padding-box, linear-gradient(130deg, rgba(251,191,36,0.6), rgba(253,186,116,0.45), rgba(251,191,36,0.25)) border-box",
                WebkitMask:
                  "linear-gradient(#000, #000) padding-box, linear-gradient(#000, #000) border-box",
                WebkitMaskComposite: "xor",
                maskComposite: "exclude",
                border: "1px solid transparent",
              }}
            />

            {/* Image */}
            <div className="relative h-80 w-full overflow-hidden shrink-0">
              <img
                src={m.image}
                alt={m.name}
                className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.05]"
              />
              <div className="absolute inset-0 bg-linear-to-t from-black/35 via-black/10 to-transparent opacity-90 transition-opacity duration-300 group-hover:opacity-100" />
              <span className="absolute bottom-3 left-3 rounded-full bg-[#FC763A] px-3 py-1 text-xs font-bold text-white shadow">
                {m.title}
              </span>
            </div>

            {/* Body */}
            <div className="p-6 flex flex-col flex-1">
              <h3 className="text-xl font-semibold text-neutral-900">{m.name}</h3>
              <p className="mt-2 text-sm leading-relaxed text-neutral-600">{m.bio}</p>

              <div className="mt-auto pt-4 flex flex-wrap gap-2">
                {m.tags.map((t) => (
                  <motion.span
                    key={t}
                    initial={{ opacity: 0, y: 6 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="rounded-full px-2.5 py-1 text-[11px] font-medium text-amber-900 ring-1 ring-[#FC763A]"
                    style={{
                      background:
                        "linear-gradient(135deg, rgba(255,237,213,0.9), rgba(254,243,199,0.9))",
                    }}
                  >
                    {t}
                  </motion.span>
                ))}
              </div>

              <div className="mt-5 flex items-center justify-between">
                <span className="text-xs text-neutral-500">Leadership excellence</span>
                {m.linkedin && (
                  <a
                    href={m.linkedin}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 rounded-full bg-neutral-50 px-3 py-1.5 text-xs font-semibold text-neutral-800 ring-1 ring-neutral-200 transition-all hover:-translate-y-0.5 hover:bg-amber-50 hover:text-amber-800 hover:ring-[#FC763A]"
                  >
                    <svg viewBox="0 0 24 24" className="h-4 w-4" aria-hidden="true">
                      <path
                        d="M4.98 3.5C4.98 4.88 3.86 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1s2.48 1.12 2.48 2.5zM0 8.98h5V24H0V8.98zM8.82 8.98h4.79v2.05h.07c.67-1.27 2.31-2.6 4.76-2.6 5.09 0 6.03 3.35 6.03 7.7V24h-5v-6.69c0-1.6-.03-3.65-2.23-3.65-2.23 0-2.57 1.73-2.57 3.53V24h-5V8.98z"
                        fill="currentColor"
                      />
                    </svg>
                    LinkedIn
                  </a>
                )}
              </div>
            </div>

            {/* Ambient conic spin */}
            <motion.div
              aria-hidden
              className="pointer-events-none absolute -inset-8 -z-10 rounded-[28px] opacity-0 blur-2xl transition-opacity duration-500 group-hover:opacity-100"
              animate={{ rotate: 360 }}
              transition={{ duration: 24, repeat: Infinity }}
              style={{
                background:
                  "conic-gradient(from 20deg, rgba(251,191,36,0.18), transparent 25%, rgba(253,186,116,0.16), transparent 60%)",
              }}
            />
          </motion.article>
        ))}
      </motion.div>

      {/* FAQ Section (boxed items) */}
      <FAQSection />
    </section>
  );
}

