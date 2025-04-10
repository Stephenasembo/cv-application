import { useState } from "react"

export default function Input({type}) {
  const [value, setValue] = useState('');
  return(
    <input
    type={type}
    value={value}
    onChange={(e) => setValue(e.target.value)}
    />
  )
}
