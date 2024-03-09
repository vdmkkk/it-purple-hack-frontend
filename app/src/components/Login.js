import React from 'react';
import { useState } from 'react';
import '../styles/Login.css';
import { useNavigate } from 'react-router-dom';
import show from '../assets/icons/show.svg'
import hide from '../assets/icons/hide.svg'


function Login() {

    let navigate = useNavigate();

    const [login, setLogin] = useState();
    const [password, setPassword] = useState();
    const [err, setErr] = useState("");
    const [isShown, setIsShown] = useState(false);

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
            <input className='input' value={password} onChange={(e) => handlePassword(e.target.value)} />

            <div className='input-wrapper'>
                <input type={isShown ? 'text' : 'password'} className='input' value={login} onChange={(e) => handleLogin(e.target.value)} />
                <img onClick={() => setIsShown(!isShown)} src={isShown ? hide : show}/>
            </div>
            <h4 className='error'>{err}</h4>
            <div onClick={(e) => handleLoginBtn(e)}><p>Войти</p></div>
        </div>
    );
}

export default Login;