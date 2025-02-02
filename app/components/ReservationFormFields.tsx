'use client';

import React, { FormEvent } from 'react';
import { useState } from 'react';
import LoadingSpinner from './LoadingSpinner';
import DatepickerHolder from './Datepickerholder';
import { format } from 'date-fns';

interface ReservationFormFieldsProps {
    loading: boolean,
    handleSubmitParent: (text: string, language: string, restaurantName: string, time: string, date: string) => void;
  }

const ReservationFormFields: React.FC<ReservationFormFieldsProps> = ({loading, handleSubmitParent}) => {

  const [restaurantName, setRestaurantName] = useState('');
  const [time, setTime] = useState('');
  const [date, setDate] = useState('');
  const [numberOfPeople, setNumberOfPeople] = useState(4);
  const [language, setLanguage] = useState('');

    
  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    var text =
    'Hello, I would like to make a reservation for ' +
    numberOfPeople +
    ' on ' +
    date +
    ' at ' +
    time;
    text += ". Please tell me if this time and date is available."
    handleSubmitParent(text, language, restaurantName, time, date);
  }

  const setDateFromDatepicker = (value:Date) => {
    setDate(format(value, "EEEE, MMMM do"))
  }
    

return (
    <form onSubmit={handleSubmit} className="w-auto">
      <div className="mb-4">
        <label className="mb-2 block text-sm font-medium text-gray-700" htmlFor="restaurant-name">
          Restaurant Name
        </label>
        <input
          id="restaurant-name"
          type="text"
          placeholder="Somewhere delicious"
          value={restaurantName}
          onChange={(e) => setRestaurantName(e.target.value)}
          className="focus:shadow-outline w-full appearance-none rounded-md border-slate-400 px-3 py-2 leading-tight text-gray-700 shadow focus:outline-none"
          required
        />
      </div>
      <div className="mb-4">
        <label className="mb-2 block text-sm font-medium text-gray-700" htmlFor="time">
          Time
        </label>
        <input
        
          id="time"
          type="text"
          placeholder='7pm'
          value={time}
          onChange={(e) => setTime(e.target.value)}
          className="focus:shadow-outline w-full appearance-none rounded-md border-slate-400 px-3 py-2 leading-tight text-gray-700 shadow focus:outline-none"
          required
        />
      </div>
      <div className="mb-4">
        
        <label className="mb-2 block text-sm font-medium text-gray-700" htmlFor="date">
          Date
        </label>
        <DatepickerHolder
         setDateFromDatepicker={(value:Date) => setDateFromDatepicker(value)}
         />
        {/* <input
          id="date"
          type="text"
          placeholder='eg "Tuesday, 5/14"'

          value={date}
          onChange={(e) => setDate(e.target.value)}
          className="focus:shadow-outline w-full appearance-none rounded-md border-slate-400 px-3 py-2 leading-tight text-gray-700 shadow focus:outline-none"
          required
        /> */}
      </div>
      <div className="mb-4">
        <label className="mb-2 block text-sm font-medium text-gray-700" htmlFor="number-of-people">
          Number of People
        </label>
        <input
          id="number-of-people"
          type="number"
          placeholder='4'
          value={numberOfPeople}
          onChange={(e) => setNumberOfPeople(e.target.valueAsNumber)}
          className="focus:shadow-outline w-full appearance-none rounded-md border-slate-400 px-3 py-2 leading-tight text-gray-700 shadow focus:outline-none"
          required
        />
      </div>
      <div className="mb-4">
        <label className="mb-2 block text-sm font-medium text-gray-700" htmlFor="language">
          Language
        </label>
        <input
          id="language"
          type="text"
          placeholder="Spanish"
          value={language}
          onChange={(e) => setLanguage(e.target.value)}
          className="focus:shadow-outline w-full appearance-none rounded-md border-slate-400 px-3 py-2 leading-tight text-gray-700 shadow focus:outline-none"
          required
        />
      </div>
      <div className="flex items-center justify-center">
        <div className={!loading? "visible" : "hidden"}>
        <button
          type="submit"
          className="mt-6 focus:shadow-outline rounded-md bg-slate-800 px-4 py-2 font-medium text-white hover:bg-blue-700 focus:outline-none"
        >
          Create Reservation
        </button>
        </div>
        <div className={loading ? "visible" : "hidden"}>
          <LoadingSpinner />
        </div>
      </div>
      
    </form>
  )
}

export default ReservationFormFields;