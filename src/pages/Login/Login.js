import React, { useState } from 'react';
import styled from 'styled-components';

const Login = () => {
  const [radio, setRadio] = useState(false);

  const changeRadio = e => {
    setRadio(!radio);
    console.log(radio);
  };

  return (
    <Section>
      <Article>
        <ButtonBox>
          <AdminButton onClick={changeRadio} radio={radio} />
          <AdminText>관리자</AdminText>
          <AdminButton onClick={changeRadio} radio={radio} />
          <AdminText>기업</AdminText>
        </ButtonBox>

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
  background-color: #f6f6f6;
  border: 1px solid lightgray;
  border-radius: 5px;
  padding: 20px;
`;

const ButtonBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 20px;
`;

const AdminButton = styled.input.attrs({
  type: 'radio',
})`
  margin-right: 8px;
  -webkit-appearance: none;
  width: 18px;
  height: 18px;
  border-radius: 50%;
  outline: none;
  border: 2px solid orange;
  /* background-color: orange; */

  /* input[type='radio']:before {
    content: ‘’;
    display: block;
    width: 60%;
    height: 60%;
    margin: 20% auto;
    border-radius: 50%;
  }*/

  /* background-color: ${({ radio }) => (radio ? ` orange` : `white`)}; */
  ${({ radio }) => {
    return radio ? `background-color: orange` : `background-color: white`;
  }}
`;

const AdminText = styled.label`
  margin-right: 30px;
  padding-top: 4px;
  font-weight: bold;
  font-size: 13px;
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
