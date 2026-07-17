import { motion } from 'framer-motion';
import { Monitor, Server, Database, Wrench } from 'lucide-react';

const skillCategories = [
  {
    title: 'Frontend Development',
    icon: Monitor,
    skills: ['HTML5', 'CSS3', 'JavaScript', 'React', 'Bootstrap', 'Responsive Design'],
  },
  {
    title: 'Backend Engineering',
    icon: Server,
    skills: ['Java', 'Spring Boot', 'Node.js', 'REST APIs', 'Hibernate', 'Servlets & JSP'],
  },
  {
    title: 'Database Management',
    icon: Database,
    skills: ['MySQL', 'MongoDB', 'PostgreSQL', 'Firebase'],
  },
  {
    title: 'Tools & Utilities',
    icon: Wrench,
    skills: ['Git', 'GitHub', 'VS Code', 'IntelliJ IDEA', 'Postman', 'Docker', 'npm'],
  },
];

function Skills() {
  return (
    <section id="skills" className="skills">
      <div className="container">
        <div className="section-header">
          <span className="section-tag">Expertise</span>
          <h2 className="section-title">Skills &amp; <span className="gradient-text">Technologies</span></h2>
          <p className="section-subtitle">My architectural tools for software development</p>
        </div>

        <motion.div 
          className="skills-grid"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
          variants={{
            visible: { transition: { staggerChildren: 0.1 } }
          }}
        >
          {skillCategories.map((category, index) => {
            const Icon = category.icon;
            return (
              <motion.div
                key={index}
                className="glass-card skills-card"
                variants={{
                  hidden: { opacity: 0, y: 30 },
                  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } }
                }}
              >
                <div className="skills-card-header">
                  <div className="skills-icon-wrapper">
                    <Icon size={22} strokeWidth={1.8} />
                  </div>
                  <h3 className="skills-card-title">{category.title}</h3>
                </div>

                <div className="skills-list">
                  {category.skills.map((skill, sIdx) => (
                    <span key={sIdx} className="skill-tag">
                      {skill}
                    </span>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}

export default Skills;