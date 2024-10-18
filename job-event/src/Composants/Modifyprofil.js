import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Modifycardprofil from './Modifycardprofil';

const Modifyprofil = () => {

    const [peopleArray,SetPeopleArray] = useState([]);

    useEffect(() => {
        axios
          .get("http://localhost:3000/people")
          .then((res) => SetPeopleArray(res.data));
      }, []);


    return (
        <div>
            <div className="showprofil">
                {peopleArray.map((people, index) => <Modifycardprofil key={index} people={people} />)}
            </div>
        </div>
    );
};

export default Modifyprofil;