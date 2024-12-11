import NavBar from './NavBar.js';
import Header from "./Header.js";
import Presentation from './Presentation.js';
import Footer from './Footer.js';
import Skill from './Skill.js';
import Career from './Career.js'
import Project from './Project.js'
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
  const skillRef = useRef(null);
  const careerRef = useRef(null);
  const projectRef = useRef(null);
  const contactRef = useRef(null);

  const Time = manualTime || automaticTime;

  useEffect(() => {
    const headerNode = headerRef.current; 
    const presentationNode = presentationRef.current;
    const skillNode = skillRef.current;
    const careerNode = careerRef.current;
    const projectNode = projectRef.current;
    const contactNode = contactRef.current;
  
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
    if (skillNode) observer.observe(skillNode);
    if (careerNode) observer.observe(careerNode);
    if (projectNode) observer.observe(projectNode);
    if (contactNode) observer.observe(contactNode);
  
    return () => {
      if (headerNode) observer.unobserve(headerNode);
      if (presentationNode) observer.unobserve(presentationNode);
      if (skillNode) observer.unobserve(skillNode);
      if (careerNode) observer.unobserve(careerNode);
      if (projectNode) observer.unobserve(projectNode);
      if (contactNode) observer.unobserve(contactNode);
    };
  }, []); // Gardez un tableau de dépendances vide si nécessaire

  return (
    <div className={`App ${Time}`}>
      <NavBar Time={Time} setManualTime={setManualTime} />
      <div id="header" ref={headerRef}>
        <Header Time={Time} />
      </div>
      <div id="presentation" ref={presentationRef}>
        <div style={{padding: '50px',}}></div>
        <Presentation Time={Time} />
      </div >
      <div id="skill" ref={skillRef}>
        <div style={{padding: '3rem',}}></div>
          <Skill Time={Time} />
      </div>
      <div id='career' ref={careerRef}>
        <div style={{padding: '40px',}}></div>
        <Career Time={Time} />
      </div>
      <div id='project' ref={projectRef}>
        <div style={{padding: '20px',}}></div>
        <Project Time={Time} />
      </div>
      <div id="contact" ref={contactRef}>
        <div style={{padding: '3em',}}></div>
        <Footer Time={Time} />
      </div>
    </div>
  );
}

export default App;
