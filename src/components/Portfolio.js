import React from 'react'
import PortfolioCard from './PortfolioCard'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { portfolioArray } from '../data/portfolio_data'

const Portfolio = () => {
  return (
    <section id='portfolio'>
        <h1>Portfolio</h1> 
        <div className='portfolio-container'>
            {/* <PortfolioCard projectName={'React'} projectDescription={'Just me doing a mad ting'} githubLink={'www'} websiteLink={'www'}/> */}
            {portfolioArray.map(project => {
              return <PortfolioCard projectName={project.projectName} projectDescription={project.projectDescription} githubLink={project.githubLink} websiteLink={project.websiteLink}
               imageLink={project.imgUrl} key={project.projectName}/>

            })}
            
            
        </div>
      
    </section>
  )
}

export default Portfolio
