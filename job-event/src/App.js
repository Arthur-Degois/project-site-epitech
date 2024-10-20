import { BrowserRouter, Routes, Route } from 'react-router-dom';
import React from 'react';
import Home from './pages/Home';
import Admin from './pages/Admin';
import Connexion from './pages/Connexion';
import "./styles/app.css"
import Inscription from './pages/Inscription';
import Profil from './pages/Profil';
import AboutUs from './pages/Aboutus';

const App = () => {

  const accesToken = localStorage.getItem("accesToken");
  const adminToken = localStorage.getItem("adminToken");
  
  
  
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home accesToken={accesToken} />} />
        <Route path="/connexion" element={<Connexion accesToken={accesToken} />} />
        <Route path="/inscription" element={<Inscription accesToken={accesToken}/>} />
        <Route path="/profil" element={<Profil accesToken={accesToken} />} />
        <Route path="/aboutus" element={<AboutUs accesToken={accesToken} />} />
        <Route path="/admin" element={<Admin accesToken={accesToken} admintoken={adminToken}/>} />
        <Route path="*" element={<Home accesToken={accesToken}/>} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;