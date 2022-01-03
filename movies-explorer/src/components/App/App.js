import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Main from '../Main';

function App() {
    return (
        <div className="body">
            <Routes>
                <Route exact path="/">
                    <Main />
                </Route>
            </Routes>
        </div>
    );
}

export default App;