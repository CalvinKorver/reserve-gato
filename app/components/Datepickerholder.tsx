import React, { useState } from 'react';
import Datepicker from 'react-tailwindcss-datepicker';

interface DatepickerHolderProps {
  setDateFromDatepicker: (date: string) => void;
}

const DatepickerHolder: React.FC<DatepickerHolderProps> = ({
  setDateFromDatepicker,
}) => {
  const [value, setValue] = useState({
    startDate: new Date(),
    endDate: new Date(),
  });

  const handleValueChange = (newValue) => {
    console.log('newValue:', newValue);
    setValue(newValue);
    setDateFromDatepicker(newValue.startDate);
  };

  return (
    <Datepicker
      containerClassName="focus:shadow-outline w-full appearance-none rounded-md border-slate-400leading-tight text-gray-700 shadow focus:outline-none"
      primaryColor={'amber'}
      asSingle={true}
      useRange={false}
      value={value}
      onChange={handleValueChange}

    />
  );
};
export default DatepickerHolder;
