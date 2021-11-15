import React, { useState } from 'react';

const TextBox = () => {
  const [point, setPoint] = useState(120000);

  return (
    <div
      style={{
        borderWidth: 1,
        borderStyle: 'solid',
        borderColor: '#c4c4c4',
        minHeight: 100,
        marginTop: 17,
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginLeft: 175,
      }}
    >
      <div style={{ marginLeft: 298, fontSize: 16, fontWeight: 600 }}>
        현재 보유 포인트 수량
      </div>
      <div
        style={{
          backgroundColor: '#F0F0F0',
          minHeight: 30,
          marginLeft: 50,
          padding: 8,
          borderRadius: 3,
        }}
      >
        <div
          style={{
            color: '#FD7F36',
            fontSize: 24,
            fontWeight: 600,
          }}
        >
          {point}
        </div>
      </div>
      <div
        style={{
          marginLeft: 50,
          marginRight: 315,
          fontSize: 16,
          fontWeight: 600,
        }}
      >
        (touch/point)
      </div>
    </div>
  );
};

export default TextBox;
