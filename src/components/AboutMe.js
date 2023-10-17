import React from 'react'
import EducationDiv from './EducationDiv'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


const AboutMe = () => {
  const educationArr = [
    {
      institution:'University of Nottingham ',
      date:'09/2020 - 07/2023',
      grades: 'Second Class Division One (2:1)'
    },
    {
      institution:'Royal Russell School',
      date:'09/2018 - 07-2020',
      grades: 'A*AA (Comp Sci, Maths, Economics)'
    },
    {
      institution:'Leigh Academy',
      date:'09/2013 - 07/2018',
      grades: '7 A*-A (Maths, Comp Sci)'
    },

  ]

  const accomplishedLanguages = ['Python', 'Javascript (ES6)', 'React', 'R']
  const profficientLangs = ['Flask', 'MySQL', 'Java', 'C#', 'C++', 'PHP']

  return (
    <section id='about'>
        <h1>About Me</h1>
     
        <div className='about-container'>
            <div className='description' >
            <h4>General</h4>
            <h5>Who Am I</h5>
                <p>
                    I am a passionate learner who enjoys working in new technologies and building projects.
                    Apart from coding my interests and hobbies include playing or watching sports, gaming and travelling.
                </p>  
                <br></br>            
                <h5>Life Update</h5>
                <p>
                    
                    Currently I'm working on is a full stack project utilising ReactJs, Flask (Python)
                    and MongoDB.
                </p>
            </div>
            <div className='education'>
              <h4>Education</h4>
              {educationArr.map(e => {
                return <EducationDiv key={e.institution} institution={e.institution} date={e.date} grades={e.grades}/>
              })}
            </div>
            
            <div className='skills'>
              <h4>Skills</h4>
              <h5>Accomplished</h5>
              <ul className='accomplished-lang-list'>
                {accomplishedLanguages.map(l=>{
                  return <li className='accomplished-lang' key={l}>{l}</li>
                })}

              </ul>
              <h5>Profficient</h5>
              <ul className='profficient-lang-list'>
                {profficientLangs.map(l=>{
                  return <li className='profficient-lang' key={l}>{l}</li>
                })}

              </ul>

            </div>

        </div>
      
    </section>
  )
}

export default AboutMe
