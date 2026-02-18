import React from 'react';

const Hero = () => {
    let heroBgSrc = null;
    let heroPersonSrc = null;
    try {
        heroBgSrc = new URL('../assets/images/hero-bg.png', import.meta.url).href;
    } catch (e) { }
    try {
        heroPersonSrc = new URL('../assets/images/hero-person.png', import.meta.url).href;
    } catch (e) { }

    return (
        <section className="hero" id="home">
            <div className="hero-bg">
                {heroBgSrc ? (
                    <img
                        src={heroBgSrc}
                        alt=""
                        onError={(e) => {
                            e.target.style.display = 'none';
                            e.target.nextElementSibling.style.display = 'block';
                        }}
                    />
                ) : null}
                <div className="hero-bg-placeholder" style={{ display: heroBgSrc ? 'none' : 'block' }} />
            </div>

            <div className="hero-person">
                {heroPersonSrc ? (
                    <img
                        src={heroPersonSrc}
                        alt="Bodybuilder"
                        onError={(e) => {
                            e.target.style.display = 'none';
                            e.target.nextElementSibling.style.display = 'block';
                        }}
                    />
                ) : null}
                <div className="hero-person-placeholder" style={{ display: heroPersonSrc ? 'none' : 'block' }} />
            </div>

            <div className="hero-overlay"></div>

            <div className="container hero-content">
                <div className="hero-text">
                    <h1>СИЛА.<br />ФОКУС.<br />ХАРАКТЕР.</h1>
                    <p>
                        перетворіть своє тіло та розум у фітнес клубі "сталева
                        пума" - де усе готово до початку нового шляху
                    </p>
                    <div className="hero-buttons">
                        <a href="#contact" className="btn btn-cyan">ЗАПИСАТИСЬ</a>
                        <a href="#prices" className="btn btn-outline-white">ЦІНИ</a>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
