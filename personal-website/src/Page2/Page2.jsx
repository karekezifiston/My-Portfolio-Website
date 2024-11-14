// import React from "react";
import './Page2.css';
import React, { useState } from 'react';
import skills from '../assets/skills.png';
import personality from '../assets/personality.png';
import experience from '../assets/experience.png';
import education from '../assets/education.jpg';

const Page2 = () => {
  const [activeList, setActiveList] = useState(1);

  const handleH1Click = (listNumber) => {
    if (activeList === listNumber) {
      setActiveList(null); 
    } else {
      setActiveList(listNumber); 
    }
  };

  return (
     
     <section  id="about" className="page_2">
    <div className="title">
    <h1 className="about_me">About Me</h1>
    <p className="get_to_know">Get to know more</p>
  </div>
    <div className="section_container">
    <div  className="img-about">
           <img src="fis.PNG" alt="" />
   </div>
      <div className="left-part">
        <div className='text'>
        <p className="myexperience">In 2022, I began my journey in software development, motivated by a desire to innovate and solve real-world problems through technology. Starting with the basics, I quickly progressed, building skills and tackling projects that deepened my knowledge. This path has been inspiring and has strengthened my commitment to creating meaningful digital solutions.</p>
        </div>
        <div className='does'>
          <div className='div' >
          <img src={experience} alt="" />
          <h1>Experience</h1>
          <p>2+ years Frontend <br />Development</p>
          </div>
           {/* <div className='div'>
           <img src={personality} alt="" />
            <h1>Personality</h1>
            <ul>
             <li>CHRISTAIN</li>
            <li>LEARING SEEKER</li> 
            </ul>
            </div> */}
           <div className='div'>
           <img src={education} alt="" />
            <h1>Education</h1>
            <p>Working on my Degree now</p>
            </div>
       </div>
      </div>
      </div>
  
    </section>

  )
}

export default Page2
