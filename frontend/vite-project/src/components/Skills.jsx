import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import './Skills.css';
import { Code2, Zap, Database, Wrench, Shield, Terminal, Cpu } from 'lucide-react';

const skillsData = {
  frontend: [
    { name: 'React', icon: '⚛️', color: '#61dafb', level: 'PRO', exp: 'Built interactive client-side single-page layouts' },
    { name: 'Tailwind CSS', icon: '🌊', color: '#38bdf8', level: 'EXPERT', exp: 'Designed fluid glassmorphic UI systems' },
    { name: 'JavaScript', icon: '📜', color: '#f7df1e', level: 'PRO', exp: 'Optimized asynchronous APIs & data pipelines' },
  ],
  backend: [
    { name: 'Java', icon: '☕', color: '#e76f51', level: 'PRO', exp: 'Developed structured enterprise-grade systems' },
    { name: 'JDBC', icon: '🔌', color: '#336699', level: 'INTERMEDIATE', exp: 'Optimized query latency & relational transactions' },
    { name: 'Servlet/JSP', icon: '⚙️', color: '#FF6B35', level: 'INTERMEDIATE', exp: 'Managed stateful server-side sessions & processes' },
    { name: 'Node.js', icon: '🟢', color: '#68a063', level: 'ADVANCED', exp: 'Built scale asynchronous network routing scripts' },
    { name: 'Express.js', icon: '⚡', color: '#ffffff', level: 'ADVANCED', exp: 'Configured secure backend routing layers' },
  ],
  database: [
    { name: 'MySQL', icon: '🗄️', color: '#00758f', level: 'EXPERT', exp: 'Designed complex relational DB schemas' },
    { name: 'SQL', icon: '📊', color: '#cc2927', level: 'EXPERT', exp: 'Analyzed query execution paths & index keys' },
  ],
  tools: [
    { name: 'Git', icon: '🔀', color: '#f1502f', level: 'PRO', exp: 'Managed distributed version branches & merges' },
    { name: 'GitHub', icon: '🐙', color: '#ffffff', level: 'EXPERT', exp: 'Maintained remote repositories & workflow webhooks' },
    { name: 'Postman', icon: '📮', color: '#ff6c37', level: 'ADVANCED', exp: 'Validated endpoint payloads & server returns' },
    { name: 'VS Code', icon: '💻', color: '#007acc', level: 'EXPERT', exp: 'Operating primary development editor environment' },
  ],
};

const categoryIcons = {
  frontend: <Code2 size={22} />,
  backend: <Zap size={22} />,
  database: <Database size={22} />,
  tools: <Wrench size={22} />,
};

const categoryTitles = {
  frontend: 'FRONTEND_ENGINE',
  backend: 'BACKEND_SERVICE',
  database: 'DATA_WAREHOUSE',
  tools: 'DEV_OPERATIONS',
};

const categoryColors = {
  frontend: 'rgba(0, 242, 254, 0.2)',
  backend: 'rgba(255, 0, 127, 0.2)',
  database: 'rgba(112, 0, 255, 0.2)',
  tools: 'rgba(57, 255, 20, 0.2)',
};

const categoryBorderGlow = {
  frontend: 'var(--neon-glow-cyan)',
  backend: 'var(--neon-glow-pink)',
  database: '0 0 15px rgba(112, 0, 255, 0.35)',
  tools: 'var(--neon-glow-green)',
};

// Skill Capsule Grid
function SkillCategoryCard({ category, skills }) {
  const [activeSkill, setActiveSkill] = useState(null);

  return (
    <div 
      className="skill-hud-card glass-panel"
      style={{ border: `1px solid ${categoryColors[category]}` }}
    >
      {/* HUD Header */}
      <div className="hud-card-header">
        <span className="hud-card-icon">{categoryIcons[category]}</span>
        <h3 className="hud-card-title">{categoryTitles[category]}</h3>
      </div>

      {/* Grid of Capsules */}
      <div className="skills-hud-grid">
        {skills.map((skill) => (
          <motion.div
            key={skill.name}
            className={`skill-hud-capsule ${activeSkill && activeSkill.name === skill.name ? 'active' : ''}`}
            onMouseEnter={() => setActiveSkill(skill)}
            onMouseLeave={() => setActiveSkill(null)}
            whileHover={{ scale: 1.05, y: -2 }}
            style={{ 
              borderColor: activeSkill && activeSkill.name === skill.name ? skill.color : 'rgba(255, 255, 255, 0.08)',
              boxShadow: activeSkill && activeSkill.name === skill.name ? `0 0 12px ${skill.color}40` : 'none'
            }}
          >
            <span className="capsule-emoji">{skill.icon}</span>
            <span className="capsule-name">{skill.name}</span>
          </motion.div>
        ))}
      </div>

      {/* Telemetry Display Log */}
      <div className="hud-telemetry-panel">
        {activeSkill ? (
          <div className="telemetry-log-content">
            <div className="telemetry-log-header">
              <span className="log-tag" style={{ color: activeSkill.color }}>[ {activeSkill.level} ]</span>
              <span className="log-skill-name">{activeSkill.name}</span>
            </div>
            <p className="log-skill-exp">&gt; {activeSkill.exp}</p>
          </div>
        ) : (
          <div className="telemetry-log-placeholder">
            <Terminal size={14} className="terminal-placeholder-icon" />
            <span>SELECT NODE TO LOAD METRICS</span>
          </div>
        )}
      </div>
    </div>
  );
}

// Particle Engine
function SkillParticleBackground() {
  return (
    <div className="particles-hud-container">
      {[...Array(20)].map((_, i) => (
        <motion.div
          key={i}
          className="hud-particle"
          animate={{
            y: [0, -120, 0],
            x: [0, Math.sin(i) * 35, 0],
            opacity: [0.1, 0.6, 0.1],
          }}
          transition={{
            duration: 8 + Math.random() * 5,
            repeat: Infinity,
            ease: 'easeInOut',
            delay: Math.random() * 3,
          }}
        />
      ))}
    </div>
  );
}

export default function Skills() {
  const categories = ['frontend', 'backend', 'database', 'tools'];

  return (
    <section id="skills" className="skills-hud-section">
      <SkillParticleBackground />
      <span className="section-eyebrow">// DEVELOPMENT_CAPABILITIES</span>
      <h2 className="section-title">Developer Arsenal</h2>

      <div className="skills-hud-container">
        {categories.map((category) => (
          <SkillCategoryCard
            key={category}
            category={category}
            skills={skillsData[category]}
          />
        ))}
      </div>
    </section>
  );
}