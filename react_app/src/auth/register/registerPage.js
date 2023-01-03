
import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { RegisterUser } from '../authServices';
import './registerPage.css'

export const RegisterPage = () => {

    useEffect(() => {
        if (localStorage.getItem('token') !== null) {
            window.location.href = '/';
        }

    }, []);


    function SubmitEvent(event) {
        event.preventDefault();
        let username = event.target.username.value;
        let password = event.target.password.value;
        let repeatPassword = event.target.repeatPassword.value;
        console.log(username)


        console.log(username, password, repeatPassword);

        if (password !== repeatPassword) {
            console.log('passwords are not equal');
        }
        else {
            console.log('passwords are equal');
            RegisterUser(username, password)
        }
    }

    return (
        <div className='register-container'>
            <Link to='/' className='button'><i class="fa-solid fa-arrow-left"></i></Link>
            <h1>Register Page</h1>
            <form className='register-form' onSubmit={SubmitEvent}>
                <input type="text" name='username' placeholder='User name'></input>
                <input type="text" name='password' placeholder='password'></input>
                <input type='text' name='repeatPassword' placeholder='repeat password'></input>
                <button type='submit' className='button'>Register</button>
            </form>
        </div>
    );
}