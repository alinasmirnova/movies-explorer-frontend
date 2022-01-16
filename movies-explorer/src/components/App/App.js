import React, { useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import Main from '../Main';
import Movies from '../Movies';
import SavedMovies from '../SavedMovies';
import Profile from '../Profile/Profile';
import EditProfile from '../EditProfile';
import Register from '../Register';
import Login from '../Login';
import ErrorPage from '../ErrorPage';
import { notFound } from '../../utils/consts';
import ErrorModal from '../ErrorModal';
import './App.css';

function App() {
    const [showError, setShowError] = useState(false);
    const [errorMessage, setErrorMessage] = useState('hello');

    const handleErrorClose = () => {
        setShowError(false);
    }

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
                    <Route exact path="/signup" element={<Register />} />
                    <Route exact path="/signin" element={<Login />} />
                    <Route path="*" element={<ErrorPage error={notFound}/>} />
                </Routes>
            </div> 
            { showError && <ErrorModal message={errorMessage} onClose={handleErrorClose}/>}           
        </div>
    );
}

export default App;