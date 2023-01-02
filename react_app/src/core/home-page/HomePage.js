import { Link } from "react-router-dom";
import './HomePage.css'

export const HomePage = () => {
    return (
        <>
            <div className="menu">

                <div>
                    <Link className="button" to="/login">login page</Link>
                </div>
                <div>
                    <Link className="button" to="/register">register account</Link>
                </div>
                <div>
                    <Link className="button" to="/bracket3">arena page</Link>
                </div>
                <div>
                    <Link className="button" to="/register-team">Register Team</Link>
                </div>
            </div>
        </>
    );
}