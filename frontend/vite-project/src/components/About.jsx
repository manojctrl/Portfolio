import { motion } from 'framer-motion';
import { Code, Layers, GitBranch, Activity } from 'lucide-react';

const STATS = [
  { icon: Code,      value: '10+',  label: 'Projects Built'    },
  { icon: Layers,    value: '15+',  label: 'Technologies'       },
  { icon: GitBranch, value: '8+',   label: 'GitHub Repos'       },
  { icon: Activity,  value: '500+', label: 'Git Commits'        },
];

const fadeUp = {
  hidden:  { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
};

export default function About() {
  return (
    <section id="about">
      <div className="container">
        <div className="section-header">
          <span className="section-tag">About Me</span>
          <h2 className="section-title">Coding With Purpose</h2>
          <p className="section-subtitle">
            Combining clean architecture with aesthetic web design
          </p>
        </div>

        <div className="about-grid">
          {/* Bio column */}
          <motion.div
            className="about-bio"
            variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.12 } } }}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-60px' }}
          >
            <motion.span className="section-tag about-tag" variants={fadeUp}>
              get to know me
            </motion.span>
            <motion.h3 className="about-heading" variants={fadeUp}>
              MERN Stack Developer
              <br />
              based in <span className="gradient-text">Dharan, Nepal</span>
            </motion.h3>
            <motion.p variants={fadeUp}>
              I'm a passionate software engineer specializing in the JavaScript full-stack ecosystem.
              My focus is on building real-world applications using MongoDB, Express, React, and Node.js —
              from RESTful API design to interactive, performant client UIs.
            </motion.p>
            <motion.p variants={fadeUp}>
              I prioritize clean, readable code and thoughtful UX. Whether designing
              database schemas, wiring up Express routes, or crafting micro-interactions
              in React, I aim for solutions that are maintainable and delightful to use.
            </motion.p>
            <motion.p variants={fadeUp}>
              Outside of coding, I explore system-level concepts, join local workshops,
              and draft new project ideas that push my boundaries.
            </motion.p>
          </motion.div>

          {/* Stats column */}
          <motion.div
            className="about-stats"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.55, delay: 0.15 }}
          >
            {STATS.map(({ icon: Icon, value, label }, i) => (
              <div key={i} className="stat-card">
                <div className="stat-icon">
                  <Icon size={26} strokeWidth={1.8} />
                </div>
                <div className="stat-value">{value}</div>
                <div className="stat-label">{label}</div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
