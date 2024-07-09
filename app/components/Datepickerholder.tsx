import React, { useState } from 'react';
import Datepicker, { DateValueType } from 'react-tailwindcss-datepicker';

interface DatepickerHolderProps {
  setDateFromDatepicker: (date: Date) => void;
}

const DatepickerHolder: React.FC<DatepickerHolderProps> = ({
  setDateFromDatepicker,
}) => {
  const [value, setValue] = useState<DateValueType>({
    startDate: new Date(),
    endDate: new Date(),
  });

  const handleValueChange = (newValue: DateValueType) => {
    console.log('newValue:', newValue);
    setValue(newValue);
    if (newValue && newValue.startDate) {
      setDateFromDatepicker(new Date(newValue.startDate));
    }
  };

  return (
    <Datepicker
      containerClassName="focus:shadow-outline w-full appearance-none rounded-md border-slate-400 leading-tight text-gray-700 shadow focus:outline-none"
      primaryColor={'amber'}
      asSingle={true}
      useRange={false}
      value={value}
      onChange={handleValueChange}
    />
  );
};

export default DatepickerHolder;
