import React, { useState, useEffect, useRef } from 'react';
import "../login/login.scss";
import { useTranslation } from 'react-i18next';

const Login = () => {
    
    const { t, i18n } = useTranslation();

    const changeLanguage = (lang) => {
        i18n.changeLanguage(lang);
    };
    
    const [isRegister, setIsRegister] = useState(false);
    const [inputActive, setInputActive] = useState({
        name: false,
        phone: false,
        email: false,
        password: false,
    });

    const inputRef = useRef(null);

    const handleOnClick = (inputName) => {
        setInputActive(prevState => ({
            ...prevState,
            [inputName]: true,
        }));
    };

    const toggleForm = () => {
        setIsRegister(!isRegister);
    };

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (inputRef.current && !inputRef.current.contains(event.target)) {
                setInputActive({
                    name: false,
                    phone: false,
                    email: false,
                    password: false,
                });
            }
        };

        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);

    return (
        <div className="login">
            <div className="container">
                <div className="login__box">
                    <div className="login__box-first">
                        {isRegister ? (
                            <>
                                <h1 className="login__box-title">Kirish Uchun Ro'yxatdan O'ting</h1>
                                <div className="login__box-icon">
                                    <a href="#"><img className="login__icon" src="4.svg" alt="" /></a>
                                    <a href="#"><img className="login__icon" src="5.svg" alt="" /></a>
                                    <a href="#"><img className="login__icon" src="6.svg" alt="" /></a>
                                </div>
                                <p className="login__text">Iltimos Malumotlarni To'liq Kiriting!</p>
                                <form>
                                    <div className="group" ref={inputRef}>
                                        <input
                                            className={`input__box ${inputActive.name ? "active" : ''}`}
                                            onClick={() => handleOnClick("name")}
                                            type="text"
                                            required
                                        />
                                        <label>Ismingiz</label>
                                    </div>
                                    <div className="group" ref={inputRef}>
                                        <input
                                            className={`input__box ${inputActive.phone ? "active" : ''}`}
                                            onClick={() => handleOnClick("phone")}
                                            type="tel"
                                            required
                                            onInput={(e) => e.target.value = e.target.value.replace(/\D/g, '')}
                                            placeholder={inputActive.phone ? "998 99 123 45 67" : ""}
                                        />
                                        <label>Telefon raqamingiz</label>
                                    </div>
                                    <div className="group" ref={inputRef}>
                                        <input
                                            className={`input__box ${inputActive.email ? "active" : ''}`}
                                            onClick={() => handleOnClick("email")}
                                            type="email"
                                            required
                                        />
                                        <label>Gmail</label>
                                    </div>
                                    <div className="group" ref={inputRef}>
                                        <input
                                            className={`input__box ${inputActive.password ? "active" : ''}`}
                                            onClick={() => handleOnClick("password")}
                                            type="password"
                                            required
                                        />
                                        <label>Parol</label>
                                    </div>
                                </form>
                                <div className='login__sign-box'>
                                    <button className="login__sign">Ro'yxatdan O'tish</button>
                                </div>
                                <p className="login__toggle-text login__text-top">Akkauntingiz bormi? <span onClick={toggleForm}>Kirish</span></p>
                            </>
                        ) : (
                            <>
                                <h1 className="login__box-title">{t('12')}</h1>
                                <div className="login__box-icon">
                                    <a href="#"><img className="login__icon" src="4.svg" alt="" /></a>
                                    <a href="#"><img className="login__icon" src="5.svg" alt="" /></a>
                                    <a href="#"><img className="login__icon" src="6.svg" alt="" /></a>
                                </div>
                                <p className="login__text">Yoki Gmailingiz orqali Kiring</p>
                                <form>
                                    <div className="group" ref={inputRef}>
                                        <input
                                            className={`input__box ${inputActive.email ? "active" : ''}`}
                                            onClick={() => handleOnClick("email")}
                                            type="email"
                                            required
                                        />
                                        <label>Gmail</label>
                                    </div>
                                    <div className="group">
                                        <input
                                            className={`input__box ${inputActive.password ? "active" : ''}`}
                                            onClick={() => handleOnClick("password")}
                                            type="password"
                                            required
                                        />
                                        <label>Parol</label>
                                    </div>
                                </form>
                                <a href="#" className="login__forgot">Parolingizni Unutdingizmi?</a>
                                <div className='login__sign-box'>
                                    <a href='' className="login__sign">Kirish</a>
                                </div>
                                <p className="login__toggle-text">Akkauntingiz yo'qmi? <span onClick={toggleForm}>Ro'yxatdan O'tish</span></p>
                            </>
                        )}
                    </div>
                    <div className="login__box-sec">
                        <a href="" className="nav__logo-link"><img src="7.svg" alt="" /></a>
                        <h2 className="login__sec-title">Assalomu Aleykum</h2>
                        <p className="login__sec-text">{isRegister ? "Kirish uchun hisobingizga kiring!" : "Tez va oson ro'yxatdan o'ting!"}</p>
                        <div className='login__sign-box'>
                            <button className="login__sec-link" onClick={toggleForm}>{isRegister ? "Kirish" : "Ro'yxatdan O'tish"}</button>
                        </div>
                    </div>
                </div>
            </div>
        </div >
    );
};

export default Login;
