import React, { useMemo } from 'react';

export default function FloatingPetals() {
  // Generate a set of random petal positions and animation properties
  const petals = useMemo(() => {
    return Array.from({ length: 14 }).map((_, i) => ({
      id: i,
      left: `${(i * 7 + Math.random() * 5) % 95}%`,
      animationDuration: `${8 + (i % 5) * 2.5}s`,
      animationDelay: `${(i % 7) * 1.2}s`,
      size: `${14 + (i % 4) * 6}px`,
      rotation: `${Math.random() * 360}deg`,
      opacity: 0.25 + (i % 3) * 0.15,
    }));
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-10 overflow-hidden">
      {petals.map((petal) => (
        <div
          key={petal.id}
          className="absolute animate-petal-fall"
          style={{
            left: petal.left,
            top: '-5%',
            width: petal.size,
            height: petal.size,
            opacity: petal.opacity,
            animationDuration: petal.animationDuration,
            animationDelay: petal.animationDelay,
            transform: `rotate(${petal.rotation})`,
          }}
        >
          {/* Rose Petal Vector Shape */}
          <svg viewBox="0 0 30 30" fill="none" className="w-full h-full text-[#7A1F2B]">
            <path
              d="M15 2 C25 2, 28 12, 20 22 C16 27, 14 27, 10 22 C2 12, 5 2, 15 2 Z"
              fill="currentColor"
              opacity="0.6"
            />
            <path
              d="M15 5 C22 5, 24 13, 18 20 C15 23, 13 23, 10 20 C5 13, 8 5, 15 5 Z"
              fill="#C5A059"
              opacity="0.3"
            />
          </svg>
        </div>
      ))}
    </div>
  );
}
