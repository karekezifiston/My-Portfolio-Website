import React from "react";
import './Page4.css';

const Page3 = () => {
return(
    <section className="page_3" id="services">
        <div className="title">
        <h1 className="about_me">  Services</h1>
        <p className="get_to_know">Explore More </p>
      </div>
      <div className="three-container">
          <div className="web-design">
            <img src="web-design.png"width={40}className="img-serv" alt="" />
            <h2 className="text-border">Web Design</h2>
            <p className="text-p">One of My services is about creating websites that look great and are easy to use. We can make your site unique, work on any device, and help attract more visitors.</p>

          </div>
          <div className="web-design">
            <img src="development.png"width={40}className="img-serv" alt="" />
            <h2 className="text-border">Web App Devt</h2>
            <p className="text-p"> Also we create efficient, responsive apps that provide smooth user experiences, enhance functionality, and meet your specific business goals.</p>

          </div>
          <div className="web-design">
            <img src="app-design.png"width={40}className="img-serv" alt="" />
            <h2 className="text-border">Mobile App</h2>
            <p className="text-p">I'm currently learning how to design and build apps for iOS and Android.  excited to start creating soon!.</p>

          </div>
      </div>
      {/* <a className="arrow-2" href="#contact"> <img src="arrow icon.png" alt="arrow_icon" className="arrow_icon arrow_icon4"/></a> */}
    </section>
)
}

export default Page3
