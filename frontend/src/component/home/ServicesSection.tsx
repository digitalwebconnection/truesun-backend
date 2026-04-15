import { motion } from "framer-motion";
import {
  Sun,
  Home,
  Building2,
  Landmark,
  Gauge,
  ChevronRight,
} from "lucide-react";

const DEFAULT_PALETTE = {
  primary: "#ED2800", // brand red
  accent: "#FFC527",  // brand yellow
  dark: "#071B0F",    // brand dark
};

const SERVICES = [
  {
    title: "Residential Rooftop Systems",
    desc: "High-performance residential rooftop solar systems designed for faster installation, consistent power generation, and long-term household savings.",
    icon: Home,
  },
  {
    title: "Commercial Rooftop Projects",
    desc: "Scalable commercial rooftop solar projects engineered to deliver strong ROI, energy stability, and reduced operating costs for businesses.",
    icon: Building2,
  },
  {
    title: "Industrial & MW Solutions",
    desc: "MW-scale solar solutions built for industrial environments, focusing on efficiency, reliability, and long-term operational performance.",
    icon: Gauge,
  },
  {
    title: "Govt. Subsidy Assistance",
    desc: "Complete subsidy assistance from documentation to approval ensuring smooth access to central and state solar incentive schemes.",
    icon: Landmark,
  },

];

const fadeUp = {
  hidden: { opacity: 0, y: 18 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.05, duration: 0.45 },
  }),
};

export default function ServicesSection({
  palette = DEFAULT_PALETTE,
  title = "Our Solar Services",
  subtitle = "Complete Solar Solutions for Homes, Businesses & Industries",
}) {
  const { primary, accent, dark } = palette;

  return (
    <section className="relative bg-white py-6 md:py-10">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <div className="text-center">

          <h2
            className="mt-3 text-3xl md:text-5xl font-bold tracking-tight"
            style={{ color: dark }}
          >
            {title}
          </h2>
          {subtitle && (
            <p className="mt-3 text-base md:text-xl text-gray-600 max-w-3xl mx-auto">
              {subtitle}
            </p>
          )}
        </div>

        {/* Grid */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {SERVICES.map((s, i) => {
            const Icon = s.icon || Sun;
            return (
              <motion.div
                key={s.title}
                custom={i}
                variants={fadeUp}
                className="relative flex flex-col justify-between rounded-2xl bg-white border border-gray-500/50 shadow-black/20 hover:shadow-orange-300/80 shadow-xl p-4 md:p-5 transition-all duration-300  hover:-translate-y-1"
              >
                {/* Icon + Text */}
                <div>
                  <div
                    className="h-12 w-12 rounded-lg flex items-center justify-center text-white shadow-md"
                    style={{
                      backgroundImage: `linear-gradient(135deg, ${primary}, ${accent})`,
                    }}
                  >
                    <Icon className="h-6 w-6" />
                  </div>

                  <h3
                    className="mt-4 text-lg font-semibold"
                    style={{ color: dark }}
                  >
                    {s.title}
                  </h3>
                  <p className="mt-2 text-sm leading-6 text-gray-600">
                    {s.desc}
                  </p>
                </div>

                {/* "Learn More" fixed at bottom */}
                <div className="mt-6 pt-4 border-t border-gray-100">
                  <a
                    href="#contact"
                    className="inline-flex items-center gap-2 text-sm font-medium"
                    style={{ color: primary }}
                  >
                    Learn More
                    <ChevronRight className="h-4 w-4" />
                  </a>
                </div>

                {/* Hover Glow Effect */}
                <span
                  aria-hidden
                  className="pointer-events-none absolute inset-0 rounded-2xl opacity-0 hover:opacity-100 transition-opacity duration-300"
                  style={{
                    background: `radial-gradient(320px 120px at 20% 10%, ${primary}0F, transparent 60%), radial-gradient(320px 120px at 80% 90%, ${accent}12, transparent 60%)`,
                  }}
                />
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
