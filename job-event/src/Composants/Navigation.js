import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "../styles/navigation.css";

const Navigation = ({ accesToken}) => {

  const logOut = () => {
    localStorage.removeItem("accesToken");
    let path = window.location.pathname;
    let location = window.location.href;
    location = location.replace(path, "/home");
    window.location.href = location;
  }

  return (
    <div id="navigation">
      <div className="flex">
        <img src="./img/Jobz1.webp" alt="image di logo" />
        <NavLink to="/">
          <h2>Home</h2>
        </NavLink>
      </div>
      <input type="text" placeholder="recherche" />
      {accesToken ? (
        <div className="log">
        <p onClick={(e) => logOut()}>log out</p>
        <NavLink to="/profil">
          <h2>Profil</h2>
        </NavLink>
        </div>
      ) : (
        <NavLink to="/connexion">
          <h2>Connexion</h2>
        </NavLink>
      )}
    </div>
  );
};

export default Navigation;
