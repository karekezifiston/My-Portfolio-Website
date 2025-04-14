import React, { useState } from "react";
import './Face.css';

const Face = () => {
  const [imageLoaded, setImageLoaded] = useState(false);

  const handleImageLoad = () => {
    setImageLoaded(true);
  };

  return (
    <section className="face">
      <div className="body_element">
        <div className="body_text h2">
          <h4 className="hello">Hello, I'm</h4>
          <h4 className="fiston">Fiston Karekezi</h4>
          <h3 className="full">Full stack Developer</h3>
          <div className="button">
            <button
              className="button_calor1"
              onClick={() => window.open('/Fiston_Resume.pdf', '_blank')}
            >
              View Resume
            </button>
          </div>
        </div>

        <div className="brd">
          <div className="img">
            {!imageLoaded && <div className="image-loader-placeholder"></div>}
            <img
              src="test.jpg"
              alt="Fiston Karekezi"
              className={`profile-img ${!imageLoaded ? "blurred" : ""}`}
              onLoad={handleImageLoad}
              style={{ display: imageLoaded ? 'block' : 'none' }}
            />
          </div>
        </div>

        <div className="body_text h1">
          <h4 className="hello">Hello, I'am</h4>
          <h4 className="fiston">Fiston Karekezi</h4>
          <h3 className="full">Full stack Developer</h3>
          <div className="button">
            <button
              className="button_calor2"
              onClick={() => window.open('/Fiston_Resume.pdf', '_blank')}
            >
              View Resume
            </button>
          </div>
          <div className="socials_container">
            <a href="https://www.linkedin.com/in/fiston-karekezi-50299726b/">
              <i className="fab fa-linkedin mob_github_ico"></i>
            </a>
            <a href="https://github.com/karekezifiston">
              <i className="fab fa-github mob_github_ico"></i>
            </a>
            <a href="https://www.instagram.com">
              <i className="ico_1 fab fa-instagram"></i>
            </a>
          </div>
        </div>
      </div>

      <div className="down">
        <div className="socials_container">
          <p className="follow">Follow me</p>
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
        <p>.</p>
      </div>
    </section>
  );
};

export default Face;
