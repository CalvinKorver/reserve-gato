import React from 'react';
import { useState } from 'react';


interface ReservationMessageProps {
    location: string;
    translation: string;
    date: string;
    time: string;
    language: string;
    english: string;
    onGoBack: () => void;
  }

//   { location, date, time, languageTranslation, englishTranslation, onGoBack }
const SuccessVisual: React.FC<ReservationMessageProps> = (props) => {
    const [unrecognizable, setUnrecognizable] = useState(false);

    const showTranslation = () => {
      return (!props.translation.includes("unrecognizable"));
    }

    return (
      <div className="flex items-center justify-center ">
        <div className="h-full w-full  p-2">
          <h1 className="mb-2 text-left text-2xl font-bold">{props.location}</h1>
          <h2 className="mb-12 text-left text-lg">{props.date} at {props.time}</h2>
  
          <div className="mb-8">
            <h3 className="mb-1 text-left text-lg font-semibold">{props.language}:</h3>
            <p className="text-left text-gray-700">"{props.translation}"</p>
          </div>

          {showTranslation() &&
            <div className="mb-12">
              <h3 className="mb-1 text-left text-lg font-semibold">English:</h3>
              <p className="text-left text-gray-700">"{props.english}"</p>
            </div>
          }
    
          <div className="flex justify-center">
            <button onClick={props.onGoBack} className="rounded bg-gray-800 px-4 py-2 font-medium text-white hover:bg-gray-700 focus:outline-none">
              Modify
            </button>
          </div>
        </div>
      </div>
    );
  };

export default SuccessVisual;
