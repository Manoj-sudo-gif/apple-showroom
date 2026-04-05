import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.5]);
  const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [1, 0.5, 0]);
  const y = useTransform(scrollYProgress, [0, 1], [0, 200]);

  return (
    <section ref={containerRef} className="relative h-[200vh] bg-black">
      <div className="sticky top-0 h-screen flex flex-col items-center justify-center overflow-hidden">
        <motion.div 
          style={{ opacity, y }}
          className="z-10 text-center mb-12"
        >
          <h2 className="text-xl md:text-2xl font-semibold tracking-widest text-gray-400 mb-4">KARUR EXCLUSIVE</h2>
          <h1 className="text-5xl md:text-8xl font-bold tracking-tighter text-white">
            iPhone 16 Pro
          </h1>
          <p className="mt-6 text-xl md:text-3xl text-gray-300 font-medium tracking-tight">
            Titanium. So strong. So light. So Pro.
          </p>
        </motion.div>

        <motion.div 
          style={{ scale }}
          className="relative w-full max-w-4xl aspect-video"
        >
          {/* Simulated high-end render */}
          <img 
            src="https://images.unsplash.com/photo-1695048133142-1a20484d2569?q=80&w=2070&auto=format&fit=crop" 
            alt="iPhone 16 Pro Titanium" 
            className="w-full h-full object-cover rounded-3xl opacity-80"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent"></div>
        </motion.div>
      </div>
    </section>
  );
}
