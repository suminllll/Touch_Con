import React from 'react';
import { Btn1 } from '../../components/button/buttons';
import { TtileInput } from '../../components/Input/Inputs';
import Title from '../../components/Title/Title';
import RewardConHistory from '../../components/History/RewardConHistory';
import styled from 'styled-components';
const RewardTh = () => {
  //전송내역
  return (
    <div
      style={{
        flex: 1,
      }}
    >
      <Title titleText="전송내역" categoryText="리워드콘 > 전송내역" />

      <div
        style={{
          flex: 1,
          marginLeft: 170,
        }}
      >
        <div
          style={{
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
          }}
        >
          <div>
            <TtileInput />
          </div>
          <Btn1 text="검색" style={{ marginLeft: 145, marginTop: 70 }} />
        </div>
      </div>
      <Box>
        <HeadImg src="images/Rectangle 11.png" />
        <RewardConHistory
          headNumber="No."
          contents="내용"
          transferNumber="전송갯수"
          days="전송일"
        />
      </Box>
    </div>
  );
};
const HeadImg = styled.img`
  position: absolute;
`;

const Box = styled.div`
  margin-top: 100px;
  margin-left: 360px;
`;

export default RewardTh;
