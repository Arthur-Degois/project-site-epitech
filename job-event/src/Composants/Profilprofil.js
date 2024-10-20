import React, { useEffect, useState } from "react";
import axios from "axios";
import Cardrequest from "./Cardrequest";
import Cardmatch from "./Cardmatch";

const Profilprofil = ({ profil }) => {
  const [adArray, SetAddArray] = useState([]);
  const [matchArray, SetMatchArray] = useState([]);

  const capitalizeFirstLetter = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  };

  useEffect(() => {
    axios
      .get(`http://localhost:3000/adprofil/${profil.people_id}`)
      .then((res) => {
        SetAddArray(res.data);
      });
  }, []);

  useEffect(() => {
    axios
      .get(`http://localhost:3000/match-people/${profil.people_id}`)
      .then((res) => {
        SetMatchArray(res.data);
        
      });
  }, []);

  return (
    <div>
      <h3>Your Profil</h3>
      <div className="container">
        <div className="box leftbox">
          <h3>personal informations</h3>
          <div className="info">
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
              <p>{profil.naissance ? profil.naissance.split("T")[0] : "pas renseigné" } </p>
            </div>
          </div>
        </div>
        <div className="box rightbox">
          <h3>my request</h3>
          <div className="globalmatch">
            <div className="halfwidth">
          {adArray.map((add, index) => (
            <Cardrequest key={index} add={add} />
          ))}
            </div>
            <div className="halfwidth">
          {matchArray.map((match, index) => <Cardmatch key={index} match={match} profil={profil}/>
          )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profilprofil;
