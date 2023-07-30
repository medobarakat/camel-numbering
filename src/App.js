import './App.css';
import { Routes, Route } from "react-router-dom";
// components
import Navbar from './Components/Navbar/Navbar';
// pages
import Home from './Pages/Home/Home';
import Properity from './Pages/Properity/Properity';

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="prop" element={<Properity />} />
        {/* <Route path="dashboard" element={<Dashboard />} /> */}
        {/* <Route path="*" element={<NoMatch />} /> */}
      </Routes>
    </>
  );
}

export default App;
