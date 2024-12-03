import NavBar from './NavBar.js';
import Header from "./Header.js";
import Presentation from './Presentation.js';
import Footer from './Footer.js';
import useClassName from './Clock.js';
import { useState, useRef, useEffect } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  const automaticTime = useClassName();
  const [manualTime, setManualTime] = useState(null);
  const [currentSection, setCurrentSection] = useState(null);

  const headerRef = useRef(null);
  const presentationRef = useRef(null);

  const Time = manualTime || automaticTime;

  useEffect(() => {
    const headerNode = headerRef.current; // Copie dans une variable locale
    const presentationNode = presentationRef.current;
  
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setCurrentSection(entry.target.id); // Mettez à jour selon la section visible
          window.history.replaceState(null, '', `#${entry.target.id}`);
        }
      },
      { threshold: 0.5 }
    );
  
    if (headerNode) observer.observe(headerNode);
    if (presentationNode) observer.observe(presentationNode);
  
    return () => {
      if (headerNode) observer.unobserve(headerNode); // Utilise la variable locale
      if (presentationNode) observer.unobserve(presentationNode); // Utilise la variable locale
    };
  }, []); // Gardez un tableau de dépendances vide si nécessaire

  return (
    <div className={`App ${Time}`}>
      <NavBar Time={Time} setManualTime={setManualTime} />
      <div id="header" ref={headerRef}>
        <Header Time={Time} />
      </div>
      <div id="presentation" ref={presentationRef}>
        <Presentation Time={Time} />
      </div>
      <Footer Time={Time} />
    </div>
  );
}

export default App;
