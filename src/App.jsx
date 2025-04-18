import './App.css';
import { useState } from 'react';
import PersonalInfo from './components/personalInfo';
import Education from './components/education';
import Experience from './components/experience';
import GenerateCV from './components/generateCV';

function App() {
  const [person, setPerson] = useState({});

  return (
    <>
      <div className='userInput'>
        <p>Please enter your details in the available fields</p>
        <PersonalInfo infoObj={person} setInfoObj={setPerson} />
        <Education educationInfo={person} updateEducationInfo={setPerson}/>
        <Experience experience={person} updateExperience={setPerson}/>
      </div>
      <GenerateCV person={person} />
    </>
  )
}

export default App;
