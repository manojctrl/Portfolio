import React, { useState } from 'react';
import { motion } from 'framer-motion';
import './Projects.css';
import { ExternalLink, Github, Code2, Award } from 'lucide-react';

const featuredProjects = [
  {
    id: 1,
    title: 'Gym Management System',
    description: 'A comprehensive desktop application for managing gym operations, including member tracking, membership plans, billing, and attendance management.',
    image: '💪',
    tech: ['Java Swing', 'OOP', 'Database'],
    category: 'Desktop App',
    status: 'Completed',
    github: '#',
    live: '#',
    features: ['Member Management', 'Billing System', 'Attendance Tracking'],
    highlight: 'Enterprise-grade',
  },
  {
    id: 2,
    title: 'Rojgar Setu',
    description: 'A job portal connecting job seekers with employers, featuring advanced search, profile management, and application tracking system.',
    image: '🔗',
    tech: ['JSP', 'Servlet', 'JDBC', 'MySQL'],
    category: 'Web App',
    status: 'Completed',
    github: '#',
    live: '#',
    features: ['Job Listings', 'Application Tracking', 'Profile Management'],
    highlight: 'Full-Stack',
  },
  {
    id: 3,
    title: 'Employee Management System',
    description: 'Modern web application for managing employee records, attendance, and HR operations with a beautiful React interface.',
    image: '👥',
    tech: ['React', 'LocalStorage', 'Responsive Design'],
    category: 'Web App',
    status: 'Completed',
    github: '#',
    live: '#',
    features: ['Employee Records', 'Attendance Tracking', 'Reports'],
    highlight: 'React Powered',
  },
  {
    id: 4,
    title: 'Travel Agency Admin Dashboard',
    description: 'A sleek admin dashboard for managing travel bookings, packages, and customer interactions with real-time analytics.',
    image: '✈️',
    tech: ['React', 'Tailwind CSS', 'Real-time Data'],
    category: 'Dashboard',
    status: 'Completed',
    github: '#',
    live: '#',
    features: ['Booking Management', 'Analytics', 'Package Management'],
    highlight: 'Modern UI/UX',
  },
  {
    id: 5,
    title: 'WeCare Inventory Management',
    description: 'Intelligent inventory management system with stock tracking, automated reordering, and comprehensive analytics.',
    image: '📦',
    tech: ['Python', 'Database', 'Analytics'],
    category: 'Backend System',
    status: 'Completed',
    github: '#',
    live: '#',
    features: ['Stock Tracking', 'Auto Reordering', 'Reports'],
    highlight: 'Backend Excellence',
  },
];

// Container variants for stagger animation
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.3,
    },
  },
};

// Item variants for individual project cards
const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: 'easeOut' },
  },
};

// Project Card Component
function ProjectCard({ project, index }) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      className="project-card-modern"
      variants={itemVariants}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      whileHover={{ y: -10 }}
    >
      {/* Gradient Border Effect */}
      <motion.div
        className="project-border-glow"
        animate={isHovered ? { opacity: 1 } : { opacity: 0 }}
        transition={{ duration: 0.3 }}
      />

      {/* Project Image/Icon Section */}
      <motion.div
        className="project-image-section"
        animate={isHovered ? { scale: 1.05 } : { scale: 1 }}
        transition={{ duration: 0.3 }}
      >
        <div className="project-icon">{project.image}</div>
        <motion.div
          className="project-overlay"
          initial={{ opacity: 0 }}
          animate={isHovered ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.3 }}
        >
          <div className="overlay-content">
            <motion.div
              initial={{ scale: 0 }}
              animate={isHovered ? { scale: 1 } : { scale: 0 }}
              transition={{ duration: 0.3, delay: 0.1 }}
              className="overlay-buttons"
            >
              <a href={project.github} className="overlay-btn github-btn">
                <Github size={20} />
              </a>
              <a href={project.live} className="overlay-btn live-btn">
                <ExternalLink size={20} />
              </a>
            </motion.div>
          </div>
        </motion.div>
      </motion.div>

      {/* Project Content */}
      <div className="project-content">
        <div className="project-header">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            <h3 className="project-title">{project.title}</h3>
            <p className="project-description">{project.description}</p>
          </motion.div>

          <motion.div
            className="project-badges"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            <span className="badge category-badge">{project.category}</span>
            <span className="badge status-badge completed">{project.status}</span>
          </motion.badges>
        </div>

        {/* Tech Stack */}
        <motion.div
          className="project-tech-stack"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
        >
          {project.tech.map((tech, i) => (
            <motion.span
              key={tech}
              className="tech-tag"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.4 + i * 0.05 }}
              whileHover={{ scale: 1.08, backgroundColor: 'rgba(164, 102, 255, 0.2)' }}
            >
              {tech}
            </motion.span>
          ))}
        </motion.div>

        {/* Features */}
        <motion.div
          className="project-features"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          {project.features.map((feature) => (
            <div key={feature} className="feature-item">
              <span className="feature-dot">•</span>
              <span>{feature}</span>
            </div>
          ))}
        </motion.div>

        {/* Footer */}
        <motion.div
          className="project-footer"
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
        >
          <div className="project-links">
            <a href={project.github} className="project-link-btn github">
              <Github size={18} />
              <span>GitHub</span>
            </a>
            <a href={project.live} className="project-link-btn live">
              <ExternalLink size={18} />
              <span>Live Demo</span>
            </a>
          </div>
          <motion.div
            className="highlight-badge"
            whileHover={{ scale: 1.05 }}
          >
            <Award size={16} />
            <span>{project.highlight}</span>
          </motion.div>
        </motion.footer>
      </div>
    </motion.div>
  );
}

// Section Title Component
function ProjectsSectionTitle() {
  return (
    <motion.div className="projects-header-modern">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <motion.span
          className="projects-badge-modern"
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.1, duration: 0.6 }}
          viewport={{ once: true }}
        >
          <Code2 size={18} />
          Things I've Built
        </motion.span>

        <motion.h2
          className="projects-title-modern"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          viewport={{ once: true }}
        >
          <span className="gradient-text-projects">
            Featured Projects & Case Studies
          </span>
        </motion.h2>
      </motion.div>

      <motion.p
        className="projects-subtitle"
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.6 }}
        viewport={{ once: true }}
      >
        Explore my portfolio of award-winning projects showcasing expertise in full-stack development, modern UI/UX, and scalable architecture.
      </motion.p>
    </motion.div>
  );
}

export default function Projects() {
  return (
    <section id="projects" className="projects-section-modern">
      {/* Background Effects */}
      <div className="projects-bg-elements">
        <div className="projects-glow-top" />
        <div className="projects-glow-bottom" />
      </div>

      <div className="projects-content-modern">
        <ProjectsSectionTitle />

        <motion.div
          className="projects-grid-modern"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
        >
          {featuredProjects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </motion.div>

        {/* CTA Section */}
        <motion.div
          className="projects-cta"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h3>Ready to see more?</h3>
          <p>Check out my GitHub profile for additional projects and open source contributions.</p>
          <motion.a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            className="cta-button"
            whileHover={{ scale: 1.05, boxShadow: '0 0 30px rgba(164, 102, 255, 0.5)' }}
            whileTap={{ scale: 0.95 }}
          >
            <Github size={20} />
            View All Projects on GitHub
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}
