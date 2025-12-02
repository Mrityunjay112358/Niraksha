"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";
import Image from "next/image";

interface TeamMember {
  name: string;
  role: string;
  image?: string;
}

export default function Team() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);

  const teamMembers: TeamMember[] = [
    { name: "Ruhaan Bhansali", role: "Founder" },
    { name: "Rehaan Dogra", role: "Founder", image: "/team/rehaan.jpeg" },
    { name: "Piyush Dhumal", role: "Founder" },
    { name: "Mrityunjay Gupta", role: "Co-Founder", image: "/team/mrityunjay.jpeg" },
    { name: "Aaditya Jain", role: "Co-Founder" },
    { name: "Daksh Jain", role: "Co-Founder", image: "/team/daksh.jpeg" },
    { name: "Ritwika Sinwer", role: "Design Head" },
    { name: "Yashkit Jain", role: "Outreach Head" },
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

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {teamMembers.map((member, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              onHoverStart={() => setHoveredCard(index)}
              onHoverEnd={() => setHoveredCard(null)}
              whileHover={{ scale: 1.05 }}
              className="relative"
            >
              <motion.div
                className="flex flex-col items-center bg-[#EFE6C7] rounded-2xl shadow-md p-8 transition-all duration-300 h-full"
                style={{
                  boxShadow:
                    hoveredCard === index
                      ? "0 20px 40px rgba(31, 94, 55, 0.2)"
                      : "0 10px 20px rgba(0, 0, 0, 0.1)",
                }}
              >
                {/* Radial background glow on hover */}
                <motion.div
                  className="absolute inset-0 rounded-2xl opacity-0 pointer-events-none"
                  animate={{
                    opacity: hoveredCard === index ? 1 : 0,
                  }}
                  transition={{ duration: 0.3 }}
                  style={{
                    background:
                      "radial-gradient(circle at center, rgba(31, 94, 55, 0.08) 0%, transparent 70%)",
                  }}
                />

                {/* Profile image */}
                <div className="relative mb-6">
                  <motion.div
                    className="w-40 h-40 mx-auto rounded-full bg-gradient-to-br from-deep-green/10 to-tan/20 border-4 border-[#1F5E37] flex items-center justify-center text-6xl font-bold text-deep-green overflow-hidden shadow-sm"
                    animate={{
                      boxShadow:
                        hoveredCard === index
                          ? "0 8px 20px rgba(31, 94, 55, 0.3)"
                          : "0 4px 10px rgba(0, 0, 0, 0.1)",
                    }}
                    transition={{ duration: 0.3 }}
                  >
                    {member.image ? (
                      <Image
                        src={member.image}
                        alt={member.name}
                        fill
                        className="object-cover"
                        sizes="160px"
                      />
                    ) : (
                      member.name.charAt(0)
                    )}
                  </motion.div>
                </div>

                {/* Member info */}
                <div className="relative z-10 text-center">
                  <h3 className="text-2xl font-bold text-[#1F5E37] mb-2">
                    {member.name}
                  </h3>

                  {/* Green underline that grows on hover */}
                  <div className="relative inline-block mb-2">
                    <p className="text-[#3B7D41] font-semibold text-lg">
                      {member.role}
                    </p>
                    <motion.div
                      className="absolute -bottom-1 left-0 right-0 h-0.5 bg-[#1F5E37]"
                      initial={{ scaleX: 0 }}
                      animate={{ scaleX: hoveredCard === index ? 1 : 0 }}
                      transition={{ duration: 0.3 }}
                      style={{ transformOrigin: "center" }}
                    />
                  </div>
                </div>
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
