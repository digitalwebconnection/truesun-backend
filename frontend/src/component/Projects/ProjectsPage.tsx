import React, { useEffect, useState, useMemo } from "react";
import { motion } from "framer-motion";
import {
  SunMedium,
  MapPin,
  Sparkles,
  Building2,
  Leaf,
  BadgeCheck,
  ChevronRight,
} from "lucide-react";
import { apiUrl } from "../../lib/api";

/* =========================
   Palette (TrueSun)
   ========================= */
const PALETTE = {
  primary: "#FC763A",
  accent: "#FEC24A",
  neutral: "#686868",
  softBg: "#FFF8F3",
};

/* ───────────────────────── Types ───────────────────────── */
type Project = {
  _id?: string;
  name: string;
  segment: string;
  location: string;
  description: string;
  image: string;
  beforeImage?: string;
  afterImage?: string;
  capacity: string;
  roofType: string;
  co2Mitigated: string;
  annualGen: string;
  payback: string;
  savings: string;
  caseStudyUrl?: string;
  clientType?: string;
  clientName?: string;
  commissioningYear?: string;
  modulesUsed?: string;
  invertersUsed?: string;
  mountingType?: string;
  specialFeatures?: string[];
  keyObjectives?: string[];
  challenges?: string[];
  implementationHighlights?: string[];
};

/* ───────────────────── Helpers ───────────────────── */
function parseNumber(str: string): number {
  if (!str) return 0;
  const cleaned = str.replace(/,/g, "");
  const match = cleaned.match(/[\d.]+/);
  return match ? parseFloat(match[0]) : 0;
}

/** Returns a valid img src — handles /uploads paths (proxied to backend) and static imports */
function imgSrc(img: string | undefined): string {
  return img || "";
}

/* ───────────────────── UI Helpers ───────────────────── */
function StatPill({
  icon: Icon,
  label,
  value,
}: {
  icon: React.ElementType;
  label: string;
  value: string;
}) {
  return (
    <div className="flex items-center gap-2 rounded-xl bg-white/90 px-3 py-2 text-xs shadow-sm ring-1 ring-slate-100">
      <Icon className="h-4 w-4" style={{ color: PALETTE.primary }} />
      <div className="flex flex-col">
        <span className="text-[10px] uppercase tracking-[0.18em] text-slate-400">
          {label}
        </span>
        <span className="text-xs font-semibold">{value}</span>
      </div>
    </div>
  );
}

function InfoCard({
  icon: Icon,
  label,
  value,
}: {
  icon: React.ElementType;
  label: string;
  value: string;
}) {
  return (
    <div className="flex items-start gap-3 rounded-2xl border border-slate-200 bg-white p-3 shadow-sm">
      <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-white" style={{ boxShadow: "inset 0 -1px 0 rgba(0,0,0,0.03)" }}>
        <Icon className="h-4 w-4" style={{ color: PALETTE.primary }} />
      </div>
      <div>
        <div className="text-[10px] uppercase tracking-[0.18em] text-slate-400">
          {label}
        </div>
        <div className="mt-1 text-sm font-semibold text-slate-900">{value}</div>
      </div>
    </div>
  );
}

/* ───────────────────── Main Page ───────────────────── */
export default function ProjectShowcasePage() {
  const [projects, setProjects]     = useState<Project[]>([]);
  const [activeIndex, setActiveIndex] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [, setModalProject]         = useState<Project | null>(null);
  const [loading, setLoading] = useState(true);

  /* ── Fetch from API on mount ── */
  useEffect(() => {
    setLoading(true);
    fetch(apiUrl("/api/projects"))
      .then(r => r.json())
      .then(data => {
        if (data.success && Array.isArray(data.data)) {
          setProjects(data.data);
          setActiveIndex(0);
        }
      })
      .catch((err) => {
        console.error("Failed to fetch projects:", err);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  /* ── Derived stats (computed from live projects array) ── */
  const totalCapacityKw = useMemo(
    () =>
      projects.reduce((sum, p) => {
        const n = parseNumber(p.capacity || "");
        if ((p.capacity || "").toLowerCase().includes("mw")) return sum + n * 1000;
        return sum + n;
      }, 0),
    [projects]
  );

  const totalCapacityLabel = useMemo(
    () =>
      totalCapacityKw >= 1000
        ? `${(totalCapacityKw / 1000).toFixed(1)} MWp`
        : `${totalCapacityKw.toFixed(0)} kWp`,
    [totalCapacityKw]
  );

  const totalCo2Tonnes = useMemo(
    () => projects.reduce((sum, p) => sum + parseNumber(p.co2Mitigated || ""), 0),
    [projects]
  );

  const uniqueSegments = useMemo(
    () => Array.from(new Set(projects.map(p => p.segment))),
    [projects]
  );


  const activeProject = projects[activeIndex] ?? projects[0];

  /* Auto change project every 8 seconds (pause when modal open) */
  useEffect(() => {
    if (isModalOpen || projects.length === 0) return;
    const id = setInterval(() => {
      setActiveIndex(prev => (prev + 1) % projects.length);
    }, 8000);
    return () => clearInterval(id);
  }, [isModalOpen, projects.length]);

  const openModalForProject = (project: Project, index: number) => {
    setActiveIndex(index);
    setModalProject(project);
    setIsModalOpen(true);
  };

  if (!loading && !activeProject) return null;

  return (
    <section className="relative mx-auto max-w-7xl px-6 py-16 lg:px-0">
      {/* Subtle background blob */}
      <div className="pointer-events-none absolute inset-x-0 top-32 -z-10 h-72 bg-linear-to-r from-sky-100 via-emerald-50 to-transparent blur-3xl" />

      {/* Heading row */}
      <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
        <div>
          <p className="inline-flex items-center gap-2 rounded-full bg-sky-50 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.24em] text-sky-700">
            <Sparkles className="h-3.5 w-3.5 text-amber-400" />
            Project Portfolio
          </p>
          <h2 className="mt-3 text-3xl font-bold text-[#FC763A] sm:text-4xl">Our Solar Installations </h2>
          <p className="mt-2 max-w-2xl text-sm text-slate-600 sm:text-base">
            A quick view of how TrueSun implementations are helping factories, commercial complexes and institutions reduce grid dependence and improve cash flow.
          </p>
        </div>

        {/* Global stats strip */}
        <div className="grid grid-cols-2 gap-2 text-xs sm:text-[13px] md:text-xs">
          <div className="rounded-2xl bg-slate-900 px-4 py-3 text-slate-50">
            <div className="text-[10px] uppercase tracking-[0.2em] text-slate-400">Cumulative Capacity</div>
            <div className="mt-1 text-sm font-semibold">{loading ? "..." : totalCapacityLabel}</div>
          </div>
          <div className="rounded-2xl bg-emerald-50 px-4 py-3 text-emerald-900">
            <div className="text-[10px] uppercase tracking-[0.2em] text-emerald-600">CO₂ Mitigated / year</div>
            <div className="mt-1 text-sm font-semibold">{loading ? "..." : `${totalCo2Tonnes.toLocaleString()} tonnes`}</div>
          </div>
        </div>
      </div>

      {loading ? (
        <>
          <div className="mt-10 grid gap-6 lg:grid-cols-[minmax(0,1.5fr)_minmax(0,1fr)] animate-pulse">
            <div className="rounded-3xl bg-slate-200 h-72 sm:h-90 lg:h-140 w-full"></div>
            <div className="space-y-4">
              <div className="rounded-3xl bg-slate-200 h-64 w-full"></div>
              <div className="grid gap-3 sm:grid-cols-2">
                <div className="rounded-2xl bg-slate-200 h-20 w-full"></div>
                <div className="rounded-2xl bg-slate-200 h-20 w-full"></div>
              </div>
              <div className="rounded-2xl bg-slate-200 h-16 w-full"></div>
            </div>
          </div>
          <div className="mt-12">
            <div className="mb-6 flex items-center justify-between gap-2">
              <div className="h-4 w-40 bg-slate-200 rounded animate-pulse"></div>
              <div className="h-3 w-48 bg-slate-200 rounded animate-pulse"></div>
            </div>
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {[1, 2, 3, 4, 5, 6].map((i) => (
                <div key={i} className="flex flex-col rounded-2xl border border-slate-200 bg-white h-80 animate-pulse">
                  <div className="h-44 bg-slate-200 w-full rounded-t-2xl"></div>
                  <div className="p-4 space-y-3">
                    <div className="h-5 bg-slate-200 w-3/4 rounded"></div>
                    <div className="flex gap-2">
                      <div className="h-6 w-16 bg-slate-200 rounded-full"></div>
                      <div className="h-6 w-16 bg-slate-200 rounded-full"></div>
                    </div>
                    <div className="h-4 bg-slate-200 w-full rounded mt-4"></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </>
      ) : (
        <>
      {/* Active project hero + side stats */}
      <div className="mt-10 grid gap-6 lg:grid-cols-[minmax(0,1.5fr)_minmax(0,1fr)]">
        {/* Hero */}
        <motion.div
          key={activeProject.name}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45, ease: "easeOut" }}
          className="overflow-hidden rounded-3xl border border-slate-200 bg-slate-950/90 shadow-xl shadow-slate-900/40"
        >
          <div className="relative h-72 w-full sm:h-90 lg:h-140">
            <img src={imgSrc(activeProject.image)} alt={activeProject.name} className="h-full w-full object-cover brightness-[0.9]" loading="lazy" />
            <div className="absolute inset-0 bg-linear-to-t from-slate-900/80 via-slate-900/30 to-transparent" />

            {/* Overlay content */}
            <div className="absolute inset-x-5 bottom-5 space-y-3 text-slate-50">
              <div className="flex flex-wrap items-center gap-2 text-[11px]">
                <span className="inline-flex items-center gap-1 rounded-full bg-emerald-500/90 px-3 py-1 text-xs font-semibold text-white">
                  <SunMedium className="h-3.5 w-3.5" /> {activeProject.segment}
                </span>
                <span className="inline-flex items-center gap-1 rounded-full bg-slate-900/60 px-3 py-1 text-[11px]">
                  <MapPin className="h-3.5 w-3.5 text-sky-300" /> {activeProject.location}
                </span>
                <span className="inline-flex items-center gap-1 rounded-full bg-slate-900/60 px-3 py-1 text-[11px]">
                  <Building2 className="h-3.5 w-3.5 text-amber-300" /> {activeProject.capacity} • {activeProject.roofType}
                </span>
                {activeProject.commissioningYear && (
                  <span className="inline-flex items-center gap-1 rounded-full bg-slate-900/60 px-3 py-1 text-[11px]">
                    <BadgeCheck className="h-3.5 w-3.5 text-emerald-300" /> {activeProject.commissioningYear}
                  </span>
                )}
              </div>

              <h3 className="text-lg font-semibold sm:text-2xl">{activeProject.name}</h3>
              <p className="max-w-2xl text-xs text-slate-200 sm:text-sm">{activeProject.description}</p>
            </div>
          </div>
        </motion.div>

        {/* Right-side stats panel */}
        <div className="space-y-4">
          <div className="rounded-3xl border border-slate-600/50 bg-white/90 p-4 shadow-sm">
            <div className="text-[10px] font-semibold uppercase tracking-[0.2em] text-slate-500">Impact Snapshot</div>
            <p className="mt-2 text-xs text-slate-600">Quick view of performance metrics for this project.</p>

            <div className="mt-4 grid gap-2">
              <StatPill icon={SunMedium} label="Annual generation" value={activeProject.annualGen} />
              <StatPill icon={Leaf} label="CO₂ mitigated" value={activeProject.co2Mitigated} />
              <StatPill icon={BadgeCheck} label="Expected payback" value={activeProject.payback} />
              <StatPill icon={Sparkles} label="Estimated savings" value={activeProject.savings} />
            </div>
          </div>

          <div className="grid gap-3 sm:grid-cols-2">
            <InfoCard icon={Building2} label="Segments Served" value={uniqueSegments.join(" • ")} />
            <InfoCard icon={MapPin} label="Installations Across" value="1 state" />
          </div>

          <div className="rounded-2xl border border-dashed border-emerald-600/50 bg-emerald-50/70 p-3 text-[11px] text-emerald-900">
            <span className="font-semibold text-emerald-800">Note: </span> Most C&I clients recover their investment within <span className="font-semibold">{activeProject.payback}</span> while enjoying predictable energy costs for 20–25 years.
          </div>
        </div>
      </div>

      {/* Grid of projects (3x3 format) */}
      <div className="mt-12">
        <div className="mb-6 flex items-center justify-between gap-2">
          <div className="text-[12px] font-bold uppercase tracking-[0.2em] text-slate-600">Browse Installations</div>
          <div className="text-[11px] text-slate-400">Click a card to open full case study</div>
        </div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {projects.slice(0, 9).map((project, index) => {
            const isActive = index === activeIndex;
            return (
              <button
                key={project._id ?? project.name}
                type="button"
                onClick={() => openModalForProject(project, index)}
                className={`group relative flex w-full flex-col overflow-hidden rounded-2xl border bg-white text-left shadow-sm transition-all duration-300 ${
                  isActive
                    ? "border-sky-500 ring-2 ring-sky-500/20 scale-[1.02] z-10"
                    : "border-slate-200 hover:border-sky-400 hover:shadow-xl hover:-translate-y-1"
                }`}
              >
                <div className="relative h-44 w-full overflow-hidden">
                  <img 
                    src={imgSrc(project.image)} 
                    alt={project.name} 
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110" 
                    loading="lazy" 
                  />
                  <div className="absolute inset-0 bg-linear-to-t from-slate-900/80 via-slate-900/10 to-transparent" />
                  <div className="absolute bottom-3 left-3 flex flex-wrap items-center gap-2 text-[10px] text-slate-50">
                    <span className="inline-flex items-center gap-1 rounded-full bg-slate-900/70 px-2.5 py-1 backdrop-blur-sm">
                      <SunMedium className="h-3 w-3 text-amber-300" /> {project.segment}
                    </span>
                    <span className="inline-flex items-center gap-1 rounded-full bg-slate-900/60 px-2.5 py-1 backdrop-blur-sm">
                      <MapPin className="h-3 w-3 text-sky-300" /> {project.location}
                    </span>
                  </div>
                </div>

                <div className="flex flex-1 flex-col px-4 py-4">
                  <div className="line-clamp-2 text-sm font-bold text-slate-900 group-hover:text-sky-700 transition-colors">{project.name}</div>
                  <div className="mt-3 flex flex-wrap items-center gap-2 text-[10px] text-slate-600">
                    <span className="rounded-full bg-slate-100 px-2.5 py-1 font-medium">{project.capacity}</span>
                    <span className="rounded-full bg-slate-100 px-2.5 py-1 font-medium">{project.roofType}</span>
                    <span className="rounded-full bg-emerald-50 text-emerald-700 px-2.5 py-1 font-semibold">{project.payback} payback</span>
                  </div>
                  <div className="mt-4 flex items-center justify-between border-t border-slate-50 pt-3 text-[11px] font-medium text-slate-500">
                    <span>View Case Study</span>
                    <ChevronRight className={`h-4 w-4 transition-transform duration-300 ${isActive || "group-hover:translate-x-1"} ${isActive ? "text-sky-600" : "text-slate-300"}`} />
                  </div>
                </div>
              </button>
            );
          })}
        </div>
      </div>
        </>
      )}
    </section>
  );
}
