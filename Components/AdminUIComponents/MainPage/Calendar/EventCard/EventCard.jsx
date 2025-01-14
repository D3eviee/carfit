import React from 'react'
import '@/Components/AdminUIComponents/MainPage/Calendar/EventCard/EventCard.css'
export default function EventCard({title, time, customer, car, worker, description}) {
  return (
    <div className='event-card-container'>
      <h1 className='event-card-container-title'>{title}</h1>
            
      <div className='event-card-container-detail-info'>
        <h3>Time:</h3>
        <h4>{time}</h4>
      </div>

      <div className='event-card-container-detail-info'>
        <h3>Customer:</h3>
        <h4>{customer}</h4>
      </div>

      <div className='event-card-container-detail-info'>
        <h3>Worker:</h3>
        <h4>{worker}</h4>
      </div>

      <div className='event-card-container-detail-info'>
        <h3>Car:</h3>
        <h4>{car}</h4>
      </div>

      <div className='event-card-container-detail-info'>
        <h3>Description:</h3>
        <h4>{description}</h4>
      </div>

      <button>FINISHED</button>
    </div>
  )
}
