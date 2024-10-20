import React from 'react';
import '../styles/AboutUs.css';
import Navigation from '../Composants/Navigation';
 
const AboutUs = ( { accesToken } ) => {
  return (
    <div>
       
    <Navigation accesToken={accesToken} />
<div className='BGcorner'></div>
    <div className="about-container">
      <h1>About Us</h1>
      <section className="mission section">
        <h2>Our mission</h2>
      </section>
 
      <section className="team section">
        <h2>Our Team</h2>
      </section>
 
      <section className="contact section">
        <h2>Contact Us</h2>
        <p>
        contact@entreprise.com.
        </p>
      </section>
    </div>
    </div>
  );
}
 
export default AboutUs;