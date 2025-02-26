import React from "react";
import '../styles/Home.css';
import personImage from '../Assets/person.jpg';

function Home() {
    return (
        <section id="home" className="home">
           <h1>HELLO</h1> 
           <img src="{personImage}" alt="OIU" className="person-image" />
           <p>Scroll down</p>
         </section>
    ); 
}

export default Home;