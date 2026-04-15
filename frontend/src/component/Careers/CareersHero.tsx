import { motion} from "framer-motion";
import {  Users } from "lucide-react";

export default function CareersPage() {


  return (
    <>
      {/* ================= HERO SECTION ================= */}
      <section className="relative overflow-hidden bg-white text-slate-900/80">
        <div className="mx-auto flex max-w-7xl flex-col gap-10 px-6 pb-16 pt-16 lg:flex-row lg:items-center lg:px-0 lg:pt-20">
          
          {/* LEFT SIDE */}
          <div className="w-full lg:w-6/12">
            <motion.p
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45 }}
              className="text-[11px] font-semibold uppercase tracking-[0.25em] text-slate-500"
            >
              Want to work with us?
            </motion.p>

            <motion.h1
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55 }}
              className="mt-3 text-4xl text-[#686868] font-extrabold leading-tight sm:text-3xl lg:text-5xl"
            >
              BUILD YOUR{" "}
              <span className="relative ">
                <span className="relative px-1 text-[#FC763A]">SOLAR  CAREER</span>
              </span>{" "}
             WITH TRUESUN
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: 0.1 }}
              className="mt-4 max-w-md text-sm leading-relaxed text-slate-600 sm:text-base"
            >
              Join a team that designs, sells and executes rooftop solar
              projects across India with real responsibility from day one.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: 0.2 }}
              className="mt-7 flex flex-wrap items-center gap-4"
            >
             

              <div className="flex items-center gap-1 text-xs text-slate-500">
                <Users className="h-4 w-4" />
                <span>Business, Design & Project Roles</span>
              </div>
            </motion.div>
          </div>

          {/* RIGHT SIDE IMAGE */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="relative w-full lg:w-5/12"
          >
            <div className="overflow-hidden rounded-3xl shadow-xl">
              <img
                src="https://www.solluz.co.in/wp-content/uploads/elementor/thumbs/ISGEC-1000-kWp-Solar-Installation-r1ojv2y6dyldh5z7zp0buoq3bf3cb5t432k0dv4ya0.webp"
                alt="Solar Project"
                className="h-[400px] w-full object-cover"
              />
            </div>
          </motion.div>
        </div>
      </section>

    </>
  );
}
                                    