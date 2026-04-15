 

import type { FC, ReactNode } from "react";
import type { SVGProps, ComponentType } from "react";
import {
  Sun,
  Home,
  Building2,
  BatteryCharging,
  Gauge,
  ShieldCheck,
  Zap,
  Wrench,
  Clock,
  IndianRupee,
  CheckCircle,
  FileText,
} from "lucide-react";

/* ───────────────────────────────── Types ───────────────────────────────── */

type IconType = ComponentType<SVGProps<SVGSVGElement>>;

interface BenefitItem {
  icon: IconType;
  title: string;
  desc: string;
}

interface ProcessStep {
  step: number;
  title: string;
  text: string;
}

interface FAQItem {
  q: string;
  a: string;
}

/* ───────────────────────────── SEO-focused Content ─────────────────────── */

const benefitItems: BenefitItem[] = [
  {
    icon: Gauge,
    title: "Reduce electricity bills by 80–90%",
    desc: "Residential solar rooftop systems for apartments, villas and bungalows can offset most of your monthly power consumption.",
  },
  {
    icon: ShieldCheck,
    title: "Roof-safe mounting for societies & homes",
    desc: "We use non-penetrating and engineered structures so housing societies and bungalow roofs stay safe and leak-free.",
  },
  {
    icon: Sun,
    title: "Better comfort with cooler roofs",
    desc: "Solar panels work as an additional shade layer, reducing direct heat gain and improving comfort on top floors.",
  },
  {
    icon: Building2,
    title: "Optimised for housing societies (CHS)",
    desc: "Common-area loads like lifts, pumps and lights are planned to maximise savings for cooperative housing societies.",
  },
  {
    icon: Home,
    title: "Tailor-made for villas & bungalows",
    desc: "We design solar plants that match your sanctioned load, lifestyle and aesthetics for premium homes and villas.",
  },
  {
    icon: Clock,
    title: "Payback in 3–4 years",
    desc: "Most residential solar panel installations recover their cost in under 4 years depending on tariff and usage pattern.",
  },
  {
    icon: IndianRupee,
    title: "EMI, loans & flexible finance",
    desc: "If upfront investment is a concern, we assist with bank finance and EMI-friendly options for societies and individual homes.",
  },
  {
    icon: FileText,
    title: "End-to-end approvals & paperwork",
    desc: "From DISCOM permissions and net-metering to safety compliance, we manage the complete documentation for you.",
  },
];

const processSteps: ProcessStep[] = [
  {
    step: 1,
    title: "Solar site survey & load analysis",
    text: "We visit your housing society, villa or bungalow, assess shade, roof strength, sanctioned load and past electricity bills.",
  },
  {
    step: 2,
    title: "System design & savings proposal",
    text: "We create a rooftop layout, select modules and inverters, and share expected generation, savings and payback period.",
  },
  {
    step: 3,
    title: "Approvals, net-metering & safety design",
    text: "Our team handles DISCOM applications, safety checks, earthing, lightning protection and net-metering formalities.",
  },
  {
    step: 4,
    title: "Installation & commissioning",
    text: "Structures, wiring, inverters, DCDB/ACDB and protections are installed, tested and synchronised with the grid.",
  },
  {
    step: 5,
    title: "Monitoring, O&M & long-term support",
    text: "You get app-based monitoring, cleaning schedules and preventive maintenance so your solar plant keeps performing for years.",
  },
];

const faqs: FAQItem[] = [
  {
    q: "Do you work with both housing societies and independent homes?",
    a: "Yes. We specialise in solar panel installation for cooperative housing societies (CHS), gated communities, villas and independent bungalows.",
  },
  {
    q: "Is my terrace strong enough for a solar plant?",
    a: "During the site survey we check roof condition, load-bearing capacity and shade. Only after confirming feasibility do we move forward with design.",
  },
  {
    q: "Will solar panels give me backup during power cuts?",
    a: "Standard grid-tied solar systems do not provide backup. For backup during power cuts, we recommend a hybrid inverter with battery storage.",
  },
  {
    q: "Can a housing society take a loan for solar?",
    a: "Many societies finance solar through cooperative banks or specialised loans. We support with technical details and documentation for the bank.",
  },
  {
    q: "How much maintenance do solar panels need?",
    a: "Solar plants mainly need periodic cleaning and routine health checks. We offer maintenance plans and remote monitoring support.",
  },
];

/* ───────────────────────────── Main Page Component ─────────────────────── */

const ResidentialSolarDetailsPage: FC = () => {
  return (
    <main className="max-w-7xl mx-auto bg-linear-to-b from-slate-50 via-white to-slate-50 text-slate-900">
      {/* HERO – SEO-friendly keyword rich */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top_right,rgba(16,185,129,0.14),transparent_60%)]" />
        <div className="max-w-7xl mx-auto px-6 pt-14 pb-10 lg:pt-20 lg:pb-16">
          <div className="flex flex-col gap-10 lg:flex-row lg:items-center">
            {/* Left - copy */}
            <div className="flex-1">
              <span className="inline-flex items-center gap-2 rounded-full bg-gray-100 px-3 py-1 text-[#FC763A] text-xs sm:text-sm font-medium">
                <Sun className="h-4 w-4" />
                Residential Solar Panel Installation for Housing Societies, Villas & Bungalows
              </span>

              <h1 className="mt-4 text-3xl sm:text-4xl lg:text-5xl text-[#686868] font-extrabold tracking-tight leading-tight">
                Solar for Homes, Housing Societies, Villas & Bungalows
              </h1>

              <p className="mt-4 text-slate-700 leading-relaxed max-w-2xl">
                We design and install grid-tied rooftop solar plants for cooperative housing societies, premium villas and independent bungalows.
                With real experience in{" "}
                <strong>housing society solar projects, villa solar plants and bungalow rooftop installations</strong>,
                we focus on long-term savings, safety and clean aesthetics.
              </p>

              {/* Who we work with – pill style */}
              <div className="mt-5 flex flex-wrap gap-2 text-sm">
                <Tag icon={Building2}>Cooperative Housing Societies (CHS)</Tag>
                <Tag icon={Home}>Villas & Independent Bungalows</Tag>
                <Tag icon={Zap}>High-usage Residential Consumers</Tag>
              </div>

            
              {/* Simple stats strip */}
              <div className="mt-8 flex flex-wrap gap-6 text-sm">
                <StatInline label="Typical savings" value="80–90% bill reduction" />
                <StatInline label="Payback period" value="3–4 years" />
                <StatInline label="Segments served" value="Societies, villas, bungalows" />
              </div>
            </div>

            {/* Right - abstract visual */}
            <div className="flex-1">
              <div className="relative mt-4 lg:mt-0">
                <div className="absolute -inset-4 bg-linear-to-tr from-emerald-200/40 via-sky-200/30 to-amber-200/40 blur-3xl -z-10" />
                <div className="rounded-3xl bg-white/70 backdrop-blur shadow-lg border border-slate-200 px-5 py-5 sm:px-7 sm:py-7">
                  <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#FC763A]">
                    Residential Solar Snapshot
                  </p>
                  <ul className="mt-4 space-y-3 text-sm text-slate-700">
                    <Li>
                      Multiple completed{" "}
                      <strong>housing society solar panel installations</strong> with common-area bill reductions.
                    </Li>
                    <Li>
                      Experience in{" "}
                      <strong>villa and bungalow solar design</strong> with clean cable routing and premium finish.
                    </Li>
                    <Li>
                      Net-metered rooftop plants delivering stable generation and long-term energy security.
                    </Li>
                  </ul>
                  <div className="mt-5 grid grid-cols-2 gap-3 text-xs sm:text-sm">
                    <Kpi label="Residential kWp Delivered" value="1000+ kWp (cumulative)" />
                    <Kpi label="Average plant uptime" value="> 98%" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* BENEFITS */}
      <section id="benefits" className="py-12 lg:py-16">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-2xl sm:text-3xl max-w-3xl  mx-auto text-center text-[#686868] font-bold">
            Benefits of Residential Solar Panel Installation for <span className="text-[#FC763A]">Housing Societies , Villas & Bungalows</span>
          </h2>
          <p className="mt-2 text-slate-600 max-w-5xl mx-auto text-center">
            Whether you live in a cooperative housing society, a gated villa community or an independent bungalow, rooftop solar can cut your
            electricity bills, protect your roof and make your property more future-ready.
          </p>

          <dl className="mt-8 divide-y divide-slate-200 rounded-3xl bg-white/70 backdrop-blur border border-slate-100">
            {benefitItems.map((b, i) => (
              <div key={i} className="flex flex-col sm:flex-row gap-4 px-5 py-4 sm:px-7 sm:py-5">
                <div className="flex items-center gap-3 min-w-[210px]">
                  <b.icon className="h-6 w-6 text-[#FC763A] shrink-0" />
                  <dt className="font-semibold text-slate-900">{b.title}</dt>
                </div>
                <dd className="text-sm text-slate-700">{b.desc}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

     <section className="py-16 lg:py-20 bg-white">
  <div className="max-w-7xl mx-auto px-6">

    <div className="grid gap-12 lg:grid-cols-[1.05fr,1.1fr] text-center items-center">

      {/* LEFT */}
      <div>
        <p className="inline-flex items-center gap-2 rounded-full bg-[#FC763A]/10 px-4 py-1 text-xs font-semibold tracking-wide uppercase text-[#FC763A]">
          Residential Solar • Housing Societies • Villas • Bungalows
        </p>

        <h2 className="mt-4 text-3xl md:text-4xl font-bold text-[#686868] max-w-5xl mx-auto
         leading-tight">
          Solar Panel Installation for{" "}
          <span className="text-[#FC763A]">Housing Societies</span>,{" "}
          Villas & Independent Bungalows
        </h2>

        <p className="mt-4 text-gray-600  leading-relaxed">
          We have hands-on experience implementing rooftop solar projects in cooperative housing societies, gated villas and independent
          bungalows. From shadow analysis and structure design to approvals, installation and maintenance, everything is done keeping
          long-term performance, safety and aesthetics in mind.
        </p>

        {/* Chips */}
        <div className="mt-6 flex flex-wrap gap-3 text-xs text-center justify-around">
          <div className="px-6 py-1 rounded-full bg-gray-100 text-[#FC763A]">Completed CHS Rooftop Projects</div>
          <div className="px-6 py-1 rounded-full bg-gray-100 text-[#FC763A]">Premium Villas & Bungalows</div>
          <div className="px-6 py-1 rounded-full bg-gray-100 text-[#FC763A]">High-usage Residential Consumers</div>
        </div>

      
      </div>

      {/* RIGHT */}
      <div className="space-y-6">

        {/* CARD 1 */}
        <div className="group bg-white border border-gray-200 rounded-3xl p-6 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1">

          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-3">
              <div className="h-10 w-10 flex items-center justify-center rounded-full bg-[#FC763A]/10 text-[#FC763A]">
                <Building2 size={18} />
              </div>
              <h3 className="font-semibold text-gray-900">
                Cooperative Housing Societies (CHS)
              </h3>
            </div>

            <span className="text-xs px-3 py-1 rounded-full bg-[#FC763A]/10 text-[#FC763A]">
              Common Area Savings
            </span>
          </div>

          <ul className="space-y-2 text-sm  text-start text-gray-600">
            <li>• Solar for lifts, water pumps, parking and campus lighting.</li>
            <li>• Elevated structures so residents still enjoy terrace access.</li>
            <li>• Central plant monitoring with app-based energy tracking.</li>
            <li>• Support with society resolutions, documentation & bank loans.</li>
          </ul>
        </div>

        {/* CARD 2 */}
        <div className="group bg-white border border-gray-200 rounded-3xl p-6 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1">

          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-3">
              <div className="h-10 w-10 flex items-center justify-center rounded-full bg-[#1D3F84]/10 text-[#1D3F84]">
                <Home size={18} />
              </div>
              <h3 className="font-semibold text-gray-900">
                Villas, Bungalows & Independent Homes
              </h3>
            </div>

            <span className="text-xs px-3 py-1 rounded-full bg-[#1D3F84]/10 text-[#1D3F84]">
              Tailor-made Design
            </span>
          </div>

          <ul className="space-y-2 text-sm  text-start text-gray-600">
            <li>• Right-sized plants based on bills, sanctioned load and tariff.</li>
            <li>• Neat conduit work and low-profile structures for premium look.</li>
            <li>• Hybrid / battery-ready options for outage-prone locations.</li>
            <li>• Long-term O&M support to keep generation and savings stable.</li>
          </ul>
        </div>

      </div>

    </div>
  </div>
</section>

      {/* TECH SPECS */}
      <section className="py-10">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-2xl sm:text-3xl text-[#FC763A] text-center font-bold">
            Typical Residential Solar Plant Specifications
          </h2>
          <p className="mt-2 text-slate-600 text-center max-w-5xl mx-auto text-sm">
            Exact specifications depend on your site and DISCOM norms, but most housing society, villa and bungalow solar projects use
            similar building blocks.
          </p>

          <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-6">
            <SpecStrip
              icon={Sun}
              title="Solar Modules"
              points={[
                "Mono-PERC / TOPCon technology",
                "545–620 Wp class (as per roof layout)",
                "30-year performance warranty",
              ]}
            />
            <SpecStrip
              icon={BatteryCharging}
              title="Inverters"
              points={[
                "String / Hybrid inverters (3–25 kW+)",
                "98%+ efficiency, Wi-Fi/app monitoring",
                "Battery-ready options for backup",
              ]}
            />
            <SpecStrip
              icon={Wrench}
              title="Structures & BoS"
              points={[
                "Non-penetrating & elevated structures as per need",
                "GI/Aluminium structures with SS hardware",
                "Earthing, lightning protection, DCDB/ACDB, SPDs",
              ]}
            />
          </div>
        </div>
      </section>

      {/* FINANCE & PAYBACK */}
     <section className="py-16 bg-[#f9fafb]">
      <div className="max-w-7xl mx-auto px-6">

        {/* HEADER */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-[#686868]">
            Finance, Payback & <span className="text-[#FC763A]">Subsidy</span>
          </h2>

          <p className="mt-3 text-gray-600 max-w-5xl mx-auto">
            Smart financial planning ensures your solar investment delivers maximum savings with minimal upfront burden.
          </p>
        </div>

        {/* CARDS */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

          {/* CARD 1 */}
          <div className="group bg-white border border-gray-200 rounded-3xl p-6 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-2">

            <div className="w-12 h-12 flex items-center justify-center rounded-full bg-[#FC763A]/10 text-[#FC763A] mb-4 group-hover:bg-[#FC763A] group-hover:text-white transition">
              <IndianRupee size={20} />
            </div>

            <h3 className="text-lg font-semibold text-gray-900 mb-2">
              EMI & Loan Support
            </h3>

            <p className="text-gray-600 text-sm leading-relaxed">
              We assist housing societies and homeowners with bank documentation, EMI structures and basic project financials so solar becomes
              cash-flow friendly from Day 1.
            </p>
          </div>

          {/* CARD 2 */}
          <div className="group bg-white border border-gray-200 rounded-3xl p-6 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-2">

            <div className="w-12 h-12 flex items-center justify-center rounded-full bg-[#FC763A]/10 text-[#FC763A] mb-4 group-hover:bg-[#FC763A] group-hover:text-white transition">
              <Gauge size={20} />
            </div>

            <h3 className="text-lg font-semibold text-gray-900 mb-2">
              3–4 Year Payback
            </h3>

            <p className="text-gray-600 text-sm leading-relaxed">
              With rising tariffs, residential solar rooftop projects usually recover their cost in around 3–4 years, after which you enjoy
              predominantly free power.
            </p>
          </div>

          {/* CARD 3 */}
          <div className="group bg-white border border-gray-200 rounded-3xl p-6 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-2">

            <div className="w-12 h-12 flex items-center justify-center rounded-full bg-[#FC763A]/10 text-[#FC763A] mb-4 group-hover:bg-[#FC763A] group-hover:text-white transition">
              <FileText size={20} />
            </div>

            <h3 className="text-lg font-semibold text-gray-900 mb-2">
              Subsidy Guidance
            </h3>

            <p className="text-gray-600 text-sm leading-relaxed">
              Eligible residential rooftop projects may get central/state subsidies as per current MNRE and DISCOM policies. We guide you through
              eligibility and application steps.
            </p>
          </div>

        </div>

      </div>
    </section>

      {/* PROCESS – timeline */}
      <section className="py-10">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-2xl sm:text-3xl font-bold text-center text-[#FC763A]">
            Our Residential Solar Installation Process
          </h2>
          <p className="mt-2 text-slate-600 text-center text-sm ">
            A simple, transparent process from first discussion to live generation for your housing society, villa or bungalow.
          </p>

          <ol className="mt-7 relative border-l border-slate-200 space-y-6 pl-4 sm:pl-6">
            {processSteps.map((s) => (
              <li key={s.step} className="relative">
                <div className="absolute -left-2 sm:-left-3 top-1 flex h-5 w-5 items-center justify-center rounded-full bg-emerald-600 text-[11px] font-bold text-white">
                  {s.step}
                </div>
                <div className="ml-3 sm:ml-4">
                  <div className="font-semibold text-slate-900">{s.title}</div>
                  <p className="mt-1 text-sm text-slate-700">{s.text}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* WHY US */}
      <section className="py-10 bg-slate-50">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-2xl sm:text-3xl text-center font-bold text-[#FC763A]">
            Why Choose Us for Housing Society, Villa & Bungalow Solar
          </h2>
          <div className="mt-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 text-sm">
            <HighlightLine icon={ShieldCheck} text="Safety-first engineering with certified components and protections." />
            <HighlightLine icon={Zap} text="Proven performance on live residential rooftop solar plants." />
            <HighlightLine icon={FileText} text="Approvals, net-metering and legal documentation handled end-to-end." />
            <HighlightLine icon={CheckCircle} text="Neat installation finish with labelled cabling and panels." />
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="py-10">
        <div className="max-w-5xl mx-auto px-6">
          <h2 className="text-2xl sm:text-3xl text-center font-bold text-[#FC763A]">
            Residential Solar FAQs
          </h2>
          <p className="mt-2 text-center text-slate-600 text-sm">
            Common questions from housing societies, villa owners and bungalow owners planning to install rooftop solar.
          </p>
          <div className="mt-6 divide-y divide-slate-200 rounded-3xl border border-slate-200 bg-white/80 backdrop-blur">
            {faqs.map((f, i) => (
              <details key={i} className="group p-5 sm:p-6">
                <summary className="flex w-full cursor-pointer list-none items-center justify-between">
                  <span className="font-semibold text-slate-900 text-sm sm:text-base">{f.q}</span>
                  <span className="ml-4 text-slate-500 group-open:hidden">+</span>
                  <span className="ml-4 text-slate-500 hidden group-open:inline">−</span>
                </summary>
                <p className="mt-2 text-slate-800 text-sm">{f.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>


    </main>
  );
};

export default ResidentialSolarDetailsPage;

/* ───────────────────────────── UI Primitives ───────────────────────────── */

interface StatInlineProps {
  label: string;
  value: ReactNode;
}
const StatInline: FC<StatInlineProps> = ({ label, value }) => (
  <div className="flex flex-col">
    <span className="text-xs uppercase tracking-wide text-slate-500">{label}</span>
    <span className="text-sm font-semibold text-slate-900">{value}</span>
  </div>
);



interface TagProps {
  icon: IconType;
  children: ReactNode;
}
const Tag: FC<TagProps> = ({ icon: Icon, children }) => (
  <span className="inline-flex items-center gap-2 rounded-full bg-white/80 px-3 py-1 border border-slate-200 text-[11px] sm:text-xs font-medium text-slate-800">
    <Icon className="h-3.5 w-3.5 text-[#FC763A]" />
    {children}
  </span>
);

const Li: FC<React.PropsWithChildren> = ({ children }) => (
  <li className="flex items-start gap-2">
    <CheckCircle className="mt-0.5 h-4 w-4 text-[#FC763A] shrink-0" />
    <span>{children}</span>
  </li>
);


interface KpiProps {
  label: string;
  value: string;
}
const Kpi: FC<KpiProps> = ({ label, value }) => (
  <div>
    <div className="text-[11px] uppercase tracking-wide text-slate-500">{label}</div>
    <div className="text-sm font-semibold text-slate-900">{value}</div>
  </div>
);

interface SpecStripProps {
  icon: IconType;
  title: string;
  points: string[];
}
const SpecStrip: FC<SpecStripProps> = ({ icon: Icon, title, points }) => (
  <div className="relative rounded-3xl bg-white/80 backdrop-blur border border-slate-100 px-5 py-5 sm:px-6 sm:py-6">
    <div className="inline-flex items-center gap-2 text-sm font-semibold text-slate-900">
      <Icon className="h-5 w-5 text-[#FC763A]" />
      {title}
    </div>
    <ul className="mt-3 space-y-1 text-sm text-slate-700">
      {points.map((p, i) => (
        <Li key={i}>{p}</Li>
      ))}
    </ul>
  </div>
);



interface HighlightLineProps {
  icon: IconType;
  text: string;
}
const HighlightLine: FC<HighlightLineProps> = ({ icon: Icon, text }) => (
  <div className="flex items-start gap-3 text-slate-800">
    <Icon className="h-5 w-5 text-[#FC763A] mt-0.5" />
    <p className="text-sm">{text}</p>
  </div>
);


