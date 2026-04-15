

import { Link } from "react-router-dom";
import {
  ChevronRight,

} from "lucide-react";

export default function ServicesPage() {
  return (
    <main className="mx-auto max-w-7xl px-4 md:px-6 py-16 space-y-20">

      {/* ===== PAGE TITLE ===== */}
      <section className="text-center space-y-4">
        <h1 className="text-3xl md:text-4xl font-bold text-[#686868]">
          Premium Solar Solutions for Every Need
        </h1>
        <p className="text-slate-600 max-w-2xl mx-auto text-sm md:text-base">
          Rooftop and consulting services built for real savings and reliable performance.
        </p>
      </section>

      {/* ===== SERVICE GRID ===== */}
      <section className="space-y-6">
        <div className="flex items-center justify-between gap-4">
          <h2 className="text-xl md:text-3xl font-bold text-[#FC763A]">
            Core Solar Services
          </h2>
          <p className="hidden md:block text-xs uppercase tracking-[0.18em] text-slate-500">
            Rooftop • Consulting • Performance
          </p>
        </div>

        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3">

          {/* ========== C&I Solar ========== */}
          <ServiceCard
            title="C&I Rooftop Solar"
            desc="Optimised solar for factories, warehouses and offices."
            img="https://d382rz2cea0pah.cloudfront.net/wp-content/uploads/2023/05/Untitled-design-2023-05-12T100356.968-1.jpg"
            link="/services/rooftop/C&I"
            badge="Industries & Businesses"
            points={[
              "Capex / Opex options",
              "Net-metering friendly",
              "No production downtime",
            ]}
          />

          {/* ========== Residential Solar ========== */}
          <ServiceCard
            title="Residential Rooftop Solar"
            desc="Clean, safe rooftop solar for homes and villas."
            img="https://www.teriin.org/sites/default/files/inline-images/rooftop-solar1.jpg"
            link="/services/rooftop/residential"
            badge="Homes & Villas"
            points={[
              "Bills down up to 90%",
              "Neat wiring & routing",
              "Compact inverter setup",
            ]}
          />

          {/* ========== Carbon Consulting ========== */}
          <ServiceCard
            title="Carbon Footprinting & Consulting"
            desc="Track CO₂ reduction and align with ESG goals."
            img="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSEJFOe8Nxg95cNm1y3TJ5QgWjdDSRvibM1vg&s"
            link="/services/consulting/carbon-footprinting"
            badge="ESG & Compliance"
            points={[
              "Baseline footprint study",
              "CO₂ savings reports",
              "ESG / CSR mapping",
            ]}
          />
        </div>
      </section>




      <section className="space-y-6">
        <div className="grid gap-8 lg:grid-cols-[0.9fr,1.1fr] items-start">
          {/* Left intro block */}
          <div className="space-y-4 text-center">
            <h2 className="text-2xl font-semibold text-[#FC763A]">
              Where We Create Maximum Impact
            </h2>
            <p className="text-sm text-slate-600 max-w-xl mx-auto">
              From heavy industries to premium homes, each segment gets a tailored solar strategy.
            </p>

            <div className="flex flex-wrap gap-2 text-xs text-center justify-center">
              <span className="rounded-full border border-slate-200 bg-slate-50 px-3 py-1">
                High daytime consumption
              </span>
              <span className="rounded-full border border-slate-200 bg-slate-50 px-3 py-1">
                Roof & ground-mounted
              </span>
              <span className="rounded-full border border-slate-200 bg-slate-50 px-3 py-1">
                Aesthetics + performance
              </span>
            </div>
          </div>

          {/* Right timeline list */}
          <div className="relative">
            {/* vertical line */}
            <div className="pointer-events-none absolute left-4 top-0 bottom-0 hidden md:block">
              <div className="h-full w-px bg-linear-to-b from-orange-300/70 via-slate-300 to-slate-200" />
            </div>

            <div className="space-y-6">
              <SegmentStep
                icon="🏭"
                title="Commercial & Industrial"
                subtitle="High energy demand, optimized with smart solar engineering."
                image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTunber4pEZ8k215w6XzpFF0XRh59v4cqF6zA&s"
                chips={[
                  "High ROI",
                  "Peak Load Management",
                  "Smart Engineering",
                ]}
              />

              <SegmentStep
                icon="🏠"
                title="Residential Projects"
                subtitle="Aesthetic solar solutions designed for modern homes."
                image="https://solaraceenergy.com/wp-content/uploads/2025/12/DJI_0143-scaled.jpg"
                chips={[
                  "Clean Cabling",
                  "Premium Finish",
                  "Silent Operation",
                ]}
              />

              <SegmentStep
                icon="🏥"
                title="Hospitals & Critical Infra"
                subtitle="Reliable power backup for mission-critical operations."
                image="https://pranasolar.com/wp-content/uploads/2025/02/100-kW-@-KJK-Hospital-Nalanchira-1024x683.jpg"
                chips={[
                  "24/7 Backup",
                  "Zero Downtime",
                  "High Reliability",
                ]}
              />

              <SegmentStep
                icon="🎓"
                title="Institutions & Campuses"
                subtitle="Efficient energy use across large-scale campuses."
                image="https://orbenergy.com/wp-content/uploads/revslider/video-media/ORB-Web-Video-Final-1-1_20.jpeg"
                chips={[
                  "Cost Saving",
                  "Energy Optimisation",
                  "Scalable Systems",
                ]}
              />
            </div>
          </div>
        </div>
      </section>


      {/* ===== SIMPLE PROCESS SECTION – TIMELINE STYLE ===== */}
      <section className="relative overflow-hidden rounded-3xl  p-4 md:p-0 space-y-8">
        {/* subtle glow */}
        <div className="pointer-events-none absolute -right-10 top-0 h-40 w-40 rounded-full bg-[#FC763A]/10 blur-3xl" />
        <div className="pointer-events-none absolute -left-10 bottom-0 h-40 w-40 rounded-full bg-sky-500/10 blur-3xl" />

        <div className="relative flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <div>
            <h2 className="text-3xl font-semibold text-[#FC763A]">
              A Clear, 3-Step Solar Journey
            </h2>
            <p className="text-sm md:text-base text-[#686868] max-w-xl">
              From first call to live generation — no noise, just a structured path.
            </p>
          </div>
          <p className="text-xs uppercase tracking-[0.2em] text-[#686868]">
            STUDY • DESIGN • EXECUTE
          </p>
        </div>

        {/* connecting line (desktop) */}
        <div className="relative mt-4">
          <div className="pointer-events-none absolute left-6 right-6 top-6 hidden md:block">
            <div className="h-px w-full bg-linear-to-r from-orange-300/70 via-slate-500/60 to-orange-300/70" />
          </div>

          <div className="relative grid gap-5 md:grid-cols-3">
            <StepCard
              step="01"
              label="Site & Load Study"
              text="We study your roof, shadows and consumption pattern."
            />
            <StepCard
              step="02"
              label="Design & Proposal"
              text="You get layouts, energy yield and clear payback numbers."
            />
            <StepCard
          
              step="03"
              label="Execution & Handover"
              text="We install, coordinate approvals and set up monitoring."
            />
          </div>
        </div>
      </section>


    </main>
  );
}

/* ==============================================================
   SMALL REUSABLE COMPONENTS + MICRO-ANIMATIONS
   ============================================================== */

function ServiceCard({
  title,
  desc,
  img,
  link,
  badge,
  points,
}: {
  title: string;
  desc: string;
  img: string;
  link: string;
  badge?: string;
  points?: string[];
}) {
  return (
    <div className="group overflow-hidden rounded-2xl border border-slate-600/40 hover:bg-orange-200 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1.5 hover:shadow-2xl hover:border-orange-200">
      {/* Image */}
      <div className="relative h-56 w-full overflow-hidden">
        <img
          src={img}
          alt={title}
          className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
        />
        {badge && (
          <div className="absolute left-4 top-4 rounded-full bg-white/90 px-3 py-1 text-xs font-medium text-slate-900 shadow-sm">
            {badge}
          </div>
        )}
      </div>

      {/* Content */}
      <div className="p-6 space-y-4">
        <div>
          <h3 className="text-lg font-semibold text-slate-900">{title}</h3>
          <p className="mt-1 text-sm text-slate-600">{desc}</p>
        </div>

        {points && points.length > 0 && (
          <ul className="space-y-1 text-xs text-slate-600">
            {points.map((item) => (
              <li key={item} className="flex items-start gap-1.5">
                <span className="mt-1 h-1.5 w-1.5 rounded-full bg-[#FC763A]" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        )}

        <Link
          to={link}
          className="inline-flex items-center gap-2 text-sm font-medium text-[#FC763A] hover:text-orange-700 transition"
        >
          View Details
          <ChevronRight className="h-4 w-4" />
        </Link>
      </div>
    </div>
  );
}


function StepCard({
  step,
  label,
  text,
}: {
  step: string;
  label: string;
  text: string;
}) {
  return (
    <div className="relative flex flex-col items-start md:items-center gap-4 rounded-3xl border border-gray-200 bg-white px-5 py-5 md:px-6 md:py-6 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-xl hover:border-[#FC763A]">

      {/* Step Circle */}
      <div className="flex items-center gap-3 md:flex-col md:gap-3 w-full">

        <div className="relative">
          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#c7a25a]/10 border border-[#FC763A] shadow-md">
            <span className="text-sm font-bold text-[#c7a25a]">
              {step}
            </span>
          </div>
        </div>

        {/* Label */}
        <div className="flex-1 md:text-center">
          <h3 className="text-base md:text-lg font-semibold text-gray-800">
            {label}
          </h3>
        </div>
      </div>

      {/* Text */}
      <p className="text-sm text-gray-600 md:text-center leading-relaxed">
        {text}
      </p>

      {/* Bottom Glow Line */}
      <div className="absolute bottom-0 left-0 w-full h-0.5 bg-linear-to-r from-[#FC763A] to-transparent opacity-0 group-hover:opacity-100 transition"></div>

    </div>
  );
}



function SegmentStep({
  icon,
  title,
  subtitle,
  chips,
  image,
}: {
  icon: string;
  title: string;
  subtitle: string;
  chips: string[];
  image: string;
}) {
  return (
    <div className="relative flex gap-4 rounded-2xl border border-slate-200 bg-white overflow-hidden shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-md hover:border-orange-200">

      {/* Left Image */}
      <div className="w-24 h-24 md:w-62 md:h-38 shrink-0">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover"
        />
      </div>

      {/* Content */}
      <div className="flex-1 p-3 md:p-4 space-y-2">

        {/* Top Row */}
        <div className="flex items-start justify-between">
          <div>
            <h3 className="text-sm md:text-base font-semibold text-slate-900">
              {title}
            </h3>
            <p className="text-xs text-slate-600">{subtitle}</p>
          </div>

          {/* Icon */}
          <div className="hidden md:flex h-8 w-8 items-center justify-center rounded-full border border-orange-300 text-[#FC763A] text-xs">
            {icon}
          </div>
        </div>

        {/* Chips */}
        <div className="flex flex-wrap gap-2">
          {chips.map((chip) => (
            <span
              key={chip}
              className="rounded-full bg-slate-50 px-2.5 py-1 text-[11px] text-slate-700 border border-slate-200"
            >
              {chip}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
