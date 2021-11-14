import React, { useState } from 'react';
import styled from 'styled-components';
import AdminBtn from '../../components/AdminBtn/AdminBtn';
import Title from '../../components/Title/Title';
import NoticeHistory from '../../components/History/NoticeHistory';
import { Link } from 'react-router-dom';

const Notice = () => {
  const [text, setText] = useState('');

  const textHandle = e => {
    console.log(e);
    setText(e.target.value);
  };
  return (
    <>
      <Title titleText="공지사항" categoryText="관리자 페이지 > 공지사항" />
      <Article>
        <MiddleWrap>
          <div>
            <TitleWrap>
              <TitleBox>제목</TitleBox>
              <InputBox onChange={textHandle} value={text} />
            </TitleWrap>

            <TitleWrap>
              <TitleBox>게시자</TitleBox>
              <PostingInputBox onChange={textHandle} value={text} />
            </TitleWrap>
          </div>
          <div>
            <AdminBtn btnName="검색" color="#fd7f36" />
          </div>
        </MiddleWrap>
        <HistoryWrap>
          <NoticeHistory style={{ marginLeft: -40 }} />
        </HistoryWrap>
        <BottomBox>
          <Link to="/NoticeRegister">
            <AdminBtn btnName="공지등록" color="#fd7f36" />
          </Link>
        </BottomBox>
      </Article>
    </>
  );
};

export default Notice;

const Article = styled.article`
  margin: 40px 40px 0 400px;
`;

const MiddleWrap = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const TitleWrap = styled.div`
  display: flex;
  align-items: center;
  margin: 15px 0;
`;

const TitleBox = styled.div`
  margin-right: 30px;
  font-weight: 800;
  font-size: 15px;
  letter-spacing: 1px;
`;

const InputBox = styled.input`
  height: 28px;
  min-width: 45vw;
  margin-left: 5px;
  border: 1px solid lightgray;
  border-radius: 3px;
`;

const PostingInputBox = styled(InputBox)`
  margin-left: -9px;
`;

const BottomBox = styled.div`
  text-align: right;
`;

const HistoryWrap = styled.div`
  margin: 30px 0;
`;
