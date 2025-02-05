import React, { useState, useEffect, useRef } from 'react';
import "../login/login.scss";

const Login = () => {
    const [inputActive, setInputActive] = useState(false);
    const [isRegister, setIsRegister] = useState(false);
    const inputRef = useRef(null);

    const handleOnClick = () => {
        setInputActive(true);
    };

    const toggleForm = () => {
        setIsRegister(!isRegister);
    };

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (inputRef.current && !inputRef.current.contains(event.target)) {
                setInputActive(false);
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
                                <h1 className="login__box-title">Ro'yxatdan O'tish</h1>
                                <form>
                                    <div className="group" ref={inputRef}>
                                        <input className={`input__box ${inputActive ? "active" : ''}`} onClick={handleOnClick} type="text" required />
                                        <label>Ismingiz</label>
                                    </div>
                                    <div className="group">
                                        <input className={`input__box ${inputActive ? "active" : ''}`} onClick={handleOnClick} type="email" required />
                                        <label>Gmail</label>
                                    </div>
                                    <div className="group">
                                        <input className={`input__box ${inputActive ? "active" : ''}`} onClick={handleOnClick} type="password" required />
                                        <label>Parol</label>
                                    </div>
                                </form>
                                <div className='login__sign-box'>
                                    <button className="login__sign">Ro'yxatdan O'tish</button>
                                </div>
                                <p className="login__toggle-text">Akkauntingiz bormi? <span onClick={toggleForm}>Kirish</span></p>
                            </>
                        ) : (
                            <>
                                <h1 className="login__box-title">Qaytib Kelganingizdan Xursandmiz!</h1>
                                <form>
                                    <div className="group" ref={inputRef}>
                                        <input className={`input__box ${inputActive ? "active" : ''}`} onClick={handleOnClick} type="email" required />
                                        <label>Gmail</label>
                                    </div>
                                    <div className="group">
                                        <input className={`input__box ${inputActive ? "active" : ''}`} onClick={handleOnClick} type="password" required />
                                        <label>Parol</label>
                                    </div>
                                </form>
                                <a href="#" className="login__forgot">Parolingizni Unutdingizmi?</a>
                                <div className='login__sign-box'>
                                    <button className="login__sign">Kirish</button>
                                </div>
                                <p className="login__toggle-text">Akkauntingiz yo'qmi? <span onClick={toggleForm}>Ro'yxatdan O'tish</span></p>
                            </>
                        )}
                    </div>
                    <div className="login__box-sec">
                        <h2 className="login__sec-title">Assalomu Aleykum</h2>
                        <p className="login__sec-text">{isRegister ? "Kirish uchun hisobingizga kiring!" : "Tez va oson ro'yxatdan o'ting!"}</p>
                        <div className='login__sign-box'>
                            <button className="login__sex-link" onClick={toggleForm}>{isRegister ? "Kirish" : "Ro'yxatdan O'tish"}</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;