import { Navbar } from "./components/Navbar";
import { Hero } from "./components/Hero";
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
        <ProductPods />
        <ARSection />
        <BookingSection />
      </main>
      <Footer />
    </div>
  );
}
