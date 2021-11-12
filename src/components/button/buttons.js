import React from 'react';
import styled from 'styled-components';

export const Btn1 = props => {
  const { text, style } = props;

  console.log('Btn1', text);
  return (
    <div>
      <Button
        style={{
          minWidth: 193,
          minHeight: 40,
          marginRight: 20,
          backgroundColor: '#FD7F36',
          borderRadius: 5,
          color: 'white',
          fontWeight: 800,
          ...style,
        }}
      >
        {text}
      </Button>
    </div>
  );
};

export const Btn2 = props => {
  const { text, style } = props;

  console.log('Btn2', text);

  return (
    <Button
      style={{
        minWidth: 139,
        minHeight: 40,
        backgroundColor: '#FD7F36',
        borderRadius: 5,
        color: 'white',
        fontSize: 18,
        fontWeight: 800,
        ...style,
      }}
    >
      {text}
    </Button>
  );
};

export const BtnOrange1 = props => {
  const { text, style } = props;
  console.log(text);

  return (
    <div>
      <Button
        style={{
          minWidth: 77,
          minHeight: 30,
          marginRight: 5,
          backgroundColor: '#FFFFFF',
          borderRadius: 5,
          border: '1px solid #FD7F36',
          color: '#FD7F36',
          fontSize: 18,
          ...style,
        }}
      >
        {text}
      </Button>
    </div>
  );
};

export const BtnOrange2 = props => {
  const { text, style } = props;

  return (
    <div>
      <Button
        style={{
          minWidth: 50,
          minHeight: 30,
          marginRight: 5,
          backgroundColor: '#FFFFFF',
          borderRadius: 5,
          border: '1px solid #FD7F36',
          color: '#FD7F36',
          fontSize: 18,
          ...style,
        }}
      >
        {text}
      </Button>
    </div>
  );
};

const Button = styled.button`
  border-style: none;
  cursor: pointer;
`;
