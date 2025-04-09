import './App.css';
import { useState } from 'react';
import PersonalInfo from './components/personalInfo';
import Education from './components/education';
import Experience from './components/experience';
import GenerateCV from './components/generateCV';

function App() {
  const [person, setPerson] = useState({
    name: '',
    phone: '',
    email: '',
  });

  return (
    <>
      <div className='userInput'>
        <PersonalInfo infoObj={person} setInfoObj={setPerson} />
        <Education educationInfo={person} updateEducationInfo={setPerson}/>
        <Experience />
      </div>
      <GenerateCV person={person} />
    </>
  )
}

export default App;
