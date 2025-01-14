'use client'
import React, { createContext, useState } from "react";

export const EventContext = createContext();

export const EventProvider = ({ children }) => {
    const [data, setData] = useState([]);  // Przechowujemy tablicę wydarzeń
  
    const addData = (newEvent) => {
      setData((prevData) => [...prevData, newEvent]);  // Dodajemy nowe wydarzenie do tablicy
    };
  
    return (
      <EventContext.Provider value={{ data, addData }}>
        {children}
      </EventContext.Provider>
    );
};