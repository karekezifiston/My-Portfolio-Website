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
    userMessage: '',});

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
      {/* <div className='title'>
        <h1>CONTACT</h1>
      </div> */}
      <div className='footers'>
      <div className='left-footer'>
        <div>
        <h1 className='let'>Talk To Me Here...</h1>
        
        </div>
        <div className='right-footer'>
      <div className='third-way'>
          <a href="https://mail.google.com/mail/karekezifiston@gmail.com"><img src={email}className='short-icon' alt="" />karekezifiston30@gmail.com</a>
          <a href=""><img className='short-icon' src={call}  alt="" /> +250 780 377 645</a>
        </div>
      </div>
      </div>
      <div className='talk'>
         <form onSubmit={handleSubmit}>
         <div className="first">
         <input type="text" name="userName"id='userName' value={formData.userName} placeholder="NAME"onChange={handleChange} required />
         <input type="email" name="userEmail"id='userEmail' value={formData.userEmail} placeholder="EMAIL"onChange={handleChange} required />
         </div>
         <div className="text-area">
         <textarea name="userMessage"id='userMessage' value={formData.userMessage} rows="6" placeholder="MESSAGE"onChange={handleChange}></textarea>
         </div>
         <button type="submit" className="submit">Send <img src={send}width={20} alt="" /></button>
         </form>
         </div>
      </div>
        
      
    </div>
  )
}

export default Footer
