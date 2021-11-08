import React from 'react';
import TcPointBox from '../../components/Box/TcPointBox';
import TextBox from '../../components/Box/TextBox';
import Title from '../../components/Title/Title';
import RcHistory from '../../components/History/RcHistory';

const IhRewardCon = () => {
  return (
    <>
      <Title titleText="리워드콘" categoryText="발행내역 > 리워드콘" />
      <div
        style={{
          flex: 1,
          marginLeft: 170,
        }}
      >
        <TextBox />
        <TcPointBox />
        <RcHistory style={{ marginLeft: 170, marginTop: 93 }} />
      </div>
    </>
  );
};

export default IhRewardCon;
