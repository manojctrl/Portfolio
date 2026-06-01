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
  return (
    <section id="journey" className="journey-hud-section">
      <span className="section-eyebrow">// DEVELOPMENT_MILESTONES</span>
      <h2 className="section-title">The Career Timeline</h2>
      
      <div className="journey-hud-container container">
        {/* Modern Vertical Timeline */}
        <motion.div
          className="timeline-modern-container"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
          {/* Central Timeline Line */}
          <div className="timeline-central-line"></div>

          {milestones.map((m, index) => {
            const Icon = m.icon;
            const isEven = index % 2 === 0;

            return (
              <motion.div
                key={m.id}
                className={`timeline-milestone-card ${isEven ? 'timeline-left' : 'timeline-right'}`}
                variants={itemVariants}
              >
                {/* Timeline Node Connector */}
                <div className={`timeline-node bg-${m.colorClass}`}>
                  <div className={`timeline-node-inner color-${m.colorClass}`}>
                    <Icon size={18} />
                  </div>
                  <div className="timeline-node-glow"></div>
                </div>

                {/* Card Content */}
                <div className={`timeline-card-content glass-panel`}>
                  <div className="timeline-card-header">
                    <div className="timeline-year-badge">
                      <span className="timeline-year">{m.year}</span>
                    </div>
                    <div className={`timeline-status-dot color-${m.colorClass}`}></div>
                  </div>

                  <div className="timeline-card-body">
                    <h3 className="timeline-card-title">{m.title}</h3>
                    <p className="timeline-card-subtitle">{m.subtitle}</p>
                    
                    <p className="timeline-card-description">{m.desc}</p>

                    {/* Tech Tags */}
                    <div className="timeline-tech-stack">
                      {m.tags.map((tag) => (
                        <span key={tag} className={`timeline-tag color-${m.colorClass}`}>
                          {tag}
                        </span>
                      ))}
                    </div>

                    {/* Metrics */}
                    <div className="timeline-metrics">
                      {Object.entries(m.metrics).map(([key, val]) => (
                        <div key={key} className="timeline-metric-item">
                          <span className="metric-label">{key}</span>
                          <span className={`metric-value color-${m.colorClass}`}>{val}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
