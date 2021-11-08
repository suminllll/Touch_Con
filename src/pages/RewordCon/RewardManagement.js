import React from 'react';
import styled from 'styled-components';
import History from '../../components/History/History';
import Title from '../../components/Title/Title';
const RewardManagement = () => {
  return (
    <Section>
      <Title
        titleText="리워드콘 관리"
        categoryText="리워드콘 > 리워드콘 관리"
      />
      <Button>
        <AllSelect>
          <Img src="images/버튼(전체선택).png" />
        </AllSelect>
        <Select>
          <Img src="images/버튼(수정).png" />
          <Img src="images/버튼(삭제).png" />
          <Img src="images/버튼(중단).png" />
        </Select>
      </Button>
      <Box>
        <History Check="Check" />
      </Box>
    </Section>
  );
};

const Section = styled.div`
  max-width: 1200px;
  margin-left: 200px;
`;
const Button = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin-left: 70px;
  margin-top: 80px;
`;

const AllSelect = styled.div`
  margin-left: 130px;
`;

const Select = styled.div`
  margin-right: 40px;
`;

const Img = styled.img`
  margin: 3px;
  cursor: pointer;
`;

const Box = styled.div`
  position: absolute;
  width: 100%;
  top: 300px;
  left: 400px;
`;
export default RewardManagement;
