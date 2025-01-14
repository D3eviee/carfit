'use client'
import Image from "next/image";
import { inter } from '@/Assets/fonts';
import '@/Components/AdminUIComponents/MainPage/Calendar/SmallCalendar/SmallCalendar.css';
import chevron_right from "@/Assets/icons/chevron_right.png"
import chevron_left from "@/Assets/icons/chevron_left.png"
import { useState } from "react";

export default function SmallCalendar() {
  const [currentDate, setCurrentDate] = useState(new Date());
  const [today, setToday] = useState(new Date());

  const getDaysInMonth = (year, month) => {
    return new Date(year, month + 1, 0).getDate();
  };

  const getFirstDayOfMonth = (year, month) => {
    return new Date(year, month, 1).getDay();
  };

  const monthNames = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  const year = currentDate.getFullYear();
  const month = currentDate.getMonth();
  const daysInMonth = getDaysInMonth(year, month);
  let firstDayOfMonth = getFirstDayOfMonth(year, month);

  if(firstDayOfMonth == 0){
    firstDayOfMonth = 7;
  }

  const handlePreviousMonth = () => {
    setCurrentDate((prevDate) => {
      const prevMonth = new Date(prevDate.getFullYear(), prevDate.getMonth() - 1);
      return prevMonth;
    });
  };

  const handleNextMonth = () => {
    setCurrentDate((prevDate) => {
      const nextMonth = new Date(prevDate.getFullYear(), prevDate.getMonth() + 1);
      return nextMonth;
    });
  };

  const calendarDays = [];


  for (let i =0; i < firstDayOfMonth-1; i++) {
    calendarDays.push(null); // Empty slots for days from the previous month
  }

  for (let i = 1; i <= daysInMonth; i++) {
    calendarDays.push(i);
  }

  return (
    <div className="small-calendar-box">
      <div className="small-calendar-box-top-navigation">
        <h5>{monthNames[month]} {year}</h5>
        <div className="small-calendar-box-top-navigation-arrows">
          <div className="small-calendar-box-top-navigation-arrows-arrow" onClick={handlePreviousMonth}>
            <Image alt={chevron_left} src={chevron_left} width={18} height={18} className="turn"/>
          </div>
          <div className="small-calendar-box-top-navigation-arrows-arrow" onClick={handleNextMonth}>
            <Image alt={chevron_right} src={chevron_right} width={18} height={18}/>
          </div>
        </div>
      </div>
      <div className="small-calendar-box-days">
        <p>Mon</p>
        <p>Tue</p>
        <p>Wed</p>
        <p>Thu</p>
        <p>Fri</p>
        <p>Sat</p>
        <p>Sun</p>
      </div>

      <div className="small-calendar-box-dates">
        {calendarDays.map((day, index) => {
            return <div key={index} className ={new Date().getDate() == day && new Date().getMonth() == month && new Date().getFullYear() == year ? "active-day" : ""}>{day || ""} </div>})
        }
      </div>
    </div>
  );
}
