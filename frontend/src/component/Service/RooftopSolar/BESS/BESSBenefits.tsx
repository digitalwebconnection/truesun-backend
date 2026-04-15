

export default function BESSBenefits() {
  const benefits = [
    {
      title: "Energy Independence",
      desc: "Reduce your dependence on the grid by storing excess solar generation and using it when you need it most — evenings, peak-tariff hours, or during outages.",
      highlight: "↑ Self-consumption up to 90%",
      img: "https://www.shutterstock.com/image-photo/rooftop-solar-panels-on-house-260nw-2470903229.jpg",
    },
    {
      title: "Lower Electricity Bills",
      desc: "Avoid purchasing expensive grid power during peak-demand hours. By drawing from your battery bank instead, your electricity costs drop significantly every month.",
      highlight: "↓ Grid imports reduced up to 40%",
      img: "https://enerparc.in/wp-content/uploads/2025/11/Solar-panels-in-the-background-with-plant-from-coins-showing-solar-cost-savings.jpg",
    },
    {
      title: "Backup Power During Outages",
      desc: "Keep critical loads running even when the grid fails. BESS acts as an automatic backup, switching seamlessly to stored power with near-zero downtime.",
      highlight: "Seamless switchover < 20ms",
      img: "https://samlexamerica.com/wp-content/uploads/2022/03/collage-1024x395.jpg",
    },
    {
      title: "Peak Demand Shaving",
      desc: "Commercial consumers are billed heavily for peak demand charges. BESS intelligently discharges during demand spikes, reducing your maximum demand and trimming your tariff slab.",
      highlight: "↓ Demand charges cut significantly",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS_3dMtH01_1G9-rTkOkrHb9RH0qevEgGcxBQ&s",
    },
    {
      title: "Maximise Solar ROI",
      desc: "Without storage, surplus solar energy is lost or sold at low Feed-in Tariff rates. With BESS, every unit your panels generate is put to work — dramatically improving your payback period.",
      highlight: "↑ ROI improved by up to 30%",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQsS9I2eJr6Qf6V5y3sqtFRY8kNUVXCZv9vkw&s",
    },
    {
      title: "Greener Carbon Footprint",
      desc: "By consuming more of your own clean solar energy and reducing grid dependency, BESS helps you cut scope-2 carbon emissions — supporting your ESG and sustainability targets.",
      highlight: "Zero-emission stored energy",
      img: "https://www.energymatters.com.au/wp-content/uploads/2024/08/solar-panels-and-carbon-reduction1.jpg",
    },
  ];

  return (
    <section className="bg-white py-16 px-6 md:px-16">
      <div className="max-w-7xl mx-auto">

        {/* Heading */}
        <div className="mb-12 max-w-4xl text-center mx-auto">
          <h4 className="text-sm text-[#FC763A] font-semibold tracking-wide mb-2">
            KEY BENEFITS
          </h4>

          <h2 className="text-3xl md:text-4xl font-bold text-[#686868] mb-4">
            Why Add Battery Storage to Your Solar System
          </h2>

          <p className="text-gray-600 text-lg">
            A BESS transforms your solar installation from a daytime-only asset
            into a round-the-clock energy powerhouse.
          </p>
{/* 
          <div className="w-16 h-1 bg-yellow-400 mt-4"></div> */}
        </div>

        {/* Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((item, index) => (
            <div
              key={index}
              className="group relative border border-black/20 rounded-xl p-6 overflow-hidden transition duration-300 hover:shadow-lg"
            >
              {/* Hover Background Image */}
              <div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-300"
                style={{
                  backgroundImage: `url(${item.img})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
              ></div>

              {/* Dark Overlay */}
              <div className="absolute inset-0 bg-[#000000]/40 opacity-0 group-hover:opacity-100 transition duration-300"></div>

              {/* Content */}
              <div className="relative z-10 transition duration-300 group-hover:text-white">
                <h3 className="text-xl text-[#FC763A]  group-hover:text-white font-semibold mb-3">
                  {item.title}
                </h3>

                <p className="text-sm mb-4 leading-relaxed">
                  {item.desc}
                </p>

                <p className="font-semibold bottom-0 text-sm text-[#1D3F84] group-hover:text-[#FC763A]">
                  {item.highlight}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}