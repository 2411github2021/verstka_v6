import { Routes, Route } from 'react-router-dom';

import { Home } from './pages/Homepage';
import { Services } from './pages/Servicespage';
import { Team } from './pages/Teampage';
import { Skills } from './pages/Skillspage';
import { Portfolio } from './pages/Portfoliopage';
import { About } from './pages/Aboutpage';
import { Contacts } from './pages/Contactspage';
import { Notfound } from './pages/Notfoundpage';

import { Layout } from './components/Layout';

import './App.css';

function App() {

    return (
        <>
            <Routes>
                <Route path='/' element={<Layout />}>
                    <Route index element={<Home />} />
                    <Route path='services' element={<Services />} />
                    <Route path='team' element={<Team />} />
                    <Route path='skills' element={<Skills />} />
                    <Route path='portfolio' element={<Portfolio />} />
                    <Route path='about' element={<About />} />
                    <Route path='contacts' element={<Contacts />} />
                    <Route path='*' element={<Notfound />} />
                </Route>
            </Routes>
        </>
    );
}

export default App;