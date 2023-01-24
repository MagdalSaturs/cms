import './Login.scss';
// import Context from '../../context/App.context';
// import { useContext } from 'react';
import { useRef } from 'react';

const Login = () => {
    const login = 'Magda/Technischools';
    const password = 'Technischools/Magda'

    const loginRef = useRef();
    const passwordRef = useRef();

    const checkLogin = () => {
        if (loginRef.current.value === login && passwordRef.current.value === password) {
            window.location.replace('/main');
        } else {
            loginRef.current.value = '';
            passwordRef.current.value = '';
            alert('Błędne dane');
        }
    };


    return (
        <>
            <div className='login'>
            <h1>login</h1>
                <input ref={loginRef} placeholder='login' type='text'></input>
                <input ref={passwordRef} placeholder='hasło' type='password'></input>
                <button onClick={e => checkLogin(e)}>zaloguj</button>
            </div>
        </>
    )
}

export default Login;