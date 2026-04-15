
import { motion } from "framer-motion";
import type { Variants } from "framer-motion";
import {
    Sun,
    Building2,
    Wallet,
    LineChart,
    ShieldCheck,
    PlugZap,
    Leaf,
    Sparkles,
    Factory,
    Hospital,
    GraduationCap,
    Store,
} from "lucide-react";

/* =============================
   THEME – New color combination
   Ink (charcoal), Paper (porcelain), Accent (coral), Glow (mint)
============================= */
const THEME = {
    ink: "#0E1726", // charcoal-navy
    paper: "#FAFBFD", // near-white
    accent: "#FF6B35", // coral orange
    accent2: "#6EE7B7", // mint glow
    slate: "#334155", // text slate
};

const container: Variants = {
    hidden: { opacity: 0, y: 22 },
    show: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.6, when: "beforeChildren", staggerChildren: 0.08 },
    },
};

const item: Variants = {
    hidden: { opacity: 0, y: 16 },
    show: { opacity: 1, y: 0, transition: { duration: 0.45 } },
};

export default function CommercialSolarNovaSection() {
    return (
        <section
            className="relative min-h-screen w-full"
            style={{
                ['--ink' as any]: THEME.ink,
                ['--paper' as any]: THEME.paper,
                ['--accent' as any]: THEME.accent,
                ['--mint' as any]: THEME.accent2,
            }}
        >
            {/* ===== Top Hero – diagonal gradient with pattern ===== */}
            <div className="relative isolate overflow-hidden bg-(--paper)">
                {/* gradient banner */}
                <div className="absolute inset-x-0 top-0 -z-10 h-[520px] bg-[radial-gradient(120%_80%_at_90%_-10%,rgba(255,107,53,0.25),transparent_60%),radial-gradient(90%_70%_at_10%_0%,rgba(110,231,183,0.25),transparent_55%)]" />
                {/* subtle grid */}
                <div className="pointer-events-none absolute inset-0 -z-10 bg-[linear-gradient(to_right,rgba(14,23,38,0.04)_1px,transparent_1px),linear-gradient(to_bottom,rgba(14,23,38,0.04)_1px,transparent_1px)] bg-size-[24px_24px]" />

                <div className="mx-auto max-w-7xl px-6 pt-14 pb-10 md:pt-22 md:pb-14">
                    <motion.div variants={container} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.3 }} className="grid items-center gap-10 md:grid-cols-2">
                        {/* right visual */}
                        <motion.div variants={item} className="relative">
                            <div className="relative rounded-2xl border border-[rgba(14,23,38,0.12)] bg-white/80 p-2 shadow-2xl shadow-black/50 backdrop-blur">
                                <img
                                    src="https://images.unsplash.com/photo-1558449028-b53a39d100fc?q=80&w=1600&auto=format&fit=crop"
                                    alt="Rooftop solar on a modern building"
                                    className="h-[380px] w-full rounded-xl object-cover"
                                    loading="eager"
                                />
                                <div className="pointer-events-none absolute -left-8 -top-8 h-24 w-24 rounded-full bg-(--accent)/20 blur-2xl" />
                                <div className="pointer-events-none absolute -right-8 -bottom-8 h-24 w-24 rounded-full bg-(--mint)/30 blur-2xl" />
                            </div>
                        </motion.div>
                        <div>
                            <motion.span variants={item} className="inline-flex items-center gap-2 rounded-full border border-[rgba(14,23,38,0.12)] bg-white/70 px-3 py-1 text-xs font-medium text-(--ink)/70 shadow-sm backdrop-blur">
                                <Sparkles className="h-4 w-4 text-(--accent)" /> A new standard for commercial solar
                            </motion.span>
                            <motion.h1 variants={item} className="mt-4 text-3xl font-semibold leading-tight text-(--ink) md:text-5xl">
                                Clean power that strengthens your bottom line
                            </motion.h1>
                            <motion.p variants={item} className="mt-4 max-w-2xl text-(--ink)/70">
                                Replace volatile grid tariffs with predictable solar generation. Built for offices, hospitals, schools, malls, and factories that work hardest in daylight.
                            </motion.p>
                            <motion.div variants={item} className="mt-6 flex flex-wrap gap-3">
                                <a href="#cta" className="rounded-xl bg-(--accent) px-5 py-3 text-sm font-semibold text-white shadow-md transition hover:-translate-y-0.5 hover:shadow-lg">Get Free Assessment</a>
                                <a href="#why" className="rounded-xl border border-[rgba(14,23,38,0.12)] bg-white px-5 py-3 text-sm font-semibold text-(--ink) hover:bg-white/90">See how it works</a>
                            </motion.div>

                            {/* KPI strip */}
                            <motion.div variants={container} className="mt-8 grid gap-4 sm:grid-cols-3">
                                {[
                                    { k: "Payback", v: "3–4 yrs" },
                                    { k: "Warranty", v: "25 yrs" },
                                    { k: "Policy", v: "Net metering" },
                                ].map((m) => (
                                    <motion.div key={m.k} variants={item} className="rounded-xl border border-black/30 bg-white p-4 shadow-lg shadow-black/30">
                                        <p className="text-xs text-(--ink)/60">{m.k}</p>
                                        <p className="text-lg font-semibold text-(--ink)">{m.v}</p>
                                    </motion.div>
                                ))}
                            </motion.div>
                        </div>

                    </motion.div>
                </div>
            </div>

            {/* ===== Why Solar – icon grid on warm paper ===== */}
            <div id="why" className="bg-white py-14">
                <div className="mx-auto max-w-7xl px-6">
                    <motion.div variants={container} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.2 }}>
                        <motion.h2 variants={item} className="text-2xl font-semibold text-(--ink) md:text-3xl">Why businesses choose solar</motion.h2>
                        <motion.p variants={item} className="mt-2 max-w-3xl text-(--ink)/70">Finance-smart, brand-positive, and engineered for reliability.</motion.p>

                        <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                            {[
                                { icon: <Wallet className="h-6 w-6" />, t: "Lower daytime cost", d: "Generate power at point-of-use and reduce peak tariffs." },
                                { icon: <PlugZap className="h-6 w-6" />, t: "Net metering", d: "Export excess and offset your monthly bill." },
                                { icon: <ShieldCheck className="h-6 w-6" />, t: "Compliance-first", d: "MNRE-approved components and DISCOM-ready designs." },
                                { icon: <Leaf className="h-6 w-6" />, t: "ESG upside", d: "Demonstrate Scope 2 reductions and lead responsibly." },
                                { icon: <LineChart className="h-6 w-6" />, t: "Predictable ROI", d: "Lock in energy costs for 30+ years." },
                                { icon: <Building2 className="h-6 w-6" />, t: "Asset value", d: "Modern rooftops that add valuation headroom." },
                            ].map((f, i) => (
                                <motion.div key={i} variants={item} className="group rounded-2xl border border-black/30 bg-white p-6 shadow-xl transition hover:-translate-y-0.5 hover:shadow-2xl hover:shadow-black/50">
                                    <div className="flex items-start gap-3 text-(--ink)">
                                        <div className="rounded-xl bg-(--accent)/10 p-3 text-(--accent)">{f.icon}</div>
                                        <div>
                                            <h3 className="text-base font-semibold">{f.t}</h3>
                                            <p className="mt-1 text-sm text-(--ink)/70">{f.d}</p>
                                        </div>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>
                </div>
            </div>

            {/* ===== Sector ribbon ===== */}
            <div className="border-y border-black/50 bg-(--paper)">
                <div className="mx-auto max-w-7xl px-6 py-6">
                    <div className="flex flex-wrap items-center justify-center gap-6 text-(--ink)/70">
                        <span className="inline-flex items-center gap-2"><Factory className="h-4 w-4" /> Industrial Parks</span>
                        <span className="inline-flex items-center gap-2"><Hospital className="h-4 w-4" /> Hospitals</span>
                        <span className="inline-flex items-center gap-2"><GraduationCap className="h-4 w-4" /> Schools & Colleges</span>
                        <span className="inline-flex items-center gap-2"><Store className="h-4 w-4" /> Malls & Retail</span>
                        <span className="inline-flex items-center gap-2"><Building2 className="h-4 w-4" /> Corporate Offices</span>
                    </div>
                </div>
            </div>

            {/* ===== Results – cards with glow accent ===== */}
            <div className="bg-white py-14">
                <div className="mx-auto max-w-7xl px-6">
                    <motion.div variants={container} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.2 }}>
                        <motion.h2 variants={item} className="text-2xl font-semibold text-(--ink) md:text-3xl">Proven results on day one</motion.h2>
                        <motion.p variants={item} className="mt-2 max-w-3xl text-(--ink)/70">Illustrative outcomes; we model precisely for your site.</motion.p>

                        <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
                            {[{ k: "Annual generation (100 kW)", v: "~1.5 Lakh kWh" }, { k: "Annual savings @₹8/unit", v: "~₹12 Lakh" }, { k: "Payback window", v: "3–4 years" }, { k: "CO₂ avoided", v: "~120 t/yr" }].map((stat, i) => (
                                <motion.div key={i} variants={item} className="rounded-2xl border border-black/20 bg-white p-6 shadow-xl shadow-black/30">
                                    <p className="text-xs text-(--ink)/60">{stat.k}</p>
                                    <p className="mt-2 text-2xl font-bold text-(--ink)">{stat.v}</p>
                                    <div className="mt-4 h-1 w-full rounded bg-(--ink)/10">
                                        <div className="h-1 w-2/3 rounded bg-(--accent)"></div>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>
                </div>
            </div>

            {/* ===== Case studies + testimonial ===== */}
            <div className="bg-(--paper)">
                <div className="mx-auto max-w-7xl px-6 py-12">
                    <motion.div variants={container} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.2 }} className="grid gap-10 lg:grid-cols-2">
                        <div>
                            <motion.h3 variants={item} className="text-xl font-semibold text-(--ink) md:text-2xl">Solar success in action</motion.h3>
                            <div className="mt-6 space-y-4">
                                {[{ n: "Nova Tech Park", s: "500 kW", o: "₹60L annual offset" }, { n: "Apex Hospitals", s: "180 kW", o: "₹20L annual offset" }, { n: "City Centre Mall", s: "350 kW", o: "₹42L annual offset" }].map((cs, i) => (
                                    <motion.div key={i} variants={item} className="flex items-center justify-between rounded-xl border border-black/30 bg-white p-4 shadow-xl">
                                        <div>
                                            <p className="text-sm font-semibold text-(--ink)">{cs.n}</p>
                                            <p className="text-xs text-(--ink)/60">{cs.s} • {cs.o}</p>
                                        </div>
                                        <LineChart className="h-5 w-5 text-(--ink)/40" />
                                    </motion.div>
                                ))}
                            </div>
                        </div>

                        <motion.div variants={item} className="relative rounded-2xl border border-black/30 bg-white p-6 shadow-xl">
                            <div className="absolute -top-7 left-6 flex h-14 w-14 items-center justify-center rounded-full bg-(--accent) text-white shadow-lg"><Sun className="h-6 w-6" /></div>
                            <blockquote className="mt-6">
                                <p className="text-lg leading-relaxed text-(--ink)/80">“Our grid bills dropped immediately and the project went live ahead of schedule. Clean, quiet, and dependable.”</p>
                                <footer className="mt-4 text-sm text-(--ink)/60">— Facilities Head, Fortune‑500 Tenant</footer>
                            </blockquote>
                        </motion.div>
                    </motion.div>
                </div>
            </div>

        </section>
    );
}
