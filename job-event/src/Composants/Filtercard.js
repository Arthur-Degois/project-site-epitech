import React from 'react';

const Filtercard = ( { job, city, contract } ) => {


    return (
        <div className='filtercard'>
            <h3>Filter research</h3>
            <select name="filtre" id="filtre" onChange={(e) => job(e.target.value)}>
                <option value=""></option>
                <option value="developer">developer</option>
                <option value="cyber">Cyber</option>
                <option value="game">Videogame</option>
                <option value="caissier">caissier</option>
            </select>
            <select name="location" id="location" onChange={(e) => city(e.target.value)}>
            <option value=""></option>
                <option value="paris">Paris</option>
                <option value="marseille">Marseille</option>
                <option value="roubaix">Roubaix</option>
            </select>
            <select name="contract" id="contract" onChange={(e) => contract(e.target.value)}>
                <option value=""></option>
                <option value="CDI">CDI</option>
                <option value="CDD">CDD</option>
                <option value="auto">Auto-entrepreneur</option>
            </select>
        </div>
    );
};

export default Filtercard;