import '../styles/education.css';

export default function Education({educationInfo, updateEducationInfo}) {
  function updateSchool(newSchool) {
    updateEducationInfo({...educationInfo, schoolName: newSchool});
  }
  function updateTitle(newTitle) {
    updateEducationInfo({...educationInfo, studyTitle: newTitle});
  }
  function updateDate(newDate) {
    updateEducationInfo({...educationInfo, studyDate: newDate});
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
      <label>
        Date of Study: 
        <input type='date' onChange={(e) => updateDate(e.target.value)}/>
      </label>
    </section>
  )
}
