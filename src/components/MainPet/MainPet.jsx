import React from "react";
import { Card, Container } from "react-bootstrap";
import { PROJECTS_INFO } from "../../utils/projectsInfo";
import "./MainPet.scss";

function MainPet() {
  const project = PROJECTS_INFO.find((project) => project.id === "1");

  return (
    <section className="main-pet">
      <h3 className="main-pet__title">
        const <span className="highlighted-text-shadow">myPetProject</span> =
      </h3>
      <Container>
        <Card className={`main-pet__card`}>
          <Card.Img
            variant="top"
            src={project.imageUrl}
            alt={project.title}
            className="main-pet__card-img"
          />
          <Card.Body className="main-pet__card-description">
            <a
              href={project.githubUrl}
              className="main-pet__card-github"
              target="_blank"
              rel="noopener noreferrer"
            >
              {React.isValidElement(project.githubIcon)
                ? React.cloneElement(project.githubIcon, {
                    className: "main-pet__card-tech-img main-pet__github-img",
                  })
                : null}
            </a>
            <Card.Title
              className="main-pet__card-title"
              onClick={() => window.open(project.websiteUrl, "_blank")}
              target="_blank"
              rel="noopener noreferrer"
            >
              {project.title}
            </Card.Title>
            <Card.Text className="main-pet__card-text">
              {project.description}
            </Card.Text>
            <div className="main-pet__card-tech">
              {project.techIcons.map((techIcon) => (
                <span key={techIcon.name} className="main-pet__card-tech-item">
                  {React.isValidElement(techIcon.icon)
                    ? React.cloneElement(techIcon.icon, {
                        className: "main-pet__card-tech-img",
                      })
                    : null}
                </span>
              ))}
            </div>
          </Card.Body>
        </Card>
      </Container>
    </section>
  );
}

export default MainPet;
