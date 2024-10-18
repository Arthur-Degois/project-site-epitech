import React from 'react';
import { NavLink } from 'react-router-dom';
import Globe2 from './Globe2';

const Accueuil = () => {
    return (
        <div className="main">
            <Globe2 />
                <div>
                   <h1>
                    Swipe Your Job
                   </h1>
                   <NavLink to="/inscription">
                   <button className='subscribe-btn'>Create an Account</button>
                   </NavLink>
                </div>
            </div>
    );
};

export default Accueuil;