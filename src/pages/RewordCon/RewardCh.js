import React from 'react';
import Title from '../../components/Title/Title';
import { TtileInput } from '../../components/Input/Inputs';
import { SendDate } from '../../components/Select/SendDate';
import DatePicker from 'react-datepicker';
import { Btn1 } from '../../components/button/buttons';

const RewardCh = () => {
  return (
    <div
      style={{
        flex: 1,
        marginLeft: 300,
        marginTop: 80,
      }}
    >
      <Title titleText={'생성내역'} categoryText={'리워드콘 > 생성내역'} />

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
        <Btn1 text={'검색'} style={{ marginLeft: 145, marginTop: 70 }} />
      </div>
    </div>
  );
};

export default RewardCh;
