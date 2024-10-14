import axios from 'axios';
import React, { useEffect, useState } from 'react';

const Modify = () => {

    const [array,SetArray] = useState([])
    
    async function fetch() {
        const res = await axios.get(`http://localhost:3000/people-id/1`)
        console.log(res.data);
        SetArray(res.data)  
    }


    return (
        <div>
            <button onClick={(e) => fetch()}></button>
        </div>
    );
};

export default Modify;