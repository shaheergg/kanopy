import "./App.css";
import AcclaimedMovies from "./components/AcclaimedMovies";
import CTA from "./components/CTA.JSX";
import Faqs from "./components/Faqs";
import Footer from "./components/Footer";
import HeroSection from "./components/HeroSection";
import Navbar from "./components/Navbar";
import Tabs from "./components/Tabs";

function App() {
  return (
    <>
      <Navbar />
      <HeroSection />
      <CTA />
      <AcclaimedMovies />
      <Tabs />
      <Faqs />
      <Footer />
    </>
  );
}

export default App;
