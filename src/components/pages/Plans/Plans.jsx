import React, { useState } from 'react'
import Navbar from '../../layouts/Navbar/Navbar'
import './Plans.css'

const Plans = () => {
  // Static data for plans
  const plansData = {
    membership: [
      { id: 1, name: "1 Month", amount: "4000" },
      { id: 2, name: "3 Months", amount: "10000" },
      { id: 3, name: "6 Months", amount: "12000" },
      { id: 4, name: "1 Year", amount: "17000" }
    ],
    pt: [
      { id: 1, name: "1 Month", type: "Gold", amount: "12000" },
      { id: 2, name: "1 Month", type: "Diamond", amount: "15000" },
      { id: 3, name: "3 Months", type: "Gold", amount: "33000" },
      { id: 4, name: "3 Months", type: "Diamond", amount: "39000" },
      { id: 5, name: "6 Months", type: "Gold", amount: "60000" },
      { id: 6, name: "6 Months", type: "Diamond", amount: "66000" }
    ]
  };

  const [selectedPlan, setSelectedPlan] = useState('pt')

  const handleMembership = () => {
    setSelectedPlan('membership')
  }

  const handlePT = () => {
    setSelectedPlan('pt')
  }

  return (
    <>
      <Navbar />

      <section className='plans'>
        <div>
          <button onClick={handleMembership} className={selectedPlan === 'membership' ? 'active' : ''}>
            Membership
          </button>
          <button onClick={handlePT} className={selectedPlan === 'pt' ? 'active' : ''}>
            Personal Training
          </button>
        </div>

        <div className='plans-data'>
          {selectedPlan === 'membership' ? (
            <>
              {plansData.membership.length > 0 ? (
                <div>
                  {plansData.membership.map((membership) => (
                    <div className='plan' key={membership.id}>
                      <h3 className='name'>{membership.name}</h3>
                      <span>Membership</span>
                      <p className='amount'>{membership.amount}</p>
                    </div>
                  ))}
                </div>
              ) : (
                <p>No Membership Plans Available</p>
              )}
            </>
          ) : (
            <>
              {plansData.pt.length > 0 ? (
                <div>
                  {plansData.pt.map((pt) => (
                    <div className='plan' key={pt.id}>
                      <h3 className='name'>{pt.name}</h3>
                      <span>Personal Training</span>
                      <p className='type'>{pt.type}</p>

                      {pt.type === 'Gold' ? (
                        <p className='days'>3 Days / Week</p>
                      ) : (
                        <p className='days'>5 Days / Week</p>
                      )}

                      <p className='amount'>{pt.amount}</p>
                    </div>
                  ))}
                </div>
              ) : (
                <p>No Personal Training Plans Available</p>
              )}
            </>
          )}
        </div>
      </section>
    </>
  )
}

export default Plans