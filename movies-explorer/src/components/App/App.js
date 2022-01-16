import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Main from '../Main';
import Movies from '../Movies';
import SavedMovies from '../SavedMovies';
import Profile from '../Profile/Profile';
import EditProfile from '../EditProfile';
import './App.css';

function App() {
    const handleLogout = () => {

    }

    return (
        <div className="body">
            <div className="body__container">
                <Routes>
                    <Route exact path="/" element={<Main />} />
                    <Route exact path="/movies" element={<Movies />} />
                    <Route exact path="/saved-movies" element={<SavedMovies />} />
                    <Route exact path="/profile" element={<Profile onLogout={handleLogout} />} />
                    <Route exact path="/edit-profile" element={<EditProfile />} />
                </Routes>
            </div>            
        </div>
    );
}

export default App;