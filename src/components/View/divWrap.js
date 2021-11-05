import React from 'react';

const divWrap = ({ children, style }) => {
  return (
    <div
      style={{
        flex: 1,
        marginLeft: 300,
        marginTop: 80,
      }}
    >
      {children}
    </div>
  );
};

export default divWrap;
