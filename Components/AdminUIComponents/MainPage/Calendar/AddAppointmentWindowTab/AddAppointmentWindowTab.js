'use client'
import '@/Components/AdminUIComponents/MainPage/Calendar/AddAppointmentWindowTab/AddAppointmentWindowTab.css'

import worker1 from '@/Assets/images/worker1.jpg';
import worker2 from '@/Assets/images/worker2.jpg';
import worker3 from '@/Assets/images/worker3.jpg';
import Image from 'next/image';
import { useContext, useRef, useState } from 'react';
import { EventContext} from '@/app/admin/context';

export default function AddAppointmentWindowTab({closeAppointmentTab = f=>f}) {
  let {addData} = useContext(EventContext);

  const eventService = useRef("");
  const eventDate = useRef("");
  const eventTime = useRef("")
  const eventDuration = useRef("")
  const eventCustomer = useRef("")
  const eventCar = useRef("")
  
  
  function addEvent(){
    addData(
      {
        eventService: eventService.current.value,
        eventDate: eventDate.current.value,
        eventTime: eventTime.current.value,
        eventDuration: eventDuration.current.value, 
        eventCustomer: eventCustomer.current.value,
        eventCar: eventCar.current.value,
      });

      closeAppointmentTab()
  }

  return (
  <>
    <div className="add-appointment-container">
    
    </div>
    <div className="add-appointment-container-form">
      <div className="add-appointment-container-form-top">
        <p onClick={()=>closeAppointmentTab()}>x</p>
        <h4>New Appointment</h4>
        <button onClick={()=>{addEvent()}}>ADD</button>
      </div>

      <form>
        <p>Service</p>
        <select ref={eventService}>
          <option>Select service</option>
          <option>1</option>
          <option>2</option>
          <option>3</option>
        </select>

        <p>Worker</p>
        <div className="add-appointment-container-form-workers">
          <div className="add-appointment-container-form-workers-tab">
            <Image src={worker1} width={20} height={20}/>
            <p>Ania Marzyciel</p>
          </div>
          <div className="add-appointment-container-form-workers-tab">
            <Image src={worker2} width={20} height={20}/>
            <p>Jackie Mackie</p>
          </div>
          <div className="add-appointment-container-form-workers-tab">
            <Image src={worker3} width={20} height={20}/>
            <p>Mac Mickie</p>
          </div>
        </div>

        <div className="add-appointment-container-form-date-inputs">
          <div className="add-appointment-container-form-date-inputs-day">
           <p>Date</p>
           <input type="date" ref={eventDate}/>
          </div>
          <div className="add-appointment-container-form-date-inputs-time">
           <p>Time</p>
           <select ref={eventTime}>
            <option>7:00</option>
            <option>7:15</option>
            <option>7:30</option>
            <option>7:45</option>
            <option>8:00</option>
            <option>8:15</option>
            <option>8:30</option>
            <option>8:45</option>
            <option>9:00</option>
            <option>9:15</option>
            <option>9:30</option>
            <option>9:45</option>
            <option>10:00</option>
            <option>10:15</option>
            <option>10:30</option>
            <option>10:45</option>
            <option>11:00</option>
            <option>11:15</option>
            <option>11:30</option>
            <option>11:45 </option>
            <option>12:30 </option>
            <option>13:45 </option>
            <option>14:15 </option>
            <option>10:30 </option>
            <option>11:00 </option>
            <option>11:45 </option>
            <option>12:30 </option>
            <option>13:45 </option>
            <option>14:15 </option>
           </select>
          </div>
          <div className="add-appointment-container-form-date-inputs-duration">
           <p>Duration</p>
           <select ref={eventDuration}>
            <option value="15">15 min</option>
            <option value="30">30 min</option>
            <option value="45">45 min</option>
            <option value="60">1 hour</option>
            <option value="75">1h 15 min</option>
            <option value="90">1h 30 min</option>
            <option value="105">1h 45 min</option>
            <option value="120">2 hour</option>
           </select>
          </div>
        </div>


        <p>Customer</p>
        <input type="text" placeholder="Customers name..." ref={eventCustomer}/>

        <p>Car</p>
        <input type="text" placeholder="Customers car model..." ref={eventCar}/>
      </form>
    </div>
    </>
  );
}
