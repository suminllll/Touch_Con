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
          cursor: 'pointer',
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

export const BtnOrange1 = ({ text, style, handleAllClick }) => {
  console.log(text);

  return (
    <Button
      onClick={handleAllClick}
      style={{
        minWidth: 77,
        minHeight: 30,
        marginBottom: 10,
        backgroundColor: '#FFFFFF',
        buttonShadow: 'none',
        borderRadius: 5,
        boxShadow: 0,
        border: '1px solid #FD7F36',
        color: '#FD7F36',
        fontSize: 18,
        cursor: 'pointer',
        ...style,
      }}
    >
      {text}
    </Button>
  );
};

export const BtnOrange2 = ({ text, style, handleAllClick }) => {
  return (
    <Button
      onClick={handleAllClick}
      style={{
        minWidth: 50,
        minHeight: 30,
        marginBottom: 10,
        backgroundColor: '#FFFFFF',
        borderRadius: 5,
        border: '1px solid #FD7F36',
        color: '#FD7F36',
        fontSize: 18,
        cursor: 'pointer',
        ...style,
      }}
    >
      {text}
    </Button>
  );
};

const Button = styled.button`
  border-style: none;
  cursor: pointer;
`;
