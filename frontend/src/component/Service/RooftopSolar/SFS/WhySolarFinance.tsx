import { motion } from 'framer-motion';
import { Wallet, Zap, BarChart3, CreditCard, ArrowRight } from 'lucide-react';

const SolarFinancing = () => {
  const benefits = [
    {
      title: "Zero Upfront Cost",
      description: "Start your green journey without the heavy initial burden. Go solar with $0 down options.",
      icon: <Wallet className="w-6 h-6" />,
      color: "bg-blue-500"
    },
    {
      title: "Immediate Savings",
      description: "Your monthly solar EMI is often lower than your current electricity bill. Save from month one.",
      icon: <Zap className="w-6 h-6" />,
      color: "bg-amber-500"
    },
    {
      title: "Rapid ROI",
      description: "With federal tax credits and energy offsets, most systems pay for themselves in 5-7 years.",
      icon: <BarChart3 className="w-6 h-6" />,
      color: "bg-emerald-500"
    },
    {
      title: "Flexible Plans",
      description: "Tailored payment schedules ranging from 5 to 20 years to fit your household budget.",
      icon: <CreditCard className="w-6 h-6" />,
      color: "bg-indigo-500"
    }
  ];

  return (
    <section className="py-14  overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">

        {/* --- Header Area --- */}
        <div className="text-center items-center mb-20">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-[#FC763A] font-bold tracking-widest uppercase text-sm mb-4">
              Financial Freedom
            </h2>
            <h3 className="text-4xl md:text-5xl font-extrabold text-slate-900 leading-tight">
              Why Solar Financing?
            </h3>
            <p className="mt-6 text-lg text-slate-600 leading-relaxed max-w-4xl mx-auto">
              Installing a rooftop solar system is a smart long-term investment.
              We bridge the gap between your sustainability goals and upfront costs
              with seamless credit solutions.
            </p>
          </motion.div>


        </div>

        {/* --- Benefits Grid --- */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {benefits.map((benefit, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              whileHover={{ y: -10 }}
              className="group p-8 bg-white rounded-3xl border border-slate-200 hover:border-orange-200 hover:shadow-2xl hover:shadow-orange-100 transition-all duration-300"
            >
              <div className={`w-14 h-14 rounded-2xl ${benefit.color} text-white flex items-center justify-center mb-8 shadow-lg group-hover:scale-110 transition-transform`}>
                {benefit.icon}
              </div>
              <h4 className="text-xl font-bold text-slate-900 mb-4">{benefit.title}</h4>
              <p className="text-slate-500 text-sm leading-relaxed mb-6">
                {benefit.description}
              </p>
              <div className="flex items-center text-[#FC763A] font-semibold text-sm cursor-pointer group-hover:gap-2 transition-all">
                Learn More <ArrowRight className="w-4 h-4 ml-1" />
              </div>
            </motion.div>
          ))}
        </div>

        {/* --- Bottom CTA --- */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <button className="bg-[#FC763A] text-white px-10 py-4 rounded-full font-bold hover:scale-105 transition-colors shadow-lg shadow-slate-300">
            Check Your Eligibility
          </button>
        </motion.div>

      </div>
    </section>
  );
};

export default SolarFinancing;