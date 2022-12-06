import { Routes, Route } from 'react-router-dom';

import { Home } from './pages/Homepage';
import { Services } from './pages/Servicespage';
import { Team } from './pages/Teampage';
import { Skills } from './pages/Skillspage';
import { Portfolio } from './pages/Portfoliopage';
import { About } from './pages/Aboutpage';
import { Contacts } from './pages/Contactspage';
import LoginPage from './pages/Loginpage';
import { Notfound } from './pages/Notfoundpage';

import { Layout } from './components/Layout';

import './App.css';
import RequireAuth from './hoc/RequireAuth';
import { AuthProvider } from './hoc/AuthProvider';

function App() {

    return (
        <AuthProvider >
            <Routes>
                <Route path='/' element={<Layout />}>
                    <Route index element={<Home />} />
                    <Route element={<RequireAuth />}>
                        <Route path='services' element={<Services />} />
                        <Route path='team' element={<Team />} />
                        <Route path='skills' element={<Skills />} />
                        <Route path='portfolio' element={<Portfolio />} />
                        <Route path='about' element={<About />} />
                        <Route path='contacts' element={<Contacts />} />
                    </Route>
                    <Route path='login' element={<LoginPage />} />
                    <Route path='*' element={<Notfound />} />
                </Route>
            </Routes>
        </AuthProvider >

    );
}

export default App;