import React, { useState, useEffect } from 'react'
import Navbar from '../../layouts/Navbar/Navbar'
import axios from 'axios'
import './Plans.css'

const Plans = () => {
  const [ memberships, setMemberships ] = useState([])
  const [ PTs, setPTs ] = useState([])
  const [ selectedPlan, setSelectedPlan ] = useState('pt')
     
  const handleMembership = ( e ) => {
    setSelectedPlan('membership')
  }

  const handlePT = ( e ) => {
    setSelectedPlan('pt')
  }

  useEffect(() => {
    const fetchPlans = async () => {
        try {
            const response = await axios.get(`${import.meta.env.VITE_API_URL}/plans`)
            setMemberships(response.data.plans.membership)
            setPTs(response.data.plans.pt)
        } catch (error) {
            
        }
    }

    fetchPlans()
  }, [])
  return (
    <>
        <Navbar />

        <section className='plans'>
                <div>
                    <button onClick={handleMembership} className={selectedPlan === 'membership' ? 'acitve': ''}>Membership</button>
                    <button onClick={handlePT} className={selectedPlan === 'pt' ? 'acitve': ''}>Personal Training</button>
                </div>

                <div className='plans-data'>
                    {selectedPlan === 'membership' ? (
                        <>
                            {memberships.length > 0 ? (
                                <div>
                                    {memberships.map((membership) => (
                                        <div className='plan' key={membership.id}>
                                            <h3 className='name'>{membership.name}</h3>
                                            <span>Membership</span>
                                            <p className='amount'>{membership.amount}</p>
                                        </div>
                                    ))}
                                </div>
                            ): (
                                <p>No Membership Plans Available</p>
                            )}
                        </>
                    ) : (
                        <>
                            {PTs.length > 0 ? (
                                <div>
                                    {PTs.map((pt) => (
                                        <div className='plan' key={pt.id}>
                                            <h3 className='name'>{pt.name}</h3>
                                            <span>Personal Training</span>
                                            <p className='type'>{pt.type}</p>

                                            {pt.type === 'gold' ? (
                                                <p className='days'>3 Days / Week</p>
                                            ): (
                                                <p className='days'>5 Days / Week</p>
                                            )}

                                            <p className='amount'>{pt.amount}</p>
                                        </div>
                                    ))}
                                </div>
                            ): (
                                <p>No Membership Plans Available</p>
                            )}
                        </>
                    )}
                </div>
        </section>
    </>
  )
}

export default Plans
