import { useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import "./Projects.css";
import { ExternalLink, Terminal, Copy, Check, X } from "lucide-react";

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

// bespoked cybernetic SVG illustrations for tech stacks
const ReactLogoSVG = () => (
  <svg
    className="tech-illustrative-svg react-svg"
    viewBox="0 0 100 100"
    xmlns="http://www.w3.org/2000/svg"
  >
    <defs>
      <filter id="react-glow" x="-20%" y="-20%" width="140%" height="140%">
        <feGaussianBlur stdDeviation="3" result="blur" />
        <feMerge>
          <feMergeNode in="blur" />
          <feMergeNode in="SourceGraphic" />
        </feMerge>
      </filter>
    </defs>
    <circle cx="50" cy="50" r="42" stroke="rgba(0, 242, 254, 0.05)" fill="none" strokeWidth="1" />
    <circle cx="50" cy="50" r="30" stroke="rgba(0, 242, 254, 0.03)" fill="none" strokeWidth="1" strokeDasharray="4 4" />
    <g filter="url(#react-glow)">
      <ellipse cx="50" cy="50" rx="9" ry="25" stroke="var(--neon-cyan)" fill="none" strokeWidth="1.5" className="react-orbit orbit-1" />
      <ellipse cx="50" cy="50" rx="9" ry="25" stroke="var(--neon-cyan)" fill="none" strokeWidth="1.5" className="react-orbit orbit-2" transform="rotate(60 50 50)" />
      <ellipse cx="50" cy="50" rx="9" ry="25" stroke="var(--neon-cyan)" fill="none" strokeWidth="1.5" className="react-orbit orbit-3" transform="rotate(120 50 50)" />
      <circle cx="50" cy="50" r="3.5" fill="var(--neon-cyan)" className="react-nucleus" />
    </g>
  </svg>
);

const JavaMysqlLogoSVG = () => (
  <svg
    className="tech-illustrative-svg java-mysql-svg"
    viewBox="0 0 100 100"
    xmlns="http://www.w3.org/2000/svg"
  >
    <defs>
      <filter id="java-glow" x="-20%" y="-20%" width="140%" height="140%">
        <feGaussianBlur stdDeviation="3" result="blur" />
        <feMerge>
          <feMergeNode in="blur" />
          <feMergeNode in="SourceGraphic" />
        </feMerge>
      </filter>
    </defs>
    <path d="M 15 50 L 85 50 M 50 15 L 50 85" stroke="rgba(255, 255, 255, 0.02)" strokeWidth="1" />
    <g filter="url(#java-glow)">
      {/* Java Coffee Cup */}
      <path d="M 38 42 C 38 52, 62 52, 62 42 L 64 36 L 36 36 Z" stroke="var(--neon-pink)" strokeWidth="2" fill="rgba(255, 0, 127, 0.05)" />
      <path d="M 62 38 C 67 38, 67 46, 62 46" stroke="var(--neon-pink)" strokeWidth="1.8" fill="none" />
      <path d="M 32 54 C 32 56, 68 56, 68 54 Z" stroke="var(--neon-pink)" strokeWidth="1.8" fill="none" />
      
      {/* Floating steam paths */}
      <path d="M 42 30 C 40 25, 47 22, 44 16" stroke="var(--neon-cyan)" strokeWidth="1.8" strokeLinecap="round" fill="none" className="java-steam steam-1" />
      <path d="M 50 30 C 48 24, 55 20, 52 14" stroke="var(--neon-cyan)" strokeWidth="1.8" strokeLinecap="round" fill="none" className="java-steam steam-2" />
      
      {/* Database cylinder base at the bottom */}
      <path d="M 32 68 C 32 64, 68 64, 68 68 L 68 76 C 68 80, 32 80, 32 76 Z" stroke="var(--neon-cyan)" strokeWidth="2" fill="rgba(0, 242, 254, 0.05)" />
      <ellipse cx="50" cy="68" rx="18" ry="4" stroke="var(--neon-cyan)" strokeWidth="1.8" fill="rgba(0, 242, 254, 0.1)" />
      <path d="M 32 72 C 32 76, 68 76, 68 72" stroke="var(--neon-cyan)" strokeWidth="1.5" strokeDasharray="3 3" fill="none" />
      
      {/* Network connection line */}
      <line x1="50" y1="56" x2="50" y2="64" stroke="var(--neon-cyan)" strokeWidth="1.5" strokeDasharray="2 2" />
    </g>
  </svg>
);

const DesktopUiLogoSVG = () => (
  <svg
    className="tech-illustrative-svg desktop-svg"
    viewBox="0 0 100 100"
    xmlns="http://www.w3.org/2000/svg"
  >
    <defs>
      <filter id="desktop-glow" x="-20%" y="-20%" width="140%" height="140%">
        <feGaussianBlur stdDeviation="3" result="blur" />
        <feMerge>
          <feMergeNode in="blur" />
          <feMergeNode in="SourceGraphic" />
        </feMerge>
      </filter>
    </defs>
    <g filter="url(#desktop-glow)">
      {/* OS window */}
      <rect x="20" y="20" width="60" height="60" rx="5" stroke="var(--neon-pink)" strokeWidth="2" fill="rgba(255, 0, 127, 0.02)" />
      <line x1="20" y1="35" x2="80" y2="35" stroke="var(--neon-pink)" strokeWidth="1.5" />
      
      {/* Window control dots */}
      <circle cx="28" cy="27" r="1.8" fill="var(--neon-pink)" />
      <circle cx="34" cy="27" r="1.8" fill="var(--neon-cyan)" />
      <circle cx="40" cy="27" r="1.8" fill="var(--neon-green)" />
      
      {/* Code prompt and local database stacks */}
      <path d="M 30 48 L 40 55 L 30 62" stroke="var(--neon-cyan)" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" className="terminal-prompt" />
      <rect x="46" y="59" width="14" height="3" fill="var(--neon-cyan)" className="terminal-cursor" />
      
      {/* Corner UI telemetry bracket */}
      <path d="M 72 45 L 75 45 L 75 70 L 60 70" stroke="rgba(0, 242, 254, 0.3)" strokeWidth="1" fill="none" />
      <circle cx="75" cy="45" r="1.5" fill="var(--neon-cyan)" />
    </g>
  </svg>
);

const DashboardChartLogoSVG = () => (
  <svg
    className="tech-illustrative-svg dashboard-svg"
    viewBox="0 0 100 100"
    xmlns="http://www.w3.org/2000/svg"
  >
    <defs>
      <filter id="dash-glow" x="-20%" y="-20%" width="140%" height="140%">
        <feGaussianBlur stdDeviation="3" result="blur" />
        <feMerge>
          <feMergeNode in="blur" />
          <feMergeNode in="SourceGraphic" />
        </feMerge>
      </filter>
    </defs>
    <g filter="url(#dash-glow)">
      {/* Dashboard Grid frame */}
      <rect x="18" y="18" width="64" height="64" rx="4" stroke="var(--neon-cyan)" strokeWidth="2" fill="rgba(0, 242, 254, 0.02)" />
      <line x1="18" y1="32" x2="82" y2="32" stroke="var(--neon-cyan)" strokeWidth="1" />
      
      {/* Grid lines */}
      <line x1="25" y1="48" x2="75" y2="48" stroke="rgba(255, 255, 255, 0.04)" strokeWidth="1" strokeDasharray="3 3" />
      <line x1="25" y1="62" x2="75" y2="62" stroke="rgba(255, 255, 255, 0.04)" strokeWidth="1" strokeDasharray="3 3" />
      
      {/* Beautiful glowing peak telemetry chart line */}
      <path d="M 26 65 L 38 46 L 50 56 L 62 36 L 74 48" stroke="var(--neon-pink)" strokeWidth="2.5" fill="none" strokeLinecap="round" strokeLinejoin="round" className="chart-line" />
      <circle cx="62" cy="36" r="3.5" fill="var(--neon-pink)" className="chart-peak-dot" />
      <circle cx="38" cy="46" r="2" fill="var(--neon-cyan)" />
      
      {/* Horizontal base line */}
      <line x1="22" y1="72" x2="78" y2="72" stroke="rgba(0, 242, 254, 0.3)" strokeWidth="1" />
    </g>
  </svg>
);

const PythonLogoSVG = () => (
  <svg
    className="tech-illustrative-svg python-svg"
    viewBox="0 0 100 100"
    xmlns="http://www.w3.org/2000/svg"
  >
    <defs>
      <linearGradient id="python-cyan-grad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#00f2fe" />
        <stop offset="100%" stopColor="#4facfe" />
      </linearGradient>
      <linearGradient id="python-pink-grad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#ff007f" />
        <stop offset="100%" stopColor="#7f00ff" />
      </linearGradient>
      <filter id="python-glow" x="-20%" y="-20%" width="140%" height="140%">
        <feGaussianBlur stdDeviation="3" result="blur" />
        <feMerge>
          <feMergeNode in="blur" />
          <feMergeNode in="SourceGraphic" />
        </feMerge>
      </filter>
    </defs>
    <g filter="url(#python-glow)">
      <circle cx="50" cy="50" r="42" stroke="rgba(255, 255, 255, 0.02)" fill="none" strokeWidth="1" />
      
      {/* Top Snake */}
      <path
        d="M 50 18 C 37 18 36 25 36 29 L 36 38 L 51 38 L 51 43 L 65 43 C 71 43 73 38 73 31 L 73 27 C 73 21 69 18 57 18 Z"
        fill="url(#python-cyan-grad)"
        className="python-snake snake-top"
      />
      <circle cx="43" cy="24" r="2" fill="#030712" />
      
      {/* Bottom Snake */}
      <path
        d="M 50 82 C 63 82 64 75 64 71 L 64 62 L 49 62 L 49 57 L 35 57 C 29 57 27 62 27 69 L 27 73 C 27 79 31 82 43 82 Z"
        fill="url(#python-pink-grad)"
        className="python-snake snake-bottom"
      />
      <circle cx="57" cy="76" r="2" fill="#030712" />
    </g>
  </svg>
);

function TechIllustrativeIcon({ type }) {
  switch (type) {
    case "react":
      return <ReactLogoSVG />;
    case "java_mysql":
      return <JavaMysqlLogoSVG />;
    case "desktop":
      return <DesktopUiLogoSVG />;
    case "dashboard":
      return <DashboardChartLogoSVG />;
    case "python":
      return <PythonLogoSVG />;
    default:
      return (
        <svg
          className="tech-illustrative-svg default-svg"
          viewBox="0 0 100 100"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle cx="50" cy="50" r="20" stroke="var(--neon-cyan)" fill="none" strokeWidth="2" />
        </svg>
      );
  }
}

const featuredProjects = [
  {
    id: 1,
    title: "Rojgar Setu",
    description:
      "A job search engine portal connecting job seekers with employment gateways across Nepal.",
    screenshot: "/screenshots/image.png",
    iconType: "java_mysql",
    tech: ["JSP", "Servlet", "MySQL", "JDBC"],
    category: "Web App",
    status: "STABLE",
    complexity: "85%",
    github: "https://github.com/manojctrl/Rojgar-Setu",
    live: "https://github.com/manojctrl/Rojgar-Setu",
    features: ["Job Listings", "Application Routing", "Company Portals"],
    highlight: "Full-Stack Portal",
  },
  {
    id: 2,
    title: "Gym Management System",
    description:
      "A comprehensive desktop application managing gym memberships, billing tables, logs, and member attendance.",
    screenshot: "/screenshots/image-1.png",
    iconType: "desktop",
    tech: ["Java Swing", "OOP", "Local DB"],
    category: "Desktop App",
    status: "ACTIVE",
    complexity: "75%",
    github: "https://github.com/manojctrl/Gym-Management-System",
    live: "https://github.com/manojctrl/Gym-Management-System/releases",
    features: ["Member Management", "Billing System", "Attendance Logs"],
    highlight: "Robust Desktop System",
  },
  {
    id: 3,
    title: "Employee Management System",
    description:
      "Modern internal employee directory tracker managing attendance, tasks, and corporate logs.",
    screenshot: "/screenshots/image-2.png",
    iconType: "react",
    tech: ["React", "LocalStorage", "State Hooks"],
    category: "Web App",
    status: "STABLE",
    complexity: "70%",
    github: "https://github.com/manojctrl/Employee-Management-System",
    live: "https://employee-management-nepal.netlify.app",
    features: ["Employee Records", "Attendance logs", "Active tasks"],
    highlight: "Clean Client State",
  },
  {
    id: 4,
    title: "Travel Agency Admin Dashboard",
    description:
      "Premium administrative controller console managing booking statistics and travel inventory logs.",
    screenshot: "/screenshots/image-3.png",
    iconType: "dashboard",
    tech: ["React", "CSS Variables", "Chart Hooks"],
    category: "Dashboard",
    status: "ACTIVE",
    complexity: "90%",
    github: "https://github.com/manojctrl/Travel-Agency-Admin-Dashboard",
    live: "https://travel-admin-dashboard.vercel.app",
    features: ["Booking Analytics", "Package tables", "Active tasks"],
    highlight: "Immersive Telemetry HUD",
  },
  {
    id: 5,
    title: "WeCare Inventory Management System",
    description:
      "Supply analytics dashboard managing product nodes, stock limits, and automated orders.",
    screenshot: "",
    iconType: "python",
    tech: ["Python", "SQL database", "Data Logs"],
    category: "Backend System",
    status: "STABLE",
    complexity: "80%",
    github: "https://github.com/manojctrl/WeCare-Inventory-Management-System",
    live: "https://github.com/manojctrl/WeCare-Inventory-Management-System",
    features: ["Stock Level Alerts", "Order tables", "Transaction history"],
    highlight: "Backend Core Engine",
  },
];

const INITIAL_SHOW = 4;

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
    transition: { duration: 0.5, ease: "easeOut" },
  },
};

function ProjectCard({ project, index, onActionClick }) {
  const cardRef = useRef(null);

  const handleMouseMove = (e) => {
    const card = cardRef.current;
    if (!card) return;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    card.style.setProperty('--card-mouse-x', `${x}px`);
    card.style.setProperty('--card-mouse-y', `${y}px`);
  };

  return (
    <motion.div
      ref={cardRef}
      onMouseMove={handleMouseMove}
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
        {project.screenshot ? (
          <div className="screenshot-wrapper">
            <img
              src={project.screenshot}
              alt={`${project.title} Preview`}
              className="bento-screenshot-img"
              loading="lazy"
            />
            <div className="screenshot-overlay">
              <span className="screenshot-tag">// SYSTEM_PREVIEW_ACTIVE</span>
            </div>
          </div>
        ) : (
          <TechIllustrativeIcon type={project.iconType} />
        )}

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
            <div
              className="complexity-fill"
              style={{ width: project.complexity }}
            ></div>
          </div>
        </div>

        {/* Tech tags */}
        <div className="bento-tech-tags">
          {project.tech.map((tag) => (
            <span key={tag} className="bento-tech-pill">
              {tag}
            </span>
          ))}
        </div>

        {/* Bottom Actions */}
        <div className="bento-actions">
          <button
            onClick={() => onActionClick("source", project)}
            className="bento-btn btn-secondary"
          >
            <GithubIcon size={14} /> <span>SOURCE</span>
          </button>
          <button
            onClick={() => onActionClick("deploy", project)}
            className="bento-btn btn-primary"
          >
            <ExternalLink size={14} /> <span>DEPLOY</span>
          </button>
        </div>
      </div>
    </motion.div>
  );
}

export default function Projects() {
  const [terminalAlert, setTerminalAlert] = useState(null);
  const [copied, setCopied] = useState(false);

  const handleCopy = (text) => {
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="projects" className="projects-hud-section">
      <div className="container">
        <span className="section-eyebrow">// REPOSITORIES_GRID</span>
        <h2 className="section-title">Featured Projects & Case Studies</h2>

        <div className="projects-hud-content">
          {/* Projects Grid */}
          <motion.div
            className="bento-projects-grid"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.15 }}
          >
            <AnimatePresence mode="sync">
              {featuredProjects.map((project, index) => (
                <ProjectCard
                  key={project.id}
                  project={project}
                  index={index}
                  onActionClick={(type, proj) => setTerminalAlert({ type, project: proj })}
                />
              ))}
            </AnimatePresence>
          </motion.div>

          {/* Dynamic CTA Console */}
          <div className="projects-hud-cta glass-panel">
            <div className="cta-icon-panel">
              <Terminal size={32} className="text-cyan" />
            </div>
            <div className="cta-info-panel">
              <h3>READY_FOR_INTEGRATION</h3>
              <p>
                Access full commit logs, code architectures, and configurations
                directly on GitHub.
              </p>
            </div>
            <a
              href="https://github.com/manojctrl"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary cta-btn"
            >
              <GithubIcon size={16} /> <span>VIEW_ALL_REPOSITORIES</span>
            </a>
          </div>
        </div>
      </div>

      {/* Cybernetic Terminal Action Modal */}
      <AnimatePresence>
        {terminalAlert && (
          <motion.div
            className="terminal-modal-overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setTerminalAlert(null)}
          >
            <motion.div
              className="terminal-modal-content glass-panel"
              initial={{ scale: 0.9, y: 30, opacity: 0 }}
              animate={{ scale: 1, y: 0, opacity: 1 }}
              exit={{ scale: 0.9, y: 30, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
            >
              <div className="bento-card-header">
                <div className="header-dots">
                  <span className="dot dot-close" onClick={() => setTerminalAlert(null)}></span>
                  <span className="dot dot-minimize"></span>
                  <span className="dot dot-expand"></span>
                </div>
                <div className="bento-card-title">
                  SYS_LINK_CONTROLLER // {terminalAlert.type.toUpperCase()}_MODE
                </div>
                <div className="bento-card-status">
                  <span className="dot-green"></span>
                  <span>ONLINE</span>
                </div>
              </div>

              <div className="terminal-modal-body">
                <p className="terminal-log-line text-warning font-mono">
                  &gt;_ INITIALIZING SECURE REDIRECTION CONTROLLER...
                </p>

                <div className="terminal-console-block">
                  <div className="console-line font-mono">
                    <span className="text-cyan">[STATE]</span> Resolving assets for:{" "}
                    <span className="text-white font-bold">{terminalAlert.project.title}</span>
                  </div>
                  <div className="console-line font-mono">
                    <span className="text-cyan">[TARGET]</span> Resource mapping to:{" "}
                    <span className="text-pink">{terminalAlert.type.toUpperCase()}</span>
                  </div>

                  {terminalAlert.type === "source" ? (
                    <>
                      <div className="console-line mt-2 text-muted font-mono">
                        # You can clone this repository locally using:
                      </div>
                      <div className="console-command-box">
                        <code className="text-success font-mono">
                          git clone {terminalAlert.project.github}.git
                        </code>
                        <button
                          className="console-copy-btn"
                          title="Copy clone command"
                          onClick={() =>
                            handleCopy(`git clone ${terminalAlert.project.github}.git`)
                          }
                        >
                          {copied ? (
                            <Check size={13} className="text-green" />
                          ) : (
                            <Copy size={13} className="text-cyan" />
                          )}
                        </button>
                      </div>
                    </>
                  ) : (
                    <>
                      <div className="console-line mt-2 text-muted font-mono">
                        # Deployment target endpoint status:
                      </div>
                      <div className="console-command-box">
                        <code className="text-success font-mono">
                          HTTP/1.1 GET {terminalAlert.project.live}
                        </code>
                      </div>
                    </>
                  )}
                  
                  <div className="console-line text-info mt-2 font-mono">
                    [SYS] Ready to spawn secure subprocess shell...
                  </div>
                </div>

                <div className="terminal-modal-actions">
                  <button
                    className="btn-secondary modal-btn"
                    onClick={() => setTerminalAlert(null)}
                  >
                    <X size={13} /> <span>CANCEL</span>
                  </button>
                  <a
                    href={
                      terminalAlert.type === "source"
                        ? terminalAlert.project.github
                        : terminalAlert.project.live
                    }
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-primary modal-btn"
                    onClick={() => setTerminalAlert(null)}
                  >
                    <ExternalLink size={13} /> <span>VISIT_LINK</span>
                  </a>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
