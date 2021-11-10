import React, { useState } from 'react';
import styled from 'styled-components';
import Radio from '../../components/Radio/Radio';
import { Link } from 'react-router-dom';

const Login = () => {
  const [inputStatus, setInputStatus] = useState(false);

  const handleClickAdmin = () => {
    setInputStatus(!inputStatus);
  };

  return (
    <Form>
      <Article>
        <AdminText>
          <Radio
            click={!inputStatus}
            handleClickAdmin={handleClickAdmin}
            text="관리자"
          />
          <Radio
            click={inputStatus}
            handleClickAdmin={handleClickAdmin}
            text="기업"
          />
        </AdminText>

        <LoginWrapper>
          <IdTextBox>
            <div>아이디</div>
            <div>비밀번호</div>
          </IdTextBox>
          <InputWrap>
            <LoginInputBox />
            <LoginInputBox />
            <LinkStyle to="/signUp">
              <ChangeBox>기업회원가입</ChangeBox>
            </LinkStyle>
          </InputWrap>
          <LoginButton>로그인</LoginButton>
        </LoginWrapper>
      </Article>
    </Form>
  );
};

export default Login;

const LinkStyle = styled(Link)`
  text-decoration: none;
`;

const Form = styled.form`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 105vh;
  width: 120vw;
`;

const Article = styled.article`
  height: 35vh;
  width: 40vw;
  left: 50%;
  padding-top: 50px;
  background-color: #f6f6f6;
  border: 1px solid lightgray;
  border-radius: 7px;
`;

const AdminText = styled.div`
  display: flex;
  justify-content: space-around;
  margin: 0 210px 10px 170px;
`;

const LoginWrapper = styled.form`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const IdTextBox = styled.div`
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  margin-right: 30px;
  margin-bottom: 17px;
  font-weight: 800;
  font-size: 15px;

  div:first-child {
    margin-bottom: 45px;
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
  width: 18vw;
  height: 5vh;
  border: 1px solid lightgray;
  border-radius: 5px;
`;

const ChangeBox = styled.p`
  text-align: right;
  margin-top: 8px;
  color: ${({ theme }) => theme.orange};
  font-size: 11px;
  font-weight: bold;
`;

const LoginButton = styled.button`
  color: white;
  background-color: ${({ theme }) => theme.orange};
  width: 8vw;
  height: 11vh;
  margin-left: 20px;
  margin-bottom: 20px;
  border: 2px solid orange;
  border-radius: 5px;
  font-weight: bold;
  cursor: pointer;
`;
