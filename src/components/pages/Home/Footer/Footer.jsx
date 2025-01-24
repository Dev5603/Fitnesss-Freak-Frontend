import React from 'react'
import { Link } from 'react-router-dom'
import './Footer.css'

const Footer = () => {
  return (
    <>
        <section className='footer flex'>
            <h2>Fitnesss Freak</h2>

            <ul className='flex'>
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/plans">Plans</Link>
                </li>
                <li>
                    <a href="">Contact</a>
                </li>
            </ul>

        </section>
        <p className='velar'>Designed by VELAR</p>
    </>
  )
}

export default Footer
