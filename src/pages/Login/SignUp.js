import React, { useState } from 'react';
import styled from 'styled-components';
import SignupInput from '../../components/SignupInput/SignupInput';
import CheckBox from '../../components/CheckBox/CheckBox';
import AdminBtn from '../../components/AdminBtn/AdminBtn';
import Title from '../../components/Title/Title';
import Menu from '../../components/Menu/Menu';
import { Link, useHistory } from 'react-router-dom';
import api from '../../api/api';

const SingUp = () => {
  const [company, setCompany] = useState('');
  const [number, setNumber] = useState('');
  const [CEO, setCEO] = useState('');
  const [Regis, setRegis] = useState('');
  const [password, setPassword] = useState('');
  const history = useHistory();
  const onClickSignup = async e => {
    e.preventDefault();
    let body = {
      Name: company,
      Phone: number,
      CEO: CEO,
      Regis: Regis,
      Pass: password,
    };
    try {
      const config = {
        headers: {
          'Content-Type': 'application/json',
        },
      };
      const res = await api.post('register', JSON.stringify(body), config);
      console.log(res);
      if (res?.data.Result === 'success') {
        alert('회원가입에 성공하였습니다');
        history.push('login');
      }
    } catch (err) {
      alert('서버와 통신에 실패');
      console.log('err', err);
    }
  };
  return (
    <djv>
      <Menu />
      <Title titleText="기업회원가입" />
      <Section>
        <SignupInput
          name="기업명"
          value={company}
          onChange={e => {
            setCompany(e.target.value);
          }}
        />
        <SignupInput
          name="연락처"
          placeHolder="01023456789"
          value={number}
          onChange={e => {
            setNumber(e.target.value);
          }}
        />
        <SignupInput
          name="비밀번호"
          type={'password'}
          value={password}
          placeHolder=""
          onChange={e => {
            setPassword(e.target.value);
          }}
        />
        <SignupInput
          name="대표자명"
          value={CEO}
          onChange={e => {
            setCEO(e.target.value);
          }}
        />
        <SignupInput
          value={Regis}
          name="사업자등록번호"
          placeHolder="32420498025"
          onChange={e => {
            setRegis(e.target.value);
          }}
        />
        <SignupCheck>
          <CheckBox />
          <Span>[필수] 개인정보 수집 및 이용 동의</Span>
        </SignupCheck>
        <Button>
          <LinkStyle to="/login">
            <AdminBtn btnName="취소" />
          </LinkStyle>
          <LinkStyle onClick={onClickSignup}>
            <AdminBtn btnName="가입" color="#fd7f36" />
          </LinkStyle>
        </Button>
      </Section>
    </djv>
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
