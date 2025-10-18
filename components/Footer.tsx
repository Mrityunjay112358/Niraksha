"use client";

import { motion } from "framer-motion";
import { useState, useEffect } from "react";

export default function Footer() {
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 500);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <>
      <footer className="relative bg-beige border-t-2 border-deep-green/20 py-12 px-6 overflow-hidden">
        {/* Animated wave divider at top */}
        <div className="absolute top-0 left-0 right-0">
          <svg
            viewBox="0 0 1200 60"
            preserveAspectRatio="none"
            className="w-full h-8"
          >
            <motion.path
              d="M0,30 C300,50 900,10 1200,30 L1200,0 L0,0 Z"
              fill="#1F5E37"
              fillOpacity="0.05"
              initial={{ d: "M0,30 C300,50 900,10 1200,30 L1200,0 L0,0 Z" }}
              animate={{
                d: [
                  "M0,30 C300,50 900,10 1200,30 L1200,0 L0,0 Z",
                  "M0,30 C300,10 900,50 1200,30 L1200,0 L0,0 Z",
                  "M0,30 C300,50 900,10 1200,30 L1200,0 L0,0 Z",
                ],
              }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            />
          </svg>
        </div>

        <div className="max-w-6xl mx-auto relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            {/* Brand section */}
            <div>
              <h3 className="text-2xl font-bold text-deep-green mb-4">
                Niraksha
              </h3>
              <p className="text-deep-green/70 leading-relaxed">
                Building a sustainable future through AI-powered precision
                agriculture and drone technology.
              </p>
            </div>

            {/* Quick links */}
            <div>
              <h4 className="text-lg font-semibold text-deep-green mb-4">
                Quick Links
              </h4>
              <ul className="space-y-2">
                {["Home", "Mission", "Team", "Gallery", "Endorsements"].map(
                  (link) => (
                    <li key={link}>
                      <a
                        href={`#${link.toLowerCase()}`}
                        className="text-deep-green/70 hover:text-deep-green transition-colors duration-300 hover:underline"
                      >
                        {link}
                      </a>
                    </li>
                  )
                )}
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h4 className="text-lg font-semibold text-deep-green mb-4">
                Contact Us
              </h4>
              <div className="space-y-3">
                <a
                  href="tel:+919587913732"
                  className="flex items-center gap-2 text-deep-green/70 hover:text-deep-green transition-colors duration-300 group"
                >
                  <span className="text-xl">📞</span>
                  <span className="group-hover:underline">+91 9587913732</span>
                </a>
                <a
                  href="mailto:mrityunjay.coder@gmail.com"
                  className="flex items-center gap-2 text-deep-green/70 hover:text-deep-green transition-colors duration-300 group"
                >
                  <span className="text-xl">📧</span>
                  <span className="group-hover:underline break-all">
                    mrityunjay.coder@gmail.com
                  </span>
                </a>
                <motion.a
                  href="https://www.instagram.com/project.niraksha/"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.05 }}
                  className="flex items-center gap-2 text-deep-green/70 hover:text-deep-green transition-colors duration-300 group"
                >
                  <span className="text-xl">📸</span>
                  <span className="group-hover:underline">@project.niraksha</span>
                </motion.a>
              </div>
            </div>
          </div>

          {/* Bottom bar */}
          <div className="border-t border-deep-green/20 pt-8 text-center">
            <p className="text-deep-green/60">
              © 2025 Niraksha | Built for Sustainable Futures
            </p>
            <motion.p
              className="text-deep-green/40 text-sm mt-2"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
            >
              Pioneering AI-Driven Agricultural Innovation
            </motion.p>
          </div>
        </div>

        {/* Decorative elements */}
        <div className="absolute bottom-4 left-4 w-16 h-16 border-2 border-deep-green/10 rounded-full" />
        <div className="absolute top-4 right-4 w-12 h-12 border-2 border-deep-green/10 rounded-full" />
      </footer>

      {/* Scroll to top button */}
      <AnimatePresence>
        {showScrollTop && (
          <motion.button
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0 }}
            onClick={scrollToTop}
            className="fixed bottom-8 right-8 z-50 w-14 h-14 bg-deep-green text-beige rounded-full shadow-2xl hover:bg-deep-green/90 transition-colors duration-300 flex items-center justify-center group"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            {/* Drone icon */}
            <motion.div
              animate={{ y: [0, -3, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
              className="text-2xl"
            >
              🚁
            </motion.div>

            {/* Ripple effect */}
            <motion.div
              className="absolute inset-0 rounded-full border-2 border-deep-green"
              initial={{ scale: 1, opacity: 0.5 }}
              animate={{ scale: 1.5, opacity: 0 }}
              transition={{ duration: 1.5, repeat: Infinity }}
            />
          </motion.button>
        )}
      </AnimatePresence>
    </>
  );
}

// AnimatePresence component for exit animations
function AnimatePresence({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
