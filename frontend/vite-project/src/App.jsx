import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Projects from './components/Projects';
import Skills from './components/Skills';
import About from './components/About';
import Journey from './components/Journey';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="app">
      {/* Premium ambient glows & grid */}
      <div className="bg-glow-container">
        <div className="bg-grid-pattern" />
        <div className="bg-glow-1" />
        <div className="bg-glow-2" />
      </div>
      
      <Navbar />
      <main>
        <Hero />
        <Projects />
        <Skills />
        <About />
        <Journey />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
