import React from 'react';
import TcPointBox from '../../components/Box/TcPointBox';
import TextBox from '../../components/Box/TextBox';
import MtHistory from '../../components/History/MtHistory';
import Title from '../../components/Title/Title';
import styled from 'styled-components';

const TpManagement = () => {
  return (
    <>
      <Title
        titleText="터치포인트관리"
        categoryText="터치포인트 > 터치포인트관리"
      />
      <div
        style={{
          flex: 1,
          marginLeft: 185,
        }}
      >
        <HeadBox>
          <TextBox />
          <TcPointBox />
        </HeadBox>
        <Box>
          <MtHistory />
        </Box>
      </div>
    </>
  );
};

const HeadBox = styled.div`
  margin: 30px;
`;

const Box = styled.div`
  margin: 50px 0px 50px 200px;
`;
export default TpManagement;
