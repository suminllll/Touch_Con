import React, { useState } from 'react';
import DatePicker from 'react-datepicker';

export const SendDate = ({
  setSearchDateString,
  setSelectedEndDateString,
  isRangeSearch,
}) => {
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());
  const [isCalendarOpen, setIsCalendarOpen] = useState(false);

  const dateToString = date => {
    return (
      date.getFullYear() +
      '-' +
      (date.getMonth() + 1).toString().padStart(2, '0') +
      '-' +
      date.getDate().toString().padStart(2, '0')
    );
  };

  const ExampleCustomInput = ({ value, onClick }) => (
    <button className="example-custom-input" onClick={onClick}>
      {value}
    </button>
  );
  return (
    <div
      style={{
        marginLeft: 218,
        marginTop: 18,
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
      }}
    >
      <span style={{ marginRight: 31 }}>생성일</span>

      <DatePicker
        selected={startDate}
        onChange={date => setStartDate(date)}
        customInput={<ExampleCustomInput />}
      />

      {isRangeSearch && (
        <React.Fragment>
          <div />
          <div>
            <DatePicker
              selected={endDate}
              selectsEnd
              startDate={startDate}
              minDate={startDate}
              maxDate={new Date()}
            />
          </div>
        </React.Fragment>
      )}
    </div>
  );
};
