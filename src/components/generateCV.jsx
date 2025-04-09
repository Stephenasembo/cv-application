export default function GenerateCV({person}) {
  return (
    <div className="generatedCV">
      <h1>{person.name}</h1>
      {person.phone !== '' && <p>Your phone number is: {person.phone}</p>}
      {person.email !== '' && <p>Your email address is: {person.email}</p>}
    </div>
  )
}
