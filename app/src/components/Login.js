import React from 'react';
import { useState } from 'react';
import '../styles/Login.css';
import { useNavigate } from 'react-router-dom';

import line from "../assets/icons/Line.svg"
import green_ball from "../assets/icons/green_ball.svg"
import blue_ball from "../assets/icons/blue_ball.svg"
import red_ball from "../assets/icons/red_ball.svg"
import purple_ball from "../assets/icons/purple_ball.svg"

function Login() {

    let navigate = useNavigate();

    const [login, setLogin] = useState();
    const [password, setPassword] = useState();
    const [err, setErr] = useState("");

    function handleLogin(str) {
        console.log(str);
        setLogin(str);
    }

    function handlePassword(str) {
        setPassword(str);
    }

    function handleLoginBtn(e) {
        e.preventDefault();
        if (login == 'vdmk' && password == '123') {
            // TODO: store this into cookie?
            setErr('');
            navigate('/');
        } else {
            setErr('Неправильный логин или пароль!');
        }
    }


    return(
        <div className='back-ground'>
            <div className='conteiner'>
            <img src={blue_ball} className='blue_ball'></img>
            <img src={green_ball} className='green_ball'></img>
            <img src={red_ball} className='red_ball'></img>
            <img src={purple_ball} className='purple_ball'></img>
                <div className='inside-cont'>
                    <div className='label'>
                        <p>Вход в систему</p>
                        <p>Админ-панели <span className='avito'>Avito</span></p>
                    </div>
                    <img src={line} className='line'></img>
                    <div className='input-field'>
                        <input className='input' value={login} placeholder="example@gmail.com" onChange={(e) => handleLogin(e.target.value)} />
                        <input className='input' value={password} placeholder="Введите пароль" onChange={(e) => handlePassword(e.target.value)} />
                        <div onClick={(e) => handleLoginBtn(e)} className='enter-button'><p>Войти</p></div>
                        <h4 className='error'>{err}</h4>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Login;