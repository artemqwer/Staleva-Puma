import React from 'react';

const Header = () => {
    let logoSrc = null;
    try {
        logoSrc = new URL('../assets/images/logo.png', import.meta.url).href;
    } catch (e) { }

    return (
        <header className="header">
            <div className="container header-inner">
                <a href="#home" className="header-logo">
                    <img
                        src={logoSrc || ''}
                        alt="Сталева Пума"
                        onError={(e) => {
                            e.target.style.display = 'none';
                            e.target.nextElementSibling.style.display = 'flex';
                        }}
                    />
                    <div className="logo-placeholder" style={{ display: logoSrc ? 'none' : 'flex' }}>
                        LOGO
                    </div>
                </a>

                <nav className="header-nav">
                    <ul>
                        <li><a href="#home" className="active">ГОЛОВНА</a></li>
                        <li><a href="#about">ГАЛЕРЕЯ</a></li>
                        <li><a href="#prices">ЦІНИ</a></li>
                        <li><a href="#schedule">РОЗКЛАД</a></li>
                        <li><a href="#news">НОВИНИ</a></li>
                        <li><a href="#team">КОМАНДА</a></li>
                        <li><a href="#contact">ПРАВИЛА</a></li>
                    </ul>
                </nav>

                <div className="header-btn">
                    <a href="#contact" className="btn btn-cyan">ЗАПИСАТИСЬ</a>
                </div>
            </div>
        </header>
    );
};

export default Header;
