import React from 'react'
import './Face.css'

const Face = () => {
  return (
    <div className='face'>
      <div className='div1'>
        <h1>A Software Engineer</h1>
        <p>I'm Fiston KAREKEZI,  a software engineer Driven by purpose, powered by codes. building the future, one line at a time. Creating solutions that matter and bringing ideas to life with every project.</p>
      </div>
      <div className='last-d'>
        <button
        onClick={() => window.open('/Cv_Fiston.pdf', '_blank')}
        >Resume</button>
               <div className="socials_container">
  
          <a href="https://www.linkedin.com/in/fiston-karekezi-50299726b/">
            <i className="fab fa-linkedin mob_github_ico"></i>
          </a>
          <a href="https://github.com/karekezifiston">
            <i className="fab fa-github mob_github_ico"></i>
          </a>
          <a href="https://www.instagram.com/fiston.inthecut/">
            <i className="ico_1 fab fa-instagram"></i>
          </a>
        </div>
        
      </div>
    </div>
  )
}

export default Face