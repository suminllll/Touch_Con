import React from 'react';
import styled from 'styled-components';

const TcPointBox = ({ style }) => {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'row',
        width: 1032,
        marginLeft: 246,
        justifyContent: 'space-between',
        alignItems: 'center',
        marginTop: 55,
        ...style,
      }}
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

      <view
        style={{
          width: 2,
          height: 20,
          left: 869,
          top: 331,
          background: '#EE7E24',
        }}
      ></view>
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
  );
};

const RightDiv = styled.div`
  display: flex;
`;

export default TcPointBox;
