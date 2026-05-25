import React, { useState } from 'react';
import { motion } from 'framer-motion';
import './Skills.css';
import {
  Code2,
  Database,
  Wrench,
  Zap,
} from 'lucide-react';

const skillsData = {
  frontend: [
    { name: 'React', icon: '⚛️', color: '#61dafb' },
    { name: 'JavaScript', icon: '📜', color: '#f7df1e' },
    { name: 'HTML5', icon: '🌐', color: '#e34c26' },
    { name: 'CSS3', icon: '🎨', color: '#264de4' },
    { name: 'Tailwind CSS', icon: '🌊', color: '#38bdf8' },
  ],
  backend: [
    { name: 'Java', icon: '☕', color: '#007396' },
    { name: 'JDBC', icon: '🔌', color: '#336699' },
    { name: 'Servlet/JSP', icon: '⚙️', color: '#FF6B35' },
    { name: 'Node.js', icon: '🟢', color: '#68a063' },
    { name: 'Express.js', icon: '⚡', color: '#ffffff' },
  ],
  database: [
    { name: 'MySQL', icon: '🗄️', color: '#00758f' },
    { name: 'SQL', icon: '📊', color: '#cc2927' },
  ],
  tools: [
    { name: 'Git', icon: '🔀', color: '#f1502f' },
    { name: 'GitHub', icon: '🐙', color: '#ffffff' },
    { name: 'Postman', icon: '📮', color: '#ff6c37' },
    { name: 'VS Code', icon: '💻', color: '#007acc' },
  ],
};

const categoryIcons = {
  frontend: <Code2 size={28} strokeWidth={1.5} />,
  backend: <Zap size={28} strokeWidth={1.5} />,
  database: <Database size={28} strokeWidth={1.5} />,
  tools: <Wrench size={28} strokeWidth={1.5} />,
};

const categoryTitles = {
  frontend: 'Frontend Arsenal',
  backend: 'Backend Power',
  database: 'Data Mastery',
  tools: 'Development Tools',
};

const categoryDescriptions = {
  frontend: 'Building stunning user interfaces',
  backend: 'Crafting robust server logic',
  database: 'Managing data efficiently',
  tools: 'Essential development utilities',
};

const categoryColors = {
  frontend: '#38bdf8',
  backend: '#f472b6',
  database: '#a78bfa',
  tools: '#fbbf24',
};

// Animated Category Card with Skill Grid
function SkillCategoryCard({ category, skills }) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      className="skill-category-card-modern"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      viewport={{ once: true, margin: '-100px' }}
    >
      <motion.div
        className="category-glow"
        animate={isHovered ? { opacity: 1, scale: 1.05 } : { opacity: 0.4, scale: 1 }}
        transition={{ duration: 0.3 }}
        style={{ borderColor: categoryColors[category] }}
      />

      <div className="category-header-modern">
        <motion.div
          className="category-icon"
          style={{ color: categoryColors[category] }}
          animate={isHovered ? { rotate: 360, scale: 1.1 } : { rotate: 0, scale: 1 }}
          transition={{ duration: 0.6 }}
        >
          {categoryIcons[category]}
        </motion.div>
        <div>
          <h3 className="category-title-modern">{categoryTitles[category]}</h3>
          <p className="category-desc">{categoryDescriptions[category]}</p>
        </div>
      </div>

      <motion.div
        className="skills-grid"
        initial="hidden"
        animate={isHovered ? 'visible' : 'hidden'}
        variants={{
          visible: {
            transition: { staggerChildren: 0.08, delayChildren: 0.1 },
          },
          hidden: {},
        }}
      >
        {skills.map((skill) => (
          <motion.div
            key={skill.name}
            className="skill-badge"
            variants={{
              visible: { opacity: 1, y: 0 },
              hidden: { opacity: 0, y: 15 },
            }}
            whileHover={{
              scale: 1.08,
              boxShadow: `0 0 20px ${skill.color}40`,
            }}
          >
            <span className="skill-emoji-badge">{skill.icon}</span>
            <span className="skill-name-badge">{skill.name}</span>
          </motion.div>
        ))}
      </motion.div>
    </motion.div>
  );
}

// Floating Particle Background
function ParticleBackground() {
  return (
    <div className="particles-container">
      {[...Array(30)].map((_, i) => (
        <motion.div
          key={i}
          className="particle"
          animate={{
            y: [0, -100, 0],
            x: [0, Math.cos(i) * 50, 0],
            opacity: [0, 1, 0],
          }}
          transition={{
            duration: 6 + Math.random() * 4,
            repeat: Infinity,
            ease: 'easeInOut',
            delay: Math.random() * 2,
          }}
        />
      ))}
    </div>
  );
}

// Animated Section Title
function SectionTitle() {
  return (
    <motion.div className="skills-header-modern">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <motion.span
          className="skills-badge-modern"
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.1, duration: 0.6 }}
          viewport={{ once: true }}
        >
          Developer Arsenal
        </motion.span>
        <motion.h2
          className="skills-title-modern"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          viewport={{ once: true }}
        >
          <motion.span className="gradient-text">
            Technologies I use to build scalable and modern applications
          </motion.span>
        </motion.h2>
      </motion.div>

      <motion.p
        className="skills-subtitle"
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.6 }}
        viewport={{ once: true }}
      >
        Hover over each category to see the technologies and tools I've mastered.
      </motion.p>
    </motion.div>
  );
}

export default function Skills() {
  const categories = ['frontend', 'backend', 'database', 'tools'];

  return (
    <section id="skills" className="skills-section-modern">
      <ParticleBackground />

      <div className="skills-content-modern">
        <SectionTitle />

        <motion.div
          className="skills-grid-container"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          variants={{
            hidden: {},
            visible: {
              transition: { staggerChildren: 0.15 },
            },
          }}
        >
          {categories.map((category) => (
            <motion.div
              key={category}
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0 },
              }}
            >
              <SkillCategoryCard
                category={category}
                skills={skillsData[category]}
              />
            </motion.div>
          ))}
        </motion.div>

        {/* Decorative Elements */}
        <div className="skills-decoration-top" />
        <div className="skills-decoration-bottom" />
      </div>
    </section>
  );
}