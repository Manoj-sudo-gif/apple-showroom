import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export function CameraFeature() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  // Background scale and opacity
  const bgScale = useTransform(scrollYProgress, [0, 1], [1, 1.3]);
  const bgOpacity = useTransform(scrollYProgress, [0, 0.8, 1], [1, 1, 0.2]);

  // Text block opacities and positions
  const text1Opacity = useTransform(scrollYProgress, [0, 0.1, 0.25, 0.35], [0, 1, 1, 0]);
  const text1Y = useTransform(scrollYProgress, [0, 0.1, 0.35], [50, 0, -50]);

  const text2Opacity = useTransform(scrollYProgress, [0.35, 0.45, 0.6, 0.7], [0, 1, 1, 0]);
  const text2Y = useTransform(scrollYProgress, [0.35, 0.45, 0.7], [50, 0, -50]);

  const text3Opacity = useTransform(scrollYProgress, [0.7, 0.8, 0.95, 1], [0, 1, 1, 0]);
  const text3Y = useTransform(scrollYProgress, [0.7, 0.8, 1], [50, 0, -50]);

  return (
    <section ref={containerRef} className="relative h-[400vh] bg-black">
      <div className="sticky top-0 h-screen overflow-hidden flex items-center justify-center">
        <motion.div 
          style={{ scale: bgScale, opacity: bgOpacity }}
          className="absolute inset-0 z-0"
        >
          <img 
            src="https://images.unsplash.com/photo-1616348436168-de43ad0db179?q=80&w=2070&auto=format&fit=crop" 
            alt="iPhone 17 Pro Camera" 
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-black/50 backdrop-blur-[2px]"></div>
        </motion.div>

        <div className="relative z-10 w-full max-w-6xl mx-auto px-6">
          <motion.div style={{ opacity: text1Opacity, y: text1Y }} className="absolute top-1/2 -translate-y-1/2 left-6 md:left-20">
            <h4 className="text-[#ff8c00] font-semibold tracking-widest mb-2">MAIN CAMERA</h4>
            <h3 className="text-5xl md:text-8xl font-bold text-white mb-6 tracking-tighter">48MP.<br/>Pure detail.</h3>
            <p className="text-xl md:text-2xl text-gray-300 max-w-md font-medium">
              A massive new custom sensor captures light like never before, delivering unprecedented resolution and dynamic range.
            </p>
          </motion.div>

          <motion.div style={{ opacity: text2Opacity, y: text2Y }} className="absolute top-1/2 -translate-y-1/2 right-6 md:right-20 text-right">
            <h4 className="text-[#ff8c00] font-semibold tracking-widest mb-2">ULTRA WIDE</h4>
            <h3 className="text-5xl md:text-8xl font-bold text-white mb-6 tracking-tighter">Wider.<br/>Sharper.</h3>
            <p className="text-xl md:text-2xl text-gray-300 max-w-md ml-auto font-medium">
              Macro photography redefined. Get closer to your subjects with stunning clarity and an expansive field of view.
            </p>
          </motion.div>

          <motion.div style={{ opacity: text3Opacity, y: text3Y }} className="absolute top-1/2 -translate-y-1/2 left-6 md:left-20">
            <h4 className="text-[#ff8c00] font-semibold tracking-widest mb-2">TELEPHOTO</h4>
            <h3 className="text-5xl md:text-8xl font-bold text-white mb-6 tracking-tighter">10x Optical.<br/>Go further.</h3>
            <p className="text-xl md:text-2xl text-gray-300 max-w-md font-medium">
              The longest optical zoom ever in an iPhone. Bring the world to you with the revolutionary tetraprism design.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
