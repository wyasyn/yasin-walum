"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";

const words = [
  "web dev",
  "data science",
  "mobile apps",
  "AI solutions",
  "cybersecurity",
  "full-stack",
  "cloud tech",
  "ML",
];

export default function HeroSection() {
  const [currentWordIndex, setCurrentWordIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentWordIndex((prevIndex) => (prevIndex + 1) % words.length);
    }, 2000); // Change word every 2 seconds
    return () => clearInterval(interval);
  }, []);

  return (
    <h1
      style={{
        lineHeight: "1.2",
      }}
      className="text-5xl md:text-8xl text-balance font-medium text-heading my-8"
    >
      Building innovative solutions in{" "}
      <span className="text-muted relative inline-block">
        <AnimatePresence mode="wait">
          <motion.span
            key={words[currentWordIndex]}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
          >
            {words[currentWordIndex]}
          </motion.span>
        </AnimatePresence>
      </span>
    </h1>
  );
}
