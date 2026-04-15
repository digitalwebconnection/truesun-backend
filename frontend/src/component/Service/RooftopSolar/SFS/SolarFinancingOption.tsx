import { easeOut, motion } from 'framer-motion';
import {
    Wallet,
    Zap,
    Clock,
    FileCheck,
    ShieldCheck,
    TrendingDown,
    Wrench,
    ArrowRight
} from 'lucide-react';

const SolarFinancingOption = () => {
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: { staggerChildren: 0.2 },
        },
    };

    const cardVariants = {
        hidden: { opacity: 0, y: 30 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: easeOut } },
    };

    return (
        <section className="py-24 bg-white overflow-hidden">
            <div className="max-w-7xl mx-auto px-6">

                {/* --- SECTION HEADER --- */}
                <div className="max-w-3xl mx-auto text-center mb-16">
                    <motion.h2
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        className="text-[#FC763A] font-bold tracking-[0.2em] uppercase text-sm mb-4"
                    >
                        Flexible Financing
                    </motion.h2>
                    <motion.h3
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.1 }}
                        className="text-4xl md:text-5xl font-extrabold text-slate-900 leading-tight"
                    >
                        Switch to Solar. <br />
                        <span className="text-transparent bg-clip-text bg-[#FC763A]">
                            Pick Your Payment Path.
                        </span>
                    </motion.h3>
                </div>

                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    className="grid lg:grid-cols-2 gap-8 items-stretch"
                >

                    {/* --- OPTION 1: LOANS / EMI --- */}
                    <motion.div
                        variants={cardVariants}
                        className="relative group bg-slate-50 rounded-[2.5rem] p-8 md:p-12 border border-slate-100 hover:border-[#FC763A] transition-all duration-500"
                    >
                        <div className="absolute top-8 right-8 text-slate-200 group-hover:text-[#FC763A] transition-colors">
                            <Wallet size={80} strokeWidth={1} />
                        </div>

                        <div className="relative z-10">
                            <span className="inline-block px-4 py-1 rounded-full bg-[#FC763A] text-white  text-xs font-bold uppercase tracking-wider mb-6">
                                Ownership Model
                            </span>
                            <h4 className="text-3xl font-bold text-slate-900 mb-4">Loans / EMI</h4>
                            <p className="text-slate-600 mb-10 text-lg leading-relaxed">
                                Partner with leading financial institutions to own your solar asset from day one.
                            </p>

                            <div className="space-y-8">
                                <div className="flex items-center gap-5">
                                    <div className="shrink-0 w-12 h-12 flex items-center justify-center rounded-2xl bg-white shadow-sm text-[#FC763A] group-hover:bg-[#FC763A] group-hover:text-white transition-all">
                                        <TrendingDown size={24} />
                                    </div>
                                    <div>
                                        <p className="font-bold text-slate-800">Attractive Interest Rates</p>
                                        <p className="text-sm text-slate-500 font-medium italic">Industry-best financing cost</p>
                                    </div>
                                </div>

                                <div className="flex items-center gap-5">
                                    <div className="shrink-0 w-12 h-12 flex items-center justify-center rounded-2xl bg-white shadow-sm text-[#FC763A] group-hover:bg-[#FC763A] group-hover:text-white transition-all">
                                        <Clock size={24} />
                                    </div>
                                    <div>
                                        <p className="font-bold text-slate-800">Flexible Tenure</p>
                                        <p className="text-sm text-slate-500 font-medium italic">Repayment options up to 5–7 years</p>
                                    </div>
                                </div>

                                <div className="flex items-center gap-5">
                                    <div className="shrink-0 w-12 h-12 flex items-center justify-center rounded-2xl bg-white shadow-sm text-[#FC763A] group-hover:bg-[#FC763A] group-hover:text-white transition-all">
                                        <FileCheck size={24} />
                                    </div>
                                    <div>
                                        <p className="font-bold text-slate-800">Quick Approvals</p>
                                        <p className="text-sm text-slate-500 font-medium italic">Minimal documentation required</p>
                                    </div>
                                </div>
                            </div>

                            <button className="mt-12 w-full py-4 bg-white border border-slate-200 text-slate-900 font-bold rounded-2xl group-hover:bg-[#FC763A] group-hover:text-white group-hover:border-[#FC763A] transition-all flex items-center justify-center gap-2">
                                Apply for Loan <ArrowRight size={18} />
                            </button>
                        </div>
                    </motion.div>

                    {/* --- OPTION 2: OPEX / RESCO --- */}
                    <motion.div
                        variants={cardVariants}
                        className="relative group bg-slate-900 rounded-[2.5rem] p-8 md:p-12 shadow-2xl overflow-hidden"
                    >
                        {/* Animated Glow Effect */}
                        <div className="absolute -bottom-24 -right-24 w-64 h-64 bg-emerald-500/20 blur-[100px] rounded-full group-hover:bg-emerald-500/40 transition-all duration-700" />

                        <div className="relative z-10">
                            <span className="inline-block px-4 py-1 rounded-full bg-[#FC763A] text-white border border-emerald-500/20 text-xs font-bold uppercase tracking-wider mb-6">
                                Service Model
                            </span>
                            <h4 className="text-3xl font-bold text-white mb-4">OPEX / RESCO</h4>
                            <p className="text-slate-400 mb-10 text-lg leading-relaxed">
                                Install solar with <span className="text-[#FC763A] font-bold">zero upfront investment</span>. Pay only for the power you use.
                            </p>

                            <div className="space-y-8">
                                <div className="flex items-center gap-5">
                                    <div className="shrink-0 w-12 h-12 flex items-center justify-center rounded-2xl bg-slate-800 text-[#FC763A] group-hover:bg-[#FC763A] group-hover:text-white transition-all">
                                        <Zap size={24} />
                                    </div>
                                    <div>
                                        <p className="font-bold text-white">Lower Tariff</p>
                                        <p className="text-sm text-slate-400 font-medium italic">Cheaper than grid electricity</p>
                                    </div>
                                </div>

                                <div className="flex items-center gap-5">
                                    <div className="shrink-0 w-12 h-12 flex items-center justify-center rounded-2xl bg-slate-800 text-[#FC763A] group-hover:bg-[#FC763A] group-hover:text-white transition-all">
                                        <Wrench size={24} />
                                    </div>
                                    <div>
                                        <p className="font-bold text-white">Zero Maintenance</p>
                                        <p className="text-sm text-slate-400 font-medium italic">Repairs & cleaning handled by us</p>
                                    </div>
                                </div>

                                <div className="flex items-center gap-5">
                                    <div className="shrink-0 w-12 h-12 flex items-center justify-center rounded-2xl bg-slate-800 text-[#FC763A] group-hover:bg-[#FC763A] group-hover:text-white transition-all">
                                        <ShieldCheck size={24} />
                                    </div>
                                    <div>
                                        <p className="font-bold text-white">Security Deposit</p>
                                        <p className="text-sm text-slate-400 font-medium italic">Small guarantee amount charged</p>
                                    </div>
                                </div>
                            </div>

                            <button className="mt-12 w-full py-4 bg-[#FC763A] text-white font-bold rounded-2xl hover:bg-white hover:text-[#FC763A] transition-all flex items-center justify-center gap-2">
                                Inquire for OPEX <Zap size={18} fill="currentColor" />
                            </button>
                        </div>
                    </motion.div>

                </motion.div>

                <motion.p
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    className="mt-10 text-center text-slate-400 text-sm italic"
                >
                    *Terms and conditions apply. Financing is subject to credit approval and technical feasibility.
                </motion.p>

            </div>
        </section>
    );
};

export default SolarFinancingOption;