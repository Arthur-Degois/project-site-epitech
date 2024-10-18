import React, { useState } from "react";
import axios from "axios";

const Card = ({ data, profil, index, count, setcount }) => {
  let donnee = data;
  const [noneDisplay,SetNoneDisplay] = useState(false);
  
    
  const [clickBL, SetClickBL] = useState(false);
  const [clickBR, SetClickBR] = useState(false);

  const changeCardL = () => {
    SetClickBL(true);
    axios.post("http://localhost:3000/unlike", {
      people_id: profil.people_id,
      advertisement_id: donnee.advertisement_id
    })
    setTimeout(() => {
      SetNoneDisplay(true);
      setcount(count++)
      setcount(count++)
    }, 1000);
  };

  const changeCardR = () => {
    SetClickBR(true);
    axios.post("http://localhost:3000/like", {
      people_id: profil.people_id,
      advertisement_id: donnee.advertisement_id
    })
    setTimeout(() => {
      SetNoneDisplay(true);
      setcount(count++)
      setcount(count++)
    }, 1000);
  };

  return (
    <div className={noneDisplay ? "none" : clickBL ? "moveL" : clickBR ? "moveR" : "card"} id={index}>
      <div className="contenu">
        <h3>{donnee.title}</h3>
        <p>Company : {donnee.company_name}</p>
        <p>{donnee.contract_type}</p>
        <p>Location : {donnee.location}</p>
        <p>Salary : {donnee.salary} euros/month</p>
      </div>
      <div className="button">
        <button className="btn-cross" id="left" onClick={changeCardL}>
          &#10060;
        </button>
        <button className="btn-hearth" id="right" onClick={changeCardR}>
          &#9829;
        </button>
      </div>
    </div>
  );
};

export default Card;
