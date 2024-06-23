"use client"

import HeroContent from "./components/Home/HeroContent";
import Skills from "./components/Home/Skills";
import EssentialSkills from "./components/Home/EssentialSkills";

export default function Home() {
  return (
    <div className="home-page">
      <HeroContent />
      <Skills />
      <EssentialSkills />
    </div>
  );
}
