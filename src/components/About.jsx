// src/components/About.js
import React from 'react';
import './About.css'; // Assuming you'll add custom styles here

const About = () => {
  return (
    <section id="about" className="about-section">
      <div className="container">
        <h2 className="about-title titillium-web-bold">About Me</h2>
        <div className="container two-column-div">
          <div className="container column">
            <p className="about-text titillium-web-extralight">
              Hello! I'm Grant Hopkins, a passionate Software Developer with a love for Business Intelligence and Automation.
              With 3 years of experience in BI & Analytics, I've had the privilege of working on a variety of exciting projects,
              from NLP, Computer Vision, Gen AI, and Web Development.
            </p>
            <p className="about-text titillium-web-extralight">
              My journey began in when I was 13, and over the years, I've honed my skills in Python Automation, Web Development, and Data Analytics/Science.
              I'm particularly enthusiastic about making products that are unique and innovative, and I continuously strive to expand my knowledge and expertise.
            </p>
            <p className="about-text titillium-web-extralight">
              When I'm not working, you can find me working on my peronsal game development projects, and camping. I believe in balancing work with personal growth, and I'm always on the lookout for new challenges.
            </p>
          </div>
          <div className="container column img-container">
            <img className="thumb-img" src="..\src\assets\azure-thumb.png"></img>
            <img className="thumb-img" src="..\src\assets\c++-thumb.png"></img>
            <img className="thumb-img" src="..\src\assets\css-thumb.png"></img>
            <img className="thumb-img" src="..\src\assets\git-thumb.png"></img>
            <img className="thumb-img" src="..\src\assets\html-thumb.png"></img>
            <img className="thumb-img" src="..\src\assets\javascript-thumb.png"></img>
            <img className="thumb-img" src="..\src\assets\node-thumb.png"></img>
            <img className="thumb-img" src="..\src\assets\powerbi-thumb.png"></img>
            <img className="thumb-img" src="..\src\assets\python-thumb.png"></img>
            <img className="thumb-img" src="..\src\assets\react-thumb.png"></img>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;