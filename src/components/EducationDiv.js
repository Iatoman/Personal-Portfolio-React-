import React from 'react'

const EducationDiv = ({institution, date, grades}) => {
  return (
    <div className='education-div' >
      <h5> {institution}</h5>
      <p>{date}</p>
      <p>{grades}</p>
    </div>
  )
}

export default EducationDiv
