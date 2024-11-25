import React from 'react'
import './Header.css'

import headerImg from '../../../../assets/images/header.png'

const Header = () => {
  return (
    <>
        <div className='header'>
            <div className='header__grid-left'>
                <h1>Train Smarter, Get Stronger</h1>
                <p className='header__p-main'>Simple Fitness Experience With <span>Fitnesss Freak</span></p>
                <p className='header__p-not-main'>Track your workouts, get better results, and be the best version of you. Less Thinking, More Lifting</p>

                <div className='header__info'>
                    <div>
                        <p data-info='members'>K</p>
                        <p>Members</p>
                    </div>

                    <div>
                      <p data-info='customers'>K</p>
                      <p>Customers</p>
                    </div>

                    <div>
                      <p data-info='reviews'>K+</p>
                      <p>Reviews</p>
                    </div>
                </div>
            </div>
            <div className='header__grid-right'>
                <img src={headerImg} alt="" />
            </div>
        </div>
    </>
  )
}

export default Header
