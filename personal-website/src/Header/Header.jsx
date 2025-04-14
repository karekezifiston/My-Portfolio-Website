import React,{useState} from "react";
import './Header.css';
import fiston from '../assets/fiston.png'

const Header = () => {
  const [menu,setMenu] =useState("home");
  const [isOpen, setIsOpen] = useState(false);

  const toggleMobileMenu = () => {
    const menu_btn = document.querySelector('.hamburger');
    const mobile_panel = document.querySelector('.Mobile_panel');

    menu_btn.classList.toggle('is-active');
    mobile_panel.classList.toggle('is-active');

  };
  const handleLinkClick = () => {
    toggleMobileMenu(false);
  };
  return (
    <section className="h-wrapper" id="home">
    <div className='Mobile_panel'>
        <ul className='menu-items'>
           <li className='menu-option'>
           <a href="#home"onClick={(handleLinkClick)} className="w">Home</a><hr className="hrr"/> 
            </li>

            <li className='menu-option'>
            <a href="#about"onClick={handleLinkClick} className="a">About</a><hr className="hrr"/>
              </li>

            <li className='menu-option'>
            <a href="#projects"onClick={handleLinkClick} className="a">Projects</a><hr className="hrr"/>
              </li>

            <li className='menu-option'>
            <a href="#services"onClick={handleLinkClick} className="a">Services</a><hr className="hrr"/>
            </li>
            <button className='button-c'>
                <a href="#contact"onClick={handleLinkClick} className="">Contact</a>
                </button>
  
        </ul>
        </div>
        <div className="h-container">
         
        <a href="#home"><h3 className="nav_logo"><img src={fiston}width={130} alt="" /></h3></a>
  
          
        <div className="menu">
        <div className="hamburger_container">
              <button className="hamburger" onClick={toggleMobileMenu}>
                  <div className="bar"></div>
              </button>
          </div>
          <ul className='nav-item'>
            <li><a href="#home"onClick={(handleLinkClick)} className="w">Home</a><hr className="hrr"/></li>
            <li><a href="#about"onClick={handleLinkClick} className="a">About</a><hr className="hrr"/></li>
            <li><a href="#projects"onClick={handleLinkClick} className="a">Projects</a><hr className="hrr"/></li>
            <li><a href="#services"onClick={handleLinkClick} className="a">Services</a><hr className="hrr"/></li>
            <button className='button-c'>
                <a href="#contact"onClick={handleLinkClick} className="">Contact</a>
                </button>
  
          </ul>
        </div>
        </div>
        
    </section>
  )
}

export default Header
