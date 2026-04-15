import { CheckCircle } from "lucide-react";
import { easeOut, motion } from "framer-motion";

export default function WhyTrueSun() {
  const features = [
    {
      title: "Engineering-Led Design",
      image: "https://www.elprocus.com/wp-content/uploads/Solar-Powered-LED-Street-Light.jpg",
      points: [
        "Designed for your roof and energy needs",
        "Optimized for maximum solar generation",
        "Built for long-term reliability",
      ],
    },
    {
      title: "Premium Installation Standards",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTSSHWO1P-nKNPiSaAeBdu7Wq8rBVa6PZbQHg&s",
      points: [
        "Strict safety and quality processes",
        "Clean, aesthetic rooftop finish – No Leakages",
        "Neat and protected professional cabling",
      ],
    },
    {
      title: "Weather-Resistant Structures",
      image: "https://tiimg.tistatic.com/fp/1/008/119/solar-panel-mounting-structure-592.jpg",
      points: [
        "Hot Dip Galvanised mounting structures",
        "Designed for 180 km/hr wind speed",
        "Long-lasting durability",
      ],
    },
    {
      title: "End-to-End Execution",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcToHsKyQnwXRvho7cXYkbj9lWM97Giffq70uQ&s",
      points: [
        "Site survey to commissioning",
        "Smooth project execution",
        "Single point coordination",
      ],
    },
    {
      title: "Liaisoning & Approvals",
      image: "https://dn5z2jafg7hv0.cloudfront.net/blog/wp-content/uploads/2024/10/14160325/eligibility-and-documentation-to-install-solar-for-chs.webp",
      points: [
        "Fast utility coordination",
        "Load extension & meter clubbing",
        "Support on local approvals",
      ],
    },
    {
      title: "PM Surya Ghar Subsidy Support",
      image: "https://australianpremiumsolar.co.in/wp-content/uploads/2025/07/july-blog-img-2.jpg",
      points: [
        "Guidance on solar subsidies",
        "PM Surya Ghar Yojana support",
        "Net metering assistance",
      ],
    },
    {
      title: "Long-Term Support",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS6e5FikW7cui2yn15BeRF65PXVtFD_6QhjkA&s",
      points: [
        "Monitoring & maintenance",
        "Performance checks",
        "Reliable after-sales service",
      ],
    },
    {
      title: "Flexible Financing",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSkBKy3VfDtO309DHpmkFIViShhP7s4IPDLKw&s",
      points: [
        "Loan & EMI options",
        "Low or zero upfront models",
        "CAPEX and OPEX choice",
      ],
    },
  ];

  // Animation variants for the container
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 },
    },
  };

  // Animation variants for individual cards
  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: easeOut } },
  };

  return (
    <section className="py-14 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Animated Title Section */}
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-[#4A4A4A]">
            Why{" "}
            <span className="bg-[#FC763A]  bg-clip-text text-transparent">
              TrueSun
            </span>
          </h2>
          <p className="mt-4 text-[#686868] max-w-2xl mx-auto text-lg">
            Engineered solar solutions with premium installation standards,
            strong structures, and complete project support.
          </p>
        </motion.div>

        {/* Animated Grid */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-7"
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              whileHover={{ y: -10 }}
              className="group relative rounded-2xl overflow-hidden bg-white shadow-sm hover:shadow-2xl transition-all duration-500 border border-gray-100"
            >
              {/* Background Image with Zoom Effect */}
              <img
                src={feature.image}
                alt={feature.title}
                className="absolute inset-0 w-full h-full object-cover opacity-0 group-hover:opacity-100 transition-all duration-700 scale-125 group-hover:scale-100"
              />

              {/* Sophisticated Gradient Overlay */}
              <div className="absolute inset-0 bg-linear-to-b from-[#FC763A]/80 via-black/40 to-black/80 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

              {/* Card Content */}
              <div className="relative p-8 z-10 h-full flex flex-col justify-between min-h-80">
                <div>
                  <h3 className="font-bold text-xl text-[#4A4A4A] group-hover:text-white mb-4 transition-colors duration-300">
                    {feature.title}
                  </h3>

                  <ul className="space-y-4">
                    {feature.points.map((point, i) => (
                      <li
                        key={i}
                        className="flex items-start text-sm font-medium text-[#686868] group-hover:text-gray-100 transition-colors duration-300"
                      >
                        <CheckCircle
                          size={18}
                          className="text-[#FC763A] group-hover:text-white mr-3 shrink-0 mt-0.5 transition-colors duration-300"
                        />
                        {point}
                      </li>
                    ))}
                  </ul>
                </div>
                
                {/* Optional: Subtle indicator for interactivity */}
                <div className="w-8 h-1 bg-[#FC763A] group-hover:bg-white transition-all duration-300 rounded-full mt-6"></div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}