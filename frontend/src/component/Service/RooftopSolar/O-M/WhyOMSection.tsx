import {
  Zap,
  ShieldCheck,
  Wrench,
  MapPin,
} from "lucide-react";

const data = [
  {
    title: "EPC Experts Who Know Your System",
    text: "As a full-service Solar EPC company, we designed and built systems like yours. Our O&M team uses the same engineering depth — nobody knows rooftop solar better.",
    icon: <Wrench size={18} />,
  },
  {
    title: "Maximise Energy Yield",
    text: "Even minor soiling or component degradation can cut output significantly. Our proactive maintenance ensures your panels always generate at optimal capacity.",
    icon: <Zap size={18} />,
  },
  {
    title: "Warranty & Compliance Protection",
    text: "Regular documented maintenance helps you stay compliant with warranty requirements and avoid costly claim rejections due to negligence.",
    icon: <ShieldCheck size={18} />,
  },
  {
    title: "Local Presence, Swift Response",
    text: "With technicians positioned close to your site, we ensure fast dispatch and minimal downtime whenever a fault is detected or reported.",
    icon: <MapPin size={18} />,
  },
];

export default function WhyOMSection() {
  return (
    <section className="bg-white py-24 px-6 md:px-16">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-start">

        {/* LEFT SIDE */}
        <div>
          <h4 className="text-sm tracking-widest text-[#FC763A] font-semibold mb-3 uppercase">
            WHY O&M FROM TRUESUN
          </h4>

          <h2 className="text-3xl md:text-5xl font-bold text-gray-900 leading-tight mb-6">
            Protecting Your <span className="text-[#FC763A]">Solar Investment</span>
          </h2>

          <p className="text-gray-600 text-lg leading-relaxed">
            A strategic maintenance approach that ensures maximum efficiency,
            long-term performance, and complete peace of mind for your solar system.
          </p>

          {/* Highlight Box */}
          <div className="mt-8 p-5 rounded-2xl bg-[#FC763A]/10 border border-[#FC763A]/30">
            <p className="text-sm text-gray-700">
              ⚡ <b>Smart O&M</b> = Higher generation + Lower downtime + Better ROI
            </p>
          </div>
        </div>

        {/* RIGHT SIDE TIMELINE */}
        <div className="relative">

          {/* Vertical Line */}
          <div className="absolute left-5 top-0 w-0.5 h-full bg-linear-to-b from-[#FC763A] to-transparent"></div>

          <div className="space-y-2">

            {data.map((item, index) => (
              <div key={index} className="relative pl-14 group">

                {/* Icon Circle */}
                <div className="absolute left-0 top-1 w-10 h-10 rounded-full bg-white border border-[#FC763A] flex items-center justify-center text-[#FC763A] shadow-md group-hover:bg-[#FC763A] group-hover:text-white transition">
                  {item.icon}
                </div>

                {/* Content */}
                <div className="bg-gray-50 p-5 rounded-2xl border border-gray-100 group-hover:shadow-lg transition-all duration-300">

                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    {item.title}
                  </h3>

                  <p className="text-sm text-gray-600 leading-relaxed">
                    {item.text}
                  </p>

                </div>

              </div>
            ))}

          </div>
        </div>

      </div>
    </section>
  );
}