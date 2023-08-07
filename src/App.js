import './App.css';
import { BrowserRouter } from "react-router-dom";
import { Routes, Route } from "react-router-dom";
// components
import Navbar from './Components/Navbar/Navbar';
// pages
import Home from './Pages/Home/Home';
import Properity from './Pages/Properity/Properity';
import SingleProp from './Pages/SingleProp/SingleProp';
import Profile from './Pages/Profile/Profile';
import Transactions from './Pages/Transactions/Transactions';
import Service from './Pages/Services/Service';
import SingleServices from './Pages/SingleServices/SingleServices';
import ContactUs from './Pages/ContactUs/ContactUs';
import AboutUs from './Pages/AboutUs/AboutUs';
import Login from './Pages/Login/Login';

function App() {
  return (
    <>
    <BrowserRouter>
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

        {/* <Route path="dashboard" element={<Dashboard />} /> */}
        {/* <Route path="*" element={<NoMatch />} /> */}
      </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
