
const services = [
  {
    title: "Site Survey & Energy Audit",
    desc: "We analyse your existing consumption patterns, load profiles, and solar generation data to determine the optimal battery capacity and system architecture for your site.",
  },
  {
    title: "System Design & Engineering",
    desc: "Our engineers design a fully integrated BESS solution — selecting the right battery chemistry (Lithium-Ion / LFP), BMS, hybrid inverter, and protection systems for your application.",
  },
  {
    title: "Supply & Installation",
    desc: "We source high-quality, certified battery systems and handle complete installation — civil work, cable routing, safety enclosures, and commissioning — all under one roof.",
  },
  {
    title: "Solar + BESS Integration",
    desc: "Seamless integration with your existing or new rooftop solar system. Our hybrid inverter setup ensures intelligent coordination between panels, batteries, loads, and the grid.",
  },
  {
    title: "Remote Monitoring & BMS",
    desc: "A built-in Battery Management System (BMS) continuously monitors state of charge, temperature, cell health, and cycle life — with real-time alerts and remote access via app or portal.",
  },
  {
    title: "AMC & After-Sales Support",
    desc: "Post-installation, we offer Annual Maintenance Contracts (AMC) to ensure long-term performance, warranty compliance, and proactive health checks on your battery system.",
  },
];

export default function OurScope() {
  return (
    <section className="bg-white py-10 px-6 md:px-8">
      <div className="max-w-7xl mx-auto">

        {/* Heading */}
        <div className="mb-10 text-center">
          <h4 className="text-sm text-[#FC763A] font-semibold tracking-wide mb-3">
            OUR SCOPE
          </h4>

          <h2 className="text-3xl md:text-4xl font-bold text-[#686868] mb-4">
            What TrueSun Delivers
          </h2>

          <p className="text-gray-600 max-w-2xl mx-auto">
            End-to-end BESS services — from feasibility to commissioning and beyond.
          </p>
        </div>

        {/* Timeline Style Layout */}
        <div className="relative border-l border-gray-500 pl-6 space-y-12">
          {services.map((item, index) => (
            <div key={index} className="relative">

              {/* Dot */}
              <div className="absolute -left-8 top-2 w-4 h-4 bg-[#FC763A] rounded-full"></div>

              {/* Content */}
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {item.title}
                </h3>

                <p className="text-gray-600 leading-relaxed">
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}