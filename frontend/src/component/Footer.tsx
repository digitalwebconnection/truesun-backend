 

import React from "react";
import {
    Mail,
    MapPin,
    Leaf,
    Facebook,
    Instagram,
    Linkedin,
    Youtube,
    Code2,
    ShieldCheck,
    Sparkles,
    Phone,
} from "lucide-react";
import { Link } from "react-router-dom"; // ✅ React Router import
import logo from '../assets/truesun.png';
import { PiPinterestLogo } from "react-icons/pi";
import { FaXTwitter } from "react-icons/fa6";




export default function SolarFooter() {
    return (
        <footer className="relative mt-10  bg-white text-neutral-100">
            {/* Decorative top curve */}
            <div className="pointer-events-none relative -mb-1 h-20 w-full overflow-hidden">
                <svg
                    viewBox="0 0 1440 150"
                    xmlns="http://www.w3.org/2000/svg"
                    className="absolute top-0 left-0 h-[100px] w-full"
                    preserveAspectRatio="none"
                >
                    <path
                        d="M0,100 Q40,0 120,0 H1320 Q1400,0 1440,100 L1440,150 L0,150 Z"
                        className="fill-[#0B0D0F]"
                    />
                </svg>
            </div>

            {/* Main footer */}
            <div className="relative overflow-hidden  backdrop-blur bg-[#0B0D0F]">
                <div className="mx-auto max-w-7xl px-6 pb-10">
                    <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-12">
                        {/* Brand */}
                        <div className="lg:col-span-4">
                            <div className="flex items-center gap-3">

                                <div>
                                    <Link
                                        to="/"
                                        className="flex items-center gap-2 w-40"
                                        aria-label="Home"
                                    >
                                        <img src={logo} alt="" />

                                    </Link>
                                    <p className="text-xs text-neutral-400">
                                        Rooftop EPC • O&M • Consulting
                                    </p>
                                </div>
                            </div>
                            <p className="mt-4 max-w-md text-sm text-neutral-300">
                                We design and deliver high-yield, safe rooftop solar systems for
                                homes, societies, and businesses. Clean energy made effortless —
                                from design to net-metering.
                            </p>

                            {/* Badges */}
                            <div className="mt-5 flex flex-wrap items-center gap-2 text-xs">
                                <span className="inline-flex items-center gap-1 rounded-full border  px-2.5 py-1 border-emerald-500/30 bg-emerald-500/10 text-emerald-300">
                                    <Leaf className="h-3.5 w-3.5" /> Net-Zero Ready
                                </span>
                                <span className="inline-flex items-center gap-1 rounded-full border  px-2.5 py-1  border-amber-500/30 bg-amber-500/10 text-amber-300">
                                    <ShieldCheck className="h-3.5 w-3.5" /> Safety First
                                </span>
                                <span className="inline-flex items-center gap-1 rounded-full border  px-2.5 py-1 border-sky-500/30 bg-sky-500/10 text-sky-300">
                                    <Sparkles className="h-3.5 w-3.5" /> Tier-1 Hardware
                                </span>
                            </div>
                        </div>

                        {/* Quick Links */}
                        <div className="lg:col-span-2">
                            <h4 className="mb-3 text-sm font-semibold tracking-wide text-white">
                                Quick Links
                            </h4>
                            <nav className="grid gap-2 text-sm text-neutral-300">
                                <FooterLink to="/about">About Us</FooterLink>
                                <FooterLink to="/projects">Projects</FooterLink>
                                <FooterLink to="/solar-finance">Solar-Finance</FooterLink>
                                <FooterLink to="/Knowledgwe">Knowledgwe HUB</FooterLink>
                                <FooterLink to="/careers">Careers</FooterLink>
                            </nav>
                        </div>

                        {/* Solutions */}
                        <div className="lg:col-span-2">
                            <h4 className="mb-3 text-sm font-semibold tracking-wide text-white">
                                Solutions
                            </h4>
                            <nav className="grid gap-2 text-sm text-neutral-300">
                                <a >Home Solar</a>
                                <a >Housing Societies</a>
                                <a >Commercial</a>
                                <a >Industrial</a>
                                <a >O&M</a>
                            </nav>
                        </div>

                        {/* Resources */}
                        <div className="lg:col-span-2">
                            <h4 className="mb-3 text-sm font-semibold tracking-wide text-white">
                                Resources
                            </h4>
                            <nav className="grid gap-2 text-sm text-neutral-300">
                                <a >ROI Calculator</a>
                                <a >Downloads</a>
                                <a >FAQs</a>
                                <a >Warranty</a>
                                <a >Support</a>
                            </nav>
                        </div>

                        {/* Contact */}
                        <div className="lg:col-span-2 ms-0 md:-ms-20">
                            <h4 className="mb-3 text-sm font-semibold tracking-wide text-white">
                                Contact
                            </h4>
                            <div className="grid gap-2 text-sm text-neutral-300">
                                <p className="inline-flex items-start gap-2">
                                    <a
                                        href="https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d3453.199038507266!2d72.82532862520335!3d18.998344432190336!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1s8th%20floor%2C%20B-Wing%2C%20Peninsula%20Business%20Park%20Tower%20B%2C%20Lower%20Parel%20Mumbai%20-%20400013!5e1!3m2!1sen!2sin!4v1775206753967!5m2!1sen!2sin"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex items-start gap-2 hover:text-[#FC763A]"
                                    >
                                        <MapPin className="mt-0.5 h-12 w-12  py-4" />
                                    8th floor, B-Wing, Peninsula Business Park, Tower B, Lower Parel
Mumbai - 400013 </a>
                                </p>

                                <p className="inline-flex items-start gap-2">
                                    <a
                                        href="tel:+918850845149"
                                        className="flex items-start gap-2 hover:text-[#FC763A]"
                                    >
                                        <Phone className="mt-0.5 h-4 w-4" /> +91 88508 45149
                                    </a>
                                </p>

                                <p className="inline-flex items-start gap-2">
                                    <a
                                        href="mailto:info@truesun.in"
                                        className="flex items-start gap-2 hover:text-[#FC763A]"
                                    >
                                        <Mail className="mt-0.5 h-4 w-4" /> info@truesun.in
                                    </a>
                                </p>

                            </div>
                            <div className="mt-4 flex items-center gap-2 hover:text-[#fc763a]">
                                <Social href="https://www.facebook.com/savewithtruesun" label="Facebook">
                                    <Facebook className="h-6 w-6 m-1" />
                                </Social>
                                <Social href="https://www.instagram.com/truesunenergy/" label="Instagram">
                                    <Instagram className="h-6 w-6 m-1" />
                                </Social>
                                <Social href="https://www.linkedin.com/company/28163084" label="LinkedIn">
                                    <Linkedin className="h-6 w-6 m-1" />
                                </Social>
                                <Social href="https://www.youtube.com/@truesunenergysolutions" label="YouTube">
                                    <Youtube className="h-6 w-6 m-1" />
                                </Social>
                                <Social href="https://x.com/TrueSunEnergy" label="Faxtwitter">
                                    <FaXTwitter className="h-6 w-6 m-1" />
                                </Social>
                                <Social href="https://in.pinterest.com/02nmxqdt7syiposejxj5aa4piabmtr/" label="Pilnterest">
                                    <PiPinterestLogo className="h-6 w-6 m-1" />
                                </Social>

                            </div>

                        </div>
                    </div>

                    {/* Badges */}
                    <div className="mt-12 rounded-2xl border   p-4 backdrop-blur border-white/10 bg-white/10">
                        <div className="grid items-center gap-4 sm:grid-cols-2 lg:grid-cols-4">
                            <Badge text="MNRE Approved" />
                            <Badge text="ISO 9001:2015" />
                            <Badge text="Tier-1 Modules" />
                            <Badge text="5-Year System Warranty" />
                        </div>
                    </div>

                    {/* Bottom bar */}
                    <div className="mt-8 flex flex-col items-center justify-between gap-4 border-t pt-6 text-sm  border-white/10 text-neutral-400 md:flex-row">
                        <p>© {new Date().getFullYear()} <span className="w-6 h-6 text-lg  font-semibold text-[#FC763A]"> TrueSun</span>. All rights reserved.</p>
                        <p className="flex md:me-25 md:px-10 items-center justify-center gap-2 ms-3 md:ms-0   text-white text-[13px] md:text-sm">
                            <Code2 className="w-6 h-6 text-[#FC763A]" />
                            <p>
                                Developed by <a href="https://digitalwebconnection.com/" target="_blank" className="text-[#FC763A] font-semibold">Digital Web Connection</a>
                            </p>

                        </p>
                        <div className="flex items-center gap-5 me-20 md:me-35">
                            <FooterLink to="/PrivacyPolicy">Privacy Policy</FooterLink>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}

/* ------- Subcomponents ------- */
function FooterLink({
    to,
    children,
}: {
    to: string;
    children: React.ReactNode;
}) {
    return (
        <Link
            to={to}
            className="inline-flex items-center gap-1  hover:underline hover:text-white"
        >
            <span className="h-1 w-1 rounded-full bg-current" />
            {children}
        </Link>
    );
}

function Social({
    href,
    label,
    children,
}: {
    href: string;
    label: string;
    children: React.ReactNode;
}) {
    return (
        <a
            aria-label={label}
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center rounded-full border  transition  border-white/10 bg-white/10 text-neutral-300 hover:text-white"
        >
            {children}
        </a>
    );
}

function Badge({ text }: { text: string }) {
    return (
        <div className="flex items-center justify-center gap-2 rounded-xl border  px-3 py-2 text-sm font-medium border-white/10 bg-white/10 text-neutral-200">
            <ShieldCheck className="h-4 w-4 text-emerald-300" />
            {text}
        </div>
    );
}
