import { useState } from "react"

export default function Input({type, obj, property, updateObj}) {
  const [value, setValue] = useState('');
  const newObj = {};
  Object.assign(newObj, obj);
  return(
    <input
    type={type}
    value={value}
    onChange={(e) => {
      const newValue = e.target.value;
      setValue(newValue);
      newObj[property] = newValue;
      updateObj(newObj);
    }}
    />
  )
}
