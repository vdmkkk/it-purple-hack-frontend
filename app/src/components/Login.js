import React from 'react';
import { useState } from 'react';
import '../styles/Login.css';
import { useNavigate } from 'react-router-dom';

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
        <div className='login'>
            <input className='input' value={login} onChange={(e) => handleLogin(e.target.value)} />
            <input className='input' value={password} onChange={(e) => handlePassword(e.target.value)} />
            <h4 className='error'>{err}</h4>
            <div onClick={(e) => handleLoginBtn(e)}><p>Войти</p></div>
        </div>
    );
}

export default Login;