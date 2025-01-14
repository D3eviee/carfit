'use client'
import Image from "next/image";
import { inter } from '@/Assets/fonts';
import '@/Components/AdminUIComponents/MainPage/Calendar/CalendarNavigation/CalendarNavigation.css'
import { useState } from "react";

export default function CalendarNavigation() {

  const [activeElement, setActiveElement] = useState("week")

  return (
    <div className={`${inter.className} calendar-nav-box`}>
      <p onClick={()=>setActiveElement("week")} className={activeElement=="week" ? "active" : ""}>Week</p>
      <p onClick={()=>setActiveElement("month")} className={activeElement=="month" ? "active" : ""}>Month</p>
    </div>
  );
}
