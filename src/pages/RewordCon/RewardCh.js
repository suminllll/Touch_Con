import React from 'react';
import Title from '../../components/Title/Title';
import { TtileInput } from '../../components/Input/Inputs';
import { SendDate } from '../../components/Select/SendDate';
import DatePicker from 'react-datepicker';
import { Btn1 } from '../../components/button/buttons';
import History from '../../components/History/History';

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
            <SendDate />
          </div>
          <Btn1 text="검색" style={{ marginLeft: 250, marginTop: 70 }} />
        </div>
        <History style={{ marginLeft: 180, marginTop: 93 }} />
      </div>
    </>
  );
};

export default RewardCh;
