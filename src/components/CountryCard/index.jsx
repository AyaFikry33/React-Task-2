
import './index.css';
export default function CountryCard ({country}) {
    return (
        <div className="country-card">
            <img
                src={country.flags.png}
                alt={`${country.name.common} flag`}
                className="country-flag"
            />
            <div className="country-details">
                <h2>{country.name.common}</h2>
                <p>Population: {country.population.toLocaleString()}</p>
                <p>Region: {country.region}</p>
                <p>Capital: {country.capital ? country.capital[0] : 'N/A'}</p>
                <p>Area: {country.area.toLocaleString()} km²</p>
            </div>
        </div>
    )
}