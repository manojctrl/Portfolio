import { motion } from 'framer-motion';

const milestones = [
  {
    year: '2026',
    title: 'Advanced MERN Stack & UI Aesthetics',
    subtitle: 'Full-Stack Telemetry Phase',
    desc: 'Designing state-of-the-art interactive user interfaces and high-performance Web App architectures. Specialized in custom glassmorphic panels, telemetry micro-interactions, Express routing, and MongoDB query optimization.',
    tags: ['React 19', 'Node.js', 'Express.js', 'Framer Motion', 'Vanilla CSS'],
  },
  {
    year: '2025',
    title: 'Full-Stack Projects & Deployment',
    subtitle: 'Deployment & Launching',
    desc: 'Engineered and launched multiple full-stack directory systems, including "Rojgar Setu" – a job discovery portal connecting seekers and employers, and local membership desktop controls.',
    tags: ['React Client', 'JSP / Servlets', 'JDBC', 'MySQL'],
  },
  {
    year: '2024',
    title: 'JavaScript Logic & Core Architectures',
    subtitle: 'Logic & Database Foundations',
    desc: 'Deeply integrated object-oriented paradigms, thread optimization, data schema normalization, and built client tracking applications like Employee Management Dashboard using React Hooks and local storage.',
    tags: ['JavaScript ES6+', 'Data Structures', 'SQL Engines', 'State Hooks'],
  },
  {
    year: '2023',
    title: 'First Compilation & Discovery',
    subtitle: 'First Compilation',
    desc: 'Began software engineering exploration in Dharan, Nepal. Mastered foundational semantics of the modern web, layout rendering engines, and modular shell scripts.',
    tags: ['HTML5', 'CSS Variables', 'JS Logic', 'Shell Scripts'],
  },
];

function Journey() {
  return (
    <section id="journey" className="journey">
      <div className="container">
        <div className="section-header">
          <span className="section-tag">Timeline</span>
          <h2 className="section-title">My Professional <span className="gradient-text">Journey</span></h2>
          <p className="section-subtitle">Chronological record of key milestones and acquisitions</p>
        </div>

        <div className="journey-timeline">
          {milestones.map((milestone, index) => (
            <motion.div
              key={index}
              className="journey-item"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.6, delay: index * 0.1, ease: 'easeOut' }}
            >
              {/* Vertical timeline connector bullet */}
              <div className="journey-dot">
                <div className="journey-dot-inner" />
              </div>

              {/* Information Card */}
              <div className="glass-card journey-card">
                <div className="journey-header-row">
                  <div className="journey-title-block">
                    <h3>{milestone.title}</h3>
                    <span className="journey-subtitle">{milestone.subtitle}</span>
                  </div>
                  <span className="journey-year">{milestone.year}</span>
                </div>
                
                <p className="journey-desc">{milestone.desc}</p>
                
                <div className="journey-tags">
                  {milestone.tags.map((tag, tIdx) => (
                    <span key={tIdx} className="journey-tag">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Journey;
