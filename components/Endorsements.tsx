"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

export default function Endorsements() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const endorsements = [
    {
      title: "Technical Sponsorship",
      organization: "Paras Defence",
      description: "Leading defense technology partner",
      icon: "🛡️",
    },
    {
      title: "Technical Sponsorship",
      organization: "NextLeap Aeronautics",
      description: "Advanced aerospace solutions",
      icon: "✈️",
    },
    {
      title: "Letter of Recommendation",
      organization: "Ministry of Science & Technology",
      description: "Government of India recognition",
      icon: "🏛️",
    },
    {
      title: "Recognition",
      organization: "Maharashtra State Government",
      description: "State-level innovation award",
      icon: "⭐",
    },
  ];

  return (
    <section
      id="endorsements"
      ref={ref}
      className="relative min-h-screen py-20 px-6 bg-gradient-to-b from-tan to-beige overflow-hidden"
    >
      {/* Animated wave divider at top */}
      <div className="absolute top-0 left-0 right-0">
        <svg
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
          className="w-full h-16 md:h-24"
        >
          <motion.path
            d="M0,0 C300,100 900,100 1200,0 L1200,120 L0,120 Z"
            fill="#D7C9A3"
            initial={{ d: "M0,0 C300,100 900,100 1200,0 L1200,120 L0,120 Z" }}
            animate={{
              d: [
                "M0,0 C300,100 900,100 1200,0 L1200,120 L0,120 Z",
                "M0,0 C300,80 900,80 1200,0 L1200,120 L0,120 Z",
                "M0,0 C300,100 900,100 1200,0 L1200,120 L0,120 Z",
              ],
            }}
            transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto relative z-10 pt-16">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-6xl font-bold text-deep-green mb-6">
            Endorsements & Recognition
          </h2>
          <p className="text-xl text-deep-green/70 max-w-3xl mx-auto">
            Backed by industry leaders and recognized by government institutions
          </p>
          <div className="w-24 h-1 bg-deep-green mx-auto mt-6" />
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {endorsements.map((endorsement, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className="relative group"
            >
              <motion.div
                className="relative p-8 bg-beige rounded-3xl border-2 border-deep-green/30 overflow-hidden"
                whileHover={{ scale: 1.02, y: -5 }}
                transition={{ duration: 0.3 }}
              >
                {/* Animated gradient background */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-br from-deep-green/5 via-tan/20 to-deep-green/10"
                  animate={{
                    opacity: [0.5, 0.8, 0.5],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                />

                <div className="relative z-10">
                  {/* Icon */}
                  <motion.div
                    className="text-7xl mb-6"
                    animate={{
                      scale: [1, 1.1, 1],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      delay: index * 0.3,
                    }}
                  >
                    {endorsement.icon}
                  </motion.div>

                  {/* Title badge */}
                  <div className="inline-block mb-4">
                    <div className="px-4 py-2 bg-deep-green/10 rounded-full border border-deep-green/20">
                      <p className="text-sm font-semibold text-deep-green uppercase tracking-wide">
                        {endorsement.title}
                      </p>
                    </div>
                  </div>

                  {/* Organization name */}
                  <h3 className="text-2xl md:text-3xl font-bold text-deep-green mb-3">
                    {endorsement.organization}
                  </h3>

                  {/* Description */}
                  <p className="text-deep-green/70 leading-relaxed">
                    {endorsement.description}
                  </p>

                  {/* Sliding underline animation */}
                  <motion.div
                    className="absolute bottom-0 left-0 right-0 h-1 bg-deep-green"
                    initial={{ scaleX: 0 }}
                    whileHover={{ scaleX: 1 }}
                    transition={{ duration: 0.3 }}
                    style={{ transformOrigin: "left" }}
                  />
                </div>

                {/* Decorative corner accents */}
                <div className="absolute top-4 right-4 w-12 h-12 border-t-2 border-r-2 border-deep-green/20 rounded-tr-2xl" />
                <div className="absolute bottom-4 left-4 w-12 h-12 border-b-2 border-l-2 border-deep-green/20 rounded-bl-2xl" />
              </motion.div>
            </motion.div>
          ))}
        </div>

        {/* Achievement showcase */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="relative p-10 bg-gradient-to-br from-deep-green/10 to-transparent rounded-3xl border-2 border-deep-green/30 text-center"
        >
          <motion.div
            animate={{
              boxShadow: [
                "0 0 20px rgba(31, 94, 55, 0.1)",
                "0 0 40px rgba(31, 94, 55, 0.2)",
                "0 0 20px rgba(31, 94, 55, 0.1)",
              ],
            }}
            transition={{ duration: 3, repeat: Infinity }}
            className="inline-block"
          >
            <h3 className="text-3xl md:text-4xl font-bold text-deep-green mb-4">
              Pioneering Sustainable Innovation
            </h3>
          </motion.div>
          <p className="text-lg text-deep-green/70 max-w-3xl mx-auto leading-relaxed">
            Our partnerships and recognitions reflect our commitment to
            revolutionizing agriculture through cutting-edge drone technology and
            AI-powered solutions. Together with our partners, we're building a
            pest-free future.
          </p>

          {/* Animated badges */}
          <div className="flex flex-wrap justify-center gap-4 mt-8">
            {["Innovation", "Sustainability", "Technology", "Impact"].map(
              (badge, index) => (
                <motion.div
                  key={badge}
                  initial={{ opacity: 0, scale: 0 }}
                  animate={isInView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ duration: 0.5, delay: 1 + index * 0.1 }}
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  className="px-6 py-3 bg-deep-green text-beige rounded-full font-semibold shadow-lg"
                >
                  {badge}
                </motion.div>
              )
            )}
          </div>
        </motion.div>
      </div>

      {/* Floating award icons */}
      {[...Array(5)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute text-5xl opacity-10"
          initial={{
            x: Math.random() * (typeof window !== "undefined" ? window.innerWidth : 1000),
            y: -50,
          }}
          animate={{
            y: typeof window !== "undefined" ? window.innerHeight + 50 : 1000,
            rotate: 360,
          }}
          transition={{
            duration: 15 + Math.random() * 10,
            repeat: Infinity,
            delay: i * 2,
            ease: "linear",
          }}
        >
          🏆
        </motion.div>
      ))}
    </section>
  );
}
