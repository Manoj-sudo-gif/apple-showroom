import { motion, AnimatePresence } from "framer-motion";
import { ChevronRight, X, CheckCircle2 } from "lucide-react";
import { useState } from "react";

const products = [
  {
    id: "iphone-17-pro-max",
    name: "iPhone 17 Pro Max",
    tagline: "The ultimate iPhone.",
    image: "https://www.apple.com/newsroom/images/2025/09/apple-unveils-iphone-17-pro-and-iphone-17-pro-max/article/Apple-iPhone-17-Pro-cosmic-orange-250909_inline.jpg.large.jpg",
    specs: ["A19 Pro chip", "Titanium design", "48MP Telephoto camera"],
    details: "Experience the pinnacle of smartphone technology. The iPhone 17 Pro Max features a massive 6.9-inch ProMotion display, the revolutionary A19 Pro chip, and a camera system that rivals professional gear."
  },
  {
    id: "iphone-17-pro",
    name: "iPhone 17 Pro",
    tagline: "Pro power. Pro design.",
    image: "https://www.myimaginestore.com/media/catalog/product/cache/4a48ac28cbb6e9c41470e5be5a6d3043/i/p/iphone_17_pro_max_silver_pdp_image_position_1__en-in.jpg",
    specs: ["A19 Pro chip", "Titanium design", "ProMotion display"],
    details: "Incredible power in a perfect size. The iPhone 17 Pro brings the A19 Pro chip and aerospace-grade titanium to a 6.3-inch form factor."
  },
  {
    id: "iphone-17-air",
    name: "iPhone 17 Air",
    tagline: "Impossibly thin.",
    image: "https://iplanet.one/cdn/shop/files/IMG-18071547_m_jpeg_1_f53519b8-d143-4f2e-a48d-a544589a8edd.jpg?v=1757450020&width=1445",
    specs: ["A19 chip", "Ultra-slim aluminum", "Stunning new design"],
    details: "A design marvel. The iPhone 17 Air is the thinnest iPhone ever created, featuring a stunning new aluminum chassis and the powerful A19 chip."
  },
 
];

export function ProductPods() {
  const [selectedProduct, setSelectedProduct] = useState<string | null>(null);

  return (
    <section className="py-32 bg-[#1d1d1f] overflow-hidden relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl md:text-6xl font-bold mb-16 tracking-tight text-white">The iPhone 17 Lineup.</h2>
        
        <div className="flex overflow-x-auto gap-8 pb-12 no-scrollbar snap-x snap-mandatory">
          {products.map((product) => (
            <motion.div
              key={product.id}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={() => setSelectedProduct(product.id)}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
              className="relative flex-none w-[85vw] md:w-[400px] h-[500px] rounded-3xl overflow-hidden snap-center group cursor-pointer bg-black border border-white/5 hover:border-white/20 transition-colors"
            >
              <img 
                src={product.image} 
                alt={product.name}
                className="absolute inset-0 w-full h-full object-cover opacity-60 group-hover:opacity-40 transition-opacity duration-500"
                referrerPolicy="no-referrer"
              />
              
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent" />

              <div className="absolute inset-0 p-8 flex flex-col justify-end">
                <h3 className="text-3xl font-bold text-white mb-2">{product.name}</h3>
                <p className="text-gray-300 mb-6">{product.tagline}</p>
                
                <div className="opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-500 backdrop-blur-md bg-white/10 border border-white/20 rounded-2xl p-4">
                  <ul className="space-y-2">
                    {product.specs.map((spec, i) => (
                      <li key={i} className="text-sm text-gray-200 flex items-center">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#ff8c00] mr-2" />
                        {spec}
                      </li>
                    ))}
                  </ul>
                  <div className="mt-4 flex items-center text-sm font-medium text-[#ff8c00]">
                    Tap to explore <ChevronRight className="w-4 h-4 ml-1" />
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Interactive Modal */}
      <AnimatePresence>
        {selectedProduct && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-lg">
            <motion.div 
              initial={{ opacity: 0, scale: 0.9, y: 50 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 50 }}
              className="bg-[#1d1d1f] w-full max-w-4xl rounded-[2.5rem] overflow-hidden shadow-2xl relative flex flex-col md:flex-row border border-white/10"
            >
              <button 
                onClick={() => setSelectedProduct(null)}
                className="absolute top-6 right-6 p-2 bg-white/10 rounded-full hover:bg-white/20 transition-colors z-10 text-white"
              >
                <X className="w-5 h-5" />
              </button>
              
              {products.filter(p => p.id === selectedProduct).map(product => (
                <div key={product.id} className="flex flex-col md:flex-row w-full">
                  <div className="w-full md:w-1/2 h-64 md:h-auto relative">
                    <img 
                      src={product.image} 
                      alt={product.name}
                      className="absolute inset-0 w-full h-full object-cover"
                      referrerPolicy="no-referrer"
                    />
                  </div>
                  <div className="w-full md:w-1/2 p-10 md:p-16 flex flex-col justify-center">
                    <h4 className="text-[#ff8c00] font-semibold tracking-widest text-sm mb-2">OVERVIEW</h4>
                    <h3 className="text-4xl font-bold text-white mb-4">{product.name}</h3>
                    <p className="text-gray-300 text-lg mb-8 leading-relaxed">{product.details}</p>
                    
                    <div className="space-y-4 mb-8">
                      {product.specs.map((spec, i) => (
                        <div key={i} className="flex items-center text-white bg-white/5 p-4 rounded-xl border border-white/10">
                          <CheckCircle2 className="w-5 h-5 text-[#ff8c00] mr-3" />
                          <span className="font-medium">{spec}</span>
                        </div>
                      ))}
                    </div>

                    <button className="bg-white text-black rounded-full py-4 px-8 font-semibold hover:bg-gray-200 transition-colors w-full">
                      Buy Now
                    </button>
                  </div>
                </div>
              ))}
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
