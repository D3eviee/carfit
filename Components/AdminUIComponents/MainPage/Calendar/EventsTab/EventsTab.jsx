import React, { useContext } from 'react'
import '@/Components/AdminUIComponents/MainPage/Calendar/EventsTab/EventsTab.css'
import EventCard from '../EventCard/EventCard'
import { EventContext } from '@/app/admin/context';

export default function EventsTab({events}) {

  return (
    <div className='event-tab-container'>
        <h2>Active tasks</h2>
        <div className='event-tab-container-tasks-list'>
        {events.length > 0 ? (
          events.map((event, index) => (
          <EventCard
            key={index}
            title={event.eventService}
            time={event.eventTime}
            customer={event.eventCustomer}
            car={event.eventCar}
            worker={"Mechanik " + event.eventService}
            description={"This is description for " + event.eventService}
          />
        ))
      ) : (
       <></>
      )}
        </div>
    </div>
  )
}