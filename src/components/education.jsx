import { useState } from 'react';
import '../styles/education.css';
import EditDetails from './editDetails';
import SubmitDetails from './submitDetails';
import Input from './input';

export default function Education({educationInfo, updateEducationInfo}) {
  const [educationInfoObj, setEducationInfoObj] = useState({});
  const [keyCounter, setKeyCounter] = useState(0);

  function updatePerson(){
    updateEducationInfo({...educationInfo, ...educationInfoObj})
    setKeyCounter(keyCounter + 1);
  }

  return (
    <section className='educationInfo'>
      <h2>Educational information</h2>
      <label>
        School Name: 
        <Input
        key={'schoolName' + keyCounter}
        type='text'
        obj={educationInfoObj}
        property='schoolName'
        updateObj={setEducationInfoObj}
        />
      </label>
      <label>
        Title of Study: 
        <Input
        key={'studyTitle' + keyCounter}
        type='text'
        obj={educationInfoObj}
        property='studyTitle'
        updateObj={setEducationInfoObj}
        />
      </label>
      <div className='studyDuration'>
        <label>
          Study Start Date: 
          <Input
          key={'studyStartDate' + keyCounter}
          type='date'
          obj={educationInfoObj}
          property='studyStartDate'
          updateObj={setEducationInfoObj}
          />
        </label>
        <label className='end'>
          Study End Date: 
          <Input
          key={'studyEndDate' + keyCounter}
          type='date'
          obj={educationInfoObj}
          property='studyEndDate'
          updateObj={setEducationInfoObj}
          />
        </label>
      </div>
      <div>
        <SubmitDetails submitInfo={updatePerson}/>
        <EditDetails />
      </div>
    </section>
  )
}
