import React from 'react';
import styled from 'styled-components';
import RewardConHistory from '../../components/History/RewardConHistory';
import Title from '../../components/Title/Title';
import CheckBox from '../../components/CheckBox/CheckBox';
import { useState } from 'react/cjs/react.development';

const RewardManagement = () => {
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
        <Button>
          <AllSelect>
            <Img onClick={handleAllClick} src="images/버튼(전체선택).png" />
          </AllSelect>
          <Select>
            <Img src="images/버튼(수정).png" />
            <Img src="images/버튼(삭제).png" />
            <Img src="images/버튼(중단).png" />
          </Select>
        </Button>
        <HeadImg src="images/Rectangle 11.png" />

        <RewardConHistory
          Check={CheckBox}
          AllClick={allClick}
          headNumber="No."
          contents="내용"
          result="전송결과"
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
  margin-left: 360px;
`;

const Button = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 50px;
`;

const AllSelect = styled.div`
  margin-left: -3px;
`;

const HeadImg = styled.img`
  position: absolute;
`;

const Select = styled.div`
  margin-right: 37px;
`;

const Img = styled.img`
  margin: 3px;
  cursor: pointer;
`;

export default RewardManagement;
