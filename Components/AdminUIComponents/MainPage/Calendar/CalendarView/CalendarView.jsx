'use client'
import Image from "next/image";
import { inter } from '@/Assets/fonts';
import '@/Components/AdminUIComponents/MainPage/Calendar/CalendarNavigation/CalendarNavigation.css'
import "@/Components/AdminUIComponents/MainPage/Calendar/CalendarView/CalendarView.css"
import chevron_right from "@/Assets/icons/chevron_right.png"
import chevron_left from "@/Assets/icons/chevron_left.png"
import { useState, useEffect } from "react";
import CalendarEventTab from "../CalendarEventTab/CalendarEventTab";

export default function CalendarView({events}) {

  const date = new Date();

  const [year, setYear] = useState(date.getFullYear());
  const [month, setMonth] = useState(date.getMonth());
  const [day, setDay] = useState(date.getDate());

  const months = [
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
    "December"
  ];

  const calculateEvent = (event) => {
    
    const [eventStartTime] = event.eventTime.split(":");
    console.log(eventStartTime)
    const [eventDuration] = event.eventDuration.split(" ")

    let eventStart = undefined;

    if(eventStartTime <10){
      eventStart = new Date(event.eventDate + "T0" + eventStartTime + ":" + "00");
      
    }else{
      eventStart = new Date(event.eventDate + "T" + eventStartTime + ":" + "00");
      console.log(eventStart)
    }

    

    const eventEnd = new Date(eventStart);
    eventEnd.setMinutes(eventEnd.getMinutes() + Number(eventDuration));

    const startHour = new Date(eventStart).getHours(); //10
    const startMinutes = new Date(eventStart).getMinutes(); //45
    const endHour = new Date(eventEnd).getHours(); //12
    const endMinutes = new Date(eventEnd).getMinutes();

    const top = ((startHour-7) * 80 + startMinutes); // w minutach od 0:00
    const height = Math.round((endHour - startHour) * 80 + (endMinutes - startMinutes) * 1.33, 2);

    console.log({top: `${top}px`, height: `${height}px`});

    return { top: `${top}px`, height: `${height}px`};
  };

  ///

  function getCurrentWeek() {
    const today = new Date();
    const firstDayOfWeek = new Date(today);
    firstDayOfWeek.setDate(today.getDate() - today.getDay() + 1); // Poniedziałek
  
    const weekDays = []; //tablica do przechowywania dni tygodnia
    
    for (let i = 0; i < 7; i++) {
      const currentDay = new Date(firstDayOfWeek);
      currentDay.setDate(firstDayOfWeek.getDate() + i);
      weekDays.push({
        day: currentDay.toLocaleDateString('en-US', { weekday: 'short' }), // Mon, Tue...
        date: currentDay.getDate(),
      });
    }
    return weekDays;
  }

  const currentWeek = getCurrentWeek();

  const tempNum = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14];
  const tempNum2 = [1, 2, 3, 4, 5, 6 ,7];

  return (
    <div className="calendar-view-box">
      <div className="calendar-view-box-detailed-navigation">
        <h3>{months[month]}<span>{year}</span></h3>
      </div>

      <div className="calendar-view-box-days">
        <p>TIME</p>

        {currentWeek.map((day, index)=>{
          return <p key={index}>{day.day + ", " + day.date}</p>
        })}
      </div>

      <div className="calendar-view-box-table">
        <div className="calendar-view-box-time">
          <p>7</p>
          <p>8</p>
          <p>9</p>
          <p>10</p>
          <p>11</p>
          <p>12</p>
          <p>13</p>
          <p>14</p>
          <p>15</p>
          <p>16</p>
          <p>17</p>
          <p>18</p>
          <p>19</p>
          <p>20</p>
        </div>

        {tempNum2.map((i) => {
            return <div key={i} className="calendar-view-box-event-box">
            {tempNum.map((item) => {
              return <p key={item}></p>;
            })}
            {events.map((event, index)=>{
              let date = new Date(event.eventDate);
              const eventWeekDay = date.getDay();
              const eventMonthDay = date.getDate();

              if (eventWeekDay==0) eventDay = 7;
              if(i==eventWeekDay && currentWeek[i-1].date==eventMonthDay){
                const duration = calculateEvent(event);
                return <CalendarEventTab style={duration} />;
              }
            })}
          </div>
        })}
      </div>
    </div>
  );
}
