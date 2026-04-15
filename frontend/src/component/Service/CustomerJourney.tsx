import { motion, type Variants, useScroll, useSpring } from "framer-motion";
import { useRef } from "react";
import {
  FileText,
  MapPin,
  ClipboardCheck,
  Wrench,
  Settings,
  Smile,
} from "lucide-react";

const steps = [
  { text: "Customer Shares Bill & Location", icon: <FileText size={20} /> },
  { text: "TrueSun Site Visit & Proposal", icon: <MapPin size={20} /> },
  { text: "TrueSun Gets Approvals", icon: <ClipboardCheck size={20} /> },
  { text: "TrueSun Installs Plant", icon: <Wrench size={20} /> },
  { text: "TrueSun Maintains Plant", icon: <Settings size={20} /> },
  { text: "Happy Customer", icon: <Smile size={20} /> },
];

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.2 },
  },
};

const stepVariants: Variants = {
  hidden: { opacity: 0, scale: 0.8, y: 20 },
  visible: { 
    opacity: 1, 
    scale: 1, 
    y: 0, 
    transition: { type: "spring", stiffness: 100, damping: 12 } 
  },
};

const floatAnimation: any = {
  y: [0, -8, 0],
  transition: {
    duration: 3,
    repeat: Infinity,
    ease: "easeInOut" as const,
  },
};

export default function CustomerJourney() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  // Animated line progress
  const pathLength = useSpring(scrollYProgress, { stiffness: 100, damping: 30 });

  return (
    <section ref={containerRef} className="bg-[#fcfcfc] py-24 px-6 md:px-10 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        
        {/* HEADER */}
        <div className="text-center mb-20">
          <motion.h4 
            initial={{ opacity: 0, y: -10 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-xs text-[#FC763A] font-bold tracking-[0.2em] uppercase mb-3"
          >
            Process Workflow
          </motion.h4>
          <motion.h2 
             initial={{ opacity: 0, y: 10 }}
             whileInView={{ opacity: 1, y: 0 }}
             className="text-4xl md:text-5xl font-extrabold text-[#333] mb-6"
          >
            From Inquiry to <span className="text-[#FC763A]">Energy Independence</span>
          </motion.h2>
          <div className="w-20 h-1 bg-[#FC763A] mx-auto rounded-full mb-6" />
        </div>

        {/* TIMELINE CONTAINER */}
        <div className="relative">
          
          {/* SVG Animated Connector Line (Desktop Only) */}
          <svg className="hidden md:block absolute top-12 left-0 w-full h-1 pointer-events-none" preserveAspectRatio="none">
            <line x1="0" y1="0" x2="100%" y2="0" stroke="#e5e7eb" strokeWidth="2" strokeDasharray="8 8" />
            <motion.line 
              x1="0" y1="0" x2="100%" y2="0" 
              stroke="#FC763A" 
              strokeWidth="3" 
              style={{ pathLength }}
            />
          </svg>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="grid grid-cols-1 md:grid-cols-6 gap-6 relative z-10"
          >
            {steps.map((step, index) => (
              <motion.div
                key={index}
                variants={stepVariants}
                className="group flex flex-col items-center"
              >
                {/* ICON BOX */}
                <motion.div 
                  animate={floatAnimation}
                  className="relative mb-8"
                >
                  <motion.div 
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    className="w-16 h-16 flex items-center justify-center rounded-2xl bg-white border-2 border-gray-100 shadow-xl group-hover:border-[#FC763A] group-hover:shadow-[#FC763A]/20 transition-all duration-500"
                  >
                    <div className="text-[#FC763A] group-hover:scale-110 transition-transform duration-300">
                      {step.icon}
                    </div>

                    {/* Number badge */}
                    <div className="absolute -bottom-2 -right-2 w-6 h-6 bg-[#1D3F84] text-white text-[10px] font-bold flex items-center justify-center rounded-lg shadow-lg">
                      0{index + 1}
                    </div>
                  </motion.div>
                </motion.div>

                {/* TEXT CARD */}
                <motion.div 
                  whileHover={{ y: -5 }}
                  className="w-full bg-white p-5 rounded-2xl border border-gray-100 shadow-sm group-hover:shadow-xl group-hover:border-orange-50 transition-all duration-300 min-h-[100px] flex items-center justify-center relative overflow-hidden"
                >
                  {/* Subtle Background Accent */}
                  <div className="absolute top-0 left-0 w-1 h-full bg-transparent group-hover:bg-[#FC763A] transition-all duration-300" />
                  
                  <p className="text-sm font-bold text-gray-600 group-hover:text-gray-900 text-center leading-relaxed">
                    {step.text}
                  </p>
                </motion.div>

                {/* MOBILE CONNECTOR */}
                {index !== steps.length - 1 && (
                  <div className="md:hidden w-1 h-12 bg-linear-to-b from-[#FC763A] to-transparent my-4 opacity-30" />
                )}
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}