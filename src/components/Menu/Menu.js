import { render } from '@testing-library/react';
import { useState, useEffect } from 'react';
import React from 'react';
import styled from 'styled-components';

const Menu = () => {
  const [isOpen, setIsOpen] = useState({
    RewardList: false,
    PointList: false,
    PublishList: false,
    AdminList: false,
  });

  const [clickList, setClickList] = useState('black');

  const toggleNav = e => {
    setIsOpen({ [e.target.name]: !isOpen[e.target.name] });
  };

  const changeColorList = () => {
    setClickList(clickList => '#0068d9');
    console.log(clickList);
  };

  render();
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
            <li onClick={changeColorList}>생성내역</li>
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
            <li onClick={changeColorList}>터치포인트</li>
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

const Aside = styled.div`
  width: 300px;
  margin-top: 80px; //nav 오면 지울것.
  background-color: #f6f6f6;
`;

const Ul = styled.ul`
  margin: 30px;
  padding-top: 30px;
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
