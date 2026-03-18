import { useState } from 'react';
import { projects } from '../data';

const filters = ['All', 'Web', 'CLI'];

export default function ProjectsPage() {
  const [activeFilter, setActiveFilter] = useState('All');

  const filteredProjects = activeFilter === 'All'
    ? projects
    : projects.filter(p => p.category.toLowerCase() === activeFilter.toLowerCase());

  return (
    <div className="page-wrapper">
      <div className="section-header">
        <h1 className="section-header__title">Projects</h1>
        <p className="section-header__subtitle">A collection of projects I've worked on.</p>
      </div>

      <div className="filter-buttons">
        {filters.map((filter) => (
          <button
            key={filter}
            className={`filter-btn ${activeFilter === filter ? 'filter-btn--active' : ''}`}
            onClick={() => setActiveFilter(filter)}
          >
            {filter}
          </button>
        ))}
      </div>

      <div className="projects-grid">
        {filteredProjects.map((project) => {
          const previewSrc = project.preview
            ? (project.preview.startsWith('http')
              ? project.preview
              : `${import.meta.env.BASE_URL}${project.preview.replace(/^\/+/, '')}`)
            : null;

          return (
            <div key={project.id} className="project-card glass">
              {previewSrc ? (
                <img
                  src={previewSrc}
                  alt={`${project.title} preview`}
                  className="project-card__preview"
                  loading="lazy"
                />
              ) : null}
              <h3 className="project-card__title">{project.title}</h3>
              <p className="project-card__desc">{project.description}</p>
              <div className="project-card__techs">
                {project.techs.map((tech, i) => (
                  <span key={i} className="tech-chip">{tech}</span>
                ))}
              </div>
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="project-card__link"
              >
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
                </svg>
                GitHub
              </a>
            </div>
          );
        })}
      </div>
    </div>
  );
}
