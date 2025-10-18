"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";
import Image from "next/image";

export default function Gallery() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [selectedMedia, setSelectedMedia] = useState<number | null>(null);

  const galleryItems = [
    {
      type: "image",
      src: "/gallery/dronemaking1.jpeg",
      title: "Drone Assembly",
      description: "Building Niraksha from the ground up",
    },
    {
      type: "image",
      src: "/gallery/dronemaking2.jpeg",
      title: "Technical Development",
      description: "Precision engineering and assembly",
    },
    {
      type: "video",
      src: "/gallery/initial testing.mp4",
      title: "Initial Testing",
      description: "First flight tests and calibration",
    },
    {
      type: "video",
      src: "/gallery/usage in farms.mp4",
      title: "Field Deployment",
      description: "Real-world agricultural mapping in action",
    },
  ];

  const nextMedia = () => {
    if (selectedMedia !== null) {
      setSelectedMedia((selectedMedia + 1) % galleryItems.length);
    }
  };

  const prevMedia = () => {
    if (selectedMedia !== null) {
      setSelectedMedia(
        selectedMedia === 0 ? galleryItems.length - 1 : selectedMedia - 1
      );
    }
  };

  return (
    <section
      id="gallery"
      ref={ref}
      className="relative min-h-screen py-20 px-6 bg-beige overflow-hidden"
    >
      {/* Animated dust particles */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-deep-green/10 rounded-full"
            initial={{
              x: Math.random() * (typeof window !== "undefined" ? window.innerWidth : 1000),
              y: -10,
            }}
            animate={{
              y: typeof window !== "undefined" ? window.innerHeight + 10 : 1000,
              x: Math.random() * (typeof window !== "undefined" ? window.innerWidth : 1000),
            }}
            transition={{
              duration: 10 + Math.random() * 10,
              repeat: Infinity,
              delay: Math.random() * 5,
              ease: "linear",
            }}
          />
        ))}
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-6xl font-bold text-deep-green mb-6">
            Gallery
          </h2>
          <p className="text-xl text-deep-green/70 italic mb-6">
            "Mapping the unseen — one flight at a time"
          </p>
          <div className="w-24 h-1 bg-deep-green mx-auto" />
        </motion.div>

        {/* Photobook style layout */}
        <div className="flex flex-col gap-12">
          {galleryItems.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50, rotateY: -10 }}
              animate={isInView ? { opacity: 1, y: 0, rotateY: 0 } : {}}
              transition={{ duration: 0.8, delay: index * 0.3 }}
              className="relative group"
              style={{ perspective: "1000px" }}
            >
              {/* Photobook page effect */}
              <motion.div
                className={`relative ${
                  index % 2 === 0 ? "md:pr-20" : "md:pl-20"
                } ${index % 2 === 0 ? "md:mr-auto" : "md:ml-auto"} max-w-5xl`}
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                {/* Shadow and page curl effect */}
                <div className="absolute inset-0 bg-deep-green/5 rounded-2xl transform translate-x-2 translate-y-2 blur-sm" />

                <div
                  onClick={() => setSelectedMedia(index)}
                  className="relative bg-white p-4 md:p-8 rounded-2xl shadow-2xl cursor-pointer border-4 border-tan/30 overflow-hidden"
                >
                  {/* Tape effect at corners */}
                  <div className="absolute top-2 left-2 w-16 h-8 bg-tan/40 -rotate-45 blur-[1px]" />
                  <div className="absolute top-2 right-2 w-16 h-8 bg-tan/40 rotate-45 blur-[1px]" />

                  {item.type === "image" ? (
                    <div className="relative aspect-[4/3] bg-tan/10 rounded-lg overflow-hidden">
                      <Image
                        src={item.src}
                        alt={item.title}
                        fill
                        className="object-cover"
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 70vw"
                      />
                      {/* Hover overlay */}
                      <motion.div
                        className="absolute inset-0 bg-deep-green/80 flex items-center justify-center"
                        initial={{ opacity: 0 }}
                        whileHover={{ opacity: 1 }}
                        transition={{ duration: 0.3 }}
                      >
                        <span className="text-beige text-2xl">🔍 View</span>
                      </motion.div>
                    </div>
                  ) : (
                    <div className="relative aspect-video bg-black rounded-lg overflow-hidden">
                      <video
                        src={item.src}
                        className="w-full h-full object-cover"
                        loop
                        muted
                        playsInline
                        onMouseEnter={(e) => e.currentTarget.play()}
                        onMouseLeave={(e) => {
                          e.currentTarget.pause();
                          e.currentTarget.currentTime = 0;
                        }}
                      />
                      {/* Play button overlay */}
                      <motion.div
                        className="absolute inset-0 bg-deep-green/60 flex items-center justify-center pointer-events-none"
                        initial={{ opacity: 1 }}
                        whileHover={{ opacity: 0 }}
                      >
                        <div className="w-20 h-20 rounded-full bg-beige/90 flex items-center justify-center">
                          <svg
                            className="w-10 h-10 ml-1 text-deep-green"
                            fill="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path d="M8 5v14l11-7z" />
                          </svg>
                        </div>
                      </motion.div>
                    </div>
                  )}

                  {/* Caption - handwritten style */}
                  <div className="mt-4 md:mt-6">
                    <h3 className="text-2xl md:text-3xl font-semibold text-deep-green mb-2">
                      {item.title}
                    </h3>
                    <p className="text-deep-green/70 text-base md:text-lg italic">
                      {item.description}
                    </p>
                  </div>

                  {/* Page number */}
                  <div className="absolute bottom-4 right-4 text-deep-green/30 font-semibold text-sm">
                    {index + 1} / {galleryItems.length}
                  </div>
                </div>

                {/* Binding spine effect for alternating sides */}
                <div
                  className={`absolute top-0 ${
                    index % 2 === 0 ? "right-0" : "left-0"
                  } w-6 h-full bg-gradient-to-r ${
                    index % 2 === 0
                      ? "from-transparent to-deep-green/10"
                      : "from-deep-green/10 to-transparent"
                  } rounded-lg hidden md:block`}
                />
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Lightbox modal with navigation */}
      <AnimatePresence>
        {selectedMedia !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedMedia(null)}
            className="fixed inset-0 bg-deep-green/95 backdrop-blur-md z-50 flex items-center justify-center p-4 md:p-6"
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="relative max-w-6xl w-full"
            >
              {/* Close button */}
              <button
                onClick={() => setSelectedMedia(null)}
                className="absolute -top-12 right-0 text-beige text-4xl hover:rotate-90 transition-transform duration-300 z-10"
              >
                ×
              </button>

              {/* Navigation buttons */}
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  prevMedia();
                }}
                className="absolute left-0 md:-left-16 top-1/2 -translate-y-1/2 text-beige text-5xl hover:scale-110 transition-transform duration-300 z-10 bg-deep-green/50 rounded-full w-12 h-12 flex items-center justify-center"
              >
                ‹
              </button>
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  nextMedia();
                }}
                className="absolute right-0 md:-right-16 top-1/2 -translate-y-1/2 text-beige text-5xl hover:scale-110 transition-transform duration-300 z-10 bg-deep-green/50 rounded-full w-12 h-12 flex items-center justify-center"
              >
                ›
              </button>

              {/* Media display */}
              <div className="bg-beige p-4 md:p-8 rounded-2xl">
                {galleryItems[selectedMedia].type === "image" ? (
                  <div className="relative aspect-[4/3] bg-tan/10 rounded-lg overflow-hidden">
                    <Image
                      src={galleryItems[selectedMedia].src}
                      alt={galleryItems[selectedMedia].title}
                      fill
                      className="object-contain"
                      sizes="90vw"
                    />
                  </div>
                ) : (
                  <div className="relative aspect-video bg-black rounded-lg overflow-hidden">
                    <video
                      src={galleryItems[selectedMedia].src}
                      className="w-full h-full object-contain"
                      controls
                      autoPlay
                      loop
                    />
                  </div>
                )}

                {/* Caption */}
                <div className="mt-6 text-center">
                  <h3 className="text-deep-green text-2xl md:text-3xl font-semibold mb-2">
                    {galleryItems[selectedMedia].title}
                  </h3>
                  <p className="text-deep-green/70 text-base md:text-lg">
                    {galleryItems[selectedMedia].description}
                  </p>
                  <p className="text-deep-green/50 text-sm mt-2">
                    {selectedMedia + 1} / {galleryItems.length}
                  </p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Floating leaves */}
      {[...Array(6)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute text-3xl opacity-10"
          initial={{
            x: Math.random() * (typeof window !== "undefined" ? window.innerWidth : 1000),
            y: typeof window !== "undefined" ? window.innerHeight : 1000,
            rotate: 0,
          }}
          animate={{
            y: -100,
            x: Math.random() * (typeof window !== "undefined" ? window.innerWidth : 1000),
            rotate: 360,
          }}
          transition={{
            duration: 20 + Math.random() * 10,
            repeat: Infinity,
            delay: i * 3,
            ease: "linear",
          }}
        >
          🍂
        </motion.div>
      ))}
    </section>
  );
}
