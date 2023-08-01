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

 
        {/* <Route path="dashboard" element={<Dashboard />} /> */}
        {/* <Route path="*" element={<NoMatch />} /> */}
      </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
