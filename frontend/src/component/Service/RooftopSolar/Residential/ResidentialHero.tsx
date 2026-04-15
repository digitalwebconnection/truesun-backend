 

import { motion, type Variants } from "framer-motion";
import { Sun, Leaf, Zap, ArrowRight, Home, Building2 } from "lucide-react";

import LeadPopup from "../../../LeadPopup";
import { useState } from "react";
// --------------------- FIXED VARIANT ---------------------
const textVariant: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: (i = 1) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.2,
      duration: 0.7,
      ease: [0.25, 0.1, 0.25, 1],
    },
  }),
};

export default function ResidentialHero() {
    const [openLeadPopup, setOpenLeadPopup] = useState(false);
  return (
    <section
      className="relative overflow-hidden h-150 bg-center bg-cover bg-no-repeat"
      style={{
        backgroundImage:
          "url('https://images.mid-day.com/images/images/2023/may/May1-tamilna_d.jpg')",
      }}
    >
      {/* Dark overlay for readability */}
      <div className="absolute inset-0 bg-linear-to-l from-black/30 via-black/50 to-black/80"></div>

      <div className="relative container max-w-7xl mx-auto px-6 md:px-0 py-18 lg:py-26 flex flex-col lg:flex-row items-center gap-10">
        
        {/* LEFT CONTENT */}
        <motion.div
          className="text-center lg:text-left  max-w-4xl text-white"
          initial="hidden"
          animate="visible"
        >
          <motion.h1
            custom={1}
            variants={textVariant}
            className="text-3xl md:text-5xl font-bold mb-4 leading-tight"
          >
            Power Your <span className="text-[#FC763A]">Home</span> with  
           Clean & Affordable <span className="text-[#FC763A]">Solar Energy</span>
          </motion.h1>

          <motion.p
            custom={2}
            variants={textVariant}
            className="text-gray-200 text-md max-w-xl mx-auto lg:mx-0 mb-6"
          >
            Enjoy lower electricity bills and a greener planet with reliable 
            residential solar panel installation. Start saving with sustainable energy today.
          </motion.p>

          <motion.div
            custom={3}
            variants={textVariant}
            className="flex justify-center lg:justify-start gap-4"
          >
            <button   onClick={() => setOpenLeadPopup(true)} className="flex items-center gap-2 bg-[#FC763A] text-black px-6 py-3 rounded-full font-semibold hover:bg-amber-600 transition-all duration-300 shadow-lg">
              Get Free Quote <ArrowRight className="w-5 h-5" />
            </button>
        
          </motion.div>

          {/* FEATURE ICONS */}
          <motion.div
            custom={4}
            variants={textVariant}
            className="flex justify-center lg:justify-start gap-6 mt-8 text-gray-200"
          >
            <div className="flex items-center gap-2">
              <Sun className="text-amber-400" /> <span>Renewable</span>
            </div>
            <div className="flex items-center gap-2">
              <Leaf className="text-green-400" /> <span>Eco Friendly</span>
            </div>
            <div className="flex items-center gap-2">
              <Zap className="text-yellow-300" /> <span>High Efficiency</span>
            </div>
          </motion.div>

          {/* ---------------- SERVICE TAGS ADDED HERE ---------------- */}
          <motion.div
            custom={5}
            variants={textVariant}
            className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 text-white"
          >
            <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-3 rounded-xl border border-white/20">
              <Building2 className="text-blue-300" /> 
              <span>Housing Societies</span>
            </div>
            <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-3 rounded-xl border border-white/20">
              <Home className="text-green-300" /> 
              <span>Villas / Homes</span>
            </div>
            <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-3 rounded-xl border border-white/20">
              <Home className="text-amber-300" /> 
              <span>Bungalows</span>
            </div>
          </motion.div>
          {/* ---------------------------------------------------------- */}

        </motion.div>

       
      </div>

        {/* Popup Mount */}
      {openLeadPopup && (
        <LeadPopup onClose={() => setOpenLeadPopup(false)} />
      )}
    </section>
  );
}
