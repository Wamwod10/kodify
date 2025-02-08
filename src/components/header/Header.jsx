import { useState } from "react";
import "./header.scss";
import { FaChevronRight } from "react-icons/fa";

const Header = () => {
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
                { title: "Dasturlash Darslari", subcategories: ["Frontend Dasturlash", "Backend Dasturlash", "Sun'iy Intellekt va Botlar", "Mobil Dasturlash"] },
                { title: "Dizayn Darslari", subcategories: ["Adobe Photoshop", "Adobe Illustrator", "Figma"] },
                { title: "3D Max", subcategories: ["3D MAX (To'liq darslik)", "Blender Asoslari", "Maya (Boshlang'ich kurs)", "ZBrush", "AutoCAD"] },
                { title: "SMM", subcategories: ["Modul 1", "Modul 2", "Modul 3"] },
                { title: "Video Montaj", subcategories: ["Adobe After Effects", "Adobe Premiere Pro"] },
                { title: "Frilanserlik Darslari", subcategories: ["UpWorkda Ishlash"] },
                { title: "Bugalteriya kurslari", subcategories: ["C1da Ishlash"] },
                { title: "Kopirayting", subcategories: ["Kopirayting Kurslari"] },
                { title: "Office darslari", subcategories: ["Microsoft Word"] },
                { title: "AI", subcategories: ["AIlardan Foydalanish"] },
                { title: "CMS va Boshqa Yo‘nalishlar", subcategories: ["WordPress"] },
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
          <div className="header__box-second"></div>
        </div>
      </div>
    </div>
  );
};

export default Header;
