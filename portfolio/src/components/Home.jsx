import React from 'react';
import './Home.css'; 

const Home = () => {
    return (
        <section id="home" className="home-section">
        <div className="intro">
            <h1 className="intro-title">Hi, I'm Grant Hopkins</h1>
            <p className="intro-text">
            I'm a <span className="profession">software engineer and Business Intelligence specialist</span> passionate about create value add software.
            </p>
            <p className="intro-text">
            Welcome to my personal website where you can find more about me and my work. Let's connect!
            </p>
            <a href="#contact" className="contact-link">Get in Touch</a>
        </div>
        </section>
    )
}

export default Home;