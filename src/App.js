import NavBar from './NavBar.js';
import Header from "./Header.js";
import Presentation from './Presentation.js';
import Footer from './Footer.js';
import useClassName from './Clock.js';
import { useState } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  const automaticTime = useClassName(); // Mode automatique basé sur l'heure
  const [manualTime, setManualTime] = useState(null); // Mode manuel

  // Priorité au mode manuel si défini
  const Time = manualTime || automaticTime;

  return (
    <div className={`App ${Time}`}>
      <NavBar Time={Time} setManualTime={setManualTime} />
      <Header Time={Time}/>
      <Presentation Time={Time} />
      <Footer Time={Time} />
    </div>
  );
}

export default App;
