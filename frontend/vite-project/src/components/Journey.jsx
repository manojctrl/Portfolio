import { motion } from 'framer-motion';

const MILESTONES = [
  {
    year: '2026',
    title: 'Advanced MERN Stack & UI Engineering',
    subtitle: 'Full-Stack Telemetry Phase',
    desc: 'Building state-of-the-art interactive interfaces and high-performance REST API architectures with React 19, Node.js, and MongoDB. Specializing in component design systems, auth flows, and performance optimization.',
    tags: ['React 19', 'Node.js', 'MongoDB', 'Express.js', 'Framer Motion'],
  },
  {
    year: '2025',
    title: 'Full-Stack Projects & Deployment',
    subtitle: 'Production Launch Phase',
    desc: 'Engineered and launched Rojgar Setu — a full-stack job discovery portal connecting seekers and employers across Nepal. Built desktop management tools handling memberships, transactions, and data logs.',
    tags: ['JSP / Servlets', 'Java Swing', 'JDBC', 'MySQL'],
  },
  {
    year: '2024',
    title: 'JavaScript Logic & Data Architecture',
    subtitle: 'Core Foundations',
    desc: 'Mastered JavaScript async programming, REST API design patterns, schema normalization, and built client tracking applications like Employee Management Dashboard using React Hooks.',
    tags: ['JavaScript ES6+', 'Data Structures', 'SQL', 'React Hooks'],
  },
  {
    year: '2023',
    title: 'First Compilation & Discovery',
    subtitle: 'The Beginning',
    desc: 'Started the software engineering journey in Dharan, Nepal. Learned HTML, CSS, JavaScript fundamentals, and built first web layouts. Fell in love with building things on the web.',
    tags: ['HTML5', 'CSS3', 'JavaScript', 'Shell Scripts'],
  },
];

export default function Journey() {
  return (
    <section id="journey">
      <div className="container">
        <div className="section-header">
          <span className="section-tag">Timeline</span>
          <h2 className="section-title">
            My Professional <span className="gradient-text">Journey</span>
          </h2>
          <p className="section-subtitle">
            Key milestones in my development as an engineer
          </p>
        </div>

        <div className="journey-timeline">
          {MILESTONES.map((m, i) => (
            <motion.div
              key={i}
              className="journey-item"
              initial={{ opacity: 0, x: -28 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.55, delay: i * 0.08, ease: 'easeOut' }}
            >
              <div className="journey-dot">
                <div className="journey-dot-inner" />
              </div>

              <div className="journey-card">
                <div className="journey-row">
                  <div>
                    <h3 className="journey-title">{m.title}</h3>
                    <span className="journey-sub">{m.subtitle}</span>
                  </div>
                  <span className="journey-year">{m.year}</span>
                </div>

                <p className="journey-desc">{m.desc}</p>

                <div className="journey-pills">
                  {m.tags.map((tag, ti) => (
                    <span key={ti} className="journey-pill">{tag}</span>
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
