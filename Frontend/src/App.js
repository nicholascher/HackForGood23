import React, {useEffect} from 'react';
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
import EventsPage from './pages/EventsPage';
import MoreEventsPage from './pages/MoreEventsPage';
import ContactsForm from './pages/ContactsForm';
import Cookies from 'universal-cookie';


window.apiUrl = "https://backend-image-e3plorozba-as.a.run.app";

function App() {
    const cookies = new Cookies();

    useEffect(() => {
        var token = cookies.get('token');
            if (token != null) {
                window.token = token;
                window.userId = cookies.get('userId');
            }
    }, []);
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