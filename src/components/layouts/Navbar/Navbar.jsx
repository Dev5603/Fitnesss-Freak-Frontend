import React, { useRef } from 'react'
import { Link } from 'react-router-dom'
import './Navbar.css'

import logo from '../../../assets/images/logo.png'

const Navbar = ({ onContactClick }) => {
  const navBtn = useRef(false)
  const navBar = useRef(false)

  const handleClick = ( e ) => {
    const visible = navBar.current.getAttribute('data-visible')

    if (visible === 'false') {
        navBtn.current.setAttribute('aria-expanded', 'true')
        navBar.current.setAttribute('data-visible', 'true')
    } else {
        navBtn.current.setAttribute('aria-expanded', 'false')
        navBar.current.setAttribute('data-visible', 'false')
    }

  }

  const handleContactClick = ( e ) => {
    // If the "Contact" button is clicked, trigger scroll
    if (e.target.textContent === "Contact") {
      onContactClick() // Call onContactClick function passed from parent
    }
  }

  return (
    <>
        <header className='primary-header flex'>
          <Link className='logo' to="/"><img src={logo} /></Link>

          <button className='nav-btn' aria-controls='primary-navigation' aria-expanded={navBtn.current} onClick={handleClick} ref={navBtn}>
            <span className='sr-only'>
              Menu
            </span>
          </button>

          <nav>

            <ul className='primary-navigation flex' id='primary-navigation' data-visible={navBar.current} ref={navBar}>
              <li>
                <Link to='/plans'>Plans</Link>
              </li>
              
              <li>
                <Link onClick={handleContactClick}>Contact</Link>
              </li>
            </ul>
          </nav>
        </header>
    </>
  )
}

export default Navbar
