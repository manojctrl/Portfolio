import React, { useEffect, useState } from 'react';
import './Hero.css';
import { Terminal, Cpu, Database, Wifi, GitBranch, Download, ArrowRight, Github, Linkedin } from 'lucide-react';

function Hero() {
  const [roleText, setRoleText] = useState('');
  const [roleIndex, setRoleIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const roles = [
    'Java Developer',
    'React Developer',
    'Backend Builder',
    'Problem Solver',
    'UI Experimenter'
  ];

  const [cpuLoad, setCpuLoad] = useState(42);
  const [memLoad, setMemLoad] = useState(68);
  const [pingTime, setPingTime] = useState(24);
  const [terminalLine, setTerminalLine] = useState(0);

  useEffect(() => {
    const activeRole = roles[roleIndex];
    let timer;
    if (isDeleting) {
      timer = setTimeout(() => {
        setRoleText(activeRole.substring(0, charIndex - 1));
        setCharIndex((prev) => prev - 1);
      }, 40);
    } else {
      timer = setTimeout(() => {
        setRoleText(activeRole.substring(0, charIndex + 1));
        setCharIndex((prev) => prev + 1);
      }, 85);
    }

    if (!isDeleting && charIndex === activeRole.length) {
      timer = setTimeout(() => setIsDeleting(true), 2000);
    } else if (isDeleting && charIndex === 0) {
      setIsDeleting(false);
      setRoleIndex((prev) => (prev + 1) % roles.length);
    }

    return () => clearTimeout(timer);
  }, [charIndex, isDeleting, roleIndex]);

  useEffect(() => {
    const interval = setInterval(() => {
      setCpuLoad(Math.floor(35 + Math.random() * 25));
      setMemLoad(Math.floor(62 + Math.random() * 8));
      setPingTime(Math.floor(18 + Math.random() * 12));
    }, 1500);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setTerminalLine((prev) => (prev + 1) % 4);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="hero" className="hero-section">
      <div className="hero-grid">
        {/* LEFT COLUMN: AMBITIOUS HEADLINE & INTRO */}
        <div className="hero-hud-left">
          <div className="hud-status-badge">
            <span className="hud-pulse-dot"></span>
            <span className="hud-badge-tag">SYS_ACTIVE // NEPAL_GATEWAY 🇳🇵</span>
          </div>

          <h1 className="hero-hud-title">
            <span className="glow-sub">MANOJ KATWAL</span>
            <br />
            <span className="accent-glow-text">FULL STACK DEVELOPER</span>
          </h1>

          <div className="hud-interactive-role">
            <span className="console-prompt">&gt;_ </span>
            <span className="dynamic-role-text">{roleText}</span>
            <span className="hud-caret">|</span>
          </div>

          <p className="hero-hud-desc">
            Ambitious systems builder coding in the dead of night. Specializing in high-performance backends, reactive user interfaces, and robust software architectures.
          </p>

          <div className="hero-hud-actions">
            <a href="#projects" className="btn-primary">
              Initialize Grid <ArrowRight size={14} />
            </a>
            <a href="/cv/manoj-katuwal-cv.pdf" download className="btn-secondary">
              Pull CV.dll <Download size={14} />
            </a>
          </div>

          <div className="hero-hud-socials">
            <a href="https://github.com/manojctrl" target="_blank" rel="noreferrer" title="GITHUB_SYS">
              <Github size={18} />
              <span>GITHUB</span>
            </a>
            <a href="https://www.linkedin.com/in/manoj-katuwal-2636a239a/" target="_blank" rel="noreferrer" title="LINKEDIN_SYS">
              <Linkedin size={18} />
              <span>LINKEDIN</span>
            </a>
          </div>
        </div>

        {/* RIGHT COLUMN: WORKSTATION HUD INTERACTIVE DASHBOARD */}
        <div className="hero-hud-right">
          <div className="hud-workstation glass-panel">
            {/* Terminal Window Header */}
            <div className="hud-window-header">
              <div className="header-dots">
                <span className="dot dot-close"></span>
                <span className="dot dot-minimize"></span>
                <span className="dot dot-expand"></span>
              </div>
              <div className="hud-window-title">manoj_sys@server_node: ~</div>
              <div className="hud-window-telemetry">PING: {pingTime}ms</div>
            </div>

            {/* Terminal Body */}
            <div className="hud-window-body">
              <div className="console-line">
                <span className="console-user">manoj@cyber_core</span> <span className="console-dir">~</span> <span className="console-prompt">%</span> <span className="console-cmd">./run_pipeline.sh</span>
              </div>
              <div className="console-log-line text-success">
                [OK] ESTABLISHING JDBC CONNECTORS TO MYSQL...
              </div>
              <div className="console-log-line text-info">
                [INFO] COMPILING JAVA CORE CONTROLLERS... DONE.
              </div>
              <div className="console-log-line text-warning">
                [WARN] MEMORY BUFFER POOL ALLOCATED DYNAMICALLY.
              </div>

              {/* Dynamic Live Logs */}
              <div className="console-scroller">
                {terminalLine === 0 && <p className="scroller-line">&gt; Loading modules: [React.Suspense, Framer.Motion] ... 100%</p>}
                {terminalLine === 1 && <p className="scroller-line">&gt; Spawning background server thread on port 5000 ... ACTIVE</p>}
                {terminalLine === 2 && <p className="scroller-line">&gt; Syncing remote repository hooks to GitHub (origin/main) ... OK</p>}
                {terminalLine === 3 && <p className="scroller-line">&gt; System health checks: 200 OK - Dharan, Nepal</p>}
              </div>

              {/* HUD Telemetry Graphs */}
              <div className="hud-telemetry-panels">
                <div className="telemetry-bar-item">
                  <div className="bar-label">
                    <Cpu size={12} className="text-cyan" />
                    <span>CPU LOAD</span>
                    <span className="bar-value text-cyan">{cpuLoad}%</span>
                  </div>
                  <div className="bar-track">
                    <div className="bar-fill bg-cyan" style={{ width: `${cpuLoad}%` }}></div>
                  </div>
                </div>

                <div className="telemetry-bar-item">
                  <div className="bar-label">
                    <Database size={12} className="text-pink" />
                    <span>MEM LOAD</span>
                    <span className="bar-value text-pink">{memLoad}%</span>
                  </div>
                  <div className="bar-track">
                    <div className="bar-fill bg-pink" style={{ width: `${memLoad}%` }}></div>
                  </div>
                </div>

                <div className="telemetry-bar-item">
                  <div className="bar-label">
                    <Wifi size={12} className="text-green" />
                    <span>PORT STATE</span>
                    <span className="bar-value text-green">LISTENING</span>
                  </div>
                  <div className="bar-track">
                    <div className="bar-fill bg-green" style={{ width: '100%' }}></div>
                  </div>
                </div>
              </div>

              {/* HUD Bottom Stats Bar */}
              <div className="hud-system-status">
                <div className="status-node">
                  <GitBranch size={12} />
                  <span>main*</span>
                </div>
                <div className="status-node">
                  <Terminal size={12} />
                  <span>zsh</span>
                </div>
                <div className="status-node text-cyan">
                  <span>UTF-8</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
