 
import { useEffect, useState } from "react";
import { Zap, MapPin, X, ChevronLeft, ChevronRight } from "lucide-react";
import { apiUrl } from "../../lib/api";

export default function SolarProjectShowcase() {
  const [projects, setProjects] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [hovered, setHovered] = useState<number | null>(null);
  const [selected, setSelected] = useState<number | null>(null);
  const [visibleCount, setVisibleCount] = useState<number>(3);

  useEffect(() => {
    fetch(apiUrl("/api/projects"))
      .then((res) => res.json())
      .then((data) => {
        if (data.success) {
          setProjects(data.data);
        }
      })
      .catch((err) => console.error("Error fetching projects:", err))
      .finally(() => setLoading(false));
  }, []);

  const showingAll = visibleCount >= projects.length;

  const close = () => setSelected(null);
  const prev = () =>
    setSelected((i) => (i === null ? i : (i - 1 + projects.length) % projects.length));
  const next = () =>
    setSelected((i) => (i === null ? i : (i + 1) % projects.length));

  // keyboard: Esc/Arrows
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (selected === null) return;
      if (e.key === "Escape") close();
      if (e.key === "ArrowLeft") prev();
      if (e.key === "ArrowRight") next();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [selected, projects.length]);

  if (loading) return null;
  if (projects.length === 0) return null;


  return (
    <section className="relative w-full bg-linear-to-br from-white via-amber-50/40 to-emerald-50 py-10 px-6 overflow-hidden">
      {/* Decorative gradient background */}
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_25%_20%,rgba(255,215,0,0.2),transparent_50%),radial-gradient(circle_at_75%_80%,rgba(0,120,90,0.15),transparent_60%)]" />

      <div className="text-center max-w-2xl mx-auto">
        <h2 className="text-4xl font-bold text-neutral-800 mb-3">Project Gallery</h2>
        <p className="text-neutral-600">
          Explore our recent solar installations designed for maximum efficiency and
          aesthetics.
        </p>
      </div>

      {/* Grid layout */}
      <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
        {projects.slice(0, visibleCount).map((project, index) => (
          <button
            key={project._id}
            onMouseEnter={() => setHovered(index)}
            onMouseLeave={() => setHovered(null)}
            onClick={() => setSelected(index)}
            className="group relative rounded-3xl overflow-hidden shadow-black/30 shadow-xl hover:shadow-2xl transition-all duration-500 bg-white/80 backdrop-blur-sm border border-neutral-900/40 hover:-translate-y-2 text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-400"
          >
            <img
              src={project.image}
              alt={project.name}
              className={`w-full h-64 object-cover transition-transform duration-700 ${hovered === index ? "scale-110" : "scale-100"
                }`}
            />

            {/* Overlay */}
            <div className="absolute inset-0 bg-linear-to-t from-black  to-transparent opacity-90 group-hover:opacity-100 transition-opacity duration-500" />

            {/* Text */}
            <div className="absolute bottom-5 left-5 right-5 text-white">
              <h3 className="text-xl font-bold drop-shadow-lg">{project.name}</h3>
              <p className="text-sm text-white mt-1 line-clamp-2">{project.description}</p>

              <div className="flex items-center gap-3 mt-3 text-sm">
                <span className="flex items-center gap-1 bg-amber-400/90 text-black font-semibold px-3 py-1 rounded-full">
                  <Zap className="h-4 w-4" /> {project.capacity}
                </span>
                <span className="flex items-center gap-1 bg-white text-black px-3 py-1 rounded-full">
                  <MapPin className="h-4 w-4" /> {project.location}
                </span>
              </div>
            </div>
          </button>
        ))}
      </div>

      {/* View More / View Less CTA */}
      <div className="text-center mt-10">
        <button
          onClick={() => setVisibleCount(showingAll ? 3 : projects.length)}
          className="inline-flex items-center gap-2 bg-amber-600/80 text-black font-semibold px-6 py-3 rounded-full shadow-lg hover:bg-amber-400 transition"
        >
          {showingAll ? "View Less" : "View More Projects"}
        </button>
      </div>

      {/* Modal / Popup */}
      {selected !== null && (
        <div
          className="fixed inset-0 z-50 grid place-items-center bg-black/70 p-4"
          role="dialog"
          aria-modal="true"
          onClick={(e) => {
            if (e.target === e.currentTarget) close(); // close on overlay click
          }}
        >
          <div className="relative w-full max-w-4xl overflow-hidden rounded-3xl bg-white shadow-2xl">
            {/* Close */}
            <button
              aria-label="Close"
              onClick={close}
              className="absolute right-3 top-3 z-10 rounded-full bg-white/90 p-2 text-neutral-700 shadow hover:bg-white"
            >
              <X className="h-5 w-5" />
            </button>

            {/* Media */}
            <div className="relative aspect-video w-full overflow-hidden bg-neutral-100">
              <img
                src={projects[selected].image}
                alt={projects[selected].name}
                className="h-full w-full object-cover"
              />

              {/* Prev/Next */}
              <button
                onClick={prev}
                className="absolute left-3 top-1/2 -translate-y-1/2 rounded-full bg-white/90 p-2 text-neutral-800 shadow hover:bg-white"
                aria-label="Previous"
              >
                <ChevronLeft className="h-5 w-5" />
              </button>
              <button
                onClick={next}
                className="absolute right-3 top-1/2 -translate-y-1/2 rounded-full bg-white/90 p-2 text-neutral-800 shadow hover:bg-white"
                aria-label="Next"
              >
                <ChevronRight className="h-5 w-5" />
              </button>
            </div>

            {/* Details */}
            <div className="grid gap-4 p-5 sm:grid-cols-3">
              <div className="sm:col-span-2">
                <h3 className="text-xl font-semibold text-neutral-900">
                  {projects[selected].name}
                </h3>
                 <p className="mt-2 text-neutral-700">{projects[selected].description}</p>
              </div>
              <div className="flex flex-col gap-2">
                <div className="inline-flex items-center gap-2 rounded-md bg-amber-50 px-3 py-2 text-amber-700 ring-1 ring-amber-200">
                  <Zap className="h-4 w-4" /> {projects[selected].capacity}
                </div>
                <div className="inline-flex items-center gap-2 rounded-md bg-neutral-50 px-3 py-2 text-neutral-700 ring-1 ring-neutral-200">
                  <MapPin className="h-4 w-4" /> {projects[selected].location}
                </div>
                <a
                  href="#contact"
                  className="mt-2 inline-flex items-center justify-center rounded-md bg-amber-500 px-4 py-2 font-semibold text-white shadow hover:bg-amber-600"
                >
                  Get a Similar Setup
                </a>
              </div>
            </div>
          </div>
        </div>
      )}

    </section>
  );
}
