import React from "react";
import { Col, Row } from "react-bootstrap";
import {
  SiNextdotjs,
  SiSolidity,
  SiExpress,
  SiElectron,
  SiVite,
  SiMysql,
} from "react-icons/si";

import Javascript from "../../Assets/TechIcons/Javascript.svg";
import Node from "../../Assets/TechIcons/Node.svg";
import ReactIcon from "../../Assets/TechIcons/React.svg";
import Git from "../../Assets/TechIcons/Git.svg";
import Firebase from "../../Assets/TechIcons/Firebase.svg";
import Docker from "../../Assets/TechIcons/Docker.svg";
import Mongo from "../../Assets/TechIcons/Mongo.svg";
import Tailwind from "../../Assets/TechIcons/Tailwind.svg";
import Postman from "../../Assets/TechIcons/Postman.svg";
import Python from "../../Assets/TechIcons/Python.svg";
import Java from "../../Assets/TechIcons/Java.svg";
import Bootstrap from "../../Assets/TechIcons/Bootstrap.svg";

function Techstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      {/* Languages */}
      <Col xs={4} md={2} className="tech-icons">
        <img src={Javascript} alt="JavaScript" />
        <div className="tech-icons-text">JavaScript</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <img src={Java} alt="Java" />
        <div className="tech-icons-text">Java</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <img src={Python} alt="Python" />
        <div className="tech-icons-text">Python</div>
      </Col>
      {/* Frontend */}
      <Col xs={4} md={2} className="tech-icons">
        <img src={ReactIcon} alt="React" />
        <div className="tech-icons-text">React</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiNextdotjs fontSize="24px" />
        <div className="tech-icons-text">Next.js</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <img src={Tailwind} alt="Tailwind" />
        <div className="tech-icons-text">Tailwind CSS</div>
      </Col>
      {/* <Col xs={4} md={2} className="tech-icons">
        <img src={Bootstrap} alt="Bootstrap" />
        <div className="tech-icons-text">Bootstrap</div>
      </Col> */}
      <Col xs={4} md={2} className="tech-icons">
        <SiVite fontSize="24px" />
        <div className="tech-icons-text">Vite</div>
      </Col>
      {/* Backend */}
      <Col xs={4} md={2} className="tech-icons">
        <img src={Node} alt="Node.js" />
        <div className="tech-icons-text">Node.js</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiExpress fontSize="24px" />
        <div className="tech-icons-text">Express.js</div>
      </Col>
      {/* Databases */}
      <Col xs={4} md={2} className="tech-icons">
        <img src={Mongo} alt="MongoDB" />
        <div className="tech-icons-text">MongoDB</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiMysql fontSize="24px" />
        <div className="tech-icons-text">MySQL</div>
      </Col>
      {/* Tools */}
      <Col xs={4} md={2} className="tech-icons">
        <img src={Git} alt="Git" />
        <div className="tech-icons-text">Git</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <img src={Postman} alt="Postman" />
        <div className="tech-icons-text">Postman</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <img src={Firebase} alt="Firebase" />
        <div className="tech-icons-text">Firebase</div>
      </Col>
      {/* Platforms */}
      {/* <Col xs={4} md={2} className="tech-icons">
        <div className="tech-icons-text">Vercel</div>
      </Col>

      <Col xs={4} md={2} className="tech-icons">
        <div className="tech-icons-text">Netlify</div>
      </Col>

      <Col xs={4} md={2} className="tech-icons">
        <div className="tech-icons-text">Render</div>
      </Col>

      
      <Col xs={4} md={2} className="tech-icons">
        <SiElectron fontSize="24px" />
        <div className="tech-icons-text">Electron</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <div className="tech-icons-text">Ollama</div>
      </Col>{" "}
      */}
    </Row>
  );
}

export default Techstack;
