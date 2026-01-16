import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/avatar.svg";
import Tilt from "react-parallax-tilt";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              LET ME <span className="purple"> INTRODUCE </span> MYSELF
            </h1>
            <p className="home-about-body">
              I’m a full-stack developer who enjoys building real-world products
              from scratch and turning ideas into functional, scalable
              applications. I’m especially interested in creating systems that
              combine clean UI, solid backend logic, and practical
              problem-solving.
              <br />
              <br />I work mainly with
              <i>
                <b className="purple">
                  {" "}
                  JavaScript, React.js, Node.js, Express.js, and MongoDB{" "}
                </b>
              </i>
              and I’m comfortable handling both frontend and backend
              development.
              <br />
              <br />
              My interests include building
              <i>
                <b className="purple">
                  {" "}
                  full-stack web applications, AI-powered tools,{" "}
                </b>
              </i>
              and experimenting with
              <i>
                <b className="purple"> blockchain and Web3 technologies </b>
              </i>
              through hands-on projects and hackathons.
              <br />
              <br />I enjoy working with
              <b className="purple"> React </b>
              and modern frameworks like{" "}
              <i>
                <b className="purple">Next.js </b>
              </i>
              and I’m also exploring desktop application development using{" "}
              <b className="purple"> Electron.js </b>.
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;
