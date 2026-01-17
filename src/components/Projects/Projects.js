import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import leaf from "../../Assets/Projects/leaf.png";
import emotion from "../../Assets/Projects/emotion.png";
import editor from "../../Assets/Projects/codeEditor.png";
import chatify from "../../Assets/Projects/chatify.png";
import suicide from "../../Assets/Projects/suicide.png";
import bitsOfCode from "../../Assets/Projects/blog.png";
import sigmagpt from "../../Assets/Projects/sigmagpt.png";
import misinfo from "../../Assets/Projects/misinfo.png";
import prism from "../../Assets/Projects/prism.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={prism}
              isBlog={false}
              title="Prism"
              description="Prism is an AI-powered legal assistant that analyzes uploaded documents to generate summaries, explain clauses, detect risks, and answer natural-language legal questions through a secure document vault and AI engine."
              ghLink="https://github.com/psykickguy/Prism"
              demoLink="https://prism-lac-theta.vercel.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={misinfo}
              isBlog={false}
              title="Misinformation Detection Game"
              description="An AI-powered interactive game that detects misinformation by scraping news content, verifying claims using evidence-based analysis, and presenting results through a React frontend. Built to promote awareness around fake news and digital literacy."
              ghLink="https://github.com/psykickguy/MISINFORMATION-GAME"
              demoLink="https://misinfogame0.netlify.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={sigmagpt}
              isBlog={false}
              title="SigmaGPT"
              description="An AI-powered assistant built using modern web technologies and local LLM tooling. SigmaGPT focuses on prompt-based interactions, experimentation with AI workflows, and integrating language models into practical applications."
              ghLink="https://github.com/psykickguy/SigmaGPT"
              demoLink="https://sigma-gpt-psykickguy.vercel.app/"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
