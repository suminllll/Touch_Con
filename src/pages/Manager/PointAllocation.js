import React, { useState } from 'react';
import styled from 'styled-components';
import AdminBtn from '../../components/AdminBtn/AdminBtn';
import { BtnOrange1, BtnOrange2 } from '../../components/button/buttons';
import PaHistory from '../../components/History/PaHistory';
import Title from '../../components/Title/Title';

const PointAllocation = () => {
  const [allClick, setAllClick] = useState(false);

  const handleAllClick = () => {
    setAllClick(!allClick);
  };

  return (
    <>
      <Title
        titleText="포인트 배정"
        categoryText="관리자 페이지 > 포인트 배정"
      />
      <div
        style={{
          flex: 1,
          marginLeft: 380,
          maxWidth: 1100,
        }}
      >
        <TopWrap>
          <TitleWrap>
            <TitleBox>기업명</TitleBox>
            <InputBox />
          </TitleWrap>
          <TitleWrap>
            <TitleBox>포인트 갯수</TitleBox>
            <InputPlaceholder
              type="number"
              placeholder="숫자만 입력 해주세요."
            />
          </TitleWrap>
          <AdminBtn btnName="포인트 배정" color="#fd7f36" />
        </TopWrap>

        <div
          style={{
            justifyContent: 'space-between',
            width: 1180,
            display: 'flex',
          }}
        >
          <div>
            <BtnOrange1 handleAllClick={handleAllClick} text="전체선택" />
          </div>
          <div>
            <BtnOrange1 text="배정취소" />
            <BtnOrange2 text="삭제" />
          </div>
        </div>
        <PaHistory Check="Check" AllClick={allClick} />
      </div>
    </>
  );
};

export default PointAllocation;

const TopWrap = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 40px auto 50px auto;
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
