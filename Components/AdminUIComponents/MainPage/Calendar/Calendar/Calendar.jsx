'use client'
import CalendarNavigation from "../CalendarNavigation/CalendarNavigation";
import AddAppointmentButton from "../AddAppointmentButton/AddAppointmentButton";
import '@/Components/AdminUIComponents/MainPage/Calendar/Calendar/Calendar.css'
import { useContext, useState, useEffect } from "react";
import AddAppointmentWindowTab from "../AddAppointmentWindowTab/AddAppointmentWindowTab";
import CalendarView from "../CalendarView/CalendarView";
import SmallCalendar from "../SmallCalendar/SmallCalendar";
import EventsTab from "../EventsTab/EventsTab";
import { EventContext} from "@/app/admin/context";

export default function Calendar() {
  const [isClient, setIsClient] = useState(false)
  const [openAddAppointmentTab, setOpenAddAppointmentTab] = useState(false)
  const {data} = useContext(EventContext);

  return (
      <div className="calendar">
      {openAddAppointmentTab ? <AddAppointmentWindowTab closeAppointmentTab={()=>setOpenAddAppointmentTab(false)}/> : <></>}
      <div className="calendar-box">
        <div className="calendar-box-top-navigation">
          <CalendarNavigation/>
          <AddAppointmentButton openAppointmentTab={()=>{setOpenAddAppointmentTab(true)}}/>
        </div>
        <CalendarView events={data}/>
      </div>
      <div className="calendar-box-sidebar">
        <SmallCalendar/>
        <EventsTab events={data}/>
      </div>
      </div>
  );
}
