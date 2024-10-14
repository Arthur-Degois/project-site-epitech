import React, { useState } from 'react';
import axios from 'axios';

const Addprofil = () => {
    const [lastname, SetLastname] = useState("");
    const [name, SetName] = useState("");
    const [email, SetEmail] = useState("");
    const [telephone, SetTelephone] = useState("");
    const [naissance, SetNaissance] = useState("");
    const [password, SetPassword] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        axios.post("http://localhost:3000/inscription", {
          prenom: name,
          nom : lastname,
          email: email,
          tel: telephone,
          naissance: naissance,
          password: password
        }).then((res) => {
          SetLastname("");
          SetName("");
          SetEmail("");
          SetTelephone("");
          SetNaissance("");
          SetPassword("");
        })
    }

    return (
        <form action="" className="add" onSubmit={handleSubmit}>
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
            <label htmlFor="telephone">téléphone:</label>
            <input type="phone" id="telephone" onChange={(e)=> SetTelephone(e.target.value)} value={telephone} required />
          </div>
          <div>
            <label htmlFor="birth">Birth</label>
            <input type="date" id="birth" onChange={(e)=> SetNaissance(e.target.value)} value={naissance} required />
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