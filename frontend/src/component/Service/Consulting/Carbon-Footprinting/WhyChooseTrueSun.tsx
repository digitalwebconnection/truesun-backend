import { Layers, Globe, Zap, Target, ArrowUpRight } from 'lucide-react';

const WhyChooseTrueSun = () => {
  const reasons = [
    {
      title: "Integrated Offering",
      icon: <Layers className="w-7 h-7" />,
      desc: "Carbon footprinting, I-RECs, and carbon credits—all seamlessly managed under one roof.",
      size: "md:col-span-2",
      gradient: "from-[#FC763A]/20 to-orange-50"
    },
    {
      title: "Market Access",
      icon: <Globe className="w-7 h-7" />,
      desc: "Direct access to high-integrity global carbon markets.",
      size: "md:col-span-1",
      gradient: "from-blue-50 to-indigo-50"
    },
    {
      title: "Practical Approach",
      icon: <Zap className="w-7 h-7" />,
      desc: "We focus on actionable, business-friendly solutions that drive results.",
      size: "md:col-span-1",
      gradient: "from-emerald-50 to-teal-50"
    },
    {
      title: "Customized Strategies",
      icon: <Target className="w-7 h-7" />,
      desc: "Sustainability roadmaps tailored specifically to your sector and corporate goals.",
      size: "md:col-span-2",
      gradient: "from-[#FC763A]/10 to-rose-50"
    }
  ];

  return (
    <section className="bg-white py-4 px-6 font-sans relative overflow-hidden">
      {/* Background Organic Blur */}
      {/* <div className="absolute top-1/4 -right-20 w-96 h-96 bg-[#FC763A]/5 rounded-full blur-[100px] -z-10" /> */}
      
      <div className="max-w-7xl mx-auto">
        
        {/* Header Section */}
        <div className="flex flex-col md:flex-row items-baseline justify-between mb-16 gap-6">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-5xl font-black text-[#686868] tracking-tighter leading-none mb-6">
              Why Choose  
              <span className="text-[#FC763A]"> TrueSun?</span>
            </h2>
            <p className="text-xl text-slate-500 font-medium leading-relaxed">
              Partnering with us means moving beyond compliance to actual climate leadership.
            </p>
          </div>
         
        </div>

        {/* Modern Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {reasons.map((reason, index) => (
            <div 
              key={index}
              className={`${reason.size} group relative p-10 rounded-[2.5rem] bg-white border border-slate-100 hover:border-[#FC763A]/80 transition-all duration-500 hover:shadow-2xl hover:shadow-[#FC763A]/10 overflow-hidden`}
            >
              {/* Subtle Gradient Background on Hover */}
              <div className={`absolute inset-0 bg-linear-to-br ${reason.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10`} />

              <div className="flex flex-col h-full">
                <div className="mb-8 flex justify-between items-start">
                  <div className="w-16 h-16 rounded-2xl bg-slate-50 flex items-center justify-center text-[#FC763A] group-hover:bg-white group-hover:shadow-xl transition-all duration-500">
                    {reason.icon}
                  </div>
                  <ArrowUpRight className="text-slate-200 group-hover:text-[#FC763A] transition-colors" size={28} />
                </div>

                <h3 className="text-2xl font-bold text-slate-900 mb-4 group-hover:translate-x-1 transition-transform">
                  {reason.title}
                </h3>
                <p className="text-slate-500 text-lg leading-relaxed font-medium group-hover:text-slate-700 transition-colors">
                  {reason.desc}
                </p>
              </div>

              {/* Decorative Corner Accent */}
              <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-[#FC763A]/5 group-hover:bg-[#FC763A]/40 rounded-full group-hover:scale-150 transition-transform duration-700" />
            </div>
          ))}
        </div>

        

      </div>
    </section>
  );
};

export default WhyChooseTrueSun;