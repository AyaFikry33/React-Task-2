import { createContext, useEffect, useState } from "react"

const DataContext = createContext()
export const DataProvider = ({children}) =>{
    const [data, setData] = useState(null);

    useEffect(() => {
        fetch("https://restcountries.com/v3.1/all")
            .then((res) => res.json())
            .then((data) => {
                setData(data)
            })
            .catch((err) => console.log("there is an error", err))
    }, [])

    return (
        <DataContext.Provider value={data}>
            {children}
        </DataContext.Provider>
    )
}
export default DataContext;