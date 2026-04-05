import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Calculator, Calendar, CheckCircle2, ChevronRight, X, QrCode } from "lucide-react";

export function BookingSection() {
  const [tradeInValue, setTradeInValue] = useState<number | null>(null);
  const [isCalculating, setIsCalculating] = useState(false);
  const [showPass, setShowPass] = useState(false);
  const [passId, setPassId] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleCalculate = (e: React.FormEvent) => {
    e.preventDefault();
    setIsCalculating(true);
    setTimeout(() => {
      setTradeInValue(Math.floor(Math.random() * 40000) + 10000);
      setIsCalculating(false);
    }, 1500);
  };

  const handleBook = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    const formData = new FormData(e.currentTarget);
    const data = Object.fromEntries(formData.entries());

    try {
      const res = await fetch('/api/book-consultation', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data)
      });
      
      const result = await res.json();
      if (result.success) {
        setPassId(result.passId);
        setShowPass(true);
      }
    } catch (error) {
      console.error("Booking failed", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="py-32 bg-white text-black relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <h2 className="text-5xl md:text-7xl font-bold tracking-tighter mb-6">
            Expert Consultation.
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Book a personalized session at our Karur showroom. Discover the perfect device for you.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Trade-in Calculator */}
          <div className="bg-[#f5f5f7] p-10 rounded-[2.5rem]">
            <div className="flex items-center gap-4 mb-8">
              <div className="bg-black text-white p-3 rounded-2xl">
                <Calculator className="w-6 h-6" />
              </div>
              <h3 className="text-2xl font-semibold">Trade-in Calculator</h3>
            </div>
            
            <form onSubmit={handleCalculate} className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Current Device</label>
                <select className="w-full bg-white border border-gray-200 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-black">
                  <option>iPhone 16 Pro Max</option>
                  <option>iPhone 16 Pro</option>
                  <option>iPhone 15 Pro</option>
                  <option>Other Smartphone</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Condition</label>
                <select className="w-full bg-white border border-gray-200 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-black">
                  <option>Flawless</option>
                  <option>Good</option>
                  <option>Cracked Screen</option>
                </select>
              </div>
              <motion.button 
                whileTap={{ scale: 0.98 }}
                type="submit"
                disabled={isCalculating}
                className="w-full bg-black text-white rounded-full py-4 font-medium hover:bg-gray-800 transition-colors disabled:opacity-70"
              >
                {isCalculating ? "Calculating..." : "Get Estimate"}
              </motion.button>
            </form>

            <AnimatePresence>
              {tradeInValue && !isCalculating && (
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="mt-8 p-6 bg-white rounded-2xl border border-gray-100 text-center"
                >
                  <p className="text-sm text-gray-500 mb-2">Estimated Trade-in Value</p>
                  <p className="text-4xl font-bold text-black">₹{tradeInValue.toLocaleString()}</p>
                  <p className="text-sm text-gray-500 mt-2">Apply this towards your new iPhone 17 Pro or 17 Air.</p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Booking Form */}
          <div className="bg-[#f5f5f7] p-10 rounded-[2.5rem]">
            <div className="flex items-center gap-4 mb-8">
              <div className="bg-black text-white p-3 rounded-2xl">
                <Calendar className="w-6 h-6" />
              </div>
              <h3 className="text-2xl font-semibold">Book Appointment</h3>
            </div>

            <form onSubmit={handleBook} className="space-y-6">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">First Name</label>
                  <input required name="name" type="text" className="w-full bg-white border border-gray-200 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-black" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Last Name</label>
                  <input required type="text" className="w-full bg-white border border-gray-200 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-black" />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
                <input required name="email" type="email" className="w-full bg-white border border-gray-200 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-black" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Phone</label>
                <input required name="phone" type="tel" className="w-full bg-white border border-gray-200 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-black" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Preferred Date</label>
                <input required name="date" type="date" className="w-full bg-white border border-gray-200 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-black" />
              </div>
              <motion.button 
                whileTap={{ scale: 0.98 }}
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-black text-white rounded-full py-4 font-medium hover:bg-gray-800 transition-colors flex items-center justify-center gap-2"
              >
                {isSubmitting ? "Booking..." : "Confirm Booking"} <ChevronRight className="w-4 h-4" />
              </motion.button>
            </form>
          </div>
        </div>
      </div>

      {/* Digital Pass Modal */}
      <AnimatePresence>
        {showPass && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm">
            <motion.div 
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              className="bg-black text-white w-full max-w-md rounded-[2.5rem] overflow-hidden shadow-2xl relative"
            >
              <button 
                onClick={() => setShowPass(false)}
                className="absolute top-6 right-6 p-2 bg-white/10 rounded-full hover:bg-white/20 transition-colors z-10"
              >
                <X className="w-5 h-5" />
              </button>
              
              <div className="p-8 pb-0">
                <div className="flex justify-between items-start mb-8">
                  <div>
                    <h4 className="text-gray-400 font-medium tracking-widest text-xs mb-1">APPLE EXCLUSIVE</h4>
                    <h3 className="text-2xl font-bold">Karur Showroom</h3>
                  </div>
                  <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center">
                    <CheckCircle2 className="w-8 h-8 text-black" />
                  </div>
                </div>
                
                <div className="space-y-6">
                  <div>
                    <p className="text-gray-400 text-sm mb-1">Pass ID</p>
                    <p className="text-xl font-mono tracking-wider">{passId}</p>
                  </div>
                  <div>
                    <p className="text-gray-400 text-sm mb-1">Access</p>
                    <p className="text-lg">Priority In-Store Pickup & Grand Opening Invite</p>
                  </div>
                </div>
              </div>

              <div className="mt-8 p-8 bg-[#1d1d1f] flex justify-center">
                <QrCode className="w-48 h-48 text-white" />
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
