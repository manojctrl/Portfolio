import React, { useState, useEffect } from 'react';
import './Projects.css';
import api from '../services/api';

function Projects() {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchProjects();
  }, []);

  const fetchProjects = async () => {
    try {
      const data = await api.getProjects();
      setProjects(data);
      setLoading(false);
    } catch (error) {
      console.error('Error fetching projects:', error);
      setLoading(false);
    }
  };

  return (
    <section id="projects" className="projects">
      <div className="section-heading-row">
        <div>
          <p className="section-eyebrow">Featured Projects</p>
          <h2 className="section-title">Featured Projects</h2>
        </div>
        <p className="section-copy">
          A showcase of thoughtful builds, practical problem-solving, and creative UI work.
        </p>
      </div>

      {loading ? (
        <div className="loading">
          <div className="loader"></div>
          <p>Loading amazing projects...</p>
        </div>
      ) : projects.length === 0 ? (
        <div className="no-projects-card glass-panel">
          <p className="no-projects-title">Projects are syncing from the backend.</p>
          <p className="no-projects-copy">
            Once your project data is added, it will appear here automatically with a polished card layout.
          </p>
          <a href="#contact" className="btn-secondary">Request a Project Update</a>
        </div>
      ) : (
        <div className="projects-grid">
          {projects.map((project, index) => {
            const techStack = project.tech_stack
              ? project.tech_stack.split(',').map((tech) => tech.trim()).filter(Boolean)
              : [];

            return (
              <div key={project.id} className="project-card glass-panel" style={{ animationDelay: `${index * 0.1}s` }}>
                {project.image_url && (
                  <div className="project-image">
                    <img src={project.image_url} alt={project.title} />
                  </div>
                )}

                <div className="project-content">
                  <h3 className="project-title">{project.title}</h3>
                  <p className="project-description">{project.description}</p>

                  {techStack.length > 0 && (
                    <div className="project-tags">
                      {techStack.map((tech, i) => (
                        <span key={`${project.id}-${tech}-${i}`} className="tag">{tech}</span>
                      ))}
                    </div>
                  )}

                  <div className="project-footer">
                    {project.github_link && (
                      <a href={project.github_link} target="_blank" rel="noopener noreferrer" className="project-link">
                        View GitHub →
                      </a>
                    )}
                    {project.live_link && (
                      <a href={project.live_link} target="_blank" rel="noopener noreferrer" className="project-link" style={{ marginLeft: '12px' }}>
                        Live Demo →
                      </a>
                    )}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      )}
    </section>
  );
}

export default Projects;
