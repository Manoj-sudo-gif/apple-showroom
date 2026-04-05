import { motion } from "framer-motion";
import { QrCode } from "lucide-react";

export function ARSection() {
  return (
    <section className="py-32 bg-black relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-5xl md:text-7xl font-bold tracking-tighter mb-6">
              See it in your space.
            </h2>
            <p className="text-xl text-gray-400 mb-10 max-w-lg">
              Use Augmented Reality to see how the new iPhone 16 Pro or MacBook Pro looks on your desk. Scan the code to start the experience.
            </p>
            
            <div className="flex items-center gap-6 p-6 bg-[#1d1d1f] rounded-3xl inline-flex">
              <div className="bg-white p-2 rounded-xl">
                <QrCode className="w-24 h-24 text-black" />
              </div>
              <div>
                <p className="text-sm font-medium text-gray-400 uppercase tracking-wider mb-1">Scan with iPhone</p>
                <p className="text-lg font-semibold">AR Quick Look</p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="relative h-[600px] rounded-[3rem] overflow-hidden border border-white/10"
          >
            <img 
              src="https://images.unsplash.com/photo-1611186871348-b1ce696e52c9?q=80&w=2070&auto=format&fit=crop" 
              alt="AR Experience" 
              className="absolute inset-0 w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-tr from-black/60 to-transparent" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
