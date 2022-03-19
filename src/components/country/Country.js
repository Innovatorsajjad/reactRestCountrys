import React from 'react';
import "./Country.css"

const Country = (Props) => {
    console.log(Props.country)
    const {population,area,region,name,flags} = Props.country;
    console.log(Props.country);
    return (
        <div className='Country'>
            <h1>Country name:{name.common} </h1>
            <img src={flags.png} alt="" />
            <h3>Population : {population}</h3>
            <h3>Area : {area}</h3>
            <h4>Region : {region}</h4>

        </div>
    );
};

export default Country;