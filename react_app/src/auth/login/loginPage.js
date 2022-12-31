
import { useEffect } from 'react';
import { loginUser } from '../authServices.js';
import { Link } from 'react-router-dom';
import './loginPage.css'

export const LoginPage = () => {

    useEffect(() => {
        if (localStorage.getItem('token') !== null) {
            window.location.href = '/';
        }
    }, []);


    function SubmitHandler(event) {
        event.preventDefault();


        let username = event.target.login.value;
        let password = event.target.password.value;

        let obj = { username, password };

        let data = loginUser(obj);
        console.log(data);
    }
    return (
        <div className='login-container'>
            <Link to='/' className='button'><i class="fa-solid fa-arrow-left"></i></Link>

            <h1>Login Page</h1>
            <form className='form-container' onSubmit={SubmitHandler}>

                <input type="text" name="login" placeholder='User name' />
                <input type="password" name="password" placeholder='Password' />
                <button type='button' className='button'>login</button>
            </form>
        </div>
    );
}