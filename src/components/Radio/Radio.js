import React from 'react';
import styled from 'styled-components';

const Radio = () => {
  return (
    <ButtonBox>
      <AdminText>
        <AdminButton name={name} onClick={onClick} />
        {text}
      </AdminText>
    </ButtonBox>
  );
};

export default Radio;

const ButtonBox = styled.span`
  display: flex;
  justify-content: center;
  margin-top: 10px;
  margin-bottom: 20px;
`;

const AdminText = styled.label`
  display: flex;
  align-items: center;
  margin-right: 30px;
  font-weight: bold;
  font-size: 13px;
  line-height: 18px;
`;

const AdminButton = styled.input.attrs({
  type: 'radio',
})`
  margin: 0 8px 0 0;
  -webkit-appearance: none;
  width: 18px;
  height: 18px;
  border-radius: 50%;
  outline: none;
  border: 2px solid orange;
`;
