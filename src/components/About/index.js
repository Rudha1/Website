import { useEffect, useState } from 'react'
import {
  faJava,
  faCss3,
  faGitAlt,
  faPython,
  faSwift,
  faReact,
} from '@fortawesome/free-brands-svg-icons'
import Loader from 'react-loaders'
import AnimatedLetters from '../AnimatedLetters'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './index.scss'

const About = () => {
  const [letterClass, setLetterClass] = useState('text-animate')

  useEffect(() => {
    return () => setTimeout(() => {
        setLetterClass('text-animate-hover')
    }, 3000)
}, [])

  return (
    <>
      <div className="container about-page">
        <div className="text-zone">
          <h1>
            <AnimatedLetters
              letterClass={letterClass}
              strArray={['A', 'b', 'o', 'u', 't', ' ', 'm', 'e']}
              idx={15}
            />
          </h1>
          <p>
          </p>
          <p>
            I'm a very ambitious computer science student looking for a role an internship 
            with the opportunity to work with the latest
            technologies on challenging and diverse projects.
          </p>
          <p align="LEFT">
            I'm naturally curious, and perpetually working on
            improving my skills in the vast field of software development.
          </p>
          <p>
            I love cooking, playing chess, dancing, and am tech obsessed!
          </p>
        </div>

        <div className="stage-cube-cont">
          <div className="cubespinner">
            <div className="face1">
              <FontAwesomeIcon icon={faCss3} color="#28A4D9" />
            </div>
            <div className="face2">
              <FontAwesomeIcon icon={faPython} color="#4B8BBE" />
            </div>
            <div className="face3">
              <FontAwesomeIcon icon={faJava} color="#D0A384" />
            </div>
            <div className="face4">
              <FontAwesomeIcon icon={faGitAlt} color ="EC4D28" />
            </div>
            <div className="face5">
              <FontAwesomeIcon icon={faSwift} color="#F05138" />
            </div>
            <div className="face6">
              <FontAwesomeIcon icon={faReact} color="#5ED4F4" />
            </div>
          </div>
        </div>
      </div>
      <Loader type="pacman" />
    </>
  )
}

export default About