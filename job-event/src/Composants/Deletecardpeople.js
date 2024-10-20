import React from 'react';
import axios from 'axios';

const Deletecardpeople = ( { people, deleteprofil } ) => {


    return (
        <div className='profilpeople'>
            <p>{people.nom.toUpperCase()}</p>
            <p>{people.prenom}</p>
            <p>{people.email}</p>
            <button className='delete' onClick={() => deleteprofil(people)}>Supprimer</button>
        </div>
    );
};

export default Deletecardpeople;