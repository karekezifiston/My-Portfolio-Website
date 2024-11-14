import React from "react";
import './Page4.css';

const Page3 = () => {
return(
    <section className="page_3" id="services">
        <div className="title_2">
        <h1 className="about_me"> Our Services</h1>
        <p className="get_to_know_1">Explore More </p>
      </div>
      <div className="three-container">
          <div className="web-design">
            <img src="web-design.png"width={40}className="img-serv" alt="" />
            <h2 className="text-border">Web Design</h2>
            <p className="text-p">Lorem ipsum dolor sit amet consectetur  adipisicing elit. Suscipit eos cum nisi  labore distinctio, rem quisquam natus  obcaecati iusto eligendi, architecto  pariatur earum placeat non. Dolores  id voluptatem ad at.</p>

          </div>
          <div className="web-design">
            <img src="development.png"width={40}className="img-serv" alt="" />
            <h2 className="text-border">Development</h2>
            <p className="text-p">Lorem ipsum dolor sit amet consectetur  adipisicing elit. Suscipit eos cum nisi  labore distinctio, rem quisquam natus  obcaecati iusto eligendi, architecto  pariatur earum placeat non. Dolores  id voluptatem ad at.</p>

          </div>
          <div className="web-design">
            <img src="app-design.png"width={40}className="img-serv" alt="" />
            <h2 className="text-border">App Design</h2>
            <p className="text-p">Lorem ipsum dolor sit amet consectetur  adipisicing elit. Suscipit eos cum nisi  labore distinctio, rem quisquam natus  obcaecati iusto eligendi, architecto  pariatur earum placeat non. Dolores  id voluptatem ad at.</p>

          </div>
      </div>
      {/* <a className="arrow-2" href="#contact"> <img src="arrow icon.png" alt="arrow_icon" className="arrow_icon arrow_icon4"/></a> */}
    </section>
)
}

export default Page3
