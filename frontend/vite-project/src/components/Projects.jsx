import { motion } from 'framer-motion';
import { ExternalLink } from 'lucide-react';

const GithubIcon = ({ size = 18 }) => (
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
  >
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
    <path d="M9 18c-4.51 2-5-2-7-2" />
  </svg>
);

const projects = [
  {
    title: 'Rojgar Setu',
    description: 'A job search engine portal connecting job seekers with employment gateways across Nepal.',
    tech: ['JSP', 'Servlet', 'MySQL', 'JDBC'],
    category: 'Web App',
    github: 'https://github.com/manojctrl/Rojgar-Setu',
    live: 'https://github.com/manojctrl/Rojgar-Setu',
    shortName: 'ROJGAR'
  },
  {
    title: 'Gym Management System',
    description: 'A comprehensive desktop application managing gym memberships, billing tables, logs, and member attendance.',
    tech: ['Java Swing', 'OOP', 'Local DB'],
    category: 'Desktop App',
    github: 'https://github.com/manojctrl/Gym-Management-System',
    live: 'https://github.com/manojctrl/Gym-Management-System/releases',
    shortName: 'GYM'
  },
  {
    title: 'Employee Management System',
    description: 'Modern internal employee directory tracker managing attendance, tasks, and corporate logs.',
    tech: ['React', 'LocalStorage', 'State Hooks'],
    category: 'Web App',
    github: 'https://github.com/manojctrl/Employee-Management-System',
    live: 'https://employee-management-nepal.netlify.app',
    shortName: 'EMPLOYEE'
  },
  {
    title: 'Travel Agency Admin Dashboard',
    description: 'Premium administrative controller console managing booking statistics and travel inventory logs.',
    tech: ['React', 'CSS Variables', 'Chart Hooks'],
    category: 'Dashboard',
    github: 'https://github.com/manojctrl/Travel-Agency-Admin-Dashboard',
    live: 'https://travel-admin-dashboard.vercel.app',
    shortName: 'TRAVEL'
  },
  {
    title: 'WeCare Inventory Management',
    description: 'Supply analytics dashboard managing product nodes, stock limits, and automated order pipelines.',
    tech: ['Python', 'SQL', 'Data Logs'],
    category: 'Backend System',
    github: 'https://github.com/manojctrl/WeCare-Inventory-Management-System',
    live: 'https://github.com/manojctrl/WeCare-Inventory-Management-System',
    shortName: 'WECARE'
  },
];

function Projects() {
  return (
    <section id="projects" className="projects">
      <div className="container">
        <div className="section-header">
          <span className="section-tag">Portfolio</span>
          <h2 className="section-title">Featured <span className="gradient-text">Projects</span></h2>
          <p className="section-subtitle">A curation of production-grade systems and interfaces</p>
        </div>

        <motion.div 
          className="projects-grid"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
          variants={{
            visible: { transition: { staggerChildren: 0.12 } }
          }}
        >
          {projects.map((project, index) => (
            <motion.div
              key={index}
              className="glass-card project-card"
              variants={{
                hidden: { opacity: 0, y: 30 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } }
              }}
            >
              {/* Card visual header */}
              <div className="project-media">
                <div className="project-glow-circle" />
                <span className="project-media-title">{project.shortName}</span>
              </div>

              {/* Card main contents */}
              <div className="project-content">
                <div className="project-header-row">
                  <h3 className="project-title">{project.title}</h3>
                </div>
                
                <p className="project-desc">{project.description}</p>
                
                <div className="project-tech">
                  {project.tech.map((tag, tIdx) => (
                    <span key={tIdx} className="project-tech-tag">
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="project-links">
                  <a href={project.github} target="_blank" rel="noopener noreferrer" className="project-link">
                    <GithubIcon size={16} />
                    Source
                  </a>
                  <a href={project.live} target="_blank" rel="noopener noreferrer" className="project-link">
                    <ExternalLink size={16} />
                    Live Demo
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

export default Projects;