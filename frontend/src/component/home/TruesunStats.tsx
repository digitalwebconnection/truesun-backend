
import React, { useEffect, useMemo, useRef, useState } from "react";
import { motion, useReducedMotion, cubicBezier, type Variants } from "framer-motion";

// --------------------------- Types ---------------------------

export type Stat = {
  id: string;
  value: number;
  suffix?: string;
  label: string;
  icon: "Sun" | "Building" | "MapPin" | "Zap" | "Receipt" | "LineChart";
  decimals?: number;
};

type UseCountUpArgs = {
  end: number;
  durationMs?: number;
  decimals?: number;
  startOnVisible?: boolean;
};


type UseCountUpResult = {
  ref: React.RefObject<HTMLDivElement | null>;
  display: string;
};

// --------------------------- Hook: useCountUp ---------------------------
function useCountUp({
  end,
  durationMs = 1400,
  decimals = 0,
  startOnVisible = true,
}: UseCountUpArgs): UseCountUpResult {
  const prefersReduced = useReducedMotion();
  const nodeRef = useRef<HTMLDivElement | null>(null);
  const rafRef = useRef<number | null>(null);
  const startRef = useRef<number | null>(null);
  const [current, setCurrent] = useState<number>(end);

  const formatter = useMemo(
    () =>
      new Intl.NumberFormat(undefined, {
        maximumFractionDigits: decimals,
        minimumFractionDigits: decimals,
      }),
    [decimals]
  );

  useEffect(() => {
    if (prefersReduced || !startOnVisible) {
      setCurrent(end);
      return;
    }

    const el = nodeRef.current;
    if (!el) return;

    let observer: IntersectionObserver | null = null;
    let hasAnimated = false;

    const startAnimation = () => {
      if (hasAnimated) return;
      hasAnimated = true;
      setCurrent(0);
      startRef.current = null;

      const step = (ts: number) => {
        if (startRef.current == null) startRef.current = ts;
        const elapsed = ts - (startRef.current ?? ts);
        const t = Math.min(1, elapsed / durationMs);
        const eased = 1 - Math.pow(1 - t, 3);
        const next = end * eased;
        setCurrent(next);

        if (t < 1) {
          rafRef.current = requestAnimationFrame(step);
        } else {
          setCurrent(end);
          rafRef.current = null;
        }
      };

      rafRef.current = requestAnimationFrame(step);
    };

    if ("IntersectionObserver" in window) {
      observer = new IntersectionObserver(
        (entries) => {
          for (const entry of entries) {
            if (entry.isIntersecting) {
              startAnimation();
              observer?.disconnect();
            }
          }
        },
        { threshold: 0.35 }
      );
      observer.observe(el);
    } else {
      startAnimation();
    }

    return () => {
      observer?.disconnect();
      if (rafRef.current != null) cancelAnimationFrame(rafRef.current);
    };
  }, [end, durationMs, prefersReduced, startOnVisible]);

  return { ref: nodeRef, display: formatter.format(current) };
}

// --------------------------- Inline Icons ---------------------------
const Svg = {
  Sun: (props: React.SVGProps<SVGSVGElement>) => (
    <svg viewBox="0 0 24 24" fill="none" {...props}>
      <circle cx="12" cy="12" r="4" stroke="currentColor" strokeWidth="2" />
      <path
        d="M12 2v3M12 19v3M4.22 4.22l2.12 2.12M17.66 17.66l2.12 2.12M2 12h3M19 12h3M4.22 19.78l2.12-2.12M17.66 6.34l2.12-2.12"
        stroke="currentColor"
        strokeWidth="2"
      />
    </svg>
  ),
  Zap: (props: React.SVGProps<SVGSVGElement>) => (
    <svg viewBox="0 0 24 24" fill="none" {...props}>
      <path d="M13 3L4 14h7l-1 7 9-11h-7l1-7z" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" />
    </svg>
  ),
  Building: (props: React.SVGProps<SVGSVGElement>) => (
    <svg viewBox="0 0 24 24" fill="none" {...props}>
      <rect x="3" y="3" width="18" height="18" rx="2" stroke="currentColor" strokeWidth="2" />
      <path d="M7 7h3M14 7h3M7 12h3M14 12h3M7 17h10" stroke="currentColor" strokeWidth="2" />
    </svg>
  ),
  MapPin: (props: React.SVGProps<SVGSVGElement>) => (
    <svg viewBox="0 0 24 24" fill="none" {...props}>
      <path d="M12 22s7-5.33 7-12a7 7 0 10-14 0c0 6.67 7 12 7 12z" stroke="currentColor" strokeWidth="2" />
      <circle cx="12" cy="10" r="2.5" stroke="currentColor" strokeWidth="2" />
    </svg>
  ),
  Receipt: (props: React.SVGProps<SVGSVGElement>) => (
    <svg viewBox="0 0 24 24" fill="none" {...props}>
      <path
        d="M4 2h16v20l-2-1-2 1-2-1-2 1-2-1-2 1-2-1-2 1V2z"
        stroke="currentColor"
        strokeWidth="2"
      />
      <path
        d="M8 7h8M8 11h8M8 15h5"
        stroke="currentColor"
        strokeWidth="2"
      />
    </svg>
  ),

   // ✅ NEW Growth Icon
  LineChart: (props: React.SVGProps<SVGSVGElement>) => (
    <svg viewBox="0 0 24 24" fill="none" {...props}>
      <path d="M3 3v18h18" stroke="currentColor" strokeWidth="2" />
      <path d="M7 14l4-4 3 3 5-5" stroke="currentColor" strokeWidth="2" />
    </svg>
  ),

};

// --------------------------- Background Accents ---------------------------
function BackgroundAccents() {
  return (
    <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10">
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 h-[500px] w-[500px] rounded-full blur-3xl bg-[radial-gradient(closest-side,rgba(251,191,36,0.15),transparent_70%)]" />
      <div className="absolute bottom-0 right-0 h-[300px] w-[300px] translate-x-1/3 translate-y-1/3 rounded-full blur-3xl bg-[radial-gradient(closest-side,rgba(251,146,60,0.08),transparent_70%)]" />
    </div>
  );
}

// --------------------------- Variants ---------------------------
const sectionVariants: Variants = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { when: "beforeChildren", staggerChildren: 0.08 } },
};
const itemVariants: Variants = {
  hidden: { opacity: 0, y: 12 },
  show: { opacity: 1, y: 0, transition: { duration: 0.2, ease: cubicBezier(0.22, 1, 0.36, 1) } },
};

// --------------------------- Defaults ---------------------------
const DEFAULT_STATS: Stat[] = [
  { id: "projects", value: 100, suffix: "+", label: "Roofs Powered", icon: "Building" },
  { id: "cities", value: 100, suffix: "%", label: "Up to 100% Savings on Electricity Bills", icon: "Receipt" },
  { id: "countries", value: 70, suffix: "%", label: "Up to 70% Return on Investment", icon: "LineChart" },

];

// --------------------------- Stat Item ---------------------------
function StatItem({ stat, prefix }: { stat: Stat; prefix?: string }) {
  const { ref, display } = useCountUp({ end: stat.value, durationMs: 3000 });
  const Icon = Svg[stat.icon as keyof typeof Svg];

  return (
    <motion.div variants={itemVariants} className="group flex items-center  gap-4" role="listitem">
      <div
        className="grid h-14 w-14 place-items-center rounded-full
               shadow-sm transition-transform duration-300 group-hover:scale-105"
      >
        <Icon className="h-10 w-10 text-[#FC763A] " />
      </div>

      <div className="flex flex-col">
        <dd ref={ref} className="text-2xl sm:text-3xl font-semibold text-neutral-900">
          {prefix ?? ""}
          {display}
          {stat.suffix && <span className="ml-1 text-neutral-600">{stat.suffix}</span>}
        </dd>
        <dt className="mt-1 text-sm sm:text-base text-neutral-600">{stat.label}</dt>
      </div>
    </motion.div>
  );
}

// --------------------------- Component ---------------------------
export default function ImpactStats({
  subtitle = "Real solar results with powered rooftops and consistent electricity savings you can trust.",
  stats = DEFAULT_STATS,
  compact = false,
  prefix,
}: {
  title?: string;
  subtitle?: string;
  stats?: Stat[];
  compact?: boolean;
  prefix?: string;
}) {
  const gridCols = "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3  gap-x-8 mx-auto max-w-7xl  gap-x-10 sm:gap-y-12";
  const padY = compact ? "py-12 sm:py-14" : "py-20 sm:py-24 lg:py-18";
  const headingSpace = compact ? "mb-8 sm:mb-10" : "mb-10 sm:mb-12";

  return (
    <section className={`relative overflow-hidden text-center max-w-7xl mx-auto  bg-white ${padY}`}>
      <BackgroundAccents />

      <motion.div
        variants={sectionVariants}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-10% 0px -10% 0px" }}
        className="relative z-0 mx-auto max-w-6xl px-4 sm:px-6 lg:px-0"
      >
        <div className={`text-center ${headingSpace}`}>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[#686868]">
            Real Results Powered by  <span className=" text-[#FC763A]"> Clean Solar Energy</span>
          </h2>
          {subtitle && <p className="mt-3 text-base sm:text-lg text-neutral-600">{subtitle}</p>}
        </div>

        <dl className={gridCols} role="list">
          {stats.map((s) => (
            <StatItem key={s.id} stat={s} prefix={prefix} />
          ))}
        </dl>
      </motion.div>
    </section>
  );
}
