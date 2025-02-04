import React, { useState, useEffect, useRef } from 'react';
import "../login/login.scss";

const Login = () => {
    const [inputActive, setInputActive] = useState(false);
    const inputRef = useRef(null); 

    const handleOnClick = () => {
        setInputActive(true);
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
                        <h1 className="login__box-title">Qaytib Kelganingizdan Xursandmiz!</h1>
                        <div className="login__box-icon">
                            <a href="#"><img className="login__icon" src="4.svg" alt="" /></a>
                            <a href="#"><img className="login__icon" src="5.svg" alt="" /></a>
                            <a href="#"><img className="login__icon" src="6.svg" alt="" /></a>
                        </div>
                        <p className="login__text">Yoki Gmailingiz orqali Kiring</p>
                        <form>
                            <div className="group" ref={inputRef}>
                                <input className={`input__box ${inputActive ? "active" : ''}`} onClick={handleOnClick} type="text"
                                    required
                                />
                                <span className="bar"></span>
                                <label>Gmail</label>
                            </div>

                            <div className="group">
                                <input className={`input__box ${inputActive ? "active" : ''}`} onClick={handleOnClick} type="email" required />
                                <span className="bar"></span>
                                <label>Parol</label>
                            </div>
                        </form>
                    </div>
                    <div className="login__box-sec"></div>
                </div>
            </div>
        </div>
    );
};

export default Login;
