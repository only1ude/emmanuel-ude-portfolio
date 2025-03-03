// Portfolio.js
import React from "react";
import '../styles/Portfolio.css'; // correct path from src/components/ to src/styles/
import portfolio1 from '../assets/portfolio1.jpg'; //correct the path to the image
import portfolio2 from '../assets/portfolio2.jpg'; //correct the path to the image
import portfolio3 from '../assets/portfolio3.jpg'; //correct the path to the image
import portfolio4 from '../assets/portfolio4.jpg'; //correct the path to the image
import portfolio5 from '../assets/portfolio5.jpg'; //correct the path to the image
import portfolio6 from '../assets/portfolio6.jpg'; //correct the path to the image

function portfolio() {
    return (
        <section id="portfolio" className="portfolio">
            <h2>Portfolio</h2>
            <div className="portfolio-grid">
                <img src="portfolio1" alt="project1" />
                <img src="portfolio2" alt="project2" />
                <img src="portfolio3" alt="project3" />
                <img src="portfolio4" alt="project4" />
                <img src="portfolio5" alt="project5" />
                <img src="portfolio6" alt="project6" />
            </div>
        </section>
    );
}

export default portfolio;