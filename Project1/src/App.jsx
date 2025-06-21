import React from 'react';
import Header from './components/Header';
import About from './components/About';
import Skills from './components/Skills'; //
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <>
      <Header />
      <div className="container">
        <About />
        <Skills />  
        <Projects />
        <Contact />
      </div>
      <Footer />
    </>
  );
}

export default App;
