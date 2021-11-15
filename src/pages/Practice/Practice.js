import React, { useEffect } from 'react';
import { useState } from 'react/cjs/react.development';
import styled from 'styled-components';
import PracticeInput from './PracticeInput';
import practiceData from './PracticeData';

const Practice = () => {
  const [shoesData, setshoesData] = useState(practiceData);
  console.log('데이터길이', shoesData.length);
  const newShoesData = [...shoesData];

  // const newShoesData = () =>{
  //   for (let i = 0; i < shoesData.length; i++) {
  //     shoesData[i].push
  // }

  // {newShoesData.map((data)=>{
  //   return <Card shoes = {data.title}  />{data.content}</Card>
  // })}
  // // 데이터를 삽입할때 객체로 삽입해야한다.

  const [addValueData, setAddValueData] = useState({});

  const handleAddInput = e => {
    setAddValueData(e.target.value);
  };

  const handleAddList = () => {
    newShoesData.unshift(addValueData);
    setshoesData(newShoesData);
    setAddValueData('');
  };
  console.log('NewData', newShoesData);
  console.log('addValue', addValueData);
  return (
    <div>
      {newShoesData.map((data, i) => {
        return <Reco key={i}>{data.content}</Reco>;
      })}
      <PracticeInput
        addValueData={addValueData}
        handleAddList={handleAddList}
        handleAddInput={handleAddInput}
      />
    </div>
  );
};

const Reco = styled.div`
  border-bottom: 1px solid black;
  margin: 100px;
`;

export default Practice;
