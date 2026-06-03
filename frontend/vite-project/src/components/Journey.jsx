import { useState } from 'react';
import { motion } from 'framer-motion';
import { Award, Code, Cpu, Rocket } from 'lucide-react';
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

export default function Journey() {
  const [activeIdx, setActiveIdx] = useState(0);
  const activeMilestone = milestones[activeIdx];
  const ActiveIcon = activeMilestone.icon;

  return (
    <section id="journey" className="journey-hud-section">
      <div className="container">
        <span className="section-label">// DEVELOPMENT_MILESTONES</span>
        <h2 className="section-title">The Career Timeline</h2>
        
        {/* Desktop Interactive Layout */}
        <div className="journey-interactive-layout">
          {/* Left Menu Panel */}
          <div className="journey-hud-menu">
            {milestones.map((m, idx) => {
              const Icon = m.icon;
              const isActive = idx === activeIdx;

              return (
                <button
                  key={m.id}
                  onClick={() => setActiveIdx(idx)}
                  className={`year-hud-btn ${isActive ? 'active' : ''} color-${m.colorClass}`}
                >
                  {isActive && (
                    <motion.div
                      layoutId="activeLine"
                      className="btn-active-line"
                      transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                    />
                  )}
                  <span className="btn-year-text">{m.year}</span>
                  <div className="btn-icon-wrapper">
                    <Icon size={16} />
                  </div>
                </button>
              );
            })}
          </div>

          {/* Right Telemetry Detail Panel */}
          <div className="telemetry-milestone-panel">
            <motion.div
              key={activeMilestone.id}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.3 }}
              className="telemetry-card"
            >
              <div className="telemetry-card-body">
                <div className="milestone-detail-header">
                  <div className={`milestone-badge-glow bg-${activeMilestone.colorClass} color-${activeMilestone.colorClass}`}>
                    <ActiveIcon size={24} />
                  </div>
                  <div className="milestone-title-block">
                    <span className="milestone-year-subtitle">YEAR_{activeMilestone.year}</span>
                    <h3>{activeMilestone.title}</h3>
                    <h4>{activeMilestone.subtitle}</h4>
                  </div>
                </div>

                <p className="milestone-desc-content">{activeMilestone.desc}</p>

                <div className="milestone-metrics-grid">
                  {Object.entries(activeMilestone.metrics).map(([key, val]) => (
                    <div key={key} className="metric-row">
                      <span className="metric-key">{key}</span>
                      <span className={`metric-val color-${activeMilestone.colorClass}`}>{val}</span>
                    </div>
                  ))}
                </div>

                <div className="milestone-tech-pillbox">
                  {activeMilestone.tags.map((tag) => (
                    <span key={tag} className="milestone-tag">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Mobile Scroll Timeline View */}
        <div className="journey-scroll-timeline-view">
          <div className="vertical-timeline-grid">
            <div className="timeline-center-glow-track"></div>
            
            {milestones.map((m) => {
              const Icon = m.icon;
              return (
                <div key={m.id} className="timeline-item-node">
                  <div className={`timeline-connector-dot color-${m.colorClass}`} style={{ borderColor: `var(--neon-${m.colorClass})` }}>
                    <Icon className="node-icon" />
                    <div className="pulse-ring" style={{ borderColor: `var(--neon-${m.colorClass})` }}></div>
                  </div>
                  
                  <div className="timeline-card-wrapper">
                    <div className="timeline-date-label">{m.year}</div>
                    <div className="timeline-vertical-card glass-panel">
                      <div className="timeline-vertical-card-body">
                        <h3 className={`milestone-title-text color-${m.colorClass}`}>{m.title}</h3>
                        <span className="milestone-sub-text">{m.subtitle}</span>
                        <p className="milestone-main-paragraph">{m.desc}</p>
                        
                        <div className="timeline-tech-tags-list">
                          {m.tags.map((tag) => (
                            <span key={tag} className="milestone-tag">
                              {tag}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
}
