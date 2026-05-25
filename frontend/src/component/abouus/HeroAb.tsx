import { motion } from "framer-motion";
import defaultBg from "../../assets/trusted-solar-company-in-mumbai.avif";

const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: { staggerChildren: 0.1 }
    }
};

const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

interface AboutHeroProps {
    eyebrow?: string;
    title?: string;
    subtitle?: string;
    backgroundUrl?: string;
    alt?: string;
}

function AboutHeroV2({
    eyebrow = "ABOUT US",
    title = "Driving Global Change with Solar Energy",
    subtitle = "We create high-performance solar solutions that help industries, businesses, and communities switch to clean and sustainable power.",
    backgroundUrl = defaultBg,
    alt = "trusted solar company in mumbai",
}: AboutHeroProps) {

    return (
        <section className="relative h-125  flex items-center overflow-hidden    ">
            {/* Background Image */}
            <div className="absolute inset-0 z-0">
                <img
                    src={backgroundUrl}
                    alt={alt}
                    className="h-full w-full object-cover opacity-60"
                />
                <div className="absolute inset-0 bg-linear-to-br from-black/10 via-black/20 to-blue-950/30 pointer-events-none" />
            </div>

            {/* Content */}
            <div className="relative z-10 max-w-7xl  px-6">
                <motion.div
                    initial="hidden"
                    animate="visible"
                    variants={containerVariants}
                    className="text-white"
                >
                    {/* Eyebrow */}
                    <motion.p
                        className="text-white text-xl  font-semibold tracking-widest uppercase"
                        variants={itemVariants}
                    >
                        {eyebrow}
                    </motion.p>

                    {/* Heading */}
                    <motion.h1
                        className="mt-3 text-3xl text-[#FC763A] sm:text-5xl font-extrabold leading-tight max-w-3xl"
                        variants={itemVariants}
                    >
                        {title}
                    </motion.h1>

                    {/* Short Subtitle (2–3 lines max) */}
                    <motion.p
                        className="mt-5 text-xl text-gray-200 max-w-3xl leading-relaxed"
                        variants={itemVariants}
                    >
                        {subtitle}
                    </motion.p>
                </motion.div>
            </div>
        </section>
    );
}

export default function App() {
    return (
        <div className="bg-gray-900 font-sans">
            <AboutHeroV2 />
        </div>
    );
}
