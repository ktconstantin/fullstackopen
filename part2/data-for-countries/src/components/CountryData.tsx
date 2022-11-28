import React, { useState, useEffect } from 'react';
import axios from 'axios';

const api_key = process.env.REACT_APP_API_KEY;
//const api_key = '97c7c6cbc42478601bdc219eb7b3a348';

interface CountryDataProps {
  capital: string,
  area: number,
  region: string,
  subregion: string,
  languages: any[],
  flag: any,
  maps: string,
  latlng: number[],
  lat: number,
  lon: number
}

export default function CountryData({
  capital,
  area,
  region,
  subregion,
  languages,
  flag,
  maps,
  latlng,
  lat,
  lon
}: CountryDataProps) {
  const [weatherData, setWeatherData] = useState<any>();

  const url = `https://api.openweathermap.org/data/3.0/onecall?lat=${lat}&lon=${lon}&appid=${api_key}`;

  useEffect(() => {
    axios
      .get(url)
      .then(response => {
        console.log(response);
        setWeatherData(response.data);
      });
  }, []);

  return (
    <div className="country-data">
      <ul>
        <li><strong>Capital: </strong>{capital}</li>
        <li><strong>Area: </strong>{`${area} km`}<sup>2</sup></li>
        <li><strong>Region: </strong>{region}</li>
        <li><strong>Subregion: </strong>{subregion}</li>
        <li><strong>Languages: </strong>
          <ul className="languages">
            {languages.map(language => (
              <li key={language[0]}>{language[1]}</li>
            ))}
          </ul>
        </li>
        <li><strong>Flag: </strong>{flag}</li>
        <li>
          <a 
            href={maps}
            target="_blank"
            rel="noreferrer noopener"
          >
            Google maps
          </a>
        </li>
        <li><strong>Weather: </strong>{weatherData.current.weather}</li>
      </ul>
    </div>
  )
}
