import React from "react";
import './Page3.css';
import kigali_puppies from '../assets/kigali_puppies.png';
import ecommerce from '../assets/ecommerce1.png';
import real_estate from '../assets/real_estate.png';
import link from '../assets/link.png';
import food from '../assets/food-ecommerce.png';


function Page3() {
  
  return (
    <section className="page_4" id="projects">
      <div className="title">
      <h1 className="about_me">Projects</h1>
      <p className="get_to_know">Explore</p>
      </div>
      <div className="divs">
        <div className="div-1">
          <img src={kigali_puppies} className="project-img" alt="" />
          <div className="all-inform">
            <div className="name-link">
              <h4>Kigali Puppies</h4>
              <a href='' className="tooltip-container">
              <img src={link} width={20} alt=""className="img-link" />
              <span className="tooltip-text">Link</span>
              </a>
            </div>
            <p className="pr">An online store dedicated to helping you find  adorable and loving puppies, perfect for bringing joy to your life,
            </p>
          </div>
        </div>
        <div className="div-3">
          <img src={food} className="project-img2"  alt="" />
          <div className="all-inform">
            <div className="name-link">
            <h4>Food Delivery</h4>
              <a href='https://food-eco-frontend.onrender.com' className="tooltip-container">
              <img src={link} width={20} alt=""className="img-link" />
              <span className="tooltip-text">Link</span>
              </a>
            </div>
            {/* <div >
            </div> */}
            <p className="pr">A full-stack food delivery website that offers users an easy way to explore menus, place orders, and make secure payments, ensuring a fast."</p>
          </div>
        </div>
        <div className="div-3">
          <img src={ecommerce} className="project-img" alt="" />
          <div className="all-inform">
            <div className="name-link">
              <h4>E-Commerce</h4>
              <a href='https://e-commerce-web-r41q.onrender.com' className="tooltip-container">
              <img src={link} width={20} alt=""className="img-link" />
              <span className="tooltip-text">Link</span>
              </a>
              
            </div>
            <p className="pr">An online clothing store designed to make shopping easy whenever you're in Kigali, providing a convenient way to buy clothes.</p>
          </div>
        </div>
      </div>
    </section>
  );
}


export default Page3
