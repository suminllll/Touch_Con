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
          backgroundColor: '#FD7F36',
          borderRadius: 5,
          color: 'white',
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
          ...style,
        }}
      >
        {text}
      </button>
    </div>
  );
};
