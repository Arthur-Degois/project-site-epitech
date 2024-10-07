import React from "react";

const Formulaire = () => {
  return (
    <div className="center">
      <form action="" className="subscribe">
        <div>
            <h2>JOBZ</h2>
        </div>
        <div>
          <label htmlFor="username">Username</label>
          <input type="text" id="username" />
        </div>
        <div>
          <label htmlFor="name">Name</label>
          <input type="text" id="name" />
        </div>
        <div>
          <label htmlFor="password">Password</label>
          <input type="text" id="password" />
        </div>
        <input type="submit"  value="Se Connecter"/>
      </form>
    </div>
  );
};

export default Formulaire;
