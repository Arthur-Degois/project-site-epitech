import React from "react";

const Formulaire = () => {

  const handleSubmit = (e) => {
    e.preventDefault();
    localStorage.setItem("accesToken", "Arthur");
    let location = window.location.href;
    location = location.replace("connexion", "home");
    window.location.href = location;
    
  }

  return (
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
          <input type="text" id="name" required/>
        </div>
        <div>
          <label htmlFor="password">Password</label>
          <input type="password" id="password" required/>
        </div>
        <input type="submit"  value="Se Connecter" />
      </form>
    </div>
  );
};

export default Formulaire;
