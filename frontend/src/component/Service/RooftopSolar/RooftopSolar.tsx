 

import React from "react";
import { motion } from "framer-motion";
import type { Variants } from "framer-motion";
import {
  Sun,
  Home,
  Gauge,
  ShieldCheck,
  Leaf,
  Wrench,
  ClipboardCheck,
  LineChart,
  PhoneCall,
  FileDown,
} from "lucide-react";

/* =============================
    THEME TOKENS
============================= */
const BRAND = {
  primary: "#262755", // deep blue
  accent: "#ffd740",  // warm yellow
  surface: "#ffffff",
  text: "#0f172a",    // slate-900
  subtext: "#475569", // slate-600
};

/* =============================
    ANIMATION VARIANTS
============================= */
const containerStagger: Variants = {
  hidden: { opacity: 0, y: 16 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, when: "beforeChildren", staggerChildren: 0.08 },
  },
};

const itemRise: Variants = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.45 } },
};

const floatSlow: Variants = {
  initial: { y: 0 },
  animate: { y: [0, -12, 0], transition: { duration: 8, repeat: Infinity } },
};

/* =============================
    MINI UI PRIMITIVES
============================= */
const Section = ({
  id,
  children,
  className = "",
  bg = "bg-white",
}: {
  id?: string;
  children: React.ReactNode;
  className?: string;
  bg?: string;
}) => (
  <section id={id} className={`relative ${bg} ${className}`}>
    {children}
  </section>
);

const Container = ({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) => (
  <div className={`mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8 ${className}`}>
    {children}
  </div>
);

const Pill = ({ children }: { children: React.ReactNode }) => (
  <span className="inline-flex items-center gap-2 rounded-full bg-white/90 px-8 py-2 text-xs font-semibold text-gray-800 ring-1 ring-black/10 shadow-sm">
    {children}
  </span>
);


// Systems – interactive list block
const SystemOptionBlock = ({
  title,
  points,
  isActive,
  onClick,
}: {
  title: string;
  points: string[];
  isActive: boolean;
  onClick: () => void;
}) => (
  <motion.div variants={itemRise} className="w-full">
    <button
      onClick={onClick}
      className={`w-full flex items-center justify-between p-4 rounded-xl transition-colors duration-300 ${isActive
          ? `bg-slate-900 text-white shadow-xl`
          : `bg-white text-slate-900 hover:bg-slate-50 border border-slate-600`
        }`}
    >
      <span className="text-left text-lg font-semibold">{title}</span>
      <span
        className={`px-3 py-1 text-xs font-bold rounded-full ${isActive ? "bg-amber-300 text-slate-900" : "bg-amber-200 text-slate-800"
          }`}
      >
        On-Grid / Hybrid
      </span>
    </button>
    {isActive && (
      <motion.div
        initial={{ opacity: 0, height: 0 }}
        animate={{ opacity: 1, height: "auto" }}
        exit={{ opacity: 0, height: 0 }}
        transition={{ duration: 0.3 }}
        className="mt-2 p-4 bg-white/70 rounded-xl shadow-inner border border-slate-100"
      >
        <ul className="space-y-2 text-sm text-slate-600">
          {points.map((p, j) => (
            <li key={j} className="flex items-start gap-2">
              <span
                className="mt-1 h-1.5 w-1.5 rounded-full shrink-0"
                style={{ background: BRAND.primary }}
              />
              <span>{p}</span>
            </li>
          ))}
        </ul>
        <div className="mt-4 flex items-center gap-2 text-xs text-slate-500">
          <ShieldCheck className="h-4 w-4" /> 30-year panel warranty • 5-10 year inverter warranty
        </div>
      </motion.div>
    )}
  </motion.div>
);

// Process – horizontal stepper
const ProcessStep = ({
  index,
  title,
  desc,
}: {
  index: number;
  title: string;
  desc: string;
}) => (
  <motion.div variants={itemRise} className="flex-1 min-w-[180px]">
    <div className="relative pt-8 pb-4">
      {/* Connector (hidden on small or last) */}
      {index < 5 && (
        <div className="absolute left-1/2 top-0 h-1/2 w-full -translate-x-1/2 md:top-auto md:h-1 md:w-1/2 md:left-full md:translate-x-0 md:-translate-y-1/2" />
      )}

      {/* Number bubble */}
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 h-10 w-10 flex items-center justify-center rounded-full text-base font-bold text-slate-900 ring-2 ring-offset-2 ring-slate-800/20 shadow-md"
        style={{ background: BRAND.accent }}
      >
        {index}
      </div>

      <h4 className="mt-2 text-center text-base font-semibold text-slate-900">
        {title}
      </h4>
      <p className="mt-2 text-center text-sm text-slate-600">{desc}</p>
    </div>
  </motion.div>
);

// Benefits – Fancy card used in redesigned grid
const FancyFeatureCard = ({
  icon,
  title,
  desc,
}: {
  icon: React.ReactNode;
  title: string;
  desc: string;
}) => (
  <motion.article
    variants={itemRise}
    className="group relative overflow-hidden rounded-3xl p-px shadow-sm transition-all hover:-translate-y-1"
    style={{
      background:
        "linear-gradient(135deg, rgba(255,215,64,0.65), rgba(38,39,85,0.65))",
    }}
  >
    <div className="relative h-full rounded-[calc(1.5rem-1px)] bg-white/95 p-6">
      <div className="pointer-events-none absolute -right-10 -top-10 h-32 w-32 rounded-full bg-amber-200/40 blur-2xl opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
      <div className="mb-4 flex items-center gap-3">
        <span className="inline-flex h-12 w-12 items-center justify-center rounded-2xl ring-1 ring-slate-200 bg-amber-50/60">
          {icon}
        </span>
        <h4 className="text-lg font-semibold text-slate-900">{title}</h4>
      </div>
      <p className="text-sm leading-6 text-slate-700">{desc}</p>
      <span className="mt-4 block h-0.5 w-14 origin-left scale-x-0 bg-amber-400 transition-transform duration-500 group-hover:scale-x-100" />
    </div>
  </motion.article>
);

/* =============================
    PAGE
============================= */
export default function RooftopSolarPage() {
  const [activeSystem, setActiveSystem] = React.useState(0);

  const systemOptionsData = [
    {
      title: "1–3 kW (Residential)",
      points: [
        "Covers lights, fans, fridge",
        "Area: ~80–240 sq.ft",
        "Payback: ~4–6 years",
      ],
      image:
        "https://truesun.in/wp-content/uploads/2021/06/IMG_3732-768x432.jpg",
    },
    {
      title: "5–10 kW (Villas/SMBs)",
      points: [
        "Runs ACs & heavier loads",
        "Area: ~400–800 sq.ft",
        "Great for common-area bills",
      ],
      image:
        "https://truesun.in/wp-content/uploads/2021/06/IMG_3743-768x432.jpg",
    },
    {
      title: "15–30 kW (Commercial/Societies)",
      points: [
        "High generation for shared loads",
        "Area: ~1200–2400 sq.ft",
        "Accelerated ROI at scale",
      ],
      image:
        "https://truesun.in/wp-content/uploads/2021/06/IMG_3742-768x432.jpg",
    },
  ];

  const processSteps = [
    { index: 1, title: "Site Survey", desc: "Roof assessment, load analysis, and shading study." },
    { index: 2, title: "Design & Quote", desc: "Panel layout, structure design, and proposal." },
    { index: 3, title: "Supply & Delivery", desc: "Panels, inverters, cabling, and protection devices." },
    { index: 4, title: "Installation", desc: "Mounting, wiring, earthing, testing, and commissioning." },
    { index: 5, title: "Net-Metering", desc: "Documentation, inspection, training, and AMC options." },
  ];

  const FALLBACK_IMG =
    "https://images.unsplash.com/photo-1509395062183-67c5ad6faff9?q=80&w=1600&auto=format&fit=crop";

  return (
    <main className="max-w-7xl mx-auto bg-white text-slate-800">
      {/* ================= HERO ================= */}
      <Section id="hero" className="overflow-hidden">
        <motion.div
          className="pointer-events-none absolute -top-40 -left-24 h-[520px] w-[520px] rounded-full blur-3xl"
          style={{ background: "radial-gradient(circle at 50% 50%, #ffd74066, transparent 65%)" }}
          variants={floatSlow}
          initial="initial"
          animate="animate"
          aria-hidden
        />
        <Container className="relative py-10 md:py-24">
          <motion.div
            variants={containerStagger}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
            className="grid items-start gap-12 md:grid-cols-12"
          >
            {/* left copy */}
            <motion.div variants={itemRise} className="md:col-span-6">
              <Pill>
                <Sun className="h-4 w-4" /> Rooftop Solar Panel Installation
              </Pill>
              <h1
                className="mt-4 text-4xl font-extrabold leading-tight text-slate-900 sm:text-6xl"
                style={{ lineHeight: 1.1 }}
              >
                Go Rooftop Solar. <span style={{ color: BRAND.primary }}>Cut Bills.</span> Power Up.
              </h1>
              <p className="mt-4 max-w-xl text-lg text-slate-600">
                End-to-end design, supply, and installation for homes, housing societies, schools, shops, and SMBs. We
                handle MNRE-aligned components, net-metering assistance, and post-install AMC.
              </p>

              <div className="mt-8 flex flex-wrap items-center gap-3">
                <a
                  href="#contact"
                  className="inline-flex items-center gap-2 rounded-xl px-6 py-3 text-base font-semibold text-slate-900 shadow-xl transition-all duration-300 hover:scale-[1.02]"
                  style={{ background: BRAND.accent }}
                >
                  <PhoneCall className="h-4 w-4" /> Get a Free Site Assessment
                </a>
                <a
                  href="#brochure"
                  className="inline-flex items-center gap-2 rounded-xl border border-slate-800 bg-white px-6 py-3 text-base font-semibold text-slate-900 shadow-sm transition-all duration-300 hover:border-slate-900"
                >
                  <FileDown className="h-4 w-4" /> Download Brochure
                </a>
              </div>

              <div className="mt-6 flex flex-wrap gap-4 text-sm font-medium">
                <span className="text-slate-800 flex items-center gap-1">
                  <LineChart className="h-4 w-4" /> Up to 80% Bill Savings
                </span>
                <span className="text-slate-800 flex items-center gap-1">
                  <ShieldCheck className="h-4 w-4" /> 30-Year Panel Warranty
                </span>
              </div>
            </motion.div>

            {/* right visual */}
            <motion.div variants={itemRise} className="md:col-span-6 md:col-start-7 relative">
              <div className="relative overflow-hidden rounded-3xl ring-2 ring-slate-900/50 shadow-2xl shadow-black/80">
                <img
                  src="https://truesun.in/wp-content/uploads/2021/06/IMG-20210406-WA0009-768x575.jpg"
                  alt="Rooftop solar panels on a residential home"
                  className="w-full object-cover h-[420px]"
                  loading="eager"
                  onError={(e) => {
                    (e.currentTarget as HTMLImageElement).src = FALLBACK_IMG;
                  }}
                />
              </div>
            </motion.div>
          </motion.div>
        </Container>
      </Section>

      {/* ============== SECTION 2: BENEFITS (Redesigned) ============== */}
      <Section id="benefits" className="relative overflow-hidden py-8 md:py-10">
        {/* soft patterned background */}
        <div className="pointer-events-none absolute inset-0 -z-10">
          <div className="absolute left-1/2 top-0 h-[520px] w-[820px] -translate-x-1/2 rounded-full bg-amber-200/20 blur-3xl" />
          <div className="absolute bottom-[-10%] right-[-10%] h-[420px] w-[420px] rounded-full bg-[rgba(38,39,85,0.08)] blur-3xl" />
        </div>

        <Container>
          <motion.div
            variants={containerStagger}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
            className="mx-auto max-w-7xl"
          >
            {/* header row */}
            <div className="grid items-end gap-6 md:grid-cols-[1.2fr,0.8fr]">
              <div>
                <p className="inline-flex items-center gap-2 rounded-full border border-amber-300/50 bg-amber-50/60 px-3 py-1 text-xs font-semibold text-slate-800">
                  <Sun className="h-4 w-4" /> Key Advantages
                </p>
                <h2 className="mt-3 text-3xl font-bold text-slate-900 sm:text-4xl">
                  Why Choose Rooftop Solar?
                </h2>
                <p className="mt-3 text-slate-600">
                  High-efficiency modules, smart inverters, and quality BOS deliver dependable generation year after year.
                </p>
              </div>
              <div className="grid grid-cols-2 gap-3 text-sm text-slate-700">
                <div className="rounded-2xl border border-slate-800 bg-white/80 p-4 text-center">
                  <div className="text-2xl font-extrabold text-slate-900">30+ yrs</div>
                  <div className="mt-1 text-xs text-slate-500">Panel performance warranty</div>
                </div>
                <div className="rounded-2xl border border-slate-800 bg-white/80 p-4 text-center">
                  <div className="text-2xl font-extrabold text-slate-900">80%*</div>
                  <div className="mt-1 text-xs text-slate-500">Potential bill reduction</div>
                </div>
              </div>
            </div>

            {/* cards grid */}
            <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              <FancyFeatureCard
                icon={<Gauge className="h-6 w-6 text-slate-900" />}
                title="Lower Electricity Bills"
                desc="Offset grid usage with clean solar energy; enjoy accelerated payback with net metering."
              />
              <FancyFeatureCard
                icon={<ShieldCheck className="h-6 w-6 text-slate-900" />}
                title="Reliable & Safe"
                desc="Tier-1 panels, BIS/MNRE-aligned inverters, DC protection, and surge safety as standard."
              />
              <FancyFeatureCard
                icon={<Leaf className="h-6 w-6 text-slate-900" />}
                title="Sustainable"
                desc="Reduce carbon footprint and support India’s green transition with every kilowatt installed."
              />
              <FancyFeatureCard
                icon={<Home className="h-6 w-6 text-slate-900" />}
                title="Perfect for Any Roof"
                desc="Concrete, metal, or tile — engineered structures ensure optimal tilt and wind resistance."
              />
              <FancyFeatureCard
                icon={<Wrench className="h-6 w-6 text-slate-900" />}
                title="End-to-End EPC"
                desc="Site survey, design, supply, installation, net-metering, and preventive maintenance."
              />
              <FancyFeatureCard
                icon={<ClipboardCheck className="h-6 w-6 text-slate-900" />}
                title="Hassle-Free Documentation"
                desc="Assistance with DISCOM formalities, subsidy guidance, and warranties in one place."
              />
            </div>

            {/* foot note */}
            <p className="mt-6 text-center text-xs text-slate-500">
              *Actual savings depend on tariff, usage profile, and DISCOM regulations.
            </p>
          </motion.div>
        </Container>
      </Section>

      {/* ============== SECTION 3: SYSTEM OPTIONS (Fixed Images) ============== */}
      <Section id="systems" className="py-8 md:py-10">
        <Container>
          <motion.div
            variants={containerStagger}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
          >
            <div className="mx-auto max-w-2xl text-center">
              <h2 className="text-4xl font-extrabold text-slate-900">Tailored Solar Solutions</h2>
              <p className="mt-3 text-lg text-slate-600">
                Select the system size that best fits your energy consumption and roof area.
              </p>
            </div>

            <div className="mt-10 grid gap-8 md:grid-cols-2">
              {/* Left: Interactive List/Tabs */}
              <div className="space-y-4">
                {systemOptionsData.map((card, i) => (
                  <SystemOptionBlock
                    key={i}
                    title={card.title}
                    points={card.points}
                    isActive={activeSystem === i}
                    onClick={() => setActiveSystem(i)}
                  />
                ))}
              </div>

              {/* Right: Visual for the Active System */}
              <motion.div
                key={activeSystem}
                initial={{ opacity: 0, scale: 0.98 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.35 }}
                className="relative overflow-hidden rounded-3xl ring-1 ring-slate-200 shadow-lg bg-slate-100"
              >
                <div className="relative h-full w-full aspect-16/10 sm:aspect-4/3 md:aspect-5/3 lg:aspect-video">
                  <img
                    src={systemOptionsData[activeSystem].image}
                    alt={`Rooftop solar installation for ${systemOptionsData[activeSystem].title}`}
                    className="absolute inset-0 h-full w-full object-cover"
                    loading="lazy"
                    onError={(e) => {
                      (e.currentTarget as HTMLImageElement).src = FALLBACK_IMG;
                    }}
                  />
                  <div className="absolute inset-0 bg-linear-to-t from-black/50 via-black/30 to-transparent" />
                </div>

                <div className="absolute inset-x-0 bottom-0 flex items-end p-5">
                  <div className="rounded-xl bg-white/90 px-4 py-2 text-sm font-semibold text-slate-900 ring-1 ring-black/70 shadow-sm">
                    {systemOptionsData[activeSystem].title}
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </Container>
      </Section>

      {/* ============== SECTION 4: PROCESS (Horizontal Stepper) ============== */}
      <Section id="process" className="py-8 md:py-10" bg="bg-[rgb(240,244,250)]">
        <Container>
          <motion.div
            variants={containerStagger}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
          >
            <div className="mx-auto max-w-3xl text-center">
              <h2 className="text-4xl font-extrabold text-slate-900">Simplified, 5-Step Installation</h2>
              <p className="mt-3 text-lg text-slate-600">
                Our EPC process is transparent, fully compliant, and always on schedule for a seamless transition to
                solar power.
              </p>
            </div>

            <div className="mt-12 flex flex-col md:flex-row gap-6 md:gap-0 justify-between items-stretch relative">
              <div className="absolute inset-y-0 left-1/2 -translate-x-1/2 w-1 bg-slate-200 md:hidden" />
              {processSteps.map((step) => (
                <ProcessStep key={step.index} index={step.index} title={step.title} desc={step.desc} />
              ))}
            </div>
          </motion.div>
        </Container>
      </Section>

      {/* ============== SECTION 5: CTA / CONTACT ============== */}
      <Section id="contact" className="py-8 md:py-10">
        <div >
          <Container>
            <motion.div
              variants={containerStagger}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.2 }}
              className="overflow-hidden rounded-3xl h-120 shadow-2xl shadow-black/50"
            >
              <div className="grid items-stretch gap-0 md:grid-cols-2 bg-white rounded-3xl">
                {/* Left: Contact Form */}
                <motion.div
                  variants={itemRise}
                  className="p-8 md:p-12"
                  style={{ background: BRAND.accent }}
                >
                  <h3 className="text-3xl font-bold text-slate-900 sm:text-4xl">
                    Ready to Cut Your Bills?
                  </h3>
                  <p className="mt-3 text-lg text-slate-800">
                    Book a free site assessment. Our engineers will evaluate your roof and share a customized energy
                    report and proposal.
                  </p>

                  <form onSubmit={(e) => e.preventDefault()} className="mt-6 grid gap-4 ">
                    <input className="rounded-xl border border-slate-900 px-5 py-3 text-sm outline-none focus:ring-4 focus:ring-white/50" placeholder="Your Name" />
                    <input className="rounded-xl border border-slate-900 px-5 py-3 text-sm outline-none focus:ring-4 focus:ring-white/50" placeholder="Phone Number" />
                    <input className="rounded-xl border border-slate-900 px-5 py-3 text-sm outline-none focus:ring-4 focus:ring-white/50" placeholder="City / Area (e.g., Ahmedabad, GJ)" />

                    <button
                      className="mt-4 inline-flex items-center justify-center gap-2 rounded-xl bg-slate-900 px-6 py-4 text-base font-semibold text-white shadow-xl transition-transform hover:scale-[1.01]"
                    >
                      <PhoneCall className="h-4 w-4" /> Request Call Back Now
                    </button>
                  </form>
                </motion.div>

                {/* Right: Info Visual */}
                <motion.div variants={itemRise} className="relative hidden md:block ">
                  <img
                    src="https://truesun.in/wp-content/uploads/2022/02/1-2-768x768.png"
                    alt="Technician installing a solar panel"
                    className="h-full w-full object-cover"
                    loading="lazy"
                    onError={(e) => {
                      (e.currentTarget as HTMLImageElement).src = FALLBACK_IMG;
                    }}
                  />
                  <div className="absolute inset-0 bg-slate-900/60 flex items-center justify-center">
                    <div className="text-white p-6 space-y-3">
                      <div className="text-xl font-bold border-b-2 pb-2 mb-4">Why Choose Us?</div>
                      <div className="flex items-center gap-2">
                        <ShieldCheck className="h-5 w-5" /> BIS/MNRE-Aligned Components
                      </div>
                      <div className="flex items-center gap-2">
                        <Gauge className="h-5 w-5" /> Full Net-Metering Support
                      </div>
                      <div className="flex items-center gap-2">
                        <Wrench className="h-5 w-5" /> Post-Installation AMC & Remote Monitoring
                      </div>
                    </div>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </Container>
        </div>
      </Section>
    </main>
  );
}
