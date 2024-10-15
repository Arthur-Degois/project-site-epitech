import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Cardrequest from './Cardrequest';

const Profilprofil = ( { profil }) => {

    const [adArray,SetAddArray] = useState([]);

    const capitalizeFirstLetter = (string) => {
        return string.charAt(0).toUpperCase() + string.slice(1);
      };

    useEffect(() => {
      axios.get(`http://localhost:3000/adprofil/${profil.people_id}`).then((res) => {
        SetAddArray(res.data);
        
      })
    }, [])

    return (
        <div>
        <h2>Your Profil</h2>
        <div className="box">
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
              <p>{profil.naissance}</p>
            </div>
          </div>
        </div>
        <div className="box">
          <h3>my request</h3>
          {adArray.map((add, index) => <Cardrequest key={index} add={add}/>)}
        </div>
        </div>
    );
};

export default Profilprofil;