import { checkPropTypes } from 'prop-types';
import React from 'react';
import { useState, useEffect } from 'react/cjs/react.development';
import styled from 'styled-components';

const CheckBox = ({ AllClick }) => {
  const [checkToggle, setCheckToggle] = useState(false);
  const a = [];

  const checkBox = () => {
    setCheckToggle(!checkToggle);
  };

  useEffect(() => {
    setCheckToggle(AllClick);
  }, [AllClick]);

  return (
    <AgreeBox>
      <img onClick={checkBox} alt="checkBox" src="images/checkbox.png" />
      <Check
        onClick={checkBox}
        Check={checkToggle}
        alt="checkBoxInCheck"
        src="images/check.png"
      />
    </AgreeBox>
  );
};

const Check = styled.img`
  position: absolute;
  display: ${props => (props.Check ? '""' : 'none')};
`;

const AgreeBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export default CheckBox;
