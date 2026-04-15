import { Sun,  CheckCircle } from 'lucide-react';

const IRECSection = () => {
    const services = [
        "Sourcing high-quality I-RECs",
        "Competitive pricing through strong market networks",
        "Support with documentation and retirement",
        "Integration into your broader sustainability strategy"
    ];

    return (
        <section className="bg-white py-4 px-6 overflow-hidden">
            <div className="max-w-7xl mx-auto">
                <div className="flex flex-col lg:flex-row gap-6 items-start">

                    {/* Left Side: Content */}
                    <div className="lg:w-1/2 sticky top-0">


                        <h2 className="text-4xl font-extrabold text-[#686868] mb-8 leading-[1.1]">
                            International Renewable <br />
                            <span className="text-[#FC763A]">Energy Certificates</span>
                        </h2>

                        <div className="space-y-3 text-md text-slate-600 leading-relaxed max-w-xl">
                            <p>
                                For organizations looking to reduce <span className="text-slate-900 font-bold underline decoration-[#FC763A] decoration-2 underline-offset-4">Scope 2 emissions</span>,
                                I-RECs offer a practical and flexible solution.
                            </p>
                            <p>
                                Each I-REC represents <span className="text-slate-900 font-semibold">1 MWh</span> of renewable electricity
                                generated from sources such as solar, wind, or hydro.By purchasing I-RECs, your business can claim renewable energy usage without changing your physical power source.
                            </p>
                            <p className="bg-slate-50 p-4 rounded-2xl border-l-4 border-[#FC763A] ">
                                "Claim renewable energy usage without changing your physical power source."
                            </p>
                        </div>
                    </div>

                    {/* Right Side: Services & Visuals */}
                    <div className="lg:w-1/2 w-full">
                        <div className="grid grid-cols-1 gap-4">

                            {/* Service Cards */}
                            <div
                                className="relative rounded-[2.5rem] p-8 text-white shadow-2xl shadow-[#FC763A]/10 overflow-hidden"
                                style={{
                                    backgroundImage:
                                        "url('https://quantam.bellatrixnc.in/public/user/images/co2-img.jpg')",
                                    backgroundSize: "cover",
                                    backgroundPosition: "center",
                                }}
                            >
                                {/* Dark overlay */}
                                <div className="absolute inset-0 bg-black/50 " />

                                {/* Gradient glow */}
                                {/* <div className="absolute inset-0 bg-linear-to-br from-black/80 via-slate-900/70 to-black/90" /> */}

                                {/* Content */}
                                <div className="relative z-10">
                                    <h3 className="text-2xl font-bold mb-8">
                                        Our I-REC Services
                                    </h3>

                                    <div className="space-y-5">
                                        {services.map((service, index) => (
                                            <div
                                                key={index}
                                                className="flex items-start gap-4 group cursor-default"
                                            >
                                                <div className="mt-1 p-1 rounded-full bg-[#FC763A]/20 group-hover:bg-[#FC763A] transition-colors duration-300">
                                                    <CheckCircle
                                                        size={18}
                                                        className="text-[#FC763A] group-hover:text-white transition-colors"
                                                    />
                                                </div>

                                                <p className="text-slate-300 group-hover:text-white transition-colors font-medium">
                                                    {service}
                                                </p>
                                            </div>
                                        ))}
                                    </div>
                                </div>

                                {/* Decorative icon */}
                                <Sun className="absolute -bottom-10 -right-10 w-40 h-40 text-white opacity-[0.05] rotate-12" />
                            </div>




                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default IRECSection;