import { motion } from 'framer-motion';
import { Monitor, Server, Database, Wrench } from 'lucide-react';
import './Skills.css';

const skillCategories = [
  {
    id: 'frontend',
    title: 'Frontend',
    icon: Monitor,
    colorClass: 'frontend',
    technologies: ['HTML5', 'CSS3', 'JavaScript', 'React', 'Bootstrap', 'Responsive Design'],
  },
  {
    id: 'backend',
    title: 'Backend',
    icon: Server,
    colorClass: 'backend',
    technologies: ['Java', 'Spring Boot', 'Node.js', 'REST APIs', 'Hibernate', 'Servlet & JSP'],
  },
  {
    id: 'database',
    title: 'Database',
    icon: Database,
    colorClass: 'database',
    technologies: ['MySQL', 'MongoDB', 'PostgreSQL', 'Firebase'],
  },
  {
    id: 'tools',
    title: 'Tools & Technologies',
    icon: Wrench,
    colorClass: 'tools',
    technologies: ['Git', 'GitHub', 'VS Code', 'IntelliJ IDEA', 'Postman', 'Docker', 'npm'],
  },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const cardVariants = {
  hidden: {
    opacity: 0,
    y: 40,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.25, 0.46, 0.45, 0.94],
    },
  },
};

const badgeVariants = {
  hidden: { opacity: 0, scale: 0.85 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.3,
      ease: 'easeOut',
    },
  },
};

function Skills() {
  return (
    <section id="skills" className="skills">
      <div className="container">
        <motion.div
          className="skills-header"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
        >
          <span className="section-label">What I Work With</span>
          <h2 className="section-title">
            Skills & <span className="gradient-text">Technologies</span>
          </h2>
          <p className="section-subtitle">
            My toolkit for building modern web applications
          </p>
        </motion.div>

        <motion.div
          className="skills-grid"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
        >
          {skillCategories.map((category) => {
            const IconComponent = category.icon;

            return (
              <motion.div
                key={category.id}
                className="skill-category"
                variants={cardVariants}
              >
                <div className={`category-icon ${category.colorClass}`}>
                  <IconComponent size={24} strokeWidth={1.8} />
                </div>

                <h3 className="category-title">{category.title}</h3>

                <motion.div
                  className="tech-grid"
                  variants={{
                    hidden: {},
                    visible: {
                      transition: { staggerChildren: 0.05, delayChildren: 0.2 },
                    },
                  }}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                >
                  {category.technologies.map((tech) => (
                    <motion.span
                      key={tech}
                      className="tech-badge"
                      variants={badgeVariants}
                    >
                      {tech}
                    </motion.span>
                  ))}
                </motion.div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}

export default Skills;