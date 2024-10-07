import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "../styles/navigation.css";

const Navigation = () => {
  const [connexion, SetConnexion] = useState(false);
  return (
    <div id="navigation">
      <div className="flex">
        <img src="./img/Jobz1.webp" alt="image di logo" />
        <NavLink to="/">
          <h2>Accueil</h2>
        </NavLink>
      </div>
      <input type="text" placeholder="recherche" />
      {connexion ? (
        <NavLink to="/profil">
          <h2>Votre Profil</h2>
        </NavLink>
      ) : (
        <NavLink to="/connexion">
          <h2>Connexion</h2>
        </NavLink>
      )}
    </div>
  );
};

export default Navigation;
