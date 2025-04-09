import './App.css'

function App() {
  return (
    <>
    </>
  )
}

function PersonalInfo() {
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

function Education() {
  return (
    <section className='educationInfo'>
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

export {App, PersonalInfo, Education};
