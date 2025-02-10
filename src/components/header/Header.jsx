import "./header.scss";
import { FaChevronRight } from "react-icons/fa";
import { useTranslation } from "react-i18next";
import 'swiper/css';
import 'swiper/css/pagination';
import React, { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper/modules';


const Header = () => {

  const { t, i18n } = useTranslation();

  const changeLanguage = (lang) => {
    i18n.changeLanguage(lang);
  };

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
                  <a href="#" onClick={(e) => { e.preventDefault(); toggleCategory(index); }} className="header__link">
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
              <SwiperSlide>
                <div className="header__swipe-box header__bg-1">
                  <h2 className="header__swipe-title">IT Dunyoning Kaliti! O'rganishni Hozirdan Boshlang</h2>
                  <p className="header__swipe-text">IT sohasida birinchi qadamni qo'ying! Bizning kurslarimiz bilan dasturlash, dizayn va texnologiyalarni o'rganing va kelajagingizni yaratishga kirishing.</p>
                  <div className="header__swipelink-box">
                    <a href="" className="header__swipe-link">Kursga Yozilish</a>
                    <a href="" className="header__swipe-link">Kursga Yozilish</a>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="header__swipe-box header__bg-2">
                  <h2 className="header__swipe-title">Zamonaviy IT Kurslar – Kasbingizni Shakllantiring!</h2>
                  <p className="header__swipe-text">O'z bilim va tajribangizni oshirib, IT sohasida talabgir mutaxassisga aylaning! Eng dolzarb kurslar bilan kasbingizni keyingi darajaga olib chiqing.</p>
                  <div className="header__swipelink-box">
                    <a href="" className="header__swipe-link">Kursga Yozilish</a>
                    <a href="" className="header__swipe-link">Ko'proq Malumot</a>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="header__swipe-box header__bg-3">
                  <h2 className="header__swipe-title">Kelajak Sizniki! Eng Dolzarb IT Kurslarini O'rganing</h2>
                  <p className="header__swipe-text">AI, dasturlash, dizayn va boshqa texnologiyalar bo'yicha eng zamonaviy kurslarni o'rganing. Kelajak IT mutaxassislari qatorida bo'lish imkoniyatini qo'ldan boy bermang!</p>
                  <div className="header__swipelink-box">
                    <a href="" className="header__swipe-link">Kursga Yozilish</a>
                    <a href="" className="header__swipe-link">Ko'proq Malumot</a>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="header__swipe-box header__bg-4">
                  <h2 className="header__swipe-title">Tez o'rganing va IT karyerangizni boshlang!</h2>
                  <p className="header__swipe-text">Boshlang'ich yoki tajribali bo'lishingizdan qat'i nazar, bizning kurslarimiz bilan IT dunyosida mustahkam o'rin egallash imkoniyatiga ega bo'lasiz!</p>
                  <div className="header__swipelink-box">
                    <a href="" className="header__swipe-link">Kursga Yozilish</a>
                    <a href="" className="header__swipe-link">Ko'proq Malumot</a>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="header__swipe-box header__bg-5">
                  <h2 className="header__swipe-title">Shaxsiy Brend va Kasbiy O'sish Uchun IT Kurslar!</h2>
                  <p className="header__swipe-text">IT sohasida rivojlanib, shaxsiy brendingizni yarating! Kurslarimiz orqali yangi imkoniyatlarni kashf qiling va kasbingizni mukammallashtiring.</p>
                  <div className="header__swipelink-box">
                    <a href="" className="header__swipe-link">Kursga Yozilish</a>
                    <a href="" className="header__swipe-link">Ko'proq Malumot</a>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="header__swipe-box header__bg-6">
                  <h2 className="header__swipe-title">IT'da yangi darajaga chiqish va bilim oshirish vaqti! </h2>
                  <p className="header__swipe-text">Tajribali dasturchilarga yangi texnologiyalarni o'rganish va mavjud bilimlarini chuqurlashtirish uchun maxsus kurslar! O'z sohangizda yetakchiga aylaning.</p>
                  <div className="header__swipelink-box">
                    <a href="" className="header__swipe-link">Kursga Yozilish</a>
                    <a href="" className="header__swipe-link">Ko'proq Malumot</a>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="header__swipe-box header__bg-7">
                  <h2 className="header__swipe-title">IT'dagi bilimingizni rivojlantiring </h2>
                  <p className="header__swipe-text">IT sohasiga ilk qadamni qo'ymoqchimisiz yoki mavjud bilimlaringizni kengaytirmoqchimisiz? Bizda siz uchun hammasi tayyor!</p>
                  <div className="header__swipelink-box">
                    <a href="" className="header__swipe-link">Kursga Yozilish</a>
                    <a href="" className="header__swipe-link">Ko'proq Malumot</a>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="header__swipe-box header__bg-8">
                  <h2 className="header__swipe-title">Dasturlash va texnologiyalarni chuqur o'rganing! </h2>
                  <p className="header__swipe-text">HTML, CSS, JavaScript, Python va boshqa dasturlash tillarini o'rganib, mustaqil loyihalar yaratish imkoniyatiga ega bo'ling.</p>
                  <div className="header__swipelink-box">
                    <a href="" className="header__swipe-link">Kursga Yozilish</a>
                    <a href="" className="header__swipe-link">Ko'proq Malumot</a>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="header__swipe-box header__bg-9">
                  <h2 className="header__swipe-title">Texnologiyalar Bilan Yangiliklardan Orqada Qolmang! </h2>
                  <p className="header__swipe-text">IT olami doimiy o'zgarib boradi. Bizning kurslarimiz bilan eng so'nggi texnologiyalarni o'zlashtiring va bozor talablariga javob bering!</p>
                  <div className="header__swipelink-box">
                    <a href="" className="header__swipe-link">Kursga Yozilish</a>
                    <a href="" className="header__swipe-link">Ko'proq Malumot</a>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="header__swipe-box header__bg-10">
                  <h2 className="header__swipe-title">IT'da Bilimingizni Tekshiring va Rivojlantiring! </h2>
                  <p className="header__swipe-text">O'z bilimlaringizni mustahkamlash va amaliy tajriba orttirish uchun maxsus kurslar! Imtihonlar, loyihalar va sertifikatlar bilan bilimlaringizni sinovdan o'tkazing.</p>
                  <div className="header__swipelink-box">
                    <a href="" className="header__swipe-link">Kursga Yozilish</a>
                    <a href="" className="header__swipe-link">Ko'proq Malumot</a>
                  </div>
                </div>
              </SwiperSlide>
            </Swiper>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
