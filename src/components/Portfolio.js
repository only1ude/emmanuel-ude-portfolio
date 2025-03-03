import React from "react";
import '  /styles/Portfolio.css';
import portfolio1 from '../Assets/portfolio1.jpg';
import portfolio2 from '../Assets/portfolio2.jpg';
import portfolio3 from '../Assets/portfolio3.jpg';
import portfolio4 from '../Assets/portfolio4.jpg';
import portfolio5 from '../Assets/portfolio5.jpg';
import portfolio6 from '../Assets/portfolio6.jpg';

function portfolio() {
    return (
        <section id="portfolio" className="portfolio">
            <h2>Portfolio</h2>
            <div className="portfolio-grid">
                <img src="{portfolio1}" alt="project1" />
                <img src="{portfolio2}" alt="project2" />
                <img src="{portfolio3}" alt="project3" />
                <img src="{portfolio4}" alt="project4" />
                <img src="{portfolio5}" alt="project5" />
                <img src="{portfolio6}" alt="project6" />
            </div>
        </section>
    );
}

export default portfolio;