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
import ErrorActionContext from '../../contexts/ErrorActionContext';
import ProtectedRoute from './ProtectedRoute';
import { CurrentUserContext } from '../../contexts/CurrentUserContext';

function App() {
    const [showError, setShowError] = useState(false);
    const [errorMessage, setErrorMessage] = useState('hello');
    const [loggedIn, setLoggedIn] = React.useState(false);
    const [currentUser, setCurrentUser] = React.useState();

    const handleErrorClose = () => {
        setShowError(false);
    }

    const handleError = (err) => {
        setErrorMessage(err.message);
        setShowError(true);
    }

    const handleLogIn = () => {
        setLoggedIn(true);
    }

    const handleLogout = () => {

    }

    return (
        <ErrorActionContext.Provider value={handleError}>
            <CurrentUserContext.Provider value={currentUser}>
                <div className="body">
                    <div className="body__container">
                        <Routes>
                            <Route exact path="/" element={<Main loggedIn={loggedIn} />} />

                            <Route exact path="/movies" element={<ProtectedRoute loggedIn={loggedIn} component={Movies} />} />

                            <Route exact path="/saved-movies" element={<ProtectedRoute loggedIn={loggedIn} component={SavedMovies} />} />

                            <Route exact path="/profile" element={<ProtectedRoute loggedIn={loggedIn} onLogout={handleLogout} component={Profile} />} />
                            
                            <Route exact path="/edit-profile" element={<ProtectedRoute loggedIn={loggedIn} component={EditProfile} />}/>                                          
                            
                            <Route exact path="/signup" element={<Register onLoggedIn={handleLogIn} />} />
                            <Route exact path="/signin" element={<Login onLoggedIn={handleLogIn}/>} />
                            <Route path="*" element={<ErrorPage error={notFound} />} />
                        </Routes>
                    </div>
                    {showError && <ErrorModal message={errorMessage} onClose={handleErrorClose} />}
                </div>
            </CurrentUserContext.Provider>
        </ErrorActionContext.Provider>
    );
}

export default App;