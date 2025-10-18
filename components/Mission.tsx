"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

export default function Mission() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const stats = [
    {
      title: "40% of crops lost to pests annually",
      description: "Billions in agricultural losses worldwide",
      icon: "🌾",
    },
    {
      title: "AI Vision & Drone Detection",
      description: "Niraksha counters insect-breeding at its source",
      icon: "🔍",
    },
    {
      title: "Real-time Hotspot Mapping",
      description: "Precision targeting without chemical overuse",
      icon: "📍",
    },
    {
      title: "Future Urban Expansion",
      description: "Preventing disease-spread and mosquito breeding in cities",
      icon: "🏙️",
    },
  ];

  return (
    <section
      id="mission"
      ref={ref}
      className="relative min-h-screen py-20 px-6 bg-gradient-to-b from-beige to-tan overflow-hidden"
    >
      {/* Parallax background textures */}
      <motion.div
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%231F5E37' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}
        animate={{ y: isInView ? [0, -20, 0] : 0 }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
      />

      <div className="max-w-6xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-6xl font-bold text-deep-green mb-6">
            Why Niraksha Exists
          </h2>
          <div className="w-24 h-1 bg-deep-green mx-auto" />
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="relative p-8 bg-beige/50 backdrop-blur-sm rounded-2xl border-2 border-deep-green/20 hover:border-deep-green/40 transition-all duration-300 group"
            >
              <motion.div
                className="absolute inset-0 bg-gradient-to-br from-deep-green/5 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                initial={false}
              />
              <div className="relative z-10">
                <div className="text-5xl mb-4">{stat.icon}</div>
                <h3 className="text-2xl font-semibold text-deep-green mb-3">
                  {stat.title}
                </h3>
                <p className="text-deep-green/70 leading-relaxed">
                  {stat.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Animated timeline */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={isInView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="relative p-10 bg-deep-green/10 backdrop-blur-md rounded-3xl border-2 border-deep-green/30"
        >
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="flex-1 text-center">
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                className="w-20 h-20 mx-auto mb-4 rounded-full border-4 border-deep-green flex items-center justify-center text-3xl"
              >
                🌱
              </motion.div>
              <h4 className="font-semibold text-deep-green text-lg">Problem Detection</h4>
            </div>

            <div className="flex-shrink-0">
              <motion.div
                animate={{ x: [0, 10, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="text-4xl text-deep-green"
              >
                →
              </motion.div>
            </div>

            <div className="flex-1 text-center">
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="w-20 h-20 mx-auto mb-4 rounded-full border-4 border-deep-green flex items-center justify-center text-3xl"
              >
                🚁
              </motion.div>
              <h4 className="font-semibold text-deep-green text-lg">Drone Mapping</h4>
            </div>

            <div className="flex-shrink-0">
              <motion.div
                animate={{ x: [0, 10, 0] }}
                transition={{ duration: 2, repeat: Infinity, delay: 0.5 }}
                className="text-4xl text-deep-green"
              >
                →
              </motion.div>
            </div>

            <div className="flex-1 text-center">
              <motion.div
                animate={{ scale: [1, 1.1, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="w-20 h-20 mx-auto mb-4 rounded-full border-4 border-deep-green flex items-center justify-center text-3xl"
              >
                ✓
              </motion.div>
              <h4 className="font-semibold text-deep-green text-lg">Precision Solution</h4>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Floating leaf animations */}
      {[...Array(5)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute text-4xl opacity-20"
          initial={{
            x: Math.random() * window.innerWidth,
            y: -50,
          }}
          animate={{
            y: typeof window !== "undefined" ? window.innerHeight + 50 : 1000,
            x: Math.random() * (typeof window !== "undefined" ? window.innerWidth : 1000),
            rotate: 360,
          }}
          transition={{
            duration: 15 + Math.random() * 10,
            repeat: Infinity,
            delay: i * 2,
            ease: "linear",
          }}
        >
          🍃
        </motion.div>
      ))}
    </section>
  );
}
