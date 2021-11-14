import React from 'react';

export const Btn1 = props => {
  const { text, style } = props;

  console.log(text);
  return (
    <div>
      <button
        style={{
          minWidth: 193,
          minHeight: 40,
          marginRight: 20,
          backgroundColor: '#FD7F36',
          borderRadius: 5,
          color: 'white',
          cursor: 'pointer',
          ...style,
        }}
      >
        {text}
      </button>
    </div>
  );
};

export const Btn2 = props => {
  const { text, style } = props;

  console.log(text);

  return (
    <div>
      <button
        style={{
          minWidth: 139,
          minHeight: 40,
          backgroundColor: '#FD7F36',
          borderRadius: 5,
          color: 'white',
          fontSize: 18,
          cursor: 'pointer',
          ...style,
        }}
      >
        {text}
      </button>
    </div>
  );
};

export const BtnOrange1 = props => {
  const { text, style } = props;
  console.log(text);

  return (
    <button
      style={{
        minWidth: 77,
        minHeight: 30,
        backgroundColor: '#FFFFFF',
        buttonShadow: 'none',
        borderRadius: 5,
        boxShadow: 0,
        borderColor: '#FD7F36',
        color: '#FD7F36',
        fontSize: 18,
        cursor: 'pointer',
        ...style,
      }}
    >
      {text}
    </button>
  );
};

export const BtnOrange2 = props => {
  const { text, style } = props;

  return (
    <button
      style={{
        minWidth: 50,
        minHeight: 30,
        backgroundColor: '#FFFFFF',
        borderRadius: 5,
        borderColor: '#FD7F36',
        color: '#FD7F36',
        fontSize: 18,
        cursor: 'pointer',
        ...style,
      }}
    >
      {text}
    </button>
  );
};
