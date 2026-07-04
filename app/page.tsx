import CursorAnimation from './components/CursorAnimation';
import Navbar from './components/Navbar';
import HomeHero from './components/HomeHero';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function Home() {
  return (
    <div className='font-sora scroll-smooth overflow-x-hidden bg-white text-black min-h-screen'>
      <CursorAnimation />
      <Navbar />
      <HomeHero />
      <Projects />
      <Skills />
      <Contact />
      <Footer />
    </div>
  );
}
