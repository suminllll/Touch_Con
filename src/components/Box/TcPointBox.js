import React from 'react';
import { Btn2 } from '../button/buttons';
import styled from 'styled-components';

const TcPointBox = () => {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'row',
        width: 1032,
        marginLeft: 246,
        justifyContent: 'space-between',
        alignItems: 'center',
        marginTop: 33,
      }}
    >
      <div style={{ fontSize: 16, fontWeight: 600 }}>기간설정</div>
      <div>20-07-22 - 20-07-22 v</div>
      <Btn2 text="조회" />
      <div
        style={
          {
            // marginRight: 160,
            // minwidth: 332,
          }
        }
      >
        <RightDiv>
          <div style={{ fontSize: 14, fontWeight: 600 }}>
            총발행된 터치 포인트 수량
          </div>
          <div
            style={{
              marginLeft: 18,
              marginRight: 18,
              fontSize: 14,
              color: '#FD7F36',
            }}
          >
            8000
          </div>
          <div style={{ fontSize: 14, fontWeight: 600 }}>(touch/point)</div>
        </RightDiv>

        <RightDiv>
          <div style={{ fontSize: 14, fontWeight: 600 }}>
            사용한 터치 포인트 수량
          </div>
          <div
            style={{
              marginLeft: 30,
              marginRight: 18,
              fontSize: 14,
              color: '#FD7F36',
            }}
          >
            8000
          </div>
          <div style={{ fontSize: 14, fontWeight: 600 }}>(touch/point)</div>
        </RightDiv>
      </div>
    </div>
  );
};

const RightDiv = styled.div`
  display: flex;
`;

export default TcPointBox;
