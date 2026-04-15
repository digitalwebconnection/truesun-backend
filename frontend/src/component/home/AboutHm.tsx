
import { Link } from "react-router-dom";
import type React from "react";
import {
    Leaf,
    Sun,
    Zap,
    Factory,
    Handshake,
    DollarSign,
    ShieldCheck,
    GaugeCircle,
    Globe2,
    Wallet,
} from "lucide-react";

export default function AboutTrueSunNew() {
    return (
        <section className="relative overflow-hidden bg-gray-50 pt-5 pb-20 sm:pt-10 sm:pb-24">
            {/* Subtle background texture/pattern */}
            <div
                className="absolute inset-0 bg-[url('/img/solar-pattern.svg')] opacity-5 bg-size-[220px]"
                aria-hidden="true"
            />
            <div className="relative mx-auto max-w-7xl px-6 lg:px-0 space-y-16 lg:space-y-10">
                {/* === SECTION 1: CENTERED HEADLINE & VALUE PROPOSITION === */}
                <div className="mx-auto max-w-7xl text-center">
                    <span className="inline-flex items-center gap-2 rounded-full bg-[#FC763A] px-8 py-2 text-sm font-semibold text-black ring-1 ring-amber-300">
                        <Sun className="h-4 w-4 text-black" />
                        TrueSun Energy Solutions
                    </span>

                    <h2 className="mt-4 text-4xl font-extrabold tracking-tight text-[#686868] sm:text-5xl">
                        Reliable Solar Energy <span className=" text-[#fc763a]">Solutions in India</span>
                    </h2>

                    <p className="mx-auto mt-6 max-w-7xl text-xl text-gray-600">
                        TrueSun Energy Solutions is committed to accelerating India’s energy transition through future-ready solar systems. Backed by technical excellence, financial insight, and on-ground expertise, we design solutions that balance performance, savings, and sustainability.
                    </p>

                    {/* SDG Badges */}
                    <div className="mt-4 flex flex-wrap justify-center gap-3">
                        <SDGPill
                            icon={<Leaf className="h-4 w-4" />}
                            label="SDG 7: Affordable & Clean Energy"
                            color="emerald"
                        />
                        <SDGPill
                            icon={<Zap className="h-4 w-4" />}
                            label="SDG 13: Climate Action"
                            color="sky"
                        />
                    </div>

                </div>

                {/* === SECTION 1B: BENEFITS GRID (3–4 COLS) === */}
                <div className="mx-auto max-w-7xl">
                    <h3 className="text-center text-lg font-semibold text-gray-900 mb-6">
                        Why Businesses & Homeowners Trust TrueSun
                    </h3>
                    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
                        <BenefitItem
                            icon={<DollarSign className="h-5 w-5" />}
                            title="Save up to 80%"
                            desc="Offset a major share of your recurring electricity costs with rooftop solar."
                        />
                        <BenefitItem
                            icon={<ShieldCheck className="h-5 w-5" />}
                            title="30-Year Warranty"
                            desc="Tier-1 modules and bankable components with long-term performance assurance."
                        />
                        <BenefitItem
                            icon={<GaugeCircle className="h-5 w-5" />}
                            title="Optimized ROI"
                            desc="Project sizing, subsidy, and tariff mapping to shorten payback periods."
                        />
                        <BenefitItem
                            icon={<Globe2 className="h-5 w-5" />}
                            title="Net-Zero Ready"
                            desc="Make measurable progress on ESG, SDG, and sustainability reporting goals."
                        />
                    </div>
                </div>

                {/* === SECTION: SOLAR SUBSIDY + ROI CALCULATOR === */}
                <div
                    id="roi-calculator"
                    className="mx-auto max-w-7xl rounded-2xl border border-[#FC763A]/80 bg-linear-to-r from-amber-50 via-white to-orange-50 px-6 py-6  shadow-lg shadow-amber-100/70"
                >
                    <div className="grid gap-8 lg:grid-cols-3 lg:items-center">

                        {/* LEFT CONTENT */}
                        <div className="lg:col-span-2">
                            <h3 className="text-2xl font-bold text-gray-900 mb-2">
                                Solar Subsidy – PM Surya Ghar Yojana | Calculate Your Savings
                            </h3>

                            <p className="text-gray-700 mb-2">
                                The Government of India is promoting rooftop solar through the
                                <strong> PM Surya Ghar Yojana</strong>, offering subsidies of up to
                                <strong> ₹78,000 </strong> for residential solar systems. Use our solar
                                calculator to estimate your monthly electricity savings, system cost
                                after subsidy, and payback period before installing solar.
                            </p>

                            {/* Teaser stats */}
                            <div className="grid gap-4 sm:grid-cols-3 text-sm">

                                <MiniStat
                                    label="Government Subsidy"
                                    value="Up to ₹78,000"
                                    subtitle="PM Surya Ghar Yojana"
                                />

                                <MiniStat
                                    label="Estimated Monthly Savings"
                                    value="₹12,500"
                                    subtitle="Subsidy Available 1 to 500 kW"
                                />

                                <MiniStat
                                    label="Average Payback"
                                    value="3–4 Years"
                                    subtitle="After subsidy benefits"
                                />

                            </div>

                            <p className="mt-2 text-xs text-gray-500">
                                Subsidy applicable only for residential rooftop solar systems under
                                PM Surya Ghar Yojana. Final savings depend on electricity tariff,
                                rooftop size, and solar system capacity.
                            </p>
                        </div>

                        {/* RIGHT IMAGE */}
                        <div className="flex justify-center lg:justify-end">
                            <img
                                src="https://bluebirdsolar.com/cdn/shop/articles/pmsuryaghar_min_2cbc91e5-36c6-412b-ba27-382f31968c4a.jpg?v=1761653009"
                                alt="Solar Subsidy PM Surya Ghar Yojana"
                                className="w-full max-w-lg rounded-xl shadow-md"
                            />
                        </div>

                    </div>
                </div>

                <div className="mt-2 grid gap-8 md:grid-cols-4">
                    <PillarCard
                        image="https://sahajsolar.com/wp-content/uploads/2025/08/roof-topp-1.jpg"
                        Icon={Factory}
                        title="End-to-End Rooftop EPC"
                        desc="A complete rooftop solar EPC solution delivering reliable, site-specific installations built to last."
                        features={[
                            "Industrial & Commercial Rooftops",
                            "Residential & Societies",
                            "Quality-Checked Components",
                        ]}
                    />

                    <PillarCard
                        image="https://news-images.dhan.co/waaree-renewable-technologies-secures-704-mwac-solar-project-worth-10-40-billion.jpg"
                        Icon={Handshake}
                        title="O&M"
                        desc="Strategic solar consultancy, Industrial solar project consulting, Solar project consultancy"
                        features={[
                            "Project Management Consulting",
                            "Technology & Vendor Audits",
                            "Detailed Payback Modeling",
                        ]}
                    />
                    <PillarCard
                        image="https://img-cdn.publive.online/fit-in/640x430/filters:format(webp)/saur-energy/media/post_attachments/2024/02/financing-for-solar.jpg"
                        Icon={Wallet}
                        title="Solar Finance"
                        desc="Tie ups with leading Financial Institutions to provide seamless financing options for your solar rooftop projets"
                        features={[
                            "Low or Zero upfront cost",
                            "EMI/Flexible Financing options",
                            "OPEX/RESCO Models",
                        ]}
                    />

                    <PillarCard
                        image="https://synergysolar.in/wp-content/uploads/2026/01/Carbon-Credit-for-Solar-Farm-1080x400.webp"
                        Icon={DollarSign}
                        title="Sustainability & Carbon Credit Advisory"
                        desc="TrueSun’s carbon and finance advisory services help organizations unlock greater value from solar investments."
                        features={[
                            "Carbon Footprinting & Reporting",
                            "Carbon Credit Value Assessment",
                            "Optimal Finance Structuring",
                        ]}
                    />


                </div>



                {/* === SECTION 5: STORYTELLING BLOCK — TESTIMONIALS / CASE STUDIES === */}
                <div id="case-studies" className="mt-12 max-w-7xl mx-auto grid gap-8 lg:grid-cols-12 items-stretch">

                    {/* Left Column: Story (Occupies 5 columns) */}
                    <div className="lg:col-span-5 flex flex-col justify-center bg-slate-50 p-8 rounded-3xl border border-slate-100">
                        <span className="text-[#fc763a] font-semibold tracking-wider uppercase text-sm mb-4 block">
                            Success Stories
                        </span>
                        <h3 className="text-3xl md:text-4xl font-extrabold text-[#686868] mb-6 leading-tight">
                            From Rising Bills to <span className="text-[#fc763a]">Predictable Savings</span>
                        </h3>
                        <p className="text-gray-600 text-lg mb-6 leading-relaxed">
                            Every rooftop has a unique energy story. At TrueSun, we combine engineering precision with ground-level execution to turn your roof into a strategic asset.
                        </p>
                       <div className="flex gap-4 items-center">
  <Link to="/projects">
    <button className="bg-gray-900 text-white px-10 py-3 rounded-full font-medium hover:bg-[#fc763a] transition-all">
      View All Projects
    </button>
  </Link>
</div>
                    </div>

                    {/* Right Column: Story-Based Impact Cards */}
                    <div className="lg:col-span-7 grid gap-6">

                        {/* Card 1 */}
                        <div className="group rounded-2xl bg-white border border-gray-600/40 p-6 shadow-xl hover:shadow-lg transition-all duration-300">

                            <span className="text-sm text-[#FC763A] font-medium">
                                Before Solar
                            </span>

                            <h4 className="text-xl font-bold text-[#686868] mt-2 mb-3">
                                Unpredictable Energy Costs
                            </h4>

                            <p className="text-gray-600 text-sm leading-relaxed">
                                Rising electricity bills and frequent tariff changes made it difficult to manage operational expenses and plan long-term budgets.
                            </p>

                        </div>

                        {/* Card 2 */}
                        <div className="group rounded-2xl bg-white border border-gray-600/40 p-6 shadow-xl hover:shadow-lg transition-all duration-300">

                            <span className="text-sm text-[#FC763A] font-medium">
                                After Solar
                            </span>

                            <h4 className="text-xl font-bold text-[#686868] mt-2 mb-3">
                                Stable & Predictable Savings
                            </h4>

                            <p className="text-gray-600 text-sm leading-relaxed">
                                With solar installed, energy costs became consistent and significantly lower, allowing better financial planning and long-term savings.
                            </p>

                        </div>

                    </div>
                </div>

            </div>
        </section>
    );
}



function SDGPill({
    icon,
    label,
    color,
}: {
    icon: React.ReactNode;
    label: string;
    color: "emerald" | "sky";
}) {
    const bgClass =
        color === "emerald"
            ? "bg-emerald-200/80 ring-emerald-200 text-black"
            : "bg-sky-200/80 ring-sky-200 text-sky-950";
    const iconClass = color === "emerald" ? "text-emerald-600" : "text-sky-600";

    return (
        <span
            className={`inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-sm font-medium ring-1 ${bgClass}`}
        >
            <span className={iconClass}>{icon}</span>
            {label}
        </span>
    );
}

type PillarCardProps = {
    Icon: any;
    title: string;
    desc: string;
    features: string[];
    image: string;
};

export function PillarCard({
    Icon,
    title,
    desc,
    features,
    image,
}: PillarCardProps) {
    return (
        <div className="group perspective h-80 w-full">

            <div className="relative shadow-xl h-full w-full transition-transform duration-700 transform-3d group-hover:transform-[rotateY(180deg)]">

                {/* FRONT */}
                {/* BACK */}

                <div className="absolute inset-0 rounded-2xl backface-hidden ">

                    <img
                        src={image}
                        alt={title}
                        className="h-full w-full rounded-2xl object-cover"
                    />

                    <div className="absolute inset-0 rounded-2xl bg-black/70 flex items-center justify-center">
                        <h4 className="text-[#FC763A] text-xl font-semibold text-center px-6">
                            {title}
                        </h4>
                    </div>

                </div>
                <div className="absolute inset-0 rounded-xl bg-white shadow-md p-6  overflow-hidden transform-[rotateY(180deg)] backface-hidden">

                    <Icon className="h-10 w-10 text-[#FC763A] mb-4" />

                    <h4 className="text-lg font-semibold text-gray-900 mb-2">
                        {title}
                    </h4>

                    <p className="text-sm text-gray-600 mb-4">{desc}</p>

                    <ul className="text-sm text-gray-700 space-y-1">
                        {features.map((f, i) => (
                            <li key={i}>• {f}</li>
                        ))}
                    </ul>

                </div>



            </div>
        </div>
    );
}

function BenefitItem({
    icon,
    title,
    desc,
}: {
    icon: React.ReactNode;
    title: string;
    desc: string;
}) {
    return (
        <div className="flex flex-col gap-2 rounded-xl border border-gray-600/50 bg-white px-4 py-4 shadow-sm">
            <div className="flex items-center gap-2">
                <div className="flex h-9 w-9 items-center justify-center rounded-full bg-amber-100">
                    {icon}
                </div>
                <h4 className="text-sm font-semibold text-gray-900">{title}</h4>
            </div>
            <p className="text-xs text-gray-600">{desc}</p>
        </div>
    );
}

function MiniStat({
    label,
    value,
    subtitle,
}: {
    label: string;
    value: string;
    subtitle: string;
}) {
    return (
        <div className="rounded-xl bg-white/80 px-4 py-3 shadow-sm border border-amber-400">
            <p className="text-[11px] font-medium uppercase tracking-wide text-[#FC763A]">
                {label}
            </p>
            <p className="mt-1 text-base font-semibold text-gray-900">{value}</p>
            <p className="mt-0.5 text-[11px] text-gray-500">{subtitle}</p>
        </div>
    );
}


