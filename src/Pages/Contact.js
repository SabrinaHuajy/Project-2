import React from 'react'
import { Container, Row } from "react-bootstrap";
import "./CSS/Contact.css"
import { useState } from 'react';
import { send } from 'emailjs-com';


export default function Contact() {

  const [toSend, setToSend] = useState({
    from_name: '',
    email: '',
    contact: '',
    message: '',
  });

  const onSubmit = (e) => {
    e.preventDefault();
    console.log(toSend.from_name, toSend.email, toSend.contact, toSend.message);

    send("service_unbn6ti", "template_749mqog", toSend, "4G3ogf19aCgMCX2a5")
    
      .then((response) => {
        console.log('SUCCESS!', response.status, response.text);
      })
      .catch((err) => {
        console.log('FAILED...', err);
      });

    document.getElementById("field1").value = "";
    document.getElementById("field2").value = "";
    document.getElementById("field3").value = "";
    document.getElementById("field4").value = "";

  };

  const handleChange = (e) => {
    setToSend({ ...toSend, [e.target.name]: e.target.value });
  };


  return (
    <div>
      {/*Contact Section */}
      <section className="contact_us">
        {/* <h2 className='Contactp-title pb-2'>Contact Us</h2> */}
        <Container>
          <Row>
            <div className="col-md-10 offset-md-1">
              <div className="contact_inner">
                <div className="row">
                  <div className="col-md-12 col-lg-11">
                    <div className="contact_form_inner">
                      <div className="contact_field">
                        <h3>Get In Touch!</h3>
                        <p>Why don't we collaborate?</p>
                        <form onSubmit={onSubmit}>

                          <input type="text"
                            className="form-control form-group"
                            name='from_name'
                            placeholder='name'
                            value={toSend.from_name}
                            onChange={handleChange}
                            id="field1"
                            required
                          />

                          <input type="email"
                            className="form-control form-group"
                            placeholder="Email"
                            name='email'
                            value={toSend.email}
                            onChange={handleChange}
                            id="field2"
                            required
                          />

                          <input type="number"
                            className="form-control form-group"
                            placeholder="Contact"
                            name='contact'
                            value={toSend.contact}
                            onChange={handleChange}
                            id="field3"
                            required
                          />

                          <textarea className="form-control form-group"
                            placeholder="Message"
                            name='message'
                            value={toSend.message}
                            onChange={handleChange}
                            id="field4"
                          />

                          <input type="submit"
                            className="contact_form_submit "
                          />

                        </form>
                      </div>
                    </div>
                  </div>

                </div>
                <div className="contact_info_sec">
                  <h4>Contact Info</h4>
                  <div className="d-flex info_single align-items-center">
                    <i className="fas fa-headset"></i>
                    <span>+44 7547281616</span>
                  </div>
                  <div className="d-flex info_single align-items-center">
                    <i className="fas fa-envelope-open-text"></i>
                    <span>j.hua@york.ac.uk</span>
                  </div>
                  <div className="d-flex info_single align-items-center">
                    <i className="fas fa-map-marked-alt"></i>
                    <span>York, England</span>
                  </div>

                </div>
              </div>
            </div>
          </Row>
        </Container>
      </section>

    </div>
  )
}
