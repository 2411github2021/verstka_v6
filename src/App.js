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
import { useEffect, useState } from 'react';

function App() {
    const [items, setItems] = useState([]);

    useEffect(() => {
        fetch('https://638f611e4ddca317d7f6f498.mockapi.io/data_site')
            .then((res) => {
                return res.json();
            })
            .then((arr) => {
                setItems(arr);
            });
    }, []);

    return (
        <AuthProvider >
            <Routes>
                <Route path='/' element={<Layout />}>
                    <Route index element={<Home />} />
                    <Route element={<RequireAuth />}>
                        <Route path='services' element={<Services items={items[0]} />} />
                        <Route path='team' element={<Team items={items[2]} />} />
                        <Route path='skills' element={<Skills items={items[1]} />} />
                        <Route path='portfolio' element={<Portfolio items={items[4]} />} />
                        <Route path='about' element={<About items={items[3]} />} />
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