import { motion } from 'framer-motion';
import { Monitor, Server, Database, Wrench } from 'lucide-react';

const CATEGORIES = [
  {
    title: 'Frontend',
    icon: Monitor,
    pills: ['React.js', 'JavaScript (ES6+)', 'HTML5', 'CSS3', 'Bootstrap', 'Responsive Design'],
  },
  {
    title: 'Backend',
    icon: Server,
    pills: ['Node.js', 'Express.js', 'REST APIs', 'JWT Auth', 'Servlets & JSP'],
  },
  {
    title: 'Database',
    icon: Database,
    pills: ['MongoDB', 'Mongoose', 'MySQL', 'PostgreSQL'],
  },
  {
    title: 'Tools & DevOps',
    icon: Wrench,
    pills: ['Git', 'GitHub', 'VS Code', 'Postman', 'Docker', 'npm'],
  },
];

const cardVariants = {
  hidden:  { opacity: 0, y: 32 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease: 'easeOut' } },
};

export default function Skills() {
  return (
    <section id="skills">
      <div className="container">
        <div className="section-header">
          <span className="section-tag">Expertise</span>
          <h2 className="section-title">
            Skills &amp; <span className="gradient-text">Technologies</span>
          </h2>
          <p className="section-subtitle">
            My toolbox for building modern, full-stack JavaScript applications
          </p>
        </div>

        <motion.div
          className="skills-grid"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
          variants={{ visible: { transition: { staggerChildren: 0.1 } } }}
        >
          {CATEGORIES.map(({ title, icon: Icon, pills }, i) => (
            <motion.div key={i} className="skills-card" variants={cardVariants}>
              <div className="skills-card-header">
                <div className="skills-icon">
                  <Icon size={22} strokeWidth={1.8} />
                </div>
                <h3 className="skills-card-title">{title}</h3>
              </div>
              <div className="pill-grid">
                {pills.map((p, j) => (
                  <span key={j} className="skill-pill">{p}</span>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}