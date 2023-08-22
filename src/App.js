import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
// Components.
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Page404 from './components/Page404';
import Dashboard from './components/Dashboard';
import Profile from './components/Profile';
import Login from './components/Login';

function App() {

    const [user, setUser] = useState(false);
    // useEffect(() => {
    //     setTimeout(() => {
    //         setUser(true)
    //     }, [5000])
    // }, [user])

    return (
        <Router>
            <Navbar user={user} setUser={setUser} />
            <Routes>
                <Route path="/" element={
                    <ProtectedRoute user={user} route={<Dashboard />} navigateTo='/login' />}
                />
                <Route path="/profile" element={
                    <ProtectedRoute user={user} route={<Profile />} navigateTo='/login' />}
                />
                <Route path="/login" element={
                    <ProtectedRoute user={!user} route={<Login />} navigateTo='/' />}
                />
                <Route path="*" element={<Page404 />} />
            </Routes>
            <Footer />
        </Router>
    );
}

export default App;

// Protected-Route-Component.
function ProtectedRoute({ user, route, navigateTo }) {
    return user ? route : <Navigate to={navigateTo} replace={true} />
};