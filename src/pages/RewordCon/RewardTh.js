import React from 'react';
import { Btn1 } from '../../components/button/buttons';
import History from '../../components/History/History';
import { TtileInput } from '../../components/Input/Inputs';
import { SendDate } from '../../components/Select/SendDate';
import Title from '../../components/Title/Title';

const RewardTh = () => {
  return (
    <>
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
            <SendDate />
          </div>
          <Btn1 text="검색" style={{ marginLeft: 145, marginTop: 70 }} />
        </div>
        <History style={{ marginLeft: 190, marginTop: 93 }} />
      </div>
    </>
  );
};

export default RewardTh;
