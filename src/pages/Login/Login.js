import React, { useState } from 'react';
import styled from 'styled-components';
import Radio from '../../components/Radio/Radio';

const Login = () => {
  const [inputStatus, setInputStatus] = useState({
    text: '',
    name: '',
  });

  const handleClickButton = buttonId => {
    setInputStatus(buttonId);
  };

  return (
    <Section>
      <Article>
        <Radio Text="관리자" name="first" onClick={handleClickButton} />
        <AdminText>
          <Radio />
          기업
        </AdminText>

        <LoginWrapper>
          <IdTextBox>
            <div>아이디</div>
            <div>비밀번호</div>
          </IdTextBox>
          <InputWrap>
            <LoginInputBox></LoginInputBox>
            <LoginInputBox></LoginInputBox>
            <ChangeBox>기업회원가입</ChangeBox>
          </InputWrap>
          <LoginButton>로그인</LoginButton>
        </LoginWrapper>
      </Article>
    </Section>
  );
};

export default Login;

const Section = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

const Article = styled.article`
  height: 200px;
  width: 497px;
  left: 50%;
  padding: 20px;
  background-color: #f6f6f6;
  border: 1px solid lightgray;
  border-radius: 5px;
`;

const ButtonBox = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 10px;
  margin-bottom: 20px;
`;

const AdminText = styled.label`
  display: flex;
  align-items: center;
  margin-right: 30px;
  font-weight: bold;
  font-size: 13px;
  line-height: 18px;
`;

const LoginWrapper = styled.form`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const IdTextBox = styled.div`
  letter-spacing: -0.48px;
  font-weight: bold;
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  margin-right: 20px;
  margin-bottom: 17px;

  div:first-child {
    margin-bottom: 33px;
  }
`;

const InputWrap = styled.div`
  display: flex;
  flex-direction: column;

  input:first-child {
    margin-bottom: 15px;
  }
`;

const LoginInputBox = styled.input`
  width: 180px;
  height: 30px;
  border: 1px solid lightgray;
  border-radius: 5px;
`;

const ChangeBox = styled.p`
  text-align: right;
  margin-top: 8px;
  color: ${({ theme }) => theme.orange};
  font-size: 10px;
  font-weight: bold;
`;

const LoginButton = styled.button`
  color: white;
  background-color: ${({ theme }) => theme.orange};
  width: 90px;
  height: 80px;
  margin-left: 20px;
  margin-bottom: 15px;
  border: 2px solid orange;
  border-radius: 5px;
  font-weight: bold;
`;
