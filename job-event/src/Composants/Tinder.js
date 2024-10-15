import React, { useEffect, useState } from "react";
import axios from "axios";
import "../styles/tinder.css";
import Card from "./Card";

const Tinder = ( { profil } )  => {

  const [arrayAdd, SetArrayAdd] = useState([]);
  const [index,SetIndex] = useState(0);

  useEffect(() => {
    axios
      .get("http://localhost:3000/advertisements")
      .then((res) => SetArrayAdd(res.data));
  }, []);

  console.log(index);

  return (
    <div className="main container">
      {arrayAdd.length === 0 ? <p>pas de nouvelle annonce</p> : arrayAdd.length === index ? <p>pas de nouvelle annonce</p> : <Card data={arrayAdd[index]} setindex={SetIndex}  index={index} profil={profil}/>}
    </div>
  );
};

export default Tinder;
