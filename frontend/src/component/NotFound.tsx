import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-black text-white overflow-hidden">

      {/* Background Image */}
      <img
        src="https://images.unsplash.com/photo-1509391366360-2e959784a276?q=80&w=1600"
        alt="Solar background"
        className="absolute inset-0 w-full h-full object-cover opacity-30"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/70"></div>

      {/* Content */}
      <div className="relative text-center px-4 max-w-2xl">

        {/* 404 */}
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-7xl md:text-9xl font-bold text-[#FC763A]"
        >
          404
        </motion.h1>

        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="mt-6 text-2xl md:text-4xl font-semibold"
        >
          Page Not Found
        </motion.h2>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="mt-4 text-gray-300"
        >
          Looks like this page went off-grid ⚡  
          But don’t worry — let’s bring you back to solar savings.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="mt-8 flex flex-col sm:flex-row gap-4 justify-center"
        >

          <Link
            to="/"
            className="px-8 py-3 bg-[#FC763A] rounded-full font-semibold hover:scale-105 transition"
          >
            Go to Home
          </Link>

          <Link
            to="/contact"
            className="px-8 py-3 border border-white rounded-full font-semibold hover:bg-white hover:text-black transition"
          >
            Talk to Expert
          </Link>

        </motion.div>

      </div>

    </section>
  );
};

export default NotFound;