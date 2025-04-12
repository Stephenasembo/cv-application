export default function EditDetails({editDetails}) {
  return (
    <button
    className="editDetailsBtn"
    onClick={editDetails}
    >
      Edit Details
    </button>
  )
}

  function editPersonalDetails() {
    setPersonalInfoObj({
      name: infoObj.name,
      phone: infoObj.phone,
      email: infoObj.email,
    });
    setKeyCounter(keyCounter + 1);
  }
