import React from 'react';

const Modifycardcompany = ( { people} ) => {
    return (
        <div className='profilpeople'>
            <p>{people.nom.toUpperCase()}</p>
            <p>Siret: {people.siret}</p>
            <p>{people.email}</p>
            <button className='delete'>Modify</button>
        </div>
    );
};

export default Modifycardcompany;