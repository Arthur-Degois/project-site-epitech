import React, { useState } from "react";
import axios from "axios";

const Formulaire = () => {

  const [valid, SetValid] = useState(true)
  const [email, SetEmail] = useState("");
  const [password, SetPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post(
        'http://localhost:3000/login',
        {
            email,
            password
        },
      )
      if (res.status === 200) {
        localStorage.setItem("accesToken", `${JSON.stringify(res.data)}`);
        let location = window.location.href;
        location = location.replace("connexion", "home");
        window.location.href = location;
      } else {
        SetValid(false)
    }

    } catch (error) {
      SetValid(false)
    }
    
  }

  return (
    <div className="center">
      <form action="" className="subscribe" onSubmit={handleSubmit}>
        <div>
            <h2>JOBZ</h2>
        </div>
        <div>
          <label htmlFor="email">email</label>
          <input type="email" id="email" required value={email} onChange={(e) => SetEmail(e.target.value)}/>
        </div>
        <div>
          <label htmlFor="password">Password</label>
          <input type="password" id="password" required value={password} onChange={(e) => SetPassword(e.target.value)}/>
        </div>
        <input type="submit"  value="Se Connecter" />
        {!valid && <p>Email or password incorrect</p>}
      </form>
    </div>
  );
};

export default Formulaire;
