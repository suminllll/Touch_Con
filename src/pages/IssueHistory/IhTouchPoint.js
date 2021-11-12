import React from 'react';
import TcPointBox from '../../components/Box/TcPointBox';
import TextBox from '../../components/Box/TextBox';
import MtHistory from '../../components/History/MtHistory';
import Title from '../../components/Title/Title';
import styled from 'styled-components';

const IhTouchPoint = () => {
  return (
    <>
      <Title
        titleText="터치포인트관리"
        categoryText="터치포인트 > 터치포인트관리"
      />
      <div
        style={{
          flex: 1,
          marginLeft: 185,
        }}
      >
        <HeadBox>
          <TextBox />
          <TcPointBox />
        </HeadBox>

        <Box>
          <MtHistory style={{ marginLeft: 175, marginTop: 93 }} />
        </Box>
      </div>
    </>
  );
};

const HeadBox = styled.div`
  margin: 30px;
`;

const Box = styled.div`
  margin: 40px 0px 150px 40px;
`;

export default IhTouchPoint;
