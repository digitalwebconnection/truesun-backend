 
import React, { useEffect, useRef, useState, useCallback } from "react";

// --- Type Definitions (Kept the same) ---
export type CategoryItem = {
  label: string;
  src: string;
  alt: string;
};

// --- Demo Data (Kept the same) ---
const DEMO_ITEMS: CategoryItem[] = [
  { label: "Farms", src: "https://cdn.britannica.com/94/192794-050-3F3F3DDD/panels-electricity-order-sunlight.jpg", alt: "Farm" },
  { label: "Schools", src: "https://waaree.com/wp-content/uploads/2025/07/Solar-panels-online-scaled.jpg", alt: "School" },
  { label: "Offices", src: "https://cdn.britannica.com/94/192794-050-3F3F3DDD/panels-electricity-order-sunlight.jpg", alt: "Office" },
  { label: "Hospitals", src: "https://media.istockphoto.com/id/1405880267/photo/two-engineers-installing-solar-panels-on-roof.jpg?s=612x612&w=0&k=20&c=OvQDbJaTnMM4jPfIA3y5vrO88i98NZJRahZtnYFZCq0=", alt: "Hospital" },
  { label: "Malls", src: "https://waaree.com/wp-content/uploads/2025/07/Solar-panels-online-scaled.jpg", alt: "Mall" },
  { label: "Houses", src: "https://cdn.britannica.com/94/192794-050-3F3F3DDD/panels-electricity-order-sunlight.jpg", alt: "House" },
  { label: "Factories", src: "https://media.istockphoto.com/id/1405880267/photo/two-engineers-installing-solar-panels-on-roof.jpg?s=612x612&w=0&k=20&c=OvQDbJaTnMM4jPfIA3y5vrO88i98NZJRahZtnYFZCq0=", alt: "Factory" },
  { label: "Hotels", src: "https://waaree.com/wp-content/uploads/2025/07/Solar-panels-online-scaled.jpg", alt: "Hotel" },
  { label: "Airports", src: "https://cdn.britannica.com/94/192794-050-3F3F3DDD/panels-electricity-order-sunlight.jpg", alt: "Airport" },
  { label: "Stadiums", src: "https://media.istockphoto.com/id/1405880267/photo/two-engineers-installing-solar-panels-on-roof.jpg?s=612x612&w=0&k=20&c=OvQDbJaTnMM4jPfIA3y5vrO88i98NZJRahZtnYFZCq0=", alt: "Stadium" },
];

// --- Constants (Simplified/Refined) ---
const CARD_WIDTH_REM = 12; // Increased size to 12rem for better impact
const REM_PX = 16;
const CARD_WIDTH_PX = CARD_WIDTH_REM * REM_PX;
const GAP_PX = 16; // gap-4 is 1rem = 16px

// --- New Component: CategoryCard ---
interface CategoryCardProps {
  item: CategoryItem;
  scale: number;
}

const CategoryCard: React.FC<CategoryCardProps> = React.memo(({ item, scale }) => {
  // Map scale (1.0 - 1.2) to rotation (0deg - 5deg) for a 3D tilt effect
  const maxRotation = 10;
  const normalizedScale = (scale - 1.0) / 0.1; // 0 to 1
  const rotation = maxRotation - (maxRotation * normalizedScale); // 5 to 0

  return (
    <div
      // Apply dynamic scale and a subtle 3D rotateY
      style={{ transform: `scale(${scale}) rotateY(${rotation}deg)` }}
      className="flex flex-col items-center justify-start bg-white border-1 border-black/50 rounded-xl shadow-xl hover:shadow-2xl 
                 w-48 min-w-48 transition-all duration-150 ease-out 
                 origin-center transform-gpu " // Added border for crispness
    >
      <img
        src={item.src}
        alt={item.alt}
        className="w-full h-32 object-cover rounded-t-xl" // Better aspect ratio and fit
        loading="lazy"
      />
      <div className="p-4 w-full text-center">
        <p className="text-gray-900 font-extrabold text-lg whitespace-normal">
          {item.label}
        </p>
      </div>
    </div>
  );
});

CategoryCard.displayName = "CategoryCard";

// --- Main Component: SolarShowcaseScroll ---
export default function SolarShowcaseScroll() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [isPaused, setIsPaused] = useState(false);
  const [scrollPosition, setScrollPosition] = useState(0);
  const duplicatedItems = [...DEMO_ITEMS, ...DEMO_ITEMS]; // for seamless loop

  // --- 1. Auto-Scroll Logic (Refined) ---
  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;

    const BASE_SPEED = 0.8; // Slightly faster for more dynamism
    const SPEED_VARIANCE = 0.1;
    const TIME_SCALE = 0.0005; // Slower oscillation for subtlety
    let startTime = performance.now();
    let frame: number;

    const step = (time: DOMHighResTimeStamp) => {
      const elapsedTime = time - startTime;

      if (!isPaused) {
        // Subtle speed oscillation
        const speedMultiplier = Math.sin(elapsedTime * TIME_SCALE) * SPEED_VARIANCE;
        const currentSpeed = BASE_SPEED + speedMultiplier;

        el.scrollLeft += currentSpeed;
        setScrollPosition(el.scrollLeft);

        // Seamless loop logic
        if (el.scrollLeft >= el.scrollWidth / 2) {
          el.scrollLeft = 0;
          setScrollPosition(0);
        }
      }
      frame = requestAnimationFrame(step);
    };

    frame = requestAnimationFrame(step);
    return () => cancelAnimationFrame(frame);
  }, [isPaused]);


  // --- 2. Center-Focus Scaling Effect Logic (Refined) ---
  const calculateScale = useCallback((cardIndex: number) => {
    const el = scrollRef.current;
    if (!el) return 1.0;

    const totalLoopWidth = el.scrollWidth / 2;
    const containerCenter = el.offsetWidth / 2;
    const cardCenter = (CARD_WIDTH_PX + GAP_PX) * cardIndex + (CARD_WIDTH_PX / 2);

    // Calculate the distance of the card's center from the *visible* center of the container
    let cardCurrentPosition = cardCenter - scrollPosition;

    // Handle the loop transition
    if (cardCurrentPosition < -totalLoopWidth / 2) {
      cardCurrentPosition += totalLoopWidth;
    } else if (cardCurrentPosition > totalLoopWidth + totalLoopWidth / 2) {
      cardCurrentPosition -= totalLoopWidth;
    }

    const distance = Math.abs(cardCurrentPosition - containerCenter);

    // Define the falloff zone (e.g., 2.5 cards' distance)
    const maxDistance = (CARD_WIDTH_PX + GAP_PX) * 2.5;

    // Calculate normalized distance (0 at center, 1 at maxDistance)
    const normalizedDistance = Math.min(distance, maxDistance) / maxDistance;

    // Scale factor: 1.2 at center, 1.0 at maxDistance
    const scale = 1.2 - (0.2 * normalizedDistance);

    return scale;
  }, [scrollPosition]);

  // --- Render ---
  return (
    <section className="relative mx-auto max-w-7xl px-4 md:px-6 py-10 overflow-hidden bg-gray-50">
      <header className="text-center mb-5">
        <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 leading-tight">
          <span className="text-orange-700">Solar</span> For Every <span className="text-blue-800/90">Sector</span>
        </h2>
        <p className="mt-4 text-gray-600 text-xl max-w-4xl mx-auto">
          From residential rooftops to massive industrial complexes—clean energy is a seamless fit.
        </p>
      </header>

      {/* Scroll Container */}
      <div className="perspective-1000 ">
        <div
          ref={scrollRef}
          className="flex gap-12 overflow-x-hidden whitespace-nowrap cursor-pointer py-10" // Increased vertical padding
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
          onScroll={(e) => setScrollPosition(e.currentTarget.scrollLeft)}
        >
          {duplicatedItems.map((item, idx) => {
            const scale = calculateScale(idx);

            return (
              <CategoryCard
                key={idx}
                item={item}
                scale={scale}
              />
            );
          })}
        </div>
      </div>


      {/* Custom Styles */}
      <style >{`
        /* Hide scrollbar */
        ::-webkit-scrollbar {
          display: none;
        }
        /* Added for the 3D tilt effect */
        .perspective-1000 {
          perspective: 1000px;
        }
      `}</style>
    </section>
  );
}