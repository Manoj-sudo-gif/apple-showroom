import { motion, useScroll, useTransform } from "framer-motion";

export function Navbar() {
  const { scrollY } = useScroll();
  const backgroundColor = useTransform(
    scrollY,
    [0, 50],
    ["rgba(0, 0, 0, 0)", "rgba(0, 0, 0, 0.8)"]
  );
  const backdropFilter = useTransform(
    scrollY,
    [0, 50],
    ["blur(0px)", "blur(12px)"]
  );

  return (
    <motion.nav 
      style={{ backgroundColor, backdropFilter }}
      className="fixed top-0 left-0 right-0 z-50 transition-colors duration-300 border-b border-white/10"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-12 text-xs font-medium text-gray-300">
          <a href="#" className="hover:text-white transition-colors">
            {/* Apple Logo SVG */}
            <svg viewBox="0 0 14 18" className="w-4 h-4 fill-current"><path d="M13.8584 13.0641C13.8344 13.1361 13.4144 14.5881 12.3944 16.0761C11.4344 17.4681 10.4264 18.8481 8.8784 18.8721C7.3544 18.8961 6.8624 17.9601 5.1224 17.9601C3.3824 17.9601 2.8304 18.8481 1.3784 18.8961C-0.121601 18.9441 -1.2616 17.3961 -2.2216 16.0041C-4.1896 13.1601 -5.6776 8.1681 -3.6616 4.6641C-2.6536 2.9121 -0.8776 1.8081 0.9944 1.7841C2.4704 1.7601 3.8384 2.7921 4.7504 2.7921C5.6624 2.7921 7.3304 1.5441 9.0824 1.5201C9.7064 1.5201 11.4584 1.5801 12.6344 3.3081C12.5384 3.3681 10.5224 4.5441 10.5464 6.8961C10.5704 9.6801 12.9224 10.6161 13.0184 10.6641C12.9944 10.7361 12.6344 11.9601 13.8584 13.0641ZM9.3224 1.0401C10.1384 0.0560989 10.0904 -1.1439 10.0664 -1.3599C9.0584 -1.3119 7.7624 -0.6879 6.9464 0.2961C6.2264 1.1601 5.6264 2.4561 5.6984 3.6321C6.8264 3.7161 8.0264 3.0681 8.8184 2.1081C8.9864 1.8921 9.1784 1.4841 9.3224 1.0401Z" transform="translate(5.6776 1.3599)"/></svg>
          </a>
          <div className="hidden md:flex space-x-8">
            <a href="#" className="hover:text-white transition-colors">Store</a>
            <a href="#" className="hover:text-white transition-colors">Mac</a>
            <a href="#" className="hover:text-white transition-colors">iPad</a>
            <a href="#" className="hover:text-white transition-colors">iPhone</a>
            <a href="#" className="hover:text-white transition-colors">Watch</a>
            <a href="#" className="hover:text-white transition-colors">Vision</a>
            <a href="#" className="hover:text-white transition-colors">AirPods</a>
            <a href="#" className="hover:text-white transition-colors">TV & Home</a>
            <a href="#" className="hover:text-white transition-colors">Entertainment</a>
            <a href="#" className="hover:text-white transition-colors">Accessories</a>
            <a href="#" className="hover:text-white transition-colors">Support</a>
          </div>
          <div className="flex space-x-4">
            <a href="#" className="hover:text-white transition-colors">
              <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.3-4.3"/></svg>
            </a>
            <a href="#" className="hover:text-white transition-colors">
              <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4Z"/><path d="M3 6h18"/><path d="M16 10a4 4 0 0 1-8 0"/></svg>
            </a>
          </div>
        </div>
      </div>
    </motion.nav>
  );
}
