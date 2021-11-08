import React from 'react';
import TcPointBox from '../../components/Box/TcPointBox';
import TextBox from '../../components/Box/TextBox';
import MtHistory from '../../components/History/MtHistory';
import Title from '../../components/Title/Title';

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
          marginLeft: 170,
        }}
      >
        <TextBox />
        <TcPointBox />
        <MtHistory style={{ marginLeft: 170, marginTop: 93 }} />
      </div>
    </>
  );
};

export default IhTouchPoint;
