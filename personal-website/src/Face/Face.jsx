import React from "react";
import './Face.css';


const Face = () => {
  return (
     <section className="body_element">
      
       <div className="body_text h2">
        <h4 className="hello">Hello, I'am</h4>
        <h4 className="fiston">Fiston Karekezi</h4>
        <h3 className="full">Full stack Developer</h3>

        <div className="button">
       <button className="button_calor1">Download CV</button>
       {/* <button className="button_calor2 " >Contact Info</button> */}
    </div>
    <div className="socials_container">
     
      <a href="https://www.linkedin.com/in/fiston-karekezi-50299726b/"><i className="fab fa-linkedin mob_github_ico" ></i></a>
      
      <a href="https://github.com/karekezifiston"><i className="fab fa-github mob_github_ico" ></i></a>
      <a href="https://www.instagram.com"><i className="ico_1 fab fa-instagram"></i></a>
      
    </div>
</div>
<div className="brd">
<div  className="img">
           <img src="fis.PNG" alt="" />
</div>
        </div>
        <div className="body_text h1">
        <h4 className="hello">Hello, I'am</h4>
        <h4 className="fiston">Fiston Karekezi</h4>
        <h3 className="full">Full stack Developer</h3>

        <div className="button">
       <button className="button_calor1">Download CV</button>
       {/* <button className="button_calor2 " >Contact Info</button> */}
    </div>
    <div className="socials_container">
     
      <a href="https://www.linkedin.com/in/fiston-karekezi-50299726b/"><i className="fab fa-linkedin mob_github_ico" ></i></a>
      
      <a href="https://github.com/karekezifiston"><i className="fab fa-github mob_github_ico" ></i></a>
      <a href="https://www.instagram.com"><i className="ico_1 fab fa-instagram"></i></a>
      
    </div>
</div>
   
     </section>
  )
}

export default Face
