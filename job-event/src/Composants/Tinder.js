import React, { useEffect, useState } from "react";
import axios from "axios";
import "../styles/tinder.css";

const Tinder = () => {

    const [arrayAdd, SetArrayAdd] = useState([])

    useEffect(() => {
        axios.get("http://localhost:3000/advertisements").then((res) => SetArrayAdd(res.data)
        )
       
    })

    const [clickBL, SetClickBL] = useState(false);
    const [clickBR, SetClickBR] = useState(false);


  return (
    <div className="main container">
      <div className={clickBL ? "moveL": clickBR ? "moveR": "card"}>
        <div className="contenu">ce sera la</div>
        <div className="button">
          <button className="btn-cross" id="left" onClick={() => SetClickBL(true)}>&#10060;</button>
          <button className="btn-hearth" id="right" onClick={() => SetClickBR(true)}>&#9829;</button>
        </div>
      </div>
    </div>
  );
};

export default Tinder;
