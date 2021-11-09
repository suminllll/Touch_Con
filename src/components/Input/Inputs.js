import React, { useState } from 'react';

export const TtileInput = () => {
  const [text, setText] = useState('');

  const textHandle = e => {
    console.log(e);
    setText(e.target.value);
  };

  return (
    <div style={{ marginLeft: 220, marginTop: 56 }}>
      <span style={{ marginRight: 31 }}>제목</span>
      <input style={{ minWidth: 600 }} onChange={textHandle} value={text} />
    </div>
  );
};
