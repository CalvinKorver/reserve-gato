'use client';

import React, { FormEvent } from 'react';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import SuccessVisual from './SuccessVisual';
import Welcome from './Welcome';
import ReservationFormFields from './ReservationFormFields';

const FORM = 'form';
const RESULT = 'result';
const WELCOME = 'welcome';

const ReservationForm = () => {
  const [response, setResponse] = useState('');
  const [text, setText] = useState('');
  const [pageState, setPageState] = useState(WELCOME);
  const [translation, setTranslation] = useState('');
  const [language, setLanguage] = useState('');
  const [time, setTime] = useState('');
  const [date, setDate] = useState('');
  const [restaurantName, setRestaurantName] = useState('');
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const handleBack = () => {
    setPageState(FORM);
  }

  const handleGetStarted = () => {
    setPageState(FORM);
  }

  const handleSubmit = async (text: string, language: string, restaurantName: string, time: string, date: string) => {
    setLoading(true);
    setDate(date);
    setLanguage(language);
    setTime(time);
    setRestaurantName(restaurantName);
    setText(text);
    try {
      // Make the API call
      const response = await fetch('/api/hello', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ reservationText: text, language: language }),
      });
      
      if (response.ok) {
        const responseText = await parseResponse(response);
        setTranslation(responseText);
        setLoading(false);
        setPageState(RESULT);
      } else {
        // Handle the error
        console.error('API call failed');
      }
    } catch (error) {
      console.error('An error occurred:', error);
    }
  };

  async function parseResponse(response: Response): Promise<string> {
    const responseJson = await response.json();
    return responseJson.message.content;
  }

  return (
    <div className="flex h-screen items-center justify-center bg-gray-50">
      <div className="h-full w-full max-w-md rounded-lg bg-white p-12 shadow-lg md:h-fit">
        <div className="mb-6 flex justify-center">
          <img src="/logo.png" alt="Reserve Gato" className="h-40 w-40" />
        </div>
        {pageState === WELCOME && <Welcome onGetStarted={handleGetStarted}/>}
        {pageState === FORM && <ReservationFormFields 
        loading={loading}
        handleSubmitParent={(text:string, 
          language: string, 
          restaurantName: string, 
          time: string, 
          date:string,
          ) => handleSubmit(text, language, restaurantName, time, date)}/> }
          <div className={!loading ? "hidden" : "visible"} >
          </div>
          
        {pageState === RESULT && <SuccessVisual 
          location={restaurantName}
          translation={translation}
          date={date}
          time={time}
          language={language}
          english={text}
          onGoBack={handleBack} /> }    
      </div>
    </div>
  );
  //   { location, date, time, languageTranslation, englishTranslation, onGoBack }
};

export default ReservationForm;
