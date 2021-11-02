import { useState } from 'react';
import React from 'react';
import styled from 'styled-components';

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
            <li>생성내역</li>
            <li>전송내역</li>
            <li>리워드콘 발행</li>
            <li>리워드콘 보관</li>
            <li>리워드콘 관리</li>
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
            <li>터치포인트관리</li>
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
            <li>터치포인트</li>
            <li>리워드콘</li>
          </ul>
        </PublishList>
        <AdminList>
          {' '}
          <Img
            alt="admin"
            src={isOpen.AdminList ? 'images/admin(on).png' : 'images/admin.png'}
            onClick={toggleNav}
            name="AdminList"
          />
          <ul className={isOpen.AdminList ? 'active' : 'hide'}>
            <li>신청서류내역</li>
            <li>포인트 배정</li>
            <li>공지사항</li>
          </ul>
        </AdminList>
      </Ul>
    </Aside>
  );
};

const Aside = styled.section`
  position: fixed;
  z-index: 9999;
  height: 100%;
  left: 0;
  margin-top: 80px; //nav 오면 지울것.
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
