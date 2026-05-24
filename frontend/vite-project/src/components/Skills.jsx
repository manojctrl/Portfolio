import React from 'react';
import './Skills.css';
import { FaCode, FaServer, FaTools, FaUserFriends } from 'react-icons/fa';

const frontendSkills = [
  { name: 'React', level: 90 },
  { name: 'JavaScript', level: 88 },
  { name: 'HTML5 & CSS3', level: 92 },
  { name: 'Vite', level: 85 },
];

const backendSkills = [
  { name: 'Node.js', level: 85 },
  { name: 'Express', level: 80 },
  { name: 'MySQL', level: 78 },
  { name: 'REST APIs', level: 84 },
];

const tools = ['Git', 'VS Code', 'Postman', 'MySQL Workbench', 'npm'];

const softSkills = [
  { name: 'Problem Solving', icon: '🧩' },
  { name: 'Communication', icon: '💬' },
  { name: 'Team Collaboration', icon: '🤝' },
  { name: 'Continuous Learning', icon: '🚀' },
];

function CircularSkill({ name, level, color }) {
  const radius = 40;
  const circumference = 2 * Math.PI * radius;
  const offset = circumference - (circumference * level) / 100;
  return (
    <div className="meter-block">
      <div className="circle-svg-wrapper">
        <svg viewBox="0 0 100 100">
          <circle cx="50" cy="50" r={radius} className="circle-bg" />
          <circle
            cx="50"
            cy="50"
            r={radius}
            className="circle-fill"
            style={{
              stroke: color,
              strokeDasharray: circumference,
              strokeDashoffset: offset,
            }}
          />
        </svg>
        <span className="circle-percent">{level}%</span>
      </div>
      <span className="skill-name">{name}</span>
    </div>
  );
}

export default function Skills() {
  return (
    <section id="skills" className="skills-enhanced-section">
      <div className="skills-enhanced-content">
        <div className="skills-header">
          <span className="skills-badge">Expertise</span>
          <h2 className="skills-enhanced-title">
            <span className="title-gradient">My Tech Stack</span>
          </h2>
          <p className="skills-enhanced-desc">
            A balanced blend of modern frontend interfaces, secure backend databases, and seamless workflows.
          </p>
        </div>

        <div className="skills-categories-enhanced">
          {/* Frontend Card */}
          <div className="skill-category-card accent-cyan">
            <div className="category-header">
              <div className="category-icon-wrapper">
                <FaCode />
              </div>
              <div className="category-info">
                <h3 className="category-title">Frontend Ecosystem</h3>
                <span className="category-badge">Client View</span>
              </div>
            </div>
            <div className="category-skills">
              {frontendSkills.map((skill) => (
                <CircularSkill
                  key={skill.name}
                  name={skill.name}
                  level={skill.level}
                  color="var(--accent-cyan)"
                />
              ))}
            </div>
          </div>

          {/* Backend Card */}
          <div className="skill-category-card accent-teal">
            <div className="category-header">
              <div className="category-icon-wrapper">
                <FaServer />
              </div>
              <div className="category-info">
                <h3 className="category-title">Backend System</h3>
                <span className="category-badge">Server Rack</span>
              </div>
            </div>
            <div className="category-skills">
              {backendSkills.map((skill) => (
                <CircularSkill
                  key={skill.name}
                  name={skill.name}
                  level={skill.level}
                  color="var(--accent-teal)"
                />
              ))}
            </div>
          </div>

          {/* Tools Card */}
          <div className="skill-category-card accent-pink">
            <div className="category-header">
              <div className="category-icon-wrapper">
                <FaTools />
              </div>
              <div className="category-info">
                <h3 className="category-title">Toolchain & Utilities</h3>
                <span className="category-badge">Developer Environment</span>
              </div>
            </div>
            <div className="category-skills">
              {tools.map((tool) => (
                <div key={tool} className="skill-pill-enhanced">
                  <span className="skill-pill-icon">⚙️</span>
                  <span className="skill-pill-name">{tool}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Soft Skills Card */}
          <div className="skill-category-card accent-violet">
            <div className="category-header">
              <div className="category-icon-wrapper">
                <FaUserFriends />
              </div>
              <div className="category-info">
                <h3 className="category-title">Core Competencies</h3>
                <span className="category-badge">Human Aspect</span>
              </div>
            </div>
            <div className="category-skills">
              {softSkills.map((skill) => (
                <div key={skill.name} className="skill-pill-enhanced">
                  <span className="skill-pill-icon">{skill.icon}</span>
                  <span className="skill-pill-name">{skill.name}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}