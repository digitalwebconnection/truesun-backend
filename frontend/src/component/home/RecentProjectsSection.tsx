import LeadPopup from "../../component/LeadPopup";
import {  useState } from "react";

import bloom from "../../assets/Bloom Packaging/2.jpg"
import rentokil from "../../assets/PCI Rentokill/2.jpg";
import rustomjee from "../../assets/Rustomjee virar/5.png";
import oberoi from "../../assets/Oberoi Realty/3.png";
import landmark from "../../assets/Landmrk Pllatinum/5.jpeg";
import kalpataru from "../../assets/Kalpataru Estate CHS Limited/6.jpeg";
import ganesh from "../../assets/Ganesh kung/4.png";
import sharad from "../../assets/Sharad Apt/3.jpeg";
import bungalow from "../../assets/Andheri Bungalow/1.png";

const projects = [
  {
    id: 1,
    title: "Bloom Packaging Solar Plant",
    type: "Industrial · 60 kW",
    location: "Daman, India",
    image: bloom, // use image from old website
  },
  {
    id: 2,
    title: "Rentokil PCI Rooftop Solar",
    type: "Commercial & Industrial · 48 kW",
    location: "Goregaon West, Mumbai",
    image: rentokil,
  },
  {
    id: 3,
    title: "Rustomjee Global City Solar Installation",
    type: "Residential · 40 kW",
    location: "Virar, Mumbai",
    image: rustomjee,
  },
  {
    id: 4,
    title: "Oberoi Realty Rooftop Solar",
    type: "Highrise Residential · 75 kW",
    location: "Bhandup West, Mumbai",
    image: oberoi,
  },
  {
    id: 5,
    title: "Landmark Platina Solar Project",
    type: "Commercial · 30 kW",
    location: "Bandra East, Mumbai",
    image: landmark,
  },
  {
    id: 6,
    title: "Kalpataru Society Solar Plant",
    type: "Residential Society · 115 kW",
    location: "Andheri, Mumbai",
    image: kalpataru,
  },
  {
    id: 7,
    title: "Ganesh Kunj Rooftop Solar",
    type: "Residential · 15 kW",
    location: "Andheri East, Mumbai",
    image: ganesh,
  },
  {
    id: 8,
    title: "Sharad Apartment Solar System",
    type: "Residential · 12 kW",
    location: "Goregaon West, Mumbai",
    image: sharad,
  },
  {
    id: 9,
    title: "Villa & Bungalow Solar System",
    type: "Residential Bungalow · 15 kW",
    location: "Andheri, Mumbai",
    image: bungalow,
  },
];

export default function RecentProjectsSection() {
    const [openLeadPopup, setOpenLeadPopup] = useState(false);
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
              key={project.id}
              className="group relative overflow-hidden rounded-3xl bg-white border border-[#FC763A] shadow-[0_18px_45px_rgba(15,23,42,0.06)] transition hover:-translate-y-1 hover:shadow-[0_24px_60px_rgba(15,23,42,0.12)]"
            >
              {/* image */}
              <div className="relative h-48 sm:h-52 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="h-full w-full object-cover transition duration-500 group-hover:scale-105 group-hover:brightness-110"
                  loading="lazy"
                />
                {/* category badge */}
                <div className="absolute left-3 top-3 inline-flex items-center gap-1 rounded-full bg-black/55 px-3 py-1 text-[11px] font-medium text-white backdrop-blur">
                  <span className="inline-block h-1.5 w-1.5 rounded-full bg-[#FC763A]" />
                  <span>{project.type}</span>
                </div>
              </div>

              {/* content */}
              <div className="p-4 sm:p-5">
                <h3 className="text-sm sm:text-base font-semibold text-slate-900 line-clamp-2">
                  {project.title}
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
