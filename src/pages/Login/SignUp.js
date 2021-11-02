import { render } from '@testing-library/react';
import React from 'react';
import styled from 'styled-components';
import Menu from '../../components/Menu/Menu';

const SingUp = () => {
  render();
  return (
    <Section>
      <Head>
        <p>기업회원가입</p>
      </Head>

      <SignUp>
        <Company>
          <p>기업명</p>
          <Input />
        </Company>
        <Contact>
          <p>연락처</p>
          <Input />
        </Contact>
        <Ceo>
          <p>대표자명</p>
          <Input />
        </Ceo>
        <Registration>
          <p>사업자등록번호</p>
          <Input />
        </Registration>
      </SignUp>

      <Agree>
        <input type="checkbox" /> [필수] 개인정보 수집 및 이용 동의
      </Agree>
      <Button>취소</Button>
      <Button confirm>가입</Button>
    </Section>
  );
};

const Head = styled.div`
  border-bottom: 4px solid #fd7f36;
`;

const Section = styled.div`
  width: 1140px;
  margin: 0 auto;
  border: 1px solid black;
`;

const SignUp = styled.div`
  margin-left: 50px;
  margin-top: 50px;
`;

const Company = styled.div`
  display: flex;
  justify-content: space-evenly;
`;

const Contact = styled.div`
  display: flex;
  justify-content: space-evenly;
`;
const Ceo = styled.div`
  display: flex;
  justify-content: space-evenly;
`;

const Registration = styled.div`
  display: flex;
  justify-content: space-evenly;
`;

const Input = styled.input`
  width: 537px;
  margin-left: 30px;
`;

const Agree = styled.div`
  width: 226px;
`;

const Button = styled.button`
  width: 236px;
  height: 35px;
  margin-top: 30px;
  background-color: ${confirm => (confirm ? '#fd7f36' : 'grey')};
  color: white;
`;

export default SingUp;
