import React, { useState} from 'react';
import axios from 'axios';

const Signin = ( { validform, setvalidform}) => {

  const [isChecked1,SetIsChecked1] = useState(true);
  const [isChecked2,SetIsChecked2] = useState(false);
  const [pathLogin,SetPathLogin] = useState("login")

  const handleCheckBoxChange1 = (event) => {
    if (!isChecked1) {
      SetIsChecked1(event.target.checked);
      SetIsChecked2(!event.target.checked);
      SetPathLogin("login");
    }
  }
  const handleCheckBoxChange2 = (event) => {
    if (!isChecked2) {
      SetIsChecked2(event.target.checked);
      SetIsChecked1(!event.target.checked);
      SetPathLogin("login-company");
    }
  }
    
    const [lastname, SetLastname] = useState("");
    const [name, SetName] = useState("");
    const [email, SetEmail] = useState("");
    const [telephone, SetTelephone] = useState("");
    const [naissance, SetNaissance] = useState("");
    const [password, SetPassword] = useState("");
    const [confirmPassword, SetConfirmPassword] = useState("");

    const [wrongPassword,SetWrongPassword] = useState(false)

    const handleSubmit = (e) => {
        e.preventDefault();
        if (password === confirmPassword) {
          try {
            axios.post("http://localhost:3000/inscription", {
              prenom: name,
              nom : lastname,
              email: email,
              password: password,
              tel: telephone,
              naissance: naissance
            }).then((res) => {
              SetLastname("");
              SetName("");
              SetEmail("");
              SetTelephone("");
              SetNaissance("");
              SetPassword("");
              SetConfirmPassword("");
            })
            setvalidform(true)
            setTimeout(() => {
                let path = window.location.pathname;
                let location = window.location.href;
                location = location.replace(path, "/connexion");
                window.location.href = location;
            },2000)
          }
          catch (error) {
            console.error(error);
          }
        } else {
          SetWrongPassword(true);
        }
    }

    return (
        <form action="" className="subscribe2" onSubmit={handleSubmit}>
          <div>
            <h2>JOBZ</h2>
          </div>
          <div className="choice">
          <input type="checkbox" id="people" checked={isChecked1} onChange={handleCheckBoxChange1}/>
          <label htmlFor="people">People</label>
          <input type="checkbox" id="company" checked={isChecked2} onChange={handleCheckBoxChange2}/>
          <label htmlFor="company">Company</label>
        </div>
          <div className="flex">
            <label htmlFor="lastname">Lastname</label>
            <input type="text" id="lastname" onChange={(e)=> SetLastname(e.target.value)}  value={lastname} required />
          </div>
          <div className="flex">
            <label htmlFor="name">Name</label>
            <input type="text" id="name" onChange={(e)=> SetName(e.target.value)} value={name} required />
          </div>
          <div className="flex">
            <label htmlFor="email">Email</label>
            <input type="text" id="email" onChange={(e)=> SetEmail(e.target.value)} value={email} required />
          </div>
          <div className="flex">
            <label htmlFor="birth">Birth</label>
            <input type="date" id="birth" onChange={(e)=> SetNaissance(e.target.value)} value={naissance} required />
          </div>
          <div className="flex">
            <label htmlFor="tel">Phone Number</label>
            <input type="phone" id="tel" onChange={(e)=> SetTelephone(e.target.value)} value={telephone} required />
          </div>
          <div className="flex">
            <label htmlFor="password">Password</label>
            <input type="password" id="password" onChange={(e)=> SetPassword(e.target.value)} value={password} required />
          </div>
          <div className="flex">
            <label htmlFor="repassword">Confirm Password</label>
            <input type="password" id="repassword" onChange={(e)=> SetConfirmPassword(e.target.value)}  value={confirmPassword} required />
          </div>
          {wrongPassword && <p>Password doesn't match</p>}
          <input type="submit" value="S'inscrire"/>
        </form>
    );
};

export default Signin;