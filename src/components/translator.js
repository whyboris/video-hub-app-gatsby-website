import React from "react"

// note this is just a copy of `Advisor` with the details removed
const Translator = ({ data }) => {
  return (
    <li>
      {data.name} &mdash; <i>{data.language}</i>
    </li>
  )
}

export default Translator
