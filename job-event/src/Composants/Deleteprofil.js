import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Deletecardpeople from './Deletecardpeople';

const Deleteprofil = () => {

    const [peopleArray,SetPeopleArray] = useState([]);
    const [namefilter, SetNameFilter] = useState("");
    const [lastnamefilter, SetLastNameFilter] = useState("");


    const deleteprofil = (people) => {
        let confirmdelete = window.confirm("Voulez vous vraiment supprimer ce profil ?");
        if (confirmdelete) {
            axios.delete(`http://localhost:3000/people-suppression/${people.people_id}`)
        }  
    }

    useEffect(() => {
        axios
          .get("http://localhost:3000/people")
          .then((res) => SetPeopleArray(res.data));
      }, [deleteprofil]);

    return (
        <div>
            <div className='search'>
            <input type="text" placeholder='search by name' value={namefilter} onChange={(e) => SetNameFilter(e.target.value)}/>
            <input type="text" placeholder='search by lastname' value={lastnamefilter} onChange={(e) => SetLastNameFilter(e.target.value)}/>
            </div>
            <div className="showprofil">
                {peopleArray.map((people, index) => <Deletecardpeople key={index} people={people} deleteprofil={deleteprofil}/>).filter((name) => name.props.people.prenom.toLowerCase().includes(namefilter.toLowerCase())).filter((lastname) => lastname.props.people.nom.toLowerCase().includes(lastnamefilter.toLowerCase()))}
            </div>
        </div>
    );
};

export default Deleteprofil;