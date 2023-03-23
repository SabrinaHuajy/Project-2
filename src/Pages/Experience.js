import React from 'react'
import { Container } from 'react-bootstrap'
import "./CSS/Experience.css"
import Footer from "../Components/Footer"

export default function Experience() {
  return (
    <div>
      <section className='ExpSection'>
        <Container>
          <h2 className='h2Title'>Experience</h2>
          <p className='Ptext'>PhD. Biology, CNAP Prof. Ian Bancroft Laboratory, University of York, UK</p>
          <div className="timeline">
            <div className="containe left">
              <div className="content">
                <h6>Sep 2022 - March 2023 (7 Months)</h6>
                <h5>Front-end Web Developer</h5>
                <h6 className='company'>Freenlancing </h6>
                <p>Front-End Web Developer leveraging my background in Biology to build more intuitive user experiences on the web. Earned a certificate in Front-end Development from the edX skill Bootcamp and developed skills in JavaScript, CSS, React.js, and responsive web design. 
                </p>
              </div>
            </div>
            <div className="containe right">
              <div className="content">
                <h6>Jan 2018 - July 2018 (7 Months)</h6>
                <h5>Analyst in Equity Financing with Merge & Acquisition </h5>
                <h6 className='company'>HAITONG Securities Co., Ltd. Shanghai, China</h6>
                <p>Participated in one international Significant Asset Reorganisation projects. Made collation of IPO and backdoor listing situations in pharmaceutical industries. Managed M&A project resource statistics database.</p>
              </div>
            </div>
          </div>
        </Container>
      </section>

      <Footer />

    </div>
  )
}
