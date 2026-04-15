 

import React, { useCallback,  useRef } from "react";
import { motion, useReducedMotion, useSpring, useTransform, useMotionValue } from "framer-motion";
import type { Variants } from "framer-motion";
import {
    Cog,
    ClipboardCheck,
    FileText,
    ShieldCheck,
    LineChart,
    Wrench,
    CheckCircle2,
    Building2,
    Factory,
    Home,
    Sparkles,
    Zap,
} from "lucide-react";

/* =============================
    THEME
============================= */
const TBRAND = {
    primary: "#262755", // deep blue
    accent: "#ff7a1a",  // warm orange
    surface: "#ffffff",
    muted: "#f6f7fb",
    darkMuted: "#e0e4eb",
};

const GRADIENT = `linear-gradient(120deg, ${TBRAND.primary}, ${TBRAND.accent})`;

/* =============================
    EASING
============================= */
const EASE_OUT: [number, number, number, number] = [0.16, 1, 0.3, 1];
const EASE_IN_OUT: [number, number, number, number] = [0.4, 0, 0.2, 1];

/* =============================
    ANIMATIONS
============================= */
const tContainer: Variants = {
    hidden: { opacity: 0, y: 16 },
    show: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.5, ease: EASE_OUT, when: "beforeChildren", staggerChildren: 0.08 },
    },
};

const tItem: Variants = {
    hidden: { opacity: 0, y: 14 },
    show: { opacity: 1, y: 0, transition: { duration: 0.45, ease: EASE_OUT } },
};

/* =============================
    PRIMITIVES
============================= */
const TSection = ({
    id,
    className = "",
    style,
    children,
}: {
    id?: string;
    className?: string;
    style?: React.CSSProperties;
    children: React.ReactNode;
}) => (
    <section id={id} className={`relative ${className}`} style={style}>
        {children}
    </section>
);

const TWrap = ({
    children,
    className = "",
}: {
    children: React.ReactNode;
    className?: string;
}) => (
    <div className={`mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8 ${className}`}>
        {children}
    </div>
);

const TBadge = ({ children }: { children: React.ReactNode }) => (
    <span
        className="inline-flex items-center gap-2 rounded-full px-3 py-1 text-xs font-semibold"
        style={{
            background: `${TBRAND.accent}22`,
            color: TBRAND.primary,
            border: `1px solid ${TBRAND.accent}55`,
            boxShadow: `0 2px 10px ${TBRAND.accent}22`,
            backdropFilter: "blur(4px)",
        }}
    >
        {children}
    </span>
);

const TCard = ({
    children,
    className = "",
    style = {},
}: {
    children: React.ReactNode;
    className?: string;
    style?: React.CSSProperties;
}) => (
    <div
        className={`rounded-2xl bg-white/95 ring-1 ring-slate-900/10 shadow-lg transition-all duration-300 hover:shadow-xl ${className}`}
        style={style}
    >
        {children}
    </div>
);

/* =============================
    TILT CARD (mouse parallax)
============================= */
function TiltCard({
    children,
    className = "",
    glowColor = TBRAND.accent,
}: {
    children: React.ReactNode;
    className?: string;
    glowColor?: string;
}) {
    const prefersReducedMotion = useReducedMotion();
    const ref = useRef<HTMLDivElement | null>(null);
    const mx = useMotionValue(0);
    const my = useMotionValue(0);

    const rx = useTransform(my, [-0.5, 0.5], [8, -8]);
    const ry = useTransform(mx, [-0.5, 0.5], [-8, 8]);

    const srx = useSpring(rx, { stiffness: 120, damping: 14, mass: 0.2 });
    const sry = useSpring(ry, { stiffness: 120, damping: 14, mass: 0.2 });

    const onMove = useCallback((e: React.MouseEvent) => {
        if (prefersReducedMotion) return;
        const rect = ref.current?.getBoundingClientRect();
        if (!rect) return;
        const px = (e.clientX - rect.left) / rect.width - 0.5;  // -0.5..0.5
        const py = (e.clientY - rect.top) / rect.height - 0.5;
        mx.set(px);
        my.set(py);
    }, [mx, my, prefersReducedMotion]);

    const onLeave = useCallback(() => {
        mx.set(0);
        my.set(0);
    }, [mx, my]);

    return (
        <motion.div
            ref={ref}
            onMouseMove={onMove}
            onMouseLeave={onLeave}
            style={{ transformStyle: "preserve-3d", rotateX: prefersReducedMotion ? 0 : srx, rotateY: prefersReducedMotion ? 0 : sry }}
            className={`relative ${className}`}
        >
            {/* soft glow ring */}
            <motion.span
                aria-hidden
                className="pointer-events-none absolute -inset-px rounded-[18px]"
                style={{
                    background: `radial-gradient(600px 200px at var(--mx,50%) var(--my,50%), ${glowColor}33, transparent 60%)`,
                    opacity: 0.7,
                }}
            />
            {children}
        </motion.div>
    );
}

/* =============================
    DATA
============================= */
const technicalBlocks = [
    {
        icon: <Cog className="h-6 w-6" style={{ color: TBRAND.primary }} />,
        title: "Design & Engineering",
        desc: "Optimise plant capacity, array layout, and string planning to ensure maximum energy yield.",
        points: [
            "Decide plant capacity suited to the site",
            "Array/layout designing & string planning",
            "Energy yield estimation for the project",
        ],
    },
    {
        icon: <Wrench className="h-6 w-6" style={{ color: TBRAND.primary }} />,
        title: "Technology Assessment",
        desc: "Evaluate technical constraints, inverter technology fit, and suggest optimal system design.",
        points: [
            "Identify technical constraints at proposal stage",
            "Evaluate inverter/technology fit for rooftop & environment",
            "Suggest right inverter sizing and system design",
        ],
    },
    {
        icon: <LineChart className="h-6 w-6" style={{ color: TBRAND.primary }} />,
        title: "Electricals & BOQ",
        desc: "Prepare detailed Bill of Quantities (BOQ), Single-Line Diagrams, and cable sizing studies.",
        points: [
            "Prepare detailed BOQ",
            "Single-Line Diagram per inverter for net-metering",
            "Cable sizing study from inverter to meter room",
        ],
    },
    {
        icon: <Zap className="h-6 w-6 text-amber-500" />,
        title: "Financial Analysis",
        desc: "Cost-benefit analysis to determine payback & ROI, benchmark proposals.",
        points: [
            "Cost-benefit analysis with payback & ROI vs vendors",
            "Benchmark proposals & negotiate optimal cost",
            "Cost-benefit analysis with payback & ROI vs vendors",
            "Benchmark proposals & negotiate optimal cost",
        ],
    },
    {
        icon: <ShieldCheck className="h-6 w-6 text-blue-600" />,
        title: "Project Support",
        desc: "Provide vendor-neutral guidance, highlight risks, and support contract evaluations.",
        points: [
            "Support client in informed decisions",
            "Highlight risks & mitigation techniques",
            "Evaluate vendor contracts incl. AMC/warranty",
            "Presentation support for management/SGBM",
        ],
    },
];

const bidAdvisory = [
    "Assist in awarding contracts – T&Cs, payment terms, handover & warranties",
    "Technical support in contract finalization",
    "Vendor interaction for price discovery & best-value services",
];

const monitoringItems = [
    {
        icon: <ClipboardCheck className="h-5 w-5" />,
        title: "Implementation Review",
        desc: "Monitor project parameters and progress during execution and post-completion.",
    },
    {
        icon: <ShieldCheck className="h-5 w-5" />,
        title: "Quality Control",
        desc: "Review workmanship, safety, and procedures at site against industry standards.",
    },
    {
        icon: <LineChart className="h-5 w-5" />,
        title: "Weekly Progress",
        desc: "Provide concise weekly reports, highlight gaps, and route actions to stakeholders.",
    },
    {
        icon: <FileText className="h-5 w-5" />,
        title: "Non-Conformity Track",
        desc: "Flag and track Non-Conformities (NCs) versus standards with clear recommendations.",
    },
    {
        icon: <CheckCircle2 className="h-5 w-5" />,
        title: "Project Closure",
        desc: "Prepare the final comprehensive documentation pack for all key stakeholders.",
    },
    {
        icon: <Wrench className="h-5 w-5" />,
        title: "Handover & O&M",
        desc: "Ensure a smooth transfer to the client or society's Operations & Maintenance team.",
    },
];

/* =============================
    PAGE
============================= */
export default function ConsultingPage() {
    const timelineItems = technicalBlocks.slice(0, 3);
    const assessmentCards = technicalBlocks.slice(3);
    const prefersReducedMotion = useReducedMotion();

    return (
        <main className="bg-white text-slate-800">
            {/* HERO */}
            <TSection id="hero" className="relative overflow-hidden">
                {/* Background image */}
                <div className="absolute inset-0 -z-20 bg-[url('https://etimg.etb2bimg.com/photo/111210277.cms" />
                {/* gradient washes for contrast */}
                <div className="absolute inset-0 -z-10" />
                <div className="absolute inset-0 -z-10 bg-white/40" />

                {/* Hero ambient blobs */}
                {!prefersReducedMotion && (
                    <>
                        <motion.div
                            className="absolute -top-24 -right-24 h-[360px] w-[360px] rounded-full blur-3xl"
                            style={{ background: `${TBRAND.accent}33` }}
                            animate={{ x: [0, -20, 0], y: [0, 20, 0] }}
                            transition={{ repeat: Infinity, duration: 14, ease: EASE_IN_OUT }}
                        />
                        <motion.div
                            className="absolute -bottom-28 -left-20 h-[420px] w-[420px] rounded-full blur-3xl"
                            style={{ background: `${TBRAND.primary}33` }}
                            animate={{ x: [0, 20, 0], y: [0, -20, 0] }}
                            transition={{ repeat: Infinity, duration: 16, ease: EASE_IN_OUT }}
                        />
                    </>
                )}

                <TWrap className="py-12 md:py-20">
                    <motion.div
                        variants={tContainer}
                        initial="hidden"
                        whileInView="show"
                        viewport={{ once: true, amount: 0.2 }}
                        className="max-w-3xl"
                    >
                        <TBadge>
                            <Cog className="h-4 w-4" /> Consulting Services
                        </TBadge>

                        {/* shimmering headline underline */}
                        <div className="relative inline-block">
                            <h1 className="mt-4 text-4xl sm:text-5xl font-extrabold leading-tight  drop-shadow">
                                Project Management Consulting for Solar
                            </h1>
                            {!prefersReducedMotion && (
                                <motion.span
                                    aria-hidden
                                    className="absolute left-0 -bottom-2 h-[3px] w-full rounded-full"
                                    style={{ backgroundImage: GRADIENT, backgroundSize: "200% 100%" }}
                                    animate={{ backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"] }}
                                    transition={{ repeat: Infinity, duration: 6, ease: "linear" }}
                                />
                            )}
                        </div>

                        <p className="mt-4 text-lg  drop-shadow">
                            We optimise design, price, and quality with technical diligence, bid advisory, construction monitoring, and CSR enablement.
                        </p>

                        {/* Floating icons orbit */}
                        {!prefersReducedMotion && (
                            <div className="mt-8 flex gap-3">
                                {[Sparkles, Zap, ShieldCheck].map((Icon, i) => (
                                    <motion.span
                                        key={i}
                                        className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-white/15 ring-1 ring-white/20 backdrop-blur"
                                        animate={{ y: [0, -6, 0] }}
                                        transition={{ repeat: Infinity, duration: 2.4 + i * 0.2, ease: EASE_IN_OUT }}
                                    >
                                        <Icon className="h-4 w-4" />
                                    </motion.span>
                                ))}
                            </div>
                        )}
                    </motion.div>
                </TWrap>

                {/* subtle divider wave */}
                <svg className="absolute bottom-0 left-0 right-0 -mb-px" height="60" viewBox="0 0 1440 60" preserveAspectRatio="none">
                    <path fill="#fff" d="M0,0 C240,60 480,60 720,20 C960,-20 1200,0 1440,40 L1440,60 L0,60 Z" />
                </svg>
            </TSection>

            {/* TECHNICAL & FINANCIAL ASSESSMENT (TIMELINE) */}
            <TSection id="assessment" className="py-10 md:py-14" style={{ backgroundColor: TBRAND.muted }}>
                <TWrap>
                    <motion.div variants={tContainer} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.25 }}>
                        <div className="mx-auto max-w-3xl text-center">
                            <h2 className="text-3xl font-bold text-slate-900 sm:text-4xl">Technical & Financial Assessment</h2>
                            <p className="mt-3 text-slate-600">End-to-end diligence that de-risks execution and accelerates ROI.</p>
                        </div>

                        {/* timeline */}
                        <div className="mt-10">
                            <div className="relative flex justify-between space-x-4">
                                {/* animated connector */}
                                <motion.div
                                    className="absolute left-0 right-0 top-1/2 h-[3px] -translate-y-1/2 rounded-full"
                                    style={{ backgroundImage: GRADIENT, backgroundSize: "200% 100%" }}
                                    animate={{ backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"] }}
                                    transition={{ repeat: Infinity, duration: 8, ease: "linear" }}
                                />
                                {timelineItems.map((b, i) => (
                                    <motion.div
                                        key={i}
                                        variants={tItem}
                                        className="relative w-1/3 p-4 text-center group"
                                        whileHover={{ y: -2 }}
                                        transition={{ duration: 0.25, ease: EASE_OUT }}
                                    >
                                        <div className="flex justify-center">
                                            <div
                                                className="h-14 w-14 flex items-center justify-center rounded-full border-4 bg-white z-10 shadow-md"
                                                style={{ borderColor: `${TBRAND.accent}66` }}
                                            >
                                                {b.icon}
                                            </div>
                                        </div>
                                        <h4 className="mt-4 text-base font-semibold text-slate-900">{b.title}</h4>
                                        <p className="mt-2 text-sm text-slate-600">{b.desc}</p>
                                    </motion.div>
                                ))}
                            </div>
                        </div>

                        {/* detail cards with tilt */}
                        <div className="mt-12 grid gap-6 md:grid-cols-2">
                            {assessmentCards.map((b, i) => (
                                <TiltCard key={i} className="">
                                    <motion.div
                                        variants={tItem}
                                        className="rounded-2xl bg-white p-6 ring-1 ring-slate-900/10 shadow-sm transition-shadow hover:shadow-lg relative"
                                        whileHover={{ y: -2 }}
                                        transition={{ duration: 0.25, ease: EASE_OUT }}
                                    >
                                        <div className="mb-3 flex items-center gap-3">
                                            <span
                                                className="inline-flex h-10 w-10 items-center justify-center rounded-xl"
                                                style={{ background: `${TBRAND.accent}22` }}
                                            >
                                                {b.icon}
                                            </span>
                                            <h4 className="text-lg font-bold text-slate-900">{b.title}</h4>
                                        </div>
                                        <p className="text-sm text-slate-700 font-semibold mb-4">{b.desc}</p>
                                        <ul className="space-y-2 text-sm text-slate-700">
                                            {b.points.map((p: string, j: number) => (
                                                <li key={j} className="flex gap-2">
                                                    <CheckCircle2 className="mt-0.5 h-4 w-4 text-green-600 shrink-0" />
                                                    <span>{p}</span>
                                                </li>
                                            ))}
                                        </ul>

                                        {/* sheen sweep */}
                                        {!prefersReducedMotion && (
                                            <motion.span
                                                aria-hidden
                                                className="pointer-events-none absolute -inset-1 rounded-[18px]"
                                                style={{
                                                    background:
                                                        "linear-gradient(120deg, transparent 40%, rgba(255,255,255,.35) 50%, transparent 60%)",
                                                }}
                                                animate={{ x: ["-120%", "120%"], opacity: [0, 1, 0] }}
                                                transition={{ repeat: Infinity, duration: 3.6, ease: EASE_IN_OUT }}
                                            />
                                        )}
                                    </motion.div>
                                </TiltCard>
                            ))}
                        </div>
                    </motion.div>
                </TWrap>
            </TSection>

            {/* BID ADVISORY */}
            <TSection id="bid" className="py-10 md:py-14">
                {/* animated top divider line */}
                <motion.div
                    className="absolute inset-x-0 top-0 h-[3px]"
                    style={{ backgroundImage: GRADIENT, backgroundSize: "200% 100%" }}
                    animate={{ backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"] }}
                    transition={{ repeat: Infinity, duration: 10, ease: "linear" }}
                />
                <TWrap>
                    <motion.div variants={tContainer} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.25 }}>
                        <div className="mx-auto max-w-3xl text-center">
                            <h2 className="text-3xl font-bold text-slate-900 sm:text-4xl">Bid Advisory — The Smart Selection</h2>
                            <p className="mt-3 text-slate-600">
                                Transparent vendor evaluation and contract finalization to ensure you select the best value partner.
                            </p>
                        </div>

                        <TCard
                            className="mt-8 p-6 md:p-8 border-2"
                            style={{
                                background: "linear-gradient(180deg, #fff, #fdfdfd)",
                                borderColor: TBRAND.accent,
                            }}
                        >
                            <ul className="grid gap-6 md:grid-cols-3 text-base text-slate-800">
                                {bidAdvisory.map((p, i) => (
                                    <motion.li
                                        key={i}
                                        variants={tItem}
                                        className="flex items-start gap-3 p-4 rounded-lg bg-white/70 ring-1 ring-slate-900/40"
                                        whileHover={{ y: -2 }}
                                        transition={{ duration: 0.25, ease: EASE_OUT }}
                                    >
                                        <ClipboardCheck className="mt-1 h-5 w-5 shrink-0" style={{ color: TBRAND.accent }} />
                                        <span>{p}</span>
                                    </motion.li>
                                ))}
                            </ul>
                        </TCard>
                    </motion.div>
                </TWrap>
            </TSection>

            {/* CONSTRUCTION MONITORING */}
            <TSection id="monitoring" className="py-10 md:py-14" style={{ backgroundColor: TBRAND.muted }}>
                <TWrap>
                    <motion.div variants={tContainer} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.25 }}>
                        <div className="mx-auto max-w-3xl text-center">
                            <h2 className="text-3xl font-bold text-slate-900 sm:text-4xl">Construction Monitoring</h2>
                            <p className="mt-3 text-slate-600">Dedicated monitoring to avoid delays, ensure quality, and extend plant life.</p>
                        </div>

                        <div className="mt-10 grid gap-6 md:grid-cols-3">
                            {monitoringItems.map((m, i) => (
                                <TiltCard key={i} glowColor={`${TBRAND.primary}`}>
                                    <motion.div
                                        variants={tItem}
                                        className="rounded-2xl bg-white p-6 ring-1 ring-slate-900/10 shadow-lg transition-shadow hover:shadow-xl relative"
                                        whileHover={{ y: -2 }}
                                        transition={{ duration: 0.25, ease: EASE_OUT }}
                                    >
                                        <div
                                            className="mb-3 inline-flex h-12 w-12 items-center justify-center rounded-xl text-slate-900"
                                            style={{ background: `${TBRAND.accent}33` }}
                                        >
                                            {m.icon}
                                        </div>
                                        <h4 className="text-lg font-bold text-slate-900">{m.title}</h4>
                                        <p className="mt-2 text-sm text-slate-700">{m.desc}</p>
                                    </motion.div>
                                </TiltCard>
                            ))}
                        </div>
                    </motion.div>
                </TWrap>
            </TSection>

            {/* CSR CONSULTING */}
            <TSection id="csr" className="py-10 md:py-14">
                <TWrap>
                    <motion.div variants={tContainer} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.25 }}>
                        <div className="mx-auto max-w-3xl text-center">
                            <h2 className="text-3xl font-bold text-slate-900 sm:text-4xl">CSR Consulting</h2>
                            <p className="mt-3 text-slate-600">
                                Enable CSR impact via decentralised solar – schools, PHCs, hostels and community assets.
                            </p>
                        </div>

                        <TCard className="mt-8 p-6 md:p-8 relative overflow-hidden">
                            {/* animated border accent */}
                            {!prefersReducedMotion && (
                                <motion.span
                                    aria-hidden
                                    className="absolute -inset-px rounded-2xl pointer-events-none"
                                    style={{ backgroundImage: GRADIENT, mask: "linear-gradient(#000 0 0) content-box, linear-gradient(#000 0 0)" as any, WebkitMask: "linear-gradient(#000 0 0) content-box, linear-gradient(#000 0 0)" as any, padding: 1 }}
                                    animate={{ opacity: [0.7, 1, 0.7] }}
                                    transition={{ repeat: Infinity, duration: 3.5, ease: EASE_IN_OUT }}
                                />
                            )}
                            <div className="grid gap-10 md:grid-cols-2 text-sm text-slate-700 relative z-10">
                                <div>
                                    <h4 className="text-lg font-bold text-slate-900 border-b border-slate-200 pb-2">How we help</h4>
                                    <ul className="mt-4 space-y-3">
                                        <li className="flex gap-2 items-start">
                                            <CheckCircle2 className="mt-0.5 h-4 w-4 text-green-600 shrink-0" />
                                            <span>Site identification & beneficiary mapping, ensuring maximum social impact.</span>
                                        </li>
                                        <li className="flex gap-2 items-start">
                                            <CheckCircle2 className="mt-0.5 h-4 w-4 text-green-600 shrink-0" />
                                            <span>Technical design, budgeting, and project timelines for smooth execution.</span>
                                        </li>
                                        <li className="flex gap-2 items-start">
                                            <CheckCircle2 className="mt-0.5 h-4 w-4 text-green-600 shrink-0" />
                                            <span>Implementation partner selection & project monitoring for accountability.</span>
                                        </li>
                                    </ul>
                                </div>
                                <div>
                                    <h4 className="text-lg font-bold text-slate-900 border-b border-slate-200 pb-2">Typical beneficiaries</h4>
                                    <ul className="mt-4 space-y-3">
                                        <li className="flex gap-2 items-start">
                                            <Home className="mt-0.5 h-4 w-4 text-slate-500 shrink-0" />
                                            <span>Rural schools, student hostels, and educational institutions.</span>
                                        </li>
                                        <li className="flex gap-2 items-start">
                                            <Building2 className="mt-0.5 h-4 w-4 text-slate-500 shrink-0" />
                                            <span>Primary Health Centres (PHCs) and community clinics.</span>
                                        </li>
                                        <li className="flex gap-2 items-start">
                                            <Factory className="mt-0.5 h-4 w-4 text-slate-500 shrink-0" />
                                            <span>Community facilities, training centres, and non-profits.</span>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </TCard>
                    </motion.div>
                </TWrap>
            </TSection>
        </main>
    );
}
