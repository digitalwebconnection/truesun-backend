import LeadPopup from "../../component/LeadPopup";
import { useState, useEffect } from "react";
import { apiUrl } from "../../lib/api";

export default function RecentProjectsSection() {
  const [projects, setProjects] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [openLeadPopup, setOpenLeadPopup] = useState(false);

  useEffect(() => {
    fetch(apiUrl("/api/projects"))
      .then((res) => res.json())
      .then((data) => {
        if (data.success) {
          // Limit to first 9 projects for the home page section
          setProjects(data.data.slice(0, 9));
        }
      })
      .catch((err) => console.error("Error fetching projects:", err))
      .finally(() => setLoading(false));
  }, []);

  if (loading) return null; // Or a skeleton loader
  if (projects.length === 0) return null; // Hide section if no projects

  return (
    <section className="relative py-16 lg:py-20 bg-linear-to-b from-white via-[#FFF8F0] to-white">
      {/* soft background glow */}
      <div className="pointer-events-none absolute inset-x-0 top-0 mx-auto h-64 max-w-5xl rounded-full bg-orange-100/40 blur-3xl -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <div className=" text-center max-w-7xl mx-auto  mb-10 lg:mb-12">
          <div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-[#686868]">
              Rooftop Solar Projects for {" "}
              <span className="text-[#FC763A]">
               Residential and Commercial Buildings
              </span>
            </h2>
            <p className="mt-3 text-sm sm:text-base text-slate-600 max-w-4xl mx-auto">
              TrueSun showcases real, on-ground solar projects that transform unused rooftops into dependable power-generating assets. Our installations span residential homes, commercial buildings, and industrial facilities each delivering measurable performance and savings.
            </p>
          </div>

        </div>

        {/* Grid of projects */}
        <div className="grid gap-5 sm:gap-6 md:grid-cols-2 xl:grid-cols-3">
          {projects.map((project) => (
            <article
              key={project._id}
              className="group relative overflow-hidden rounded-3xl bg-white border border-[#FC763A] shadow-[0_18px_45px_rgba(15,23,42,0.06)] transition hover:-translate-y-1 hover:shadow-[0_24px_60px_rgba(15,23,42,0.12)]"
            >
              {/* image */}
              <div className="relative h-48 sm:h-52 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.name}
                  className="h-full w-full object-cover transition duration-500 group-hover:scale-105 group-hover:brightness-110"
                  loading="lazy"
                />
                {/* category badge */}
                <div className="absolute left-3 top-3 inline-flex items-center gap-1 rounded-full bg-black/55 px-3 py-1 text-[11px] font-medium text-white backdrop-blur">
                  <span className="inline-block h-1.5 w-1.5 rounded-full bg-[#FC763A]" />
                  <span>{project.segment} · {project.capacity}</span>
                </div>
              </div>

              {/* content */}
              <div className="p-4 sm:p-5">
                <h3 className="text-sm sm:text-base font-semibold text-slate-900 line-clamp-2">
                  {project.name}
                </h3>
                <p className="mt-2 text-xs sm:text-sm text-slate-500 flex items-center gap-1.5">
                  <span className="inline-block h-1.5 w-1.5 rounded-full bg-[#FC763A] " />
                  {project.location}
                </p>

                <div className="mt-4 flex items-center justify-between">
                  <p className="text-xs text-slate-500">
                    Real project photo · Installed by TrueSun
                  </p>
                
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* CTA under grid */}
        <div className="mt-10 flex flex-col sm:flex-row items-center justify-between gap-4">
         

         <button
            onClick={() => setOpenLeadPopup(true)}
            className="inline-flex items-center justify-center rounded-full bg-[#FC763A]  px-5 py-2.5 text-sm font-semibold text-white shadow-md shadow-orange-300/50 transition hover:shadow-lg hover:brightness-105"
          >
            Book a Free Site Visit
          </button>

        </div>
      </div>

      {/* Popup Mount */}
      {openLeadPopup && (
        <LeadPopup onClose={() => setOpenLeadPopup(false)} />
      )}
    </section>
  );
}
