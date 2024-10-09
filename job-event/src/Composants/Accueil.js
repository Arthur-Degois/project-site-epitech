import React from 'react';
import { NavLink } from 'react-router-dom';

const Accueuil = () => {
    return (
        <div className="main">
                <div>
                   <h1>
                    Swipe Your Job
                   </h1>
                   <NavLink to="/inscription">
                   <button>Create an Account</button>
                   </NavLink>
                </div>
            </div>
    );
};

export default Accueuil;