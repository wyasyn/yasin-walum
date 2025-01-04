import React from "react";

export default function CircleBackground() {
  const circles = Array.from({ length: 10 }, (_, i) => i); // Array for multiple circles

  return (
    <div className="absolute inset-0 w-full h-full overflow-hidden bg-background">
      {circles.map((circle, index) => {
        const randomRadius = Math.random() * 15 + 5; // Random radius between 5 and 20
        return (
          <div
            key={index}
            className={`absolute stroke-[0.06] animate-circle-animation duration-${
              5000 + index * 1000
            }`}
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
            }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="fill-none stroke-muted aspect-square"
              style={{
                width: `${randomRadius * 2}px`, // Set the size based on the radius
                height: `${randomRadius * 2}px`,
              }}
            >
              <circle cx="12" cy="12" r={randomRadius} />
            </svg>
          </div>
        );
      })}
    </div>
  );
}
