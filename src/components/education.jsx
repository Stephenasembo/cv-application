import '../styles/education.css';

export default function Education() {
  return (
    <section className='educationInfo'>
      <h2>Educational information</h2>
      <label>
        School Name: 
        <input type='text'/>
      </label>
      <label>
        Title of Study: 
        <input type='text'/>
      </label>
      <label>
        Date of Study: 
        <input type='date'/>
      </label>
    </section>
  )
}
