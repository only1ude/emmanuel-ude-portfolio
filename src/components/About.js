import React from "react";
import './styles/About.css';


function About() {
    return (
        <section id="about" className="about">
         <h2>about</h2>
         <div className="about-content">
            <img src="/assets/profile.jpg" alt="OIU" className="profile-image" />
            <div className="about-text">
                <h3>I'm Emmanuel Ude</h3>
                <p>Web Developer</p>
                <p>As a passionate web Developer, I thrive on creating appealing and user-friendly websites. My journey began with a fascination for how design can enhance user experience</p>          
            </div>
         </div>
        </section>
    );
}

export default About;