
import './index.css';
export default function CountryCard ({country}) {
    return (
        <div className="country-card">
            <h2>{country.name.common}</h2>
            <p>Capital: {country.capital ? country.capital[0] : 'N/A'}</p>
            <p>Region: {country.region}</p>
            <p>Population: {country.population.toLocaleString()}</p>
            <p>Area: {country.area}</p>
            <img
                src={country.flags.png}
                alt={`${country.name.common} flag`}
                style={{ width:'100px', height:'auto' }}
            />
        </div>
    )
}