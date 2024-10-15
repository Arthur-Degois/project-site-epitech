import React from "react";
import Navigation from "../Composants/Navigation";
import "../styles/profil.css";
import Profilprofil from "../Composants/Profilprofil";
import Profilcompany from "../Composants/Profilcompany";

const Profil = ({ accesToken }) => {
  const profil = JSON.parse(accesToken);


  return (
    <div className="profil">
      <Navigation accesToken={accesToken} />
      {
        profil.people_id ? <Profilprofil profil={profil}/> : <Profilcompany  profil={profil}/>

      }
    </div>
  );
};

export default Profil;
