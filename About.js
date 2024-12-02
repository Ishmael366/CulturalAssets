// src/About.js
import React from 'react';

function About() {
    return (
        <div className="about-page">
            <h2>About the Cultural Asset Tracker</h2>
            <p>
                Welcome to the Cultural Asset Tracker, an application designed to track and visualize the status
                and locations of cultural assets, such as art and artifacts. The app uses data from prominent cultural
                institutions such as the Getty, the Metropolitan Museum of Art (Met), and the Art Institute of Chicago
                (AIC) to provide detailed information about the assets.
            </p>
            <p>
                <strong>About the Developer:</strong> This project was created by Daniel Nguyen, a student working on a
                cultural preservation initiative.
            </p>
            <p>
                <strong>Collaborating Institutions:</strong>
                <ul>
                    <li>Getty Research Institute</li>
                    <li>Metropolitan Museum of Art (Met)</li>
                    <li>Art Institute of Chicago (AIC)</li>
                </ul>
            </p>
        </div>
    );
}

export default About;
