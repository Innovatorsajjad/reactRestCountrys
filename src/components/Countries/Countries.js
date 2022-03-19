import React, { useEffect, useState } from 'react';
import Country from '../country/Country';
import "./Countries.css"

const Countries = () => {
    const [countries ,SetCountries] =useState([])
    useEffect(()=>{
        fetch("https://restcountries.com/v3.1/all")
        .then(Response=> Response.json())
        .then(data=>SetCountries(data))

    },[])

    return (
        <div>
            <h1 className='Titel_section'>Here is {countries.length} country's Data of the World..</h1>
           <div className='Countries_container'>
           {
                countries.map(country=> <Country 
                    country={country}
                    key={country.cca3}
                    > </Country>)
            }
           </div>
        </div>
    );
};

export default Countries;