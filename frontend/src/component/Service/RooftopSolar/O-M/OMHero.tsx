import { useState } from "react";
import LeadPopup from "../../../LeadPopup";

export default function SolarHero() {
    const [openLeadPopup, setOpenLeadPopup] = useState(false);
  return (
    <section className="relative py-25 h-150 px-6 md:px-16 ">
      
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src="https://www.tatapower.com/adobe/dynamicmedia/deliver/dm-aid--88aa9115-8050-4144-a9df-2c771f06d3db/body-01.png?quality=85&preferwebp=true"
          alt="Solar Background"
          className="w-full h-full object-cover"
        />
        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-[#0B1F3A]/30"></div>
      </div>

      {/* Content */}
      <div className="relative max-w-7xl mx-auto  text-white items-center">
        
        {/* Left Content */}
        <div className="max-w-4xl">
          <h4 className="text-sm md:text-base tracking-widest text-white  mb-4">
            OPERATION & MAINTENANCE
          </h4>

          <h1 className="text-3xl md:text-5xl max-w-4xl  font-bold leading-tight mb-6">
            Maximise the Performance & Lifespan of Your Rooftop Solar
          </h1>

          <p className="text-gray-200 text-lg mb-8">
            TrueSun's expert O&M solutions are engineered for reliability and
            built to give you complete peace of mind — ensuring your solar
            investment delivers consistent, long-term returns.
          </p>

          <div className="flex flex-wrap gap-4">
            <button
                    onClick={() => setOpenLeadPopup(true)}
            className="bg-[#FC763A] text-white font-semibold px-6 py-3 rounded-xl  transition">
              Get O&M Support
            </button>

          </div>
        </div>


      </div>
      {openLeadPopup && (
        <LeadPopup onClose={() => setOpenLeadPopup(false)} />
      )}
    </section>
  );
}