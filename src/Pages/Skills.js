import React from 'react'
import AboutIntro from "../Images/119356-development.gif"
import ProgressBar from 'react-bootstrap/ProgressBar';
import { Container, Row, Col } from "react-bootstrap";
import "./CSS/Skills.css"

//import { Link } from "react-router-dom";
import Footer from '../Components/Footer';




export default function Skills() {

  function OpenCV() {
    window.open(
      "https://drive.google.com/file/d/15sKcUqhx0nkwJyto4HDnKZxTa6VS3X_n/view", "_blank");
  }

  return (
    <div>



      {/* Skills bars Section */}
      <section className="Skillssection">
        <Container>
          <Row>
            <Col sm={6} className="Skillbars">
              <h4>My Skill Set</h4>
              <ProgressBar now={80} label="HTML" />
              <ProgressBar now={70} label="CSS" />
              <ProgressBar now={90} label="Bootstrap" />
              <ProgressBar now={75} label="React JS" />
              <ProgressBar now={80} label="Visual studio code" />
              <ProgressBar now={65} label="Github" />
              <ProgressBar now={50} label="git" />

              <button className="primary"
                onClick={OpenCV}>
                Download CV
              </button>
            </Col>
            <Col sm={6} className="SkillIntro">
              <img src={AboutIntro} alt="About Skills" className="EDLogo" />
            </Col>
          </Row>
        </Container>


      </section>


      <Footer />
    </div>
  )
}
