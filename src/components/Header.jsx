import React from 'react';

// ==========================================
// 📁 ІНСТРУКЦІЯ: Додай своє лого сюди:
//    src/assets/images/logo.png
// ==========================================

const Header = () => {
    // Спробуємо завантажити лого
    let logoSrc = null;
    try {
        logoSrc = new URL('../assets/images/logo.png', import.meta.url).href;
    } catch (e) {
        logoSrc = null;
    }

    return (
        <header className="header">
            <div className="container header-inner">
                {/* ЛОГО */}
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

                {/* НАВІГАЦІЯ */}
                <nav className="header-nav">
                    <ul>
                        <li><a href="#home">ГОЛОВНА</a></li>
                        <li><a href="#gallery">ГАЛЕРЕЯ</a></li>
                        <li><a href="#prices">ЦІНИ</a></li>
                        <li><a href="#schedule">РОЗКЛАД</a></li>
                        <li><a href="#news">НОВИНИ</a></li>
                        <li><a href="#team">КОМАНДА ТА ПАРТНЕРИ</a></li>
                        <li><a href="#rules">ПРАВИЛА</a></li>
                    </ul>
                </nav>

                {/* КНОПКА */}
                <div className="header-btn">
                    <a href="#contact" className="btn btn-cyan">ЗАПИСАТИСЬ</a>
                </div>
            </div>
        </header>
    );
};

export default Header;
