import React from 'react';

const Cardrequest = ( { add } ) => {
    return (
        <div className='card'>
            <p>{add.title}</p>
            <p>{add.description}</p>
        </div>
    );
};

export default Cardrequest;