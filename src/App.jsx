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
      <PersonalInfo infoObj={person} setInfoObj={setPerson} />
      <Education />
      <Experience />
      <GenerateCV person={person} />
    </>
  )
}

export default App;
