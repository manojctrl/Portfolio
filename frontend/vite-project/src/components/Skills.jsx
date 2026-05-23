import { useEffect, useRef, useState, useCallback } from 'react';
import './Skills.css';

const categories = [
  {
    icon: '⚛️',
    label: 'Frontend',
    accent: 'cyan',
    gradient: 'linear-gradient(135deg, rgba(0,212,255,0.15) 0%, rgba(0,212,255,0.05) 100%)',
    skills: [
      { icon: '🖥️', name: 'React', level: 90 },
      { icon: '🟨', name: 'JavaScript', level: 88 },
      { icon: '🎨', name: 'HTML / CSS', level: 92 },
      { icon: '⚡', name: 'Vite', level: 85 },
      { icon: '📱', name: 'Responsive Design', level: 90 },
    ],
  },
  {
    icon: '🛠️',
    label: 'Backend',
    accent: 'pink',
    gradient: 'linear-gradient(135deg, rgba(255,0,110,0.15) 0%, rgba(255,0,110,0.05) 100%)',
    reverse: true,
    skills: [
      { icon: '🟢', name: 'Node.js', level: 85 },
      { icon: '🚂', name: 'Express', level: 82 },
      { icon: '🐬', name: 'MySQL', level: 80 },
      { icon: '🔗', name: 'REST API', level: 88 },
      { icon: '🔐', name: 'Authentication', level: 78 },
    ],
  },
  {
    icon: '🧰',
    label: 'Tools',
    accent: 'violet',
    gradient: 'linear-gradient(135deg, rgba(164,102,255,0.15) 0%, rgba(164,102,255,0.05) 100%)',
    skills: [
      { icon: '🐙', name: 'Git', level: 85 },
      { icon: '💻', name: 'VS Code', level: 90 },
      { icon: '📮', name: 'Postman', level: 82 },
      { icon: '🗄️', name: 'MySQL Workbench', level: 78 },
      { icon: '📦', name: 'npm', level: 88 },
    ],
  },
  {
    icon: '✨',
    label: 'Soft Skills',
    accent: 'gold',
    gradient: 'linear-gradient(135deg, rgba(255,195,60,0.15) 0%, rgba(255,195,60,0.05) 100%)',
    reverse: true,
    skills: [
      { icon: '🧩', name: 'Problem Solving', level: 92 },
      { icon: '💬', name: 'Communication', level: 88 },
      { icon: '🤝', name: 'Teamwork', level: 90 },
      { icon: '🎯', name: 'Creativity', level: 85 },
      { icon: '🔄', name: 'Adaptability', level: 89 },
    ],
  },
];

// Particle Network Component
const ParticleNetwork = ({ mousePosition }) => {
  const canvasRef = useRef(null);
  const particlesRef = useRef([]);
  const animationRef = useRef(null);
  const containerRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const container = containerRef.current?.parentElement;
    if (!canvas || !container) return;

    const ctx = canvas.getContext('2d');
    let width = container.clientWidth;
    let height = container.clientHeight;

    const resize = () => {
      width = container.clientWidth;
      height = container.clientHeight;
      canvas.width = width;
      canvas.height = height;
    };
    resize();
    window.addEventListener('resize', resize);

    // Create particles
    const particleCount = 80;
    const particles = [];
    for (let i = 0; i < particleCount; i++) {
      particles.push({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.3,
        vy: (Math.random() - 0.5) * 0.3,
        radius: Math.random() * 2 + 1,
        alpha: Math.random() * 0.3 + 0.1,
        color: `hsla(${Math.random() * 60 + 180}, 70%, 60%, `,
      });
    }
    particlesRef.current = particles;

    const animate = () => {
      if (!ctx) return;
      ctx.clearRect(0, 0, width, height);

      particles.forEach(p => {
        // Update position
        p.x += p.vx;
        p.y += p.vy;

        // Bounce off edges with padding
        if (p.x < 0) p.x = width;
        if (p.x > width) p.x = 0;
        if (p.y < 0) p.y = height;
        if (p.y > height) p.y = 0;

        // Mouse interaction
        if (mousePosition.current) {
          const dx = p.x - mousePosition.current.x;
          const dy = p.y - mousePosition.current.y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          const maxDist = 150;
          if (dist < maxDist) {
            const angle = Math.atan2(dy, dx);
            const force = (maxDist - dist) / maxDist * 0.5;
            p.vx += Math.cos(angle) * force * 0.02;
            p.vy += Math.sin(angle) * force * 0.02;
            // Limit velocity
            const maxVel = 1.5;
            p.vx = Math.min(maxVel, Math.max(-maxVel, p.vx));
            p.vy = Math.min(maxVel, Math.max(-maxVel, p.vy));
          }
        }

        // Draw particle
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        ctx.fillStyle = p.color + p.alpha + ')';
        ctx.fill();
      });

      // Draw connections
      ctx.beginPath();
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < 100) {
            ctx.beginPath();
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.strokeStyle = `rgba(100, 180, 255, ${(1 - dist / 100) * 0.08})`;
            ctx.stroke();
          }
        }
      }

      animationRef.current = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener('resize', resize);
      if (animationRef.current) cancelAnimationFrame(animationRef.current);
    };
  }, [mousePosition]);

  return (
    <canvas
      ref={canvasRef}
      className="skills-particle-canvas"
      style={{
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        pointerEvents: 'none',
      }}
    />
  );
};

// Interactive Orb Component
const FloatingOrb = ({ accent, delay = 0 }) => {
  return (
    <div
      className={`floating-orb orb-${accent}`}
      style={{
        animationDelay: `${delay}s`,
      }}
    />
  );
};

// Skill Pill with Progress
const SkillPill = ({ skill, accent, index, total }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className={`skill-pill-enhanced accent-${accent}`}
      style={{
        animationDelay: `${index * 0.05}s`,
        transform: isHovered ? 'translateY(-5px) scale(1.05)' : 'translateY(0) scale(1)',
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="skill-pill-icon">{skill.icon}</div>
      <div className="skill-pill-content">
        <span className="skill-pill-name">{skill.name}</span>
        <div className="skill-progress-bar">
          <div
            className="skill-progress-fill"
            style={{
              width: isHovered ? `${skill.level}%` : '0%',
              transition: 'width 0.6s cubic-bezier(0.2, 0.9, 0.4, 1.1)',
            }}
          />
        </div>
        <span className="skill-pill-level" style={{ opacity: isHovered ? 1 : 0 }}>
          {skill.level}%
        </span>
      </div>
    </div>
  );
};

export default function SkillsEnhanced() {
  const sectionRef = useRef(null);
  const bubbleContainerRef = useRef(null);
  const mousePosition = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      const rect = sectionRef.current?.getBoundingClientRect();
      if (rect) {
        mousePosition.current = {
          x: e.clientX - rect.left,
          y: e.clientY - rect.top,
        };
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  // Enhanced bubble animation
  useEffect(() => {
    const container = bubbleContainerRef.current;
    if (!container) return;

    const colors = [
      'rgba(0,212,255,',
      'rgba(255,0,110,',
      'rgba(164,102,255,',
      'rgba(255,195,60,',
    ];

    const timers = [];

    const createBubble = () => {
      const bubble = document.createElement('div');
      bubble.className = 'enhanced-bubble';
      const size = Math.random() * 80 + 20;
      const colorIndex = Math.floor(Math.random() * colors.length);
      const alpha = (Math.random() * 0.15 + 0.05).toFixed(2);
      const duration = Math.random() * 12 + 8;
      const delay = Math.random() * 5;
      const leftPos = Math.random() * 100;
      const sway = (Math.random() - 0.5) * 40;

      bubble.style.cssText = `
        width: ${size}px;
        height: ${size}px;
        left: ${leftPos}%;
        bottom: -${size}px;
        background: ${colors[colorIndex]}${alpha});
        box-shadow: 0 0 ${size * 0.3}px ${colors[colorIndex]}${alpha * 0.5});
        animation: bubbleFloat ${duration}s ease-in-out ${delay}s infinite;
        --sway: ${sway}px;
      `;

      container.appendChild(bubble);
      const timer = setTimeout(() => bubble.remove(), (duration + delay) * 1000);
      timers.push(timer);
    };

    // Initial bubbles
    for (let i = 0; i < 30; i++) {
      setTimeout(() => createBubble(), i * 100);
    }

    const interval = setInterval(createBubble, 600);

    return () => {
      clearInterval(interval);
      timers.forEach(clearTimeout);
    };
  }, []);

  return (
    <section ref={sectionRef} id="skills" className="skills-enhanced-section">
      {/* Animated Background Layers */}
      <div className="skills-bg-gradient" />
      <div className="skills-grid-pattern" />
      <div ref={bubbleContainerRef} className="skills-bubble-container" />
      <ParticleNetwork mousePosition={mousePosition} />

      {/* Floating Orbs */}
      <FloatingOrb accent="cyan" delay={0} />
      <FloatingOrb accent="pink" delay={2} />
      <FloatingOrb accent="violet" delay={4} />
      <FloatingOrb accent="gold" delay={6} />

      <div className="skills-enhanced-content">
        <div className="skills-header">
          <div className="skills-badge">
            <span className="skills-badge-icon">🎯</span>
            <span>EXPLORE MY EXPERTISE</span>
          </div>
          <h2 className="skills-enhanced-title">
            <span className="title-gradient">Technical</span>
            <span className="title-light"> Arsenal</span>
          </h2>
          <p className="skills-enhanced-desc">
            Creative problem-solver with a passion for building elegant digital experiences.
            Here's what I bring to every project.
          </p>
        </div>

        <div className="skills-categories-enhanced">
          {categories.map((cat, ci) => (
            <div
              key={cat.label}
              className={`skill-category-card ${cat.reverse ? 'reverse' : ''}`}
              style={{
                background: cat.gradient,
                animationDelay: `${ci * 0.1}s`,
              }}
            >
              <div className="category-header">
                <div className={`category-icon-wrapper accent-${cat.accent}`}>
                  <div className="category-icon-pulse" />
                  <div className="category-icon">{cat.icon}</div>
                </div>
                <div className="category-info">
                  <h3 className={`category-title accent-${cat.accent}`}>{cat.label}</h3>
                  <div className="category-stats">
                    <span>{cat.skills.length} skills</span>
                    <span className="stat-dot">•</span>
                    <span>Advanced</span>
                  </div>
                </div>
              </div>

              <div className="category-skills">
                {cat.skills.map((skill, si) => (
                  <SkillPill
                    key={skill.name}
                    skill={skill}
                    accent={cat.accent}
                    index={si}
                    total={cat.skills.length}
                  />
                ))}
              </div>

              <div className="category-glow" />
            </div>
          ))}
        </div>

        <div className="skills-footer-enhanced">
          <div className="footer-glow" />
          <div className="footer-content">
            <span className="footer-icon">🚀</span>
            <span>Always learning, always growing — currently exploring </span>
            <span className="footer-highlight">Three.js</span>
            <span> & </span>
            <span className="footer-highlight">TypeScript</span>
          </div>
        </div>
      </div>
    </section>
  );
}