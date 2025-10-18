"use client";

import { motion } from "framer-motion";
import { useState, useEffect } from "react";

export default function Hero() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  const ripples = [0, 1, 2, 3];

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-beige via-tan to-beige">
      {/* Animated ripple background */}
      <div className="absolute inset-0 overflow-hidden">
        {ripples.map((i) => (
          <motion.div
            key={i}
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full border-2 border-deep-green/10"
            initial={{ width: 0, height: 0, opacity: 0.8 }}
            animate={{
              width: [0, 800, 1600],
              height: [0, 800, 1600],
              opacity: [0.8, 0.4, 0],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              delay: i * 2,
              ease: "easeOut",
            }}
          />
        ))}
      </div>

      {/* Parallax drone silhouette */}
      <motion.div
        className="absolute top-1/4 right-1/4 w-64 h-64 opacity-20"
        animate={{
          y: [0, -30, 0],
          rotate: [0, 5, 0],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        style={{
          x: mousePosition.x * 0.02,
          y: mousePosition.y * 0.02,
        }}
      >
        <svg viewBox="0 0 200 200" className="w-full h-full fill-deep-green">
          <circle cx="100" cy="100" r="15" />
          <rect x="85" y="95" width="30" height="10" rx="2" />
          <line x1="100" y1="85" x2="100" y2="40" stroke="currentColor" strokeWidth="3" />
          <circle cx="100" cy="35" r="8" />
          {[0, 90, 180, 270].map((angle) => (
            <g key={angle} transform={`rotate(${angle} 100 100)`}>
              <line x1="115" y1="100" x2="140" y2="100" stroke="currentColor" strokeWidth="2" />
              <motion.circle
                cx="145"
                cy="100"
                r="12"
                animate={{ rotate: 360 }}
                transition={{ duration: 0.5, repeat: Infinity, ease: "linear" }}
              />
            </g>
          ))}
        </svg>
      </motion.div>

      {/* Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
        <motion.h1
          className="text-6xl md:text-8xl font-bold mb-6 text-deep-green"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          Niraksha
        </motion.h1>

        <motion.p
          className="text-2xl md:text-4xl font-semibold mb-4 text-deep-green/90"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
        >
          AI-Powered Precision for a Pest-Free Planet
        </motion.p>

        <motion.p
          className="text-lg md:text-xl mb-12 text-deep-green/70 max-w-3xl mx-auto"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.6 }}
        >
          An intelligent drone system countering pest breeding and enabling
          sustainable agriculture
        </motion.p>

        <motion.div
          className="flex flex-col sm:flex-row gap-6 justify-center items-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.9 }}
        >
          <button
            onClick={() =>
              document
                .getElementById("mission")
                ?.scrollIntoView({ behavior: "smooth" })
            }
            className="group relative px-8 py-4 bg-deep-green text-beige font-semibold rounded-full overflow-hidden transition-all duration-300 hover:scale-105"
          >
            <span className="relative z-10">Explore</span>
            <motion.div
              className="absolute inset-0 bg-deep-green/80"
              initial={{ x: "-100%" }}
              whileHover={{ x: 0 }}
              transition={{ duration: 0.3 }}
            />
          </button>

          <button className="group px-8 py-4 border-2 border-deep-green text-deep-green font-semibold rounded-full transition-all duration-300 hover:bg-deep-green hover:text-beige hover:scale-105">
            Watch Drone in Action
          </button>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-10 left-1/2 -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <div className="w-6 h-10 border-2 border-deep-green rounded-full flex justify-center">
          <motion.div
            className="w-1.5 h-1.5 bg-deep-green rounded-full mt-2"
            animate={{ y: [0, 16, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          />
        </div>
      </motion.div>
    </section>
  );
}
