import React, { useState } from 'react';
import Navigation from '../Composants/Navigation';
import "../styles/admin.css"
import axios from 'axios';
import Addprofil from '../Composants/Addprofil';
import Addcompagny from '../Composants/Addcompagny';
import Modify from '../Composants/Modify';

const Admin = ({ accesToken }) => {
    const [arrayData,SetArrayData] = useState([])
    const [switchMenu,SetSwitchMenu] = useState("addP")

    const fetchData = () => {
        axios.get("../").then((res) => res.json())
    }


    return (
        <div className='admin'>
            <Navigation accesToken={accesToken}/>
            <h1>Page Admin</h1>
            <div className='tool'>
                <button onClick={() => SetSwitchMenu("addP")}>Add a profil</button>
                <button onClick={() => SetSwitchMenu("addC")}>Add a compagny</button>
                <button onClick={() => SetSwitchMenu("modify")}>Modifiy</button>
                <button>Delete a profil</button>
                <button>Delete a compagny</button>
            </div>
            <div className="monitor">
                { (switchMenu === "addP" && <Addprofil />) 
                || (switchMenu === "addC" && <Addcompagny />)
                || (switchMenu === "modify" && <Modify />)
                || <p>no research found</p>}
            </div>
        </div>
    );
};

export default Admin;