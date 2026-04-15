import { motion } from "framer-motion";
import {
    Leaf,
    CheckCircle2,
} from "lucide-react";
import { useState } from "react";
import LeadPopup from "../../../LeadPopup";

type Props = {
    accent?: "emerald" | "sky" | string;
};

function accentCls(accent: string) {
    if (accent === "emerald") return "from-emerald-600 to-emerald-500";
    if (accent === "sky") return "from-sky-600 to-sky-500";
    return `from-${accent}-600 to-${accent}-500`;
}

export default function NetZeroCommandCenterAddOn({

    accent = "emerald",
}: Props) {
    const accentGradient = accentCls(accent);
    const [openLeadPopup, setOpenLeadPopup] = useState(false);
    return (
        <section
            className="relative h-150 overflow-hidden py-24"
            style={{
                backgroundImage:
                    "url('https://e6qg27vt7gu.exactdn.com/wp-content/uploads/2023/08/carbonfootprint1.jpg?strip=all')",
                backgroundSize: "cover",
                backgroundPosition: "center",
            }}
        >
            {/* DARK OVERLAY */}
            <div className="absolute inset-0 bg-black/50" />

            {/* GRADIENT OVERLAY (depth effect) */}
            {/* <div className="absolute inset-0 bg-gradient-to-br from-black via-slate-900/80 to-black" /> */}

            {/* GLOW */}
            <motion.div
                animate={{ scale: [1, 1.1, 1] }}
                transition={{ duration: 8, repeat: Infinity }}
                className={`absolute -top-40 -left-40 w-[500px] h-[500px] rounded-full blur-3xl opacity-20 bg-linear-to-tr ${accentGradient}`}
            />

            <div className="relative mx-auto max-w-7xl px-6">
                <div className=" items-center">

                    {/* LEFT SIDE */}
                    <div>
                        <div className="inline-flex items-center gap-2 bg-white/10 px-4 py-1 rounded-full text-sm text-white backdrop-blur">
                            <Leaf className="h-4 w-4 text-[#FC763A]" />
                            GHG Protocol • ISO 14064 • Global Carbon Markets
                        </div>

                        <h2 className="mt-6 text-3xl sm:text-4xl max-w-4xl  font-bold text-white leading-tight">
                            Carbon Footprinting, I-RECs & Carbon Credit Sourcing
                        </h2>

                        <p className="mt-5 text-lg text-slate-300 max-w-4xl">
                            As businesses accelerate their transition towards sustainability and net-zero goals, managing carbon emissions has become a strategic priority. At TrueSun Energy Solutions, we provide end-to-end carbon management solutions—from measuring your carbon footprint to sourcing I-RECs and carbon credits across global markets.  </p>

                        {/* CTA */}
                        <div className="mt-8 flex gap-4 flex-wrap">

                            <button
                                onClick={() => setOpenLeadPopup(true)}
                                className="px-6 py-2 bg-[#FC763A] rounded-full text-white"

                            >
                                Talk to Expert
                            </button>
                        </div>

                        {/* FEATURES */}
                        <div className="mt-6     grid sm:grid-cols-2 max-w-3xl gap-3">
                            {[
                                "Real-time carbon footprint tracking",
                                "Scope 1, 2 & 3 emissions visibility",
                                "Global I-REC & carbon credit sourcing",
                                "Compliance-ready ESG reporting",
                            ].map((item) => (
                                <div className="flex items-center gap-2 bg-white text-black px-3 py-2 rounded-lg">
                                    <CheckCircle2 className="h-4 w-4 text-green-600" />
                                    <span className="text-sm">{item}</span>
                                </div>
                            ))}
                        </div>
                    </div>

                    {openLeadPopup && (
                        <LeadPopup onClose={() => setOpenLeadPopup(false)} />
                    )}
                </div>
            </div>
        </section>
    );
}