 

import React from "react";
import { useState } from "react";
import LeadPopup from "../../component/LeadPopup";


const ServicesHero: React.FC = () => {
  const [openLeadPopup, setOpenLeadPopup] = useState(false);

  return (
    <section className="relative overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://goldisolar.com/wp-content/uploads/2022/07/money-1200x675.jpg')",
        }}
      />

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/70" />

      {/* Content */}
      <div className="relative mx-auto flex max-w-7xl flex-col-reverse items-center gap-12 px-6 py-20  md:flex-row md:pt-22">

        {/* LEFT CONTENT */}
        <div className="w-full max-w-2xl text-white space-y-6 text-center md:text-left">
          <p className="text-xs font-semibold uppercase tracking-widest text-orange-300">
            Our Solar Solutions
          </p>

          <h1 className="text-3xl font-bold leading-tight sm:text-5xl">
            End-to-End Solar Services
            <span className="block text-[#fc763a]">Built for Your Needs.</span>
          </h1>

          <p className="text-sm sm:text-base text-slate-100/90">
            From residential rooftops to large commercial installations —
            TrueSun provides complete solar planning, engineering,
            installation, and long-term support under one roof.
          </p>

          {/* CTA BUTTONS */}
          <div className="flex flex-col items-center gap-4 pt-2 sm:flex-row sm:justify-start">
            <button
              onClick={() => setOpenLeadPopup(true)}
              className="inline-flex items-center justify-center rounded-full bg-linear-to-r from-[#FC763A] to-[#FFB347] px-5 py-2.5 text-sm font-semibold text-white shadow-md shadow-orange-300/50 transition hover:shadow-lg hover:brightness-105"
            >
              Book a Free Site Visit
            </button>
          </div>

          <p className="text-xs text-slate-200/80">
            Rooftop • C&I • Industrial • Solar Finance • Maintenance
          </p>
        </div>

        {/* RIGHT VISUAL BLOCK */}
        <div className="w-full max-w-md">
          <div className="relative h-36 md:h-46 w-full overflow-hidden rounded-3xl bg-white/10 backdrop-blur-md p-6 shadow-2xl">
            {/* Decorative Overlay */}
            <div className="absolute inset-0 bg-linear-to-br from-[#FC763A]/30 via-transparent to-emerald-500/20" />

            <div className="relative flex h-full flex-col justify-between">
              <div>
                <p className="text-xs uppercase tracking-widest text-orange-200">
                  Why Truesun?
                </p>
                <h2 className="mt-2 text-lg font-semibold text-white">
                  Reliable solar solutions powered by expert engineering.
                </h2>
                <p className="text-xs mt-2 text-slate-100/80">
                We handle survey, design, installation, approvals, and maintenance
                with a dedicated in-house team.
              </p>
              </div>
              
            </div>
          </div>
        </div>
        {/* Popup Mount */}
        {openLeadPopup && (
          <LeadPopup onClose={() => setOpenLeadPopup(false)} />
        )}
      </div>
    </section>
  );
};

export default ServicesHero;
