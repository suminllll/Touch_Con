import React from 'react';
import TcPointBox from '../../components/Box/TcPointBox';
import TextBox from '../../components/Box/TextBox';
import Title from '../../components/Title/Title';
import RcHistory from '../../components/History/RcHistory';
import styled from 'styled-components';

const IhRewardCon = () => {
  return (
    <>
      <Title titleText="리워드콘" categoryText="발행내역 > 리워드콘" />
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
          <RcHistory style={{ marginLeft: 175, marginTop: 93 }} />
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

export default IhRewardCon;
