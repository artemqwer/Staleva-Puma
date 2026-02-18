import React, { useState } from 'react';

// ==========================================
// 📁 ІНСТРУКЦІЯ: Якщо хочеш статичну карту:
//    src/assets/images/map.jpg
// Або залиш Google Maps iframe (вже вбудований)
// ==========================================

const Contact = () => {
    const [name, setName] = useState('');
    const [phone, setPhone] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        alert(`Дякуємо, ${name}! Ми зателефонуємо вам за номером ${phone}.`);
        setName('');
        setPhone('');
    };

    let logoSrc = null;
    try {
        logoSrc = new URL('../assets/images/logo.png', import.meta.url).href;
    } catch (e) { }

    return (
        <>
            <section className="contact" id="contact">
                <div className="container">
                    <div className="contact-header">
                        <div className="contact-line"></div>
                        <div className="contact-header-text">
                            <div className="contact-label">НАШІ</div>
                            <h2 className="contact-title">КОНТАКТИ</h2>
                        </div>
                    </div>

                    <div className="contact-inner">
                        {/* ФОРМА */}
                        <div className="contact-form">
                            <h3>ЗАПИСУЙСЯ І СТАВАЙ КРАЩИМ!</h3>
                            <form onSubmit={handleSubmit}>
                                <input
                                    className="form-input"
                                    type="text"
                                    placeholder="ІМ'Я"
                                    value={name}
                                    onChange={(e) => setName(e.target.value)}
                                    required
                                />
                                <input
                                    className="form-input"
                                    type="tel"
                                    placeholder="ТЕЛЕФОН"
                                    value={phone}
                                    onChange={(e) => setPhone(e.target.value)}
                                    required
                                />
                                <button type="submit" className="btn btn-cyan">ЗАПИСАТИСЬ</button>
                            </form>
                        </div>

                        {/* КАРТА */}
                        <div className="contact-map">
                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2540.4!2d30.4!3d50.46!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNTDCsDI3JzM2LjAiTiAzMMKwMjQnMDAuMCJF!5e0!3m2!1suk!2sua!4v1700000000000!5m2!1suk!2sua"
                                allowFullScreen=""
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                                title="Location"
                            ></iframe>
                        </div>
                    </div>
                </div>
            </section>

            {/* FOOTER */}
            <footer className="footer">
                <div className="container">
                    <div className="footer-row">
                        <span className="footer-phone">+38 063-63-64-320</span>

                        <a href="#" aria-label="Instagram" className="social-link">
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                                <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
                            </svg>
                        </a>

                        <div className="footer-logo">
                            {logoSrc ? (
                                <img src={logoSrc} alt="Logo" onError={(e) => {
                                    e.target.style.display = 'none';
                                    e.target.nextElementSibling.style.display = 'flex';
                                }} />
                            ) : null}
                            <div className="footer-logo-placeholder" style={{ display: logoSrc ? 'none' : 'flex' }}>
                                LOGO
                            </div>
                        </div>

                        <a href="#" aria-label="Facebook" className="social-link">
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
                            </svg>
                        </a>

                        <div className="footer-address">
                            <div>м. Київ, Пр-т</div>
                            <div>Берестейський, 131-А</div>
                        </div>
                    </div>

                    <div className="footer-bottom">
                        © 2026 Copyright by Steel Puma | Privacy Policy
                    </div>
                </div>
            </footer>
        </>
    );
};

export default Contact;
