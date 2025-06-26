// import React from "react";
import './Page5.css';
import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import location from '../assets/location.png'
import email from '../assets/email.png'
import call from '../assets/call.png'
import send from '../assets/send.png'

const Footer = () => {
  const [formData, setFormData] = useState({
    userName: '',
    userEmail: '',
    userMessage: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const serviceID = 'karekezi';
    const templateID = 'template_ii04bkd';
    const userID = '8C7imFdyzAIyRuYDD';

    emailjs.send(serviceID, templateID, formData, userID)
      .then((response) => {
        console.log('SUCCESS!', response.status, response.text);
        alert('Message sent successfully!');
        setFormData({ userName: '', userEmail: '', userMessage: '' });
      })
      .catch((error) => {
        console.error('FAILED...', error);
        alert('Failed to send message. Please try again.');
      });
  };
  return (
    <div className='footer' id='contact'>
      <div className='titlee'>
        <h1 className='about_me'>CONTACT</h1>
      </div>
      <div className='footers'>
        <div className='left-footer'>
          <div>
            <h1 className='let'>Give a Shout...</h1>

          </div>
          <div className='right-footer'>
            <div className='third-way'>
              <a href="tel:+250780377645">+250-780-377-645</a>
              <a href="mailto:karekezifiston30@gmail.com">karekezifiston30@gmail.com</a>  
            </div>
          </div>
        </div>
        <div className='talk'>
          <form onSubmit={handleSubmit}>
            <div className="first">
              <input type="text" name="userName" id='userName' value={formData.userName} placeholder="NAME" onChange={handleChange} required />
              <input type="email" name="userEmail" id='userEmail' value={formData.userEmail} placeholder="EMAIL" onChange={handleChange} required />
            </div>
            <div className="text-area">
              <textarea name="userMessage" id='userMessage' value={formData.userMessage} rows="6" placeholder="MESSAGE" onChange={handleChange}></textarea>
            </div>
            <button type="submit" className="submit">Send
              <i
                className="icon2 fa fa-paper-plane fa-fade"
                style={{
                  marginLeft: "12px",
                  "--fa-animation-duration": "3s"
                }}
              ></i>

            </button>
          </form>
        </div>
        <div className='third-way onshort'>
          <a href="tel:+250780377645"> +250-780-377-645</a>
          <a href="mailto:karekezifiston30@gmail.com">karekezifiston30@gmail.com</a>
        </div>
      </div>
    <div className='last-foot'>
      <p>Simply made by KAREKEZI Fiston</p>
    </div>

    </div>
  )
}

export default Footer
