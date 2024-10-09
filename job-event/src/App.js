import { BrowserRouter, Routes, Route, useParams } from 'react-router-dom';
import Home from './pages/Home';
import Admin from './pages/Admin';
import Connexion from './pages/Connexion';
import "./styles/app.css"
import Inscription from './pages/Inscription';
import Profil from './pages/Profil';

const App = () => {

  const accesToken = localStorage.getItem("accesToken");
  console.log(accesToken);
  
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home accesToken={accesToken} />} />
        <Route path="/connexion" element={<Connexion accesToken={accesToken}/>} />
        <Route path="/inscription" element={<Inscription accesToken={accesToken}/>} />
        <Route path="/profil" element={<Profil accesToken={accesToken}/>} />
        <Route path="/admin" element={<Admin accesToken={accesToken}/>} />
        <Route path="*" element={<Home accesToken={accesToken}/>} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;