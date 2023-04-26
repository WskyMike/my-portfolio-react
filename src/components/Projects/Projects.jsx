import React from 'react';
import './Projects.css';

import { PROJECTS_INFO } from '../../utils/projectsInfo';

function Projects() {
  return (
    <section className="projects">
      <ul className="projects__container">
        {PROJECTS_INFO.map((project) => (
          <li key={project.id} className="projects__card">
            <a
              className="projects__card-meta"
              href={project.websiteUrl}
              target="_blank"
              rel="noreferrer"
            >
              <img
                src={project.imageUrl}
                alt={project.title}
                className="projects__card-img"
              />
              <div className="projects__card-description">
                <a
                  href={project.githubUrl}
                  className="projects__card-github"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img
                    src={project.githubIconUrl}
                    alt="GitHub"
                    className="projects__card-tech-img github-img"
                  />
                </a>
                <h2 className="projects__card-title">{project.title}</h2>
                <p className="projects__card-text">{project.description}</p>
                <div className="projects__card-tech">
                  {project.techIcons.map((techIcon) => (
                    <img
                      key={techIcon.name}
                      src={techIcon.icon}
                      alt={techIcon.name}
                      className="projects__card-tech-img"
                    />
                  ))}
                </div>
              </div>
            </a>
          </li>
        ))}
      </ul>
    </section>
  );
}

export default Projects;
