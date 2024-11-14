import React from "react";
import './Page3.css';
import kigali_puppies from '../assets/kigali_puppies.png';
import ecommerce from '../assets/ecommerce1.png';
import real_estate from '../assets/real_estate.png';
import Slider from "react-slick";
import { useMediaQuery } from 'react-responsive';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


function Page3() {
  const isMobileOne = useMediaQuery({ query: '(max-width:1122px)' });
  const isMobile = useMediaQuery({ query: '(max-width: 768px)' });
  
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: isMobile ? 1 : isMobileOne ? 2 : 3,
    slidesToScroll: isMobile ? 1 : isMobileOne ? 2 : 3
  };
  
  
  return (
    <section className="page_4" id="projects">
      <div className="section-one">
      <div className="title_3">
       <h1 className="about_me">Projects</h1>
       <p className="get_to_know_2"> Browse My Recents</p>
      </div>
        <div className="slider-container">
          <Slider {...settings}>
            <div className="Trend">
              <div className="card">
              <div className="first_border">
          <img src={kigali_puppies} alt="" className="img_one"/>
          <h4 className="project_text">KIGALI PUPPIES</h4>
          <div className="two_links">
            <button className="github">GitHub</button>
            <button className="livedemo">Live Demo</button>
          </div>
        </div> 
              </div>
            </div>
            <div className="Trend">
              <div className="card">
              <div class="first_border">
          <img src={ecommerce} alt="" className="img_one"/>
          <h4 className="project_text">E-commerce <br />(Full Stack)</h4>
          <div className="two_links">
            <button className="github">GitHub</button>
            <button className="livedemo">Live Demo</button>
          </div>
        </div>
              </div>
            </div>
            <div className="Trend">
              <div className="card">
              <div className="first_border">
          <img src={real_estate} alt="" className="img_one"/>
          <h4 className="project_text">REAL ESTATE</h4>
          <div className="two_links">
            <a href="https://github.com/karekezifiston/Estate-website-with-react"><button className="github">GitHub</button></a>
            <a href="https://estate-website-frontend.netlify.app"><button className="livedemo">Live Demo</button></a>
          </div>
        </div>
              </div>
            </div>
            <div className="Trend">
              <div className="card">4</div>
            </div>
            <div className="Trend">
              <div className="card">5</div>
            </div>
            <div className="Trend">
              <div className="card">6</div>
            </div>
            <div className="Trend">
              <div className="card">7</div>
            </div>
            <div className="Trend">
              <div className="card">8</div>
            </div>
            <div className="Trend">
              <div className="card">9</div>
            </div>
          </Slider>
        </div>
        <a className="arrow-2" href="#services"> <img src="arrow icon.png" alt="arrow_icon" className="arrow_icon"/></a>
      </div>
    </section>
  );
}


export default Page3
