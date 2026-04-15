import { useState, useEffect, useRef } from 'react';
import { Search, Compass, ShieldCheck, Target, ArrowRight, Globe } from 'lucide-react';
import LeadPopup from '../../../LeadPopup';

const CarbonServicesAutoFlow = () => {
    const [activeTab, setActiveTab] = useState(0);
    const [isPaused, setIsPaused] = useState(false);
    const autoPlayRef = useRef<ReturnType<typeof setInterval> | null>(null);

    const services = [
        {
            title: "Sourcing",
            icon: <Search size={28} />,
            desc: "Vetted access to all types of carbon credits including Blue Carbon, REDD+, ARR, and technology-based solutions.",
            label: "Global Procurement"
        },
        {
            title: "Advisory",
            icon: <Compass size={28} />,
            desc: "Data-driven guidance on selecting the optimal credit mix based on cost, impact, and brand alignment.",
            label: "Market Intelligence"
        },
        {
            title: "Support",
            icon: <ShieldCheck size={28} />,
            desc: "Full assistance with carbon credit retirement, public registry documentation, and compliance verification.",
            label: "Regulatory Success"
        },
        {
            title: "Strategy",
            icon: <Target size={28} />,
            desc: "Comprehensive roadmap planning for carbon neutrality and long-term net-zero sustainability goals.",
            label: "Future Proofing"
        }
    ];

    // Auto-play logic
    useEffect(() => {
        if (!isPaused) {
            const interval = setInterval(() => {
                setActiveTab((prev) => (prev + 1) % services.length);
            }, 3000); // Change every 3 seconds
            autoPlayRef.current = interval;
        }
        return () => { if (autoPlayRef.current) clearInterval(autoPlayRef.current); };
    }, [isPaused, services.length]);

    const [openLeadPopup, setOpenLeadPopup] = useState(false);

    return (
        <section className="bg-white py-14 px-6 overflow-hidden font-sans">
            <div className="max-w-7xl mx-auto">

                {/* Header Section */}
                <div className="mb-10 max-w-4xl mx-auto text-center">

                    <h2 className="text-3xl md:text-5xl font-black text-[#686868] tracking-tighter leading-none">
                        Our Carbon <br />
                        <span className="text-transparent bg-clip-text bg-[#FC763A] ">
                            Credit Services
                        </span>
                    </h2>
                </div>

                <div
                    className="grid lg:grid-cols-12 gap-16 items-center"
                    onMouseEnter={() => setIsPaused(true)}
                    onMouseLeave={() => setIsPaused(false)}
                >

                    {/* Left Side: The "Navigator" */}
                    <div className="lg:col-span-4 space-y-4">
                        {services.map((service, index) => (
                            <div
                                key={index}
                                onClick={() => setActiveTab(index)}
                                className={`cursor-pointer transition-all duration-500 flex items-center gap-6 group p-4 rounded-3xl ${activeTab === index ? 'translate-x-4' : 'opacity-40 grayscale'
                                    }`}
                            >
                                {/* Progress Icon Circle */}
                                <div className="relative shrink-0">
                                    {/* SVG Progress Ring */}
                                    {activeTab === index && (
                                        <svg className="absolute inset-0 w-full h-full -rotate-90">
                                            <circle
                                                cx="50%"
                                                cy="50%"
                                                r="48%"
                                                fill="none"
                                                stroke="#FC763A"
                                                strokeWidth="2"
                                                strokeDasharray="100"
                                                className={`${!isPaused ? 'animate-[progress_5s_linear_infinite]' : ''}`}
                                                style={{ strokeDashoffset: 100 }}
                                            />
                                        </svg>
                                    )}
                                    <div className={`w-16 h-16 rounded-full flex items-center justify-center transition-all ${activeTab === index ? 'bg-[#FC763A] text-white shadow-xl shadow-[#FC763A]/30' : 'bg-slate-100 text-slate-400'
                                        }`}>
                                        {service.icon}
                                    </div>
                                </div>

                                <div>
                                    <h3 className={`text-xl font-black tracking-tight ${activeTab === index ? 'text-slate-900' : 'text-slate-400'}`}>
                                        {service.title}
                                    </h3>
                                    <p className="text-xs font-bold text-[#FC763A] uppercase tracking-widest">
                                        {service.label}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Right Side: The "Stage" (Box-less transition) */}
                    <div className="lg:col-span-8 relative min-h-[400px] flex items-center">


                        {services.map((service, index) => (
                            <div
                                key={index}
                                className={`transition-all duration-700 absolute inset-0 flex flex-col justify-center p-10 md:p-16 ${activeTab === index
                                        ? 'opacity-100 translate-x-0 pointer-events-auto'
                                        : 'opacity-0 -translate-x-12 pointer-events-none'
                                    }`}
                            >
                                <div className="flex items-center gap-4 mb-8">
                                    <div className="h-1 w-12 bg-[#FC763A]" />
                                    <span className="font-bold text-slate-400 uppercase tracking-widest text-sm">
                                        Step 0{index + 1}
                                    </span>
                                </div>

                                <h3 className="text-xl md:text-4xl font-black text-slate-900 mb-6 leading-tight">
                                    Driving <span className="underline decoration-[#FC763A] decoration-4 underline-offset-8 ">{service.title}</span> Excellence
                                </h3>

                                <p className="text-lg md:text-xl text-slate-600 leading-relaxed font-medium max-w-xl mb-10">
                                    {service.desc}
                                </p>

                                <div className="flex items-center gap-6">
                                    <button
                                        onClick={() => setOpenLeadPopup(true)} className="px-8 py-4 bg-slate-900 text-white font-bold rounded-2xl flex items-center gap-3 hover:bg-[#FC763A] transition-all group">
                                        Learn More <ArrowRight className="group-hover:translate-x-1 transition-transform" />
                                    </button>
                                    <Globe className="text-slate-200 w-12 h-12" />
                                </div>
                            </div>
                            
                        ))}
                    </div>
                    {openLeadPopup && (
        <LeadPopup onClose={() => setOpenLeadPopup(false)} />
      )}

                </div>
            </div>

            <style >{`
        @keyframes progress {
          from { stroke-dashoffset: 100; }
          to { stroke-dashoffset: 0; }
        }
      `}</style>
        </section>
    );
};

export default CarbonServicesAutoFlow;