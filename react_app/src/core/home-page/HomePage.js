import { Link } from "react-router-dom";
import './HomePage.css'

export const HomePage = () => {

    const logout = () => {
        localStorage.clear();
        window.location.href = '/';

    }

    return (
        <>
            <div className="menu">

                <div>
                    {localStorage.getItem('token') == null && <Link className="button" to="/login">login page</Link>}
                </div>
                <div>
                    {localStorage.getItem('token') == null && <Link className="button" to="/register">register account</Link>}
                </div>
                <div>
                    {localStorage.getItem('token') !== null && <Link className="button" to="/bracket3">arena page</Link>}
                </div>
                <div>
                    {localStorage.getItem('token') !== null && <Link className="button" to="/register-team">Register Team</Link>}
                </div>
                <div>
                    {localStorage.getItem('token') !== null && <Link className="button" to="/tournament-loby">Tournament Loby</Link>}
                </div>
                <div>
                    {localStorage.getItem('token') !== null && <button type="button" className="logout-buton" onClick={logout}>Logout</button>}
                </div>
            </div>
        </>
    );
}