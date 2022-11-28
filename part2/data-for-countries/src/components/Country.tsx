import { useState } from 'react';
import CountryData from './CountryData';

interface CountryProps {
  country: any;
}

export default function Country({ country }: CountryProps) {
  const [hidden, setHidden] = useState(true);

  function handleClick() {
    setHidden(!hidden);
  }

  return (
    <div 
      className="country"
      onClick={handleClick}
    >
      <h2>{country.name.common}</h2>
      {!hidden && (
        <div>
          <CountryData
            capital={country.capital} 
            area={country.area} 
            region={country.region} 
            subregion={country.subregion} 
            languages={Object.entries(country.languages)}
            flag={country.flag} 
            maps={country.maps.googleMaps} 
            latlng={country.latlng}    
            lat={country.latlng[0]}  
            lon={country.latlng[1]}
          />
        </div>
      )}
    </div>
  )
}
