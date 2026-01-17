import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi everyone! I’m <span className="purple">Shubham Das</span> from{" "}
            <span className="purple">Navi Mumbai, India</span>.
            <br />
            I’m a <span className="purple">Full-Stack Developer</span> focused
            on building practical web applications and real-world projects.
            <br />I primarily work with{" "}
            <span className="purple">React, Node.js, Express, MongoDB</span> and
            I’m exploring <span className="purple">Web3</span> and{" "}
            <span className="purple">AI-powered tools</span>.
            <br />
            <br />
            Outside of coding, I enjoy activities that keep me curious and
            motivated:
          </p>

          <ul>
            <li className="about-activity">
              <ImPointRight /> Building side projects 🚀
            </li>
            <li className="about-activity">
              <ImPointRight /> Hackathons & coding challenges 🧠
            </li>
            <li className="about-activity">
              <ImPointRight /> Learning new technologies 📚
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Build, learn, and improve every day."
          </p>
          <footer className="blockquote-footer">Shubham</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
