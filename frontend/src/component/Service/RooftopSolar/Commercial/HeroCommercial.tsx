 

import React from "react";
import { motion } from "framer-motion";
import { Building2, Factory, Leaf, Sun, Zap } from "lucide-react";

const BRAND = {
  primary: "#262755",
  accent: "#ff7a1a",
  accent2: "#22c55e",
};

const EASE_OUT: [number, number, number, number] = [0.16, 1, 0.3, 1];
const EASE_IN_OUT: [number, number, number, number] = [0.4, 0, 0.2, 1];

export default function CommercialSolarHero() {
  return (
    <section
      className="relative overflow-hidden"
      style={{
        backgroundImage: `url('https://sunifysolar.in/uploads/media/686655279d5ef.webp')`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* ===== Background Dark Overlay ===== */}
      <div className="absolute inset-0 bg-black/80 z-0" />

      {/* ===== Animated Light Effects ===== */}
      <div className="absolute inset-0 -z-10">
        <motion.span
          className="absolute -top-24 -left-24 h-[380px] w-[380px] rounded-full blur-3xl opacity-40"
          style={{ background: `${BRAND.accent}55` }}
          animate={{ x: [0, 20, 0], y: [0, -18, 0] }}
          transition={{ repeat: Infinity, duration: 14, ease: EASE_IN_OUT }}
        />
        <motion.span
          className="absolute -bottom-28 -right-24 h-[420px] w-[420px] rounded-full blur-3xl opacity-40"
          style={{ background: `${BRAND.primary}77` }}
          animate={{ x: [0, -18, 0], y: [0, 18, 0] }}
          transition={{ repeat: Infinity, duration: 16, ease: EASE_IN_OUT }}
        />
      </div>

      {/* ===== Content ===== */}
      <div className="relative z-10 mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-10 py-16 md:grid-cols-2 md:py-24">
          {/* Left copy */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, ease: EASE_OUT }}
              className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/45 px-3 py-1 text-xs font-semibold backdrop-blur-sm"
            >
              <Leaf className="h-4 w-4 text-emerald-400" />
              <span className="text-white/90">
                Commercial Rooftop • Net-Metering Ready
              </span>
            </motion.div>

            <div className="relative mt-5 inline-block">
              <h1 className="text-4xl font-extrabold leading-[1.1] text-white sm:text-5xl">
                Solar Power for{" "}
                <span className="text-transparent bg-clip-text bg-linear-to-r from-orange-300 to-yellow-200">
                  Commercial Buildings
                </span>
              </h1>
              <motion.span
                aria-hidden
                className="absolute left-0 -bottom-2 h-[3px] w-full rounded-full"
                style={{
                  backgroundImage: `linear-gradient(90deg, ${BRAND.accent}, ${BRAND.primary})`,
                  backgroundSize: "200% 100%",
                }}
                animate={{
                  backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
                }}
                transition={{ repeat: Infinity, duration: 6, ease: "linear" }}
              />
            </div>

            <p className="mt-5 max-w-xl text-base leading-7 text-white/85">
              Cut operating costs, lock long-term power rates, and meet ESG goals
              with high-yield rooftop solar. Our engineering-first approach
              delivers faster payback and reliable generation—year after year.
            </p>

            {/* KPI chips */}
            <div className="mt-6 flex flex-wrap gap-3">
              <Chip icon={<Zap className="h-4 w-4" />} label="Up to 30–50% bill savings" dark />
              <Chip icon={<Sun className="h-4 w-4" />} label="MNRE-compliant designs" dark />
              <Chip icon={<Building2 className="h-4 w-4" />} label="Net-metering assistance" dark />
            </div>

            {/* CTA Buttons */}
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a
                href="#contact"
                className="inline-flex items-center justify-center rounded-xl px-5 py-3 text-white shadow-lg transition active:scale-[0.98]"
                style={{
                  backgroundImage: `linear-gradient(135deg, ${BRAND.primary}, ${BRAND.accent})`,
                }}
              >
                Get a Commercial Solar Proposal
              </a>
              <a
                href="#calc"
                className="inline-flex items-center justify-center rounded-xl border border-white/30 px-5 py-3 text-white/90 hover:bg-white/10 backdrop-blur-sm"
              >
                Estimate ROI in 60 seconds
              </a>
            </div>

            {/* Trust bar */}
            <div className="mt-6 grid grid-cols-2 gap-4 text-xs text-white/70 sm:grid-cols-4">
              <Trust label="Offices" />
              <Trust label="Warehouses" />
              <Trust label="Hospitals" />
              <Trust label="Malls & Hotels" />
            </div>
          </div>

          {/* Right visual card */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, ease: EASE_OUT, delay: 0.08 }}
            className="relative"
          >
            <motion.div
              className="absolute -inset-1 rounded-[26px] blur-xl"
              style={{
                backgroundImage: `linear-gradient(120deg, ${BRAND.primary}99, ${BRAND.accent}66)`,
                opacity: 0.7,
              }}
              animate={{ opacity: [0.45, 0.9, 0.45] }}
              transition={{ repeat: Infinity, duration: 5, ease: EASE_IN_OUT }}
            />
            <div className="relative overflow-hidden rounded-3xl border border-white/30 bg-white/90 p-5 shadow-[0_30px_80px_rgba(0,0,0,0.45)] backdrop-blur">
              <div className="relative aspect-16/11 overflow-hidden rounded-2xl ring-1 ring-slate-900/10 bg-linear-to-b from-white to-slate-50">
                <div className="absolute inset-4 grid grid-cols-4 gap-2">
                  {[...Array(16)].map((_, i) => (
                    <motion.div
                      key={i}
                      className="rounded-md bg-linear-to-b from-slate-700 to-slate-900 shadow-inner"
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{
                        duration: 0.4,
                        ease: EASE_OUT,
                        delay: 0.02 * i,
                      }}
                    />
                  ))}
                </div>

                <motion.div
                  aria-hidden
                  className="absolute -inset-10"
                  style={{
                    background:
                      "conic-gradient(from 180deg at 80% 0%, rgba(255,255,255,0.0) 0deg, rgba(255,255,255,0.55) 30deg, rgba(255,255,255,0.0) 60deg)",
                  }}
                  animate={{ rotate: [0, 360] }}
                  transition={{ repeat: Infinity, duration: 12, ease: "linear" }}
                />

                <div className="absolute left-4 top-4 flex items-center gap-2 rounded-full bg-white/85 px-3 py-1 text-[11px] font-semibold ring-1 ring-slate-900/10">
                  <Factory className="h-3.5 w-3.5 text-slate-700" />
                  250 kWp Rooftop Array
                </div>

                <div className="absolute bottom-4 left-4 right-4">
                  <div className="grid grid-cols-3 gap-2 text-[11px] font-semibold">
                    <Stat label="Yield (Yr-1)" value="~3.6 Lakh kWh" />
                    <Stat label="Payback" value="3.5–4.5 yrs" />
                    <Stat label="CO₂ Offset" value="280+ t/yr" />
                  </div>
                </div>
              </div>

              <div className="mt-4 flex items-center justify-between">
                <div className="text-sm font-semibold text-slate-800">
                  High-efficiency mono-PERC • Tier-1 Inverters
                </div>
                <div className="text-xs text-slate-500">
                  MNRE / Net-metering compliant
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

/* ---------- Reusable UI Bits ---------- */
function Chip({ icon, label, dark }: { icon: React.ReactNode; label: string; dark?: boolean }) {
  return (
    <span
      className={`inline-flex items-center gap-2 rounded-full px-3 py-1 text-xs font-semibold backdrop-blur-sm ${
        dark
          ? "border border-white/30 bg-white/10 text-white/90"
          : "border border-slate-200 bg-white/70 text-slate-800"
      }`}
    >
      {icon}
      {label}
    </span>
  );
}

function Trust({ label }: { label: string }) {
  return (
    <div className="flex items-center gap-2">
      <span className="h-1.5 w-1.5 rounded-full" style={{ background: BRAND.accent }} />
      <span>{label}</span>
    </div>
  );
}

function Stat({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-lg bg-white/90 px-3 py-2 text-slate-800 ring-1 ring-slate-900/10">
      <div className="text-[10px] uppercase tracking-wide text-slate-500">{label}</div>
      <div className="text-sm">{value}</div>
    </div>
  );
}
