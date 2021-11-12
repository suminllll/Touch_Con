import React from 'react';
import Title from '../../components/Title/Title';
import { TtileInput } from '../../components/Input/Inputs';
import styled from 'styled-components';
import { Btn1 } from '../../components/button/buttons';
import History from '../../components/History/History';
import RewardConHistory from '../../components/History/RewardConHistory';

const RewardCh = () => {
  //생성내역
  return (
    <>
      <Title titleText="생성내역" categoryText="리워드콘 > 생성내역" />
      <div
        style={{
          flex: 1,
          marginLeft: 180,
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
          <Btn1 text="검색" style={{ marginLeft: 250, marginTop: 30 }} />
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
        {/* <History style={{ marginLeft: 180, marginTop: 93 }} /> */}
      </div>
    </>
  );
};

const HeadImg = styled.img`
  position: absolute;
`;

const Box = styled.div`
  margin-top: 100px;
  margin-left: 170px;
`;

export default RewardCh;
