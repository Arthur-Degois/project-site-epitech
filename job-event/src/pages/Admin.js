import React, { useState } from 'react';
import Navigation from '../Composants/Navigation';
import "../styles/admin.css"
import Addprofil from '../Composants/Addprofil';
import Addcompagny from '../Composants/Addcompagny';
import Modify from '../Composants/Modify';
import Addadd from '../Composants/Addadd';
import Deleteprofil from '../Composants/Deleteprofil';
import Deletecompany from '../Composants/Deletecompany';

const Admin = ({ accesToken, admintoken }) => {

    const [switchMenu,SetSwitchMenu] = useState("addP")

    return (
        <div className='admin'>
            {admintoken ?  
            <div>
            <div className="BGcorner"></div>
            <Navigation accesToken={accesToken}/>
            <h1>Page Admin</h1>
            <div className='tool'>
                <button onClick={() => SetSwitchMenu("addP")}>Add a profil</button>
                <button onClick={() => SetSwitchMenu("addC")}>Add a company</button>
                <button onClick={() => SetSwitchMenu("addadd")}>Add an Advertisement</button>
                <button onClick={() => SetSwitchMenu("modify")}>Modifiy</button>
                <button onClick={() => SetSwitchMenu("deleteP")}>Delete a profil</button>
                <button onClick={() => SetSwitchMenu("deleteC")}>Delete a company</button>
            </div>
            <div className="monitor">
                { (switchMenu === "addP" && <Addprofil />) 
                || (switchMenu === "addC" && <Addcompagny />)
                || (switchMenu === "addadd" && <Addadd />)
                || (switchMenu === "modify" && <Modify />)
                || (switchMenu === "deleteP" && <Deleteprofil />)
                || (switchMenu === "deleteC" && <Deletecompany />)
                || <p>no research found</p>}
            </div></div> : <h1 className='errorpage'>Erreur vous n'avez pas les droits d'accès pour cette page</h1>
        }
        </div>
    );
};

export default Admin;