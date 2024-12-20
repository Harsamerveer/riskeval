import React, { useState } from "react";
import emailjs from '@emailjs/browser'
import { useRef } from 'react'



function Contact() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [submitted, setSubmitted] = useState(false);
  const form = useRef()


  const sendEmail = (e) => {
    e.preventDefault()

    emailjs
      .sendForm('service_b0v44r9', 'template_urvr446', form.current, 'eFSiE5KxwIzpq_cLP')
      .then(
        () => {
          alert('Message successfully sent!')
          window.location.reload(false)
        },
        () => {
          alert('Failed to send the message, please try again')
        }
      )
  };

  return (
    <div
    className="container my-2"
    id="contact"
    style={{
      display: "flex",
      justifyContent: "center", 
    }}
  >
      {submitted ? (
        <div className="alert alert-success text-center ph-2 py-1">Thank you! We'll get back to you soon.</div>
      ) : (
        <form ref={form} onSubmit={sendEmail}>
          <div className="mb-2 ">
          <h2 className="text-center mb-2">Contact Us</h2>
            <label htmlFor="name" className="form-label">Name</label>
            <input
              type="text"
              className="form-control"
              id="name"
              name="name"
              required
            />
            <label  className="form-label">Email</label>
            <input
              type="email"
              className="form-control"
              id="email"
              name="email"
              required
            />
            <label  className="form-label">Message</label>
            <textarea
              className="form-control"
              id="message"
              name="message"
              rows="1"
              required
            ></textarea>
          </div>
            <input type="submit" value="SEND"     style={{ display: "block", margin: "0 auto" }}/>
          </form>
      )}
    </div>
  );
}

export default Contact;
