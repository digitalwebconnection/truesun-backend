 

import { motion } from "framer-motion";
import type { Variants } from "framer-motion";
import { Cog, PhoneCall, FileDown, ShieldCheck, LineChart } from "lucide-react";

/** Brand tokens (tweak as needed) */
const BRAND = {
    primary: "#262755", // deep blue
    accent: "#ff7a1a", // orange
    lightGreen: "#d4f7dc", // new token for the gradient
};

const container: Variants = {
    hidden: { opacity: 0, y: 16 },
    show: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.5, when: "beforeChildren", staggerChildren: 0.08 },
    },
};

const item: Variants = {
    hidden: { opacity: 0, y: 14 },
    show: { opacity: 1, y: 0, transition: { duration: 0.45 } },
};

export default function ConsultingHero() {
    return (
        // Updated: Kept the section clean, the background is handled by the inner div
        <section className="relative overflow-hidden">

            {/* NEW: Clean Energy Gradient + Pattern 
        Replaces the old radial gradient and complex SVG blob.
      */}
            <div
                className="absolute inset-0 -z-10"
                style={{
                    // Lighter, fresher gradient combining soft green, yellow, and light blue
                    background:
                        "linear-gradient(135deg, #f0fff4 0%, #EBCE16 55%, #296805 40%, #e0f2fe 110%)",
                }}
            />
            {/* Subtle Dotted Pattern for Texture */}
            <svg
                aria-hidden
                className="absolute inset-0 -z-10 h-full w-full opacity-30"
            >
                <defs>
                    <pattern id="dot-pattern" width="20" height="20" patternUnits="userSpaceOnUse">
                        {/* Very light gray dots */}
                        <circle cx="2" cy="2" r="1" fill="#e5e7eb" />
                    </pattern>
                </defs>
                <rect width="100%" height="100%" fill="url(#dot-pattern)" />
            </svg>
            {/* END NEW BACKGROUND */}


            <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8 py-14 md:py-24">
                <motion.div
                    variants={container}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true, amount: 0.2 }}
                    className="grid items-center gap-10 md:grid-cols-12"
                >
                    {/* Copy */}
                    <motion.div variants={item} className="md:col-span-6">
                        <span
                            className="inline-flex items-center gap-2 rounded-full px-3 py-1 text-xs font-semibold ring-1"
                            style={{ color: BRAND.primary, background: "#fff", borderColor: BRAND.lightGreen }}
                        >
                            <Cog className="h-4 w-4" /> Consulting
                        </span>

                        <h1 className="mt-4 text-4xl font-extrabold leading-tight text-slate-900 sm:text-5xl">
                            Solar Consulting that <span style={{ color: BRAND.primary }}>derisks</span> decisions.
                        </h1>

                        <p className="mt-4 max-w-2xl text-lg text-slate-600">
                            Technical diligence, bid advisory, and construction monitoring to optimize design, price, and quality—end to end.
                        </p>

                        <div className="mt-8 flex flex-wrap items-center gap-3">
                            {/* Updated CTA Button styling for a brighter pop */}
                            <a
                                href="#contact"
                                className="inline-flex items-center gap-2 rounded-xl px-6 py-3 text-base font-semibold text-white shadow-xl transition-transform hover:scale-[1.02] hover:shadow-2xl"
                                // Change text to white for better contrast on orange accent
                                style={{ background: BRAND.accent }}
                            >
                                <PhoneCall className="h-5 w-5" /> Talk to an Expert
                            </a>
                            <a
                                href="#deck"
                                className="inline-flex items-center gap-2 rounded-xl border border-slate-300 bg-white px-6 py-3 text-base font-semibold text-slate-900 hover:border-slate-400"
                            >
                                <FileDown className="h-5 w-5" /> Download Deck
                            </a>
                        </div>

                        <div className="mt-6 flex flex-wrap gap-4 text-sm font-medium">
                            <span className="text-slate-800 flex items-center gap-1">
                                <ShieldCheck className="h-4 w-4" /> Vendor-neutral guidance
                            </span>
                            <span className="text-slate-800 flex items-center gap-1">
                                <LineChart className="h-4 w-4" /> Faster payback, less risk
                            </span>
                        </div>
                    </motion.div>

                    {/* Visual */}
                    <motion.div variants={item} className="md:col-span-6">
                        {/* Updated: Added a subtle border color related to the theme (green) and a hover glow effect */}
                        <div
                            className="relative overflow-hidden rounded-[40px] shadow-2xl bg-white  transition-all duration-300 hover:shadow-green-500/50"

                        >
                            <img
                                src="https://waaree.com/wp-content/uploads/2025/07/Solar-panels-online-scaled.jpg"
                                alt="Engineers reviewing rooftop solar plans"
                                className="h-[360px] w-full object-cover"
                                loading="eager"
                            />
                            {/* caption chip */}
                            <div className="absolute bottom-4 left-4 rounded-xl bg-white/90 px-4 py-2 text-xs font-semibold text-slate-900 ring-1 ring-white/70 shadow">
                                Design • Diligence • Monitoring
                            </div>
                        </div>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
}