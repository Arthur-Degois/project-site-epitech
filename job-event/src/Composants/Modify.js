import axios from 'axios';
import React, { useEffect, useState } from 'react';

const Modify = () => {

    const [array,SetArray] = useState([])
    axios.defaults.headers.post['Access-Control-Allow-Origin'] = '*';

    async function fetch() {
        await axios.get({url:"http://localhost/phpmyadmin/index.php", withCredentials: false,}).then((res) => res.json()).then((data) => SetArray(data))
        console.log(array);
        console.log("ok");

        
    }


    return (
        <div>
            <button onClick={(e) => fetch()}></button>
        </div>
    );
};

export default Modify;