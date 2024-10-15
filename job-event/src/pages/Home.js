import React, { useState } from 'react';
import Navigation from '../Composants/Navigation';
import "../styles/home.css";
import Accueuil from '../Composants/Accueil';
import Tinder from '../Composants/Tinder';

const Home = ({ accesToken }) => {

    return (
        <div>
            <Navigation accesToken={accesToken}/>
            {accesToken ?<Tinder profil={accesToken}/> : <Accueuil />
            }
        </div>
    );
};

export default Home;