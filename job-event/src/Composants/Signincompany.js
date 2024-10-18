import React, { useState } from "react";
import axios from "axios";

const Signincompany = ({ setvalidform, pathlogin, setpathlogin }) => {
  const [isChecked1, SetIsChecked1] = useState(false);
  const [isChecked2, SetIsChecked2] = useState(true);

  const handleCheckBoxChange1 = (event) => {
    if (!isChecked1) {
      SetIsChecked1(event.target.checked);
      SetIsChecked2(!event.target.checked);
      setpathlogin("inscription");
    }
  };
  const handleCheckBoxChange2 = (event) => {
    if (!isChecked2) {
      SetIsChecked2(event.target.checked);
      SetIsChecked1(!event.target.checked);
      setpathlogin("inscription_company");
    }
  };

  const [siret, SetSiret] = useState("");
  const [name, SetName] = useState("");
  const [email, SetEmail] = useState("");
  const [sector, SetSector] = useState("");
  const [street, SetStreet] = useState("");
  const [city, SetCity] = useState("");
  const [zip, SetZip] = useState("");
  const [country, SetCountry] = useState("");
  const [password, SetPassword] = useState("");
  const [confirmPassword, SetConfirmPassword] = useState("");

  const [wrongPassword, SetWrongPassword] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (password === confirmPassword) {
      try {
        axios
          .post(`http://localhost:3000/${pathlogin}`, {
            siret: siret,
            nom: name,
            email: email,
            secteur: sector,
            rue: street,
            ville: city,
            code_postal: zip,
            pays: country,
            password: password,
          })
          .then((res) => {
            SetSiret("");
            SetName("");
            SetEmail("");
            SetSector("");
            SetStreet("");
            SetCity("");
            SetZip("");
            SetCountry("");
            SetPassword("");
            SetConfirmPassword("");
          })
        setvalidform(true)
        setTimeout(() => {
          let path = window.location.pathname;
          let location = window.location.href;
          location = location.replace(path, "/connexion");
          window.location.href = location;
        }, 2000);
      } catch (error) {
        console.error(error);
      }
    } else {
      SetWrongPassword(true);
    }
  };

  return (
    <form action="" className="subscribe2" onSubmit={handleSubmit}>
      <div>
        <h2>JOBZ</h2>
      </div>
      <div className="choice">
        <input
          type="checkbox"
          id="people"
          checked={isChecked1}
          onChange={handleCheckBoxChange1}
        />
        <label htmlFor="people">People</label>
        <input
          type="checkbox"
          id="company"
          checked={isChecked2}
          onChange={handleCheckBoxChange2}
        />
        <label htmlFor="company">Company</label>
      </div>
      <div className="flex">
        <label htmlFor="siret">Siret:</label>
        <input
          type="text"
          id="siret"
          onChange={(e) => SetSiret(e.target.value)}
          value={siret}
          required
        />
      </div>
      <div className="flex">
        <label htmlFor="name">Name:</label>
        <input
          type="text"
          id="name"
          onChange={(e) => SetName(e.target.value)}
          value={name}
          required
        />
      </div>
      <div className="flex">
        <label htmlFor="email">Email:</label>
        <input
          type="text"
          id="email"
          onChange={(e) => SetEmail(e.target.value)}
          value={email}
          required
        />
      </div>
      <div className="flex">
        <label htmlFor="sector">Sector:</label>
        <input
          type="text"
          id="sector"
          onChange={(e) => SetSector(e.target.value)}
          value={sector}
          required
        />
      </div>
      <div className="flex">
        <label htmlFor="street">Street:</label>
        <input
          type="text"
          id="street"
          onChange={(e) => SetStreet(e.target.value)}
          value={street}
          required
        />
      </div>
      <div className="flex">
        <label htmlFor="city">City:</label>
        <input
          type="text"
          id="city"
          onChange={(e) => SetCity(e.target.value)}
          value={city}
          required
        />
      </div>
      <div className="flex">
        <label htmlFor="zip">Zip code:</label>
        <input
          type="text"
          id="zip"
          onChange={(e) => SetZip(e.target.value)}
          value={zip}
          required
        />
      </div>
      <div className="flex">
        <label htmlFor="country">Country:</label>
        <input
          type="text"
          id="country"
          onChange={(e) => SetCountry(e.target.value)}
          value={country}
          required
        />
      </div>
      <div className="flex">
        <label htmlFor="password">Password:</label>
        <input
          type="text"
          id="password"
          onChange={(e) => SetPassword(e.target.value)}
          value={password}
          required
        />
      </div>
      <div className="flex">
        <label htmlFor="repassword">Confirm Password</label>
        <input
          type="password"
          id="repassword"
          onChange={(e) => SetConfirmPassword(e.target.value)}
          value={confirmPassword}
          required
        />
      </div>
      {wrongPassword && <p>Password doesn't match</p>}
      <input type="submit" value="S'inscrire" />
    </form>
  );
};

export default Signincompany;
