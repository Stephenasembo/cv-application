import '../styles/cv.css'

export default function GenerateCV({person}) {
  return (
    <div className="generatedCV">
      <div>
        <h1>{person.name}</h1>
        {person.phone !== '' && <p>Your phone number is: {person.phone}</p>}
        {person.email !== '' && <p>Your email address is: {person.email}</p>}
      </div>
      <div>
        {(person.schoolName || person.studyTitle || person.studyDate)
        && <h2>Education Background</h2>}
        <div>
          {person.schoolName && <p>Institution: {person.schoolName}</p>}
          {person.studyTitle && <p>Title of Study: {person.studyTitle}</p>}
          {person.studyDate && <p>Date of Study: {person.studyDate}</p>}
        </div>
      </div>
      <div>
        {(person.companyName || person.position || person.responsibilities || person.jobDuration)
        && <h2>Work Experience</h2>}
        <div>
          {person.companyName && <p>Company: {person.companyName}</p>}
          {person.position && <p>Position: {person.position}</p>}
          {person.responsibilities && <p>Responsibilities Held: {person.responsibilities}</p>}
          {person.jobDuration && <p>Work Duration: {person.jobDuration}</p>}
        </div>
      </div>
    </div>
  )
}
