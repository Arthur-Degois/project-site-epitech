import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Modifyprofil from './Modifyprofil';
import Modifycompany from './Modifycompany';
import Modifyad from './Modifyad';

const Modify = () => {

    const [switchmodify,SetModify] = useState("modifyP")

    return (
        <div>
            <div className="selectmodify">
                <button className='namemodify' onClick={() => SetModify("modifyP")}>Profils</button>
                <button className='namemodify' onClick={() => SetModify("modifyC")}>Companies</button>
                <button className='namemodify' onClick={() => SetModify("modifyA")}>Advertisements</button>
            </div>
            {(switchmodify === "modifyP" && <Modifyprofil />)
            || (switchmodify === "modifyC" && <Modifycompany />)
            || switchmodify === "modifyA" && <Modifyad />}
        </div>
    );
};

export default Modify;