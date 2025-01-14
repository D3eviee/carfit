import React, { useContext } from 'react'
import '@/Components/AdminUIComponents/MainPage/Calendar/CalendarEventTab/CalendarEventTab.css'
import EventCard from '../EventCard/EventCard'
import { EventContext } from '@/app/admin/context';

export default function CalendarEventTab({style}) {

  return (
    <div className='calendar-event-tab-container' style={style}>
      <h3>Wymiana opon</h3>
      <h5>10am to 11:30am</h5>
    </div>
  )
}