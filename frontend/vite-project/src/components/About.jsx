import { useState } from 'react';
import { motion } from 'framer-motion';
import './About.css';
import { Terminal, Calendar } from 'lucide-react';

const timelineSteps = [
  {
    phase: "PHASE_01 // INIT_CORE",
    date: "2024.03",
    title: "Started with Java",
    desc: "Mastered basic programming fundamentals, OOP paradigms, compiler logic, and structural programming patterns.",
    icon: "☕",
    status: "SUCCESS",
    log: "java_compiler --version => 1.8.0_202"
  },
  {
    phase: "PHASE_02 // FIRST_DEPLOY",
    date: "2024.08",
    title: "Built Gym Management System",
    desc: "Engineered first desktop software system featuring Java Swing, multi-threading operations, and flat-file local storage.",
    icon: "💪",
    status: "DEPLOYED",
    log: "java -jar gym_mgr.jar => SUCCESS (0 errors)"
  },
  {
    phase: "PHASE_03 // RELATIONAL_DB",
    date: "2024.12",
    title: "Learned MySQL & JDBC",
    desc: "Integrated application layers with relational database storage, writing custom index queries and designing database schemas.",
    icon: "🗄️",
    status: "LINKED",
    log: "mysql -u root -p -e 'SHOW DATABASES;'"
  },
  {
    phase: "PHASE_04 // CLIENT_REACTIVE",
    date: "2025.04",
    title: "Shifted to React & Modern Web",
    desc: "Focused on user experience design, building single-page architectures, hooks lifecycle, and client-side styling.",
    icon: "⚛️",
    status: "COMPILED",
    log: "npm run dev => local host:5173"
  },
  {
    phase: "PHASE_05 // CORE_SYSTEMS",
    date: "2026.01",
    title: "Full Stack Architectures",
    desc: "Developing production-ready applications with React frontends, Node/Express backends, and robust system APIs.",
    icon: "⚡",
    status: "ACTIVE",
    log: "systemctl status manoj_portfolio => ACTIVE"
  }
];

function About() {
  const [activeStep, setActiveStep] = useState(timelineSteps.length - 1);

  return (
    <section id="about" className="about-section">
      <span className="section-eyebrow">// STORY_DRIVEN_TIMELINE</span>
      <h2 className="section-title">Terminal Log History</h2>

      <div className="about-hud-grid">
        {/* LEFT COLUMN: INTERACTIVE CYBER TIMELINE */}
        <div className="timeline-hud-container">
          <div className="timeline-tracker-line"></div>
          
          {timelineSteps.map((step, index) => (
            <motion.div 
              key={step.phase}
              className={`timeline-node-item ${index === activeStep ? 'active' : ''}`}
              onClick={() => setActiveStep(index)}
              whileHover={{ x: 8 }}
              transition={{ duration: 0.2 }}
            >
              <div className="node-marker-wrapper">
                <div className="node-pulse-circle"></div>
                <span className="node-icon">{step.icon}</span>
              </div>

              <div className="node-details glass-panel">
                <div className="node-header">
                  <span className="node-phase">{step.phase}</span>
                  <span className="node-date">
                    <Calendar size={12} /> {step.date}
                  </span>
                </div>
                <h3 className="node-title">{step.title}</h3>
                <p className="node-desc">{step.desc}</p>
                <div className="node-shell-log">
                  <Terminal size={12} className="text-pink" />
                  <span>{step.log}</span>
                </div>
                <div className="node-status-tag">
                  <span className="dot-green"></span>
                  <span>{step.status}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* RIGHT COLUMN: CODE PREVIEW & STATS */}
        <div className="about-stats-container">
          {/* Real-time Achievement Stats */}
          <div className="about-metrics-grid">
            <div className="metric-panel glass-panel">
              <span className="metric-num">2+</span>
              <span className="metric-lbl">Years Coded</span>
            </div>
            <div className="metric-panel glass-panel">
              <span className="metric-num">15+</span>
              <span className="metric-lbl">Systems Shipped</span>
            </div>
            <div className="metric-panel glass-panel">
              <span className="metric-num">50+</span>
              <span className="metric-lbl">Merged Pulls</span>
            </div>
          </div>

          {/* Holographic Coder Tag IDE Card */}
          <div className="holo-ide-card glass-panel">
            <div className="hud-window-header">
              <div className="header-dots">
                <span className="dot dot-close"></span>
                <span className="dot dot-minimize"></span>
                <span className="dot dot-expand"></span>
              </div>
              <div className="hud-window-title">manoj_sys_debugger.sh</div>
            </div>
            <div className="ide-content">
              <pre>
                <code className="text-muted">// System parameters init</code>
                <br />
                <code><span className="text-keyword">const</span> developer = &#123;</code>
                <br />
                <code>  name: <span className="text-string">"Manoj Katwal"</span>,</code>
                <br />
                <code>  origin: <span className="text-string">"Dharan, Nepal 🇳🇵"</span>,</code>
                <br />
                <code>  focus: <span className="text-string">"Full Stack / Systems"</span>,</code>
                <br />
                <code>  status: <span className="text-string">"OPERATIONAL"</span>,</code>
                <br />
                <code>  uptime: <span className="text-string">"LATE_NIGHT"</span></code>
                <br />
                <code>&#125;;</code>
                <br />
                <br />
                <code className="text-muted">// Debug selected timeline phase</code>
                <br />
                <code><span className="text-keyword">debugger</span>.inspect(timelineSteps[{activeStep}]);</code>
                <br />
                <br />
                <code className="text-pink">Output: "{timelineSteps[activeStep].title} is fully verified and stable."</code>
              </pre>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
