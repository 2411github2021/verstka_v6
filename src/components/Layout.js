import { NavLink, Link, Outlet } from 'react-router-dom';
import './Layout.css';

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
                <Link to="/">Facebook</Link>
                <Link to="/">Twitter</Link>
                <Link to="/">Google+</Link>
                <Link to="/">LinkedIn</Link>
                <Link to="/">Behance</Link>
                <Link to="/">Dribbble</Link>
                <Link to="/">GitHub</Link>
            </footer>
        </>
    )
}

export { Layout }