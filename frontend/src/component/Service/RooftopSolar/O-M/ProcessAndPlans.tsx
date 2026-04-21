import { useState } from "react";
import LeadPopup from "../../../LeadPopup";

export default function ProcessAndPlans() {
  // function setOpenLeadPopup(_arg0: boolean): void {
  //   throw new Error("Function not implemented.");
  // }
  const [openLeadPopup, setOpenLeadPopup] = useState(false);
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
        <div className="bg-white px-2 pb-8">
          <div className="p-8 border-b border-orange-100/50 mb-8">
            <h3 className="text-2xl md:text-3xl font-bold text-[#FC763A] text-center">
              Plan Comparison
            </h3>
          </div>

          <div className="grid md:grid-cols-3 text-center rounded-2xl shadow-md border border-orange-100 bg-white items-center">
            {/* Feature Column */}
            <div className="bg-orange-50/40 p-6 text-left h-full rounded-l-2xl">
              <p className="mb-6 text-xl font-bold text-gray-900">
                Aspect
              </p>

              <p className="mb-4 font-semibold text-gray-700">Routine checks</p>
              <p className="mb-4 font-semibold text-gray-700">Cleaning</p>
              <p className="mb-4 font-semibold text-gray-700">Fault repair</p>
              <p className="mb-4 font-semibold text-gray-700">Component replacement</p>
              <p className="mb-4 font-semibold text-gray-700">Cost</p>
              <p className="mb-4 font-semibold text-gray-700">Risk</p>
            </div>

            {/* Preventive Plan */}
            <div className="p-6 border-l border-orange-100 h-full flex flex-col justify-center">
              <h4 className="text-xl font-bold mb-6 text-gray-900">
                Preventive
              </h4>

              <p className="mb-4 text-emerald-500 font-bold text-lg">✔️</p>
              <p className="mb-4 text-emerald-500 font-bold text-lg">✔️</p>
              <p className="mb-4 text-rose-500 font-medium text-sm">✖️ Extra cost</p>
              <p className="mb-4 text-rose-500 font-bold text-lg">✖️</p>
              <p className="mb-4 text-gray-700 font-medium">Lower</p>
              <p className="mb-4 text-gray-700 font-medium">Client bears risk</p>

              <button
                onClick={() => setOpenLeadPopup(true)}
                className="mt-6 border-2 border-[#FC763A] text-[#FC763A] font-semibold px-5 py-2 rounded-full hover:bg-[#FC763A] hover:text-white transition"
              >
                Choose Plan
              </button>
            </div>

            {/* Comprehensive Plan - Highlighting as Premium Tiers typically are */}
            <div className="p-8 bg-orange-50 text-gray-900 md:scale-105 shadow-xl rounded-2xl relative z-10 flex flex-col justify-center border border-orange-200">
              <h4 className="text-2xl font-extrabold mb-6 text-[#FC763A]">
                Comprehensive
              </h4>

              <p className="mb-4 text-emerald-500 font-bold text-lg">✔️</p>
              <p className="mb-4 text-emerald-500 font-bold text-lg">✔️</p>
              <p className="mb-4 text-emerald-500 font-bold text-sm tracking-wide">✔️ INCLUDED</p>
              <p className="mb-4 text-emerald-500 font-bold text-lg">✔️</p>
              <p className="mb-4 text-gray-700 font-medium">Higher</p>
              <p className="mb-4 text-gray-700 font-medium">Vendor bears risk</p>

              <button
                onClick={() => setOpenLeadPopup(true)}
                className="mt-6 bg-[#FC763A] text-white font-bold px-6 py-3 rounded-full hover:bg-orange-600 shadow-md transition hover:-translate-y-px"
              >
                Get Started
              </button>
            </div>
          </div>
        </div>

      </div>
      {openLeadPopup && (
        <LeadPopup onClose={() => setOpenLeadPopup(false)} />
      )}
    </section>
  );
}