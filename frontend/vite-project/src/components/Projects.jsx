import { useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import "./Projects.css";
import { ExternalLink, Copy, Check, X } from "lucide-react";

const GithubIcon = ({ size = 18, ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24"
    fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
    <path d="M9 18c-4.51 2-5-2-7-2" />
  </svg>
);

/* ═══════════════════════════════════
   ILLUSTRATIONS
═══════════════════════════════════ */

const JobPortalIllustration = () => (
  <svg className="proj-illustration" viewBox="0 0 360 200" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <radialGradient id="rg-bg" cx="50%" cy="50%" r="60%">
        <stop offset="0%" stopColor="#0d1a35" /><stop offset="100%" stopColor="#060d1a" />
      </radialGradient>
      <filter id="rg-glow"><feGaussianBlur stdDeviation="2.5" result="b"/><feMerge><feMergeNode in="b"/><feMergeNode in="SourceGraphic"/></feMerge></filter>
    </defs>
    <rect width="360" height="200" fill="url(#rg-bg)" />
    {[...Array(8)].map((_,c) => [...Array(5)].map((_,r) => (
      <circle key={`${c}-${r}`} cx={30+c*44} cy={20+r*42} r="1" fill="rgba(0,242,254,0.12)" />
    )))}
    <g filter="url(#rg-glow)">
      <circle cx="180" cy="100" r="22" fill="rgba(0,242,254,0.08)" stroke="#00f2fe" strokeWidth="1.5" />
      <circle cx="180" cy="100" r="14" fill="rgba(0,242,254,0.12)" stroke="#00f2fe" strokeWidth="1" strokeDasharray="3 2">
        <animateTransform attributeName="transform" type="rotate" from="0 180 100" to="360 180 100" dur="18s" repeatCount="indefinite"/>
      </circle>
      <text x="180" y="104" textAnchor="middle" fill="#00f2fe" fontSize="10" fontFamily="monospace" fontWeight="bold">JOBS</text>
    </g>
    {[
      { x:72,  y:60,  label:"Seeker",  color:"#ff007f" },
      { x:288, y:60,  label:"Company", color:"#39ff14" },
      { x:72,  y:140, label:"Resume",  color:"#ff007f" },
      { x:288, y:140, label:"Portal",  color:"#39ff14" },
      { x:180, y:22,  label:"Search",  color:"#00f2fe" },
      { x:180, y:178, label:"Apply",   color:"#00f2fe" },
    ].map(({ x, y, label, color }, i) => (
      <g key={i} filter="url(#rg-glow)">
        <line x1={x} y1={y} x2="180" y2="100" stroke={color} strokeWidth="0.7" strokeDasharray="4 3" opacity="0.4">
          <animate attributeName="stroke-dashoffset" from="0" to="-28" dur={`${2.5+i*0.4}s`} repeatCount="indefinite"/>
        </line>
        <circle cx={x} cy={y} r="10" fill={`${color}18`} stroke={color} strokeWidth="1.2">
          <animate attributeName="r" values="10;11.5;10" dur={`${2+i*0.3}s`} repeatCount="indefinite"/>
        </circle>
        <text x={x} y={y+3.5} textAnchor="middle" fill={color} fontSize="6" fontFamily="monospace">{label}</text>
      </g>
    ))}
    {[
      { path:"M72,60 Q126,80 180,100",  color:"#ff007f", dur:"3s"   },
      { path:"M288,60 Q234,80 180,100", color:"#39ff14", dur:"3.6s" },
      { path:"M180,22 Q180,61 180,100", color:"#00f2fe", dur:"2.8s" },
    ].map(({ path, color, dur }, i) => (
      <circle key={i} r="3" fill={color} opacity="0.9">
        <animateMotion path={path} dur={dur} repeatCount="indefinite"/>
      </circle>
    ))}
  </svg>
);

const GymIllustration = () => (
  <svg className="proj-illustration" viewBox="0 0 360 200" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <radialGradient id="gym-bg" cx="50%" cy="50%" r="60%">
        <stop offset="0%" stopColor="#1a0d2e" /><stop offset="100%" stopColor="#0a0614" />
      </radialGradient>
      <filter id="gym-glow"><feGaussianBlur stdDeviation="3" result="b"/><feMerge><feMergeNode in="b"/><feMergeNode in="SourceGraphic"/></feMerge></filter>
    </defs>
    <rect width="360" height="200" fill="url(#gym-bg)" />
    {[...Array(10)].map((_,i) => (
      <line key={i} x1="0" y1={20+i*18} x2="360" y2={20+i*18} stroke="rgba(255,0,127,0.04)" strokeWidth="1"/>
    ))}
    <g filter="url(#gym-glow)" transform="translate(180,82)">
      <rect x="-52" y="-8" width="104" height="16" rx="4" fill="rgba(255,0,127,0.1)" stroke="#ff007f" strokeWidth="1.5"/>
      {[[-52,-18],[-52,4],[36,-18],[36,4]].map(([x,y],i) => (
        <rect key={i} x={x} y={y} width="16" height="28" rx="5" fill="rgba(255,0,127,0.15)" stroke="#ff007f" strokeWidth="1.5"/>
      ))}
      <animateTransform attributeName="transform" type="translate" values="180,82;180,78;180,82" dur="2s" repeatCount="indefinite"/>
    </g>
    {[
      { label:"Members", val:0.82, x:30  },
      { label:"Revenue", val:0.67, x:70  },
      { label:"Attend",  val:0.91, x:110 },
      { label:"Active",  val:0.55, x:150 },
    ].map(({ label, val, x }, i) => {
      const h = val * 60;
      return (
        <g key={i} filter="url(#gym-glow)">
          <rect x={x} y={155-h} width="22" height={h} rx="3"
            fill={`rgba(255,0,127,0.${Math.round(val*18+5)})`} stroke="#ff007f" strokeWidth="1">
            <animate attributeName="height" from="0" to={h} dur={`${0.6+i*0.15}s`} fill="freeze"/>
            <animate attributeName="y" from="155" to={155-h} dur={`${0.6+i*0.15}s`} fill="freeze"/>
          </rect>
          <text x={x+11} y="170" textAnchor="middle" fill="rgba(255,0,127,0.6)" fontSize="6" fontFamily="monospace">{label}</text>
          <text x={x+11} y={148-h} textAnchor="middle" fill="#ff007f" fontSize="7" fontFamily="monospace">{Math.round(val*100)}%</text>
        </g>
      );
    })}
    <circle cx="270" cy="105" r="28" fill="none" stroke="#ff007f" strokeWidth="1" opacity="0.3">
      <animate attributeName="r" values="20;35;20" dur="3s" repeatCount="indefinite"/>
      <animate attributeName="opacity" values="0.5;0;0.5" dur="3s" repeatCount="indefinite"/>
    </circle>
    <circle cx="270" cy="105" r="12" fill="rgba(255,0,127,0.12)" stroke="#ff007f" strokeWidth="1.5" filter="url(#gym-glow)"/>
    <text x="270" y="109" textAnchor="middle" fill="#ff007f" fontSize="8" fontFamily="monospace">LIVE</text>
  </svg>
);

const EmployeeIllustration = () => (
  <svg className="proj-illustration" viewBox="0 0 360 200" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <radialGradient id="emp-bg" cx="50%" cy="50%" r="60%">
        <stop offset="0%" stopColor="#0d1a0d" /><stop offset="100%" stopColor="#060d06" />
      </radialGradient>
      <filter id="emp-glow"><feGaussianBlur stdDeviation="2" result="b"/><feMerge><feMergeNode in="b"/><feMergeNode in="SourceGraphic"/></feMerge></filter>
    </defs>
    <rect width="360" height="200" fill="url(#emp-bg)" />
    <g stroke="rgba(57,255,20,0.25)" strokeWidth="1" fill="none">
      <line x1="180" y1="52"  x2="180" y2="78"/>
      <line x1="180" y1="78"  x2="100" y2="78"/>
      <line x1="180" y1="78"  x2="260" y2="78"/>
      <line x1="100" y1="78"  x2="100" y2="108"/>
      <line x1="180" y1="78"  x2="180" y2="108"/>
      <line x1="260" y1="78"  x2="260" y2="108"/>
      <line x1="100" y1="138" x2="60"  y2="138"/>
      <line x1="100" y1="138" x2="100" y2="165"/>
      <line x1="100" y1="138" x2="140" y2="138"/>
      <line x1="60"  y1="138" x2="60"  y2="165"/>
      <line x1="140" y1="138" x2="140" y2="165"/>
    </g>
    {[
      { x:180, y:38,  initials:"CEO", color:"#39ff14", size:14 },
      { x:100, y:108, initials:"DEV", color:"#00f2fe", size:12 },
      { x:180, y:108, initials:"HR",  color:"#00f2fe", size:12 },
      { x:260, y:108, initials:"MKT", color:"#00f2fe", size:12 },
      { x:60,  y:165, initials:"FE",  color:"#39ff14", size:10 },
      { x:100, y:165, initials:"BE",  color:"#39ff14", size:10 },
      { x:140, y:165, initials:"QA",  color:"#39ff14", size:10 },
    ].map(({ x, y, initials, color, size }, i) => (
      <g key={i} filter="url(#emp-glow)">
        <circle cx={x} cy={y} r={size} fill={`${color}18`} stroke={color} strokeWidth="1.3">
          <animate attributeName="opacity" values="0.7;1;0.7" dur={`${2+i*0.4}s`} repeatCount="indefinite"/>
        </circle>
        <text x={x} y={y+3} textAnchor="middle" fill={color} fontSize={size*0.62} fontFamily="monospace" fontWeight="bold">{initials}</text>
      </g>
    ))}
    <g filter="url(#emp-glow)">
      <rect x="290" y="55" width="55" height="90" rx="4" fill="rgba(57,255,20,0.04)" stroke="rgba(57,255,20,0.3)" strokeWidth="1"/>
      <text x="317" y="72" textAnchor="middle" fill="rgba(57,255,20,0.5)" fontSize="6" fontFamily="monospace">ATTENDANCE</text>
      {["✓ Aarav","✓ Priya","✗ Rahul","✓ Sita","✓ Rajan"].map((t,i) => (
        <text key={i} x="300" y={85+i*14} fill={t.startsWith("✓") ? "#39ff14" : "#ff007f"} fontSize="7" fontFamily="monospace">{t}</text>
      ))}
    </g>
  </svg>
);

const TravelIllustration = () => (
  <svg className="proj-illustration" viewBox="0 0 360 200" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <radialGradient id="tv-bg" cx="50%" cy="50%" r="60%">
        <stop offset="0%" stopColor="#0d1520" /><stop offset="100%" stopColor="#060c18" />
      </radialGradient>
      <filter id="tv-glow"><feGaussianBlur stdDeviation="2.5" result="b"/><feMerge><feMergeNode in="b"/><feMergeNode in="SourceGraphic"/></feMerge></filter>
    </defs>
    <rect width="360" height="200" fill="url(#tv-bg)" />
    <g opacity="0.12" fill="#00f2fe">
      <ellipse cx="100" cy="90"  rx="50" ry="35"/>
      <ellipse cx="185" cy="80"  rx="35" ry="28"/>
      <ellipse cx="255" cy="85"  rx="25" ry="22"/>
      <ellipse cx="315" cy="100" rx="22" ry="18"/>
      <ellipse cx="150" cy="140" rx="28" ry="18"/>
    </g>
    {[...Array(7)].map((_,i) => (
      <line key={i} x1="0" y1={28+i*24} x2="360" y2={28+i*24} stroke="rgba(0,242,254,0.05)" strokeWidth="1"/>
    ))}
    {[
      { d:"M 85 90 Q 140 40 220 75",  color:"#ff007f" },
      { d:"M 220 75 Q 270 55 305 90", color:"#00f2fe" },
      { d:"M 85 90 Q 110 150 160 140",color:"#39ff14" },
    ].map(({ d, color }, i) => (
      <g key={i} filter="url(#tv-glow)">
        <path d={d} fill="none" stroke={color} strokeWidth="1.5" strokeDasharray="200" strokeDashoffset="200" opacity="0.7">
          <animate attributeName="stroke-dashoffset" from="200" to="0" dur={`${1.5+i*0.5}s`} fill="freeze" begin={`${i*0.4}s`}/>
        </path>
        <circle r="3.5" fill={color}>
          <animateMotion path={d} dur={`${3+i*0.8}s`} repeatCount="indefinite"/>
        </circle>
      </g>
    ))}
    {[
      { x:85,  y:90,  color:"#ff007f" },
      { x:220, y:75,  color:"#ff007f" },
      { x:305, y:90,  color:"#00f2fe" },
      { x:160, y:140, color:"#39ff14" },
    ].map(({ x, y, color }, i) => (
      <g key={i} filter="url(#tv-glow)">
        <circle cx={x} cy={y} r="4.5" fill={`${color}20`} stroke={color} strokeWidth="1.5"/>
        <circle cx={x} cy={y} r="1.8" fill={color}/>
        <circle cx={x} cy={y} r="8" fill="none" stroke={color} strokeWidth="0.8" opacity="0.4">
          <animate attributeName="r" values="5;12;5" dur={`${1.8+i*0.3}s`} repeatCount="indefinite"/>
          <animate attributeName="opacity" values="0.5;0;0.5" dur={`${1.8+i*0.3}s`} repeatCount="indefinite"/>
        </circle>
      </g>
    ))}
    <g filter="url(#tv-glow)">
      <rect x="260" y="130" width="85" height="55" rx="4" fill="rgba(0,0,0,0.4)" stroke="rgba(0,242,254,0.2)" strokeWidth="1"/>
      <text x="302" y="143" textAnchor="middle" fill="rgba(0,242,254,0.5)" fontSize="6" fontFamily="monospace">BOOKINGS</text>
      <polyline points="270,175 283,162 296,168 309,150 322,157 335,142" fill="none" stroke="#00f2fe" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
      <circle cx="335" cy="142" r="3" fill="#00f2fe"/>
    </g>
  </svg>
);

const InventoryIllustration = () => (
  <svg className="proj-illustration" viewBox="0 0 360 200" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <radialGradient id="inv-bg" cx="50%" cy="50%" r="60%">
        <stop offset="0%" stopColor="#1a100d" /><stop offset="100%" stopColor="#0d0806" />
      </radialGradient>
      <filter id="inv-glow"><feGaussianBlur stdDeviation="2.5" result="b"/><feMerge><feMergeNode in="b"/><feMergeNode in="SourceGraphic"/></feMerge></filter>
    </defs>
    <rect width="360" height="200" fill="url(#inv-bg)" />
    <line x1="30" y1="100" x2="330" y2="100" stroke="rgba(239,159,39,0.15)" strokeWidth="8" strokeLinecap="round"/>
    <line x1="30" y1="100" x2="330" y2="100" stroke="rgba(239,159,39,0.3)" strokeWidth="1.5" strokeDasharray="6 4">
      <animate attributeName="stroke-dashoffset" from="0" to="-20" dur="1s" repeatCount="indefinite"/>
    </line>
    {[
      { x:58,  label:"INPUT",   sublabel:"Raw Stock", color:"#ef9f27" },
      { x:148, label:"PROCESS", sublabel:"Validate",  color:"#00f2fe" },
      { x:238, label:"STORE",   sublabel:"Warehouse", color:"#39ff14" },
      { x:318, label:"ALERT",   sublabel:"Low Stock", color:"#ff007f" },
    ].map(({ x, label, sublabel, color }, i) => (
      <g key={i} filter="url(#inv-glow)">
        <rect x={x-28} y="76" width="56" height="48" rx="5" fill={`${color}10`} stroke={color} strokeWidth="1.4"/>
        <text x={x} y="96"  textAnchor="middle" fill={color} fontSize="7.5" fontFamily="monospace" fontWeight="bold">{label}</text>
        <text x={x} y="108" textAnchor="middle" fill={`${color}99`} fontSize="6" fontFamily="monospace">{sublabel}</text>
        <circle cx={x} cy="117" r="2.5" fill={color}>
          <animate attributeName="opacity" values="1;0.2;1" dur={`${1.2+i*0.25}s`} repeatCount="indefinite"/>
        </circle>
      </g>
    ))}
    {[0, 0.33, 0.66].map((delay, i) => (
      <circle key={i} r="5" fill="#ef9f27" opacity="0.8">
        <animateMotion path="M 30,100 L 330,100" dur="3s" begin={`${delay*3}s`} repeatCount="indefinite"/>
        <animate attributeName="opacity" values="0;0.9;0.9;0" keyTimes="0;0.05;0.95;1" dur="3s" begin={`${delay*3}s`} repeatCount="indefinite"/>
      </circle>
    ))}
    {[
      { x:40,  label:"Med A", level:0.75, color:"#39ff14" },
      { x:88,  label:"Med B", level:0.3,  color:"#ff007f" },
      { x:136, label:"Equip", level:0.55, color:"#ef9f27" },
      { x:224, label:"Supp",  level:0.88, color:"#39ff14" },
      { x:272, label:"Misc",  level:0.2,  color:"#ff007f" },
      { x:320, label:"Tools", level:0.6,  color:"#ef9f27" },
    ].map(({ x, label, level, color }, i) => {
      const h = level * 40;
      return (
        <g key={i} filter="url(#inv-glow)">
          <rect x={x-10} y={58-h} width="20" height={h} rx="2" fill={`${color}25`} stroke={color} strokeWidth="1">
            <animate attributeName="height" from="0" to={h} dur={`${0.5+i*0.1}s`} fill="freeze"/>
            <animate attributeName="y" from="58" to={58-h} dur={`${0.5+i*0.1}s`} fill="freeze"/>
          </rect>
          <text x={x} y="66" textAnchor="middle" fill={`${color}88`} fontSize="5.5" fontFamily="monospace">{label}</text>
        </g>
      );
    })}
  </svg>
);

/* ─── Map ─── */
const illustrationMap = {
  rojgar:    <JobPortalIllustration />,
  gym:       <GymIllustration />,
  employee:  <EmployeeIllustration />,
  travel:    <TravelIllustration />,
  inventory: <InventoryIllustration />,
};

/* ─── Data ─── */
const featuredProjects = [
  {
    id: 1, title: "Rojgar Setu",
    description: "A job search engine portal connecting job seekers with employment gateways across Nepal.",
    illustrationKey: "rojgar",
    tech: ["JSP", "Servlet", "MySQL", "JDBC"],
    category: "Web App", status: "STABLE", complexity: "85%",
    github: "https://github.com/manojctrl/Rojgar-Setu",
    live: "https://github.com/manojctrl/Rojgar-Setu",
  },
  {
    id: 2, title: "Gym Management System",
    description: "A comprehensive desktop application managing gym memberships, billing tables, logs, and member attendance.",
    illustrationKey: "gym",
    tech: ["Java Swing", "OOP", "Local DB"],
    category: "Desktop App", status: "ACTIVE", complexity: "75%",
    github: "https://github.com/manojctrl/Gym-Management-System",
    live: "https://github.com/manojctrl/Gym-Management-System/releases",
  },
  {
    id: 3, title: "Employee Management System",
    description: "Modern internal employee directory tracker managing attendance, tasks, and corporate logs.",
    illustrationKey: "employee",
    tech: ["React", "LocalStorage", "State Hooks"],
    category: "Web App", status: "STABLE", complexity: "70%",
    github: "https://github.com/manojctrl/Employee-Management-System",
    live: "https://employee-management-nepal.netlify.app",
  },
  {
    id: 4, title: "Travel Agency Admin Dashboard",
    description: "Premium administrative controller console managing booking statistics and travel inventory logs.",
    illustrationKey: "travel",
    tech: ["React", "CSS Variables", "Chart Hooks"],
    category: "Dashboard", status: "ACTIVE", complexity: "90%",
    github: "https://github.com/manojctrl/Travel-Agency-Admin-Dashboard",
    live: "https://travel-admin-dashboard.vercel.app",
  },
  {
    id: 5, title: "WeCare Inventory Management",
    description: "Supply analytics dashboard managing product nodes, stock limits, and automated order pipelines.",
    illustrationKey: "inventory",
    tech: ["Python", "SQL", "Data Logs"],
    category: "Backend System", status: "STABLE", complexity: "80%",
    github: "https://github.com/manojctrl/WeCare-Inventory-Management-System",
    live: "https://github.com/manojctrl/WeCare-Inventory-Management-System",
  },
];

const INITIAL_SHOW = 4;
const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.12 } },
};
const itemVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.45, ease: "easeOut" } },
};

/* ─── Card ─── */
function ProjectCard({ project, onActionClick }) {
  const cardRef = useRef(null);

  const handleMouseMove = (e) => {
    const card = cardRef.current;
    if (!card) return;
    const rect = card.getBoundingClientRect();
    card.style.setProperty("--card-mouse-x", `${e.clientX - rect.left}px`);
    card.style.setProperty("--card-mouse-y", `${e.clientY - rect.top}px`);
  };

  return (
    <motion.div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      className="modern-project-card glass-panel"
      variants={itemVariants}
      whileHover={{ y: -6 }}
      layout
    >
      <div className="card-glow-overlay" />

      {/* Illustration */}
      <div className="project-card-image illustration-area">
        {illustrationMap[project.illustrationKey]}
        <div className="illustration-chip">
          <span className="chip-dot" />
          {project.category}
        </div>
      </div>

      {/* Content */}
      <div className="project-card-content">
        <div className="project-card-top">
          <h3 className="project-title">{project.title}</h3>
          <span className={`project-status-badge status-${project.status.toLowerCase()}`}>
            <span className="status-dot" />{project.status}
          </span>
        </div>

        <p className="project-description">{project.description}</p>

        <div className="project-tech-stack">
          {project.tech.map((tech) => (
            <span key={tech} className="project-tech-tag">{tech}</span>
          ))}
        </div>

        <div className="project-complexity-bar">
          <div className="complexity-label">
            <span>Complexity</span>
            <span className="complexity-value">{project.complexity}</span>
          </div>
          <div className="complexity-track">
            <motion.div
              className="complexity-fill"
              initial={{ width: 0 }}
              whileInView={{ width: project.complexity }}
              viewport={{ once: true }}
              transition={{ duration: 0.9, ease: "easeOut", delay: 0.2 }}
            />
          </div>
        </div>

        <div className="project-card-actions">
          <button onClick={() => onActionClick("source", project)} className="project-action-btn btn-source">
            <GithubIcon size={14} /><span>Source</span>
          </button>
          <button onClick={() => onActionClick("deploy", project)} className="project-action-btn btn-deploy">
            <ExternalLink size={14} /><span>Demo</span>
          </button>
        </div>
      </div>
    </motion.div>
  );
}

/* ─── Section ─── */
export default function Projects() {
  const [terminalAlert, setTerminalAlert] = useState(null);
  const [copied, setCopied] = useState(false);
  const [showAll, setShowAll] = useState(false);

  const handleCopy = (text) => {
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const displayed = showAll ? featuredProjects : featuredProjects.slice(0, INITIAL_SHOW);

  return (
    <section id="projects" className="projects-hud-section">
      <div className="container">
        <span className="section-eyebrow">// FEATURED_PROJECTS</span>
        <h2 className="section-title">Projects &amp; Case Studies</h2>

        <div className="projects-hud-content">
          <motion.div
            className="modern-projects-grid"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
          >
            <AnimatePresence mode="sync">
              {displayed.map((project) => (
                <ProjectCard
                  key={project.id}
                  project={project}
                  onActionClick={(type, proj) => setTerminalAlert({ type, project: proj })}
                />
              ))}
            </AnimatePresence>
          </motion.div>

          {!showAll && featuredProjects.length > INITIAL_SHOW && (
            <motion.div
              className="projects-load-more"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <button onClick={() => setShowAll(true)} className="btn-load-more">
                View All Projects ({featuredProjects.length})
              </button>
            </motion.div>
          )}
        </div>
      </div>

      <AnimatePresence>
        {terminalAlert && (
          <motion.div
            className="project-modal-overlay"
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
            onClick={() => setTerminalAlert(null)}
          >
            <motion.div
              className="project-modal-content glass-panel"
              initial={{ scale: 0.92, y: 24, opacity: 0 }}
              animate={{ scale: 1, y: 0, opacity: 1 }}
              exit={{ scale: 0.92, y: 24, opacity: 0 }}
              transition={{ type: "spring", stiffness: 300, damping: 28 }}
              onClick={(e) => e.stopPropagation()}
            >
              <div className="modal-header">
                <div className="modal-header-left">
                  <span className={`modal-type-tag ${terminalAlert.type === "source" ? "tag-source" : "tag-demo"}`}>
                    {terminalAlert.type === "source" ? "Repository" : "Live Demo"}
                  </span>
                  <h3>{terminalAlert.project.title}</h3>
                </div>
                <button onClick={() => setTerminalAlert(null)} className="modal-close">
                  <X size={18} />
                </button>
              </div>
              <div className="modal-body">
                <div className="modal-link-box">
                  <code className="modal-link">
                    {terminalAlert.type === "source" ? terminalAlert.project.github : terminalAlert.project.live}
                  </code>
                  <button className="modal-copy-btn"
                    onClick={() => handleCopy(terminalAlert.type === "source" ? terminalAlert.project.github : terminalAlert.project.live)}>
                    {copied ? <Check size={15} /> : <Copy size={15} />}
                  </button>
                </div>
              </div>
              <div className="modal-footer">
                <button className="modal-btn modal-btn-secondary" onClick={() => setTerminalAlert(null)}>Close</button>
                <a
                  href={terminalAlert.type === "source" ? terminalAlert.project.github : terminalAlert.project.live}
                  target="_blank" rel="noopener noreferrer"
                  className="modal-btn modal-btn-primary"
                  onClick={() => setTerminalAlert(null)}
                >
                  <ExternalLink size={13} /> Open Link
                </a>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}