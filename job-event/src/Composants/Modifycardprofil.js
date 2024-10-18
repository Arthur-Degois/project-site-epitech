import React from 'react';

const Modifycardprofil = ( { people } ) => {
    return (
        <div className='profilpeople'>
            <p>{people.nom.toUpperCase()}</p>
            <p>{people.prenom}</p>
            <p>{people.email}</p>
            <button className='delete' >Modify</button>
        </div>
    );
};

export default Modifycardprofil;