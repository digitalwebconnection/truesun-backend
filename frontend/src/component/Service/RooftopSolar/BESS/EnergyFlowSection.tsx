

const steps = [
    {
        title: "Solar Panels Generate Power",
        desc: "Rooftop panels convert sunlight into DC electric power throughout the day.",
    },
    {
        title: "Inverter Converts & Controls",
        desc: "A hybrid inverter manages power flow between panels, batteries, loads, and grid.",
    },
    {
        title: "Surplus Energy Stored",
        desc: "Excess generation is stored in the battery bank for later use instead of being wasted.",
    },
    {
        title: "Loads Powered from Battery",
        desc: "During low solar hours or outages, stored energy powers your building's loads automatically.",
    },
    {
        title: "Smart Monitoring & Management",
        desc: "An intelligent BMS tracks charge cycles, health, and optimises performance in real time.",
    },
];

export default function EnergyFlowSection() {
    return (
        <section className="bg-white py-16 px-6 md:px-16">
            <div className="max-w-7xl mx-auto">

                {/* Heading */}
                <div className="text-center mb-12">
                    <h4 className="text-sm text-[#FC763A] font-semibold tracking-wide mb-2">
                        THE ENERGY FLOW
                    </h4>

                    <h2 className="text-3xl md:text-4xl font-bold text-[#686868] mb-4">
                        Smart Energy. Seamlessly Managed.
                    </h2>

                    <p className="text-gray-600 max-w-5xl mx-auto">
                        Your rooftop solar system and BESS work together in a smart,
                        automated loop — ensuring energy is always available exactly where it's needed.
                    </p>
                </div>

                {/* Steps */}
                <div className="relative">

                    {/* Vertical Line */}
                    <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-0.5 bg-gray-900 transform -translate-x-1/2"></div>

                    <div className="space-y-2">
                        {steps.map((step, index) => (
                            <div
                                key={index}
                                className={`flex flex-col md:flex-row items-center gap-6 ${index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                                    }`}
                            >
                                {/* Content Box */}
                                <div className="md:w-1/2 bg-gray-50 p-6 rounded-xl border border-gray-900/20 shadow-xl">
                                    <h3 className="text-lg font-semibold text-gray-900 mb-2">
                                        {step.title}
                                    </h3>
                                    <p className="text-gray-600">{step.desc}</p>
                                </div>

                                {/* Step Number */}
                                <div className="z-10 w-10 h-10 flex items-center justify-center rounded-full bg-[#FC763A] text-white font-bold shadow">
                                    {index + 1}
                                </div>

                                {/* Spacer */}
                                <div className="md:w-1/2"></div>
                            </div>
                        ))}
                    </div>
                </div>

            </div>
        </section>
    );
}