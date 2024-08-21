import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import NavBar from './components/NavBar';
import Explore from './components/NavBar/Explore';
import Challenges from './components/NavBar/Challenges';
import Devboards from './components/NavBar/Devboards';
import Hiretalents from './components/NavBar/Hiretalents';
import './findcode.module.css'

function App() {
    return (
        <div className="App">
            <BrowserRouter>
            <NavBar />
                <Routes>
                    <Route path="/explore" element={<Explore />} />
                    <Route path="/challenges" element={<Challenges/>} />
                    <Route path="/dev" element={<Devboards />} />
                    <Route path="/talents" element={<Hiretalents />} />
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default App;
