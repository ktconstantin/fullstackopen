import React, { useEffect, useState } from 'react';
import Search from './Search';
import axios from 'axios';
import '../css/app.css';
import Country from './Country';

export default function App() {
  const [searchValue, setSearchValue] = useState('');
  const [data, setData] = useState<any[]>([]);
  const [countries, setCountries] = useState<any[]>([]);

  useEffect(() => {
    axios
      .get('https://restcountries.com/v3.1/all')
      .then(response => {
        console.log(response.data);
        setData(response.data);
      });
  }, []);

  function handleSearchChange(event: React.ChangeEvent<HTMLInputElement>) {
    setSearchValue(event.target.value);

    const matchingCountries = data.filter(country => {
      const commonName = country.name.common.toLocaleLowerCase();

      return commonName.includes(event.target.value.toLocaleLowerCase());
    });

    setCountries(matchingCountries);
  }

  return (
    <div className="App">
      <Search 
        value={searchValue} 
        onChange={handleSearchChange}      
      />

      <div>
        <div className="too-many-matches">
          {countries.length > 10 && (
            <p>Too many matches</p>
          )}
        </div>

        {countries.length <= 10 && countries.map(country => (
          <Country 
            key={country.cca3}
            country={country}
          />
        ))}

      </div>
    </div>
  );
}
