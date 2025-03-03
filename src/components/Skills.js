import React from "react";
import '../styles/Skills.css';
import notebookImage from '../assets/notebook.jpg';

function Skills() {
    return (
        <section id="skills" className="skills">
            <h2>Skills</h2>
            <div className="skills-content">
                <ul className="skills-list">
                <li>JavaScript</li>
                <li>React</li>
                <li>Node.js</li>
                <li>Express.js</li>
                <li>MongoDB</li>
                <li>UI/UX</li>
                </ul>
                <img src="{notebookImage}" alt="skills-graphic" className="skils-image" />
            </div>
        </section>
    );
}

export default Skills;