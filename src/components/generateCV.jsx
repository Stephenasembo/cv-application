import '../styles/cv.css'

export default function GenerateCV({person}) {
  return (
    <div className="generatedCV">
      <div className='generatedPersonalInfo'>
        <h1>{person.name}</h1>
        {person.phone !== '' && <p>Phone number: {person.phone}</p>}
        {person.email !== '' && <p>Email: {person.email}</p>}
      </div>
      <div>
        {(person.schoolName || person.studyTitle || person.studyStartDate || person.studyEndDate)
        && <h2>Education Background</h2>}
        <div>
          {person.schoolName && <p>Institution: {person.schoolName}</p>}
          {person.studyTitle && <p>Title of Study: {person.studyTitle}</p>}
          {person.studyStartDate && <p>Study Start Date: {person.studyStartDate}</p>}
          {person.studyEndDate && <p>Study End Date: {person.studyEndDate}</p>}
        </div>
      </div>
      <div>
        {(person.companyName || person.position || person.responsibilities || person.workStart || person.workEnd)
        && <h2>Work Experience</h2>}
        <div>
          {person.companyName && <p>Company: {person.companyName}</p>}
          {person.position && <p>Position: {person.position}</p>}
          {person.responsibilities && <p>Responsibilities: {person.responsibilities}</p>}
          {person.workStart && <p>Work Start Date: {person.workStart}</p>}
          {person.workEnd && <p>Work End Date: {person.workEnd}</p>}
        </div>
      </div>
    </div>
  )
}
