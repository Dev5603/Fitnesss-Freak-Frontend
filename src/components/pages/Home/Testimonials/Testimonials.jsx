import React from 'react'
import './Testimonials.css'

import testmonial1 from '../../../../assets/images/testimony1.png'
import testmonial2 from '../../../../assets/images/testimony2.png'
import testmonial3 from '../../../../assets/images/testimony3.png'
import testmonial4 from '../../../../assets/images/testimony4.png'

const Testimonials = () => {
  return (
    <>
        <section className='testimonials'>
            <h2>Testimonials</h2>

            <div>
                <div>
                    <img src={testmonial1} alt="" />

                    <div>
                        <h4>Remya Pillai</h4>
                        <p>
                            Fitness Freak Gym is a top-notch destination with exceptional training tailored to your goals. Thanks to my trainer Megha for making workouts fun and easy. Highly recommend this gym for fitness enthusiasts!
                        </p>
                    </div>
                </div>

                <div className='testimonial-2'>
                    <img src={testmonial2} alt="" />

                    <div>
                        <h4>Prakash Hanat</h4>
                        <p>
                            Fitness Freak Gym is clean and hygienic, with certified and friendly trainers. I’ve been working out for two months, and my personal trainer, Megha, is knowledgeable and supportive. The gym is open 24/7.
                        </p>
                    </div>
                </div>

                <div className=''>
                    <img src={testmonial3} alt="" />

                    <div>
                        <h4>Ankit Lokare</h4>
                        <p>
                            Fitness Freak has a supportive community for achieving fitness goals. They host motivating events, provide great equipment, and have knowledgeable trainers like Harsh and floor manager Akshay. 
                        </p>
                    </div>
                </div>

                <div className=''>
                    <img src={testmonial4} alt="" />

                    <div>
                        <h4>Sanjit Pasi</h4>
                        <p>
                            Spacious gym. Trainers are very friendly and supportive. They are well educated and knowledgeable. Kudos to Satyam Sir. Highly recommend this gym for fitness enthusiasts!
                        </p>
                    </div>
                </div>
            </div>
        </section>
    </>
  )
}

export default Testimonials
