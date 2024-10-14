import React, { useState } from 'react';
import axios from 'axios';

const Addadd = () => {

    const [title, SetTitle] = useState("");
    const [description, SetDescription] = useState("");
    const [companyname, SetCompanyname] = useState("");
    const [location, SetLocation] = useState("");
    const [salary, SetSalary] = useState("");
    const [contrat, SetContrat] = useState("");
    const [skill, SetSkill] = useState("");
    const [benefits, SetBenefits] = useState("");
    const [companyID, SetCompanyID] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        axios.post("http://localhost:3000/add", {
          title: title,
          description : description,
          company_name: companyname,
          location: location,
          salary: salary,
          contract_type: contrat,
          skills_required: skill,
          benefits: benefits,
          company_id: parseInt(companyID)
        }).then((res) => {
          SetTitle("");
          SetDescription("");
          SetCompanyname("");
          SetLocation("");
          SetSalary("");
          SetContrat("");
          SetSkill("");
          SetBenefits("");
          SetCompanyID("");
        })
    }


    return (
        <form action="" className="add" onSubmit={(e) => handleSubmit(e)}>
            <div>
            <h2>Add an Advertisement</h2>
            </div>
            <div>
            <label htmlFor="title">Title:</label>
            <input type="text" id="title" onChange={(e)=> SetTitle(e.target.value)}  value={title} required />
            </div>
            <div>
            <label htmlFor="description">Description:</label>
            <input type="text" id="description" onChange={(e)=> SetDescription(e.target.value)} value={description} required />
            </div>
            <div>
            <label htmlFor="name">Name Company:</label>
            <input type="text" id="name" onChange={(e)=> SetCompanyname(e.target.value)} value={companyname} required />
          </div>
            <div>
            <label htmlFor="location">Location:</label>
            <input type="text" id="location" onChange={(e)=> SetLocation(e.target.value)} value={location} required />
            </div>
            <div>
            <label htmlFor="salary">Salary:</label>
            <input type="text" id="salary" onChange={(e)=> SetSalary(e.target.value)} value={salary} required />
            </div>
            <div>
            <label htmlFor="contrat">Contrat:</label>
            <input type="text" id="contrat" onChange={(e)=> SetContrat(e.target.value)} value={contrat} required />
            </div>
            <div>
            <label htmlFor="skill">Skill:</label>
            <input type="text" id="skill" onChange={(e)=> SetSkill(e.target.value)} value={skill} required />
            </div>
            <div>
            <label htmlFor="benefit">Benefits:</label>
            <input type="text" id="benefit" onChange={(e)=> SetBenefits(e.target.value)} value={benefits} required />
            </div>
            <div>
            <label htmlFor="id">companyID:</label>
            <input type="text" id="id" onChange={(e)=> SetCompanyID(e.target.value)} value={companyID} required />
            </div>
            <input type="submit" value="Add Advertisement"/>
        </form>
    );
};

export default Addadd;