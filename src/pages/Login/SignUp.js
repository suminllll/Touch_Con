import React from 'react';
import styled from 'styled-components';
import SignupInput from '../../components/SignupInput/SignupInput';
import CheckBox from '../../components/CheckBox/CheckBox';
import AdminBtn from '../../components/AdminBtn/AdminBtn';
import Title from '../../components/Title/Title';
import Menu from '../../components/Menu/Menu';

const SingUp = () => {
  return (
    <>
      <Menu />
      <Title titleText="기업회원가입" categoryText="리워드콘 > 생성내역" />
      <Section>
        <SignupInput name="기업명" />
        <SignupInput name="연락처" />
        <SignupInput name="대표자명" />
        <SignupInput name="사업자등록번호" />
        <SignupCheck>
          <CheckBox />
          <Span>[필수] 개인정보 수집 및 이용 동의</Span>
        </SignupCheck>
        <Button>
          <AdminBtn btnName="취소" />
          <AdminBtn btnName="가입" color="#fd7f36" />
        </Button>
      </Section>
    </>
  );
};

const Section = styled.div`
  position: relative;
  max-width: 1140px;
  margin: 0 auto;
  margin-top: 60px;
`;

const SignupCheck = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 200px;
  /* position: relative;
  top: 400px; */
`;

const Span = styled.div`
  /* position: relative;
  left: 480px;
  bottom: 3px; */
`;

const Button = styled.div`
  position: relative;
  margin-top: 150px;
  display: flex;
  justify-content: space-around;
`;

export default SingUp;
