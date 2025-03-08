import React from "react";
import '../styles/Home.css';
import personImage from '..assets/assets/person.jpg'; // If person.jpg is in the parent directory 

function Home() {
    return (
        <section id="home" className="home">
           <h1>HELLO</h1> 
           <img src="/assets/person.jpg" alt="OIU" className="person-image" />
           <p>Scroll down</p>
         </section>
    ); 
}

export default Home;