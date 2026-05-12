import { Building2, Zap, CheckCircle2 } from "lucide-react";

const RWASubsidySection = () => {


  return (
    <>
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">

          {/* Top Heading */}
          <div className="max-w-5xl text-center mx-auto ">
            <h2 className="text-3xl md:text-4xl font-bold text-[#FC763A] leading-tight">
              Subsidy for Residential Societies <br />
              (RWA / Group Housing)
            </h2>

            <p className="mt-6 text-gray-600 text-lg leading-relaxed">
              For common facilities in apartments and housing societies
              including lifts, water pumps, and lighting systems.
            </p>
          </div>

          {/* Divider */}
          <div className="w-full h-px bg-gray-200 my-12"></div>

          {/* Subsidy Highlight */}
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-8">

            <div>
              <p className="text-gray-500 mb-2">Subsidy Structure</p>

              <h3 className="text-4xl md:text-5xl font-bold text-[#FC763A]">
                ₹18,000
                <span className="text-lg text-gray-500 font-medium"> / kW</span>
              </h3>
            </div>

            <div className="text-gray-700 text-lg">
              Applicable for systems up to{" "}
              <span className="font-semibold text-gray-900">
                500 kW capacity
              </span>
            </div>

          </div>

          {/* Divider */}
          <div className="w-full h-px bg-gray-200 my-12"></div>

          {/* Bottom Content */}
          <div className="grid md:grid-cols-2 gap-8">

            {/* Designed For */}
            <div className="bg-white border text-center border-orange-200 rounded-2xl p-8 shadow-lg md:hover:-translate-y-1 shadow-orange-500/10 hover:shadow-xl transition-all">
              <div className="w-14 h-14 bg-orange-50 border border-orange-100 text-[#FC763A] rounded-xl flex items-center justify-center mx-auto mb-6">
                <Building2 className="w-7 h-7" />
              </div>
              <h4 className="text-gray-900 font-extrabold text-xl mb-6">
                Specifically Designed For
              </h4>

              <ul className="space-y-3 text-gray-700 text-lg mx-auto text-left inline-block">
                <li className="flex items-center gap-3">
                  <CheckCircle2 className="w-5 h-5 text-[#FC763A]" /> Apartment complexes
                </li>
                <li className="flex items-center gap-3">
                  <CheckCircle2 className="w-5 h-5 text-[#FC763A]" /> Gated communities
                </li>
                <li className="flex items-center gap-3">
                  <CheckCircle2 className="w-5 h-5 text-[#FC763A]" /> Housing societies
                </li>
              </ul>
            </div>

            {/* Reduces Cost */}
            <div className="bg-white border text-center border-orange-200 rounded-2xl p-8 shadow-lg md:hover:-translate-y-1 shadow-orange-500/10 hover:shadow-xl transition-all">
              <div className="w-14 h-14 bg-orange-50 border border-orange-100 text-[#FC763A] rounded-xl flex items-center justify-center mx-auto mb-6">
                <Zap className="w-7 h-7" />
              </div>
              <h4 className="text-gray-900 font-extrabold text-xl mb-6">
                Significantly Reduces Cost Of
              </h4>

              <ul className="space-y-3 text-gray-700 text-lg mx-auto text-left inline-block">
                <li className="flex items-center gap-3">
                  <CheckCircle2 className="w-5 h-5 text-[#FC763A]" /> Common lighting
                </li>
                <li className="flex items-center gap-3">
                  <CheckCircle2 className="w-5 h-5 text-[#FC763A]" /> Elevators
                </li>
                <li className="flex items-center gap-3">
                  <CheckCircle2 className="w-5 h-5 text-[#FC763A]" /> Water systems
                </li>
              </ul>
            </div>

          </div>

        </div>
      </section>
     <section className="py-8 bg-white">
      <div className="max-w-7xl mx-auto px-4">

        {/* Heading */}
        <h2 className="text-xl md:text-2xl text-center font-semibold text-[#686868] mb-6">
          Cost & Savings for Societies
        </h2>

        {/* One Line Content */}
        <div className="flex flex-wrap justify-center items-center gap-x-4 gap-y-4 text-sm md:text-base font-semibold">

          <span className="bg-orange-50 text-orange-900 px-5 py-2.5 rounded-full border border-orange-200 shadow-sm">
            Reduction in monthly maintenance charges
          </span>

          <span className="bg-orange-50 text-orange-900 px-5 py-2.5 rounded-full border border-orange-200 shadow-sm">
            Lower common electricity bills
          </span>

          <span className="bg-[#FC763A] text-white px-5 py-2.5 rounded-full shadow-sm">
            Payback period: <span className="font-extrabold">3–5 years</span>
          </span>

          <span className="bg-orange-50 text-orange-900 px-5 py-2.5 rounded-full border border-orange-200 shadow-sm">
            Long-term savings shared across residents
          </span>

        </div>

      </div>
    </section>
    </>
  );
};

export default RWASubsidySection;