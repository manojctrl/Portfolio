import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Award, Briefcase, Calendar, Code, Cpu, ExternalLink, Rocket } from 'lucide-react';
import './Journey.css';

const milestones = [
  {
    id: 1,
    year: '2026',
    title: 'Advanced Core Systems & Aesthetics',
    subtitle: 'Pursuing Premium Development',
    icon: Cpu,
    colorClass: 'cyan',
    desc: 'Designing state-of-the-art interactive user interfaces and high-performance Web App architectures. Specialize in bespoke glassmorphism models, Framer Motion telemetry animations, and high-contrast styling frameworks.',
    metrics: { COMPLETED: '10+ Projects', RATING: 'Premium Spec' },
    tags: ['React 19', 'Framer Motion', 'Vanilla CSS', 'UX/UI Engineering'],
  },
  {
    id: 2,
    year: '2025',
    title: 'Rojgar Setu & Core Applications',
    subtitle: 'Full-Stack Deployment Phase',
    icon: Award,
    colorClass: 'pink',
    desc: 'Developed and launched "Rojgar Setu" – a full-fledged employment matching engine. Engineered a robust local Gym Management desktop interface handling secure memberships, transactions, and logs.',
    metrics: { BACKEND: 'Java MVC', DATABASE: 'MySQL' },
    tags: ['JSP / Servlets', 'Java Swing', 'JDBC', 'Relational DB'],
  },
  {
    id: 3,
    year: '2024',
    title: 'Relational Database & Core Architecture',
    subtitle: 'System Logic Foundations',
    icon: Code,
    colorClass: 'purple',
    desc: 'Deeply integrated object-oriented paradigms, thread optimization, data schema normalization, and developed modern directory systems like Employee Management Dashboard.',
    metrics: { SCHEMA: 'Normalized', OOP: 'Strict Standard' },
    tags: ['Core Java', 'Data Structures', 'SQL Engines', 'Local Storage'],
  },
  {
    id: 4,
    year: '2023',
    title: 'The Coding Catalyst',
    subtitle: 'First Compilation & Discovery',
    icon: Rocket,
    colorClass: 'green',
    desc: 'Began software exploration in Dharan, Nepal. Mastered foundational semantics of the modern web, layout rendering engines, and modular terminal scripts.',
    metrics: { GATEWAY: 'Dharan Node', COGNITIVE: 'Active' },
    tags: ['HTML5 Syntax', 'CSS Variables', 'JS Logic', 'Shell Scripts'],
  },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.25, 0.46, 0.45, 0.94],
    },
  },
};

export default function Journey() {
  const [activeMilestone, setActiveMilestone] = useState(milestones[0].id);

  return (
    <section id="journey" className="journey-hud-section">
      <span className="section-eyebrow">// DEVELOPMENT_MILESTONES</span>
      <h2 className="section-title">The Career Timeline</h2>
      
      <div className="journey-hud-container container">
        {/* Timeline main grid */}
        <div className="journey-interactive-layout">
          
          {/* LEFT: Year Selector Hub */}
          <div className="year-selector-hub">
            {milestones.map((m) => {
              const Icon = m.icon;
              return (
                <button
                  key={m.id}
                  className={`year-hud-btn ${activeMilestone === m.id ? 'active' : ''} color-${m.colorClass}`}
                  onClick={() => setActiveMilestone(m.id)}
                  aria-label={`View milestone for ${m.year}`}
                >
                  <span className="btn-telemetry-status">
                    <span className="dot" />
                    <span>ACTIVE</span>
                  </span>
                  <div className="btn-year-inner">
                    <span className="btn-year-text">{m.year}</span>
                    <span className="btn-icon-wrapper">
                      <Icon size={16} />
                    </span>
                  </div>
                  <div className="btn-active-line" />
                </button>
              );
            })}
          </div>

          {/* RIGHT: Detailed Telemetry Panel */}
          <div className="telemetry-milestone-panel">
            <AnimatePresence mode="wait">
              {milestones.map((m) => {
                if (m.id !== activeMilestone) return null;
                const Icon = m.icon;
                return (
                  <motion.div
                    key={m.id}
                    className="telemetry-card glass-panel"
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    transition={{ duration: 0.4, ease: 'easeOut' }}
                  >
                    {/* Header bar with simulated OS buttons */}
                    <div className="bento-card-header">
                      <div className="header-dots">
                        <span className="dot dot-close"></span>
                        <span className="dot dot-minimize"></span>
                        <span className="dot dot-expand"></span>
                      </div>
                      <div className="bento-card-title">SYS_LANDMARK // {m.year}</div>
                      <div className="bento-card-status">
                        <span className="dot-green"></span>
                        <span>ONLINE</span>
                      </div>
                    </div>

                    <div className="telemetry-card-body">
                      {/* Sub-header grid */}
                      <div className="milestone-detail-header">
                        <div className={`milestone-badge-glow bg-${m.colorClass}`}>
                          <Icon size={24} className={`text-${m.colorClass}`} />
                        </div>
                        <div className="milestone-title-block">
                          <span className="milestone-year-subtitle">// YEAR_{m.year}</span>
                          <h3>{m.title}</h3>
                          <h4>{m.subtitle}</h4>
                        </div>
                      </div>

                      {/* Main explanation */}
                      <p className="milestone-desc-content">{m.desc}</p>

                      {/* Hardware / Tech stats table */}
                      <div className="milestone-metrics-grid">
                        {Object.entries(m.metrics).map(([key, val]) => (
                          <div key={key} className="metric-row">
                            <span className="metric-key">{key}</span>
                            <span className={`metric-val text-${m.colorClass}`}>{val}</span>
                          </div>
                        ))}
                      </div>

                      {/* Technology Pills */}
                      <div className="milestone-tech-pillbox">
                        {m.tags.map((tag) => (
                          <span key={tag} className="milestone-tag">
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </AnimatePresence>
          </div>

        </div>

        {/* Desktop Vertical Glow Timeline (Fall-back Interactive Scroll View) */}
        <div className="journey-scroll-timeline-view">
          <motion.div
            className="vertical-timeline-grid"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
          >
            {/* Timeline center line */}
            <div className="timeline-center-glow-track" />

            {milestones.map((m, index) => {
              const Icon = m.icon;
              const isEven = index % 2 === 0;

              return (
                <motion.div
                  key={m.id}
                  className={`timeline-item-node ${isEven ? 'left-aligned' : 'right-aligned'}`}
                  variants={itemVariants}
                >
                  {/* Glowing vertical connector node */}
                  <div className={`timeline-connector-dot bg-${m.colorClass}`}>
                    <Icon size={14} className="node-icon" />
                    <div className="pulse-ring" />
                  </div>

                  {/* Card Container */}
                  <div className="timeline-card-wrapper">
                    <div className="timeline-date-label">{m.year}</div>
                    
                    <div className="glass-panel timeline-vertical-card">
                      <div className="bento-card-header">
                        <div className="header-dots">
                          <span className="dot dot-close"></span>
                          <span className="dot dot-minimize"></span>
                          <span className="dot dot-expand"></span>
                        </div>
                        <div className="bento-card-title">MILESTONE // {m.year}</div>
                      </div>

                      <div className="timeline-vertical-card-body">
                        <h4 className={`milestone-title-text text-${m.colorClass}`}>{m.title}</h4>
                        <span className="milestone-sub-text">{m.subtitle}</span>
                        <p className="milestone-main-paragraph">{m.desc}</p>
                        
                        <div className="timeline-tech-tags-list">
                          {m.tags.map((t) => (
                            <span key={t} className="bento-tech-pill">{t}</span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        </div>

      </div>
    </section>
  );
}
