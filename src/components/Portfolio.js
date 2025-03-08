// Portfolio.js
import React from "react";
import '../styles/Portfolio.css'; // correct the path to the css file


function portfolio() {
    return (
        <section id="portfolio" className="portfolio">
            <h2>Portfolio</h2>
            <div className="portfolio-grid">
                <img src="/assets/portfolio1" alt="project1" />
                <img src="portfolio2" alt="project2" />
                <img src="/assets/portfolio3" alt="project3" />
                <img src="/assets/portfolio4" alt="project4" />
                <img src="/assets/portfolio5" alt="project5" />
                <img src="/assets/portfolio6" alt="project6" />
            </div>
        </section>
    );
}

export default portfolio;