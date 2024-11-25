import React, { useState, forwardRef } from 'react'
import toast, { Toaster } from 'react-hot-toast';
import axios from 'axios'
import './Contact.css'

const Contact = forwardRef((props, ref) => {
  const [formData, setFormData] = useState({
    'name': '',
    'number': '',
    'email': ''
  })
  const [loading, setLoading] = useState(false)

  const handleChange = (e) => {
    const { name, value } = e.target

    setFormData({
      ...formData,
      [name]: value
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()

    try {
      setLoading(true)

      const response = await axios.post(`${import.meta.env.VITE_API_URL}/contact`, {
        'name': formData.name,
        'number': formData.number,
        'email': formData.email
      })

      if (response.status === 201) {
        setFormData({
          'name': '',
          'number': '',
          'email': ''
        })

        toast.success('Data Submitted Successfully')
      }
    } catch (error) {
      toast.error('Something Went Wrong')
    } finally {
      setLoading(false)
    }
  }

  return (
    <>
      <Toaster />
      <section className="contact" ref={ref}> {/* Attach the ref here */}
        <h2>Contact Us</h2>

        <div>
          <form onSubmit={handleSubmit}>
            <div>
              <label htmlFor="name">Name</label>
              <input type="text" name="name" id="name" onChange={handleChange} value={formData.name} />
            </div>

            <div>
              <label htmlFor="number">Number</label>
              <input type="text" name="number" id="number" maxLength={10} onChange={handleChange} value={formData.number} />
            </div>

            <div>
              <label htmlFor="email">Email</label>
              <input type="email" name="email" id="email" placeholder="johndoe@gmail.com" onChange={handleChange} value={formData.email} />
            </div>

            <button type="submit">{loading ? 'Loading' : 'Submit'}</button>
          </form>
        </div>
      </section>
    </>
  )
})

export default Contact