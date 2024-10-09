import React from 'react';
import Navigation from '../Composants/Navigation';
import "../styles/profil.css"

const Profil = ({ accesToken }) => {
    return (
        <div className='profil'>
            <Navigation accesToken={accesToken}/>
            <h2>Your Profil</h2>
            <div className="box">
                <h3>personal info</h3>
                <p>Arthur</p>
                <p>Degois</p>
            </div>
            <div className="box">
                <h3>my request</h3>
            </div>
        </div>
    );
};

export default Profil;