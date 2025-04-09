import '../styles/experience.css'

export default function Experience() {
  return (
    <section className='experience'>
      <h2>Practical Experience</h2>
      <label>
        Company Name: 
        <input type='text'/>
      </label>
      <label>
        Position Title: 
        <input type='text'/>
      </label>
      <label>
        Main Responsibilities: 
        <input type='text'/>
      </label>
      <label>
        Duration: 
        <input type='date'/>
      </label>
    </section>
  )
}
