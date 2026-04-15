import { ArrowRight, Globe, Zap, ShieldCheck, Mail } from 'lucide-react';
import LeadPopup from '../../../LeadPopup';
import { useState } from 'react';

const CarbonJourneyCTA = () => {

  const [openLeadPopup, setOpenLeadPopup] = useState(false);
  return (
    <section className="bg-white py-4 px-6 overflow-hidden relative">
      {/* Dynamic Background Accents - No Boxes */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[600px] bg-[#FC763A]/5 rounded-full blur-[120px] -z-10" />
      <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-blue-50 rounded-full blur-[100px] -z-10 opacity-60" />

      <div className="max-w-5xl mx-auto text-center">

        {/* Animated Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-slate-50 border border-slate-100 text-[#FC763A] text-sm font-black uppercase tracking-widest mb-10 shadow-sm animate-bounce-subtle">
          <Zap size={16} fill="currentColor" />
          Ready to scale?
        </div>

        {/* Main Heading */}
        <h2 className="text-3xl md:text-5xl font-black text-[#686868] tracking-tighter leading-[0.9] mb-8">
          Start Your  <span className="text-transparent bg-clip-text bg-linear-to-r from-[#FC763A] to-[#ff9d72]"> Carbon Journey
          </span>
        </h2>

        {/* Core Message */}
        <p className="text-lg md:text-xl text-slate-500 font-medium leading-relaxed max-w-6xl mx-auto mb-12">
          Whether you are beginning your <span className="text-slate-900 font-bold">ESG journey</span> or working towards
          <span className="text-slate-900 font-bold     "> net-zero</span>, TrueSun Energy Solutions helps you measure, reduce, and offset emissions effectively.
        </p>

        {/* The "Mix" Highlight - Transparent Floating Elements */}
        <div className="flex flex-wrap justify-center gap-4 md:gap-8 mb-6">
          {[
            { label: "Renewable Energy", icon: <Zap size={18} /> },
            { label: "I-RECs", icon: <Globe size={18} /> },
            { label: "Blue Carbon", icon: <ShieldCheck size={18} /> },
            { label: "REDD+ Projects", icon: <Mail size={18} /> }
          ].map((item, idx) => (
            <div key={idx} className="flex items-center gap-2 text-slate-400 font-bold text-xs uppercase tracking-widest bg-white/50 backdrop-blur-sm px-10 py-3 rounded-2xl border border-slate-400 shadow-sm">
              <span className="text-[#FC763A]">{item.icon}</span>
              {item.label}
            </div>
          ))}
        </div>

        {/* Primary Action */}
        <div className="flex flex-col items-center gap-2">
          <button
            onClick={() => setOpenLeadPopup(true)}
            className="group relative px-18 py-2 bg-[#FC763A] text-white font-black rounded-4xl text-xl transition-all hover:bg-slate-900 hover:shadow-[0_20px_50px_rgba(252,118,58,0.3)] transform hover:-translate-y-2 active:scale-95 overflow-hidden">
            <span className="relative z-10 flex items-center gap-4">
              Connect With Us Today
              <ArrowRight className="group-hover:translate-x-2 transition-transform" strokeWidth={3} />
            </span>
            {/* Hover Shine Effect */}
            <div className="absolute inset-0 bg-linear-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
          </button>

          <p className="text-slate-400  text-sm   uppercase  tracking-tighter">
            Build a credible carbon strategy with TrueSun
          </p>
        </div>


      </div>
      {openLeadPopup && (
        <LeadPopup onClose={() => setOpenLeadPopup(false)} />
      )}
      <style>{`
        @keyframes bounce-subtle {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-5px); }
        }
        .animate-bounce-subtle {
          animation: bounce-subtle 3s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
};

export default CarbonJourneyCTA;