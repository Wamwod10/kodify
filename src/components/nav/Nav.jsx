import "./nav.scss";
import { IoSearch } from "react-icons/io5";
import { IoSearchSharp } from "react-icons/io5";
import { FaRegUser } from "react-icons/fa6";
import { IoChevronDownOutline } from "react-icons/io5";
import { useEffect, useRef, useState } from 'react';
import { Link } from "react-router-dom";

const Nav = () => {
    const [isUzbek, setIsUzbek] = useState(true);
    const handleLanguageToggle = () => {
        setIsUzbek(!isUzbek);
    };

    const [menuOpen, setMenuOpen] = useState(false);
    const navRef = useRef(null);

    const handleToggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    const handleClickOutside = (event) => {
        if (navRef.current && !navRef.current.contains(event.target)) {
            setMenuOpen(false);
        }
    };

    useEffect(() => {
        document.addEventListener('click', handleClickOutside);
        return () => {
            document.removeEventListener('click', handleClickOutside);
        };
    }, []);

    const [linkMenu, setLinkMenu] = useState(false);
    const menuRef = useRef(null);
    const [isActive, setIsActive] = useState(false);

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (menuRef.current && !menuRef.current.contains(event.target)) {
                setLinkMenu(false);
                setIsActive(false); // Tashqi joyga bosilganda active classni olib tashlash
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    const handleLinkMenu = () => {
        setLinkMenu(!linkMenu);
        setIsActive(!isActive);
    };

    return (
        <div className='nav'>
            <div className="container">
                <div className="nav__box">
                    <a href="/" className="nav__logo"><img src="1.svg" alt="" /></a>
                    <div className="nav__form-box">
                        <div ref={navRef}>
                            <div className={`nav__search ${menuOpen ? 'open' : ''}`} onClick={handleToggleMenu}><IoSearch /></div>
                            <form className={`nav__form ${menuOpen ? 'active' : ''}`} action="">
                                <input className="nav__search-input" type="text" placeholder="Qidirish..." />
                                <a href="#" className="nav__form-search"><IoSearchSharp /></a>
                            </form>
                        </div>
                    </div>
                    <ul className="nav__list">
                        <li className="nav__item"><a href="" className="nav__link">Bosh sahifa</a></li>
                        <li className="nav__item"><a href="" className="nav__link">Kurslar</a></li>
                        <li className="nav__item"><a href="" className="nav__link">O'quvchilar fikri</a></li>
                        <li className="nav__item"><a href="" className="nav__link">Narxlar</a></li>
                        <li className="nav__item"><a href="" className="nav__link">Biz haqimizda</a></li>
                        <li className="nav__item" ref={menuRef}>
                            <div style={{ cursor: 'pointer' }} className={`nav__link-first ${isActive ? 'active' : ''}`} onClick={handleLinkMenu}>
                                Boshqalar <IoChevronDownOutline className="nav__link-icon" /></div>
                            <ul className={`nav__box-list ${linkMenu ? 'activetop' : ''}`}>
                                <a href="#" className="nav__box-link">FAQ (Savollar)</a>
                                <a href="#" className="nav__box-link">Aloqa</a>
                                <a href="#" className="nav__box-link">Bepul darslar</a>
                                <a href="#" className="nav__box-link">Sertifikat shartlari</a>
                            </ul>
                        </li>
                    </ul>
                    <div className="nav__lang-box" onClick={handleLanguageToggle} style={{ cursor: 'pointer' }}>
                        <a href="#" className="nav__lang-img">
                            <img src={isUzbek ? "2.svg" : "3.svg"} alt="language-icon" />
                        </a>
                        <p className="nav__lang-txt">{isUzbek ? "O'zb" : "Ru"}</p>
                    </div>
                    <Link to="/login" className="nav__login-box">
                        <a href="#" className="nav__login-img">
                            <FaRegUser />
                        </a>
                        <p className="nav__login-txt">Kirish</p>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Nav;
    