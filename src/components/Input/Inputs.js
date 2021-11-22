import React, { useState } from 'react';

export const TtileInput = ({ value, onChange }) => {
  return (
    <div style={{ marginLeft: 200, marginTop: 54 }}>
      <span
        style={{
          marginRight: 31,
          fontWeight: 800,
        }}
      >
        제목
      </span>
      <input
        style={{
          minWidth: 700,
          height: 28,
          border: '1px solid lightgray',
          borderRadius: 3,
        }}
        onChange={onChange}
        value={value}
      />
      {/*{console.log(value)}*/}
    </div>
  );
};

export const ComInput = () => {
  const [text, setText] = useState('');

  const textHandle = e => {
    console.log(e);
    setText(e.target.value);
  };

  return (
    <div style={{ marginLeft: 200, marginTop: 12 }}>
      <span style={{ marginRight: 31, marginLeft: -10, fontWeight: 800 }}>
        기업명
      </span>
      <input
        style={{
          minWidth: 700,
          height: 28,
          border: '1px solid lightgray',
          borderRadius: 3,
        }}
        onChange={textHandle}
        value={text}
      />
    </div>
  );
};
