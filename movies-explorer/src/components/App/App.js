import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Main from '../Main';
import './App.css';

function App() {
    return (
        <div className="body">
            <div className="body__container">
                <Routes>
                    <Route exact path="/" element={<Main />} />
                </Routes>
            </div>            
        </div>
    );
}

export default App;