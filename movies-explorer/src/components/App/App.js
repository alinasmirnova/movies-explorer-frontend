import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Main from '../Main';
import Movies from '../Movies';
import SavedMovies from '../SavedMovies';
import './App.css';

function App() {
    return (
        <div className="body">
            <div className="body__container">
                <Routes>
                    <Route exact path="/" element={<Main />} />
                    <Route exact path="/movies" element={<Movies />} />
                    <Route exact path="/saved-movies" element={<SavedMovies />} />
                </Routes>
            </div>            
        </div>
    );
}

export default App;