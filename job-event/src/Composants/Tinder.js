import React, { useEffect, useState } from "react";
import axios from "axios";
import "../styles/tinder.css";
import Card from "./Card";
import Cardprofilmatch from "./cardprofilmatch";
import Globe from "./Globe";
import Filtercard from "./Filtercard";
import Detailscard from "./Detailscard";

const Tinder = ( { profil } )  => {

  let profiluser = JSON.parse(profil)


  const [filterjob,SetFilterJob] = useState("");
  const [filtercity,SetFilterCity] = useState("");
  const [filtercontract,SetFilterContract] = useState("");

  const [count,SetCount] = useState(0);
  

  const [arrayCard, SetArrayCard] = useState([]);
  const [arraycardprofil,SetArrayCardProfil] = useState([]);

  const [index,SetIndex] = useState(0);


  
  useEffect(() => {
    axios
    .get(`http://localhost:3000/advertisement-selected/${profiluser.people_id ? profiluser.people_id : 2}`)
    .then((res) => SetArrayCard(res.data));
  }, []);
  
  
  useEffect(() => {
    axios
    .get(`http://localhost:3000/advertisement-wholiked/${profiluser.company_id ? profiluser.company_id : 1}`)
    .then((res) => SetArrayCardProfil(res.data));
  }, []);
  

  return (
    <div className="main container2">
      { profiluser.people_id ? <Filtercard job={SetFilterJob} city={SetFilterCity} contract={SetFilterContract}/> : null}
      { profiluser.people_id ? <Detailscard /> : null }
      <Globe /> 
      {(arrayCard.length === 0 || arraycardprofil.length === 0) ? null : profiluser.people_id ? arrayCard.map((card, index) => <Card key={index} index={index} data={card} profil={profiluser} count={count} setcount={SetCount}/>).filter((card) => card.props.data.location.toLowerCase().includes(filtercity)).filter((card) => card.props.data.contract_type.toUpperCase().includes(filtercontract)).filter((card) => card.props.data.title.toLowerCase().includes(filterjob)) : <Cardprofilmatch data={arraycardprofil[index]} setindex={SetIndex}  index={index} profil={profiluser}/> }
    </div>
  );
};

export default Tinder;
