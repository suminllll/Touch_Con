import React from 'react';
import styled from 'styled-components';

const SignupInput = ({ name, placeHolder }) => {
  return (
    <InputGroup>
      <P>{name}</P>
      <Input placeholder={placeHolder} />
    </InputGroup>
  );
};

const InputGroup = styled.div`
  display: flex;
  margin-left: 100px;
  margin-top: 17px;
`;

const Input = styled.input`
  min-width: 600px;
  min-height: 30px;
  border-radius: 3px;
  border: 0.5px solid #c4c4c4;
  margin-left: 30px;
`;

const P = styled.div`
  min-width: 110px;
  display: inline-block;
  margin-top: 10px;
  font-weight: 600;
  font-size: 16px;
`;
export default SignupInput;
