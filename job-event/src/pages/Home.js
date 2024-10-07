import React from 'react';
import Navigation from '../Composants/Navigation';
import "../styles/home.css";

const Home = () => {
    return (
        <div>
            <Navigation />
            <div className="main">
                <div>
                   <h1>
                    Swipe Your Job
                   </h1>
                   <button>Create an Account</button>
                </div>
            </div>
        </div>
    );
};

export default Home;