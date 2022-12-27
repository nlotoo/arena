
import { useEffect } from 'react';

import { RegisterUser } from '../authServices';


export const RegisterPage = () => {

    useEffect(() => {
        if (localStorage.getItem('token') !== null)
        {
            window.location.href = '/';
        }

    }, []);


    function SubmitEvent(event) {
        event.preventDefault();
        let username = event.target.username.value;
        let password = event.target.password.value;
        let repeatPassword = event.target.repeatPassword.value;


        console.log(username, password, repeatPassword);

        if (password !== repeatPassword)
        {
            console.log('passwords are not equal');
        }
        else
        {
            console.log('passwords are equal');
            RegisterUser(username, password)
        }
    }

    return (
        <div>
            <h1>Register Page</h1>
            <form onSubmit={SubmitEvent}>
                <label>username</label>
                <input type="text" name='username'></input>
                <label>password</label>
                <input type="text" name='password'></input>
                <label>repeat password</label>
                <input type='text' name='repeatPassword'></input>
                <button>Register</button>
            </form>
        </div>
    );
}