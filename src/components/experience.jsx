import { useState } from 'react';
import '../styles/experience.css';
import EditDetails from './editDetails';
import SubmitDetails from './submitDetails';
import Input from './input';


export default function Experience({experience, updateExperience}) {
  const [experienceObj, setExperienceObj] = useState({
    companyName: '',
    position: '',
    responsibilities: '',
    workStart: '',
    workEnd: '',
  });
  const [keyCounter, setKeyCounter] = useState(0);

  function updatePerson(){
    updateExperience({...experience, ...experienceObj});
    // Clear input after submission
    setExperienceObj({
      companyName: '',
      position: '',
      responsibilities: '',
      workStart: '',
      workEnd: '',
    })
    // Create a new input element
    setKeyCounter(keyCounter + 1);
  }

  function editExperienceDetails() {
    setExperienceObj({
      companyName: experience.companyName,
      position: experience.position,
      responsibilities: experience.responsibilities,
      workStart: experience.workStart,
      workEnd: experience.workEnd,
    });
    setKeyCounter(keyCounter + 1);
  }


  return (
    <section className='experience'>
      <h2>Practical Experience</h2>
      <label>
        Company Name: 
        <Input
        key={'companyName' + keyCounter}
        type='text'
        obj={experienceObj}
        property='companyName'
        updateObj={setExperienceObj}
        />
      </label>
      <label>
        Position Title: 
        <Input
        key={'position' + keyCounter}
        type='text'
        obj={experienceObj}
        property='position'
        updateObj={setExperienceObj}
        />
      </label>
      <label>
        Main Responsibilities: 
        <Input
        key={'responsibilities' + keyCounter}
        type='text'
        obj={experienceObj}
        property='responsibilities'
        updateObj={setExperienceObj}
        />
      </label>
      <div className='workDuration'>
        <label>
          Work Start Date
          <Input
          key={'workStart' + keyCounter}
          type='date'
          obj={experienceObj}
          property='workStart'
          updateObj={setExperienceObj}
          />
        </label>
        <label className='end'>
          Work End Date
          <Input
          key={'workEnd' + keyCounter}
          type='date'
          obj={experienceObj}
          property='workEnd'
          updateObj={setExperienceObj}
          />
        </label>
      </div>
      <div>
        <SubmitDetails submitInfo={updatePerson}/>
        <EditDetails editDetails={editExperienceDetails} />
      </div>
    </section>
  )
}
