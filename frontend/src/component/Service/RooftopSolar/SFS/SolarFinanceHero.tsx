const SolarFinanceHero = () => {
    return (
        <section className="relative h-[620px] flex items-center">

            {/* Background Image */}
            <img
                src="https://images.unsplash.com/photo-1509391366360-2e959784a276?q=80&w=1600"
                alt="Solar finance"
                className="absolute inset-0 w-full h-full object-cover"
            />

            {/* Overlay */}
            <div className="absolute inset-0 bg-black/70"></div>

            {/* Content */}
            <div className="relative max-w-7xl  px-4 md:px-15 text-white">

                {/* Tag */}
                <div className="inline-block bg-[#FC763A]/90 px-4 py-1 rounded-full text-sm font-medium mb-4">
                    Solar Finance Solutions
                </div>

                {/* Heading */}
                <h1 className="text-3xl md:text-5xl font-bold leading-tight max-w-4xl">
                    Power Your Solar Journey <br />
                    Without Financial Stress
                </h1>

                {/* Description */}
                <p className="mt-6 text-gray-200 max-w-4xl leading-relaxed">
                    At TrueSun Energy, we believe switching to solar should be simple, affordable, and accessible.
                    Our customized solar financing solutions help homeowners, businesses, and industries in Mumbai
                    and across Maharashtra go solar with minimal upfront investment.
                </p>

                {/* CTA */}
                <div className="mt-8 flex flex-col sm:flex-row gap-4">

                    <button className="px-8 py-3 bg-[#FC763A] rounded-full font-semibold hover:scale-105 transition">
                        Get Financing Options
                    </button>

                    <button className="px-8 py-3 border border-white rounded-full font-semibold hover:bg-white hover:text-black transition">
                        Talk to Expert
                    </button>

                </div>

            </div>
        </section>
    );
};

export default SolarFinanceHero;