"use client";
import { motion } from "motion/react";
import { toolsAndTechnologies } from "@/lib/data";
import { useRef, useEffect, useState } from "react";

export default function MovingCards() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [containerWidth, setContainerWidth] = useState(0);

  useEffect(() => {
    if (containerRef.current) {
      // Calculate the width of all items
      const scrollableWidth = containerRef.current.scrollWidth;
      const visibleWidth = containerRef.current.offsetWidth;
      setContainerWidth(scrollableWidth - visibleWidth);
    }
  }, []);

  return (
    <div className="relative overflow-hidden fade-mask" ref={containerRef}>
      <motion.div
        className="flex items-center gap-12 py-14"
        animate={{ x: [0, -containerWidth] }}
        transition={{
          repeat: Infinity,
          duration: containerWidth / 100, // Adjust speed dynamically
          ease: "linear",
        }}
        style={{ display: "flex", width: "fit-content" }}
      >
        {toolsAndTechnologies.concat(toolsAndTechnologies).map((tool, idx) => (
          <div
            key={idx}
            className={`flex shrink-0 bg-card p-8 rounded-xl items-center gap-3 ${
              idx % 2 === 0 ? "rotate-6" : "-rotate-6"
            }`}
          >
            <span className="text-muted text-6xl" aria-label={tool.name}>
              {tool.icon}
            </span>
          </div>
        ))}
      </motion.div>
    </div>
  );
}
