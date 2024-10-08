import React, { useState } from "react";
import Navigation from "../Composants/Navigation";
import "../styles/connexion.css";
import axios from "axios";

const Inscription = ({ accesToken }) => {
    const [lastname, SetLastname] = useState("");
    const [name, SetName] = useState("");
    const [email, SetEmail] = useState("");
    const [password, SetPassword] = useState("");
    const [confirmPassword, SetConfirmPassword] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        axios.post("http://localhost:3004/profil", {
          prenom: name,
          nom : lastname,
          email: email,
          password: password,
          id: 5
        }).then((res) => {
          SetLastname("");
          SetName("");
          SetEmail("");
          SetPassword("");
          SetConfirmPassword("");
        })
    }

  return (
    <div>
      <Navigation accesToken={accesToken}/>
      <div className="center">
        <form action="" className="subscribe" onSubmit={(e) => handleSubmit}>
          <div>
            <h2>JOBZ</h2>
          </div>
          <div>
            <label htmlFor="lastname">Lastname</label>
            <input type="text" id="lastname" onChange={(e)=> SetLastname(e.target.value)}  value={lastname} required />
          </div>
          <div>
            <label htmlFor="name">Name</label>
            <input type="text" id="name" onChange={(e)=> SetName(e.target.value)} value={name} required />
          </div>
          <div>
            <label htmlFor="email">Email</label>
            <input type="text" id="email" onChange={(e)=> SetEmail(e.target.value)} value={email} required />
          </div>
          <div>
            <label htmlFor="password">Password</label>
            <input type="text" id="password" onChange={(e)=> SetPassword(e.target.value)} value={password} required />
          </div>
          <div>
            <label htmlFor="repassword">Confirm Password</label>
            <input type="text" id="repassword" onChange={(e)=> SetConfirmPassword(e.target.value)}  value={confirmPassword} required />
          </div>
          <input type="submit" value="S'inscrire"/>
        </form>
      </div>
    </div>
  );
};

export default Inscription;
