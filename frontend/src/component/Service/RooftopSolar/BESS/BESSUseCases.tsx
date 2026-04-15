
const useCases = [
  {
    id: "01",
    title: "Commercial & Industrial Facilities",
    description:
      "Factories, warehouses, and offices with high daytime consumption and significant demand charges benefit the most from BESS — using stored energy to shave peaks and reduce tariff costs.",
    tag: "High ROI",
  },
  {
    id: "02",
    title: "Residential Buildings & Housing Societies",
    description:
      "Housing societies and bungalows with rooftop solar can eliminate reliance on diesel generators and grid during outages, while significantly cutting common-area electricity costs.",
    tag: "Backup Power",
  },
  {
    id: "03",
    title: "Hospitals & Healthcare Facilities",
    description:
      "Critical loads like ICUs, OTs, and life support systems require uninterrupted power. BESS ensures instantaneous backup with sub-20ms switchover — more reliable than any generator.",
    tag: "Mission Critical",
  },
  {
    id: "04",
    title: "Educational Institutions & Campuses",
    description:
      "Schools, colleges, and university campuses with expansive rooftops can store daytime solar generation and use it during evenings for lighting, labs, and common facilities.",
    tag: "Cost Saving",
  },
];

export default function BESSUseCases() {
  return (
    <section className="bg-white py-16 px-6 md:px-10">
      <div className="max-w-7xl mx-auto">

        {/* Heading */}
        <div className="mb-12 text-center">
          <h4 className="text-sm text-[#FC763A] font-semibold tracking-wide mb-2">
            WHO IT'S FOR
          </h4>

          <h2 className="text-3xl md:text-4xl font-bold text-[#686868] mb-4">
            Ideal Use Cases
          </h2>

          <p className="text-gray-600 max-w-2xl mx-auto">
            BESS delivers maximum value across a wide range of rooftop solar applications.
          </p>


        </div>

        {/* List Layout */}
        <div className="divide-y">

          {useCases.map((item) => (
            <div
              key={item.id}
              className="py-8 grid md:grid-cols-12 gap-6 items-start"
            >
              {/* Number */}
              <div className="md:col-span-2 text-[#1D3F84] font-bold text-lg">
                {item.id}
              </div>

              {/* Content */}
              <div className="md:col-span-8">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {item.title}
                </h3>

                <p className="text-gray-600 leading-relaxed">
                  {item.description}
                </p>
              </div>

              {/* Tag */}
              <div className="md:col-span-2 md:text-right">
                <span className="inline-block bg-[#FC763A] text-white text-sm font-medium px-3 py-1 rounded-md">
                  {item.tag}
                </span>
              </div>
            </div>
          ))}

        </div>

      </div>
    </section>
  );
}