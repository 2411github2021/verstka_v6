import React from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import { useAuth } from '../hook/useAuth';
import './Loginpage.css';

const LoginPage = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const { signin } = useAuth();

    const fromPage = location.state?.from?.pathname || '/';

    const handleSubmit = (event) => {
        event.preventDefault();
        const form = event.target;
        const user = form.username.value;

        signin(user, () => navigate(fromPage, { replace: true }))
    }

    return (
        <div className="container-login">
            <h1 className='login-title'>Sing in to Cuda</h1>
            <form onSubmit={handleSubmit}>
                <label className='label-login' >
                    <p className='input'>E-mail</p>
                    <input className='form-login' name='username' placeholder='Your e-mail' required />
                    <p className='input'>Password</p>
                    <input className='form-login' name='pass' placeholder='Your password' type="password" required />
                    <br />
                    < button className='btn-login' type='submit'>GO!!!</button>
                </label>
            </form>
        </div>
    )
}

export default LoginPage
