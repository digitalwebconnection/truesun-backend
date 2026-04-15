
import { motion, type Variants } from "framer-motion";
import {
  Sun,
  Building2,
  Wallet,
  LineChart,
  ShieldCheck,
  PlugZap,
  Leaf,
  Sparkles,
  Factory,
  Hospital,
  GraduationCap,
  Store,
  Cog,
  FileText,
  ChevronRight,
  Check,
  Zap,
  HardHat,
  DollarSign
} from "lucide-react";

/* =============================
   THEME – Ink (charcoal), Paper (porcelain), Accent (coral), Glow (mint)
   Tailwind tip: we bind CSS variables on the root section and then reference them via inline style
   where we need opacity, or Tailwind arbitrary values for solid colors.
============================= */
const THEME = {
  ink: "#0E1726", // charcoal-navy
  paper: "#FAFBFD", // near-white
  accent: "#FF6B35", // coral orange
  accent2: "#6EE7B7", // mint glow
  slate: "#334155", // text slate
};

const container: Variants = {
  hidden: { opacity: 0, y: 22 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, when: "beforeChildren", staggerChildren: 0.08 },
  },
};

const item: Variants = {
  hidden: { opacity: 0, y: 14 },
  show: { opacity: 1, y: 0, transition: { duration: 0.45 } },
};

export default function SolarNovaIndustrialPage() {



  return (
    <section
      className="relative min-h-screen w-full"
      style={{
        // expose theme as CSS variables for inline usage
        // @ts-ignore
        "--ink": THEME.ink,
        // @ts-ignore
        "--paper": THEME.paper,
        // @ts-ignore
        "--accent": THEME.accent,
        // @ts-ignore
        "--mint": THEME.accent2,
      }}
    >
      {/* ================= HERO ================= */}
      <div className="relative isolate overflow-hidden" style={{ background: "var(--paper)" }}>
        {/* gradient banner */}
        <div className="absolute inset-x-0 top-0 -z-10 h-[520px] bg-[radial-gradient(120%_80%_at_90%_-10%,rgba(255,107,53,0.25),transparent_60%),radial-gradient(90%_70%_at_10%_0%,rgba(110,231,183,0.25),transparent_55%)]" />
        {/* subtle grid */}
        <div className="pointer-events-none absolute inset-0 -z-10 bg-[linear-gradient(to_right,rgba(14,23,38,0.04)_1px,transparent_1px),linear-gradient(to_bottom,rgba(14,23,38,0.04)_1px,transparent_1px)] bg-size-[24px_24px]" />

        <div className="mx-auto max-w-7xl px-6 pt-14 pb-10 md:pt-22 md:pb-14">
          <motion.div
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.25 }}
            className="grid items-center gap-10 md:grid-cols-2"
          >
            {/* Visual */}
            <motion.div variants={item} className="relative">
              <div className="relative rounded-2xl border border-black/10 bg-white/80 p-2 shadow-2xl shadow-black/40 backdrop-blur">
                <img
                  src="https://images.unsplash.com/photo-1558449028-b53a39d100fc?q=80&w=1600&auto=format&fit=crop"
                  alt="Rooftop solar on a modern building"
                  className="h-[380px] w-full rounded-xl object-cover"
                  loading="eager"
                />
                <div
                  className="pointer-events-none absolute -left-8 -top-8 h-24 w-24 rounded-full"
                  style={{ background: "color-mix(in oklab, var(--accent) 30%, transparent)", filter: "blur(24px)" }}
                />
                <div
                  className="pointer-events-none absolute -right-8 -bottom-8 h-24 w-24 rounded-full"
                  style={{ background: "color-mix(in oklab, var(--mint) 35%, transparent)", filter: "blur(24px)" }}
                />
              </div>
            </motion.div>

            {/* Copy */}
            <div>
              <motion.span
                variants={item}
                className="inline-flex items-center gap-2 rounded-full border border-black/10 bg-white/70 px-3 py-1 text-xs font-medium shadow-sm backdrop-blur"
                style={{ color: THEME.ink }}
              >
                <Sparkles className="h-4 w-4" color={THEME.accent} /> A new standard for commercial & industrial solar
              </motion.span>
              <motion.h1
                variants={item}
                className="mt-4 text-3xl font-semibold leading-tight md:text-5xl"
                style={{ color: THEME.ink }}
              >
                Clean power that strengthens your bottom line
              </motion.h1>
              <motion.p variants={item} className="mt-4 max-w-2xl" style={{ color: "#0e1726b3" }}>
                Replace volatile grid tariffs with predictable solar generation. Built for offices, hospitals, schools,
                malls, and factories that work hardest in daylight.
              </motion.p>
             

              {/* KPI strip */}
              <motion.div variants={container} className="mt-8 grid gap-4 sm:grid-cols-3">
                {[
                  { k: "Payback", v: "< 3 yrs" },
                  { k: "Warranty", v: "25 yrs" },
                  { k: "Policy", v: "Net metering" },
                ].map((m) => (
                  <motion.div
                    key={m.k}
                    variants={item}
                    className="rounded-xl border border-black/50 bg-white p-4 shadow-lg shadow-black/20"
                  >
                    <p className="text-xs" style={{ color: "#0e172699" }}>
                      {m.k}
                    </p>
                    <p className="text-lg font-semibold" style={{ color: THEME.ink }}>
                      {m.v}
                    </p>
                  </motion.div>
                ))}
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* ================= COMMERCIAL & INDUSTRIAL VALUE BLOCKS ================= */}
      <section className="bg-white py-10">
        <div className="mx-auto max-w-7xl px-6">
          <motion.div
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
            className="grid gap-8 md:grid-cols-2"
          >
            {/* Commercial / SMB */}
            <motion.div
              variants={item}
              className="rounded-2xl border border-black/50 bg-white p-6 shadow-xl shadow-black/10"
            >
              <div className="inline-flex items-center gap-2 rounded-full bg-[rgba(255,107,53,0.06)] px-3 py-1 text-xs font-medium"
                   style={{ color: THEME.ink }}>
                <Building2 className="h-4 w-4" />
                Solar Power for Commercial
              </div>
              <h2 className="mt-4 text-xl font-semibold md:text-2xl" style={{ color: THEME.ink }}>
                Smart Energy for Smarter Businesses.
              </h2>
              <p className="mt-2 text-sm" style={{ color: "#0e1726b3" }}>
                Designed for shops, offices, schools, and SMBs that want predictable energy costs and stronger margins.
              </p>
              <ul className="mt-4 space-y-2 text-sm" style={{ color: "#0e1726b3" }}>
                <li className="flex gap-2">
                  <Check className="mt-0.5 h-4 w-4" style={{ color: THEME.accent }} />
                  Reduce electricity bills by up to 80% with rooftop solar.
                </li>
                <li className="flex gap-2">
                  <Check className="mt-0.5 h-4 w-4" style={{ color: THEME.accent }} />
                  Seamless integration with net-metering for cost efficiency.
                </li>
                <li className="flex gap-2">
                  <Check className="mt-0.5 h-4 w-4" style={{ color: THEME.accent }} />
                  Tier-1 hardware ensures safety and long-term reliability.
                </li>
                <li className="flex gap-2">
                  <Check className="mt-0.5 h-4 w-4" style={{ color: THEME.accent }} />
                  Trusted by shops, schools, offices, and SMBs across 38 cities.
                </li>
              </ul>
              <div className="mt-5">
                <a
                  href="#quote"
                  className="inline-flex items-center justify-center gap-2 rounded-xl px-4 py-2 text-sm font-semibold text-white shadow-md transition hover:-translate-y-px"
                  style={{ background: THEME.accent }}
                >
                  Get a Free Site Assessment for Your Business
                  <ChevronRight className="h-4 w-4" />
                </a>
              </div>
            </motion.div>

            {/* Industrial */}
            <motion.div
              variants={item}
              className="rounded-2xl border border-black/50 bg-white p-6 shadow-xl shadow-black/10"
            >
              <div className="inline-flex items-center gap-2 rounded-full bg-[rgba(110,231,183,0.12)] px-3 py-1 text-xs font-medium"
                   style={{ color: THEME.ink }}>
                <Factory className="h-4 w-4" />
                Solar Power for Modern Industry
              </div>
              <h2 className="mt-4 text-xl font-semibold md:text-2xl" style={{ color: THEME.ink }}>
                Powering Industry with Clean Energy.
              </h2>
              <p className="mt-2 text-sm" style={{ color: "#0e1726b3" }}>
                Tailored for plants, warehouses, and manufacturing units with high daytime loads and large rooftops.
              </p>
              <ul className="mt-4 space-y-2 text-sm" style={{ color: "#0e1726b3" }}>
                <li className="flex gap-2">
                  <Check className="mt-0.5 h-4 w-4" style={{ color: "#059669" }} />
                  High-yield solar systems designed for industrial rooftops.
                </li>
                <li className="flex gap-2">
                  <Check className="mt-0.5 h-4 w-4" style={{ color: "#059669" }} />
                  MNRE-approved, ISO-certified solutions for compliance and trust.
                </li>
                <li className="flex gap-2">
                  <Check className="mt-0.5 h-4 w-4" style={{ color: "#059669" }} />
                  30-year panel warranty and 5-year system warranty for durability.
                </li>
                <li className="flex gap-2">
                  <Check className="mt-0.5 h-4 w-4" style={{ color: "#059669" }} />
                  Proven track record: 650+ projects, 40+ MWp delivered.
                </li>
              </ul>
              <div className="mt-5">
                <a
                  href="#process"
                  className="inline-flex items-center justify-center gap-2 rounded-xl px-4 py-2 text-sm font-semibold text-white shadow-md transition hover:-translate-y-px"
                  style={{ background: "#059669" }}
                >
                  Explore Industrial Solutions
                  <ChevronRight className="h-4 w-4" />
                </a>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ================= WHY SOLAR (blended from both pages) ================= */}
      <div id="benefits" className="bg-white py-14">
        <div className="mx-auto max-w-7xl px-6">
          <motion.div variants={container} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.2 }}>
            <motion.h2 variants={item} className="text-2xl font-semibold md:text-3xl" style={{ color: THEME.ink }}>
              Why businesses & industries choose solar
            </motion.h2>
            <motion.p variants={item} className="mt-2 max-w-3xl" style={{ color: "#0e1726b3" }}>
              Finance-smart, brand-positive, and engineered for reliability.
            </motion.p>

            <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {[
                { icon: <Wallet className="h-6 w-6" />, t: "Lower daytime cost", d: "Generate power at point-of-use and reduce peak tariffs." },
                { icon: <PlugZap className="h-6 w-6" />, t: "Net metering", d: "Export excess and offset your monthly bill." },
                { icon: <ShieldCheck className="h-6 w-6" />, t: "Compliance-first", d: "MNRE-approved components and DISCOM-ready designs." },
                { icon: <Leaf className="h-6 w-6" />, t: "ESG upside", d: "Demonstrate Scope 2 reductions and lead responsibly." },
                { icon: <LineChart className="h-6 w-6" />, t: "Predictable ROI", d: "Lock in energy costs for 30+ years." },
                { icon: <Building2 className="h-6 w-6" />, t: "Asset value", d: "Modern rooftops that add valuation headroom." },
              ].map((f, i) => (
                <motion.div
                  key={i}
                  variants={item}
                  className="group rounded-2xl border border-black/50 bg-white p-6 shadow-xl transition hover:-translate-y-0.5 hover:shadow-2xl hover:shadow-black/30"
                >
                  <div className="flex items-start gap-3" style={{ color: THEME.ink }}>
                    <div className="rounded-xl p-3" style={{ background: "rgba(255,107,53,0.1)", color: THEME.accent }}>
                      {f.icon}
                    </div>
                    <div>
                      <h3 className="text-base font-semibold">{f.t}</h3>
                      <p className="mt-1 text-sm" style={{ color: "#0e1726b3" }}>
                        {f.d}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>

      {/* ================= SECTOR RIBBON ================= */}
      <div className="border-y border-black/40" style={{ background: "var(--paper)" }}>
        <div className="mx-auto max-w-7xl px-6 py-6">
          <div className="flex flex-wrap items-center justify-center gap-6" style={{ color: "#0e1726b3" }}>
            <span className="inline-flex items-center gap-2">
              <Factory className="h-4 w-4" /> Industrial Parks
            </span>
            <span className="inline-flex items-center gap-2">
              <Hospital className="h-4 w-4" /> Hospitals
            </span>
            <span className="inline-flex items-center gap-2">
              <GraduationCap className="h-4 w-4" /> Schools & Colleges
            </span>
            <span className="inline-flex items-center gap-2">
              <Store className="h-4 w-4" /> Malls & Retail
            </span>
            <span className="inline-flex items-center gap-2">
              <Building2 className="h-4 w-4" /> Corporate Offices
            </span>
          </div>
        </div>
      </div>
{/* ================= INDUSTRIAL SOLAR BENEFITS (REIMAGINED) ================= */}
<section className="relative mx-auto max-w-7xl px-6 py-14">
  <motion.div
    variants={container}
    initial="hidden"
    whileInView="show"
    viewport={{ once: true, amount: 0.2 }}
    className="space-y-12"
  >
    {/* Headline and Subtext */}
    <div className="mx-auto max-w-7xl text-center">
      <motion.h2
        variants={item}
        className="text-3xl font-extrabold tracking-tight sm:text-4xl"
        style={{ color: THEME.ink }}
      >
        Unlock Industrial Efficiency with Solar
      </motion.h2>
      <motion.p variants={item} className="mt-4 text-lg" style={{ color: '#0e1726b3' }}>
        Installing solar on your factory or warehouse is a strategic move that fundamentally reduces operational costs. Leverage industrial roofs for fast, scalable installation and maximize yield with smart optimizations.
      </motion.p>
    </div>

    {/* Key Metrics / Financial Summary - The New Focus */}
    <motion.div
      variants={item}
      className="grid grid-cols-1 gap-6 sm:grid-cols-3"
    >
      <div className="text-center rounded-xl bg-white p-6 shadow-lg border-t-4 border-[#FC763A]">
        <div className="text-4xl font-bold" style={{ color: '#000000' }}>
          &gt;30%
        </div>
        <div className="mt-2 text-sm font-medium uppercase tracking-wider text-gray-500">
          Return on Investment
        </div>
      </div>
      <div className="text-center rounded-xl bg-white p-6 shadow-lg border-t-4 border-[#FC763A]">
        <div className="text-4xl font-bold" style={{ color: '#000000' }}>
          &lt;4 Years
        </div>
        <div className="mt-2 text-sm font-medium uppercase tracking-wider text-gray-500">
          Typical Payback Period
        </div>
      </div>
      <div className="text-center rounded-xl bg-white p-6 shadow-lg border-t-4 border-[#FC763A]">
        <div className="text-4xl font-bold" style={{ color: '#000000' }}>
          60–80%+
        </div>
        <div className="mt-2 text-sm font-medium uppercase tracking-wider text-gray-500">
          Electricity Demand Offset
        </div>
      </div>
    </motion.div>

    {/* Detailed Benefits Grid (from old bullets and key facts) */}
    <motion.ul variants={container} className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4 pt-4">
      {[
        {
          icon: ShieldCheck,
          title: 'Immediate Cost Reduction',
          desc: 'Directly lowers operational expenses tied to high energy consumption and lighting requirements.',
        },
        {
          icon: Zap,
          title: 'Power Heavy Machinery',
          desc: 'The solar installation reliably supports heavy process loads, machinery, and essential ventilation systems.',
        },
        {
          icon: DollarSign,
          title: 'Accelerated Tax Edge',
          desc: 'Benefit from accelerated depreciation (AD) and relevant state/central government incentives for a faster financial closure.',
        },
        {
          icon: HardHat,
          title: 'Simplified Installation',
          desc: 'Metal sheds and RCC roofs simplify the engineering, making installation fast, scalable, and non-disruptive.',
        },
      ].map((b) => (
        <motion.li key={b.title} variants={item} className="space-y-3  hover:bg-amber-700/30 p-4 rounded-xl transition">
          <div
            className="flex h-12 w-12 items-center justify-center  rounded-xl"
            style={{ background: "#f0fdf4", color: "#047857" }} // Light Green background
          >
            <b.icon className="h-6 w-6" />
          </div>
          <div className="font-semibold" style={{ color: THEME.ink }}>
            {b.title}
          </div>
          <div className="text-sm" style={{ color: '#0e1726b3' }}>
            {b.desc}
          </div>
        </motion.li>
      ))}
    </motion.ul>
  </motion.div>
</section>

      {/* ================= RESULTS ================= */}
      <div className="bg-white py-14">
        <div className="mx-auto max-w-7xl px-6">
          <motion.div variants={container} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.2 }}>
            <motion.h2 variants={item} className="text-2xl font-semibold md:text-3xl" style={{ color: THEME.ink }}>
              Proven results on day one
            </motion.h2>
            <motion.p variants={item} className="mt-2 max-w-3xl" style={{ color: "#0e1726b3" }}>
              Illustrative outcomes; we model precisely for your site.
            </motion.p>

            <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {[
                { k: "Annual generation (100 kW)", v: "~1.5 Lakh kWh" },
                { k: "Annual savings @₹8/unit", v: "~₹12 Lakh" },
                { k: "Payback window", v: "3–4 years" },
                { k: "CO₂ avoided", v: "~120 t/yr" },
              ].map((stat, i) => (
                <motion.div
                  key={i}
                  variants={item}
                  className="rounded-2xl border border-black/50 bg-white p-6 shadow-xl shadow-black/20"
                >
                  <p className="text-xs" style={{ color: "#0e172699" }}>
                    {stat.k}
                  </p>
                  <p className="mt-2 text-2xl font-bold" style={{ color: THEME.ink }}>
                    {stat.v}
                  </p>
                  <div className="mt-4 h-1 w-full rounded bg-black/10">
                    <div className="h-1 w-2/3 rounded" style={{ background: THEME.accent }} />
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>

      {/* ================= ROI TEASER ================= */}
      <section className="relative mx-auto max-w-7xl px-6 py-12">
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.25 }}
          className="grid items-center gap-8 rounded-2xl p-6 ring-1"
          style={{ background: "linear-gradient(45deg,#ffedd5,#fef3c7)", borderColor: "#f59e0b33" }}
        >
          <motion.div variants={item} className="space-y-3">
            <div className="text-sm font-semibold" style={{ color: "#78350f" }}>
              Faster Payback, Stronger Returns
            </div>
            <h3 className="text-2xl font-semibold" style={{ color: THEME.ink }}>
              Typical payback &lt; 4 years with RoI {">"}30%
            </h3>
            <p style={{ color: "#0e1726b3" }}>
              High peak load and large rooftops make solar perfect for factories and warehouses. Reduce your carbon
              footprint while boosting profitability.
            </p>
           
          </motion.div>
          <motion.div variants={item} className="grid grid-cols-2 gap-3">
            {[
              { t: "CapEx Support", d: "Flexible options incl. CAPEX/RESCO" },
              { t: "O&M", d: "End-to-end operations & maintenance" },
              { t: "Net-Metering", d: "Optimised for industrial tariffs" },
              { t: "Quality", d: "Tier-1 modules, proven in India" },
            ].map((c) => (
              <div
                key={c.t}
                className="rounded-xl p-4 ring-1"
                style={{ background: "white", borderColor: "#f59e0b33" }}
              >
                <div className="text-sm font-medium" style={{ color: THEME.ink }}>
                  {c.t}
                </div>
                <div className="text-sm" style={{ color: "#0e1726b3" }}>
                  {c.d}
                </div>
              </div>
            ))}
          </motion.div>
        </motion.div>
      </section>

      {/* ================= PROCESS ================= */}
      <section className="relative mx-auto max-w-7xl px-6 py-12" id="process">
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          className="grid gap-6 md:grid-cols-3"
        >
          {[
            { t: "Site Assessment", d: "Rooftop audit for Metal/RCC, load study, DISCOM checks.", i: Building2 },
            { t: "Design & Approvals", d: "PV sizing, structure design, net-metering & liaisoning.", i: FileText },
            { t: "Install & Commission", d: "Piles/rails, modules, inverter, SCADA & handover.", i: Cog },
          ].map((s) => (
            <motion.div
              key={s.t}
              variants={item}
              className="rounded-2xl border border-black/50 bg-white p-5 shadow-xl shadow-black/0"
            >
              <div
                className="mb-2 inline-flex h-10 w-10 items-center justify-center rounded-lg text-white"
                style={{ background: THEME.ink }}
              >
                <s.i className="h-5 w-5" />
              </div>
              <div className="font-semibold" style={{ color: THEME.ink }}>
                {s.t}
              </div>
              <div className="text-sm" style={{ color: "#0e1726b3" }}>
                {s.d}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* ================= CASE STUDIES + TESTIMONIAL ================= */}
      <div style={{ background: "var(--paper)" }}>
        <div className="mx-auto max-w-7xl px-6 py-12">
          <motion.div
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
            className="grid gap-10 lg:grid-cols-2"
          >
            <div>
              <motion.h3
                variants={item}
                className="text-xl font-semibold md:text-2xl"
                style={{ color: THEME.ink }}
              >
                Solar success in action
              </motion.h3>
              <div className="mt-6 space-y-4">
                {[
                  { n: "Nova Tech Park", s: "500 kW", o: "₹60L annual offset" },
                  { n: "Apex Hospitals", s: "180 kW", o: "₹20L annual offset" },
                  { n: "City Centre Mall", s: "350 kW", o: "₹42L annual offset" },
                ].map((cs, i) => (
                  <motion.div
                    key={i}
                    variants={item}
                    className="flex items-center justify-between rounded-xl border border-black/50 bg-white p-4 shadow-lg shadow-black/50"
                  >
                    <div>
                      <p className="text-sm font-semibold" style={{ color: THEME.ink }}>
                        {cs.n}
                      </p>
                      <p className="text-xs" style={{ color: "#0e172699" }}>
                        {cs.s} • {cs.o}
                      </p>
                    </div>
                    <LineChart className="h-5 w-5" style={{ color: "#0e172666" }} />
                  </motion.div>
                ))}
              </div>
            </div>

            <motion.div
              variants={item}
              className="relative rounded-2xl border border-black/50 bg-white p-6 shadow-xl shadow-black/50"
            >
              <div
                className="absolute -top-7 left-6 flex h-14 w-14 items-center justify-center rounded-full text-white shadow-lg"
                style={{ background: THEME.accent }}
              >
                <Sun className="h-6 w-6" />
              </div>
              <blockquote className="mt-6">
                <p className="text-lg leading-relaxed" style={{ color: "#0e1726cc" }}>
                  “Our grid bills dropped immediately and the project went live ahead of schedule. Clean, quiet, and
                  dependable.”
                </p>
                <footer className="mt-4 text-sm" style={{ color: "#0e172699" }}>
                  — Facilities Head, Fortune-500 Tenant
                </footer>
              </blockquote>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* ================= SIMPLE QUOTE / CTA ================= */}
      {/* <section id="quote" className="mx-auto max-w-7xl px-6 py-14">
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.25 }}
          className="rounded-2xl p-6 shadow-xl"
          style={{ background: "white", border: "1px solid rgba(0,0,0,0.1)" }}
        >
          <motion.h3 variants={item} className="text-xl font-semibold" style={{ color: THEME.ink }}>
            Get a free solar savings assessment
          </motion.h3>
          <motion.p variants={item} className="mt-1 text-sm" style={{ color: "#0e1726b3" }}>
            Share your address, connected load (kW), monthly bill (₹), and roof photos. We’ll model generation,
            savings, and payback for your site.
          </motion.p>
          <motion.form variants={container} className="mt-4 grid gap-3 md:grid-cols-2">
            <input className="rounded-xl border border-black/10 p-3 outline-none" placeholder="Company name" />
            <input className="rounded-xl border border-black/10 p-3 outline-none" placeholder="Email / Phone" />
            <input
              className="rounded-xl border border-black/10 p-3 outline-none md:col-span-2"
              placeholder="Address / Google Maps link"
            />
            <input className="rounded-xl border border-black/10 p-3 outline-none" placeholder="Connected load (kW)" />
            <input className="rounded-xl border border-black/10 p-3 outline-none" placeholder="Avg monthly bill (₹)" />
            <textarea
              className="rounded-xl border border-black/10 p-3 outline-none md:col-span-2"
              placeholder="Notes / roof details"
            ></textarea>
            <button
              type="button"
              className="mt-2 inline-flex items-center justify-center gap-2 rounded-xl px-5 py-3 font-semibold text-white md:col-span-2"
              style={{ background: THEME.accent }}
            >
              Request assessment <ChevronRight className="h-4 w-4" />
            </button>
          </motion.form>
        </motion.div>
      </section> */}
    </section>
  );
}
