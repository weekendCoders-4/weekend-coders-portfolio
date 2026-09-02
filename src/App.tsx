import { Navbar } from "./components/layout/Navbar";
import { Footer } from "./components/layout/Footer";
import { BackgroundMesh } from "./components/ui/BackgroundMesh";
import { Marquee } from "./components/ui/Marquee";
import { Hero } from "./components/sections/Hero";
import { Stats } from "./components/sections/Stats";
import { About } from "./components/sections/About";
import { Services } from "./components/sections/Services";
import { Work } from "./components/sections/Work";
import { HowWeWork } from "./components/sections/HowWeWork";
import { Team } from "./components/sections/Team";
import { TechStack } from "./components/sections/TechStack";
import { WhyUs } from "./components/sections/WhyUs";
import { CTA } from "./components/sections/CTA";
import { Contact } from "./components/sections/Contact";

function App() {
  return (
    <>
      <BackgroundMesh />
      <Navbar />
      <main>
        <Hero />
        <Stats />
        <Marquee />
        <About />
        <Services />
        <Work />
        <HowWeWork />
        <Team />
        <TechStack />
        <WhyUs />
        <CTA />
        <Contact />
      </main>
      <Footer />
    </>
  );
}

export default App;
