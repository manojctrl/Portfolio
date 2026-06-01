import { motion } from 'framer-motion';
import { Code, Layers, GitBranch, Activity } from 'lucide-react';
import './About.css';

const stats = [
  { icon: Code, number: '10+', label: 'Projects Completed' },
  { icon: Layers, number: '15+', label: 'Technologies Learned' },
  { icon: GitBranch, number: '8+', label: 'GitHub Repositories' },
  { icon: Activity, number: '500+', label: 'Contributions' },
];

const qualities = [
  'Problem Solving',
  'Clean Code',
  'UI/UX Design',
  'Team Collaboration',
  'Fast Learner',
  'Creative Thinking',
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
  },
};

const statCardVariants = {
  hidden: { opacity: 0, scale: 0.85 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] },
  },
};

const badgeVariants = {
  hidden: { opacity: 0, scale: 0.8, y: 10 },
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: { duration: 0.4, ease: [0.22, 1, 0.36, 1] },
  },
};

function About() {
  return (
    <section id="about" className="about">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          className="about-header"
        >
          <span className="section-label">Get to Know Me</span>
          <h2 className="section-title">About Me</h2>
        </motion.div>

        <div className="about-grid">
          {/* Left Column — Bio Text */}
          <motion.div
            className="about-text"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            <motion.p variants={itemVariants}>
              I'm a passionate Full Stack Developer with a focus on building
              modern, responsive, and user-friendly web applications. Currently
              pursuing my journey in software development, I combine creativity
              with technical expertise to deliver digital solutions that make a
              real impact.
            </motion.p>
            <motion.p variants={itemVariants}>
              My approach to development is rooted in clean code principles,
              continuous learning, and a deep appreciation for elegant design. I
              believe great software is not just functional — it should be
              beautiful, intuitive, and a joy to use.
            </motion.p>
            <motion.p variants={itemVariants}>
              When I'm not coding, you'll find me exploring new technologies,
              contributing to open source, or brainstorming the next project that
              pushes my boundaries.
            </motion.p>
          </motion.div>

          {/* Right Column — Stats Grid */}
          <motion.div
            className="about-stats"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            {stats.map(({ icon: Icon, number, label }) => (
              <motion.div
                key={label}
                className="stat-card glass-card"
                variants={statCardVariants}
                whileHover={{ y: -6, transition: { duration: 0.25 } }}
              >
                <div className="stat-icon">
                  <Icon size={20} />
                </div>
                <span className="stat-number gradient-text">{number}</span>
                <span className="stat-label">{label}</span>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Bottom — What I Bring Badges */}
        <motion.div
          className="about-qualities"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          <motion.span className="qualities-heading" variants={itemVariants}>
            What I Bring
          </motion.span>
          <div className="qualities-list">
            {qualities.map((quality, index) => (
              <motion.span
                key={quality}
                className="quality-badge"
                variants={badgeVariants}
                custom={index}
              >
                {quality}
              </motion.span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default About;
