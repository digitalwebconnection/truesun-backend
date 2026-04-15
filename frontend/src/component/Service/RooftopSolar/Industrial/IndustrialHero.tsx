import {
  motion,
  useScroll,
  useTransform,
} from "framer-motion";
import {
  Factory,
  Wrench,
  ShieldCheck,
  Gauge,
  BatteryCharging,
  Building2,
  ChevronRight,
  TrendingUp,
  Users,
  Timer,
} from "lucide-react";

export default function IndustrialHeroStatic({
  bgImageUrl =
    "https://media.istockphoto.com/id/2032036470/photo/solar-panels-on-sunny-days-clean-energy-and-a-good-environment.jpg?s=612x612&w=0&k=20&c=mA2A1nIRjfp6AnOz6OCkDIP9Hn5-f3aBbpdz7LXasck=",
  companyName = "TrueSun Ltd.",
  title = "Powering Modern Industry with Sustainable Energy",
  subtitle = "India’s leading Solar EPC and Manufacturing Company – Delivering turnkey projects with precision, reliability, and green innovation.",
  ctaPrimaryText = "Get a Quote",
  ctaSecondaryText = "View Brochure",
  onPrimaryClick,
  onSecondaryClick,
}: any) {
  const { scrollYProgress } = useScroll();
  const heroFade = useTransform(scrollYProgress, [0, 0.2], [1, 0.3]);

  return (
    <section className="relative py-2 w-full overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${bgImageUrl})` }}
        />
        <div className="absolute inset-0 bg-linear-to-b from-black/80 via-black/65 to-black/90" />
      </div>

      {/* Content */}
      <motion.div
        style={{ opacity: heroFade }}
        className="relative mx-auto flex max-w-7xl flex-col gap-8 px-6 pb-20 pt-12 md:gap-10 md:px-10 lg:px-0 xl:pt-22"
      >
        {/* Badges */}
        <div className="flex flex-wrap items-center gap-3">
          <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-3.5 py-1.5 text-xs font-medium uppercase tracking-wider text-white/90 backdrop-blur-sm">
            <Building2 className="h-3.5 w-3.5" /> {companyName}
          </span>
          <span className="inline-flex items-center rounded-full bg-black/40 px-3 py-1.5 text-xs text-white/80 ring-1 ring-white/10 backdrop-blur">
            ISO 9001:2015 Certified | MNRE Approved
          </span>
        </div>

        {/* Title & Description */}
        <div className="max-w-5xl ">
          <h1 className=" text-4xl font-bold leading-tight text-white drop-shadow-sm sm:text-5xl md:text-6xl">
            {title}
          </h1>
          <p className="mt-2 max-w-3xl text-pretty text-base text-white/80 sm:text-lg leading-relaxed">
            {subtitle}
          </p>
          <div className="mt-7 flex flex-wrap items-center gap-3">
            <button
              onClick={onPrimaryClick}
              className="inline-flex items-center justify-center gap-2 rounded-2xl bg-amber-500 px-5 py-3 text-sm font-semibold text-black shadow-md hover:scale-105 transition"
            >
              {ctaPrimaryText}
              <ChevronRight className="h-4 w-4" />
            </button>
            <button
              onClick={onSecondaryClick}
              className="inline-flex items-center justify-center gap-2 rounded-2xl bg-white/10 px-5 py-3 text-sm font-semibold text-white backdrop-blur-md ring-1 ring-white/20 hover:bg-white/15"
            >
              {ctaSecondaryText}
            </button>
          </div>
        </div>

        {/* Key Features */}
        <ul className="mt-2 flex flex-wrap gap-2.5 text-sm text-white/95">
          {[
            { Icon: Factory, label: "Heavy Industry Ready" },
            { Icon: Wrench, label: "Precision Engineering" },
            { Icon: ShieldCheck, label: "HSE & Compliance" },
            { Icon: Gauge, label: "High Throughput" },
            { Icon: BatteryCharging, label: "Energy Efficient" },
          ].map(({ Icon, label }) => (
            <li
              key={label}
              className="inline-flex items-center gap-2 rounded-full bg-black/35 px-3 py-1.5 ring-1 ring-white/10 backdrop-blur"
            >
              <Icon className="h-4.5 w-4.5" />
              <span>{label}</span>
            </li>
          ))}
        </ul>

        {/* Data / Stats Section */}
        <div className="mt-2 grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4">
          {[
            {
              icon: <TrendingUp className="h-5 w-5 text-amber-400" />,
              label: "Projects Delivered",
              value: "500+",
            },
            {
              icon: <Users className="h-5 w-5 text-amber-400" />,
              label: "Happy Clients",
              value: "300+",
            },
            {
              icon: <Timer className="h-5 w-5 text-amber-400" />,
              label: "Years of Experience",
              value: "10+",
            },
            {
              icon: <ShieldCheck className="h-5 w-5 text-amber-400" />,
              label: "Uptime Guarantee",
              value: "99.8%",
            },
          ].map(({ icon, label, value }) => (
            <div
              key={label}
              className="flex flex-col items-start justify-center rounded-xl bg-white/10 p-4 ring-1 ring-white/10 backdrop-blur-sm"
            >
              <div className="flex items-center gap-2 text-white/80 mb-1">
                {icon}
                <span className="text-sm">{label}</span>
              </div>
              <div className="text-2xl font-semibold text-white">{value}</div>
            </div>
          ))}
        </div>
      </motion.div>

      {/* Bottom gradient fade */}
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-24 bg-linear-to-b from-transparent to-white" />
    </section>
  );
}
