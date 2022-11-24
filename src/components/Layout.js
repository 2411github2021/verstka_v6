import { NavLink, Link, Outlet } from 'react-router-dom';
import './Layout.css';
import { footer } from '../data/Data';


const Layout = () => {
    return (
        <>
            <header>
                <NavLink to="/">Home</NavLink>
                <NavLink to="/about">About us</NavLink>
                <NavLink to="/services">Services</NavLink>
                <NavLink to="/skills">Skills</NavLink>
                <NavLink to="/portfolio">Portfolio</NavLink>
                <NavLink to="/team">Team</NavLink>
                <NavLink to="/contacts">Contacts</NavLink>
            </header >

            <Outlet />

            <footer>
                {footer.map((lin, index) =>
                    <Link to={lin.http} key={index}>{lin.link}</Link>)}
            </footer>
        </>
    )
}

export { Layout }