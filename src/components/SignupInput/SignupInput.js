import React from 'react';
import styled from 'styled-components';

const SignupInput = ({ name }) => {
  return (
    <InputGroup>
      <P>{name}</P>
      <Input />
    </InputGroup>
  );
};

const InputGroup = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 10px;
`;

const Input = styled.input`
  width: 537px;
  height: 28px;
  border-radius: 3px;
  border: 0.5px solid black;
  margin-left: 30px;
`;

const P = styled.div`
  width: 102px;
  display: inline-block;
  margin-top: 10px;
  font-weight: 600;
`;
export default SignupInput;
