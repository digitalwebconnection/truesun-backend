 

import React from "react";
import { motion, type Variants, easeInOut } from "framer-motion";

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
    image: "https://truesun.in/wp-content/uploads/2022/02/2-1.png",
    bio: "15+ years in clean energy and climate finance, steering multi-MW programs and strategic partnerships that scale reliable solar outcomes.",
    tags: ["Climate Strategy", "Solar EPC", "Partnerships"],
    linkedin: "https://www.linkedin.com/",
  },
  {
    name: "R.C. Goyal",
    title: "Head of Project Finance",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTabOgeMNrSqYJ4c2-kMg0I_QreIqbVVfgvWQ&s",
    bio: "Chartered Accountant leading bankable structures, SPVs, and risk frameworks to accelerate distributed solar portfolios across India.",
    tags: ["Project Finance", "Risk & Compliance", "SPV Structuring"],
    linkedin: "https://www.linkedin.com/",
  },
  {
    name: "Ashutosh Dwivedi",
    title: "Senior Technical Advisor",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTabOgeMNrSqYJ4c2-kMg0I_QreIqbVVfgvWQ&s",
    bio: "Engineer with MBA in Power Management, optimizing performance ratios, open access, and O&M playbooks for long-term yield.",
    tags: ["Performance PR", "Open Access", "O&M"],
    linkedin: "https://www.linkedin.com/",
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

/* -------------------- FAQ (boxed, one Q/A per card) -------------------- */

type AccordionItemProps = { q: string; a: string };

function FAQCard({ q, a }: AccordionItemProps) {
  const [open, setOpen] = React.useState(false);
  const id = React.useId();

  return (
    <motion.div
      variants={{
        hidden: { opacity: 0, y: 10 },
        show: { opacity: 1, y: 0, transition: { duration: 0.3 } },
      }}
      className="rounded-2xl border border-gray-200 bg-white shadow-sm transition-shadow hover:shadow-md"
    >
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
        aria-controls={id}
        className="flex w-full items-center justify-between gap-4 px-5 py-4"
      >
        <span className="text-base font-semibold text-neutral-900">{q}</span>
        <span
          className={`inline-flex h-7 w-7 items-center justify-center rounded-full ring-1 ring-neutral-300 transition-transform ${
            open ? "rotate-45" : ""
          }`}
          aria-hidden
        >
          <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none">
            <path
              d="M12 5v14M5 12h14"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
            />
          </svg>
        </span>
      </button>

      {/* content box with smooth height/opacity */}
      <motion.div
        id={id}
        initial={false}
        animate={open ? "open" : "collapsed"}
        variants={{
          open: { height: "auto", opacity: 1 },
          collapsed: { height: 0, opacity: 0 },
        }}
        transition={{ duration: 0.28, ease: "easeInOut" }}
        className="overflow-hidden px-5"
      >
        <div className="pb-5">
          <p className="text-sm leading-relaxed text-neutral-600">{a}</p>
        </div>
      </motion.div>
    </motion.div>
  );
}

function FAQSection() {
  const faqs: AccordionItemProps[] = [
    {
      q: "Can you help with subsidies?",
      a: "Yes, we handle end-to-end documentation and DISCOM coordination for applicable schemes.",
    },
    {
      q: "Do you offer O&M?",
      a: "We provide AMC and remote monitoring with SLAs tailored to your plant size.",
    },
    {
      q: "What warranties do I get?",
      a: "Typically 30-year performance on modules, 5–10 years on inverters, and workmanship warranty.",
    },
    {
      q: "How soon can I go live?",
      a: "Residential systems often go live in 2–4 weeks depending on approvals; commercial timelines vary.",
    },
  ];

  return (
    <div className="bg-linear-to-br from-white via-amber-50/50 to-emerald-50/50 py-16">
      <div className="mx-auto max-w-5xl px-6">
        <motion.div {...fadeUpProps} className="mx-auto mb-8 max-w-2xl text-center">
          <h2 className="text-3xl font-bold text-[#fc763a]">FAQs</h2>
          <p className="mt-2 text-gray-600">Quick answers to common questions</p>
        </motion.div>

        {/* grid of individual boxed items (no divide-y) */}
        <motion.div
          variants={{ hidden: { opacity: 1 }, show: { opacity: 1, transition: { staggerChildren: 0.08 } } }}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-1 gap-4"
        >
          {faqs.map((f, i) => (
            <FAQCard key={i} q={f.q} a={f.a} />
          ))}
        </motion.div>
      </div>
    </div>
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
          Leadership Team
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
        className="mx-auto mt-12 grid max-w-7xl grid-cols-1 gap-8 px-6 sm:grid-cols-2 lg:grid-cols-3"
      >
        {LEADERS.map((m) => (
          <motion.article
            key={m.name}
            variants={card}
            whileHover={{ y: -6, scale: 1.01 }}
            className="group relative overflow-hidden rounded-2xl bg-white shadow-2xl shadow-black/30 ring-2 ring-amber-600/20 transition-all"
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
            <div className="relative h-80 w-full overflow-hidden">
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
            <div className="p-6">
              <h3 className="text-xl font-semibold text-neutral-900">{m.name}</h3>
              <p className="mt-2 text-sm leading-relaxed text-neutral-600">{m.bio}</p>

              <div className="mt-4 flex flex-wrap gap-2">
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
