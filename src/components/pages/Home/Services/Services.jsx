import React from 'react'
import './Services.css'

import servicesImg from '../../../../assets/images/12.jpg'
import twentyIcon from '../../../../assets/svg/twenty.svg'
import steamIcon from '../../../../assets/svg/steam.svg'
import machineIcon from '../../../../assets/svg/machine.svg'

const Services = () => {
  return (
    <> 
      <section className='services'>
        <h2>
          Services
        </h2>

        <div>
          <img src={servicesImg} alt="" />

          <div>
            <div>
              <img data-type='24X7' src={twentyIcon} alt="" />

              <div>
                <h4>24X7</h4>
                <p>First twenty four seven gym in Belapur</p>
              </div>
            </div>

            <div>
              <img data-type='steam' src={steamIcon} alt="" />

              <div>
                <h4>Steam</h4>
                <p>Steam to rejuvenate and relax the muscles after an intense session</p>
              </div>
            </div>

            <div>
              <img data-type='machine' src={machineIcon} alt="" />

              <div>
                <h4>Updated Machines</h4>
                <p>The most updated and latest machines of the year 2023. Available only at Fitnesss Freak</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Services
