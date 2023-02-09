import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LoginPage from './pages/LoginPage';
import MainPage from './pages/MainPage';
import KnowMore from './pages/KnowMorePage';
import {
    basePath,
    loginPath,
    knowmore,
    getintouch,
    signup
    // mainPath,
} from './urlConfig/pathURL.js';
import GetInTouch from './pages/GetInTouchPage';
import SignUpPage from './pages/SignUpPage';

function App() {
    return (
        <>
            <Router>
                <Routes>
                    <Route exact path={`${basePath}*`} element={<MainPage />} />
                    {/* <Route path={`${mainPath}*`} component={MainPage} /> */}
                    <Route exact path={loginPath} element={<LoginPage />} />
                    <Route exact path={knowmore} element={<KnowMore />} />
                    <Route exact path={getintouch} element={<GetInTouch />} />
                    <Route exact path={signup} element ={<SignUpPage/>} />
                </Routes>
            </Router>
        </>
    )
}

export default App