import { motion } from 'framer-motion';
import { ArrowRight, Download } from 'lucide-react';

function Hero() {
  return (
    <section id="hero" className="hero">
      <div className="container hero-grid">
        {/* Copy Section */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
        >
          <div className="hero-badge">
            <span className="hero-badge-pulse" />
            Java Full Stack Developer
          </div>
          
          <h1 className="hero-title">
            Crafting Scalable <span className="gradient-text">Backends</span> & Elegant <span className="gradient-text">Frontends</span>
          </h1>
          
          <p className="hero-description">
            Hi, I'm Manoj Katwal. I engineer high-performance systems with Java, Spring Boot, and create clean, fluid client experiences with React.
          </p>
          
          <div className="hero-actions">
            <a href="#projects" className="btn btn-primary">
              View Work
              <ArrowRight size={18} />
            </a>
            <a href="/cv/Manoj_Katuwal_CV.pdf" download className="btn btn-secondary">
              Resume
              <Download size={18} />
            </a>
          </div>
        </motion.div>

        {/* Ambient Graphics/Console Section */}
        <motion.div
          className="hero-art-container"
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: 'easeOut' }}
        >
          <div className="hero-glow-sphere" />
          
          <div className="glass-card hero-graphic-card">
            <div className="hero-graphic-code">
              <span style={{ color: '#E879F9' }}>const</span> developer = &#123;
              <br />
              &nbsp;&nbsp;name: <span style={{ color: '#38BDF8' }}>'Manoj Katwal'</span>,
              <br />
              &nbsp;&nbsp;role: <span style={{ color: '#38BDF8' }}>'Full Stack Engineer'</span>,
              <br />
              &nbsp;&nbsp;stack: [<span style={{ color: '#34D399' }}>'Java'</span>, <span style={{ color: '#34D399' }}>'Spring Boot'</span>, <span style={{ color: '#34D399' }}>'React'</span>],
              <br />
              &nbsp;&nbsp;location: <span style={{ color: '#38BDF8' }}>'Dharan, NP'</span>,
              <br />
              &nbsp;&nbsp;passion: <span style={{ color: '#FB7185' }}>'Clean Architecture'</span>
              <br />
              &#125;;
            </div>
            
            <div className="hero-graphic-lines">
              <div className="hero-graphic-line" style={{ width: '100%', background: 'linear-gradient(to right, var(--primary) 0%, transparent 100%)' }} />
              <div className="hero-graphic-line" style={{ width: '70%', background: 'linear-gradient(to right, var(--secondary) 0%, transparent 100%)' }} />
              <div className="hero-graphic-line" style={{ width: '40%', background: 'linear-gradient(to right, var(--accent) 0%, transparent 100%)' }} />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default Hero;
