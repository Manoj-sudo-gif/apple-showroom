import { motion } from "framer-motion";

export function VideoShowcase() {
  return (
    <section className="relative h-screen bg-black flex items-center justify-center overflow-hidden">
      <video 
        autoPlay 
        loop 
        muted 
        playsInline 
        className="absolute inset-0 w-full h-full object-cover opacity-50"
      >
        <source src="https://cdn.pixabay.com/video/2020/08/20/47638-451556028_large.mp4" type="video/mp4" />
      </video>
      <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black"></div>
      
      <div className="relative z-10 text-center px-4">
        <motion.h2 
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1, type: "spring" }}
          className="text-6xl md:text-9xl font-bold text-white tracking-tighter mb-6"
        >
          A19 Pro.
        </motion.h2>
        <motion.p 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.2 }}
          className="text-2xl md:text-4xl text-gray-300 font-medium max-w-3xl mx-auto tracking-tight"
        >
          A new era of Apple Silicon. Mind-bending graphics. Unprecedented Apple Intelligence performance.
        </motion.p>
      </div>
    </section>
  );
}
