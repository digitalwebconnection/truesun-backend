import { motion, type Variants } from "framer-motion";
import {
    TreePine,
    Waves,
    Cpu,
    Zap,
    CheckCircle2,   
    ArrowUpRight,
    ShieldCheck,
} from "lucide-react";

export default function CarbonCreditTypesPremium() {
    const creditTypes = [
        {
            id: "01",
            title: "Nature-Based Credits",
            icon: <TreePine size={22} />,
            desc: "Derived from natural ecosystems, these credits are widely used and impactful:",
            items: [
                "Afforestation & Reforestation (ARR): Tree plantation and forest restoration ",
                "Soil Carbon Projects: Improving carbon storage in agricultural land ",
                "REDD+ (Avoided Deforestation): Protecting forests and reducing deforestation ",
            ],
        },
        {
            id: "02",
            title: "Blue Carbon",
            icon: <Waves size={22} />,
            desc: "Blue carbon credits come from coastal and marine ecosystems such as mangroves, seagrass, and salt marshes, which are highly effective at capturing and storing carbon.",
            items: [
                "Store significant amounts of carbon ",
                "Support biodiversity and coastal resilience ",
                "Deliver strong environmental and social co-benefits ",
            ],
            badge: "Blue carbon credits are often considered a premium category due to their impact and limited availability.",
        },
        {
            id: "03",
            title: "Technology-Based Carbon Credits",
            icon: <Cpu size={22} />,
            desc: "These are generated through engineered climate solutions, including:",
            items: [
                "Direct Air Capture",
                "Carbon Storage",
                "Methane reduction and industrial emission solutions  ",
            ],
            badge: "They are increasingly relevant for companies pursuing long-term net-zero strategies.",
        },
        {
            id: "04",
            title: "Renewable Energy Carbon Credits",
            icon: <Zap size={22} />,
            desc: "These credits are linked to renewable energy generation such as solar, wind, and hydro projects, helping reduce dependence on fossil fuels.",
            items: [
                "Reduction in Carbon Emissions",
                "Earn Revenue Through Carbon Credits",
                "Supports Sustainable & Green Certification Goals",
            ],
        },
    ];

    const container: Variants = {
        hidden: {},
        visible: {
            transition: { staggerChildren: 0.12 },
        },
    };

    const card: Variants = {
        hidden: { opacity: 0, y: 40 },
        visible: { opacity: 1, y: 0 },
    };

    return (
        <section className="relative py-8 overflow-hidden bg-white">

            <motion.div
                className="relative max-w-7xl mx-auto px-6"
                variants={container}
                initial="hidden"
                whileInView="visible"
            >
                {/* Header */}
                <div className="text-center max-w-3xl mx-auto mb-10">
                    <div className="inline-flex items-center gap-2 bg-white/10 px-4 py-1 rounded-full text-sm backdrop-blur">
                        <ShieldCheck size={16} className="text-[#FC763A]" />
                        Verified Carbon Portfolio
                    </div>

                    <h2 className="mt-4 text-4xl font-bold text-[#686868] leading-tight">
                        Types of <span className="text-[#FC763A]">Carbon Credits</span>
                    </h2>

                    <p className="mt-5 text-slate-900 text-lg">
                        A curated mix of global carbon credit categories tailored to your ESG and net-zero strategy.
                    </p>
                </div>

                {/* Cards */}
                <div className="grid md:grid-cols-2 gap-8">
                    {creditTypes.map((item, id) => (
                        <motion.div
                            key={id}
                            variants={card}
                            whileHover={{ y: -10 }}
                            className="group relative rounded-3xl p-px  border border-black/20 bg-white hover:from-[#FC763A]transition-all shadow-xl "
                        >
                            {/* Glass Card */}
                            <div className="rounded-3xl p-6 bg-white/5 backdrop-blur-xl border border-white/10 h-full flex flex-col">

                                {/* Top */}
                                <div className="  mb-6">
                                    <div className="flex items-center justify-between gap-4">
                                        <div className="p-3 flex items-center gap-5 bg-white/10 rounded-xl text-[#FC763A]">
                                            {item.icon}
                                            <h3 className="text-xl font-semibold">{item.title}</h3>
                                        </div>

                                        <span className="text-[#FC763A] font-mono  text-xl opacity-10  group-hover:opacity-100 font-bold">Credit:{item.id}</span>
                                    </div>

                                </div>

                                {/* Description */}
                                <p className="text-slate-900 text-md mb-4">{item.desc}</p>

                                {/* List */}
                                <div className="space-y-4 grow">
                                    {item.items.map((text, idx) => (
                                        <div key={idx} className="flex gap-3 items-start">
                                            <CheckCircle2 className="text-[#FC763A] mt-1" size={18} />
                                            <span className="text-slate-900 text-sm">{text}</span>
                                        </div>
                                    ))}
                                </div>

                                {/* Bottom */}
                                <div className=" flex justify-between gap-5 mt-5">
                                    {item.badge && (
                                        <span className="text-xs bg-[#FC763A] px-5 py-1 rounded-full font-semibold">
                                            {item.badge}
                                        </span>
                                    )}
                                    <div className="w-10 h-10 rounded-full p-1 bg-white/10 flex items-center justify-center group-hover:bg-[#FC763A] transition">
                                        <ArrowUpRight size={18} />
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </motion.div>
        </section>
    );
}