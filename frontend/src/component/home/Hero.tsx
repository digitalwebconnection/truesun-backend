import { useEffect, useState } from "react";

import i1 from "../../assets/Andheri Bungalow/4.png";
import i2 from "../../assets/Bloom Packaging/3.jpg";
import i3 from "../../assets/Kalpataru Estate CHS Limited/6.jpeg";
import i4 from "../../assets/Ganesh kung/4.png";
import i5 from "../../assets/Kruti Promotions/1.jpg";
import i6 from "../../assets/Landmrk Pllatinum/6.jpeg";
import i7 from "../../assets/Oberoi Realty//3.png";
import i8 from "../../assets/PCI Rentokill/1.jpg";
import i9 from "../../assets/Rustomjee virar/5.png";

const bgImages = [
  i1,
  i2,
  i3,
  i4,
  i5,
  i6,
  i7,
  i8,
  i9,
  // "https://media.istockphoto.com/id/1405880267/photo/two-engineers-installing-solar-panels-on-roof.jpg?s=612x612&w=0&k=20&c=OvQDbJaTnMM4jPfIA3y5vrO88i98NZJRahZtnYFZCq0=",,
];

const SLIDE_DURATION_MS = 5000;
const FADE_MS = 1000;

export default function HeroSection() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const id = setInterval(
      () => setIndex((i) => (i + 1) % bgImages.length),
      SLIDE_DURATION_MS
    );
    return () => clearInterval(id);
  }, []);

  return (
    <section className="relative h-150 overflow-hidden bg-white">
      <div className="mx-auto flex flex-col lg:flex-row min-h-[60svh] lg:min-h-[65svh]">
        {/* ============= LEFT CONTENT ============= */}
        <div className="w-full lg:w-1/2 px-4 sm:px-8 lg:px-10 py-14 lg:py-25 flex flex-col justify-center">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#FC763A] mb-3">
            Save More • Go Solar
          </p>

          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold leading-tight text-[#686868]">
            Cut Electricity Bills with
            <br />
            <span className="text-[#FC763A]">Solar Power, India’s </span> <br />
            Trusted Solar Experts
          </h1>

          <p className="mt-4 text-sm sm:text-base text-black   max-w-xl">
            TrueSun Energy delivers clean, dependable solar energy solutions for homes and businesses across India. Our systems are designed to significantly reduce electricity bills, deliver consistent long-term performance, and support a more sustainable and energy-independent future.
          </p>

          <div className="mt-6 flex flex-wrap items-center gap-4 text-xs sm:text-sm text-slate-500">
            <span className="inline-flex items-center gap-1">
              <span className="h-2 w-2 rounded-full bg-emerald-500" />
              Up to 80% savings on electricity bills*
            </span>
            <span className="inline-flex items-center gap-1">
              <span className="h-2 w-2 rounded-full bg-[#FC763A]" />
              30+ years performance life
            </span>
          </div>

          <div className="my-8 flex flex-wrap items-center gap-4">

            <p className="text-xs sm:text-sm text-slate-500">
              Takes less than 60 seconds. No obligation.
            </p>
          </div>

        </div>

        {/* ============= RIGHT IMAGE SIDE ============= */}
        <div className="relative w-full lg:w-1/2 min-h-80 lg:min-h-[450px] overflow-hidden">
          {/* Background slider */}
          <div className="absolute inset-0">
            {bgImages.map((src, i) => {
              const isActive = i === index;
              return (
                <div
                  key={i}
                  className="absolute inset-0 bg-cover bg-center"
                  style={{
                    backgroundImage: `url(${src})`,
                    opacity: isActive ? 1 : 0,
                    transitionProperty: "opacity",
                    transitionTimingFunction: "ease",
                    transitionDuration: `${FADE_MS}ms`,
                    animation: isActive
                      ? `kenburnsZoom ${SLIDE_DURATION_MS + FADE_MS
                      }ms linear forwards`
                      : "none",
                  }}
                />
              );
            })}
          </div>

          {/* Top-middle angled bar */}
          <div
            className="absolute top-0 left-1/2 h-24 w-28 bg-emerald-500 hidden sm:block"
            style={{
              transform: "translateX(-50%) skewX(-30deg)",
            }}
          />
          {/* Right big diagonal shape */}
          <div
            className="absolute bottom-0 right-0 h-64 w-64 bg-[#FC763A]/80 hidden sm:block"
            style={{
              clipPath: "polygon(40% 0%, 100% 0%, 100% 100%, 0% 100%)",
            }}
          />

          {/* Floating savings badge */}
          <div className="absolute bottom-6 left-6 max-w-xs rounded-2xl bg-white/85 px-4 py-3 shadow-xl backdrop-blur-sm">
            <p className="text-xs font-semibold tracking-[0.18em] uppercase text-[#FC763A] mb-2">
              Savings & Sustainability
            </p>
            <p className="mt-1 text-sm font-semibold text-[#686868]">
              “This system paid back its cost in just a few years.”
            </p>
            <p className="mt-1 text-[11px] text-black">
              Cut power costs with reliable solar energy solutions built to perform for decades.
            </p>
          </div>
        </div>
      </div>

      {/* ============= CUSTOM KEYFRAMES ============= */}
      <style>{`
        @keyframes kenburnsZoom {
          0% { transform: scale(1) translateZ(0); }
          100% { transform: scale(1.07) translateZ(0); }
        }
      `}</style>
    </section>
  );
}