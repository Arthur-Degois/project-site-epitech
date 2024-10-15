import React from 'react';
import axios from 'axios';

const Deletecardpeople = ( { people, deleteprofil } ) => {

    // const deleteprofil = () => {
    //     let confirmdelete = window.confirm("Voulez vous vraiment supprimer ce profil ?");
    //     if (confirmdelete) {
    //         axios.delete(`http://localhost:3000/people-suppression/${people.people_id}`)
    //     }  
    // }

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