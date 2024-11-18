import './Page2.css';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import React, { useState } from 'react';
import skills from '../assets/skills.png';
import personality from '../assets/personality.png';
import experience from '../assets/experience.png';
import education from '../assets/education.jpg';
import react from '../assets/react.png';
import node_js from '../assets/node js.png';
import javascript from '../assets/javascript.png';
import tailwind from '../assets/tailwind-css.png';
import mongodb from '../assets/mongodb.png';
import anti_design from '../assets/ant-design.png';
import express_js from '../assets/express js.png';
import adobe_photoshop from '../assets/adobe photoshop.png';
import git_hub from '../assets/git.png';
import { useMediaQuery } from 'react-responsive';

const Page2 = () => {
  const isMobileOne = useMediaQuery({ query: '(max-width:1088px)' });
  const isMobile = useMediaQuery({ query: '(max-width: 768px)' });
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: isMobile ? 1 : isMobileOne ? 2 : 3,
    slidesToScroll: 1,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 2000,
    cssEase: "linear"
  };
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

           <div className='div'>
           <img src={education} alt="" />
            <h1>Education</h1>
            <p>Working on my Degree now</p>
            </div>
       </div>
       <div className='tools slider-container'>
      <Slider {...settings}>
         <div className='tool-name'>
          <img src={react} className='image' alt="" />
           <h1>React Js</h1>
        </div>
         <div className='tool-name'>
          <img src={node_js} className='image'  alt="" />
           <h1>Node Js</h1>
        </div>
         <div className='tool-name'>
          <img src={javascript} className='image' alt="" />
          <h1>Javasript</h1>
        </div>
         <div className='tool-name'>
          <img src={tailwind} className='image' alt="" />
           <h1>Taiwind Css</h1>
        </div>
         <div className='tool-name'>
          <img src={mongodb} className='image' alt="" />
           <h1>MongoDb</h1>
        </div>
        <div className='tool-name'>
          <img src={express_js} className='image' alt="" />
           <h1>Express Js</h1>
        </div>
         <div className='tool-name'>
          <img src={anti_design} className='image' alt="" />
           <h1>Ant Design</h1>
        </div>
         <div className='tool-name'>
          <img src={git_hub} className='image' alt="" />
           <h1>Git Hub</h1>
        </div>
         <div className='tool-name'>
          <img src={adobe_photoshop} className='image' alt="" />
           <h1>Adobe Photoshop</h1>
        </div>
      </Slider>
          </div>
      </div>
      </div>
  
    </section>

  )
}

export default Page2
