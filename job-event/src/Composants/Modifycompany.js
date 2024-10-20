import React, { useEffect, useState} from 'react';
import axios from 'axios';
import Modifycardcompany from './Modifycardcompany';

const Modifycompany = () => {

    const [companyArray,SetCompanyArray] = useState([]);
    const [namefilter, SetNameFilter] = useState("");

    useEffect(() => {
        axios
          .get("http://localhost:3000/company")
          .then((res) => SetCompanyArray(res.data));
      }, []);

    return (
        <div>
            <div className='search'>
            <input type="text" placeholder='search by name' value={namefilter} onChange={(e) => SetNameFilter(e.target.value)}/>
            </div>
            <div className="showprofil">
                {companyArray.map((people, index) => <Modifycardcompany key={index} people={people} />).filter((name) => name.props.people.nom.toLowerCase().includes(namefilter.toLowerCase()))}
            </div>
        </div>
    );
};

export default Modifycompany;