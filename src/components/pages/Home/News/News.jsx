import React, { useState, useEffect } from 'react'
import axios from 'axios'
import './News.css'

const News = () => {
  const [ news, setNews ] = useState([])
  const [ loading, setLoading ] = useState(false)

  useEffect(() => {
    const fetchNews = async () => {
        try {
            setLoading(true)
            const response = await axios.get(`${import.meta.env.VITE_API_URL}/news`)

            if (response.status === 200) {
                setNews(response.data.news)
            }
        } catch (error) {

        } finally {
            setLoading(false)
        }
    }

    fetchNews()
  }, [])

  return (
    <>
        <section className='news'>
            <div>
                <h2>News and Events</h2>
                <p>Keep yourself updated with our news and events</p>
            </div>

            <div>
                {news.map((singleNews) => (
                    <div key={singleNews.id}>
                        <article>
                            <img src={singleNews.image} alt="" />
                            <div>
                                <h4>{singleNews.title}</h4>
                                <p>{singleNews.content}</p>
                            </div>
                        </article>
                    </div>
                ))}
            </div>
        </section>
    </>
  )
}

export default News
