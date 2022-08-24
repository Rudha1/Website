import { Link, NavLink } from 'react-router-dom'
import './index.scss'
import LogoA from '../../assets/images/logo-a.png'
import LogoSubtitle from '../../assets/images/logo_subA.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faHome, faSuitcase, faUser } from '@fortawesome/free-solid-svg-icons'

const Sidebar = () => (
    <div className = 'nav-bar'>
        <Link className = 'logo' to = '/'>
            <img src = {LogoA} alt = "logo" />
            <img className = "sub-logo" src = {LogoSubtitle} alt = "anirudh" />
        </Link>
        <nav>
            <NavLink exact = "true" activeclassname = "active" to = "/">
                <FontAwesomeIcon icon = {faHome} color = "#4d4d4e" />
            </NavLink>
            <NavLink exact = "true" activeclassname = "active" className = "about-link " to = "/about">
                <FontAwesomeIcon icon = {faUser} color = "#4d4d4e" />
            </NavLink>
            <NavLink exact = "true" activeclassname = "active" className = "portfolio-link " to = "/portfolio">
                <FontAwesomeIcon icon = {faSuitcase} color = "#4d4d4e" />
            </NavLink>
            <NavLink exact = "true" activeclassname = "active" className = "contact-link" to = "/contact">
                <FontAwesomeIcon icon = {faEnvelope} color = "#4d4d4e" />
            </NavLink>
        </nav>
    </div>
)

export default Sidebar 
