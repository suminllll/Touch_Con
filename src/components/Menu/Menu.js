import { useState } from 'react';
import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const Menu = props => {
  const [isOpen, setIsOpen] = useState({
    RewardList: false,
    PointList: false,
    PublishList: false,
    AdminList: false,
  });

  const toggleNav = e => {
    setIsOpen({ [e.target.name]: !isOpen[e.target.name] });
  };

  return (
    <Aside>
      <Ul>
        <RewardList>
          <Img
            alt="reward"
            src={
              isOpen.RewardList ? 'images/reward(on).png' : 'images/reward.png'
            }
            onClick={toggleNav}
            name="RewardList"
          />
          <ul className={isOpen.RewardList ? 'active' : 'hide'}>
            <li>
              <LinkStyle to="/RewardCh">생성내역</LinkStyle>
            </li>
            <li>
              <LinkStyle to="/RewardTh">전송내역</LinkStyle>
            </li>
            <li>
              <LinkStyle to="/RewardPublish">리워드콘 발행</LinkStyle>
            </li>
            <li>
              <LinkStyle to="/RewardKeep">리워드콘 보관</LinkStyle>
            </li>
            <li>
              <LinkStyle to="/RewardManagement">리워드콘 관리</LinkStyle>
            </li>
          </ul>
        </RewardList>
        <PointList>
          <Img
            alt="touchPoint"
            src={
              isOpen.PointList
                ? 'images/touchPoint(on).png'
                : 'images/touchPoint.png'
            }
            onClick={toggleNav}
            name="PointList"
          />
          <ul className={isOpen.PointList ? 'active' : 'hide'}>
            <li>
              <LinkStyle to="/TpManagement">터치포인트관리</LinkStyle>
            </li>
          </ul>
        </PointList>
        <PublishList>
          <Img
            alt="publish"
            src={
              isOpen.PublishList
                ? 'images/publish(on).png'
                : 'images/publish.png'
            }
            name="PublishList"
            onClick={toggleNav}
          />
          <ul className={isOpen.PublishList ? 'active' : 'hide'}>
            <li>
              <LinkStyle to="/IhTouchPoint">터치포인트</LinkStyle>
            </li>
            <li>
              <LinkStyle to="/IhRewardCon">리워드콘</LinkStyle>
            </li>
          </ul>
        </PublishList>
        <AdminList>
          <Img
            alt="admin"
            src={isOpen.AdminList ? 'images/admin(on).png' : 'images/admin.png'}
            onClick={toggleNav}
            name="AdminList"
          />
          <ul className={isOpen.AdminList ? 'active' : 'hide'}>
            <li>
              <LinkStyle to="/AppDocDetail">신청서류내역</LinkStyle>
            </li>
            <li>
              <LinkStyle to="/PointAllocation">포인트 배정</LinkStyle>
            </li>
            <li>
              <LinkStyle to="/Notice">공지사항</LinkStyle>
            </li>
          </ul>
        </AdminList>
      </Ul>
    </Aside>
  );
};

const LinkStyle = styled(Link)`
  text-decoration: none;
  color: black;
`;

const Aside = styled.section`
  position: fixed;
  z-index: 9999;
  height: 100%;
  left: 0;
  margin-top: 80px;
  background-color: #f6f6f6;
`;

const Ul = styled.ul`
  margin: 30px;
  cursor: pointer;
`;

const Img = styled.img`
  margin-top: 25px;
  color: #0068d9;
`;

const RewardList = styled.li`
  .hide {
    display: none;
  }

  .active {
    font-size: 23px;
    padding-left: 50px;

    li {
      padding-top: 20px;
    }
  }
`;
const PointList = styled.li`
  .hide {
    display: none;
  }

  .active {
    font-size: 23px;
    padding-left: 50px;

    li {
      padding-top: 20px;
    }
  }
`;
const PublishList = styled.li`
  .hide {
    display: none;
  }

  .active {
    font-size: 23px;
    padding-left: 50px;

    li {
      padding-top: 20px;
    }
  }
`;

const AdminList = styled.li`
  .hide {
    display: none;
  }

  .active {
    font-size: 23px;
    padding-left: 50px;

    li {
      padding-top: 20px;
    }
  }
`;

export default Menu;
