import React from 'react';
import { Btn1, BtnOrange1, BtnOrange2 } from '../../components/button/buttons';
import AddHistory from '../../components/History/AddHistory';
import { ComInput, TtileInput } from '../../components/Input/Inputs';
import Title from '../../components/Title/Title';
import styled from 'styled-components';
const AppDocDetail = () => {
  return (
    <Add_container>
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
          </div>

          <Btn1 text="검색" style={{ marginTop: 33 }} />
        </div>
      </div>
      <div
        style={{
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'space-between',
        }}
      >
        <BtnOrange1 text="전체선택" style={{ marginLeft: 220 }} />
        <div>
          <BtnOrange1 text="승인완료" />
          <BtnOrange2 text="삭제" />
          <BtnOrange2 text="중단" />
        </div>
      </div>
      <AddHistory Check="Check" style={{ marginLeft: 210, marginTop: 11 }} />
    </Add_container>
  );
};

export default AppDocDetail;

export const Add_container = styled.div`
  flex: 1;
  margin: auto;
  max-width: 1230px;
`;
