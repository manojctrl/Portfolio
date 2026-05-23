import React from 'react';
import './Skills.css';

function Skills() {
  const skillCategories = [
    {
      title: 'Frontend',
      icon: '⚛️',
      skills: ['React', 'JavaScript', 'HTML/CSS', 'Vite', 'Responsive Design']
    },
    {
      title: 'Backend',
      icon: '🛠️',
      skills: ['Node.js', 'Express', 'MySQL', 'REST API', 'Authentication']
    },
    {
      title: 'Tools',
      icon: '🧰',
      skills: ['Git', 'VS Code', 'Postman', 'MySQL Workbench', 'npm']
    },
    {
      title: 'Soft Skills',
      icon: '✨',
      skills: ['Problem Solving', 'Communication', 'Teamwork', 'Creativity', 'Adaptability']
    }
  ];

  const skillHighlights = [
    { value: 'UI-first', label: 'Design-focused interfaces' },
    { value: 'Full-stack', label: 'Frontend + backend delivery' },
    { value: 'Reliable', label: 'Clean code and thoughtful architecture' },
    { value: 'Growth', label: 'Always learning new tools' }
  ];

  return (
    <section id="skills" className="skills">
      <div className="skills-header">
        <div>
          <p className="section-eyebrow">Skills & Expertise</p>
          <h2 className="section-title">Skills & Expertise</h2>
          <p className="section-copy">
            I combine creative design thinking with practical development skills to turn ideas into reliable digital experiences.
          </p>
        </div>
        <a href="#contact" className="btn-secondary">
          Let’s Collaborate
        </a>
      </div>

      <div className="skills-summary">
        {skillHighlights.map((item, index) => (
          <div key={index} className="summary-card">
            <span className="summary-value">{item.value}</span>
            <span className="summary-label">{item.label}</span>
          </div>
        ))}
      </div>

      <div className="skills-container">
        {skillCategories.map((category, index) => (
          <div key={index} className="skill-category" style={{ animationDelay: `${index * 0.1}s` }}>
            <div className="skill-category-header">
              <h3 className="category-title">{category.icon} {category.title}</h3>
            </div>
            <div className="skills-list">
              {category.skills.map((skill, i) => (
                <div key={i} className="skill-item">
                  <span className="skill-dot"></span>
                  <span>{skill}</span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      <div className="skills-footer">
        <p>Always learning and exploring new technologies to stay ahead in the tech world.</p>
      </div>
    </section>
  );
}

export default Skills;
