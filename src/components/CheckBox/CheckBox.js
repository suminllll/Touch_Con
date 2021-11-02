import React from 'react';
import { useState } from 'react/cjs/react.development';
import styled from 'styled-components';

const CheckBox = () => {
  const [checkToggle, setCheckToggle] = useState(false);
  const checkBox = () => {
    setCheckToggle(checkToggle => !checkToggle);
  };

  return (
    <Agree>
      <AgreeBox>
        <Box onClick={checkBox} src="images/checkbox.png" />
        <Check
          onClick={checkBox}
          className={checkToggle ? 'active' : 'hide'}
          src="images/check.png"
        />
      </AgreeBox>
    </Agree>
  );
};

const Agree = styled.div``;

const Box = styled.img`
  position: absolute;
  left: 450px;
  bottom: 0px;
`;

const Check = styled.img``;

const AgreeBox = styled.div`
  .active {
    position: absolute;
    bottom: 5px;
    left: 455px;
  }
  .hide {
    display: none;
  }
`;

export default CheckBox;
