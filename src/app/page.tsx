"use client"

import HeroContent from "./components/Home/HeroContent";
import Skills from "./components/Home/Skills";

export default function Home() {
  return (
    <div className="home-page">
      <HeroContent />
      <Skills />
    </div>
  );
}
