const RWASubsidySection = () => {


  return (
    <>
      <section className="py-20 bg-white">
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
          <div className="grid md:grid-cols-2 gap-16">

            {/* Designed For */}
            <div>
              <h4 className="text-gray-900 font-semibold text-lg mb-6">
                This is specifically designed for
              </h4>

              <ul className="space-y-4 text-gray-700 text-lg">
                <li>Apartment complexes</li>
                <li>Gated communities</li>
                <li>Housing societies</li>
              </ul>
            </div>

            {/* Reduces Cost */}
            <div>
              <h4 className="text-gray-900 font-semibold text-lg mb-6">
                This significantly reduces the cost of powering
              </h4>

              <ul className="space-y-4 text-gray-700 text-lg">
                <li>Common lighting</li>
                <li>Elevators</li>
                <li>Water systems</li>
              </ul>
            </div>

          </div>

        </div>
      </section>
     <section className="py-10 bg-white">
      <div className="max-w-7xl mx-auto px-4">

        {/* Heading */}
        <h2 className="text-xl md:text-2xl text-center font-semibold text-[#686868] mb-6">
          Cost & Savings for Societies
        </h2>

        {/* One Line Content */}
        <div className="flex flex-wrap items-center gap-x-6 gap-y-4 text-gray-700 text-sm md:text-base">

          <span>Reduction in monthly maintenance charges</span>

          <span className="text-gray-300">|</span>

          <span>Lower common electricity bills</span>

          <span className="text-gray-300">|</span>

          <span>
            Payback period: <span className="text-[#FC763A] font-semibold">3–5 years</span>
          </span>

          <span className="text-gray-300">|</span>

          <span>Long-term savings shared across residents</span>

        </div>

      </div>
    </section>
    </>
  );
};

export default RWASubsidySection;