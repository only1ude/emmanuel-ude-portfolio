import React from "react";
import './styles/Footer.css';

function Footer() {
    return (
        <footer className="footer">
            <div className="footer-content">
                <div className="footer-left">
                    <p>OIU</p>
                    <ul className="footer-links">
                        <li><a href="#home">Home</a></li>
                        <li><a href="#about">About</a></li>
                        <li><a href="#skills">Skills</a></li>
                        <li><a href="#portfolio">Portfolio</a></li>
                        <li><a href="#contact">Contact</a></li>
                    </ul>
                    <div className="social-icons">
                        <img src="social media link here" alt="social meida icon" />
                        <img src="social media link here" alt="social meida icon" />
                        <img src="social media link here" alt="social meida icon" />
                        <img src="social media link here" alt="social meida icon" />
                        <span>© 2021 OIU</span> 
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;