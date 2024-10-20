import React, { useState, useEffect } from 'react';
import Cardmatch from './Cardmatch';
import axios from 'axios';

const Profilcompany = ( { profil } ) => {

    const [matchArray, SetMatchArray] = useState([]);

    useEffect(() => {
      axios
        .get(`http://localhost:3000/match-company/${profil.company_id}`)
        .then((res) => {
          SetMatchArray(res.data);
          
        });
    }, []);

    const capitalizeFirstLetter = (string) => {
        return string.charAt(0).toUpperCase() + string.slice(1);
      };

    return (
        <div>
            <h2>Your Profil</h2>
        <div className="box2">
          <h3>personal informations</h3>
          <div className="info">
            <div className="data">
              <p>Name:</p>
              <p>{capitalizeFirstLetter(profil.nom)}</p>
            </div>
            <div className="data">
              <p>Siret:</p>
              <p>{profil.siret.toUpperCase()}</p>
            </div>
            <div className="data">
              <p>Street:</p>
              <p>{profil.rue}</p>
            </div>
            <div className="data">
              <p>City:</p>
              <p>{profil.ville}</p>
            </div>
          </div>
        </div>
        <div className="box2">
          <h3>my request</h3>
          {matchArray.map((match, index) => <Cardmatch key={index} match={match} profil={profil}/>
          )}
        </div>
        </div>
    );
};

export default Profilcompany;