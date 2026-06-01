import { useEffect, useRef, useCallback } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Download, ChevronDown } from 'lucide-react';
import './Hero.css';

/* ===== Particle Canvas Background ===== */
function ParticleCanvas() {
  const canvasRef = useRef(null);
  const animationRef = useRef(null);
  const particlesRef = useRef([]);
  const mouseRef = useRef({ x: -1000, y: -1000 });

  const initParticles = useCallback((width, height) => {
    const count = Math.min(Math.floor((width * height) / 12000), 80);
    const particles = [];
    for (let i = 0; i < count; i++) {
      particles.push({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.4,
        vy: (Math.random() - 0.5) * 0.4,
        radius: Math.random() * 1.5 + 0.5,
        opacity: Math.random() * 0.4 + 0.1,
      });
    }
    return particles;
  }, []);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    let width, height;

    const resize = () => {
      const rect = canvas.parentElement.getBoundingClientRect();
      const dpr = window.devicePixelRatio || 1;
      width = rect.width;
      height = rect.height;
      canvas.width = width * dpr;
      canvas.height = height * dpr;
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;
      ctx.scale(dpr, dpr);
      particlesRef.current = initParticles(width, height);
    };

    const handleMouseMove = (e) => {
      const rect = canvas.getBoundingClientRect();
      mouseRef.current = { x: e.clientX - rect.left, y: e.clientY - rect.top };
    };

    const handleMouseLeave = () => {
      mouseRef.current = { x: -1000, y: -1000 };
    };

    const draw = () => {
      ctx.clearRect(0, 0, width, height);
      const particles = particlesRef.current;
      const connectionDist = 120;
      const mouse = mouseRef.current;

      // Update & draw particles
      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];

        // Move
        p.x += p.vx;
        p.y += p.vy;

        // Wrap around edges
        if (p.x < 0) p.x = width;
        if (p.x > width) p.x = 0;
        if (p.y < 0) p.y = height;
        if (p.y > height) p.y = 0;

        // Mouse repulsion
        const dxM = p.x - mouse.x;
        const dyM = p.y - mouse.y;
        const distMouse = Math.sqrt(dxM * dxM + dyM * dyM);
        if (distMouse < 150) {
          const force = (150 - distMouse) / 150;
          p.x += (dxM / distMouse) * force * 1.2;
          p.y += (dyM / distMouse) * force * 1.2;
        }

        // Draw dot
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(148, 163, 184, ${p.opacity})`;
        ctx.fill();

        // Draw connections
        for (let j = i + 1; j < particles.length; j++) {
          const q = particles[j];
          const dx = p.x - q.x;
          const dy = p.y - q.y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < connectionDist) {
            const alpha = (1 - dist / connectionDist) * 0.15;
            ctx.beginPath();
            ctx.moveTo(p.x, p.y);
            ctx.lineTo(q.x, q.y);
            ctx.strokeStyle = `rgba(59, 130, 246, ${alpha})`;
            ctx.lineWidth = 0.5;
            ctx.stroke();
          }
        }
      }

      animationRef.current = requestAnimationFrame(draw);
    };

    resize();
    draw();

    window.addEventListener('resize', resize);
    canvas.addEventListener('mousemove', handleMouseMove);
    canvas.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      cancelAnimationFrame(animationRef.current);
      window.removeEventListener('resize', resize);
      canvas.removeEventListener('mousemove', handleMouseMove);
      canvas.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, [initParticles]);

  return (
    <div className="hero-particles">
      <canvas ref={canvasRef} />
    </div>
  );
}

/* ===== Floating Tech Pills Data ===== */
const techPills = [
  { label: 'Java', icon: '☕', className: 'floating-pill--java' },
  { label: 'React', icon: '⚛', className: 'floating-pill--react' },
  { label: 'Spring', icon: '🍃', className: 'floating-pill--spring' },
  { label: 'Node.js', icon: '⬡', className: 'floating-pill--node' },
  { label: 'MySQL', icon: '🗄', className: 'floating-pill--mysql' },
];

/* ===== Framer Motion Variants ===== */
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.3,
    },
  },
};

const childVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.4, 0, 0.2, 1],
    },
  },
};

const floatingPillVariants = {
  hidden: { opacity: 0, scale: 0.6 },
  visible: (i) => ({
    opacity: 1,
    scale: 1,
    transition: {
      delay: 1.0 + i * 0.15,
      duration: 0.5,
      ease: [0.4, 0, 0.2, 1],
    },
  }),
};

const scrollIndicatorVariants = {
  hidden: { opacity: 0, y: -10 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { delay: 1.8, duration: 0.6 },
  },
};

/* ===== Hero Component ===== */
function Hero() {
  return (
    <section id="hero" className="hero">
      {/* Particle canvas background */}
      <ParticleCanvas />

      {/* Ambient glow orbs */}
      <div className="hero-orb hero-orb--primary" aria-hidden="true" />
      <div className="hero-orb hero-orb--secondary" aria-hidden="true" />
      <div className="hero-orb hero-orb--accent" aria-hidden="true" />

      {/* Floating tech pills */}
      <div className="floating-icons" aria-hidden="true">
        {techPills.map((pill, i) => (
          <motion.div
            key={pill.label}
            className={`floating-pill ${pill.className}`}
            custom={i}
            variants={floatingPillVariants}
            initial="hidden"
            animate="visible"
          >
            <span className="floating-pill-icon">{pill.icon}</span>
            {pill.label}
          </motion.div>
        ))}
      </div>

      {/* Main content */}
      <motion.div
        className="hero-content"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Status badge */}
        <motion.div className="hero-badge" variants={childVariants}>
          <span className="hero-badge-dot" />
          ✨ Available for Opportunities
        </motion.div>

        {/* Main heading */}
        <motion.h1 className="hero-heading" variants={childVariants}>
          <span className="hero-heading-light">Hi, I'm</span>
          <span className="hero-heading-name">Manoj Katwal</span>
        </motion.h1>

        {/* Role subtitle */}
        <motion.p className="hero-role" variants={childVariants}>
          Java Full Stack Developer
        </motion.p>

        {/* Description */}
        <motion.p className="hero-description" variants={childVariants}>
          Building scalable web applications with clean code, modern design,
          and a passion for creating exceptional digital experiences.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div className="hero-buttons" variants={childVariants}>
          <a href="#projects" className="btn btn-primary">
            View Projects
            <ArrowRight size={16} />
          </a>
          <a
            href="/cv/Manoj_Katuwal_CV.pdf"
            download
            className="btn btn-secondary"
          >
            Download CV
            <Download size={16} />
          </a>
        </motion.div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.a
        href="#about"
        className="scroll-indicator"
        variants={scrollIndicatorVariants}
        initial="hidden"
        animate="visible"
        aria-label="Scroll to about section"
      >
        <span className="scroll-indicator-text">Scroll</span>
        <ChevronDown size={18} className="scroll-indicator-chevron" />
      </motion.a>
    </section>
  );
}

export default Hero;
