import React from 'react';
import { useDarkMode } from './hooks/useDarkMode';
import Navbar from './components/Navbar/Navbar';
import Hero from './components/Hero/Hero';
import About from './components/About/About';
import Contact from './components/Contact/Contact';
import Projects from './components/Project/Projects';
import Skills from './components/Skills/Skills';
import Footer from './components/Footer/Footer';


function App() {
  const [isDark, setIsDark] = useDarkMode();

  const toggleDark = () => {
    setIsDark(!isDark);
  };




  return (
    <div className={isDark ? 'dark' : 'bg-black'}>
      <div className="min-h-screen  dark:bg-gray-900 text-gray-900 dark:text-white">
        <Navbar isDark={isDark} toggleDark={toggleDark} />
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Contact />
        <Footer />
      </div>
    </div>
  );
}

export default App;