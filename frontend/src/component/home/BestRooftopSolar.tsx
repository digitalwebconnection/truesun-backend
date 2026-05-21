import { useState } from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";
import { motion } from "framer-motion";
import i9 from "../../assets/Rustomjee virar/5.png";
import CtaPopup from "../CtaPopup";

export default function BestRooftopSolar() {
  const [openCtaPopup, setOpenCtaPopup] = useState(false);

  return (
    <>
      <Helmet>
        <title>Best Rooftop Solar Company in Mumbai | TrueSun Energy</title>
        <meta
          name="description"
          content="TrueSun Energy is recognized as the best rooftop solar company in Mumbai, delivering high-performance, cost-effective solar solutions for residential and commercial spaces."
        />
        <meta
          name="keywords"
          content="best rooftop solar company in mumbai, solar panel installation mumbai, truesun energy, solar power mumbai"
        />
        <link rel="canonical" href="https://truesun.in/best-rooftop-solar-company-in-mumbai" />
      </Helmet>

      <section className="relative min-h-screen bg-slate-900 text-white pt-24 pb-12 flex flex-col items-center justify-center overflow-hidden">
        {/* Decorative background glow */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-[#FC763A]/10 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-10">
            <motion.span
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-[#FC763A] text-sm font-semibold tracking-wider uppercase bg-[#FC763A]/10 px-3 py-1 rounded-full"
            >
              Mumbai's Trusted Solar Experts
            </motion.span>
            
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="mt-4 text-3xl sm:text-5xl font-extrabold text-white tracking-tight"
            >
              Best Rooftop Solar Company in <span className="text-[#FC763A]">Mumbai</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="mt-4 text-base sm:text-lg text-slate-300"
            >
              TrueSun Energy designs and installs world-class rooftop solar systems that drastically cut your electricity bills, backed by 30+ years of performance life.
            </motion.p>
          </div>

          {/* Interactive Image Showcase */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="relative rounded-3xl overflow-hidden shadow-2xl border border-slate-700/50 bg-slate-800/40 p-4 max-w-3xl mx-auto mb-12"
          >
            <div className="relative rounded-2xl overflow-hidden aspect-[4/3] sm:aspect-[16/10]">
              <img
                src={i9}
                alt="best rooftop solar company in mumbai"
                title="best rooftop solar company in mumbai"
                className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent pointer-events-none" />
              <div className="absolute bottom-6 left-6 right-6">
                <span className="text-xs font-semibold text-[#FC763A] uppercase tracking-widest">Featured Project</span>
                <h3 className="text-xl font-bold mt-1">Rustomjee Virar</h3>
                <p className="text-sm text-slate-300 mt-1">Premium rooftop solar installation designed for maximum energy efficiency and cost savings.</p>
              </div>
            </div>
          </motion.div>

          {/* Project Details / Value Propositions */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto mb-12">
            {[
              {
                title: "Up to 90% Savings",
                desc: "Substantially reduce your monthly grid dependency and electricity bills from day one.",
              },
              {
                title: "Expert Installation",
                desc: "Engineered with tier-1 components and top-tier safety standards for maximum longevity.",
              },
              {
                title: "Hassle-Free Maintenance",
                desc: "Comprehensive warranty support and proactive monitoring to ensure optimal yield.",
              },
            ].map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 + idx * 0.1 }}
                className="bg-slate-800/40 border border-slate-700/50 p-6 rounded-2xl text-center backdrop-blur-sm"
              >
                <h4 className="text-lg font-bold text-white mb-2">{item.title}</h4>
                <p className="text-sm text-slate-300">{item.desc}</p>
              </motion.div>
            ))}
          </div>

          {/* Call to Actions */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.7 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <button
              onClick={() => setOpenCtaPopup(true)}
              className="w-full sm:w-auto px-8 py-4 bg-[#FC763A] text-white rounded-full font-bold hover:bg-[#e05f2b] transition-all transform hover:-translate-y-0.5 shadow-lg shadow-[#FC763A]/20"
            >
              Get Free Estimate
            </button>
            <Link
              to="/"
              className="w-full sm:w-auto px-8 py-4 bg-slate-800 hover:bg-slate-700 text-white rounded-full font-bold border border-slate-600 transition-all text-center"
            >
              Back to Home
            </Link>
          </motion.div>
        </div>

        {openCtaPopup && (
          <CtaPopup onClose={() => setOpenCtaPopup(false)} title="Get Your Free Estimate" />
        )}
      </section>
    </>
  );
}
