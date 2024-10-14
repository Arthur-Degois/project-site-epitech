import React from "react";
import Navigation from "../Composants/Navigation";
import "../styles/profil.css";

const Profil = ({ accesToken }) => {
  const profil = JSON.parse(accesToken);

  const capitalizeFirstLetter = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  };

  return (
    <div className="profil">
      <Navigation accesToken={accesToken} />
      <h2>Your Profil</h2>
      <div className="box">
        <h3>personal informations</h3>
        <div className="info">
          <div className="img">
            <img src="" alt="" />
          </div>
          <div className="data">
            <p>Name:</p>
            <p>{capitalizeFirstLetter(profil.prenom)}</p>
          </div>
          <div className="data">
            <p>Lastname:</p>
            <p>{profil.nom.toUpperCase()}</p>
          </div>
          <div className="data">
            <p>phone number:</p>
            <p>{profil.tel}</p>
          </div>
          <div className="data">
            <p>birth:</p>
            <p>{profil.naissance}</p>
          </div>
        </div>
      </div>
      <div className="box">
        <h3>my request</h3>
      </div>
    </div>
  );
};

export default Profil;
