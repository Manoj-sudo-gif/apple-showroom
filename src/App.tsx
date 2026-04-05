import { Navbar } from "./components/Navbar";
import { Hero } from "./components/Hero";
import { CameraFeature } from "./components/CameraFeature";
import { VideoShowcase } from "./components/VideoShowcase";
import { ProductPods } from "./components/ProductPods";
import { ARSection } from "./components/ARSection";
import { BookingSection } from "./components/BookingSection";
import { Footer } from "./components/Footer";

export default function App() {
  return (
    <div className="min-h-screen bg-black text-white selection:bg-white selection:text-black">
      <Navbar />
      <main>
        <Hero />
        <VideoShowcase />
        <CameraFeature />
        <ProductPods />
        <ARSection />
        <BookingSection />
      </main>
      <Footer />
    </div>
  );
}
