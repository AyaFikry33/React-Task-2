import { useContext } from 'react'
import './index.css'
import DataContext from '../../Context/DataContext'
export default function SearchForm ({value, setValue, filteredValue, setFilteredValue}) {
    // const [value, setValue] = useState('')
    const data = useContext(DataContext)
    const regions = data ? [...new Set(data.map(country => country.region))] : []
    return (
        <form className="search-form">
            <input className="search-input" type="text" value={value} 
            placeholder="Search by name"
            onChange={(event) => setValue(event.target.value)}/>
            
            <select value={filteredValue} className="filter-select"
            onChange={(event) => setFilteredValue(event.target.value)}>
                <option value="">All</option>
                { regions?.map((region, index) => (
                    <option key={index} value={region}>{region}</option>
                ))}
            </select>
        </form>
    )
}