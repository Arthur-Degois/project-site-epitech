import React from "react";

const Formulaire = () => {
  return (
    <div className="center">
      <form action="" className="subscribe">
        <div>
            <h2>JOBZ</h2>
        </div>
        <div>
          <label htmlFor="lastname">Lastname</label>
          <input type="text" id="lastname" required />
        </div>
        <div>
          <label htmlFor="name">Name</label>
          <input type="text" id="name" required/>
        </div>
        <div>
          <label htmlFor="password">Password</label>
          <input type="text" id="password" required/>
        </div>
        <input type="submit"  value="Se Connecter"/>
      </form>
    </div>
  );
};

export default Formulaire;
