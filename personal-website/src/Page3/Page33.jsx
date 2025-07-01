import React, { useState } from "react";
import './Page3.css';
import kigali_puppies from '../assets/kigali_puppies.png';
import ecommerce from '../assets/ecommerce3.png';
import link from '../assets/link1.png';
import food from '../assets/food-ecommerce.png';
import gospel from '../assets/gospel.png';
import report from '../assets/report2.png';
import movie from '../assets/movies.png';

function Page3() {
  const [imageLoaded, setImageLoaded] = useState({
    kigali_puppies: false,
    ecommerce: false,
    food: false,
    gospel: false,
  });

  const handleImageLoad = (image) => {
    setImageLoaded((prev) => ({ ...prev, [image]: true }));
  };

  return (
    <section className="page_4" id="projects">
      <div className="title">
        <h1 className="about_me">Projects</h1>
        <p className="get_to_know">Explore</p>
      </div>
      <div className="divs">
        <div className="div-1">
          <img
            src={kigali_puppies}
            className={`project-img ${!imageLoaded.kigali_puppies ? "blurred" : ""}`}
            alt="Kigali Puppies"
            onLoad={() => handleImageLoad("kigali_puppies")}
          />
          <div className="all-inform">
            <div className="name-link">
              <h4>Kigali Puppies</h4>
              <a href='https://kigalipuppies.com' className="tooltip-container" target="_blank" rel="noopener noreferrer">
                <img src={link} width={20} alt="Link" className="img-link" />
                <span className="tooltip-text">Link</span>
              </a>
            </div>
            <p className="pr">An online store dedicated to helping you find adorable and loving puppies, perfect for bringing joy to your life.</p>
          </div>
        </div>


        <div className="div-1">
          
          <img
            src={report}
            className={`project-img ${!imageLoaded.report ? "blurred" : ""}`}
            alt="Kigali Puppies"
            onLoad={() => handleImageLoad("report")}
          />
          <div className="all-inform">
            <div className="name-link">
              <h4>Ijisho(Reporting crimes)</h4>
              <a href='https://ijisho-frontend.onrender.com' className="tooltip-container" target="_blank" rel="noopener noreferrer">
                <img src={link} width={20} alt="Link" className="img-link" />
                <span className="tooltip-text">Link</span>
              </a>
            </div>
            <p className="pr">An online platform where You can easily report crimes, and the police can track and manage all reported cases across the country.</p>
          </div>
        </div>

        <div className="div-2">
          <img
            src={food}
            className={`project-img ${!imageLoaded.food ? "blurred" : ""}`}
            alt="Food Delivery"
            onLoad={() => handleImageLoad("food")}
          />
          <div className="all-inform">
            <div className="name-link">
              <h4>Food Delivery</h4>
              <a href='https://food-eco-frontend.onrender.com' target="_blank" rel="noopener noreferrer" className="tooltip-container">
                <img src={link} width={20} alt="Link" className="img-link" />
                <span className="tooltip-text">Link</span>
              </a>
            </div>
            <p className="pr">A full-stack food delivery website that offers users an easy way to explore menus, place orders, and make secure payments.</p>
          </div>
        </div>

        <div className="div-3">
          <img
            src={ecommerce}
            className={`project-img ${!imageLoaded.ecommerce ? "blurred" : ""}`}
            alt="E-Commerce"
            onLoad={() => handleImageLoad("ecommerce")}
          />
          <div className="all-inform1">
            <div className="name-link">
              <h4>E-Commerce</h4>
              <a href='https://e-commerce-web-r41q.onrender.com' target="_blank" rel="noopener noreferrer" className="tooltip-container">
                <img src={link} width={20} alt="Link" className="img-link" />
                <span className="tooltip-text">Link</span>
              </a>
            </div>
            <p className="pr">An online clothing store designed to make shopping easy whenever you're in Kigali, providing a convenient way to buy clothes.</p>
          </div>
        </div>

            <div className="div-3">
          <img
            src={movie}
            className={`project-img ${!imageLoaded.movie ? "blurred" : ""}`}
            alt="The Gospel Hub"
            onLoad={() => handleImageLoad("movie")}
          />
          <div className="all-inform1">
            <div className="name-link">
              <h4>🍿 Movie Booking <span className="stamp-title">Still in progress</span></h4>
              <a href='https://movie-booking-7ivt.onrender.com' className="tooltip-container" target="_blank" rel="noopener noreferrer">
                <img src={link} width={20} alt="Link" className="img-link" />
                <span className="tooltip-text">Link</span>
              </a>
            </div>
            <p className="pr">A movie booking website where you can book your favorite movies, select seats, and catch the latest hit films in theaters near you.</p>
          </div>
        </div> 

        <div className="div-3">
          <img
            src={gospel}
            className={`project-img ${!imageLoaded.gospel ? "blurred" : ""}`}
            alt="The Gospel Hub"
            onLoad={() => handleImageLoad("gospel")}
          />
          <div className="all-inform1">
            <div className="name-link">
              <h4>The Gospel Hub</h4>
              <a href='https://gospel-web.onrender.com/' className="tooltip-container" target="_blank" rel="noopener noreferrer">
                <img src={link} width={20} alt="Link" className="img-link" />
                <span className="tooltip-text">Link</span>
              </a>
            </div>
            <p className="pr">Discover Gospel News, a website sharing gospel sermons, inspirational videos, Bible studies, podcasts, and insightful Q&A.</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Page3;
