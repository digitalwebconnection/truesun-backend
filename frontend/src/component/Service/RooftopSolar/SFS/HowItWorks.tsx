import { motion } from "framer-motion";
import {
    ClipboardList,
    PenTool,
    BadgeCheck,
    Wrench,
    Zap
} from "lucide-react";

const HowItWorks = () => {
    const steps = [
        {
            title: "Free Consultation",
            desc: "We assess your energy needs and site potential.",
            icon: <ClipboardList size={28} />,
        },
        {
            title: "System Design",
            desc: "Custom-engineered solar blueprint for maximum yield.",
            icon: <PenTool size={28} />,
        },
        {
            title: "Finance Approval",
            desc: "Easy EMI plans and subsidy paperwork handled.",
            icon: <BadgeCheck size={28} />,
        },
        {
            title: "Installation",
            desc: "Fast, safe, and professional setup by certified teams.",
            icon: <Wrench size={28} />,
        },
        {
            title: "Savings Begin",
            desc: "Flip the switch and enjoy immediate bill reduction.",
            icon: <Zap size={28} />,
        },
    ];

    return (
        <section className="py-14 overflow-hidden">
            <div className="max-w-7xl mx-auto px-6">

                {/* --- HEADER --- */}
                <div className="text-center max-w-4xl mx-auto mb-24">
                    <motion.span
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        className="text-[#FC763A] font-bold tracking-[0.2em] uppercase text-sm mb-4 block"
                    >
                        The Process
                    </motion.span>
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        className="text-3xl md:text-5xl font-black text-slate-900 leading-tight"
                    >
                        Your Journey to <span className="text-[#FC763A]">Energy Freedom</span>
                    </motion.h2>
                </div>

                {/* --- STEPS CONTAINER --- */}
                <div className="relative">

                    {/* Animated Connecting Line (Desktop) */}
                    <div className="hidden md:block absolute top-12 left-[10%] right-[10%] h-0.5 bg-slate-200">
                        <motion.div
                            initial={{ scaleX: 0 }}
                            whileInView={{ scaleX: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 1.5, ease: "easeInOut" }}
                            className="h-full bg-linear-to-r from-[#FC763A] to-orange-300 origin-left"
                        />
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-5 gap-12 relative z-10">
                        {steps.map((step, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.2, duration: 0.5 }}
                                className="group flex flex-col items-center text-center"
                            >
                                {/* Step Icon/Number Circle */}
                                <motion.div
                                    whileHover={{ scale: 1.1, rotate: 5 }}
                                    className="relative"
                                >
                                    {/* Outer Ring Animation */}
                                    <div className="absolute -inset-2 bg-[#FC763A]/20 rounded-full blur-lg opacity-0 group-hover:opacity-100 transition-opacity" />

                                    <div className="w-24 h-24 rounded-4xl bg-white border-2 border-slate-100 flex items-center justify-center text-[#FC763A] shadow-xl shadow-slate-200/50 relative z-10 group-hover:border-[#FC763A] transition-colors duration-300">
                                        {step.icon}

                                        {/* Floating Step Number Badge */}
                                        <div className="absolute -top-2 -right-2 w-8 h-8 bg-slate-900 text-white text-xs font-bold rounded-full flex items-center justify-center border-4 border-slate-50">
                                            0{i + 1}
                                        </div>
                                    </div>
                                </motion.div>

                                {/* Content Card */}
                                <div className="mt-8">
                                    <h3 className="font-bold text-xl text-slate-900 group-hover:text-[#FC763A] transition-colors duration-300">
                                        {step.title}
                                    </h3>
                                    <div className="w-8 h-1 bg-slate-200 mx-auto my-3 group-hover:w-16 group-hover:bg-[#FC763A] transition-all duration-500" />
                                    <p className="text-slate-500 text-sm leading-relaxed max-w-[200px] mx-auto">
                                        {step.desc}
                                    </p>
                                </div>

                                {/* Arrow for Mobile (Hidden on Desktop) */}
                                {i !== steps.length - 1 && (
                                    <div className="md:hidden mt-8 text-slate-300">
                                        <motion.div animate={{ y: [0, 10, 0] }} transition={{ repeat: Infinity, duration: 2 }}>
                                            ↓
                                        </motion.div>
                                    </div>
                                )}
                            </motion.div>
                        ))}
                    </div>
                </div>

                {/* --- BOTTOM CTA --- */}
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ delay: 1 }}
                    className="mt-20 text-center"
                >
                    <button className="px-8 py-4 bg-[#FC763A] text-white font-bold rounded-2xl shadow-lg shadow-[#FC763A]/30 hover:scale-105 active:scale-95 transition-all">
                        Ready to Switch?
                    </button>
                </motion.div>

            </div>
        </section>
    );
};

export default HowItWorks;