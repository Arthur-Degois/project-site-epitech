import React, { useState} from 'react';
import axios from 'axios';

const Cardprofilmatch = ( { data, setindex, index, profil } ) => {

  let donnee = data;
  console.log(donnee);

  const [noneDisplay,SetNoneDisplay] = useState(false);

  const [clickBL, SetClickBL] = useState(false);
  const [clickBR, SetClickBR] = useState(false);

  const changeCardL = () => {
    SetClickBL(true);
    setTimeout(() => {
      SetNoneDisplay(true);
      setindex(index++);
      setindex(index++);
    }, 1000);
  };

  const changeCardR = () => {
    SetClickBR(true);
    axios.post("http://localhost:3000/match-fill", {
      people_id: donnee.people_id,
      advertisement_id: donnee.advertisement_id,
      company_id: profil.company_id
    })
    setTimeout(() => {
      SetNoneDisplay(true);
      setindex(index++);
      setindex(index++);
    }, 1000);
  };

    return (
        <div className={noneDisplay ? "none" : clickBL ? "moveL" : clickBR ? "moveR" : "card"}>
      <div className="contenu">
        <h3>?</h3>
        <p>Nom : {donnee.nom}</p>
        <p>Lastname: {donnee.prenom}</p>
        <p>email : {donnee.email}</p>
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

export default Cardprofilmatch;