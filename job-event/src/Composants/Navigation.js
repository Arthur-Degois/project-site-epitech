import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import "../styles/navigation.css";
import '../styles/buttonstyles.css';
 
 
 
const Navigation = ({ accesToken}) => {
 
  const logOut = () => {
    localStorage.removeItem("accesToken");
    let path = window.location.pathname;
    let location = window.location.href;
    location = location.replace(path, "/home");
    window.location.href = location;
  }
 
  useEffect(() => {
    const buttons = document.querySelectorAll('.btnAnim');
    buttons.forEach(button => {
        const text = button.textContent;
        button.innerHTML = '';
 
        for (let char of text) {
            const span = document.createElement('span');
            span.textContent = char === ' ' ? '\u00A0' : char;
            button.appendChild(span);
        }
 
        const spans = button.querySelectorAll('span');
 
        button.addEventListener('mouseenter', () => {
            spans.forEach((span, index) => {
                setTimeout(() => {
                    span.classList.add('hover');
                }, index * 50);
            });
        });
 
        button.addEventListener('mouseleave', () => {
            spans.forEach((span, index) => {
                setTimeout(() => {
                    span.classList.remove('hover');
                }, index * 50);
            });
        });
    });
}, []);
 
 
 
 
  return (
    <div id="navigation">
      <div className="flex">
        <NavLink to="/">
        <button className="btnAnim" style={{ '--clr': '#999999' }}>home</button>
        </NavLink>
        <NavLink to="/AboutUs">
        <button className="btnAnim" style={{ '--clr': '#007bff' }}>about us</button>
        </NavLink>
      </div>
     
      {accesToken ? (
        <div className="log">
        <p onClick={(e) => logOut()} >log out</p>
        <NavLink to="/profil">
        <button className="btnAnim" style={{ '--clr': '#ff0055' }}>Profil</button>
        </NavLink>
        </div>
      ) : (
        <NavLink to="/connexion">
          <button className="btnAnim" style={{ '--clr': '#ff0055' }}>connexion</button>
        </NavLink>
      )}
    </div>
  );
};
 
export default Navigation;
