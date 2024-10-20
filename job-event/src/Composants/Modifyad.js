import React, { useState, useEffect} from 'react';
import axios from 'axios';
import Modifycardad from './Modifycardad';

const Modifyad = () => {

    const [addarray,SetAddArray] = useState([]);

    useEffect(() => {
        axios
          .get("http://localhost:3000/advertisements")
          .then((res) => SetAddArray(res.data));
      }, []);

    return (
        <div>
            <div className="showprofil">
                {addarray.map((people, index) => <Modifycardad key={index} people={people} />)}
            </div>
        </div>
    );
};

export default Modifyad;