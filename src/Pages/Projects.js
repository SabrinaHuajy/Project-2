import React from 'react'
import Project1 from "../Images/Projects/password_generator.PNG"
import Project2 from "../Images/Projects/console.PNG"
import Project3 from "../Images/Projects/codequiz.PNG"
import Project4 from "../Images/Projects/dailyplanner.PNG"
import Project5 from "../Images/Projects/makeameal.png"
import Project6 from "../Images/Projects/weatherforecast.PNG"
import { Container, Row, Col } from "react-bootstrap";
import "./CSS/Projects.css"
import Footer from '../Components/Footer';


export default function Projects() {
  return (
    <div>
      {/* Portfolio Section */}
      <section className="PortfolioSection">
        <Container>
          <h2>Recent Projects</h2>
          <p>I love coding, it empowered me to do amazing things like these!</p>
          <Row className="ProjectsList">
            <Col sm="4" className="Project">
              <img src={Project1} alt="password_generator" />
              <h4 class="project-title">Password Generator</h4>
              <a href="https://github.com/SabrinaHuajy/SabrinaHuajy-Password-Generator" target="_blank" rel="noreferrer" class="project-link">Link to GitHub</a>
            </Col>
            <Col sm="4" className="Project">
              <img src={Project2} alt="console" />
              <h4 class="project-title">Console and Finances</h4>
              <a href="https://github.com/SabrinaHuajy/SabrinaHuajy-Console-Finances" target="_blank" rel="noreferrer" class="project-link">Link to GitHub</a>
            </Col>
            <Col sm="4" className="Project">
              <img src={Project3} alt="codequiz" />
              <h4 class="project-title">Code Quiz</h4>
              <a href="https://github.com/SabrinaHuajy/SabrinaHuajy-CodeQuiz" target="_blank" rel="noreferrer" class="project-link">Link to GitHub</a>
            </Col>
          </Row>
          <Row className='pt-4'>
            <Col sm="4" className="Project">
              <img src={Project4} alt="dailyplanner" />
              <h4 class="project-title">Daily Planner</h4>
              <a href="https://github.com/SabrinaHuajy/SabrinaHuajy-Daily-Planner-App" target="_blank" rel="noreferrer" class="project-link">Link to GitHub</a>
            </Col>
            <Col sm="4" className="Project">
              <img src={Project5} alt="makeameal" />
              <h4 class="project-title">Make your meal App</h4>
              <a href="https://github.com/akinbusuyi/Make-your-meal/" target="_blank" rel="noreferrer" class="project-link">Link to GitHub</a>
            </Col>
            <Col sm="4" className="Project">
              <img src={Project6} alt="weatherforecast" />
              <h4 class="project-title">Weather Forecast</h4>
              <a href="https://github.com/SabrinaHuajy/SabrinaHuajy-5day-Weather-Report" target="_blank" rel="noreferrer" class="project-link">Link to GitHub</a>
            </Col>
          </Row>
        </Container>
      </section>

      <Footer />
    </div>
  )
}
