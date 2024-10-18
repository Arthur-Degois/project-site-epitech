import React from 'react';

const Deletecardcompany = ( { people, deleteprofil }) => {
    return (
        <div className='profilpeople'>
            <p>{people.nom.toUpperCase()}</p>
            <p>Siret: {people.siret}</p>
            <p>{people.email}</p>
            <button className='delete' onClick={() => deleteprofil(people)}>Supprimer</button>
        </div>
    );
};

export default Deletecardcompany;