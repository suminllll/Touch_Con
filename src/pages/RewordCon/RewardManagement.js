import React, { useEffect } from 'react';
import styled from 'styled-components';
import RewardConHistory from '../../components/History/RewardConHistory';
import Title from '../../components/Title/Title';
import CheckBox from '../../components/CheckBox/CheckBox';
import { useState } from 'react/cjs/react.development';
import { BtnOrange1, BtnOrange2 } from '../../components/button/buttons';

const RewardManagement = () => {
  //리워드콘 관리
  const [allClick, setAllClick] = useState(false);

  const handleAllClick = () => {
    setAllClick(!allClick);
  };

  //리워드콘 관리
  return (
    <Section>
      <Title
        titleText="리워드콘 관리"
        categoryText="리워드콘 > 리워드콘 관리"
      />
      <Box>
        <div
          style={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-between',
            marginTop: 40,
            width: 1250,
          }}
        >
          <BtnOrange1
            handleAllClick={handleAllClick}
            text="전체선택"
            style={{ marginBottom: 10 }}
          />
          <div>
            <BtnOrange2 text="수정" />
            <BtnOrange2 text="삭제" />
            <BtnOrange2 text="중단" />
          </div>
        </div>
        <RewardConHistory
          Check={CheckBox}
          AllClick={allClick}
          SetAllClick={setAllClick}
          headNumber="No."
          contents="내용"
          transferNumber="전송갯수"
          days="전송일"
        />
      </Box>
    </Section>
  );
};

const Section = styled.div`
  display: block;
`;

const Box = styled.div`
  margin-left: 23vw;
`;

export default RewardManagement;
