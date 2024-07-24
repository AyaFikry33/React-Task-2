
import { useContext } from 'react';
import ThemeContext from '../../Context/ThemeContext';
import Theme from '../Theme';
import './index.css';
export default function Header () {
    const {theme} = useContext(ThemeContext);

    return (
        <header className={`header ${theme}`}>
            <div className="header-content">
                <h1>Where in the world?</h1>
                <Theme/>
            </div>
        </header>
    )
}