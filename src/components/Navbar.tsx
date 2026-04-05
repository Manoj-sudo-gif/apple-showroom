import { Search, ShoppingBag } from "lucide-react";

export function Navbar() {
  return (
    <div className="fixed top-0 left-0 right-0 z-50">
      <nav className="bg-black text-[#f5f5f7] text-xs font-medium">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-12">
            <a href="#" className="hover:text-white transition-colors opacity-80 hover:opacity-100">
              {/* Apple Logo SVG */}
              <svg viewBox="0 0 14 18" className="w-4 h-4 fill-current"><path d="M13.8584 13.0641C13.8344 13.1361 13.4144 14.5881 12.3944 16.0761C11.4344 17.4681 10.4264 18.8481 8.8784 18.8721C7.3544 18.8961 6.8624 17.9601 5.1224 17.9601C3.3824 17.9601 2.8304 18.8481 1.3784 18.8961C-0.121601 18.9441 -1.2616 17.3961 -2.2216 16.0041C-4.1896 13.1601 -5.6776 8.1681 -3.6616 4.6641C-2.6536 2.9121 -0.8776 1.8081 0.9944 1.7841C2.4704 1.7601 3.8384 2.7921 4.7504 2.7921C5.6624 2.7921 7.3304 1.5441 9.0824 1.5201C9.7064 1.5201 11.4584 1.5801 12.6344 3.3081C12.5384 3.3681 10.5224 4.5441 10.5464 6.8961C10.5704 9.6801 12.9224 10.6161 13.0184 10.6641C12.9944 10.7361 12.6344 11.9601 13.8584 13.0641ZM9.3224 1.0401C10.1384 0.0560989 10.0904 -1.1439 10.0664 -1.3599C9.0584 -1.3119 7.7624 -0.6879 6.9464 0.2961C6.2264 1.1601 5.6264 2.4561 5.6984 3.6321C6.8264 3.7161 8.0264 3.0681 8.8184 2.1081C8.9864 1.8921 9.1784 1.4841 9.3224 1.0401Z" transform="translate(5.6776 1.3599)"/></svg>
            </a>
            <div className="hidden md:flex space-x-8">
              <a href="#" className="hover:text-white transition-colors opacity-80 hover:opacity-100">Store</a>
              <a href="#" className="hover:text-white transition-colors opacity-80 hover:opacity-100">Mac</a>
              <a href="#" className="hover:text-white transition-colors opacity-80 hover:opacity-100">iPad</a>
              <a href="#" className="hover:text-white transition-colors opacity-80 hover:opacity-100">iPhone</a>
              <a href="#" className="hover:text-white transition-colors opacity-80 hover:opacity-100">Watch</a>
              <a href="#" className="hover:text-white transition-colors opacity-80 hover:opacity-100">AirPods</a>
              <a href="#" className="hover:text-white transition-colors opacity-80 hover:opacity-100">TV & Home</a>
              <a href="#" className="hover:text-white transition-colors opacity-80 hover:opacity-100">Entertainment</a>
              <a href="#" className="hover:text-white transition-colors opacity-80 hover:opacity-100">Accessories</a>
              <a href="#" className="hover:text-white transition-colors opacity-80 hover:opacity-100">Support</a>
            </div>
            <div className="flex space-x-6">
              <a href="#" className="hover:text-white transition-colors opacity-80 hover:opacity-100">
                <Search className="w-4 h-4" />
              </a>
              <a href="#" className="hover:text-white transition-colors opacity-80 hover:opacity-100">
                <ShoppingBag className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      </nav>
      <div className="bg-[#1d1d1f] text-white text-[13px] py-3 text-center border-b border-white/10">
        Get ₹5000 instant cashback on iPhone 17 Pro with eligible cards. Plus up to 6 months of No Cost EMI.‡ <a href="#" className="text-[#2997ff] hover:underline">Buy &gt;</a>
      </div>
    </div>
  );
}
