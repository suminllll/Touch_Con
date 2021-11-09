import React from 'react';
import styled from 'styled-components';
import AdminBtn from '../../components/AdminBtn/AdminBtn';
import History from '../../components/History/History';
import Title from '../../components/Title/Title';

const PointAllocation = () => {
  return (
    <>
      <Title
        titleText="포인트 배정"
        categoryText="관리자 페이지 > 포인트 배정"
      />
      <>
        <TopWrap>
          <TitleWrap>
            <TitleBox>기업명</TitleBox>
            <InputBox />
          </TitleWrap>
          <TitleWrap>
            <TitleBox>포인트 갯수</TitleBox>
            <InputPlaceholder placeholder="숫자만 입력 해주세요." />
          </TitleWrap>
          <AdminBtn btnName="포인트 배정" color="#fd7f36" />
        </TopWrap>
        <History style={{ marginLeft: 360 }} />
      </>
    </>
  );
};

export default PointAllocation;

const TopWrap = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 40px 110px 50px 400px;
`;

const TitleWrap = styled.div`
  display: flex;
  align-items: center;
  margin: 20px 0;
`;

const InputBox = styled.input`
  height: 28px;
  border: 1px solid lightgray;
  border-radius: 3px;
  margin-left: 5px;
  min-width: 17vw;
`;

const InputPlaceholder = styled(InputBox)`
  &::placeholder {
    padding-left: 15px;
    color: lightgray;
    letter-spacing: 1.5px;
  }
`;

const TitleBox = styled.div`
  margin-right: 10px;
  font-weight: 800;
  font-size: 15px;
  letter-spacing: 1px;
`;
