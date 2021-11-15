import React from 'react';
import styled from 'styled-components';

const AdminBtn = ({ btnName, color }) => {
  //사용법 <color={color}, color 안적으면 회색. btnName='원하는이름' />
  return <Button color={color}>{btnName}</Button>;
};

const Button = styled.button`
  width: 236px;
  height: 35px;
  border: none;
  cursor: pointer;
  font-weight: 600;
  background-color: ${props => (props.color ? '#fd7f36' : 'grey')};
  color: white;
`;

export default AdminBtn;
