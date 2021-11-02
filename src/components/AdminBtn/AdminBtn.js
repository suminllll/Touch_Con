import React from 'react';
import styled from 'styled-components';

const AdminBtn = ({ btnName, color }) => {
  return <Button color={color}>{btnName}</Button>;
};

const Button = styled.button`
  width: 236px;
  height: 35px;
  border: none;
  cursor: pointer;
  font-weight: 600;
  background-color: ${({ color }) => {
    return color ? '#fd7f36' : 'grey';
  }};
  color: white;
`;

export default AdminBtn;
