import React from 'react'
import './Footer.css'

const Footer = () => {
  return (
    <>
        <section className='footer flex'>
            <h2>Fitnesss Freak</h2>

            <ul className='flex'>
                <li>
                    <a href="">Home</a>
                </li>
                <li>
                    <a href="">Plans</a>
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
