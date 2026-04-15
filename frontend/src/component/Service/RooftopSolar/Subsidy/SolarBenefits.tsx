import { FaBolt, FaPiggyBank, FaLeaf, FaTools } from "react-icons/fa";

const SolarBenefits = () => {
    const benefits = [
        {
            icon: <FaBolt size={28} />,
            title: "Save up to 80–90%",
            desc: "Reduce your electricity bills significantly with solar power",
            img: "https://mir-s3-cdn-cf.behance.net/projects/404/c58449167598273.Y3JvcCwxMDgwLDg0NCwwLDExNw.jpg",
        },
        {
            icon: <FaPiggyBank size={28} />,
            title: "Government Subsidy",
            desc: "Government subsidy support for residential users & societies ",
            img: "https://cdn.thelivemirror.com/wp-content/uploads/2020/07/Solar-power-plant.jpg",
        },
        {
            icon: <FaLeaf size={28} />,
            title: "25+ Years Savings",
            desc: "Enjoy long-term financial and environmental benefits",
            img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ4ckNPOyTmWej2k6TqfdeYGPn8llxJsilcDg&s",
        },
        {
            icon: <FaTools size={28} />,
            title: "Low Maintenance",
            desc: "Durable systems with minimal upkeep and high ROI",
            img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRmwd8Xg1KUpbYzXl8K6imJzrA--7yX-qbU3w&s",
        },
    ];

    const data = [
        { range: "Up to 2 kW", subsidy: "₹30,000 per kW" },
        { range: "2–3 kW", subsidy: "₹18,000 per kW" },
        { range: "Above 3 kW", subsidy: "Max ₹78,000" },
    ];

    return (
        <>
            {/* ===== BENEFITS SECTION WITH BACKGROUND IMAGE ===== */}
            <section className="relative py-14">

                <div className="relative max-w-7xl mx-auto px-4 text-center">

                    <h2 className="text-3xl md:text-4xl text-[#FC763A] font-bold">
                        Key Benefits of Rooftop Solar
                    </h2>

                    <p className="mt-4 text-[#686868] max-w-2xl mx-auto">
                        Switch to solar and unlock long-term savings, sustainability, and energy independence.
                    </p>

                    {/* Cards */}
                    <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-4">

                        {benefits.map((item, index) => (
                            <div
                                key={index}
                                className="bg-white/90 text-gray-900 rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition hover:-translate-y-1"
                            >

                                {/* Image */}
                                <img
                                    src={item.img}
                                    alt={item.title}
                                    className="w-full z-5 h-47 object-cover"
                                />

                                <div className="p-5">

                                    {/* Icon */}
                                    <div className="w-12 h-12 flex items-center justify-center bg-owhite text-[#FC763A] rounded-full mx-auto -mt-5 shadow-md">
                                        {item.icon}
                                    </div>

                                    <h3 className="mt-4 font-semibold text-lg">
                                        {item.title}
                                    </h3>

                                    <p className="mt-2 text-sm text-gray-600">
                                        {item.desc}
                                    </p>

                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ===== SUBSIDY SECTION WITH SIDE IMAGE ===== */}
            <section className="py-20 bg-linear-to-b from-white to-orange-50">
                <div className="max-w-7xl mx-auto px-4 grid lg:grid-cols-2 gap-12 items-center">

                    {/* LEFT CONTENT */}
                    <div>

                        <h2 className="text-3xl text-[#FC763A] md:text-4xl font-bold">
                            Subsidy for Individual Households
                        </h2>

                        <p className="text-gray-500 mt-3">
                            Bigger system → Bigger savings 💰
                        </p>

                        {/* Timeline */}
                        <div className="mt-10 space-y-6">
                            {data.map((item, index) => (
                                <div key={index} className="flex items-center gap-4">

                                    <div className="w-12 h-12 rounded-full bg-[#FC763A] text-white flex items-center justify-center font-bold">
                                        {index + 1}
                                    </div>

                                    <div>
                                        <h3 className="font-semibold">
                                            {item.range}
                                        </h3>
                                        <p className="text-[#FC763A] font-bold">
                                            {item.subsidy}
                                        </p>
                                    </div>

                                </div>
                            ))}
                        </div>
                    </div>

                    {/* RIGHT IMAGE */}
                    <div>
                        <img
                            src="https://zenithinfraprojects.in/wp-content/uploads/2026/03/ChatGPT-Image-Mar-26-2026-01_04_40-AM.png"
                            alt="Solar house"
                            className="rounded-2xl shadow-xl w-full h-[400px] object-cover"
                        />
                    </div>

                </div>
            </section>
        </>
    );
};

export default SolarBenefits;