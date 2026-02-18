import React from 'react';

const About = () => {
    let about1Src = null;
    let about2Src = null;
    try {
        about1Src = new URL('../assets/images/about-1.png', import.meta.url).href;
    } catch (e) { }
    try {
        about2Src = new URL('../assets/images/about-2.png', import.meta.url).href;
    } catch (e) { }

    return (
        <section className="about" id="about">
            <div className="container about-inner">
                <div className="about-left">
                    <div className="about-label">ПРО КЛУБ</div>

                    <h2 className="about-title">
                        <span>МІСЦЕ ЗМІН</span>
                        <span className="title-line"></span>
                    </h2>

                    <div className="about-text">
                        <p>
                            Ласкаво просимо до «Сталева Пума» — нашого фітнес-клубу,
                            де сучасність зустрічається з професіоналізмом. У нас ви знайдете найновіше
                            обладнання, просторі тренувальні зали та комфортну атмосферу для
                            тренувань будь-якого рівня.
                        </p>
                        <p>
                            Наші професійні тренери допоможуть досягти ваших цілей, а групові
                            заняття зроблять тренування ще цікавішими та ефективнішими.
                        </p>
                        <p>
                            Натиснувши на кнопку «Розклад», ви зможете детально ознайомитись з
                            годинами, у які ми радо чекатимемо вас.
                        </p>
                    </div>

                    <div className="about-btn">
                        <a href="#about" className="btn btn-outline-white">ПРО КЛУБ</a>
                    </div>
                </div>

                <div className="about-collage">
                    <div className="about-img-guy">
                        {about2Src ? (
                            <img src={about2Src} alt="Guy" onError={(e) => {
                                e.target.style.display = 'none';
                                e.target.nextElementSibling.style.display = 'flex';
                            }} />
                        ) : null}
                    </div>

                    <div className="about-img-girl">
                        {about1Src ? (
                            <img src={about1Src} alt="Girl" onError={(e) => {
                                e.target.style.display = 'none';
                                e.target.nextElementSibling.style.display = 'flex';
                            }} />
                        ) : null}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
