import React from 'react';
import TcPointBox from '../../components/Box/TcPointBox';
import TextBox from '../../components/Box/TextBox';
import MtHistory from '../../components/History/MtHistory';
import Title from '../../components/Title/Title';

const TpManagement = () => {
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
        <TextBox />
        <TcPointBox />
        <MtHistory style={{ marginLeft: 175, marginTop: 93 }} />
      </div>
    </>
  );
};

export default TpManagement;
