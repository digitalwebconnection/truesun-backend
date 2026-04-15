
const ContactHero = () => {
    return (
        <section className="relative overflow-hidden text-white py-22">
            {/* Background Image */}
            <div className="absolute inset-0 -z-10">
                <img
                    src="https://www.tatapower.com/adobe/dynamicmedia/deliver/dm-aid--2368fbcc-c209-4949-a331-27e88d1aa428/body-1-img.png?quality=85&preferwebp=true" // 🔁 Changed image path to reflect an industrial/engineering focus
                    alt="Creasun Energy industrial solar contact background"
                    className="h-full w-full object-cover"
                />
                {/* Dark overlay */}
                <div className="absolute inset-0 bg-[#050814]/60" />
            </div>

            {/* Content */}
            <div className="relative max-w-5xl  px-6 ">
                {/* Badge - Specific to the Contact Page */}
                <div className="inline-block px-4 py-1 text-[#FC763A] rounded-full bg-white/10 border border-white/15 text-xs tracking-wide uppercase mb-6">
                    Contact Truesun Energy
                </div>

                {/* Heading - Emphasizing the Engineering/Savings Hook */}
                <h1 className="text-4xl sm:text-5xl font-semibold leading-tight">
                    Let's Start Your <span className="text-[#FC763A]">Solar Project</span> with an
                    <span className="block  text-[#FC763A] mt-1">
                        Engineering-First Approach
                    </span>
                </h1>

                {/* Subtext - Clear Scope and Value Proposition */}
                <p className="text-slate-200 mt-6 max-w-2xl  text-base sm:text-lg leading-relaxed">
                    Whether you need a **data-driven analysis for industrial savings or a
                    reliable rooftop system, our engineering team provides clear guidance and
                    guarantees systems that perform.
                </p>

                {/* CTA Buttons - Clear Next Steps */}
                <div className="flex flex-wrap  gap-4 mt-10">
                   
                    <a
                        href="tel:+918850845149" // 🔁 replace with Creasun's real number
                        className="border border-white/25 bg-white/5 px-7 py-3 rounded-full text-white hover:border-[#FC763A] hover:text-[#FC763A] transition"
                    >
                        Call Our Experts Now
                    </a>
                </div>


            </div>

        </section>
    );
};

export default ContactHero;