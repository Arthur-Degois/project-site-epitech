import React from 'react';

const Modifycardad = ( { people } ) => {
    return (
        <div className='profilpeople'>
            <p>{people.title.toUpperCase()}</p>
            <p>Company: {people.company_name}</p>
            <p>{people.salary}</p>
            <button className='delete'>Modify</button>
        </div>
    );
};

export default Modifycardad;