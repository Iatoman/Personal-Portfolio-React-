import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faGithub, } from '@fortawesome/free-brands-svg-icons'
import {faDesktop} from '@fortawesome/free-solid-svg-icons'





const PortfolioCard = ({projectName, projectDescription, githubLink, websiteLink, imageLink}) => {
  const imagePath = require(`../img/project-thumbnails/${imageLink}.png`);
  return (
    <div className='portfolio-card-container' key={projectName}>
      <div className="portfolio-card" >
        {/* <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
            <path d="M20 5H4V19L13.2923 9.70649C13.6828 9.31595 14.3159 9.31591 14.7065 9.70641L20 15.0104V5ZM2 3.9934C2 3.44476 2.45531 3 2.9918 3H21.0082C21.556 3 22 3.44495 22 3.9934V20.0066C22 20.5552 21.5447 21 21.0082 21H2.9918C2.44405 21 2 20.5551 2 20.0066V3.9934ZM8 11C6.89543 11 6 10.1046 6 9C6 7.89543 6.89543 7 8 7C9.10457 7 10 7.89543 10 9C10 10.1046 9.10457 11 8 11Z"></path>
        </svg> */}
         <img src={imagePath} alt={projectName} className="card__image"  />
        <div className="card__content" key={projectName}>
            <p className="card__title">{projectName}</p>
            <p className="card__description">{projectDescription}
            </p>
           
        </div>

    </div>
    <a href={githubLink} target="_blank" rel="noopener noreferrer">
      <FontAwesomeIcon icon={faGithub} className='icon animate__animated animate__pulse' />
    </a>

    <a href={websiteLink} target="_blank" rel="noopener noreferrer">
      <FontAwesomeIcon icon={faDesktop} className='icon animate__animated animate__pulse' />
    </a>

    </div>
    

  )
}

export default PortfolioCard
