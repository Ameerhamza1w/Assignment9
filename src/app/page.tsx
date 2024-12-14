import HeroSection from "./components/HeroSection";
import Navbar from "./components/Navbar";
import Cards from "./components/Cards"

export default function Home() {
  console.log("Rendering Home Page");
  return (
<div>
  <Navbar />
  <HeroSection />
  <Cards />
</div>
  );
}
