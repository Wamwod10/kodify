import React, { useState } from "react";
import "../section/section.scss";
import { useTranslation } from "react-i18next";

const Section = () => {
    const [activeItem, setActiveItem] = useState(null);
    const [activeSubItem, setActiveSubItem] = useState(null);
    const { t } = useTranslation();

    const courses = [
        { name: t("28"), subCourses: [t("29"), t("30"), t("31"), t("32")] },
        { name: t("33"), subCourses: [t("34"), t("35"), t("36")] },
        { name: t("37"), subCourses: [t("38"), t("39"), t("40"), t("41"), t("42")] },
        { name: t("43"), subCourses: [t("44"), t("45"), t("46")] },
        { name: t("47"), subCourses: [t("48"), t("49")] },
        { name: t("50"), subCourses: [t("50")] },
        { name: t("52"), subCourses: [t("52")] },
        { name: t("54"), subCourses: [t("54")] },
        { name: t("56"), subCourses: [t("56")] },
        { name: t("58"), subCourses: [t("58")] },
        { name: t("60"), subCourses: [t("60")] }
    ];

    const handleItemClick = (index) => {
        setActiveItem(index === activeItem ? null : index);
        setActiveSubItem(null);
    };

    const handleSubItemClick = (subItem) => {
        setActiveSubItem(subItem);
    };

    return (
        <div className="section">
            <div className="container">
                <div className="section__box">
                    <div className="section__box-top">
                        <ul className="section__top-list">
                            {courses.map((item, index) => (
                                <li
                                    key={index}
                                    className={`section__top-item ${activeItem === index ? "active" : ""}`}
                                    onClick={() => handleItemClick(index)}
                                >
                                    <a
                                        href="#!"
                                        className={`section__top-link ${activeItem === index ? "active" : ""}`}
                                    >
                                        {item.name}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {activeItem !== null && (
                        <div className="section__box-low">
                            <div className="section__low-card">
                                {courses[activeItem].subCourses.length > 0 && (
                                    <ul
                                        className={`section__low-list ${courses[activeItem].subCourses.length > 0 ? "active" : ""}`}
                                    >
                                        {courses[activeItem].subCourses.map((subItem, subIndex) => (
                                            <li
                                                key={subIndex}
                                                className="section__low-item"
                                                onClick={() => handleSubItemClick(subItem)}
                                            >
                                                <a href="#!" className="section__low-link">
                                                    {subItem}
                                                </a>
                                            </li>
                                        ))}
                                    </ul>
                                )}
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Section;
