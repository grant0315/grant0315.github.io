// src/components/About.js
import React from 'react';
import './About.css'; // Assuming you'll add custom styles here

const About = () => {
  return (
    <section id="about" className="about-section">
      <div className="container">
        <h2 className="about-title">About Me</h2>
        <p className="about-text">
          Hello! I'm [Your Name], a passionate [Your Profession] with a love for [Your Interests or Specializations].
          With [X years] of experience in [Your Field/Industry], I've had the privilege of working on a variety of exciting projects,
          from [mention a couple of notable projects or skills].
        </p>
        <p className="about-text">
          My journey began in [mention your background or education], and over the years, I've honed my skills in [mention specific skills or technologies].
          I'm particularly enthusiastic about [mention your passion or what drives you in your profession], and I continuously strive to expand my knowledge and expertise.
        </p>
        <p className="about-text">
          When I'm not working, you can find me [mention hobbies or interests]. I believe in balancing work with personal growth, and I'm always on the lookout for new challenges.
        </p>
      </div>
    </section>
  );
};

export default About;