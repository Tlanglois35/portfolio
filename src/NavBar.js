import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSun, faMoon } from '@fortawesome/free-solid-svg-icons';
import { useState, useEffect } from 'react';
import { Tabs, Tab } from '@mui/material';
import { ReactComponent as Logo } from './icon.svg';
import "./NavBar.css";

function NavBar({ Time, setManualTime }) {
  const [value, setValue] = useState(null);

  // Fonction pour obtenir l'index de l'onglet en fonction du hash
  const getHashValue = (hash) => {
    switch (hash) {
      case '#presentation':
        return 0;
      case '#skill':
        return 1;
      case '#parcours':
        return 2;
      case '#projets':
        return 3;
      case '#contact':
        return 4;
      default:
        return null;
    }
  };

  // Synchronise la sélection d'onglet avec le hash dans l'URL
  useEffect(() => {
    const hash = window.location.hash;
    const tabIndex = getHashValue(hash);
    setValue(tabIndex);
  }, [window.location.hash]);

  const handleChange = (event, newValue) => {
    setValue(newValue);
    const hash = ['#presentation', '#skill', '#parcours', '#projets', '#contact'][newValue] || '#header';
    window.history.replaceState(null, '', hash);
  };

  return (
    <nav className="NavBar fixed-style" role='navigation'>
      <a href='#header' style={{ textDecoration: 'none', color: 'inherit' }}>
        <Logo className="logo" />
      </a>
      <div className="pill-nav">
        <Tabs
          value={value !== null ? value : false}
          onChange={handleChange}
          textColor="inherit"
          TabIndicatorProps={{
            style: { backgroundColor: 'white' },
          }}
        >
          <Tab label="Présentation" component="a" href="#presentation" />
          <Tab label="Compétences" component="a" href="#skill" />
          <Tab label="Parcours" component="a" href="#parcours" />
          <Tab label="Projets" component="a" href="#projets" />
          <Tab label="Contact" component="a" href="#contact" />
        </Tabs>
      </div>
      <div>
        {/* Change l'icône et bascule entre les modes */}
        {Time === 'day' ? (
          <div className='ico'>
            <FontAwesomeIcon icon={faSun} size="2x" onClick={() => setManualTime('night')} />
          </div>
        ) : (
          <div className='ico'>
            <FontAwesomeIcon icon={faMoon} size="2x" onClick={() => setManualTime('day')} />
          </div>
        )}
      </div>
    </nav>
  );
}

export default NavBar;
