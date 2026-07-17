import { motion } from 'framer-motion';
import { ArrowRight, Download, ChevronDown } from 'lucide-react';
import './Hero.css';

const container = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { staggerChildren: 0.16, delayChildren: 0.2 },
  },
};

const item = {
  hidden: { opacity: 0, y: 16 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease: [0.4, 0, 0.2, 1] },
  },
};

function Hero() {
  return (
    <section id="hero" className="hero">
      <div className="hero-shell container">
        <motion.div className="hero-copy" variants={container} initial="hidden" animate="visible">
          <motion.span className="hero-badge" variants={item}>
            MERN Stack Developer
          </motion.span>
          <motion.h1 className="hero-title" variants={item}>
            I build clean, user-friendly web applications.
          </motion.h1>
          <motion.p className="hero-description" variants={item}>
            Modern apps with React, Node, Express, and MongoDB designed for clarity, speed, and a strong user experience.
          </motion.p>
          <motion.div className="hero-actions" variants={item}>
            <a href="#projects" className="btn btn-primary">
              View Projects
              <ArrowRight size={16} />
            </a>
            <a href="/cv/Manoj_Katuwal_CV.pdf" download className="btn btn-secondary">
              Download CV
              <Download size={16} />
            </a>
          </motion.div>
        </motion.div>
      </div>
      <motion.a href="#about" className="hero-scroll" initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.7, duration: 0.55 }}>
        <span>Scroll to learn more</span>
        <ChevronDown size={18} />
      </motion.a>
    </section>
  );
}

export default Hero;
