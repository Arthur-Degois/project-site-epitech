import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Deletecardcompany from './Deletecardcompany';

const Deletecompany = () => {

        const [companyArray,SetCompanyArray] = useState([]);


    const deleteprofil = (people) => {
        let confirmdelete = window.confirm("Voulez vous vraiment supprimer ce profil ?");
        if (confirmdelete) {
            axios.delete(`http://localhost:3000/company-suppression/${people.company_id}`)
        }  
    }

    useEffect(() => {
        axios
          .get("http://localhost:3000/company")
          .then((res) => SetCompanyArray(res.data));
      }, [deleteprofil]);

    return (
        <div>
            <div className='search'>
            <input type="text" placeholder='search by name' />
            </div>
            <div className="showprofil">
                {companyArray.map((people, index) => <Deletecardcompany key={index} people={people} deleteprofil={deleteprofil}/>)}
            </div>
        </div>
    );
};


export default Deletecompany;