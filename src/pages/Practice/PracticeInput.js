import React from 'react';
import styled from 'styled-components';

const PracticeInput = ({ handleAddList, handleAddInput, addValueData }) => {
  return (
    <Publish>
      <input
        value={addValueData}
        onChange={handleAddInput}
        onKeyPress={e => {
          if (e.key === 'Enter') {
            handleAddList();
          }
        }}
      />
      <button onClick={handleAddList}>저장</button>
    </Publish>
  );
};

const Publish = styled.div`
  margin-left: 200px;
  margin-top: 30px;
  margin-bottom: 30px;

  input {
    padding: 10px;
    font-size: 16px;
    border-radius: 5px;
    width: 80%;
    border: 1px solid grey;
  }

  button {
    display: block;
    margin: auto;
    margin-top: 10px;
  }
`;

export default PracticeInput;
