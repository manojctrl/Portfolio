import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import './Projects.css';
import { ExternalLink, ChevronDown, ChevronUp, Terminal } from 'lucide-react';

// Custom SVG Github icon as it is not exported by this version of lucide-react
const GithubIcon = ({ size = 18, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
    <path d="M9 18c-4.51 2-5-2-7-2" />
  </svg>
);

const featuredProjects = [
  {
    id: 1,
    title: 'Gym Management System',
    description: 'A comprehensive desktop application managing gym memberships, billing tables, logs, and member attendance.',
    image: '💪',
    tech: ['Java Swing', 'OOP', 'Local DB'],
    category: 'Desktop App',
    status: 'ACTIVE',
    complexity: '75%',
    github: '#',
    live: '#',
    features: ['Member Management', 'Billing System', 'Attendance Logs'],
    highlight: 'Robust Desktop System',
  },
  {
    id: 2,
    title: 'Rojgar Setu',
    description: 'A job search engine portal connecting job seekers with employment gateways across Nepal.',
    image: '🔗',
    tech: ['JSP', 'Servlet', 'MySQL', 'JDBC'],
    category: 'Web App',
    status: 'STABLE',
    complexity: '85%',
    github: '#',
    live: '#',
    features: ['Job Listings', 'Application Routing', 'Company Portals'],
    highlight: 'Full-Stack Portal',
  },
  {
    id: 3,
    title: 'Employee Management System',
    description: 'Modern internal employee directory tracker managing attendance, tasks, and corporate logs.',
    image: '👥',
    tech: ['React', 'LocalStorage', 'State Hooks'],
    category: 'Web App',
    status: 'STABLE',
    complexity: '70%',
    github: '#',
    live: '#',
    features: ['Employee Records', 'Attendance logs', 'Active tasks'],
    highlight: 'Clean Client State',
  },
  {
    id: 4,
    title: 'Travel Agency Admin Dashboard',
    description: 'Premium administrative controller console managing booking statistics and travel inventory logs.',
    image: '✈️',
    tech: ['React', 'CSS Variables', 'Chart Hooks'],
    category: 'Dashboard',
    status: 'ACTIVE',
    complexity: '90%',
    github: '#',
    live: '#',
    features: ['Booking Analytics', 'Package tables', 'Activity monitor'],
    highlight: 'Immersive Telemetry HUD',
  },
  {
    id: 5,
    title: 'WeCare Inventory Management System',
    description: 'Supply analytics dashboard managing product nodes, stock limits, and automated orders.',
    image: '📦',
    tech: ['Python', 'SQL database', 'Data Logs'],
    category: 'Backend System',
    status: 'STABLE',
    complexity: '80%',
    github: '#',
    live: '#',
    features: ['Stock Level Alerts', 'Order tables', 'Transaction history'],
    highlight: 'Backend Core Engine',
  },
];

const INITIAL_SHOW = 3;

// Container variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: 'easeOut' },
  },
};

function ProjectCard({ project, index }) {
  return (
    <motion.div
      className={`bento-project-card glass-panel bento-span-${index + 1}`}
      variants={itemVariants}
      whileHover={{ y: -6 }}
      layout
    >
      {/* macOS Header HUD */}
      <div className="bento-card-header">
        <div className="header-dots">
          <span className="dot dot-close"></span>
          <span className="dot dot-minimize"></span>
          <span className="dot dot-expand"></span>
        </div>
        <div className="bento-card-title">{project.title}</div>
        <div className="bento-card-status">
          <span className="dot-green"></span>
          <span>{project.status}</span>
        </div>
      </div>

      {/* Visual Image Preview */}
      <div className="bento-visual-preview">
        <span className="bento-icon-symbol">{project.image}</span>
        
        {/* Dynamic Glow Spotlight */}
        <div className="bento-glow-overlay" />
      </div>

      {/* Core Project Details */}
      <div className="bento-content">
        <div className="bento-meta-header">
          <span className="bento-category">{project.category}</span>
          <span className="bento-highlight">{project.highlight}</span>
        </div>

        <p className="bento-desc">{project.description}</p>

        {/* Complexity Bar */}
        <div className="bento-complexity-panel">
          <div className="complexity-info">
            <span>COMPLEXITY</span>
            <span className="text-cyan">{project.complexity}</span>
          </div>
          <div className="complexity-track">
            <div className="complexity-fill" style={{ width: project.complexity }}></div>
          </div>
        </div>

        {/* Tech tags */}
        <div className="bento-tech-tags">
          {project.tech.map((tag) => (
            <span key={tag} className="bento-tech-pill">{tag}</span>
          ))}
        </div>

        {/* Bottom Actions */}
        <div className="bento-actions">
          <a href={project.github} className="bento-btn btn-secondary">
            <GithubIcon size={14} /> <span>SOURCE</span>
          </a>
          <a href={project.live} className="bento-btn btn-primary">
            <ExternalLink size={14} /> <span>DEPLOY</span>
          </a>
        </div>
      </div>
    </motion.div>
  );
}

export default function Projects() {
  const [showAll, setShowAll] = useState(false);
  const visibleProjects = showAll ? featuredProjects : featuredProjects.slice(0, INITIAL_SHOW);
  const hiddenCount = featuredProjects.length - INITIAL_SHOW;

  return (
    <section id="projects" className="projects-hud-section">
      <span className="section-eyebrow">// REPOSITORIES_GRID</span>
      <h2 className="section-title">Production Bento Grid</h2>

      <div className="projects-hud-content">
        {/* Projects Grid */}
        <motion.div
          className="bento-projects-grid"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
        >
          <AnimatePresence mode="sync">
            {visibleProjects.map((project, index) => (
              <ProjectCard key={project.id} project={project} index={index} />
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Show More Trigger */}
        {featuredProjects.length > INITIAL_SHOW && (
          <div className="projects-expansion-trigger">
            <button
              className="show-more-btn"
              onClick={() => setShowAll(!showAll)}
            >
              {showAll ? (
                <>
                  <ChevronUp size={16} />
                  <span>CLOSE_EXPANSION_NODE</span>
                </>
              ) : (
                <>
                  <ChevronDown size={16} />
                  <span>LOAD_ADDITIONAL_REPOS ({hiddenCount})</span>
                </>
              )}
            </button>
          </div>
        )}

        {/* Dynamic CTA Console */}
        <div className="projects-hud-cta glass-panel">
          <div className="cta-icon-panel">
            <Terminal size={32} className="text-cyan" />
          </div>
          <div className="cta-info-panel">
            <h3>READY_FOR_INTEGRATION</h3>
            <p>Access full commit logs, code architectures, and configurations directly on GitHub.</p>
          </div>
          <a
            href="https://github.com/manojctrl"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary cta-btn"
          >
            <GithubIcon size={16} /> <span>CLONE_ALL_REPOS</span>
          </a>
        </div>
      </div>
    </section>
  );
}
