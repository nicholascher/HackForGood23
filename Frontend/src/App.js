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
    signup,
    eventspage,
    moreevents
    // mainPath,
} from './urlConfig/pathURL.js';
import GetInTouch from './pages/GetInTouchPage';
import SignUpPage from './pages/SignUpPage';
import Cookies from 'universal-cookie';
import axios from 'axios';
import EventsPage from './pages/EventsPage';
import MoreEventsPage from './pages/MoreEventsPage';
import ContactsForm from './pages/ContactsForm';

window.apiUrl = "http://localhost:5233";

function App() {
    const cookies = new Cookies();

    window.addEventListener("beforeunload", (ev) => {
        var logout = localStorage.getItem("autoLogout");
        var jwtToken = cookies.get('token');
        if (logout === "n"){
            axios.post(window.apiUrl + "/logout", {
                headers: {
                Authorization: "Bearer " + jwtToken
                },
                token: jwtToken,
            },
            
            )
            cookies.remove('token');
            localStorage.removeItem('name');
            localStorage.removeItem('autoLogout');
        }
    })

    return (
        <>
            <Router>
                <Routes>
                    <Route exact path={`${basePath}*`} element={<MainPage />} />
                    {/* <Route path={`${mainPath}*`} component={MainPage} /> */}
                    <Route exact path={eventspage} element={<EventsPage />} />
                    <Route exact path={loginPath} element={<LoginPage />} />
                    <Route exact path={knowmore} element={<KnowMore />} />
                    <Route exact path={getintouch} element={<ContactsForm />} />
                    <Route exact path={signup} element ={<SignUpPage/>} />
                    <Route exact path={moreevents} element ={<MoreEventsPage/>} />
                </Routes>
            </Router>
        </>
    )
}

export default App