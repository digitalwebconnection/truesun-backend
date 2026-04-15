import {
    SunMedium,
} from "lucide-react";
import BlogPage from "./BlogPage";

export default function SolarBlogPage() {

    return (
        <>
            {/* ===== BLOG HERO / INTRO ===== */}
            <section className="relative overflow-hidden rounded-3xl text-slate-50 px-6 py-8 md:px-10 md:py-32">
                {/* Background image */}
                <div className="absolute inset-0">
                    <img
                        src="https://images.indianexpress.com/2025/08/Solar-Panels-1.jpg"
                        alt="Solar panels at sunset"
                        className="h-full w-full object-cover"
                    />
                    {/* Dark gradient overlay */}
                    <div className="absolute inset-0 bg-linear-to-br from-slate-950/50 via-slate-900/35 to-slate-900/10" />
                </div>

                {/* Subtle corner glow */}
                <div className="pointer-events-none absolute -right-16 -top-16 h-48 w-48 rounded-full bg-[#FC763A]/15 blur-3xl" />
                <div className="pointer-events-none absolute -left-16 bottom-0 h-40 w-40 rounded-full bg-sky-500/10 blur-3xl" />

                {/* Content */}
                <div className="relative flex flex-col gap-6 md:flex-row md:items-center md:justify-between py-12 md:py-0">
                    <div className="space-y-4 max-w-xl">
                        <div className="inline-flex items-center gap-2 rounded-full border border-slate-700/70 bg-slate-900/70 px-3 py-1 text-[11px] font-medium tracking-[0.18em] uppercase text-slate-300 backdrop-blur-sm">
                            <span className="flex h-4 w-4 items-center justify-center rounded-full bg-[#FC763A]/20">
                                <SunMedium className="h-3 w-3" />
                            </span>
                            Solar Knowledge Hub
                        </div>

                        <div className="space-y-3">
                            <h1 className="text-2xl md:text-3xl lg:text-4xl font-semibold leading-tight">
                                Learn Solar in Simple, Practical Language.
                            </h1>
                            <p className="text-sm md:text-base text-slate-200/90">
                                Guides, case studies and explainers to help you make confident
                                solar decisions for your home, factory or business.
                            </p>
                        </div>

                        <div className="flex flex-wrap gap-3 text-xs text-slate-100">
                            <span className="rounded-full border border-slate-600/70 bg-slate-900/60 px-3 py-1 backdrop-blur-sm">
                                Payback & savings
                            </span>
                            <span className="rounded-full border border-slate-600/70 bg-slate-900/60 px-3 py-1 backdrop-blur-sm">
                                Rooftop design basics
                            </span>
                            <span className="rounded-full border border-slate-600/70 bg-slate-900/60 px-3 py-1 backdrop-blur-sm">
                                Approvals & policy
                            </span>
                        </div>
                    </div>

                    {/* Right highlight card */}
                    <div className="relative mt-2 md:mt-0">
                        <div className="rounded-2xl border border-slate-700/80 bg-slate-900/80 px-4 py-4 md:px-5 md:py-5 shadow-xl backdrop-blur-sm max-w-xs md:max-w-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl">
                            <p className="text-xs uppercase tracking-[0.18em] text-slate-400 mb-2">
                                Featured Reading
                            </p>
                            <p className="text-sm md:text-base font-medium text-slate-50">
                                &ldquo;Solar Payback in 5 Minutes&rdquo; is a great place to
                                start if you’re new to rooftop solar.
                            </p>
                         
                        </div>

                        {/* subtle glow behind card */}
                        <div className="pointer-events-none absolute -right-10 -bottom-10 h-32 w-32 rounded-full bg-[#FC763A]/25 blur-3xl" />
                    </div>
                </div>
            </section>

            <main className="mx-auto max-w-7xl px-4 md:px-0 py-6 md:py-10 space-y-10 md:space-y-14">
                {/* ===== MAIN CONTENT: BLOG GRID + SIDEBAR ===== */}
                <BlogPage />
            </main>
        </>
    );
}

