import { useEffect, useState } from "react";

/* 👉 ADD YOUR LOGOS HERE */
import bloomLogo from "../../assets/TestiminialVideo/Bloomlogo.png";
import oberoiLogo from "../../assets/TestiminialVideo/oberoilogo.png";
import kalpataruLogo from "../../assets/TestiminialVideo/Kalpatarulogo.png";

import tv1 from "../../assets/TestiminialVideo/Testimonial-1.mp4";
import tv2 from "../../assets/TestiminialVideo/rustamji testimonial.mp4";

interface Review {
  name: string;
  location: string;
  rating: number;
  comment: string;
  video: string;
  logo: string;
}

export default function ModernReviewSection() {

  const reviews: Review[] = [
    {
      name: "Bloom Packaging",
      location: "Daman",
      rating: 5,
      comment:
          "The team at TrueSun has been very supportive and have installed the system very neatly, following all safety measures like walkways, lifeline, etc. We are satisfied with their work and recommend them.",
      video: tv1,
      logo: bloomLogo,
    },
    {
      name: "Oberoi Realty Group",
      location: "Mumbai",
      rating: 5,
      comment:
 "We found TrueSun to be a company which is the right fit for us. For us quality comes first and TrueSun met all our expectations. They installed this plant on a high rise building while following all safety protocols.",
      video: tv2,
      logo: oberoiLogo,
    },
    {
      name: "Kalpataru Estate (Residential)",
      location: "Mumbai",
      rating: 5,
      comment:
        "We appreciate the way TrueSun explained every aspect in detail right from designing to addressing Managing committee concerns. With TrueSun's proper guidance we now have a 115 KW solar plant.",  
      video: tv1,
      logo: kalpataruLogo,
    },
  ];

  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % reviews.length);
    }, 6000);

    return () => clearInterval(interval);
  }, []);

  const review = reviews[current];

  return (
    <section className="bg-gray-50 py-16 px-6">
      <div className="max-w-7xl mx-auto">

        {/* HEADER */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-[#686868] mb-4">
            What Our <span className="text-[#FC763A]">Customers Say</span>
          </h2>

          <p className="text-gray-600 max-w-2xl mx-auto">
            Real feedback from customers who trust our solar solutions.
          </p>
        </div>

        {/* MAIN GRID */}
        <div className="grid md:grid-cols-2 gap-10 items-center">

          {/* LEFT VIDEO */}
          <div className="relative w-full rounded-2xl overflow-hidden shadow-xl">
            <video
              key={current}
              src={review.video}
              className="w-full h-[450px] object-cover"
              autoPlay
              muted
              loop
              playsInline

            />
          </div>

          {/* RIGHT CONTENT */}
          <div className="bg-white p-8 rounded-2xl shadow-lg relative">

            {/* LOGO */}
            <div className="flex justify-center mb-6">
              <img
                src={review.logo}
                alt={review.name}
                className="h-14 object-contain"
              />
            </div>

            {/* STARS */}
            <div className="flex justify-center mb-4">
              {[...Array(5)].map((_, i) => (
                <span
                  key={i}
                  className={`text-2xl ${
                    i < review.rating ? "text-yellow-500" : "text-gray-300"
                  }`}
                >
                  ★
                </span>
              ))}
            </div>

            {/* COMMENT */}
            <p className="text-lg text-gray-700 italic mb-6 leading-relaxed text-center">
              "{review.comment}"
            </p>

            {/* NAME */}
            <div className="text-center">
              <h4 className="text-xl font-semibold text-gray-900">
                {review.name}
              </h4>

              <p className="text-[#FC763A] font-medium">
                {review.location}
              </p>
            </div>

          </div>

        </div>

        {/* DOTS */}
        <div className="flex justify-center mt-8 gap-3">
          {reviews.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrent(i)}
              className={`h-3 w-3 rounded-full ${
                i === current ? "bg-[#FC763A]" : "bg-gray-300"
              }`}
            />
          ))}
        </div>

      </div>
    </section>
  );
}