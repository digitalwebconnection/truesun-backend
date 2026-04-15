import { motion } from "framer-motion";
import { Check, ArrowUpRight } from "lucide-react";

const WhyChooseTrueSun = () => {
    const points = [
        {
            text: "End-to-end support—from consultation to financing to installation",
            img: "https://dn5z2jafg7hv0.cloudfront.net/blog/wp-content/uploads/2024/10/14160325/eligibility-and-documentation-to-install-solar-for-chs.webp",
        },
        {
            text: "Strong partnerships with trusted banks & NBFCs",
            img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcReOLcyE5-HQuPlVX3lCBM9KXInqft7ZBFHUA&s",
        },
        {
            text: "Transparent pricing with no hidden costs",
            img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTV-2b24MZxpNsg0Er7thSL-srEb3ZO_MyRHA&s",
        },
        {
            text: "Customized solutions for residential, commercial, and industrial clients",
            img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQOGvT-x3YEvTmhGRuntMN8hR_69Vvpy8NdUg&s",
        },
        {
            text: "Dedicated support team in Mumbai & Maharashtra",
            img: "https://content3.jdmagicbox.com/v2/comp/mumbai/j4/022pxx22.xx22.190128162157.j7j4/catalogue/truesun-energy-solutions-pvt-ltd-andheri-east-mumbai-solar-panel-installation-services-6sskx30vct.jpg",
        },
    ];

    return (
        <section className="py-24 bg-gray-50/30">
            <div className="max-w-7xl mx-auto px-4">

                <div className="mb-16 text-center">
                    <h2 className="text-3xl md:text-5xl font-bold text-gray-900 leading-tight">
                        Why Choose TrueSun for Solar Finance?
                    </h2>
                </div>

                {/* Container: 
            Using flexbox for the whole container allows us to wrap 
            and center the remaining items automatically.
        */}
                <div className="flex flex-wrap justify-center gap-8">
                    {points.map((item, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.1, duration: 0.5 }}
                            whileHover={{ y: -10 }}
                            //   Responsive Logic:
                            //   Mobile: w-full (1 card)
                            //   Tablet: w-[calc(50%-1rem)] (2 cards)
                            //   Desktop Row 1 (i < 3): lg:w-[calc(33.33%-1.5rem)] (3 cards)
                            //   Desktop Row 2 (i >= 3): lg:w-[calc(40%-1.5rem)] (Wider cards for the row of 2)
                            className={`group relative h-96 rounded-4xl overflow-hidden cursor-pointer shadow-lg
                w-full 
                md:w-[calc(50%-1rem)] 
                ${i < 3 ? 'lg:w-[calc(33.33%-1.5rem)]' : 'lg:w-[calc(50%-1.5rem)]'}
              `}
                        >
                            {/* Background Image */}
                            <img
                                src={item.img}
                                alt=""
                                className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition duration-700"
                            />

                            {/* Enhanced Gradient Overlay */}
                            <div className="absolute inset-0 bg-linear-to-t from-black/90 via-black/30 to-transparent opacity-80 group-hover:opacity-90 transition-opacity" />

                            {/* Hover Badge */}
                            <div className="absolute top-6 right-6 p-2 rounded-full bg-white/10 backdrop-blur-md opacity-0 group-hover:opacity-100 transition-all duration-300">
                                <ArrowUpRight className="text-white" size={20} />
                            </div>

                            {/* Content */}
                            <div className="relative h-full p-8 flex flex-col justify-between text-white">
                                <div className="text-white/30 group-hover:text-[#FC763A]  text-4xl font-black italic">
                                    {String(i + 1).padStart(2, "0")}
                                </div>

                                <div>
                                    <div className="flex items-center gap-2 mb-3">
                                        <div className="bg-[#FC763A]  rounded-full p-1">
                                            <Check size={12} strokeWidth={4} />
                                        </div>
                                        <span className="text-xs font-bold uppercase tracking-widest text-[#FC763A] ">Advantage</span>
                                    </div>

                                    <p className="text-xl font-semibold leading-snug">
                                        {item.text}
                                    </p>

                                    {/* Decorative underline that expands on hover */}
                                    <div className="mt-4 h-1 w-0 bg-[#FC763A]  rounded-full group-hover:w-full transition-all duration-500" />
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default WhyChooseTrueSun;