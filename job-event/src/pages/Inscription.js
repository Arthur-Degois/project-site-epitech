import React, { useState } from "react";
import Navigation from "../Composants/Navigation";
import "../styles/connexion.css"

const Inscription = () => {
    const [lastname, SetLastname] = useState("");
    const [name, SetName] = useState("");
    const [email, SetEmail] = useState("");
    const [password, SetPassword] = useState("");
    const [confirmPassword, SetConfirmPassword] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
    }

  return (
    <div>
      <Navigation />
      <div className="center">
        <form action="" className="subscribe" onSubmit={(e) => handleSubmit(e)}>
          <div>
            <h2>JOBZ</h2>
          </div>
          <div>
            <label htmlFor="lastname">Lastname</label>
            <input type="text" id="lastname" required />
          </div>
          <div>
            <label htmlFor="name">Name</label>
            <input type="text" id="name" required />
          </div>
          <div>
            <label htmlFor="email">Email</label>
            <input type="text" id="email" required />
          </div>
          <div>
            <label htmlFor="password">Password</label>
            <input type="text" id="password" required />
          </div>
          <div>
            <label htmlFor="repassword">Confirm Password</label>
            <input type="text" id="repassword" required />
          </div>
          <input type="submit" value="S'inscrire" />
        </form>
      </div>
    </div>
  );
};

export default Inscription;
