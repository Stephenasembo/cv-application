import '../styles/personalInfo.css';
import Input from './input';
import EditDetails from './editDetails';
import SubmitDetails from './submitDetails';
import { useState } from 'react';

export default function PersonalInfo({infoObj, setInfoObj}) {
  const [personalInfoObj, setPersonalInfoObj] = useState({
    name: '',
    phone: '',
    email: '',
  });
  const [keyCounter, setKeyCounter] = useState(0);

  // Update the person object with personal details
  function updateInfo() {
    setInfoObj({...infoObj, ...personalInfoObj});
    // Clear input after submission
    setPersonalInfoObj({
      name: '',
      phone: '',
      email: '',
    })
    // Create a new input element
    setKeyCounter(keyCounter + 1);
  }

  function editPersonalDetails() {
    setPersonalInfoObj({
      name: infoObj.name,
      phone: infoObj.phone,
      email: infoObj.email,
    });
    setKeyCounter(keyCounter + 1);
  }

  return (
    <section className='personalInfo'>
      <h2>Personal information</h2>
      <label>
        Name: 
        <Input
        key={'name' + keyCounter}
        type='text'
        obj={personalInfoObj}
        property='name'
        updateObj={setPersonalInfoObj}
        />
      </label>
      <label>
        Phone Number: 
        <Input
        key={'phone' + keyCounter}
        type='tel'
        obj={personalInfoObj}
        property='phone'
        updateObj={setPersonalInfoObj}
        />
      </label>
      <label>
        Email Address: 
        <Input
        key={'email' + keyCounter}
        type='email'
        obj={personalInfoObj}
        property='email'
        updateObj={setPersonalInfoObj}
        />
      </label>
      <div>
        <SubmitDetails submitInfo={updateInfo}/>
        <EditDetails editDetails={editPersonalDetails}/>
      </div>
    </section>
  )
}
