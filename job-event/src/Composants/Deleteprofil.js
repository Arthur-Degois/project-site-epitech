import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Deletecardpeople from './Deletecardpeople';

const Deleteprofil = () => {

    const [peopleArray,SetPeopleArray] = useState([]);


    const deleteprofil = () => {
        let confirmdelete = window.confirm("Voulez vous vraiment supprimer ce profil ?");
        if (confirmdelete) {
            axios.delete(`http://localhost:3000/people-suppression/${people.people_id}`)
        }  
    }

    useEffect(() => {
        axios
          .get("http://localhost:3000/people")
          .then((res) => SetPeopleArray(res.data));
      }, []);

    return (
        <div>
            <div className='search'>
            <input type="text" placeholder='search by name' />
            <input type="text" placeholder='search by lastname' />
            </div>
            <div className="showprofil">
                {peopleArray.map((people, index) => <Deletecardpeople key={index} people={people} />)}
            </div>
        </div>
    );
};

export default Deleteprofil;