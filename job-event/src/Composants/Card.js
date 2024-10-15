import React, { useState } from "react";
import axios from "axios";

const Card = ({ data, setindex, index, profil }) => {
  let donnee = data;
  let profiluser = JSON.parse(profil)
    console.log(donnee);
    
  const [clickBL, SetClickBL] = useState(false);
  const [clickBR, SetClickBR] = useState(false);

  const changeCardL = () => {
    SetClickBL(true);
    setTimeout(() => {
      SetClickBL(false);
      setindex(index++);
      setindex(index++);
    }, 1000);
  };

  const changeCardR = () => {
    SetClickBR(true);
    axios.post("http://localhost:3000/like", {
      people_id: profiluser.people_id,
      advertisement_id: donnee.advertisement_id
    })
    setTimeout(() => {
      SetClickBR(false);
      setindex(index++);
      setindex(index++);
    }, 1000);
  };

  return (
    <div className={clickBL ? "moveL" : clickBR ? "moveR" : "card"}>
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
