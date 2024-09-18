import React, { useEffect } from 'react';
import './Home.css'; 
import anime from 'animejs/lib/anime.es.js';

const Home = () => {

    useEffect(() => {
        // Animation for button
        const button = document.querySelector('.button-modern');
        button.addEventListener('mouseenter', () => {
            anime({
                targets: '.button-modern',
                scale: [1, 1.2],
                duration: 300,
                easing: 'easeOutInElastic(1, .8)',
            });
        });

        button.addEventListener('mouseleave', () => {
            anime({
                targets: '.button-modern',
                scale: [1.2, 1],
                duration: 500,
                easing: 'easeOutQuad',
            });
        });

        // Span Animation
        anime({
            targets: '.intro-title span',
            opacity: [0, 1],
            translateY: [-20, 0],
            delay: 500,
            duration: 5000,
            easing: 'easeOutQuad'
        });
    }, []);

    return (
        <section id="home" className="home-section">
        <div className="intro">
            <h1 className="intro-title titillium-web-semibold">Hi, I'm <span className="hero-name">Grant.</span></h1>
            <h1 className="intro-subtitle titillium-web-semibold">Software Developer</h1>
            <button className="button-modern titillium-web-regular" href="#About">More About Me</button>
        </div>
        </section>
    )
}

export default Home;