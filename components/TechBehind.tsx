"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

export default function TechBehind() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const hardwareComponents = [
    {
      id: 1,
      icon: "🛠️",
      title: "Frame & Propulsion",
      specs: ["S550 Carbon Fiber Frame", "T-Motor Air Gear 350 setup"],
    },
    {
      id: 2,
      icon: "🎯",
      title: "Flight Controller",
      specs: ["Hex Pixhawk Cube+ with Here3 RTK GNSS", "±0.1 m accuracy"],
    },
    {
      id: 3,
      icon: "💻",
      title: "Processor",
      specs: ["Raspberry Pi 4 (8GB)", "Onboard real-time analysis"],
    },
    {
      id: 4,
      icon: "📷",
      title: "Camera",
      specs: [
        "Global Shutter 16mm lens",
        "Synchronized with GNSS timestamps",
      ],
    },
    {
      id: 5,
      icon: "📡",
      title: "Transmission",
      specs: ["Skydroid T12 controller", "Video + telemetry"],
    },
    {
      id: 6,
      icon: "⚙️",
      title: "Power Module",
      specs: ["UBEC 5V/3A", "For Pi + camera"],
    },
    {
      id: 7,
      icon: "🔋",
      title: "Battery",
      specs: ["14.8V 10,000mAh Li-ion", "Extended flight endurance"],
    },
  ];

  const aiPipeline = [
    {
      id: 1,
      icon: "📹",
      title: "Data Capture",
      description: "Drone footage (10–15 m altitude, 70% overlap)",
      color: "from-[#F5E9C7] to-[#E9DEB3]",
    },
    {
      id: 2,
      icon: "🔧",
      title: "Preprocessing",
      description:
        "Lighting normalization, CLAHE enhancement, vegetation masking",
      color: "from-[#E9DEB3] to-[#DDD5A8]",
    },
    {
      id: 3,
      icon: "🧩",
      title: "Segmentation",
      description: "DeepLabv3+ (ResNet-50)\n→ Canopy, soil, disease patches",
      color: "from-[#DDD5A8] to-[#C9D9B5]",
    },
    {
      id: 4,
      icon: "🎯",
      title: "Detection",
      description: "YOLOv8-s\n→ Pest clusters, eggs, containers",
      color: "from-[#C9D9B5] to-[#B5D9BE]",
    },
    {
      id: 5,
      icon: "🔍",
      title: "Anomaly Detection",
      description: "DINOv2 embeddings\n→ Unknown/unseen damage patterns",
      color: "from-[#B5D9BE] to-[#A3D5BF]",
    },
    {
      id: 6,
      icon: "🧠",
      title: "Fusion Layer",
      description: "Combines outputs into comprehensive risk maps",
      color: "from-[#A3D5BF] to-[#8FD0B8]",
    },
    {
      id: 7,
      icon: "🗺️",
      title: "Visualization",
      description: "Georeferenced hotspot maps\n(PDF, KML, WhatsApp reports)",
      color: "from-[#8FD0B8] to-[#7CC9B0]",
    },
  ];

  return (
    <section
      id="tech"
      ref={ref}
      className="relative min-h-screen py-20 px-6 bg-gradient-to-b from-[#F5E9C7] via-[#EFE6C7] to-[#E9DEB3] overflow-hidden"
    >
      {/* Animated drone flying across */}
      <motion.div
        className="absolute top-20 text-6xl opacity-20 z-0"
        initial={{ x: -100, y: 50 }}
        animate={
          isInView
            ? {
                x:
                  typeof window !== "undefined"
                    ? window.innerWidth + 100
                    : 1500,
                y: [50, 30, 50],
              }
            : {}
        }
        transition={{
          x: { duration: 20, ease: "linear", repeat: Infinity },
          y: { duration: 3, repeat: Infinity, ease: "easeInOut" },
        }}
      >
        🚁
      </motion.div>

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Section Title */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <h2 className="text-5xl md:text-6xl font-bold text-[#1F5E37] mb-6">
            The Tech Behind Niraksha
          </h2>
          <p className="text-lg md:text-xl text-[#1F5E37]/70 max-w-4xl mx-auto leading-relaxed">
            At the intersection of engineering and intelligence — Niraksha
            combines advanced drone hardware and AI to map pest hotspots with
            centimeter-level precision, minimizing pesticide use and maximizing
            yield.
          </p>
          <div className="w-32 h-1 bg-[#1F5E37] mx-auto mt-8" />
        </motion.div>

        {/* Hardware Architecture Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-32"
        >
          <h3 className="text-4xl font-bold text-[#1F5E37] mb-4 text-center">
            ⚙️ Drone Hardware Architecture
          </h3>
          <p className="text-center text-[#1F5E37]/60 mb-12 italic">
            Modular components engineered for precision and endurance
          </p>

          {/* Vertical Flowchart */}
          <div className="relative max-w-2xl mx-auto">
            {/* Central connecting line */}
            <motion.div
              className="absolute left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-[#D7C9A3] via-[#1F5E37]/30 to-[#D7C9A3] -translate-x-1/2"
              initial={{ scaleY: 0 }}
              animate={isInView ? { scaleY: 1 } : {}}
              transition={{ duration: 1.5, delay: 0.5 }}
              style={{ transformOrigin: "top" }}
            />

            {/* Hardware Components */}
            {hardwareComponents.map((component, index) => (
              <motion.div
                key={component.id}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.6 + index * 0.15 }}
                className="relative mb-8 last:mb-0"
              >
                <div
                  className={`flex items-start gap-4 ${
                    index % 2 === 0 ? "flex-row" : "flex-row-reverse"
                  }`}
                >
                  {/* Spacer for alternating layout */}
                  <div className="flex-1" />

                  {/* Component Card */}
                  <motion.div
                    whileHover={{ scale: 1.03, y: -5 }}
                    className="flex-1 group"
                  >
                    <div className="relative bg-[#F8F5E4] border-2 border-[#D7C9A3] rounded-2xl p-6 shadow-md transition-all duration-300 hover:shadow-xl hover:border-[#1F5E37]">
                      {/* Hover glow */}
                      <motion.div
                        className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
                        style={{
                          background:
                            "radial-gradient(circle at center, rgba(31, 94, 55, 0.1) 0%, transparent 70%)",
                        }}
                      />

                      <div className="relative z-10 flex items-start gap-4">
                        {/* Icon */}
                        <div className="text-5xl flex-shrink-0">
                          {component.icon}
                        </div>

                        {/* Content */}
                        <div className="flex-1">
                          <h4 className="text-xl font-bold text-[#1F5E37] mb-2">
                            {component.title}
                          </h4>
                          {component.specs.map((spec, idx) => (
                            <p
                              key={idx}
                              className="text-[#1F5E37]/70 text-sm leading-relaxed"
                            >
                              {spec}
                            </p>
                          ))}
                        </div>
                      </div>

                      {/* Connection dot */}
                      <motion.div
                        className={`absolute top-1/2 ${
                          index % 2 === 0 ? "right-0" : "left-0"
                        } w-4 h-4 bg-[#1F5E37] rounded-full -translate-y-1/2 ${
                          index % 2 === 0 ? "translate-x-1/2" : "-translate-x-1/2"
                        }`}
                        initial={{ scale: 0 }}
                        animate={isInView ? { scale: 1 } : {}}
                        transition={{ delay: 0.8 + index * 0.15 }}
                      >
                        <motion.div
                          className="absolute inset-0 rounded-full bg-[#1F5E37]"
                          animate={{
                            scale: [1, 1.5, 1],
                            opacity: [1, 0, 1],
                          }}
                          transition={{
                            duration: 2,
                            repeat: Infinity,
                            delay: index * 0.3,
                          }}
                        />
                      </motion.div>
                    </div>
                  </motion.div>
                </div>

                {/* Curved connecting line to next component */}
                {index < hardwareComponents.length - 1 && (
                  <svg
                    className="absolute left-1/2 -translate-x-1/2 pointer-events-none"
                    style={{
                      top: "100%",
                      width: "2px",
                      height: "32px",
                    }}
                  >
                    <motion.line
                      x1="1"
                      y1="0"
                      x2="1"
                      y2="32"
                      stroke="#1F5E37"
                      strokeWidth="2"
                      strokeDasharray="4,4"
                      initial={{ pathLength: 0 }}
                      animate={isInView ? { pathLength: 1 } : {}}
                      transition={{ delay: 0.8 + index * 0.15, duration: 0.3 }}
                    />
                  </svg>
                )}
              </motion.div>
            ))}
          </div>

          {/* Caption */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ delay: 2.5 }}
            className="text-center text-[#1F5E37]/70 mt-12 italic max-w-3xl mx-auto text-lg"
          >
            "Precision-engineered components working in harmony to detect and
            map pest hotspots with centimeter-level accuracy."
          </motion.p>
        </motion.div>

        {/* Transition Animation */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={isInView ? { opacity: 1, scale: 1 } : {}}
          transition={{ delay: 2.8, duration: 0.8 }}
          className="flex justify-center mb-20"
        >
          <motion.div
            animate={{ y: [0, 15, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            className="text-7xl text-[#1F5E37]/30"
          >
            ⬇
          </motion.div>
        </motion.div>

        {/* AI/ML Pipeline Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 3 }}
        >
          <h3 className="text-4xl font-bold text-[#1F5E37] mb-4 text-center">
            🧠 AI/ML Pipeline
          </h3>
          <p className="text-center text-[#1F5E37]/60 mb-12 italic">
            From raw footage to actionable intelligence
          </p>

          {/* Horizontal Pipeline Flow */}
          <div className="relative overflow-x-auto pb-8 pt-6">
            <div className="flex items-center gap-6 min-w-max px-4 md:px-8">
              {aiPipeline.map((stage, index) => (
                <div key={stage.id} className="flex items-center">
                  {/* Stage Card */}
                  <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={isInView ? { opacity: 1, scale: 1 } : {}}
                    transition={{ delay: 3.2 + index * 0.2, duration: 0.5 }}
                    whileHover={{ scale: 1.05, y: -8 }}
                    className="relative w-72 pt-4"
                  >
                    <div
                      className={`relative bg-gradient-to-br ${stage.color} border-2 border-[#1F5E37]/30 rounded-2xl p-6 pt-8 shadow-lg hover:shadow-2xl hover:border-[#1F5E37] transition-all duration-300 overflow-visible`}
                    >
                      {/* Stage number badge - positioned better */}
                      <div className="absolute -top-4 left-1/2 -translate-x-1/2 w-12 h-12 bg-[#1F5E37] text-white rounded-full flex items-center justify-center font-bold text-xl shadow-lg z-10 border-4 border-white">
                        {stage.id}
                      </div>

                      {/* Icon */}
                      <div className="text-5xl mb-4 text-center">
                        {stage.icon}
                      </div>

                      {/* Title */}
                      <h4 className="text-xl font-bold text-[#1F5E37] mb-3 text-center min-h-[3.5rem] flex items-center justify-center">
                        {stage.title}
                      </h4>

                      {/* Description */}
                      <p className="text-[#1F5E37]/70 text-sm leading-relaxed text-center whitespace-pre-line min-h-[4.5rem]">
                        {stage.description}
                      </p>
                    </div>
                  </motion.div>

                  {/* Arrow connector */}
                  {index < aiPipeline.length - 1 && (
                    <motion.div
                      initial={{ opacity: 0, x: -20 }}
                      animate={isInView ? { opacity: 1, x: 0 } : {}}
                      transition={{ delay: 3.3 + index * 0.2, duration: 0.4 }}
                      className="flex-shrink-0 pt-4"
                    >
                      <motion.svg
                        width="60"
                        height="60"
                        viewBox="0 0 60 60"
                        className="text-[#1F5E37]/40"
                      >
                        <motion.path
                          d="M 10 30 L 45 30 L 40 25 M 45 30 L 40 35"
                          stroke="currentColor"
                          strokeWidth="3"
                          fill="none"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          initial={{ pathLength: 0 }}
                          animate={isInView ? { pathLength: 1 } : {}}
                          transition={{
                            delay: 3.4 + index * 0.2,
                            duration: 0.5,
                          }}
                        />
                      </motion.svg>
                    </motion.div>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Performance Metrics */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 4.5 }}
            className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6"
          >
            {[
              {
                label: "mIoU",
                value: "≥ 0.85",
                desc: "Segmentation Accuracy",
                icon: "🎯",
              },
              {
                label: "mAP@0.5",
                value: "≥ 0.92",
                desc: "Detection Precision",
                icon: "🔍",
              },
              {
                label: "F1 Score",
                value: "≈ 0.91",
                desc: "Overall Performance",
                icon: "⭐",
              },
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 4.6 + index * 0.1 }}
                whileHover={{ scale: 1.05, y: -5 }}
                className="relative bg-gradient-to-br from-[#1F5E37] to-[#2a7d4d] text-white rounded-2xl p-8 text-center shadow-xl overflow-hidden"
              >
                {/* Background decoration */}
                <div className="absolute top-0 right-0 text-8xl opacity-10">
                  {stat.icon}
                </div>

                <div className="relative z-10">
                  <div className="text-sm font-semibold mb-2 opacity-90 uppercase tracking-wide">
                    {stat.label}
                  </div>
                  <div className="text-5xl font-bold mb-2">{stat.value}</div>
                  <div className="text-sm opacity-80">{stat.desc}</div>
                </div>

                {/* Shine effect on hover */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
                  initial={{ x: "-100%" }}
                  whileHover={{ x: "100%" }}
                  transition={{ duration: 0.6 }}
                />
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>

      {/* Floating AI icons */}
      {[
        { icon: "💾", delay: 0 },
        { icon: "🔬", delay: 0.5 },
        { icon: "📊", delay: 1 },
        { icon: "🌐", delay: 1.5 },
      ].map((item, i) => (
        <motion.div
          key={i}
          className="absolute text-4xl opacity-10"
          initial={{
            x:
              Math.random() *
              (typeof window !== "undefined" ? window.innerWidth : 1000),
            y: Math.random() * 500,
          }}
          animate={{
            y: [0, -40, 0],
            opacity: [0.1, 0.2, 0.1],
          }}
          transition={{
            duration: 4 + Math.random() * 2,
            repeat: Infinity,
            delay: item.delay,
          }}
        >
          {item.icon}
        </motion.div>
      ))}
    </section>
  );
}
