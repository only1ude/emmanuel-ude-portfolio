import React from "react";
import '../styles/Home.css';
import personImage from "../assets/person.jpg"; //correct the path to the image

function Home() {
    return (
        <section id="home" className="home">
           <h1>HELLO</h1> 
           <img src="person.jpg" alt="OIU" className="person-image" />
           <p>Scroll down</p>
         </section>
    ); 
}

export default Home;