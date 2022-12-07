import { NavLink, Link, Outlet, useNavigate } from 'react-router-dom';
import { footer } from '../data/Data';
import { useAuth } from '../hook/useAuth';
import './Layout.css';

const Layout = () => {
    const { user, signout } = useAuth();
    const navigate = useNavigate();

    return (
        <>
            <header className='navbar'>
                <NavLink to="/">Home</NavLink>
                <NavLink to="/about">About us</NavLink>
                <NavLink to="/services">Services</NavLink>
                <NavLink to="/skills">Skills</NavLink>
                <NavLink to="/portfolio">Portfolio</NavLink>
                <NavLink to="/team">Team</NavLink>
                <NavLink to="/contacts">Contacts</NavLink>
                {user
                    ? <button className='btn-signout' onClick={() => signout(() => navigate('/', { replace: true }))}>Sign out</button>
                    : <NavLink className='btn-signin' style={{ color: "green " }} to="/login">Sign in</NavLink>
                }
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