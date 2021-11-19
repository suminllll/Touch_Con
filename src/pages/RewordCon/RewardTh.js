import React from 'react';
import { Btn1 } from '../../components/button/buttons';
import { TtileInput } from '../../components/Input/Inputs';
import Title from '../../components/Title/Title';
import RewardConHistory from '../../components/History/RewardConHistory';
import styled from 'styled-components';

const RewardTh = () => {
  const 이름검색 = () => {
    console.log('이름검색');
  };

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
          marginLeft: 250,
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
          <Btn1
            onClick={이름검색}
            text="검색"
            style={{ marginLeft: 250, marginTop: 30 }}
          />
        </div>
      </div>
      <Box>
        <RewardConHistory
          headNumber="No."
          contents="내용"
          transferNumber="전송갯수"
          result="전송결과"
          days="전송일"
        />
      </Box>
    </div>
  );
};

const Box = styled.div`
  margin: 100px 0px 150px 400px;
`;

export default RewardTh;
