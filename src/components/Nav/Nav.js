import React from 'react';
import styled from 'styled-components';
import Theme from '../../styles/Theme';

const Nav = () => {
  return (
    <Top>
      <OverWrap>
        <LogoImg alt="logoImg" src="/images/Group.png" />
      </OverWrap>

      <OverWrapRight>
        <Text>
          <LogoutImg alt="logoutImg" src="/images/Vector.png" />
          <WorkSpan>로그아웃</WorkSpan>
        </Text>
        <Rectangle_9></Rectangle_9>
        <Rectangle_8></Rectangle_8>
      </OverWrapRight>
    </Top>
  );
};

export default Nav;

const Top = styled.nav`
  display: flex;
  position: fixed;
  justify-content: space-between;
  height: 80px;
  width: 100%;
  background-color: ${({ theme }) => theme.orange};
`;

const OverWrap = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 300px;
`;

const LogoImg = styled.img`
  height: 38px;
  width: 175px;
`;

const OverWrapRight = styled.div`
  display: flex;
  justify-content: right;
  width: 1140px;
`;

const Rectangle_8 = styled.div`
  background-color: #0068d9;
  width: 20px;
  height: 80px;
`;

const Rectangle_9 = styled.div`
  width: 20px;
  height: 80px;
  background-color: #fbfbfb;
`;

const Text = styled.div`
  display: flex;
  align-items: center;
  letter-spacing: -0.46px;
  top: 26px;
`;

const LogoutImg = styled.img`
  height: 25px;
  width: 24px;
  margin-right: 5px;
`;

const WorkSpan = styled.span`
  margin-right: 50px;
  color: white;
  font-size: 23px;
  font-weight: bold;
`;
