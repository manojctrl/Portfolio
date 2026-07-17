import { motion } from 'framer-motion';
import { Code, Layers, GitBranch, Activity } from 'lucide-react';

const stats = [
  { icon: Code, value: '10+', label: 'Projects Built' },
  { icon: Layers, value: '15+', label: 'Tech Stack Keys' },
  { icon: GitBranch, value: '8+', label: 'GitHub Repos' },
  { icon: Activity, value: '500+', label: 'Git Commits' },
];

function About() {
  return (
    <section id="about" className="about">
      <div className="container">
        <div className="section-header">
          <span className="section-tag">About Me</span>
          <h2 className="section-title">My Coding philosophy</h2>
          <p className="section-subtitle">Combining clean algorithms with aesthetic web standards</p>
        </div>

        <div className="about-grid">
          {/* Bio Text Column */}
          <motion.div
            className="about-info"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <p>
              I am a passionate software engineer focused on building robust backends and clean, intuitive frontends. Currently building digital systems, my skill set covers server administration, database modeling, and interactive client applications.
            </p>
            <p>
              My approach prioritizes writing clean, readable, and highly maintainable code. Whether designing normalized database tables, setting up RESTful API pipelines, or polishing micro-interactions, I aim for maximum performance and premium UX.
            </p>
            <p>
              When away from the console, I explore system level concepts, contribute to local software workshops, or draft my next project from my base in Dharan, Nepal.
            </p>
          </motion.div>

          {/* Stats Grid Column */}
          <motion.div
            className="about-stats"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            {stats.map((stat, index) => {
              const Icon = stat.icon;
              return (
                <div key={index} className="glass-card stat-card">
                  <div style={{ color: 'var(--primary)', marginBottom: '0.75rem', display: 'flex', justifyContent: 'center' }}>
                    <Icon size={28} strokeWidth={1.8} />
                  </div>
                  <div className="stat-number">{stat.value}</div>
                  <div className="stat-label">{stat.label}</div>
                </div>
              );
            })}
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default About;
