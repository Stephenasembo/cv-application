import '../styles/education.css';
import EditDetails from './editDetails';
import SubmitDetails from './submitDetails';

export default function Education({educationInfo, updateEducationInfo}) {
  function updateSchool(newSchool) {
    updateEducationInfo({...educationInfo, schoolName: newSchool});
  }
  function updateTitle(newTitle) {
    updateEducationInfo({...educationInfo, studyTitle: newTitle});
  }
  function updateStart(newDate) {
    updateEducationInfo({...educationInfo, studyStartDate: newDate});
  }
  function updateEnd(newDate) {
    updateEducationInfo({...educationInfo, studyEndDate: newDate});
  }
  return (
    <section className='educationInfo'>
      <h2>Educational information</h2>
      <label>
        School Name: 
        <input type='text' onChange={(e) => updateSchool(e.target.value)}/>
      </label>
      <label>
        Title of Study: 
        <input type='text' onChange={(e) => updateTitle(e.target.value)}/>
      </label>
      <div className='studyDuration'>
        <label>
          Study Start Date: 
          <input type='date' onChange={(e) => updateStart(e.target.value)}/>
        </label>
        <label className='end'>
          Study End Date: 
          <input type='date' onChange={(e) => updateEnd(e.target.value)}/>
        </label>
      </div>
      <div>
        <SubmitDetails />
        <EditDetails />
      </div>
    </section>
  )
}
