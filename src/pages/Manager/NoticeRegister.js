import React, { useImperativeHandle, useState } from 'react';
import styled from 'styled-components';
import AdminBtn from '../../components/AdminBtn/AdminBtn';
import Title from '../../components/Title/Title';
import { Link } from 'react-router-dom';
import DummyData from '../../components/pagination/boardData';

const NoticeRegister = () => {
  const [getNotice, setGetNotice] = useState('');
  const [getNoticeTitle, setGetNoticeTitle] = useState('');
  const [idNumber, setIdNumber] = useState(22);
  const [dmData, setdmData] = useState(DummyData);
  const NewDmData = [...dmData];

  const countIdNumber = () => {
    setIdNumber(idNumber + 1);
  };

  // console.log(countIdNumber());
  // console.log('nnnnnnnnn', DummyData[1].id.length);
  // console.log('asdfasdf', NewDmData);

  const noticeInputTitle = e => {
    setGetNoticeTitle(e.target.value);
  };

  const noticeInput = e => {
    if (getNoticeTitle.length > 3) {
      setGetNotice(e.target.value);
    } else {
      alert('제목을 입력하세요');
    }
  };
  //id 값이 22부터 차례대로 등록되도록 한다.

  const handleAdd = () => {
    if (getNotice.length > 4) {
      NewDmData.unshift({ id: 22, title: getNotice });
      setdmData(NewDmData);
      alert('공지사항이 등록되었습니다.');
    } else {
      alert('4글자 이상 작성해 주세요.');
    }
  };
  console.log('new=>', NewDmData);
  return (
    <>
      <Title
        titleText="공지사항 등록"
        categoryText="관리자 페이지 > 공지사항 > 공지사항 등록"
      />
      <Article>
        <TitleWrap>
          <TitleBox>제목</TitleBox>
          <TitleInputBox
            value={getNoticeTitle}
            onChange={noticeInputTitle}
            placeholder="제목을 입력하세요"
          />
        </TitleWrap>
        <TitleWrap>
          <TitleBox>등록일</TitleBox>
          2021-10-30
        </TitleWrap>
        <TitleWrap>
          <RegisterInput value={getNotice} onChange={noticeInput} />
        </TitleWrap>

        <ButtonWrap>
          <LinkStyle to="/Notice">
            <ButtonBox>
              <AdminBtn btnName="취소" />
            </ButtonBox>
          </LinkStyle>
          {/* <LinkStyle to="/Notice"> */}
          <ButtonBox>
            <AdminBtn handleBtn={handleAdd} color="#fd7f36" btnName="등록" />
          </ButtonBox>
          {/* </LinkStyle> */}
        </ButtonWrap>
      </Article>
    </>
  );
};

export default NoticeRegister;

const LinkStyle = styled(Link)`
  text-decoration: none;
`;
const Article = styled.article`
  margin: 40px 110px 0 400px;
`;

const TitleWrap = styled.div`
  display: flex;
  align-items: center;
  margin: 20px 0;
`;

const TitleBox = styled.div`
  margin-right: 30px;
  font-weight: 800;
  font-size: 15px;
  letter-spacing: 1px;
`;

const InputBox = styled.input`
  height: 28px;
  border: 1px solid lightgray;
  border-radius: 3px;
  margin-left: 5px;
`;

const TitleInputBox = styled(InputBox)`
  min-width: 64vw;
`;

const RegisterInput = styled.textarea`
  min-height: 50vh;
  min-width: 67.5vw;
  padding: 20px;
`;

const ButtonWrap = styled.div`
  display: flex;
  justify-content: space-between;
`;

const ButtonBox = styled.div`
  margin: 35px 140px 0 170px;
`;
