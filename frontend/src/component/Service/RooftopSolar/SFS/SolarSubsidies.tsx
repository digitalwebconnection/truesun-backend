import { FaBolt, FaChartLine, FaUniversity, FaReceipt } from "react-icons/fa";

const GovBenefitsSection = () => {
  const points = [
    {
      icon: <FaUniversity />,
      text: "Central & state subsidies (for residential users)",
    },
    {
      icon: <FaBolt />,
      text: "Net metering benefits",
    },
    {
      icon: <FaChartLine />,
      text: "Accelerated depreciation (for businesses)",
    },
    {
      icon: <FaReceipt />,
      text: "Tax benefits (where applicable)",
    },
  ];

  return (
    <section className="py-14 bg-white">
      <div className="max-w-7xl mx-auto px-4">

        <div className="grid md:grid-cols-2 gap-16">

          {/* LEFT SIDE (HEADING STRIP) */}
          <div className="border-l-4 border-[#FC763A] pl-6 flex flex-col justify-center">
            <h2 className="text-3xl md:text-5xl font-bold text-gray-900 leading-tight">
              Government Subsidies <br /> & Benefits
            </h2>

            <p className="mt-6 text-gray-600 text-lg leading-relaxed">
              We help you take advantage of available solar incentives.
            </p>
          </div>

          {/* RIGHT SIDE (FLOW LIST) */}
          <div className="space-y-10">

            {points.map((item, index) => (
              <div key={index} className="flex items-start gap-5">

                {/* Icon */}
                <div className="text-[#FC763A] text-xl mt-1">
                  {item.icon}
                </div>

                {/* Text */}
                <p className="text-gray-800 text-lg leading-relaxed">
                  {item.text}
                </p>

              </div>
            ))}

          </div>

        </div>

        {/* DIVIDER */}
        <div className="w-full h-px bg-gray-200 my-16"></div>

        {/* BOTTOM TRUST LINE */}
        <div className="max-w-5xl">
          <p className="text-xl md:text-2xl text-gray-900 font-semibold leading-relaxed">
            Our team handles the complete documentation and approval process for you.
          </p>
        </div>

      </div>
    </section>
  );
};

export default GovBenefitsSection;