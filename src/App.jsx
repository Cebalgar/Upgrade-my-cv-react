
import { useState } from "react";
import './App.css';
import Hero from "./components/Hero/Hero";
import About from "./components/About/About";
import Education from "./components/Education/Education";
import Experience from "./components/Experience/Experience";
import More from "./components/More/More";
import {CV} from "./CV/CV";

const {hero, education, experience, languages, habilities} = CV;

const App=() => {
  const [showEducation, setShowEducation] = useState(true);
 
  return (
    <div className="App">
    <div>
        <Hero hero={hero}/>

        <About hero={hero}/>
    </div>

      <button className="custom-btn btn-4"
        onClick={() => setShowEducation(true)}>
          Educación
      </button>

      <button className="custom-btn btn-4"
        onClick={() => setShowEducation(false)}>
          Experiencia
      </button>

      <div>
        {showEducation ? ( <Education education={education} />) : 
        (<Experience experience={experience} />)}
      </div>

      <More 
      languages={languages}
      habilities={habilities}
      />
    
    </div>
  );
}

export default App;
