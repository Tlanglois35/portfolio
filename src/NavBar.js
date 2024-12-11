import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSun, faMoon, faBars, faXmark } from '@fortawesome/free-solid-svg-icons';
import { useState, useEffect } from 'react';
import { Tabs, Tab } from '@mui/material';
import { ReactComponent as Logo } from './icon.svg';
import "./NavBar.css";

function NavBar({ Time, setManualTime }) {
  const [value, setValue] = useState(null);
  const [menuVisible, setMenuVisible] = useState(false);
  const [stat, setStat] = useState("close");
  const [windowWidth, setWindowWidth] = useState(window.innerWidth); // Suivi de la largeur de la fenêtre

  useEffect(() => {
    // Écoute des changements de taille de la fenêtre
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  useEffect(() => {
    // Si la largeur de l'écran est supérieure ou égale à 768px, on cache le menu
    if (windowWidth >= 678) {
      setMenuVisible(false);
      setStat("close");
    }
  }, [windowWidth]);

  useEffect(() => {
    // Effet pour ajouter la classe 'show' à l'élément menuOver quand menuVisible devient true
    const menuOver = document.querySelector('.menuOver');
    if (menuVisible && menuOver) {
      menuOver.classList.add('show');
    } else if (menuOver) {
      menuOver.classList.remove('show');
    }
  }, [menuVisible]); // Déclenche quand `menuVisible` change

  const getHashValue = (hash) => {
    switch (hash) {
      case '#presentation':
        return 0;
      case '#skill':
        return 1;
      case '#career':
        return 2;
      case '#project':
        return 3;
      case '#contact':
        return 4;
      default:
        return null;
    }
  };

  useEffect(() => {
    const hash = window.location.hash;
    const tabIndex = getHashValue(hash);
    setValue(tabIndex);
  }, [window.location.hash]);

  const handleChange = (event, newValue) => {
    setValue(newValue);
    const hash = ['#presentation', '#skill', '#career', '#project', '#contact'][newValue] || '#header';
    window.history.replaceState(null, '', hash);
  };

  const handleMenuOpen = () => {
    setMenuVisible(true);
    setStat("open");
  };

  const handleMenuClose = () => {
    setMenuVisible(false);
    setStat("close");
  };

  return (
    <nav className="NavBar fixed-style" role='navigation'>
      <div className='para'>
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
            <Tab label="Présentation" component="a" href="#presentation" sx={{ fontSize: '1rem'}} />
            <Tab label="Compétences" component="a" href="#skill" sx={{ fontSize: '1rem'}}/>
            <Tab label="Parcours" component="a" href="#career" sx={{ fontSize: '1rem'}}/>
            <Tab label="Projets" component="a" href="#project" sx={{ fontSize: '1rem'}}/>
            <Tab label="Contact" component="a" href="#contact" sx={{ fontSize: '1rem'}}/>
          </Tabs>
        </div>
        {stat === 'open' ? (
          <div className='menu' style={{ display: 'none'}} onClick={() => handleMenuClose()}><FontAwesomeIcon icon={faXmark} size='lg'/></div>
        ) : (
          <div className='menu' style={{ display: 'none'}} onClick={() => handleMenuOpen()}><FontAwesomeIcon icon={faBars} /></div>
        )}
        <div className='visi'>
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
      </div>

      {menuVisible && (
        <div className='menuOver'>
          <div className='menuOver-content'>
            <Tabs
              value={value !== null ? value : false}
              onChange={handleChange}
              textColor="inherit"
              TabIndicatorProps={{ style: { display: 'none' } }}
              sx={{
                '& .MuiTabs-flexContainer': {
                  display: 'grid',
                  justifyItems: 'start',
                  gap: '0px',
                  fontSize: '3rem !important',
                  maxWidth: '100% !important',
                  height: 'calc(var(--vh, 1vh) * 25)',
                  margin: '0px 10px',
                },
                '@media (max-width: 767px)': {
                  '& .MuiTabs-flexContainer': {
                    gap: '15px',
                    margin: '5px 20px',
                    height: '100%',
                  },
                }
              }}
            >
              <Tab label="Présentation" component="a" href="#presentation" className='fontlabel'/>
              <Tab label="Compétences" component="a" href="#skill" className='fontlabel'/>
              <Tab label="Parcours" component="a" href="#career" className='fontlabel'/>
              <Tab label="Projets" component="a" href="#project" className='fontlabel'/>
              <Tab label="Contact" component="a" href="#contact" className='fontlabel'/>
            </Tabs>
            {Time === 'day' ? (
              <div className='ico-c fontlabel' style={{display: 'flex', margin: '10px 35px'}}>
                <FontAwesomeIcon icon={faSun} size="2x" onClick={() => setManualTime('night')} />
              </div>
            ) : (
              <div className='ico-c fontlabel' style={{display: 'flex', margin: '10px 35px'}}>
                <FontAwesomeIcon icon={faMoon} size="2x" onClick={() => setManualTime('day')} />
              </div>
            )}
          </div>
        </div>
      )}
    </nav>
  );
}

export default NavBar;
