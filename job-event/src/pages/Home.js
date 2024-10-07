import React from 'react';
import Navigation from '../Composants/Navigation';
import "../styles/home.css";
import { NavLink } from 'react-router-dom';

const Home = () => {
    return (
        <div>
            <Navigation />
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
        </div>
    );
};

export default Home;