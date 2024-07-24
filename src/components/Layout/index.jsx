import { DataProvider } from "../../Context/DataContext"
import Header from "../Header"
import Main from "../Main"

export default function Layout () {
    return (
        <DataProvider>
            <Header/>
            <Main/>
            <footer></footer>
        </DataProvider>
    )
}