import React from 'react';
import { Btn1, BtnOrange1, BtnOrange2 } from '../../components/button/buttons';
import AddHistory from '../../components/History/AddHistory';
import { ComInput, TtileInput } from '../../components/Input/Inputs';
import Title from '../../components/Title/Title';

const AppDocDetail = () => {
  return (
    <>
      <Title
        titleText="신청서류내역"
        categoryText="관리자 페이지 > 신청서류내역"
      />
      <div
        style={{
          flex: 1,
          marginLeft: 150,
        }}
      >
        <div
          style={{
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-around',
          }}
        >
          <div>
            <TtileInput />
            <ComInput />
            <div
              style={{
                display: 'flex',
                flexDirection: 'row',
                marginLeft: 220,
                marginTop: 12,
              }}
            />
          </div>
          <Btn1 text="검색" style={{ marginTop: 33 }} />
        </div>
        <div
          style={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-between',
            marginRight: 130,
            marginTop: 40,
          }}
        >
          <BtnOrange1
            text="전체선택"
            style={{ marginLeft: 220, marginTop: 12 }}
          />
          <div>
            <BtnOrange1 text="승인완료" />
            <BtnOrange2 text="삭제" />
            <BtnOrange2 text="중단" />
          </div>
        </div>
        <AddHistory Check="Check" style={{ marginLeft: 220, marginTop: 12 }} />
      </div>
    </>
  );
};

export default AppDocDetail;
