import React from 'react'
import "./porto.css"
import IMG1 from '../../assets/porto1.jpg'
import IMG2 from '../../assets/porto2.jpg'
import IMG3 from '../../assets/porto3.jpg'
import IMG4 from '../../assets/porto4.jpg'


const data = [
  {
    id: 1,
    image: IMG1,
    title: 'Web Movie',
    letsgo: 'https://rifkikarimr.github.io/web-movie/',
    // demo: 'https://rifkikarimr.github.io/web-movie/'
  },
  {
    id: 2,
    image: IMG2,
    title: 'My Github Repository',
    letsgo: 'https://github.com/rifkikarimr/',
    // demo: 'https://rifkikarimr.github.io/covid-tracker/'
  },
  {
    id: 3,
    image: IMG3,
    title: 'GCP Achievements',
    letsgo: 'https://www.cloudskillsboost.google/public_profiles/8463074e-8636-4823-b361-b143401cc781',
    // demo: 'https://rifkikarimr.github.io/api-bookshelf/'
  },
  {
    id: 4,
    image: IMG4,
    title: 'My Articles on Medium',
    letsgo: 'https://medium.com/@rifkikarimr',
    // demo: 'https://rifkikarimr.github.io/api-bookshelf/'
  }
]

const Porto = () => {
  return (
    <section id='porto'>
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio_container">
        {
          data.map(({ id, image, title, letsgo }) => {
            return (
              <article key={id} className="portfolio_item">
                <div className="portfolio_item-image">
                <img src={image} alt={title} />
                </div>
                  <h3>{title}</h3>
                <div className="portfolio_item-cta">
                  <a href={letsgo} className='btn'>Lets See!!</a>
                  {/* <a href={demo} className='btn btn-primary' target='blank'>Live</a> */}
                </div>
              </article>
            )
          })
        }
      </div>
    </section>
  )
}

export default Porto