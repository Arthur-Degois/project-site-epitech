import React from 'react';

const Profilcompany = ( { profil } ) => {

    const capitalizeFirstLetter = (string) => {
        return string.charAt(0).toUpperCase() + string.slice(1);
      };

    return (
        <div>
            <h2>Your Profil</h2>
        <div className="box">
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
        <div className="box">
          <h3>my request</h3>
        </div>
        </div>
    );
};

export default Profilcompany;