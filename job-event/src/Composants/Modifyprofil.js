import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Modifycardprofil from './Modifycardprofil';

const Modifyprofil = () => {

    const [peopleArray,SetPeopleArray] = useState([]);
    const [namefilter, SetNameFilter] = useState("");
    const [lastnamefilter, SetLastNameFilter] = useState("");

    useEffect(() => {
        axios
          .get("http://localhost:3000/people")
          .then((res) => SetPeopleArray(res.data));
      }, []);


    return (
        <div>
            <div className='search'>
            <input type="text" placeholder='search by name' value={namefilter} onChange={(e) => SetNameFilter(e.target.value)}/>
            <input type="text" placeholder='search by lastname' value={lastnamefilter} onChange={(e) => SetLastNameFilter(e.target.value)}/>
            </div>
            <div className="showprofil">
                {peopleArray.map((people, index) => <Modifycardprofil key={index} people={people} />).filter((name) => name.props.people.prenom.toLowerCase().includes(namefilter.toLowerCase())).filter((lastname) => lastname.props.people.nom.toLowerCase().includes(lastnamefilter.toLowerCase()))}
            </div>
        </div>
    );
};

export default Modifyprofil;