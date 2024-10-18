import React from 'react';
import "../styles/globe.css";
 
const Globe = () => {
  return (
    <div className="pulse">
      <span style={{ "--i": 1 }}></span>
      <span style={{ "--i": 2 }}></span>
      <span style={{ "--i": 3 }}></span>
      <span style={{ "--i": 4 }}></span>
    </div>
  );
};

export default Globe;