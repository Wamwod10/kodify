import "./header.scss";
import { FaChevronRight } from "react-icons/fa";
import { useTranslation } from "react-i18next";
import 'swiper/css';
import 'swiper/css/pagination';
import React, { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper/modules';

const Header = () => {
  const { t, i18n } = useTranslation();
  const [openCategory, setOpenCategory] = useState(null);

  const toggleCategory = (category) => {
    setOpenCategory(openCategory === category ? null : category);
  };

  return (
    <div className='header'>
      <div className="container">
        <div className="header__box">
          <div className="header__first-box">
            <h2 className="header__first-title">Barcha Kurslar</h2>
            <ul className="header__list">
              {[
                { title: t("28"), subcategories: [t("29"), t("30"), t("31"), t("32")] },
                { title: t("33"), subcategories: [t("34"), t("35"), t("36")] },
                { title: t("37"), subcategories: [t("38"), t("39"), t("40"), t("41"), t("42")] },
                { title: t("43"), subcategories: [t("44"), t("45"), t("46")] },
                { title: t("47"), subcategories: [t("48"), t("49")] },
                { title: t("50"), subcategories: [t("51")] },
                { title: t("52"), subcategories: [t("53")] },
                { title: t("54"), subcategories: [t("55")] },
                { title: t("56"), subcategories: [t("57")] },
                { title: t("58"), subcategories: [t("59")] },
                { title: t("60"), subcategories: [t("61")] },
              ].map((category, index) => (
                <li key={index} className="header__item">
                  <a 
                    href="#" 
                    onClick={(e) => { e.preventDefault(); toggleCategory(index); }}
                    className="header__link"
                  >
                    {category.title}
                    <FaChevronRight className={`chevron-icon ${openCategory === index ? "rotated" : ""}`} />
                  </a>
                  <ul className={`header__category-list ${openCategory === index ? "open" : ""}`}>
                    {category.subcategories.map((sub, subIndex) => (
                      <li key={subIndex} className="header__category-item">
                        <a href="#" className="header__category-link">{sub}</a>
                      </li>
                    ))}
                  </ul>
                </li>
              ))}
            </ul>
          </div>
          <div className="header__box-second">
            <Swiper
              loop={true}
              pagination={true}
              modules={[Pagination, Autoplay]}
              className="mySwiper"
              autoplay={{
                delay: 2000,
                disableOnInteraction: false,
              }}
            >
              {[62, 66, 68, 70, 72, 74, 76, 78, 80, 82].map((num, index) => (
                <SwiperSlide key={index}>
                  <div className={`header__swipe-box header__bg-${index + 1}`}>
                    <h2 className="header__swipe-title">{t(`${num}`)}</h2>
                    <p className="header__swipe-text">{t(`${num + 1}`)}</p>
                    <div className="header__swipelink-box">
                      <a href="#" className="header__swipe-link">{t("64")}</a>
                      <a href="#" className="header__swipe-link">{t("65")}</a>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;