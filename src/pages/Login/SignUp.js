import React from 'react';
import styled from 'styled-components';
import SignupInput from '../../components/SignupInput/SignupInput';
import CheckBox from '../../components/CheckBox/CheckBox';
import AdminBtn from '../../components/AdminBtn/AdminBtn';
import Title from '../../components/Title/Title';
import Menu from '../../components/Menu/Menu';
import { Link } from 'react-router-dom';

const SingUp = () => {
  return (
    <>
      <Menu />
      <Title titleText="기업회원가입" />
      <Section>
        <SignupInput name="기업명" />
        <SignupInput name="연락처" placeHolder="01023456789" />
        <SignupInput name="대표자명" />
        <SignupInput name="사업자등록번호" placeHolder="32420498025" />
        <SignupCheck>
          <CheckBox />
          <Span>[필수] 개인정보 수집 및 이용 동의</Span>
        </SignupCheck>
        <Button>
          <LinkStyle to="/login">
            <AdminBtn btnName="취소" />
          </LinkStyle>
          <LinkStyle to="/RewardCh">
            <AdminBtn btnName="가입" color="#fd7f36" />
          </LinkStyle>
        </Button>
      </Section>
    </>
  );
};

const LinkStyle = styled(Link)`
  text-decoration: none;
  margin: 40px;
`;

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
  margin-top: 350px;
`;

const Span = styled.div`
  margin-left: 10px;
`;

const Button = styled.div`
  position: relative;
  margin-top: 50px;
  display: flex;
  justify-content: center;
  margin-left: px;
`;

export default SingUp;
