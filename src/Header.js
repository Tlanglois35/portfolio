import React, { useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';
import Typed from 'typed.js';
import { ReactComponent as Logo } from './icon.svg';
import "./Header.css";

function Header({ Time }) {

    function updateVh() {
        const vh = window.innerHeight * 0.01;
        document.documentElement.style.setProperty('--vh', `${vh}px`);
    }
      
    useEffect(() => {
        updateVh();
        window.addEventListener('resize', updateVh);
        return () => window.removeEventListener('resize', updateVh);
    }, []);
    
    useEffect(() => {
        // Initialisation de Typed.js après le montage du composant
        const options = {
            strings: [
                "BTS 2ème année prépa Ingénieur ISEN OUEST.",
                "Recherche d'atlerance",
                "Recherche d'alternance Ingénieur en automatisme / mécatronique / systèmes embarqués. "
            ],
            typeSpeed: 80,
            backSpeed: 40,
            backDelay: 1000,
            loop: true,
        };

        const typed = new Typed('.header-typed', options);

        // Nettoyage : détruire l'instance Typed.js lors du démontage du composant
        return () => {
            typed.destroy();
        };
    }, []); // Le tableau vide [] signifie que cet effet ne s'exécutera qu'une seule fois

    return (
        <div className={`Header ${Time}  p-0 position-relative`}>
            <div className='header-container'>
                <div className='header-content'>
                    <div>
                        <Logo className='header-logo' />
                    </div>
                    <div className='header-body d-flex flex-column justify-content-center align-items-center h-100'>
                        <h1 className='name'>Thomas LANGLOIS</h1>
                        {/* Élément pour afficher le texte animé */}
                        <div className='header-typed-box'>
                        <span className='header-typed'></span>
                        </div>
                    </div>
                </div>
            </div>
            <a href="#presentation" style={{ textDecoration: 'none', color: 'inherit' }}>
            <div className="header-arrow position-absolute start-50 translate-middle-x opacity-75">
                <FontAwesomeIcon icon={faChevronDown} size="4x" />
            </div>
            </a>
        </div>
    );
}

export default Header;
