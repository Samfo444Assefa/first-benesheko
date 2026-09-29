import { useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import ExperienceIntro from "./components/ExperienceIntro";
import Destinations from "./components/Destinations";
import Culture from "./components/Culture";
import Heritage from "./components/Heritage";
import Food from "./components/Food";
import Regions from "./components/Regions";
import Journey from "./components/Journey";
import Footer from "./components/Footer";

function App() {
  const [entered, setEntered] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      document.querySelectorAll(".reveal").forEach((element) => {
        const rect = element.getBoundingClientRect();
        if (rect.top < window.innerHeight * 0.85) element.classList.add("active");
      });
    };
    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const enterExperience = () => {
    setEntered(true);
    setTimeout(() => document.getElementById("experience")?.scrollIntoView({ behavior: "smooth" }), 100);
  };

  return (
    <div className="min-h-screen bg-[#07120E]">
      {!entered ? <Hero onEnter={enterExperience} /> : <>
        <Navbar />
        <main>
          <ExperienceIntro />
          <Food />
          <Destinations />
          <Culture />
          <Heritage />
          
          <Regions />
          <Journey />
        </main>
        <Footer />
      </>}
    </div>
  );
}
export default App;