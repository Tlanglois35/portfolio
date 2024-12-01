import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSun, faMoon } from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';
import { Tabs, Tab } from '@mui/material';
import { ReactComponent as Logo } from './icon.svg';
import "./NavBar.css";

function NavBar({ Time, setManualTime }) {
  const [value, setValue] = useState(0);

  // Gère le clic pour basculer entre jour et nuit
  const toggleTime = () => {
    setManualTime((prev) => (prev === 'day' ? 'night' : 'day'));
  };

  return (
    <nav className="NavBar fixed-style" role='navigation'>
      <Logo className="logo" />
      <div className="pill-nav">
        <Tabs
          value={value}
          onChange={(event, newValue) => setValue(newValue)}
          textColor="inherit"
          TabIndicatorProps={{
            style: { backgroundColor: 'white' },
          }}
        >
          <Tab label="Présentation" />
          <Tab label="Compétences" />
          <Tab label="Parcours" />
          <Tab label="Projets" />
          <Tab label="Contact" />
        </Tabs>
      </div>
      <div>
        {/* Change l'icône et bascule entre les modes */}
        {Time === 'day' ? (
            <div className='ico'>
                <FontAwesomeIcon icon={faSun} size="2x" onClick={toggleTime}/>
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
