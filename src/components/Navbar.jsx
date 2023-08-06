import logo from "./images/logo.png"
import { useEffect } from "react"
import {NavHashLink} from "react-router-hash-link"

const Navbar = () => {
    const handleScroll = () => {
        // Get the current scroll position
        const scrollY = window.scrollY;
    
        const scrollProgress = Math.min(scrollY / 1400, 1);

        // Calculate the alpha (opacity) value based on the scroll progress
        const alpha = scrollProgress * 0.5;
    
        // Calculate the background color with the updated alpha value
        const bgColor = `rgba(0, 0 , 0, ${alpha})`;
    
        // Update the background color of the navigation bar
        const navbar = document.querySelector('nav');
        if (navbar) {
          navbar.style.backgroundColor = bgColor;
        }
      };
    
      useEffect(() => {
        // Add the event listener for scrolling
        window.addEventListener('scroll', handleScroll);
    
        // Clean up the event listener when the component unmounts
        return () => {
          window.removeEventListener('scroll', handleScroll);
        };
      }, []);
  return (
    <nav id="navigation" >
        <div className="logo">
            <img src={logo} className="logo"/>
            <h4>TradeWithMars</h4>
        </div>
        <div>
            <ul className="navbar">
              <li><NavHashLink to="#header" smooth className="link">Home</NavHashLink></li> 
              <li><NavHashLink to="#about" smooth className="link">About</NavHashLink></li> 
              <li><NavHashLink to="#choose" smooth className="link">Why Choose Us?</NavHashLink></li> 
              <li><NavHashLink to="#offer" smooth className="link">What We Offer</NavHashLink></li> 
              <li><NavHashLink to="#courses" smooth className="link">Courses</NavHashLink></li> 
              <li><NavHashLink to="#faqs" smooth className="link">FAQs</NavHashLink></li> 
              <li><NavHashLink to="#contact" smooth className="link">Contact Us</NavHashLink></li> 
            </ul>
        </div>
    </nav>
  )
}

export default Navbar