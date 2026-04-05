import { motion } from "framer-motion";
import { ChevronRight } from "lucide-react";

const products = [
  {
    id: "iphone",
    name: "iPhone 16 Pro",
    tagline: "The ultimate iPhone.",
    image: "https://images.unsplash.com/photo-1695048133142-1a20484d2569?q=80&w=800&auto=format&fit=crop",
    specs: ["A18 Pro chip", "Titanium design", "48MP Ultra Wide camera"]
  },
  {
    id: "macbook",
    name: "MacBook Pro",
    tagline: "Mind-blowing. Head-turning.",
    image: "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?q=80&w=800&auto=format&fit=crop",
    specs: ["M3 Max chip", "Liquid Retina XDR", "Up to 22 hrs battery"]
  },
  {
    id: "watch",
    name: "Apple Watch Ultra 2",
    tagline: "Next-level adventure.",
    image: "https://images.unsplash.com/photo-1696446701796-da61225697cc?q=80&w=800&auto=format&fit=crop",
    specs: ["Titanium case", "Precision dual-frequency GPS", "Up to 36 hrs battery"]
  }
];

export function ProductPods() {
  return (
    <section className="py-32 bg-[#1d1d1f] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl md:text-6xl font-bold mb-16 tracking-tight">The Apple Ecosystem.</h2>
        
        <div className="flex overflow-x-auto gap-8 pb-12 no-scrollbar snap-x snap-mandatory">
          {products.map((product) => (
            <motion.div
              key={product.id}
              whileHover={{ scale: 1.02 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
              className="relative flex-none w-[85vw] md:w-[400px] h-[500px] rounded-3xl overflow-hidden snap-center group cursor-pointer bg-black"
            >
              <img 
                src={product.image} 
                alt={product.name}
                className="absolute inset-0 w-full h-full object-cover opacity-60 group-hover:opacity-40 transition-opacity duration-500"
                referrerPolicy="no-referrer"
              />
              
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

              <div className="absolute inset-0 p-8 flex flex-col justify-end">
                <h3 className="text-3xl font-bold text-white mb-2">{product.name}</h3>
                <p className="text-gray-300 mb-6">{product.tagline}</p>
                
                {/* Glassmorphism Specs - reveals on hover */}
                <div className="opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-500 backdrop-blur-md bg-white/10 border border-white/20 rounded-2xl p-4">
                  <ul className="space-y-2">
                    {product.specs.map((spec, i) => (
                      <li key={i} className="text-sm text-gray-200 flex items-center">
                        <span className="w-1.5 h-1.5 rounded-full bg-white mr-2" />
                        {spec}
                      </li>
                    ))}
                  </ul>
                  <button className="mt-4 flex items-center text-sm font-medium text-white hover:underline">
                    Learn more <ChevronRight className="w-4 h-4 ml-1" />
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
