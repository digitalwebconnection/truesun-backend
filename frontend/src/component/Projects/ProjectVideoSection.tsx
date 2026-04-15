import { useState } from "react";
import v1 from "../../assets/videos/1.mp4";
import v2 from "../../assets/videos/2.mp4";
import v3 from "../../assets/videos/3.mp4";
import v4 from "../../assets/videos/4.mp4";

const videos = [
  { video: v1, title: "Residential Rooftop" },
  { video: v2, title: "Commercial Solar Farm" },
  { video: v3, title: "Industrial Storage" },
  { video: v4, title: "Hybrid Energy System" },
];

export default function ProjectVideoSection() {
  const [activeVideo, setActiveVideo] = useState<string | null>(null);

  return (
    <section className="py-14 bg-[#F9FAFB]">
      <div className="max-w-7xl mx-auto px-6">

        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-extrabold text-[#686868] tracking-tight">
              Project <span className="text-[#FC763A]">Gallery</span>
            </h2>
            <p className="mt-4 text-lg text-[#686868] leading-relaxed">
              Explore our high-performance solar installations delivering 
              sustainable energy across the country.
            </p>
          </div>
      
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          {videos.map((item, index) => (
            <div 
              key={index} 
              onClick={() => setActiveVideo(item.video)}
              className="cursor-pointer group relative bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-500"
            >
              
              {/* Video Preview */}
              <div className="relative aspect-video overflow-hidden">
                <video
                  src={item.video}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  muted
                  loop
                  autoPlay
                  playsInline
                />

                {/* Overlay */}
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 flex items-center justify-center transition">
                  <div className="w-16 h-16 flex items-center justify-center rounded-full bg-white/20 backdrop-blur-md border border-white/30 opacity-0 group-hover:opacity-100 transition">
                    ▶
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="p-6 flex justify-between items-center">
                <h3 className="text-xl font-bold text-[#2D2D2D] group-hover:text-[#FC763A]">
                  {item.title}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* 🎬 POPUP MODAL */}
      {activeVideo && (
        <div 
          className="fixed inset-0  bg-black/80 flex items-center justify-center z-50 px-4"
          onClick={() => setActiveVideo(null)}
        >
          <div 
            className="relative w-full h-150 mx-auto  flex justify-center  max-w-4xl"
            onClick={(e) => e.stopPropagation()}
          >
            
            {/* Close Button */}
            <button
              onClick={() => setActiveVideo(null)}
              className="absolute -top-12 right-0 text-white text-2xl"
            >
              ✕
            </button>

            {/* Video Player */}
            <video
              src={activeVideo}
              className="w-full rounded-lg object-cover"
              controls
              muted
              autoPlay
            />
          </div>
        </div>
      )}
    </section>
  );
}