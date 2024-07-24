import { DataProvider } from "../../Context/DataContext"
import Main from "../Main"

export default function Layout () {
    return (
        <DataProvider>
            <header></header>
            <Main/>
            <footer></footer>
        </DataProvider>
    )
}