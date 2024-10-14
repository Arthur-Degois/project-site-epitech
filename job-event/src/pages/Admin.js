import React, { useState } from 'react';
import Navigation from '../Composants/Navigation';
import "../styles/admin.css"
import Addprofil from '../Composants/Addprofil';
import Addcompagny from '../Composants/Addcompagny';
import Modify from '../Composants/Modify';
import Addadd from '../Composants/Addadd';

const Admin = ({ accesToken }) => {

    const [switchMenu,SetSwitchMenu] = useState("addP")

    return (
        <div className='admin'>
            <Navigation accesToken={accesToken}/>
            <h1>Page Admin</h1>
            <div className='tool'>
                <button onClick={() => SetSwitchMenu("addP")}>Add a profil</button>
                <button onClick={() => SetSwitchMenu("addC")}>Add a company</button>
                <button onClick={() => SetSwitchMenu("addadd")}>Add an Advertisement</button>
                <button onClick={() => SetSwitchMenu("modify")}>Modifiy</button>
                <button>Delete a profil</button>
                <button>Delete a company</button>
            </div>
            <div className="monitor">
                { (switchMenu === "addP" && <Addprofil />) 
                || (switchMenu === "addC" && <Addcompagny />)
                || (switchMenu === "addadd" && <Addadd />)
                || (switchMenu === "modify" && <Modify />)
                || <p>no research found</p>}
            </div>
        </div>
    );
};

export default Admin;