import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSun, faMoon } from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';
import { Tabs, Tab } from '@mui/material';
import { ReactComponent as Logo } from './icon.svg';
import "./NavBar.css";

function NavBar({ Time, setManualTime }) {
  const [value, setValue] = useState(null);

  // Gère le clic pour basculer entre jour et nuit
  const toggleTime = () => {
    setManualTime((prev) => (prev === 'day' ? 'night' : 'day'));
  };

  const handleChange = (event, newValue) => {
    setValue(newValue);  // Met à jour la valeur de l'onglet sélectionné
  };

  return (
    <nav className="NavBar fixed-style" role='navigation'>
      <Logo className="logo" />
      <div className="pill-nav">
        <Tabs
          value={value === null ? false : value}
          onChange={handleChange}
          textColor="inherit"
          TabIndicatorProps={{
            style: { backgroundColor: 'white' },
          }}
        >
          <Tab label="Présentation" component="a" href="#presentation" />
          <Tab label="Compétences" component="a" href="#competences" />
          <Tab label="Parcours" component="a" href="#parcours" />
          <Tab label="Projets" component="a" href="#projets" />
          <Tab label="Contact" component="a" href="#contact" />
        </Tabs>
      </div>
      <div>
        {/* Change l'icône et bascule entre les modes */}
        {Time === 'day' ? (
          <div className='ico'>
            <FontAwesomeIcon icon={faSun} size="2x" onClick={toggleTime} />
          </div>
        ) : (
          <div className='ico'>
            <FontAwesomeIcon icon={faMoon} size="2x" onClick={toggleTime} />
          </div>
        )}
      </div>
    </nav>
  );
}

export default NavBar;
