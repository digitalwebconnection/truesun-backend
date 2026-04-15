 

import { motion, useScroll, useTransform} from "framer-motion";

import type { MotionProps, Variants, Easing } from "framer-motion";
import { Sun, Zap, Leaf, Users, Award, CheckCircle , ShieldCheck, GaugeCircle, Sparkles } from "lucide-react";


// ---------------------------
// Motion Setup & Keyframes
// ---------------------------
const EASE: Easing = [0.25, 0.46, 0.45, 0.94];

const fadeUpProps: MotionProps = {
  initial: { opacity: 0, y: 40 },
  whileInView: { opacity: 1, y: 0 },
  transition: { duration: 0.9, ease: EASE },
  viewport: { once: true, amount: 0.3 },
};

const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { staggerChildren: 0.15, delayChildren: 0.2, ease: EASE } },
};

const childFade: Variants = {
  hidden: { opacity: 0, y: 32, scale: 0.98 },
  show: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.7, ease: EASE } },
};

const floatIn: Variants = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: EASE } },
};

// Subtle continuous floating motion for timeline/stats
// const float: Variants = {
//   initial: { y: 0 },
//   animate: {
//     y: ["-2px", "2px", "-2px"],
//     transition: {
//       duration: 3,
//       repeat: Infinity,
//       ease: "easeInOut",
//     },
//   },
// };

const boxTilt: MotionProps = {
  whileHover: { y: -4, rotateX: -2, rotateY: 2, transition: { type: "spring", stiffness: 250, damping: 20 } },
};

// Parallax util (using fewer dependencies)
const useParallax = (distance: number) => {
  const { scrollYProgress } = useScroll();
  return useTransform(scrollYProgress, [0, 1], [0, -distance]);
};

// ---------------------------
// MAIN COMPONENT (Default Export)
// ---------------------------
export default function AboutTrueSun() {
  const y = useParallax(120);
  return (
    <section className="relative overflow-hidden bg-linear-to-br from-white via-amber-50/40 to-emerald-50/40 text-gray-900">
      {/* Soft nebula background with Pulse Animation */}
      <motion.div style={{ y }} className="pointer-events-none absolute inset-0">
        {/* Added animate-pulse-bg class for custom keyframe animation */}
        <div className="absolute -top-28 -left-16 h-72 w-72 rounded-full bg-yellow-400 blur-3xl opacity-40 animate-pulse-bg" />
       
        <div className="absolute top-1/3 left-1/2 h-80 w-80 -translate-x-1/2 rounded-full bg-amber-300 blur-3xl opacity-40 animate-pulse-bg [--animation-delay:4s]" />
      </motion.div>
      
      <HeroSplit />
      {/* <StatsRibbon /> */}
      <ZigZagWhyUs />
      <CurvedSteps />
      {/* <AlternatingTimeline /> */}

      {/* Custom Styles and Keyframes */}
      <style>
        {`
          @keyframes pulseBg {
            0% { transform: scale(1); opacity: 0.4; }
            50% { transform: scale(1.05); opacity: 0.55; }
            100% { transform: scale(1); opacity: 0.4; }
          }
          .animate-pulse-bg {
            animation: pulseBg 10s ease-in-out infinite;
            animation-delay: var(--animation-delay, 0s);
          }
        `}
      </style>
    </section>
  );
}

// About TrueSun -----
function HeroSplit() {
  return (
    <div className="relative mx-auto max-w-7xl px-6 py-10 lg:px-0">
      {/* Heading */}
      <motion.div {...fadeUpProps} className="relative mx-auto max-w-7xl text-center">
        <div className="inline-flex items-center gap-2 rounded-full border border-amber-300/70 bg-white/80 px-4 py-1.5 text-xs font-semibold text-amber-700 shadow-sm backdrop-blur">
          <Sparkles className="h-3.5 w-3.5" />
          Trusted Solar Partner for Homes & Businesses
        </div>

        <h1 className="mt-2 text-4xl font-extrabold tracking-tight text-[#686868] sm:text-5xl">
          About{" "}
          <span className="text-[#fc763a]">
            TrueSun
          </span>
        </h1>

        <p className="mx-auto mt-4 max-w-7xl text-lg text-gray-700">
          We turn rooftops and land into long-term energy assets—delivering
          compliant, data-driven solar that pays back faster and performs
          reliably for decades.
        </p>
      </motion.div>

      {/* 1. Mission & Vision */}
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="relative mt-10 grid items-stretch gap-6 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,0.9fr)]"
      >
        {/* Vision card */}
        <motion.div
          variants={childFade}
          className="relative overflow-hidden rounded-3xl border border-emerald-500/70 bg-linear-to-br from-white/90 via-emerald-100/90 to-emerald-100/80 p-6 shadow-xl shadow-emerald-900/15 backdrop-blur"
          {...boxTilt}
        >
          <div className="absolute -right-10 -top-10 h-32 w-32 rounded-full bg-emerald-200/40 blur-2xl" />
          <div className="relative flex items-center gap-3">
            <div className="flex h-9 w-9 items-center justify-center rounded-2xl bg-emerald-600 text-white shadow-md">
              <Leaf className="h-5 w-5" />
            </div>
            <div>
              <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-emerald-700">
                Our Vision
              </p>
              <h3 className="text-lg font-bold text-gray-900">
                Lead India towards a truly net-zero future
              </h3>
            </div>
          </div>

          <p className="relative mt-3 text-sm leading-relaxed text-gray-700">
            Build a 500+ MWp distributed solar portfolio by 2030—across homes,
            businesses, industries, and communities—seamlessly integrated with
            smart grids, storage, and digital monitoring.
          </p>

          <ul className="relative mt-4 space-y-2 text-sm text-gray-700">
            {[
              "Net-zero ready solar across residential, commercial & industrial segments.",
              "Smart-grid, storage and community-solar ready architectures.",
              "Systems engineered to perform for 30+ years with minimal downtime.",
            ].map((t, i) => (
              <li key={i} className="flex items-start gap-2">
                <CheckCircle className="mt-0.5 h-4 w-4 text-emerald-600" />
                <span>{t}</span>
              </li>
            ))}
          </ul>
        </motion.div>

        {/* Mission card */}
        <motion.div
          variants={childFade}
          className="relative overflow-hidden rounded-3xl border border-[#fc763a]/70 bg-linear-to-br from-white/95 via-amber-50/90 to-amber-100/80 p-6 shadow-xl shadow-amber-900/10 backdrop-blur"
          {...boxTilt}
        >
          <div className="absolute -left-12 top-1/2 h-32 w-32 -translate-y-1/2 rounded-full bg-amber-200/60 blur-2xl" />
          <div className="relative flex items-center gap-3">
            <div className="flex h-9 w-9 items-center justify-center rounded-2xl bg-[#FC763A] text-white shadow-md">
              <Sun className="h-5 w-5" />
            </div>
            <div>
              <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-[#fc763a]">
                Our Mission
              </p>
              <h4 className="text-base font-bold text-gray-900">
                Make high-performance solar effortless for every customer
              </h4>
            </div>
          </div>

          <p className="relative mt-3 text-sm leading-relaxed text-gray-800">
            Turn solar into a simple, predictable service—fast surveys,
            transparent proposals, compliant installations and lifetime
            monitoring so every unit of sunlight becomes measurable savings.
          </p>

          <ul className="relative mt-4 space-y-2 text-sm text-gray-800">
            {[
              "Single-window experience from site survey to grid synchronization.",
              "Standardised installation playbooks, safety audits & quality checks.",
              "Obsessive post-installation care: AMC, 24/7 monitoring and SLA-backed support.",
            ].map((t, i) => (
              <li key={i} className="flex items-start gap-2">
                <CheckCircle className="mt-0.5 h-4 w-4 text-[#fc763a]" />
                <span>{t}</span>
              </li>
            ))}
          </ul>
        </motion.div>
      </motion.div>

      {/* 2. Feature points (Enhanced hover) */}
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="relative mt-10 grid w-full gap-4 sm:max-w-7xl sm:grid-cols-4"
      >
        {[
          { icon: Sun, label: "MNRE & ALMM", sub: "Tier-1, BIS-certified components" },
          { icon: ShieldCheck, label: "Zero-Hassle", sub: "Net-metering, subsidy & DISCOM paperwork" },
          { icon: GaugeCircle, label: "High Yield", sub: "AI-aided design & performance tuning" },
          { icon: Users, label: "AMC & 24/7", sub: "Remote monitoring with SLA-backed support" },
        ].map((i, idx) => (
          <motion.div
            key={idx}
            variants={childFade}
            whileHover={{ y: -6, scale: 1.02 }} // Added lift/scale on hover
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
            className="flex cursor-pointer items-center gap-3 rounded-2xl border border-gray-800/20 bg-white/90 p-3 shadow-sm shadow-gray-900/5 backdrop-blur"
          >
            <div className="flex items-center justify-center rounded-2xl bg-amber-100 text-[#fc763a]">
              <i.icon className="h-13 w-13 p-2" />
            </div>
            <div>
              <div className="text-sm font-semibold text-gray-900">
                {i.label}
              </div>
              <div className="text-xs text-gray-600">{i.sub}</div>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}

// range of numeric stats -----
// type StatItem = {
//   value: number;
//   label: string;
//   prefix?: string;
//   suffix?: string;
//   isDecimal?: boolean;
// };

// function StatsRibbon() {
//   const stats: StatItem[] = [
//     { value: 3, prefix: ">", suffix: " MWp", label: "installed capacity" },
//     { value: 1000, suffix: "+", label: "sites energized" },
//     { value: 4.9, suffix: "/5", label: "customer rating", isDecimal: true },
//     { value: 15, suffix: "+", label: "states served" },
//   ];

//   return (
//     <div className="relative py-2">
//       {/* soft glow background */}
//       <div className="pointer-events-none absolute inset-x-0 -top-10 h-24 bg-linear-to-b from-amber-100/60 via-transparent to-transparent" />
//       <div className="pointer-events-none absolute inset-x-0 -bottom-10 h-24 bg-linear-to-t from-emerald-100/60 via-transparent to-transparent" />

//       <div className="mx-auto max-w-7xl px-6">
//         <div className="relative overflow-hidden rounded-3xl border border-amber-100/80 bg-linear-to-r from-amber-50/90 via-white/95 to-emerald-50/90 px-5 py-6 shadow-lg shadow-emerald-900/5 backdrop-blur">
//           {/* subtle inner highlight */}
//           <div className="pointer-events-none absolute inset-0 rounded-3xl border border-white/60" />

//           {/* ribbon header */}
//           <div className="relative mb-5 flex flex-wrap items-center justify-between gap-3">
//             <div className="flex items-center gap-2">
//               <span className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-amber-500/90 text-[11px] font-bold text-white shadow-sm">
//                 ★
//               </span>
//               <p className="text-xs font-semibold uppercase tracking-[0.2em] text-gray-600">
//                 Performance at a glance
//               </p>
//             </div>
//           </div>

//           {/* stats grid */}
//           <motion.ul
//             variants={staggerContainer}
//             initial="hidden"
//             whileInView="show"
//             viewport={{ once: true }}
//             className="relative grid grid-cols-2 gap-4 sm:grid-cols-4"
//           >
//             {stats.map((s, i) => (
//               <StatCard key={i} index={i} stat={s} />
//             ))}
//           </motion.ul>
//         </div>
//       </div>
//     </div>
//   );
// }

// function StatCard({ stat, index }: { stat: StatItem; index: number }) {
//   const { value, prefix = "", suffix = "", label, isDecimal } = stat;

//   const ref = React.useRef<HTMLLIElement | null>(null);
//   const inView = useInView(ref, { once: true, amount: 0.6 });

//   const count = useMotionValue(0);
//   const rounded = useTransform(count, (latest) =>
//     isDecimal ? latest.toFixed(1) : Math.floor(latest).toLocaleString()
//   );

//   React.useEffect(() => {
//     if (inView) {
//       const controls = animate(count, value, {
//         duration: 1.8,
//         ease: [0.25, 0.46, 0.45, 0.94],
//       });
//       return controls.stop;
//     }
//   }, [inView, value, count]);

//   return (
//     <motion.li
//       ref={ref}
//       // FIXED: Combined the entrance animation (childFade) and the continuous animation (float)
//       // by placing the float variants directly on the element and using initial="hidden" 
//       // and whileInView/animate to control the sequence.
//       variants={{ ...childFade, ...float }}
//       initial="hidden"
//       whileInView="show"
//       viewport={{ once: true, amount: 0.6 }}
//       animate="animate"
//       className="group relative cursor-default rounded-2xl bg-white/85 px-5 py-4 text-center shadow-sm shadow-gray-900/5 ring-1 ring-black/40 backdrop-blur"
//     >
//       {/* vertical divider for larger screens */}
//       {index !== 0 && (
//         <span className="pointer-events-none absolute inset-y-3 left-0 hidden w-px bg-linear-to-b from-transparent via-amber-100 to-transparent sm:block" />
//       )}

//       <div className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
//         {prefix}
//         <motion.span>{rounded}</motion.span>
//         {suffix}
//       </div>
//       <div className="mt-1 text-[11px] font-semibold uppercase tracking-[0.18em] text-gray-500">
//         {label}
//       </div>
//     </motion.li>
//   );
// }

//  Why industry leaders

function ZigZagWhyUs() {
  const points = [
    {
      Icon: Award,
      title: "Certified Excellence",
      desc: "Tier-1 components & BIS compliance ensure peak performance & safety.",
      img: "https://m.media-amazon.com/images/I/71jTnZCRieL.jpg",
    },
    {
      Icon: Zap,
      title: "Smart Technology",
      desc: "AI-assisted design + real-time monitoring to maximize yield.",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTbDRkyDeVgWd43dS4l0RwXcAyRl2ARi6CR2w&s",
    },
    {
      Icon: Users,
      title: "Lifetime Partnership",
      desc: "AMC plans, SLAs, and remote care—support that stays.",
      img: "https://thumbs.dreamstime.com/b/business-handshake-near-solar-panel-small-plant-representing-green-energy-partnership-sustainability-eco-innovation-412197421.jpg",
    },
    {
      Icon: ShieldCheck,
      title: "Compliance Mastery",
      desc: "Net metering & subsidy documentation without headaches.",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQJugrOXJ6LpM6G6bBfae4Ww5QJuKq0wU7VRA&s",
    },
  ];

  return (
    <div className="relative bg-white py-10">
      <div className="mx-auto max-w-7xl px-6 lg:px-0">
        <motion.div {...fadeUpProps} className="mx-auto mb-10 max-w-3xl text-center">
          <h2 className="text-3xl text-[#686868] font-bold md:text-5xl">
            Why industry leaders <span className="text-[#fc763a]">trust us</span>
          </h2>
          <p className="mt-4 text-[#686868]">
            A relentless focus on compliance, quality, and guaranteed long-term performance.
          </p>
        </motion.div>

        <div className="space-y-10">
          {points.map((p, i) => (
            <motion.div
              key={i}
              variants={floatIn}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              // Added 'group' class to the parent container for better hover effects
              className={`group grid items-center gap-10 lg:grid-cols-2 ${
                i % 2 ? "lg:[&>*:first-child]:order-last" : ""
              }`}
            >
              {/* Text Box (Enhanced Hover) */}
              <motion.div
                className="relative"
                whileHover={{ rotate: i % 2 === 0 ? 0.5 : -0.5 }} // Slight rotation on hover
                transition={{ type: "spring", stiffness: 400, damping: 30 }}
              >
                <div className="absolute -inset-4 -z-10 rounded-3xl bg-linear-to-br from-amber-100/50 to-emerald-100/50 blur-xl" />
                <div className="rounded-3xl border border-gray-800/30 bg-white/80 p-8 shadow-xl shadow-black/40 backdrop-blur">
                  <div className="flex items-center gap-3">
                    <p.Icon className="h-7 w-7 text-[#FC763A]" />
                    <h3 className="text-xl font-bold">{p.title}</h3>
                  </div>
                  <p className="mt-3 leading-relaxed text-gray-700">{p.desc}</p>
                </div>
              </motion.div>

              {/* Image Box (Enhanced InView effect) */}
              <motion.div
                variants={{
                  hidden: { opacity: 0, scale: 0.9, rotate: i % 2 === 0 ? -3 : 3, y: 30 },
                  show: { opacity: 1, scale: 1, rotate: 0, y: 0, transition: { duration: 0.8, ease: EASE, delay: 0.2 } }
                }}
                className="relative h-40 w-full overflow-hidden rounded-3xl border border-gray-800/30 shadow-2xl shadow-black/80"
              >
                <img
                  src={p.img}
                  alt={p.title}
                  // Retained: group-hover scale effect on image
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105" 
                  onError={(e) => {
                    e.currentTarget.src = 'https://placehold.co/800x400/34D399/10B981?text=Image+Placeholder';
                    e.currentTarget.onerror = null;
                  }}
                />
                <div className="absolute inset-0 bg-linear-to-t from-black/40 via-black/10 to-transparent" />
               
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* curved divider */}
      <svg
        className="-mb-1  block h-10 w-full text-emerald-50"
        viewBox="0 0 1440 40"
        preserveAspectRatio="none"
        aria-hidden
      >
        <path
          fill="currentColor"
          d="M0,0 C320,40 1120,40 1440,0 L1440,40 L0,40 Z"
        />
      </svg>
    </div>
  );
}

// How it works
function CurvedSteps() {
  const steps = [
    {
      n: 1,
      title: "Free Site Survey",
      desc: "Load and Bill Assessment, Structure/Rooftop Feasibility Check",
    },
    {
      n: 2,
      title: "Design & Proposal",
      desc: "Shadow Analysis, Structure Design,  Bill Saving projection, Quotation",
    },
    {
      n: 3,
      title: "Approvals & Subsidy",
      desc: "DISCOM Coordination, Net Metering & Subsidy documentation support",
    },
    {
      n: 4,
      title: "Installation",
      desc: "Certified Hardware, Safety Compliant Installation & QA Checks",
    },
    {
      n: 5,
      title: "Handover & Training",
      desc: "App Setup, Basic Maintenance Training, System Handover with Documentation",
    },
    {
      n: 6,
      title: "Operation & Maintenance ",
      desc: "Module Cleaning, Inverter Checks, Preventive Maintenance",
    },
  ];

  return (
    <section className="relative bg-emerald-50/60 ">
      <div className="mx-auto max-w-7xl px-6 lg:px-6">

        {/* Heading */}
        <motion.div
          {...fadeUpProps}
          className="mx-auto mb-12 max-w-4xl text-center"
        >
          <h2 className="text-3xl md:text-5xl font-bold text-[#686868]">
            Our Hassle-Free <span className="text-[#fc763a]"> Process </span>
          </h2>
          <p className="mt-3 text-gray-700">
            A smooth solar journey handled by TrueSun — from the first survey to long-term performance.
          </p>
        </motion.div>

        {/* Curved Flow */}
        <motion.ol
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
          className="relative grid gap-4 md:grid-cols-6"
        >
          {/* Curved Line (Desktop only) */}
          <div className="pointer-events-none absolute inset-x-0 top-1/2 hidden -translate-y-1/2 md:block -z-10">
            <svg
              className="w-full h-24"
              viewBox="0 0 1200 80"
              preserveAspectRatio="none"
            >
              <defs>
                <linearGradient id="tsCurve" x1="0" x2="1">
                  <stop offset="0" stopColor="#FEC24A" />
                  <stop offset="0.5" stopColor="#FC763A" />
                  <stop offset="1" stopColor="#FEC24A" />
                </linearGradient>
              </defs>
              <path
                d="M40 60 C 300 -20, 900 -20, 1160 60"
                stroke="url(#tsCurve)"
                strokeWidth="6"
                fill="none"
                strokeLinecap="round"
              />
            </svg>
          </div>

          {/* Step Cards */}
          {steps.map((s, i) => (
            <motion.li
              key={i}
              variants={childFade}
              whileHover={{
                y: -8,
                scale: 1.05,
              }}
              transition={{ type: "spring", stiffness: 260, damping: 22 }}
              className="relative rounded-2xl border border-emerald-800/30 bg-white p-6 text-center shadow-2xl   "
            >
              <div
                className="mx-auto mb-3 flex h-12 w-12 items-center justify-center rounded-full font-bold text-white shadow-md "
                style={{
                  background:
                    "linear-gradient(135deg, #FC763A 0%, #FEC24A 100%)",
                }}
              >
                {s.n}
              </div>

              <div className="font-semibold text-slate-900">{s.title}</div>
              <p className="mt-1 text-sm text-gray-600">{s.desc}</p>

              {/* connector dot */}
              {i < steps.length - 1 && (
                <span className="absolute right-3 top-1/2 hidden h-2 w-2 -translate-y-1/2 rounded-full bg-[#FC763A] md:block" />
              )}
            </motion.li>
          ))}
        </motion.ol>
      </div>
    </section>
  );
}
