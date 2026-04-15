
import { motion, type Variants } from "framer-motion";
import {
    Building2,
    ShieldCheck,
    Cog,
    Landmark,
    FileText,
    Coins,
    ChevronRight,
    Check,
} from "lucide-react";


const container: Variants = {
    hidden: { opacity: 0, y: 16 },
    show: { opacity: 1, y: 0, transition: { when: "beforeChildren", staggerChildren: 0.08 } },
};

const item: Variants = {
    hidden: { opacity: 0, y: 12 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};



export default function IndustrialSolarPage() {

    // Content (from user brief + lightly enhanced)
    const bulletsWhy = [
        {
            icon: Coins,
            title: "Big savings on operations",
            desc:
                "Installing solar reduces substantial operational costs — primarily the energy bills from machinery and plant lighting.",
        },
        {
            icon: Landmark,
            title: "Tax benefits & subsidies",
            desc:
                "One of the strongest drivers for industrial solar: accelerated depreciation, Section 80-IA (where applicable), and state incentives.",
        },
        {
            icon: Building2,
            title: "Ideal industrial roofs",
            desc:
                "Metal sheds, RCC roofs, skylights, and dormers provide generous area and angles to harvest more clean energy.",
        },
        {
            icon: ShieldCheck,
            title: "Grid-synced reliability",
            desc:
                "All machinery can run seamlessly. The plant is grid-connected for additional power needs — batteries are optional, not mandatory.",
        },
    ];



    const industries = [
        "Food Processing",
        "Plastics & Packaging",
        "Textile & Garments",
        "Building Materials",
        "Chemical & Pharma",
        "Cement & Aggregates",
        "Engineering & Fabrication",
        "Warehousing & Logistics",
    ];



    return (
        <div className="bg-white text-slate-900">

            {/* WHY INDUSTRIES ADOPT SOLAR */}
            <section id="benefits" className="relative mx-auto max-w-7xl px-6 py-16 md:px-5 lg:px-0">
                <motion.div variants={container} initial="hidden" animate="show" className="grid items-start gap-10 md:grid-cols-2">
                    <div className="space-y-5">
                        <motion.h2 variants={item} className="text-2xl font-semibold text-slate-900 sm:text-3xl">Why industries are adopting solar?</motion.h2>
                        <motion.p variants={item} className="text-slate-600">
                            Installing solar for your factory or warehouse directly reduces operational costs tied to energy consumption and lighting. Metal sheds and RCC roofs make installation fast and scalable, while skylights and dormers can further optimise yield. Government‑enabled tax benefits and subsidies add momentum to the business case.
                        </motion.p>
                        <motion.ul variants={container} className="mt-4 space-y-4">
                            {bulletsWhy.map((b) => (
                                <motion.li key={b.title} variants={item} className="flex items-start gap-3">
                                    <div className="mt-1 flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-amber-100 text-amber-700 ring-1 ring-amber-200">
                                        <b.icon className="h-4.5 w-4.5" />
                                    </div>
                                    <div>
                                        <div className="font-medium text-slate-900">{b.title}</div>
                                        <div className="text-sm text-slate-600">{b.desc}</div>
                                    </div>
                                </motion.li>
                            ))}
                        </motion.ul>
                    </div>

                    <motion.div variants={item} className="rounded-2xl border border-slate-800/40  bg-white p-6 shadow-2xl shadow-black/30">
                        <div className="flex items-center gap-2 text-sm font-medium text-slate-700"><FileText className="h-4 w-4" /> Key Facts</div>
                        <ul className="mt-4 space-y-3 text-slate-700">
                            <li className="flex items-start gap-2"><Check className="mt-1 h-4 w-4 text-emerald-600" />RoI frequently exceeds <strong>30%</strong> with <strong>payback &lt; 4 years</strong>.</li>
                            <li className="flex items-start gap-2"><Check className="mt-1 h-4 w-4 text-emerald-600" />Factories often offset <strong>60–80%+</strong> of electricity demand through rooftop solar.</li>
                            <li className="flex items-start gap-2"><Check className="mt-1 h-4 w-4 text-emerald-600" />Grid‑connected: <strong>batteries not mandatory</strong>; add later if needed.</li>
                            <li className="flex items-start gap-2"><Check className="mt-1 h-4 w-4 text-emerald-600" />Supports heavy machinery, lighting, ventilation and process loads.</li>
                        </ul>
                        <div className="mt-6 rounded-xl bg-amber-50 p-4 text-amber-800 ring-1 ring-amber-100">
                            <div className="text-sm font-semibold">Tax Edge</div>
                            <p className="text-sm">Benefit from accelerated depreciation and applicable state/central incentives for faster payback.</p>
                        </div>
                    </motion.div>
                </motion.div>
            </section>

            {/* INDUSTRIES WE SERVE */}
            <section className="relative mx-auto max-w-7xl px-6 pb-8 md:px-6 lg:px-0">
                <motion.div variants={container} initial="hidden" animate="show" className="rounded-2xl bg-slate-50 p-6 ring-1 ring-slate-600/40">
                    <motion.h3 variants={item} className="text-lg font-semibold text-slate-900">Solar fits across manufacturing</motion.h3>
                    <motion.p variants={item} className="mt-1 text-sm text-slate-600">Solar can be used in all kinds of manufacturing industries.</motion.p>
                    <motion.ul variants={container} className="mt-4 grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-4">
                        {industries.map((it) => (
                            <motion.li key={it} variants={item} className="flex items-center gap-2 rounded-lg bg-white px-3 py-2 text-sm text-slate-700 ring-1 ring-slate-600/40">
                                <Check className="h-4 w-4 text-emerald-600" /> {it}
                            </motion.li>
                        ))}
                    </motion.ul>
                </motion.div>
            </section>

            {/* ROI TEASER */}
            <section className="relative mx-auto max-w-7xl px-6 py-12 md:px-6 lg:px-0">
                <motion.div variants={container} initial="hidden" animate="show" className="grid items-center gap-8 rounded-2xl bg-linear-to-tr from-amber-100 to-amber-50 p-6 ring-1 ring-amber-200 md:grid-cols-2">
                    <motion.div variants={item} className="space-y-3">
                        <div className="text-sm font-semibold text-amber-900">Faster Payback, Stronger Returns</div>
                        <h3 className="text-2xl font-semibold text-slate-900">Typical payback &lt; 4 years with RoI {">"}30%</h3>
                        <p className="text-slate-700">High peak load and large rooftop areas make solar a perfect energy solution for factories and warehouses. Reduce your carbon footprint while boosting profitability.</p>
                        <a href="#quote" className="inline-flex items-center gap-2 rounded-xl bg-amber-500 px-4 py-2 font-semibold text-black shadow hover:-translate-y-px">
                            Get my savings estimate <ChevronRight className="h-4 w-4" />
                        </a>
                    </motion.div>
                    <motion.div variants={item} className="grid grid-cols-2 gap-3">
                        {[{ t: "CapEx Support", d: "Flexible options incl. CAPEX/RESCO" }, { t: "O&M", d: "End‑to‑end operations & maintenance" }, { t: "Net‑Metering", d: "Optimised for industrial tariffs" }, { t: "Quality", d: "Tier‑1 modules, proven in India" }].map((c) => (
                            <div key={c.t} className="rounded-xl bg-white p-4 ring-1 ring-amber-200">
                                <div className="text-sm font-medium text-slate-900">{c.t}</div>
                                <div className="text-sm text-slate-600">{c.d}</div>
                            </div>
                        ))}
                    </motion.div>
                </motion.div>
            </section>

            {/* PROCESS */}
            <section className="relative mx-auto max-w-7xl px-6 py-12 md:px-6 lg:px-0">
                <motion.div variants={container} initial="hidden" animate="show" className="grid gap-6 md:grid-cols-3">
                    {[
                        { t: "Site Assessment", d: "Rooftop audit for Metal/RCC, load study, DISCOM checks.", i: Building2 },
                        { t: "Design & Approvals", d: "PV sizing, structure design, net‑metering & liaisoning.", i: FileText },
                        { t: "Install & Commission", d: "Piles/rails, modules, inverter, SCADA & handover.", i: Cog },
                    ].map((s) => (
                        <motion.div key={s.t} variants={item} className="rounded-2xl border border-slate-600/40 shadow-BLACK bg-white p-5 shadow-xl">
                            <div className="mb-2 inline-flex h-10 w-10 items-center justify-center rounded-lg bg-slate-900 text-white">
                                <s.i className="h-5 w-5" />
                            </div>
                            <div className="font-semibold text-slate-900">{s.t}</div>
                            <div className="text-sm text-slate-600">{s.d}</div>
                        </motion.div>
                    ))}
                </motion.div>
            </section>

        </div>
    );
}
