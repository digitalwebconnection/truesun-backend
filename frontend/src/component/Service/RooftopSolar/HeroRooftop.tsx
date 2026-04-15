 
import React from "react";
import type { ReactNode } from "react"; // ✅ FIXED: type-only import

import {
  Home,
  Building2,
  Factory,
  BadgeCheck,
} from "lucide-react";

const HERO_BG =
  "https://waaree.com/wp-content/uploads/2024/03/TOP_Con_Technology_922ed15e22.jpg";

// ✅ Define props using explicit typing
interface PillProps {
  children: ReactNode;
}

const Pill: React.FC<PillProps> = ({ children }) => (
  <span className="inline-flex items-center gap-2 rounded-full bg-black/25 px-3 py-1 text-xs font-semibold text-white ring-1 ring-white/50 shadow-sm">
    {children}
  </span>
);

export default function HeroRooftopSolar() {
  return (
    <section className="relative overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 -z-10">
        <img
          src={HERO_BG}
          alt="High-efficiency solar panels on a rooftop"
          className="h-full w-full object-cover"
          loading="eager"
          onError={(e) => {
            e.currentTarget.onerror = null;
            e.currentTarget.src =
              "https://placehold.co/1920x1080/111827/ffffff?text=Solar+Energy";
          }}
        />
        {/* Overlay */}
        <div className="absolute inset-0 bg-linear-to-b from-black/80 via-black/70 to-black/90" />
      </div>

      {/* Glow Blob */}
      <div
        className="absolute -top-32 left-1/2 h-[520px] w-[820px] -translate-x-1/2 rounded-full bg-amber-200/30 blur-3xl -z-10"
        aria-hidden
      />

      {/* Content */}
      <div className="mx-auto max-w-7xl px-6 pt-24 pb-12">
        <div className="mb-4 text-xs font-semibold uppercase tracking-wider text-amber-400">
          Rooftop Solar
        </div>

        <h1 className="max-w-4xl text-4xl font-extrabold leading-tight text-white sm:text-5xl">
          Rooftop Solar Panel Installation &amp; Maintenance
        </h1>

        <p className="mt-4 max-w-3xl text-lg text-white/95">
          Lower your electricity bills, lock your energy costs, and earn clean
          power credits. We design, install, and maintain rooftop solar systems
          for <b>residential</b>, <b>commercial</b>, and <b>industrial</b> customers—end-to-end.
        </p>

        {/* Pills */}
        <div className="mt-6 flex flex-wrap items-center gap-2">
          <Pill>
            <Home className="h-4 w-4 text-amber-400" /> Residential
          </Pill>
          <Pill>
            <Building2 className="h-4 w-4 text-amber-400" /> Commercial
          </Pill>
          <Pill>
            <Factory className="h-4 w-4 text-amber-400" /> Industrial
          </Pill>
          <Pill>
            <BadgeCheck className="h-4 w-4 text-emerald-400" /> MNRE / DISCOM compliant
          </Pill>
        </div>

        {/* Stats belt */}
        <div className="mt-10 grid grid-cols-2 gap-4 rounded-2xl bg-white/80 p-4 shadow-md ring-1 ring-gray-800 sm:grid-cols-4">
          {[
            { k: "Capacity Delivered", v: "40+ MWp" },
            { k: "Projects Delivered", v: "650+" },
            { k: "Cities Served", v: "38" },
            { k: "Average PR", v: "~78–82%" },
          ].map((s) => (
            <div key={s.k} className="rounded-xl bg-white p-4 ring-1 ring-gray-400">
              <div className="text-xs text-gray-500">{s.k}</div>
              <div className="text-xl font-bold text-gray-900">{s.v}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
