import { motion } from "framer-motion";
import { CheckCircle2, Home, Building2, ArrowRight } from "lucide-react";

const SolarEligibilitySection = () => {
  const steps = [
    { title: "Registration", desc: "Sign up on the National Solar Portal" },
    { title: "DISCOM Submission", desc: "Submit your local electricity details" },
    { title: "Technical Approval", desc: "Feasibility check by authorities" },
    { title: "Installation", desc: "Setup by an empanelled vendor" },
    { title: "Net Metering", desc: "Apply for grid synchronization" },
    { title: "Commissioning", desc: "Final inspection & system go-live" },
    { title: "Subsidy", desc: "Direct credit to your bank account" },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <section className="py-14  overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">

        {/* --- HEADER --- */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="max-w-2xl text-center mx-auto"
          >
            <h2 className="text-sm font-bold tracking-widest text-[#FC763A] uppercase mb-3">
              Get Started
            </h2>
            <h3 className="text-4xl md:text-6xl font-extrabold text-[#686868] tracking-tight">
              Eligibility & <span className="text-transparent bg-clip-text bg-[#FC763A]">Process.</span>
            </h3>
          </motion.div>

        </div>

        {/* --- ELIGIBILITY CARDS --- */}
        <div className="grid lg:grid-cols-2 gap-8 mb-24">
          {/* Individual Card */}
          <motion.div
            whileHover={{ y: -5 }}
            className="relative group p-8 bg-white border border-slate-200 rounded-3xl shadow-sm hover:shadow-xl transition-all duration-300"
          >
            <div className="flex items-center gap-4 mb-6">
              <div className="p-3 bg-orange-100 rounded-2xl text-[#FC763A]">
                <Home size={28} />
              </div>
              <h4 className="text-2xl font-bold text-slate-800">For Individuals</h4>
            </div>
            <ul className="space-y-4">
              {["Residential property owner", "Valid electricity connection", "Shadow-free rooftop space"].map((item, i) => (
                <li key={i} className="flex items-center gap-3 text-slate-600">
                  <CheckCircle2 className="text-green-500" size={20} />
                  {item}
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Society Card */}
          <motion.div
            whileHover={{ y: -5 }}
            className="relative group p-8 bg-slate-900 text-white rounded-3xl shadow-lg transition-all duration-300"
          >
            <div className="flex items-center gap-4 mb-6">
              <div className="p-3 bg-slate-800 rounded-2xl text-[#FC763A]">
                <Building2 size={28} />
              </div>
              <h4 className="text-2xl font-bold">For Societies / RWAs</h4>
            </div>
            <ul className="space-y-4">
              {["Registered housing association", "Common facility installation", "Approved vendor setup", "Grid-connected net metering"].map((item, i) => (
                <li key={i} className="flex items-center gap-3 text-slate-300">
                  <CheckCircle2 className="text-orange-400" size={20} />
                  {item}
                </li>
              ))}
            </ul>
          </motion.div>
        </div>

        {/* --- PROCESS TIMELINE --- */}
        <div className="">
          <div className=" gap-3 mb-12">

            <h4 className="text-2xl font-bold text-[#686868] text-center  uppercase tracking-wider">Application Journey</h4>
          </div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-y-12 gap-x-8"
          >
            {steps.map((step, index) => (
              <motion.div key={index} variants={itemVariants} className="relative group">
                {/* Numbering */}
                <div className="mb-4 flex items-center justify-between">
                  <span className="text-5xl font-black text-slate-500/30 group-hover:text-[#FC763A] transition-colors">
                    0{index + 1}
                  </span>
                  {index !== steps.length - 1 && (
                    <ArrowRight className="hidden lg:block text-slate-400 group-hover:translate-x-2 transition-transform" />
                  )}
                </div>
                {/* Content */}
                <h5 className="text-lg font-bold text-slate-900 mb-2">{step.title}</h5>
                <p className="text-slate-500 text-sm leading-relaxed">
                  {step.desc}
                </p>
                {/* Active Indicator Bar */}
                <div className="mt-4 h-1 w-0 group-hover:w-full bg-[#FC763A] transition-all duration-500 rounded-full"></div>
              </motion.div>
            ))}

            {/* CTA Final Step */}
            <motion.div
              variants={itemVariants}
              className="flex items-center justify-center p-6 bg-orange-50 rounded-2xl border-2 border-dashed border-[#FC763A]/50"
            >
              <p className="text-[#FC763A] font-semibold text-center">
                Ready to save up to 40%?
                <br />
                <span className="text-xs font-normal">Start your journey today.</span>
              </p>
            </motion.div>
          </motion.div>
        </div>

      </div>
    </section>
  );
};

export default SolarEligibilitySection;