import React from "react";
import { Card, CardGroup, Container } from "react-bootstrap";

import "./Projects.scss";

import { PROJECTS_INFO } from "../../utils/projectsInfo";

function Projects() {
  return (
    <section className="projects">
      <Container>
        <CardGroup className="projects__container">
          {PROJECTS_INFO.map((project) => (
            <Card
              key={project.id}
              className={`projects__card ${project.class}`}
            >
              <Card.Img
                variant="top"
                src={project.imageUrl}
                alt={project.title}
                className="projects__card-img"
              />
              <Card.Body className="projects__card-description">
                <a
                  href={project.githubUrl}
                  className="projects__card-github"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {React.isValidElement(project.githubIcon)
                    ? React.cloneElement(project.githubIcon, {
                        className: "projects__card-tech-img github-img",
                      })
                    : null}
                </a>
                <Card.Title
                  className="projects__card-title"
                  onClick={() => window.open(project.websiteUrl, "_blank")}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {project.title}
                </Card.Title>
                <Card.Text className="projects__card-text">
                  {project.description}
                </Card.Text>
                <div className="projects__card-tech">
                  {project.techIcons.map((techIcon) => (
                    <span
                      key={techIcon.name}
                      className="projects__card-tech-item"
                    >
                      {React.isValidElement(techIcon.icon)
                        ? React.cloneElement(techIcon.icon, {
                            className: "projects__card-tech-img",
                          })
                        : null}
                    </span>
                  ))}
                </div>
              </Card.Body>
            </Card>
          ))}
        </CardGroup>
      </Container>
    </section>
  );
}

export default Projects;
