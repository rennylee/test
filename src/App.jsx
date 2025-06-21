import React from 'react';
import Hero from './components/Hero';
import Navbar from './components/Navbar';
import Skills from './components/Skills';
import Contact from './components/Contact';


function App() {
  return (
    <div className="relative">

      <Navbar />
      <Hero />
      <Skills />
      <Contact />
    </div>
  );
}

export default App;