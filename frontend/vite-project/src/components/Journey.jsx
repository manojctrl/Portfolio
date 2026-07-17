import { motion } from 'framer-motion';

const milestones = [
  {
    year: '2026',
    title: 'Advanced Systems & Aesthetics',
    subtitle: 'Full-Stack Telemetry Phase',
    desc: 'Designing state-of-the-art interactive user interfaces and high-performance Web App architectures. Specialized in custom glassmorphic panels, telemetry micro-interactions, and layout structures.',
    tags: ['React 19', 'Framer Motion', 'Vanilla CSS', 'UX/UI Engineering'],
  },
  {
    year: '2025',
    title: 'Rojgar Setu & Core Applications',
    subtitle: 'Deployment & Launching',
    desc: 'Engineered and launched "Rojgar Setu" – a job discovery portal connecting seekers and employers across Nepal. Built a robust desktop Gym Management controller with secure billing.',
    tags: ['JSP / Servlets', 'Java Swing', 'JDBC', 'MySQL'],
  },
  {
    year: '2024',
    title: 'Relational Database & Core Logic',
    subtitle: 'Logic & Architecture Foundations',
    desc: 'Deeply integrated object-oriented paradigms, thread optimization, data schema normalization, and built client tracking applications like Employee Management Dashboard.',
    tags: ['Core Java', 'Data Structures', 'SQL Engines', 'Local Storage'],
  },
  {
    year: '2023',
    title: 'The Coding Catalyst',
    subtitle: 'First Compilation & Discovery',
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
