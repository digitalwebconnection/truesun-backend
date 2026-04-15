
import {
  Building2,
  Factory,
  Home,
  Sun,
  Layers,
} from "lucide-react";
import { useState } from "react";
import LeadPopup from "../LeadPopup";

// --- Configuration Data ---
const tags = [
  { label: "Residential", icon: Home, color: "text-orange-300" },
  { label: "Commercial", icon: Building2, color: "text-sky-300" },
  { label: "Industrial", icon: Factory, color: "text-emerald-300" },
  { label: "CSR & Institutions", icon: Layers, color: "text-purple-300" },
];

export default function AppSimple() {
  const [openLeadPopup, setOpenLeadPopup] = useState(false);
  return (
    <section className="relative  flex flex-col justify-center items-center  p-6 overflow-hidden">
      {/* Background Image with Overlay */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://d3nut88kxhmnud.cloudfront.net/2025/12/10kw-ongrid-solar-installation.jpg')",
        }}
      >
        <div className="absolute inset-0 bg-black opacity-70"></div> {/* Dark overlay */}
      </div>

      {/* Content container aligned left */}
      <div className="relative z-10 w-full text-white max-w-7xl text-left rounded-lg py-14 sm:py-6 md:py-20">

        {/* --- Eyebrow and Title (Updated Content) --- */}
        <div className="inline-flex items-center mb-6 text-[#FC763A] font-semibold uppercase tracking-widest text-xs px-3 py-1 border border-amber-300/50 rounded-full bg-black/30">
          <Sun className="h-4 w-4 mr-2" />
          TrueSun Project Portfolio
        </div>

        <h1 className="text-2xl md:text-5xl lg:text-5xl font-extrabold leading-tight mb-4 text-white drop-shadow-lg">
          Powering  with <span className="text-[#FC763A]">Sustainable Solar Solutions</span>
        </h1>

        <p className="text-md text-gray-200 max-w-2xl mb-10 drop-shadow">
          As a leading provider, TrueSun delivers high-performance solar installations that drive energy independence and measurable results across the state.</p>

        {/* --- CTA Buttons (Left aligned) --- */}
        <div className="flex flex-col sm:flex-row gap-4 mb-10">
    

          <a
            onClick={() => setOpenLeadPopup(true)}
            className="inline-flex items-center justify-center rounded-xl bg-[#FC763A] px-8 py-2 md:py-3 text-base font-bold text-white transition hover:from-teal-400 hover:to-emerald-500 shadow-lg shadow-teal-500/40 w-fit"
          >
            Get a Quote
          </a>
        </div>

        {/* --- Project Tags Area (Left aligned) --- */}
        <div className="max-w-3xl mt-8">
          <h3 className="text-lg font-semibold text-gray-100 mb-4 drop-shadow">Filter by Segment:</h3>
          <div className="flex flex-wrap gap-3">
            {tags.map((tag) => (
              <button
                key={tag.label}
                type="button"
                className={`inline-flex items-center gap-2 rounded-full border border-gray-500 px-4 py-2 text-sm font-medium text-white transition hover:bg-white/10 bg-black/20 ${tag.color}`}
              >
                <tag.icon className="h-4 w-4" />
                {tag.label}
              </button>
            ))}
          </div>
        </div>
        
      </div>
      {/* Popup Mount */}
        {openLeadPopup && (
          <LeadPopup onClose={() => setOpenLeadPopup(false)} />
        )}
    </section>
  );
}