import React, { useState} from "react";
import Navigation from "../Composants/Navigation";
import "../styles/inscription.css";
import Signin from "../Composants/Signin";
import Signincompany from "../Composants/Signincompany";

const Inscription = ({ accesToken }) => {

  const [validForm,SetValidForm] = useState(false)
  const [pathLogin,SetPathLogin] = useState("inscription")

  return (
    <div>
      <div className="BGcorner"></div>
      <Navigation accesToken={accesToken}/>
      <div className="center">
        {(validForm && <h2>Inscription reussi! , vous allez etre redirigé</h2>)
        || (!validForm && (pathLogin === "inscription") ? <Signin setvalidform={SetValidForm} pathlogin={pathLogin} setpathlogin={SetPathLogin} /> : <Signincompany setvalidform={SetValidForm} pathlogin={pathLogin} setpathlogin={SetPathLogin}/>  )}
      </div>
    </div>
  );
};

export default Inscription;
