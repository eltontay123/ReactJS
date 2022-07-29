import React from 'react'
import '../styles/card.css'
import marker from '../images/google-marker.png'

export default function Card(props) {
  return (
    <section className='card'>
      <img className='card-img' src={props.imageUrl} alt={props.title}/>
      <div className='card-content'>
        <div className='card-content-stats'>
          <span className='card-content-stats-location'>
            <img src={marker} alt='google marker'/>
            {props.location}
          </span>
          <a className='card-content-stats-url' href={ props.googleMapsURL}> View on Google Maps</a>
        </div>
        <h1 className='card-content-title'>{props.title}</h1>
        <h5 className='card-content-date'>{props.startDate} - {props.endDate}</h5>
        <p className='card-content-desc'>{props.description}</p>
      </div>
    </section>
  )
}
