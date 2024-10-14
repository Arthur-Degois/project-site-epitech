import React, { useState} from "react";
import Navigation from "../Composants/Navigation";
import "../styles/inscription.css";
import Signin from "../Composants/Signin";

const Inscription = ({ accesToken }) => {

  const [validForm,SetValidForm] = useState(false)

  return (
    <div>
      <Navigation accesToken={accesToken}/>
      <div className="center">
        {(validForm && <h2>Inscription reussi! , vous allez etre redirigé</h2>)
        || (!validForm && <Signin validform={validForm} setvalidform={SetValidForm}/>  )}
      </div>
    </div>
  );
};

export default Inscription;
