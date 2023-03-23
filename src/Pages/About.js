import React from "react";
import "./CSS/About.css"
import { Container, Row, Col } from "react-bootstrap";
import SkillSet from "./../assets/front-end-skills.png"


const About = () => {
  return <div>

    {/* Hero Section */}
    <section className="HeroSection">
      <Container>
        <Row>
          <Col sm={6} className="AboutImageSection">
            <img src={SkillSet} alt="About Skills" />
          </Col>
          <Col sm={6} className="AboutContent">
            <h4>About Us</h4>
            <h2>Three ladies who enjoy coding</h2>
            <p>We are a team of 3 ladies: Priya, Sabaina & Sabrina. We have done 2 projects together as a group. During these projects our team have implemented agile development methodologies to help us work collaboratively.</p>

            <p>Priyadarsini Gunasekaran
              GitHub: https://github.com/priyadarsini-gunasekaran
              &
              LinkedIn:

            </p>
            <p>
              Sabainah Akinbusuyi
              GitHub: <a href="https://github.com/akinbusuyi" rel="noreferrer"></a>
              & LinkedIn:
            </p>
            <p>
              Sabrina Hua
              GitHub: https://github.com/SabrinaHuajy
              & LinkedIn: https://www.linkedin.com/in/sabrinahuajy/</p>



            <h5><span>Let's be friends:</span> <br /> <a href="mailto:j.hua@york.ac.uk" rel="noreferrer">j.hua@york.ac.uk</a></h5>
          </Col>
        </Row>
      </Container>
    </section>
  </div>
};

export default About;