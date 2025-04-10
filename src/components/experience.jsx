import '../styles/experience.css';
import EditDetails from './editDetails';
import SubmitDetails from './submitDetails';


export default function Experience({experience, updateExperience}) {
  function updateCompany(newCompany) {
    updateExperience({...experience, companyName: newCompany});
  }
  function updatePosition(newPosition) {
    updateExperience({...experience, position: newPosition});
  }
  function updateResponsibilities(newResponsibilities) {
    updateExperience({...experience, responsibilities: newResponsibilities});
  }
  function updateWorkStart(newDuration) {
    updateExperience({...experience, workStart: newDuration});
  }
  function updateWorkEnd(newDuration) {
    updateExperience({...experience, workEnd: newDuration});
  }

  return (
    <section className='experience'>
      <h2>Practical Experience</h2>
      <label>
        Company Name: 
        <input type='text' onChange={(e) => updateCompany(e.target.value)}/>
      </label>
      <label>
        Position Title: 
        <input type='text' onChange={(e) => updatePosition(e.target.value)}/>
      </label>
      <label>
        Main Responsibilities: 
        <input type='text' onChange={(e) => updateResponsibilities(e.target.value)}/>
      </label>
      <div className='workDuration'>
        <label>
          Work Start Date
          <input type='date' onChange={(e) => updateWorkStart(e.target.value)}/>
        </label>
        <label className='end'>
          Work End Date
          <input type='date' onChange={(e) => updateWorkEnd(e.target.value)}/>
        </label>
      </div>
      <div>
        <SubmitDetails />
        <EditDetails />
      </div>
    </section>
  )
}
