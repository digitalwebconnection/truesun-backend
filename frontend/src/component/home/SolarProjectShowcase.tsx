 
import { useEffect, useState } from "react";
import { Zap, MapPin, X, ChevronLeft, ChevronRight } from "lucide-react";

const DATA = [
  {
    title: "Bandra Residential Rooftop",
    img: "https://cms.polycab.com/media/plga0o3t/solar-panel-hero-banner.webp",
    desc: "Elegant rooftop solar setup generating clean energy for a modern home.",
    capacity: "9.8 kW",
    location: "Mumbai, MH",
  },
  {
    title: "Ahmedabad Industrial Plant",
    img: "https://waaree.com/wp-content/uploads/2025/07/Solar-panels-online-scaled.jpg",
    desc: "A 120 kW solar installation providing stable power for heavy manufacturing units.",
    capacity: "120 kW",
    location: "Ahmedabad, GJ",
  },
  {
    title: "Powai Commercial Complex",
    img: "https://images.unsplash.com/photo-1558449028-b53a39d100fc?q=80&w=1600&auto=format&fit=crop",
    desc: "Powering business towers with sustainable and efficient solar energy.",
    capacity: "48 kW",
    location: "Mumbai, MH",
  },
  {
    title: "Bhiwandi Warehouse",
    img: "https://i0.wp.com/www.ecomena.org/wp-content/uploads/2024/08/optimal-solar-system-size.jpg",
    desc: "Reliable on-grid solution ensuring consistent power supply for warehouse operations.",
    capacity: "36 kW",
    location: "Thane, MH",
  },
  {
    title: "Bhiwandi Warehouse 2",
    img: "https://img.freepik.com/free-photo/solar-panels-roof-solar-cell_335224-1324.jpg?semt=ais_hybrid&w=740&q=80",
    desc: "Reliable on-grid solution ensuring consistent power supply for warehouse operations.",
    capacity: "36 kW",
    location: "Thane, MH",
  },
  {
    title: "Bhiwandi Warehouse 3",
    img: "https://thumbs.dreamstime.com/b/solar-energy-panels-light-bulb-sunset-concept-sustainable-resources-82570891.jpg",
    desc: "Reliable on-grid solution ensuring consistent power supply for warehouse operations.",
    capacity: "36 kW",
    location: "Thane, MH",
  },
];

export default function SolarProjectShowcase() {
  const [hovered, setHovered] = useState<number | null>(null);
  const [selected, setSelected] = useState<number | null>(null);
  const [visibleCount, setVisibleCount] = useState<number>(3);
  const showingAll = visibleCount >= DATA.length;

  const close = () => setSelected(null);
  const prev = () =>
    setSelected((i) => (i === null ? i : (i - 1 + DATA.length) % DATA.length));
  const next = () =>
    setSelected((i) => (i === null ? i : (i + 1) % DATA.length));

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
  }, [selected]);

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
        {DATA.slice(0, visibleCount).map((project, index) => (
          <button
            key={index}
            onMouseEnter={() => setHovered(index)}
            onMouseLeave={() => setHovered(null)}
            onClick={() => setSelected(index)}
            className="group relative rounded-3xl overflow-hidden shadow-black/30 shadow-xl hover:shadow-2xl transition-all duration-500 bg-white/80 backdrop-blur-sm border border-neutral-900/40 hover:-translate-y-2 text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-400"
          >
            <img
              src={project.img}
              alt={project.title}
              className={`w-full h-64 object-cover transition-transform duration-700 ${hovered === index ? "scale-110" : "scale-100"
                }`}
            />

            {/* Overlay */}
            <div className="absolute inset-0 bg-linear-to-t from-black  to-transparent opacity-90 group-hover:opacity-100 transition-opacity duration-500" />

            {/* Text */}
            <div className="absolute bottom-5 left-5 right-5 text-white">
              <h3 className="text-xl font-bold drop-shadow-lg">{project.title}</h3>
              <p className="text-sm text-white mt-1">{project.desc}</p>

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
          onClick={() => setVisibleCount(showingAll ? 3 : DATA.length)}
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
                src={DATA[selected].img}
                alt={DATA[selected].title}
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
                  {DATA[selected].title}
                </h3>
                <p className="mt-2 text-neutral-700">{DATA[selected].desc}</p>
              </div>
              <div className="flex flex-col gap-2">
                <div className="inline-flex items-center gap-2 rounded-md bg-amber-50 px-3 py-2 text-amber-700 ring-1 ring-amber-200">
                  <Zap className="h-4 w-4" /> {DATA[selected].capacity}
                </div>
                <div className="inline-flex items-center gap-2 rounded-md bg-neutral-50 px-3 py-2 text-neutral-700 ring-1 ring-neutral-200">
                  <MapPin className="h-4 w-4" /> {DATA[selected].location}
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
