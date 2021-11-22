import React, { useState } from 'react';
import styled from 'styled-components';
import { Link, useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { LOGOUT } from '../../Redux/userSlice';

const Nav = () => {
  const [login, setLogin] = useState(false);
  const auth = useSelector(state => state.auth);
  const dispatch = useDispatch();
  const history = useHistory();
  const changLog = e => {
    if (auth.isLogin) {
      dispatch(LOGOUT());
      alert('로그아웃 성공');
    } else {
      history.push('login');
    }
  };
  return (
    <Top>
      <OverWrap>
        <LinkStyle to="/RewardCh">
          <LogoImg alt="logoImg" src="/images/Group.png" />
        </LinkStyle>
      </OverWrap>

      <OverWrapRight>
        <Text>
          <LogoutImg alt="logoutImg" src="/images/Vector.png" />

          <LoginButton onClick={changLog}>
            {auth.isLogin ? '로그아웃' : '로그인'}
          </LoginButton>
        </Text>
        <Rectangle_9 />
        <Rectangle_8 />
      </OverWrapRight>
    </Top>
  );
};

export default Nav;

const LinkStyle = styled(Link)`
  text-decoration: none;
`;

const Top = styled.nav`
  display: flex;
  justify-content: space-between;
  position: fixed;
  top: 0;
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
  top: 26px;
  letter-spacing: -0.46px;
`;

const LogoutImg = styled.img`
  height: 25px;
  width: 24px;
  margin-right: 5px;
`;

const ButtonStyle = styled.button`
  margin-right: 50px;
  color: white;
  background-color: transparent;
  border-style: none;
  font-size: 23px;
  font-weight: bold;
  cursor: pointer;
`;
const LoginButton = styled(ButtonStyle)`
  ${({ changeLogin }) => {
    return changeLogin ? `display:none` : `display:block`;
  }}
`;

const LogoutButton = styled(ButtonStyle)`
  ${({ changeLogin }) => {
    return changeLogin ? `display:block` : `display:none`;
  }}
`;
