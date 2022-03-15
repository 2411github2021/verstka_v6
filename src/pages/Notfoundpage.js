import { Link } from "react-router-dom";
import './Notfoundpage.css';

const Notfound = () => {
    return (
        <div className="container">
            This page not found. Go <Link to="/">home</Link>.
        </div>
    )
}

export { Notfound };