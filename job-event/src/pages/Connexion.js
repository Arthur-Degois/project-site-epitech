import React from 'react';
import Navigation from '../Composants/Navigation';
import Formulaire from '../Composants/Formulaire';
import "../styles/connexion.css"

const Connexion = ({ accesToken }) => {
    return (
        <div>
            <div className="BGcorner"></div>
            <Navigation accesToken={accesToken}/>
            <Formulaire />
        </div>
    );
};

export default Connexion;