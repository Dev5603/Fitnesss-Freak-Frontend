import React from 'react'
import './About.css'

import img1 from '../../../../assets/images/gym/gym2.png'
import img2 from '../../../../assets/images/gym/gym4.png'
import avdhut from '../../../../assets/images/avdhut.png'

const About = () => {
  return (
    <>
        <section className='about'>
            <div className='about__grid-left'>
                <img className='grid-col-span-2' src={img1} alt="" />
                
                <p>5+ Year Work Experience</p>

                <img src={img2} alt="" />
            </div>

            <div className='about__grid-right'>
                <h2>About Us</h2>
                <p className='p-main'>A comfortable place with high end equipment</p>

                <p className='motivation'>Push harder than yesterday. If you want to be different tomorrow.</p>

                <div>
                    <img src={avdhut} alt="" />
                    <div>
                        <div>
                            <p>Avdhut Khot</p>
                        </div>
                        <p className='ceo'>CEO - Fitnesss Freak</p>
                    </div>
                </div>
            </div>
        </section>
    </>
  )
}

export default About
