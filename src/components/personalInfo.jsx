import '../styles/personalInfo.css'
import EditDetails from './editDetails';
import SubmitDetails from './submitDetails';

export default function PersonalInfo({infoObj, setInfoObj}) {
  function updateName(newName) {
    setInfoObj({...infoObj, name: newName});
  }

  function updatePhone(newPhone) {
    setInfoObj({...infoObj, phone: newPhone});
  }

  function updateEmail(newEmail) {
    setInfoObj({...infoObj, email: newEmail});
  }

  return (
    <section className='personalInfo'>
      <h2>Personal information</h2>
      <label>
        Name: 
        <input type='text' onChange={(e) => updateName(e.target.value)}/>
      </label>
      <label>
        Phone Number: 
        <input type='tel'onChange={(e) => updatePhone(e.target.value)}/>
      </label>
      <label>
        Email Address: 
        <input type='email' onChange={(e) => updateEmail(e.target.value)}/>
      </label>
      <div>
        <SubmitDetails />
        <EditDetails />
      </div>
    </section>
  )
}
