export function Footer() {
  return (
    <footer className="bg-[#f5f5f7] text-gray-500 py-12 text-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Map Placeholder */}
        <div className="w-full h-64 bg-gray-200 rounded-3xl mb-12 overflow-hidden relative grayscale opacity-70 hover:grayscale-0 hover:opacity-100 transition-all duration-500">
          <img 
            src="https://images.unsplash.com/photo-1524661135-423995f22d0b?q=80&w=2074&auto=format&fit=crop" 
            alt="Map of Karur" 
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
            <div className="bg-black text-white px-6 py-3 rounded-full font-medium text-sm shadow-xl flex items-center gap-2">
              <div className="w-2 h-2 bg-white rounded-full animate-pulse"></div>
              Apple Exclusive Showroom, Karur
            </div>
          </div>
        </div>

        <div className="border-b border-gray-300 pb-8 mb-8">
          <p className="mb-4">
            1. Trade-in values will vary based on the condition, year, and configuration of your eligible trade-in device. Not all devices are eligible for credit. You must be at least 18 years old to be eligible to trade in for credit or for an Apple Gift Card.
          </p>
          <p>
            To access and use all the features of Apple Card, you must add Apple Card to Wallet on an iPhone or iPad with the latest version of iOS or iPadOS. Update to the latest version by going to Settings {'>'} General {'>'} Software Update. Tap Download and Install.
          </p>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <p>Copyright © 2026 Apple Inc. All rights reserved. (Mockup for Karur Showroom)</p>
          <div className="flex gap-4">
            <a href="#" className="hover:text-gray-800 transition-colors">Privacy Policy</a>
            <span className="text-gray-300">|</span>
            <a href="#" className="hover:text-gray-800 transition-colors">Terms of Use</a>
            <span className="text-gray-300">|</span>
            <a href="#" className="hover:text-gray-800 transition-colors">Sales and Refunds</a>
            <span className="text-gray-300">|</span>
            <a href="#" className="hover:text-gray-800 transition-colors">Legal</a>
            <span className="text-gray-300">|</span>
            <a href="#" className="hover:text-gray-800 transition-colors">Site Map</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
