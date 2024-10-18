import React from 'react';

const Cardmatch = ( { match, profil }) => {

    console.log(profil);
    
    return (
        <div className='cardrequest green'>
            {profil.people_id ? <div><p>{match.nom}</p> <p>{match.title}</p></div> : <div><p>{match.prenom} pour le poste {match.title} à {match.location}</p></div>
            }
        </div>
    );
};

export default Cardmatch;