import '../styles/personalInfo.css';
import Input from './input';
import EditDetails from './editDetails';
import SubmitDetails from './submitDetails';
import { useState } from 'react';

export default function PersonalInfo({infoObj, setInfoObj}) {
  const [personalInfoObj, setPersonalInfoObj] = useState({});

  // Update the person object with personal details
  function updateInfo() {
    setInfoObj({...infoObj, ...personalInfoObj});
  }

  return (
    <section className='personalInfo'>
      <h2>Personal information</h2>
      <label>
        Name: 
        <Input type='text' obj={personalInfoObj} property='name' updateObj={setPersonalInfoObj}/>
      </label>
      <label>
        Phone Number: 
        <Input type='tel' obj={personalInfoObj} property='phone' updateObj={setPersonalInfoObj}/>
      </label>
      <label>
        Email Address: 
        <Input type='email' obj={personalInfoObj} property='email' updateObj={setPersonalInfoObj}/>
      </label>
      <div>
        <SubmitDetails submitInfo={updateInfo}/>
        <EditDetails />
      </div>
    </section>
  )
}
