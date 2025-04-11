import { useState } from 'react';
import '../styles/experience.css';
import EditDetails from './editDetails';
import SubmitDetails from './submitDetails';
import Input from './input';


export default function Experience({experience, updateExperience}) {
  const [experienceObj, setExperienceObj] = useState({});

  function updatePerson(){
    updateExperience({...experience, ...experienceObj})
  }

  return (
    <section className='experience'>
      <h2>Practical Experience</h2>
      <label>
        Company Name: 
        <Input type='text' obj={experienceObj} property='companyName' updateObj={setExperienceObj}/>
      </label>
      <label>
        Position Title: 
        <Input type='text' obj={experienceObj} property='position' updateObj={setExperienceObj}/>
      </label>
      <label>
        Main Responsibilities: 
        <Input type='text' obj={experienceObj} property='responsibilities' updateObj={setExperienceObj}/>
      </label>
      <div className='workDuration'>
        <label>
          Work Start Date
          <Input type='date' obj={experienceObj} property='workStart' updateObj={setExperienceObj}/>
        </label>
        <label className='end'>
          Work End Date
          <Input type='date' obj={experienceObj} property='workEnd' updateObj={setExperienceObj}/>
        </label>
      </div>
      <div>
        <SubmitDetails submitInfo={updatePerson}/>
        <EditDetails />
      </div>
    </section>
  )
}
