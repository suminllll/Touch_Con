import React, { useState, useEffect } from 'react';
import Title from '../../components/Title/Title';
import { TtileInput } from '../../components/Input/Inputs';
import styled from 'styled-components';
import { Btn1 } from '../../components/button/buttons';
import History from '../../components/History/History';
import RewardConHistory from '../../components/History/RewardConHistory';
import axios from 'axios';
import { API, JSONAPI } from '../../config';

const RewardCh = () => {
  //생성내역페이지

  const [inputText, setinputText] = useState('');
  const handleInput = e => {
    setinputText(e.target.value);
  };

  const [list, setList] = useState({});

  const filteredList = () => {
    axios
      .get(JSONAPI)
      .then(res => setList(res.data))
      .catch(err => console.log(err));
  };

  useEffect(() => {
    filteredList();
  }, []);

  const handleInputSearchResult = () => {
    axios
      .get(JSONAPI)
      .then(res => setList(res.data))
      .catch(err => console.log(err));
  };

  return (
    <div
      style={{
        flex: 1,
      }}
    >
      <Title titleText="생성내역" categoryText="리워드콘 > 생성내역" />
      <div
        style={{
          flex: 1,
          marginLeft: 250,
        }}
      >
        <div
          style={{
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
          }}
        >
          <div>
            <TtileInput value={inputText} onChange={handleInput} />
          </div>
          <Btn1 text="검색" style={{ marginLeft: 250, marginTop: 30 }} />
        </div>
        <Box>
          <RewardConHistory
            headNumber="No."
            contents="내용"
            transferNumber="전송갯수"
            days="전송일"
          />
        </Box>
        {/* <History style={{ marginLeft: 180, marginTop: 93 }} /> */}
      </div>
    </div>
  );
};

const HeadImg = styled.img`
  position: absolute;
`;

const Box = styled.div`
  margin-top: 100px;
  margin-left: 170px;
`;

export default RewardCh;
