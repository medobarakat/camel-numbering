import React from 'react'
import { useSelector } from 'react-redux';
import Home from './Home/Home';
import Properity from './Properity/Properity';
import SingleProp from './SingleProp/SingleProp';
import Profile from './Profile/Profile';
import Transactions from './Transactions/Transactions';
import Service from './Services/Service';
import SingleServices from './SingleServices/SingleServices';
import ContactUs from './ContactUs/ContactUs';
import AboutUs from './AboutUs/AboutUs';
import Login from './Login/Login';
import Signup from './Signup/Signup';
import Forgetpassword from './Forgetpassword/Forgetpassword';
import Navbar from '../Components/Navbar/Navbar';
import { Route, Routes } from 'react-router-dom';

const Paths = () => {
    const isAuthenticated = useSelector(state => state.auth.isLogin);

    return (
        <>
            {
                isAuthenticated ? (
                    <>
                        <Navbar />
                        <Routes>
                            <Route path="/" element={<Home />} />
                            <Route path="prop" element={<Properity />} />
                            <Route path="prop/:id" element={<SingleProp />} />
                            <Route path="profile" element={<Profile />} />
                            <Route path="transactions" element={<Transactions />} />
                            <Route path="services" element={<Service />} />
                            <Route path="services/:id" element={<SingleServices />} />
                            <Route path="contactus" element={<ContactUs />} />
                            <Route path="aboutus" element={<AboutUs />} />
                            <Route path="login" element={<Login />} />
                            <Route path="signup" element={<Signup />} />
                            <Route path="forgetpassword" element={<Forgetpassword />} />
                            <Route path="*" element={<Home />} />
                        </Routes>
                    </>
                ) : (
                    <>
                        <Routes>
                            <Route path="login" element={<Login />} />
                            <Route path="signup" element={<Signup />} />
                            <Route path="forgetpassword" element={<Forgetpassword />} />
                            <Route path="*" element={<Login />} />
                        </Routes>
                    </>
                )
            }

        </>
    )
}

export default Paths