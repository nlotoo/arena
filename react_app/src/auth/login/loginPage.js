
import { useEffect } from 'react';
import { loginUser } from '../authServices.js';

export const LoginPage = () => {

    useEffect(() => {
        if (localStorage.getItem('token') !== null)
        {
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
        <div>
            <h1>Login Page</h1>
            <form onSubmit={SubmitHandler}>

                unsername: <input type="text" name="login" />
                password: <input type="password" name="password" />
                <button>login</button>
            </form>
        </div>
    );
}