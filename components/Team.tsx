"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";
import Image from "next/image";

interface TeamMember {
  name: string;
  role: string;
  category: string;
  image?: string;
}

export default function Team() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);

  const teamMembers: TeamMember[] = [
    { name: "Ruhaan Bhansali", role: "Founder", category: "Leadership" },
    { name: "Rehaan Dogra", role: "Founder", category: "Leadership", image: "/team/rehaan.jpeg" },
    { name: "Piyush Dhumal", role: "Founder", category: "Leadership" },
    { name: "Mrityunjay Gupta", role: "Co-Founder", category: "Leadership", image: "/team/mrityunjay.jpeg" },
    { name: "Aaditya Jain", role: "Co-Founder", category: "Leadership" },
    { name: "Ritwika", role: "Design Head", category: "Creative" },
    { name: "Yashkit Jain", role: "Outreach Head", category: "Operations" },
  ];

  return (
    <section
      id="team"
      ref={ref}
      className="relative min-h-screen py-20 px-6 bg-gradient-to-br from-tan via-beige to-tan overflow-hidden"
    >
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="w-full h-full"
          style={{
            backgroundImage: `radial-gradient(circle, #1F5E37 1px, transparent 1px)`,
            backgroundSize: "50px 50px",
          }}
        />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-6xl font-bold text-deep-green mb-6">
            Meet the Team
          </h2>
          <p className="text-xl text-deep-green/70 max-w-2xl mx-auto">
            Innovators, dreamers, and problem solvers united by a vision for
            sustainable agriculture
          </p>
          <div className="w-24 h-1 bg-deep-green mx-auto mt-6" />
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {teamMembers.map((member, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              onHoverStart={() => setHoveredCard(index)}
              onHoverEnd={() => setHoveredCard(null)}
              className="relative group"
            >
              <motion.div
                className="relative p-8 bg-beige rounded-2xl border-2 border-deep-green/20 overflow-hidden cursor-pointer"
                whileHover={{ y: -10 }}
                transition={{ duration: 0.3 }}
              >
                {/* Animated background gradient */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-br from-deep-green/10 via-transparent to-deep-green/5"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: hoveredCard === index ? 1 : 0 }}
                  transition={{ duration: 0.3 }}
                />

                {/* Profile image */}
                <div className="relative mb-6">
                  <motion.div
                    className="w-32 h-32 mx-auto rounded-full bg-gradient-to-br from-deep-green/20 to-tan border-4 border-deep-green/30 flex items-center justify-center text-5xl font-bold text-deep-green overflow-hidden"
                    animate={{
                      borderColor:
                        hoveredCard === index
                          ? "rgba(31, 94, 55, 0.6)"
                          : "rgba(31, 94, 55, 0.3)",
                    }}
                  >
                    {member.image ? (
                      <Image
                        src={member.image}
                        alt={member.name}
                        fill
                        className="object-contain"
                        sizes="128px"
                      />
                    ) : (
                      member.name.charAt(0)
                    )}
                  </motion.div>

                  {/* Animated ring on hover */}
                  <motion.div
                    className="absolute inset-0 rounded-full border-2 border-deep-green"
                    initial={{ scale: 0.8, opacity: 0 }}
                    animate={{
                      scale: hoveredCard === index ? 1.1 : 0.8,
                      opacity: hoveredCard === index ? 0.5 : 0,
                    }}
                    transition={{ duration: 0.4 }}
                  />
                </div>

                {/* Member info */}
                <div className="relative z-10 text-center">
                  <h3 className="text-2xl font-semibold text-deep-green mb-2">
                    {member.name}
                  </h3>
                  <div className="relative inline-block">
                    <p className="text-deep-green/70 font-medium">
                      {member.role}
                    </p>
                    <motion.div
                      className="absolute -bottom-1 left-0 right-0 h-0.5 bg-deep-green"
                      initial={{ scaleX: 0 }}
                      animate={{ scaleX: hoveredCard === index ? 1 : 0 }}
                      transition={{ duration: 0.3 }}
                    />
                  </div>
                  <p className="text-sm text-deep-green/50 mt-2">
                    {member.category}
                  </p>
                </div>

                {/* Decorative corner elements */}
                <motion.div
                  className="absolute top-0 right-0 w-16 h-16"
                  animate={{
                    rotate: hoveredCard === index ? 45 : 0,
                  }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="absolute top-3 right-3 w-3 h-3 border-t-2 border-r-2 border-deep-green/30" />
                </motion.div>
                <motion.div
                  className="absolute bottom-0 left-0 w-16 h-16"
                  animate={{
                    rotate: hoveredCard === index ? 45 : 0,
                  }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="absolute bottom-3 left-3 w-3 h-3 border-b-2 border-l-2 border-deep-green/30" />
                </motion.div>
              </motion.div>
            </motion.div>
          ))}
        </div>

        {/* Team collaboration message */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mt-16 text-center"
        >
          <p className="text-lg text-deep-green/70 italic">
            "Together, we're building a future where technology and nature work
            in harmony"
          </p>
        </motion.div>
      </div>

      {/* Animated particles */}
      {[...Array(8)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-2 h-2 bg-deep-green/20 rounded-full"
          initial={{
            x: Math.random() * (typeof window !== "undefined" ? window.innerWidth : 1000),
            y: Math.random() * (typeof window !== "undefined" ? window.innerHeight : 1000),
          }}
          animate={{
            y: [0, -30, 0],
            opacity: [0.2, 0.5, 0.2],
          }}
          transition={{
            duration: 3 + Math.random() * 2,
            repeat: Infinity,
            delay: i * 0.5,
          }}
        />
      ))}
    </section>
  );
}
