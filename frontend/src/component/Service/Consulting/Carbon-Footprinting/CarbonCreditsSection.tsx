import { motion } from "framer-motion";
import { Leaf, Globe, BarChart3 } from "lucide-react";

export default function CarbonCreditsSection() {
  return (
    <section
      className="relative overflow-hidden py-10"
      style={{
        backgroundImage:
          "url('https://www.mitconindia.com/wp-content/uploads/2025/09/Carbon-Credit.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundAttachment: "fixed", // 🔥 KEY PART (parallax)
      }}
    >
      {/* DARK OVERLAY */}
      <div className="absolute inset-0 bg-black/55" />

      {/* GRADIENT OVERLAY */}
      {/* <div className="absolute inset-0 bg-gradient-to-b from-black via-black/80 to-black" /> */}

      <div className="relative max-w-7xl mx-auto px-6">

        {/* EXTRA TOP SPACING (for scroll feel) */}
        {/* <div className="h-20" /> */}

        {/* HEADER */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl"
        >
          <div className="inline-flex items-center gap-2 bg-white/10 px-4 py-1 rounded-full text-sm text-white backdrop-blur">
            <Leaf className="h-4 w-4 text-[#FC763A]" />
            Carbon Markets • Verified Offsets
          </div>

          <h2 className="mt-4 text-1xl sm:text-5xl font-bold text-white leading-tight">
            Carbon Credits: Offset What You Cannot Reduce
          </h2>

          <p className="mt-5 text-lg text-slate-300">
            Carbon credits enable businesses to offset emissions that cannot be immediately eliminated. Each credit represents one metric ton of CO₂ reduced, avoided, or removed from the atmosphere.
          </p>

          <p className="mt-4 text-slate-400">
            At TrueSun, we help you source high-quality carbon credits across multiple project types and global markets—aligned with your sustainability goals.
          </p>
        </motion.div>

        {/* CARDS */}
        <div className="mt-8 grid md:grid-cols-3 gap-6">
          {[
            {
              icon: Globe,
              title: "Global Projects",
              desc: "Access carbon credits from renewable, forestry, and climate projects worldwide.",
            },
            {
              icon: BarChart3,
              title: "Verified Impact",
              desc: "Each credit represents measurable and verified carbon reduction.",
            },
            {
              icon: Leaf,
              title: "Tailored Strategy",
              desc: "Custom sourcing aligned with your ESG goals and sustainability roadmap.",
            },
          ].map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className="bg-white/10 backdrop-blur-md border border-white/20 p-4 rounded-2xl hover:border-[#FC763A]/50 transition"
            >
              <item.icon className="h-6 w-6 text-[#FC763A]" />
              <h3 className="mt-4 text-xl font-semibold text-white">
                {item.title}
              </h3>
              <p className="mt-2 text-slate-400 text-sm">
                {item.desc}
              </p>
            </motion.div>
          ))}
        </div>

        

       

      </div>
    </section>
  );
}