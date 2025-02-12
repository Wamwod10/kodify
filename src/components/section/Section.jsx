import React, { useState } from 'react';
import "../section/section.scss";

const Section = () => {
    const [activeItem, setActiveItem] = useState(null);
    const handleItemClick = (index) => {
        setActiveItem(index);
    };

    return (
        <div className="section">
            <div className="container">
                <div className="section__box">
                    <div className="section__box-top">
                        <ul className="section__top-list">
                            {["Dasturlash Darslari", "Dizayn Darslari", "3D Max", "SMM", "Video Montaj", "Frilanserlik Darslari", "Bugalteriya kurslari", "Kopirayting", "Kopirayting Kurslari", "AI", "CMS va Boshqa Yo'nalishlar"]
                            .map((item, index) => (
                                <li
                                    key={index}
                                    className={`section__top-item ${activeItem === index ? 'active' : ''}`}
                                    onClick={() => handleItemClick(index)}
                                >
                                    <a href="#!" className="section__top-link">{item}</a>
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div className="line"></div>
                    <div className="section__box-low">
                        {activeItem !== null ? (
                            <div className="section__low-card" style={{ backgroundColor: `hsl(${(activeItem * 360) / 11}, 100%, 70%)` }}>
                                Kurs {activeItem + 1} tanlandi.
                            </div>
                        ) : (
                            <div className="section__low-card">
                                Kurslardan birini tanlang
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Section;
