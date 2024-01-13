import React from 'react';
import Login from './Login';
import Logout from './Logout';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function AuthRoutes() {
    return (
        <div>
            <Router>
                <Routes>
                    <Route path='/' element={<Login />} />
                    <Route path='/logout' element={<Logout />} />
                </Routes>
            </Router>
        </div>
    )
}

export default AuthRoutes