import React from "react";
import "./App.css";
import Header from "./components/Header";
import AboutSection from "./components/AboutSection";
import PortfolioSection from "./components/PortfolioSection";
import SkillsSection from "./components/SkillsSection";
import Contact from "./components/Contact";

function App() {
  return (
    <>
      <Header />
      <AboutSection />
      <PortfolioSection />
      <SkillsSection />
      <Contact />
    </>
  );
}

export default App;
