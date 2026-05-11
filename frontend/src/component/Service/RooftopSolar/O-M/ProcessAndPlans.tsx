import { useState } from "react";
import LeadPopup from "../../../LeadPopup";
import CtaPopup from "../../../CtaPopup";

export default function ProcessAndPlans() {
  // function setOpenLeadPopup(_arg0: boolean): void {
  //   throw new Error("Function not implemented.");
  // }
  // }
  const [openLeadPopup, setOpenLeadPopup] = useState(false);
  const [openCtaPopup, setOpenCtaPopup] = useState(false);
  return (
    <section className="bg-[#F8FAFC] py-20 px-6 md:px-16">
      <div className="max-w-7xl mx-auto">

        {/* Heading */}
        <div className="text-center mb-16">
          <h4 className="text-[#FC763A] font-semibold tracking-widest mb-3">
            HOW IT WORKS
          </h4>
          <h2 className="text-3xl md:text-5xl font-bold text-[#686868]">
            Our Service Process
          </h2>
          <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
            Simple, transparent, and designed to maximise your solar performance.
          </p>
        </div>

        {/* Steps */}
        <div className="grid md:grid-cols-4 gap-8 mb-10">

          {[
            {
              step: "STEP / 01",
              title: "Site Assessment",
              desc: "We conduct a thorough evaluation of your existing rooftop solar system to understand its capacity, condition, and specific requirements.",
            },
            {
              step: "STEP / 02",
              title: "Plan Selection",
              desc: "Based on your needs and budget, we recommend the most suitable O&M plan — Preventive or Comprehensive — with a customised service schedule.",
            },
            {
              step: "STEP / 03",
              title: "Scheduled Servicing",
              desc: "Our certified technicians perform planned maintenance visits as per the agreed schedule, covering all tasks defined in your selected plan.",
            },
            {
              step: "STEP / 04",
              title: "Reporting & Review",
              desc: "After every service visit, you receive a detailed report. We continuously track system performance and provide insights to maximise your ROI.",
            },
          ].map((item, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-2xl shadow-md hover:shadow-xl transition"
            >
              <p className="text-sm text-[#FC763A] font-semibold mb-2">
                {item.step}
              </p>
              <h3 className="text-xl font-bold text-[#686868] mb-3">
                {item.title}
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                {item.desc}
              </p>
            </div>
          ))}
        </div>

        {/* Plan Comparison */}
        <div className="pb-8">
          <div className="p-8 mb-6">
            <h3 className="text-2xl md:text-3xl font-bold text-[#FC763A] text-center">
              Plan Comparison
            </h3>
          </div>

          <div className="overflow-x-auto rounded-2xl shadow-xl border border-slate-200">
            <table className="w-full border-collapse text-sm md:text-base">
              {/* Header */}
              <thead>
                <tr>
                  {/* Aspect header - same gray-blue as column */}
                  <th className="text-left px-6 py-4 font-bold text-sm md:text-base bg-[#d6dfe8] text-[#1B2A4A] border-r border-white/50 w-[35%] rounded-tl-2xl">
                    Aspect
                  </th>
                  {/* Preventive header - white like column */}
                  <th className="px-6 py-4 font-bold text-sm md:text-base bg-white text-[#1B2A4A] border-r border-slate-200 w-[32.5%]">
                    Preventive
                  </th>
                  {/* Comprehensive header - blue like column */}
                  <th className="px-6 py-4 font-bold text-sm md:text-base bg-[#2d4a7a] text-white w-[32.5%] rounded-tr-2xl">
                    <span>Comprehensive</span>
                    <span className="ml-2 inline-block bg-[#FC763A] text-white text-[10px] md:text-xs font-bold px-2.5 py-0.5 rounded-full align-middle">
                      Recommended
                    </span>
                  </th>
                </tr>
              </thead>
              <tbody>
                {[
                  {
                    aspect: "Routine Inspections",
                    preventive: { type: "check", text: "4 visits/year" },
                    comprehensive: { type: "check", text: "4 visits/year" },
                  },
                  {
                    aspect: "Module Cleaning",
                    preventive: { type: "check", text: "Basic" },
                    comprehensive: { type: "check", text: "18 visits/year" },
                  },
                  {
                    aspect: "Fault Repair",
                    preventive: { type: "cross", text: "Extra cost" },
                    comprehensive: { type: "check", text: "Included" },
                  },
                  {
                    aspect: "Component Replacement",
                    preventive: { type: "cross", text: "" },
                    comprehensive: { type: "check", text: "" },
                  },
                  {
                    aspect: "Emergency Services",
                    preventive: { type: "text", text: "₹1,800/visit" },
                    comprehensive: { type: "check", text: "Included" },
                  },
                  {
                    aspect: "Breakdown Response",
                    preventive: { type: "text", text: "Within 72 hrs" },
                    comprehensive: { type: "text", text: "Priority response" },
                  },
                  {
                    aspect: "Performance Monitoring",
                    preventive: { type: "check", text: "Periodic" },
                    comprehensive: { type: "text", text: "Continuous" },
                  },
                  {
                    aspect: "Reports & Analytics",
                    preventive: { type: "text", text: "Basic reports" },
                    comprehensive: { type: "text", text: "Detailed insights" },
                  },
                  {
                    aspect: "Corrective Maintenance",
                    preventive: { type: "cross", text: "" },
                    comprehensive: { type: "check", text: "" },
                  },
                  {
                    aspect: "System Optimization",
                    preventive: { type: "cross", text: "" },
                    comprehensive: { type: "check", text: "" },
                  },
                  {
                    aspect: "Annual Cost",
                    preventive: { type: "text", text: "₹20,000/year" },
                    comprehensive: { type: "text", text: "Higher (all-inclusive)" },
                  },
                  {
                    aspect: "Risk Coverage",
                    preventive: { type: "text", text: "Client bears risk" },
                    comprehensive: { type: "text", text: "Vendor bears risk" },
                  },
                  {
                    aspect: "Best For",
                    preventive: { type: "text", text: "Budget-conscious users" },
                    comprehensive: { type: "text", text: "Hassle-free performance" },
                  },
                ].map((row, i) => {
                  const isEven = i % 2 === 0;
                  const isLast = i === 12;
                  return (
                    <tr key={row.aspect}>
                      {/* Aspect column - consistent light gray-blue */}
                      <td
                        className={`text-left px-6 py-3.5 font-semibold text-[#1B2A4A] border-r border-white/50 border-b border-b-[#c5d0dc] ${
                          isEven ? "bg-[#e4eaf1]" : "bg-[#dbe2eb]"
                        } ${isLast ? "rounded-bl-2xl" : ""}`}
                      >
                        {row.aspect}
                      </td>
                      {/* Preventive column - consistent white */}
                      <td
                        className={`text-center px-6 py-3.5 border-r border-slate-200 border-b border-b-slate-100 bg-white`}
                      >
                        <CellContent data={row.preventive} />
                      </td>
                      {/* Comprehensive column - consistent lighter blue */}
                      <td
                        className={`text-center px-6 py-3.5 border-b border-b-[#3d5a8a] ${
                          isEven ? "bg-[#2d4a7a]" : "bg-[#345285]"
                        } ${isLast ? "rounded-br-2xl" : ""}`}
                      >
                        <CellContent data={row.comprehensive} dark />
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-wrap items-center justify-center gap-4 mt-8">
            <button
              onClick={() => setOpenLeadPopup(true)}
              className="border-2 border-[#1B2A4A] text-[#1B2A4A] font-semibold px-8 py-2.5 rounded-full hover:bg-[#1B2A4A] hover:text-white transition"
            >
              Choose Plan
            </button>
            <button
              onClick={() => setOpenCtaPopup(true)}
              className="bg-[#FC763A] text-white font-bold px-8 py-2.5 rounded-full hover:bg-orange-600 shadow-md transition hover:-translate-y-px"
            >
              Get Started
            </button>
          </div>
        </div>

      </div>
      {openLeadPopup && (
        <LeadPopup onClose={() => setOpenLeadPopup(false)} />
      )}
      {openCtaPopup && (
        <CtaPopup onClose={() => setOpenCtaPopup(false)} title="Please leave your details" />
      )}
    </section>
  );
}

function CellContent({
  data,
  dark,
}: {
  data: { type: string; text: string };
  dark?: boolean;
}) {
  if (data.type === "check") {
    return (
      <span className="inline-flex items-center justify-center gap-1.5">
        <span className="text-base text-emerald-400">✓</span>
        {data.text && (
          <span className={`text-sm font-medium ${dark ? "text-white" : "text-gray-700"}`}>
            {data.text}
          </span>
        )}
      </span>
    );
  }
  if (data.type === "cross") {
    return (
      <span className="inline-flex items-center justify-center gap-1.5">
        <span className={`text-base ${dark ? "text-red-400" : "text-red-500"}`}>✗</span>
        {data.text && (
          <span className={`text-sm font-medium ${dark ? "text-red-400" : "text-red-500"}`}>{data.text}</span>
        )}
      </span>
    );
  }
  return (
    <span className={`text-sm font-medium ${dark ? "text-white/90" : "text-gray-700"}`}>
      {data.text}
    </span>
  );
}