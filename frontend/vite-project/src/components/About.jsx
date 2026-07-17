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
              I am a passionate software engineer specializing in JavaScript full-stack development, with a deep focus on the MERN stack (MongoDB, Express, React, and Node.js). Currently constructing responsive web applications, my skillset covers API architecture, state management, and server routing.
            </p>
            <p>
              My approach prioritizes writing clean, readable, and highly maintainable code. Whether setting up Express routers, designing MongoDB collections, managing React state telemetry, or styling responsive grids, I strive for efficiency and high-fidelity UX.
            </p>
            <p>
              When away from the editor, I research client-side optimization techniques, contribute to local software workshops, or brainstorm new side-projects from my base in Dharan, Nepal.
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
