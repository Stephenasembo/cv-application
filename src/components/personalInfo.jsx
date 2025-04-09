export default function PersonalInfo() {
  return (
    <section className='personalInfo'>
      <label>
        Name: 
        <input type='text'/>
      </label>
      <label>
        Phone Number: 
        <input type='tel'/>
      </label>
      <label>
        Email Address: 
        <input type='email'/>
      </label>
    </section>
  )
}
