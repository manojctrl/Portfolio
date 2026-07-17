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
            MERN Stack Developer
          </div>
          
          <h1 className="hero-title">
            Crafting Interactive <span className="gradient-text">UIs</span> &amp; Scalable <span className="gradient-text">APIs</span>
          </h1>
          
          <p className="hero-description">
            Hi, I'm Manoj Katwal. I design responsive frontend clients using React, integrated with high-performance servers built on Node.js, Express, and MongoDB.
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
              &nbsp;&nbsp;role: <span style={{ color: '#38BDF8' }}>'MERN Stack Developer'</span>,
              <br />
              &nbsp;&nbsp;stack: [<span style={{ color: '#34D399' }}>'Mongo'</span>, <span style={{ color: '#34D399' }}>'Express'</span>, <span style={{ color: '#34D399' }}>'React'</span>, <span style={{ color: '#34D399' }}>'Node'</span>],
              <br />
              &nbsp;&nbsp;location: <span style={{ color: '#38BDF8' }}>'Dharan, NP'</span>,
              <br />
              &nbsp;&nbsp;focus: <span style={{ color: '#FB7185' }}>'REST APIs &amp; Client UI'</span>
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
