import React from 'react';

const services = [
    {
        title: 'СИЛОВІ ТРЕНУВАННЯ',
        desc: 'ОСНОВА БУДЬ-ЯКОГО ЗАЛУ. ТІЛЬКИ В НАС ВОНА КРАЩА!',
        icon: (
            <svg viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect x="8" y="30" width="12" height="20" rx="2" stroke="#33C5F4" strokeWidth="2.5" />
                <rect x="60" y="30" width="12" height="20" rx="2" stroke="#33C5F4" strokeWidth="2.5" />
                <rect x="20" y="25" width="8" height="30" rx="2" stroke="#33C5F4" strokeWidth="2.5" />
                <rect x="52" y="25" width="8" height="30" rx="2" stroke="#33C5F4" strokeWidth="2.5" />
                <line x1="28" y1="40" x2="52" y2="40" stroke="#33C5F4" strokeWidth="3" />
                <line x1="4" y1="40" x2="8" y2="40" stroke="#33C5F4" strokeWidth="2.5" />
                <line x1="72" y1="40" x2="76" y2="40" stroke="#33C5F4" strokeWidth="2.5" />
            </svg>
        ),
    },
    {
        title: 'КАРДІО ЗОНА',
        desc: 'ТОПОВІ БІГОВІ ДОРІЖКИ, ОРБІТРЕК ТА ІНШІ ТРЕНАЖЕРИ...',
        icon: (
            <svg viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect x="15" y="55" width="50" height="4" rx="2" stroke="#33C5F4" strokeWidth="2.5" />
                <rect x="18" y="48" width="44" height="7" rx="1" stroke="#33C5F4" strokeWidth="2" />
                <line x1="20" y1="48" x2="18" y2="35" stroke="#33C5F4" strokeWidth="2.5" />
                <line x1="60" y1="48" x2="55" y2="25" stroke="#33C5F4" strokeWidth="2.5" />
                <circle cx="55" cy="22" r="3" stroke="#33C5F4" strokeWidth="2" />
                <line x1="15" y1="59" x2="15" y2="68" stroke="#33C5F4" strokeWidth="2.5" />
                <line x1="65" y1="59" x2="65" y2="68" stroke="#33C5F4" strokeWidth="2.5" />
                <line x1="25" y1="48" x2="30" y2="35" stroke="#33C5F4" strokeWidth="1.5" strokeDasharray="3 2" />
            </svg>
        ),
    },
    {
        title: 'ГРУПОВІ ЗАНЯТТЯ',
        desc: 'ДОЛУЧАЙСЯ ДО ГРУПОВИХ ЗАНЯТЬ!',
        icon: (
            <svg viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="40" cy="22" r="8" stroke="#33C5F4" strokeWidth="2.5" />
                <path d="M25 55C25 44 31 38 40 38C49 38 55 44 55 55" stroke="#33C5F4" strokeWidth="2.5" />
                <circle cx="20" cy="30" r="6" stroke="#33C5F4" strokeWidth="2" />
                <path d="M8 55C8 47 13 42 20 42" stroke="#33C5F4" strokeWidth="2" />
                <circle cx="60" cy="30" r="6" stroke="#33C5F4" strokeWidth="2" />
                <path d="M72 55C72 47 67 42 60 42" stroke="#33C5F4" strokeWidth="2" />
            </svg>
        ),
    },
    {
        title: 'ПЕРСОНАЛЬНІ ТРЕНУВАННЯ',
        desc: 'ДОСВІДЧЕНА КОМАНДА ТРЕНЕРІВ ГОТОВА ПОКАЗАТИ, НА ЩО ВИ ЗДАТНІ...',
        icon: (
            <svg viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="35" cy="20" r="8" stroke="#33C5F4" strokeWidth="2.5" />
                <path d="M20 55C20 44 26 38 35 38C44 38 50 44 50 55" stroke="#33C5F4" strokeWidth="2.5" />
                <rect x="55" y="15" width="3" height="35" rx="1.5" stroke="#33C5F4" strokeWidth="2" />
                <rect x="48" y="25" width="17" height="3" rx="1.5" stroke="#33C5F4" strokeWidth="2" />
                <path d="M58 58L62 62L70 50" stroke="#33C5F4" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
        ),
    },
];

const Services = () => {
    return (
        <section className="services" id="services">
            <div className="container">
                <div className="services-header">
                    <div className="services-label">ПОСЛУГИ</div>
                    <h2 className="services-title">У НАС ВИ ЗНАЙДЕТЕ</h2>
                </div>

                <div className="services-grid">
                    {services.map((service, index) => (
                        <div className="service-card" key={index}>
                            <div className="service-icon">
                                {service.icon}
                            </div>
                            <h3>{service.title}</h3>
                            <p>{service.desc}</p>
                        </div>
                    ))}
                </div>

                <div className="services-btn">
                    <a href="#prices" className="btn btn-outline-cyan">ПОДИВИТИСЯ ЦІНУ</a>
                </div>
            </div>
        </section>
    );
};

export default Services;
