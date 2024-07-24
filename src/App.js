import './App.css';
import Layout from './components/Layout';
import ThemeContext from './Context/ThemeContext';
import { useContext } from 'react';

function App() {
  const {theme} = useContext(ThemeContext)
  return (
    <div className={`App ${theme}`}>
      <Layout/>
    </div>
  );
}

export default App;