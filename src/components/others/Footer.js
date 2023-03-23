import React from 'react'
import "../others/Footer.css"
import { Link } from "react-router-dom";
import { Container, Row, Col } from "react-bootstrap";
import Linkedin from "../Images/Social Media/linkedin.png"
import github from "../Images/Social Media/github.png"


import logo from"../Images/sh-logo.png";






export default function Footer() {
  return (
    <div>
        {/* Footer */}
        <section className="Footer">
        <footer>
          <Container>
            <Row>
              <Col sm={4}>
                <div className="iconcont">
                  <div className="SocialIco">
                    <a href="https://www.linkedin.com/in/sabrinahuajy/" target="_blank" rel="noreferrer">
                      <img src={Linkedin} alt="Linkedin" />
                    </a>
                  </div>
                  <div className="SocialIco">
                    <a href="https://github.com/SabrinaHuajy" target="_blank" rel="noreferrer">
                    <img src={github} alt="Github" />
                    </a>
                  </div>
                
                  
                </div>
              </Col>

              <Col sm={4} className="text-center">
              <Link to="/"><img src={logo} className="FooterLogo" alt="Logo" /></Link>
              </Col>

              <Col sm={4} className="FooterLinks copytxt">
              <p>2023 - Sabrina Hua</p>
              </Col>
              
            </Row>
          </Container>
        </footer>
      </section>
    </div>
  )
}
