import { useContext } from "react";
import ThemeContext from "../../Context/ThemeContext";
import './index.css'

function Theme() {
  const {theme, toggleTheme} = useContext(ThemeContext)

  return (
    <div className="theme">
        <button className="theme-switcher" onClick={toggleTheme}>
            {theme === 'light' ? '🌙 Dark Mode' : '☀️ Light Mode'}
        </button>
    </div>
  );
}

export default Theme;
