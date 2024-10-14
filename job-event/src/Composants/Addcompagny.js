import React, { useState } from 'react';
import axios from 'axios';

const Addcompagny = () => {

    const [siret,SetSiret] = useState("")
    const [name, SetName] = useState("")
    const [email, SetEmail] = useState("")
    const [sector,SetSector] = useState("")
    const [street,SetStreet] = useState("")
    const [city,SetCity] = useState("")
    const [zip,SetZip] = useState("")
    const [country,SetCountry] = useState("")
    const [password, SetPassword] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        axios.post("http://localhost:3000/inscription_company", {
          siret: siret,
          nom : name,
          email: email,
          secteur: sector,
          rue: street,
          ville: city,
          code_postal: zip,
          pays: country,
          password: password
        }).then((res) => {
          SetSiret("");
          SetName("");
          SetEmail("");
          SetSector("");
          SetStreet("");
          SetCity("");
          SetZip("");
          SetCountry("");
          SetPassword("");
        })
    }

    return (
        <form action="" className="add" onSubmit={(e) => handleSubmit(e)}>
            <div>
            <h2>Add new Compagny</h2>
            </div>
            <div>
            <label htmlFor="siret">Siret:</label>
            <input type="text" id="siret" onChange={(e)=> SetSiret(e.target.value)}  value={siret} required />
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
            <label htmlFor="sector">Sector:</label>
            <input type="text" id="sector" onChange={(e)=> SetSector(e.target.value)} value={sector} required />
            </div>
            <div>
            <label htmlFor="street">Street:</label>
            <input type="text" id="street" onChange={(e)=> SetStreet(e.target.value)} value={street} required />
            </div>
            <div>
            <label htmlFor="city">City:</label>
            <input type="text" id="city" onChange={(e)=> SetCity(e.target.value)} value={city} required />
            </div>
            <div>
            <label htmlFor="zip">Zip code:</label>
            <input type="text" id="zip" onChange={(e)=> SetZip(e.target.value)} value={zip} required />
            </div>
            <div>
            <label htmlFor="country">Country:</label>
            <input type="text" id="country" onChange={(e)=> SetCountry(e.target.value)} value={country} required />
            </div>
            <div>
            <label htmlFor="password">Password:</label>
            <input type="text" id="password" onChange={(e)=> SetPassword(e.target.value)} value={password} required />
          </div>
            <input type="submit" value="Add Compagny"/>
        </form>
    );
};

export default Addcompagny;