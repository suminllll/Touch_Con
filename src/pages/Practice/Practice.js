import React, { useEffect } from 'react';
import { useState } from 'react/cjs/react.development';
import styled from 'styled-components';
import PracticeInput from './PracticeInput';

const Practice = () => {
  const [recomand, setRecomand] = useState([
    '남자코트 추천',
    '강남 우동맛집',
    '파이썬독학',
  ]);
  const NewRecomand = [...recomand];

  const handleAdd = () => {
    NewRecomand.unshift(valueData);
    // setRecomand(NewRecomand);   <--- 이 부분. 다시 업데이트를 해주는데에 실패했기 때문에
    // 콘솔은 찍히는데 내가 원하는대로 실행이 안됐거임. 블로그에 써라
    setValueDate('');
  };

  const [valueData, setValueDate] = useState('');

  const handleRecommand = e => {
    setValueDate(e.target.value);
  };

  return (
    <div>
      {NewRecomand.map((data, i) => {
        return <Reco key={i}>{data}</Reco>;
      })}
      <PracticeInput
        NewRecomand={NewRecomand}
        valueData={valueData}
        handleRecommand={handleRecommand}
        handleAdd={handleAdd}
      />
    </div>
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

const Reco = styled.div`
  border-bottom: 1px solid black;
  margin: 100px;
`;

export default Practice;
