 

import { useState, useEffect } from "react";
import {
  Wrench,
  ClipboardList,
  CheckCircle2,
  Sun,
  Sparkles,
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const services = [
  {
    id: "projects",
    icon: <Sun className="w-8 h-8 text-[#FC763A]" />,
    title: "End-to-End Solar EPC Solutions",
    desc: "Turnkey rooftop solar EPC services delivering safe, compliant, and reliable installations for homes, housing societies, commercial buildings, and industries.",
    features: [
      "Structural Design & Engineering",
      "Net Metering & Subsidy Approvals",
      "Installation & Quality Testing",
      "App-based Monitoring Setup",
    ],
    gradient: "from-amber-50 to-orange-100",
  },
  {
    id: "om",
    icon: <Wrench className="w-8 h-8 text-emerald-600" />,
    title: "Solar O&M Solutions",
    desc: "Comprehensive solar O&M services focused on performance monitoring, preventive maintenance, and maximum system uptime protecting your solar investment over its entire lifecycle.",
    features: [
      "Monthly Plant Audits & Cleaning",
      "Performance Monitoring & Alerts",
      "Inverter & PR Optimization",
      "24×7 Remote Support",
    ],
    gradient: "from-emerald-50 to-green-200",
  },
  {
    id: "advisory",
    icon: <ClipboardList className="w-8 h-8 text-purple-600" />,
    title: "Strategic ESG & Net-Zero Advisory Services",
    desc: "A strategic ESG and net-zero advisory helping organizations manage carbon risk, meet compliance requirements, and create long-term sustainable value through structured climate strategies.",
    features: [
      "Carbon Footprint Assessment",
      "Renewable CSR Project Design",
      "Net-Zero Roadmap Planning",
      "ESG Data & Compliance Support",
    ],
    gradient: "from-purple-50 to-pink-100",
  },
];

export default function SolarServicesShowcase() {
  const [active, setActive] = useState("projects");

  // 🌀 Auto-scroll every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setActive((prev) => {
        const currentIndex = services.findIndex((s) => s.id === prev);
        const nextIndex = (currentIndex + 1) % services.length;
        return services[nextIndex].id;
      });
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative py-10 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-0">
        {/* Section Header */}
        <div className="text-center mb-12">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 rounded-full border-black/20 border-2 bg-orange-200 px-6 py-1 text-sm shadow-2xl shadow-black font-semibold text-orange-700"
          >
            <Sparkles className="w-4 h-4" /> What We Do
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="mt-4 text-4xl  max-w-4xl mx-auto md:text-5xl font-bold text-gray-900"
          >
            Complete Solar Solutions for Commercial & Industrial Projects
          </motion.h2>
          <p className="mt-3 text-gray-600 max-w-7xl mx-auto">
       An end-to-end solar solutions ecosystem covering EPC, operations & maintenance, consultancy, and net-zero advisory designed to grow alongside your business and sustainability goals.
          </p>
        </div>

        {/* Tabs */}
        <div className="flex justify-center flex-wrap gap-3 mb-10">
          {services.map((srv) => (
            <button
              key={srv.id}
              onClick={() => setActive(srv.id)}
              className={`px-5 py-2 rounded-full text-sm font-semibold transition-all ${
                active === srv.id
                  ? "bg-[#FC763A] text-white shadow-md"
                  : "bg-white border border-gray-500 hover:bg-orange-50 text-gray-800"
              }`}
            >
              {srv.title.split(" ")[0]}
            </button>
          ))}
        </div>

        {/* Animated Panel */}
        <div className="relative">
          <AnimatePresence mode="wait">
            {services
              .filter((s) => s.id === active)
              .map((service) => (
                <motion.div
                  key={service.id}
                  initial={{ opacity: 0, y: 40 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -40 }}
                  transition={{ duration: 0.5 }}
                  className={`rounded-3xl shadow-2xl border-black/10 border-2 bg-linear-to-br ${service.gradient}  p-8 md:p-10 flex flex-col md:flex-row items-center gap-8`}
                >
                  {/* Left Side */}
                  <div className="flex-1 space-y-5">
                    <div className="flex items-center gap-3">
                      {service.icon}
                      <h3 className="text-2xl font-bold text-gray-900">
                        {service.title}
                      </h3>
                    </div>
                    <p className="text-gray-700 leading-relaxed">
                      {service.desc}
                    </p>

                    <ul className="space-y-3">
                      {service.features.map((f, i) => (
                        <li
                          key={i}
                          className="flex items-center gap-2 text-gray-800"
                        >
                          <CheckCircle2 className="w-4 h-4 text-emerald-500" />
                          <span>{f}</span>
                        </li>
                      ))}
                    </ul>

                    <div className="pt-4">
                      <a
                        href="#contact"
                        className="inline-block bg-[#FC763A] hover:bg-[#fc763a] text-white font-semibold rounded-full px-6 py-2 shadow-md transition"
                      >
                        Book a Free Consultation →
                      </a>
                    </div>
                  </div>

                  {/* Right Side Illustration */}
                  <motion.div
                    initial={{ scale: 0.9, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ delay: 0.3 }}
                    className="flex-1 flex justify-center"
                  >
                    <img
                      src={
                        service.id === "projects"
                          ? "https://www.solarpvmart.com/images/blogs/5/blog5.jpg"
                          : service.id === "om"
                          ? "https://5.imimg.com/data5/SELLER/Default/2025/6/523240803/NJ/SY/MW/181246029/solar-plant-maintenance-service.png"
                          : service.id === "consulting"
                          ? "https://waaree.com/wp-content/uploads/2024/03/solar_inverter_765a2184e3.jpg"
                          : "https://plus.unsplash.com/premium_photo-1682148026899-d21f17c04e80?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8c29sYXIlMjBwYW5lbHxlbnwwfHwwfHx8MA%3D%3D&fm=jpg&q=60&w=3000"
                      }
                      alt={service.title}
                      className="rounded-xl shadow-2xl shadow-black object-cover w-full h-[280px] md:h-[340px]"
                    />
                  </motion.div>
                </motion.div>
              ))}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
