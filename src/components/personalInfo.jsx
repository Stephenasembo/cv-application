import '../styles/personalInfo.css';
import Input from './input';
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
        <Input type='text' />
      </label>
      <label>
        Phone Number: 
        <Input type='tel' />
      </label>
      <label>
        Email Address: 
        <Input type='email' />
      </label>
      <div>
        <SubmitDetails />
        <EditDetails />
      </div>
    </section>
  )
}
