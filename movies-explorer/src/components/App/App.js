import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Main from '../Main';
import './App.css';

function App() {
    return (
        <div className="body">
            <Routes>
                <Route exact path="/" element={<Main />} />
            </Routes>
        </div>
    );
}

export default App;