import React, { useState } from 'react';
import axios from 'axios';

const Addprofil = () => {
    const [lastname, SetLastname] = useState("");
    const [name, SetName] = useState("");
    const [email, SetEmail] = useState("");
    const [password, SetPassword] = useState("");

  //   const createData = () => {
  //     axios.post("../", {
  //         nom: "degois",
  //         prenom: "",
  //         tel: "",
  //         naissance: ""
  //     }).then((res) => res.json())
  // }

    const handleSubmit = (e) => {
        e.preventDefault();
        axios.post("http://localhost:3000/inscription", {
          prenom: name,
          nom : lastname,
          email: email,
          telephone: password,
        }).then((res) => {
          SetLastname("");
          SetName("");
          SetEmail("");
          SetPassword("");
        })
    }

    return (
        <form action="" className="add" onSubmit={(e) => handleSubmit(e)}>
          <div>
            <h2>Add new Profil</h2>
          </div>
          <div>
            <label htmlFor="lastname">Lastname:</label>
            <input type="text" id="lastname" onChange={(e)=> SetLastname(e.target.value)}  value={lastname} required />
          </div>
          <div>
            <label htmlFor="name">Name:</label>
            <input type="text" id="name" onChange={(e)=> SetName(e.target.value)} value={name} required />
          </div>
          <div>
            <label htmlFor="email">Email:</label>
            <input type="text" id="email" onChange={(e)=> SetEmail(e.target.value)} value={email} required />
          </div>
          <div>
            <label htmlFor="password">Password:</label>
            <input type="text" id="password" onChange={(e)=> SetPassword(e.target.value)} value={password} required />
          </div>
          <input type="submit" value="Add Profil"/>
        </form>
    );
};

export default Addprofil;