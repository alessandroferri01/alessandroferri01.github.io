import { Nav } from "./components/nav/Nav";
import { Hero } from "./components/sections/Hero";
import { About } from "./components/sections/About";
import { Skills } from "./components/sections/Skills";
import { Experience } from "./components/sections/Experience";
import { Certifications } from "./components/sections/Certifications";
import { CourseraCertifications } from "./components/sections/CourseraCertifications";
import { Contact } from "./components/sections/Contact";
import { Chatbot } from "./components/chatbot/Chatbot";

function App() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Certifications />
        <CourseraCertifications />
        <Contact />
      </main>
      <Chatbot />
    </>
  );
}

export default App;
