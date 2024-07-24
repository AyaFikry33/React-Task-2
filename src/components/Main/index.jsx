import { useContext, useEffect, useState } from "react"
import DataContext from "../../Context/DataContext"
import './index.css';
import CountryCard from "../CountryCard";
import SearchForm from "../SearchForm";
export default function Main () {
    const data = useContext(DataContext)
    const [value, setValue] = useState('')
    const [filteredValue, setFilteredValue] = useState('')
    const [filteredData, setFilteredData] = useState([]);


//     useEffect(() => {
//         if (data) {
//             setFilteredData(
//                 data.filter((country) =>
//                     country.name.common.toLowerCase().includes(value.toLowerCase())
//             )
//         );
//     }
// }, [value])
    useEffect(() => {
        if (data) {
            setFilteredData(data);
        }
    }, [data]);

    useEffect(() => {
        if (data) {
            setFilteredData(
                data.filter((country) =>
                    country.name.common.toLowerCase().includes(value.toLowerCase()) &&
                    country.region.toLowerCase().includes(filteredValue.toLowerCase())
                )
            );
        }
    }, [data, value, filteredValue])

    return (
        <div className="container">
            <SearchForm value={value} setValue={setValue} setFilteredValue={setFilteredValue} filteredValue={filteredValue}/>
            {filteredData.length ? (
                <div className="countries-container">
                    {filteredData?.map((country) => (
                        <CountryCard
                            key={country.cca2}
                            country={country}
                        />
                    ))}
                </div>
            ) : (
                <div>No Data to display</div>
            )}
        </div>
    )
}