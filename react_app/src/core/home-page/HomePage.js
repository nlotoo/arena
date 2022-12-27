import { Link } from "react-router-dom";


export const HomePage = () => {
    return (
        <div>
            <Link to="/login">go to login page</Link>
            <div>
                <Link to="/register">go to register page</Link>
            </div>
            <div>
                <Link to="/arena">go to arena page</Link>
            </div>
        </div>
    );
}