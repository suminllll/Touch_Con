import React from 'react';
import styled from 'styled-components';
import AdminBtn from '../../components/AdminBtn/AdminBtn';
import Title from '../../components/Title/Title';
import History from '../../components/History/History';

const Notice = () => {
  const goToLink = () => {};
  return (
    <>
      <Title titleText="공지사항" categoryText="관리자 페이지 > 공지사항" />
      <Article>
        <MiddleWrap>
          <div>
            <TitleWrap>
              <TitleBox>제목</TitleBox>
              <TitleInputBox />
            </TitleWrap>
            <TitleWrap>
              <TitleBox>등록일</TitleBox>
              <CalendarBox>
                <CalendarDiv>20-07-22 - 21-07-22</CalendarDiv>
                <ArrowButton>
                  <ArrowImg alt="allow" src="/images/Polygon1.png" />
                </ArrowButton>
              </CalendarBox>
            </TitleWrap>
            <TitleWrap>
              <TitleBox>게시자</TitleBox>
              <PostingInputBox />
            </TitleWrap>
          </div>
          <div>
            <AdminBtn btnName="검색" color="#fd7f36" />
          </div>
        </MiddleWrap>
        <HistoryWrap>
          <History />
        </HistoryWrap>
        <BottomBox>
          <AdminBtn onClick={goToLink} btnName="공지등록" color="#fd7f36" />
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
  border: 1px solid lightgray;
  border-radius: 3px;
  margin-left: 5px;
`;

const TitleInputBox = styled(InputBox)`
  min-width: 45vw;
`;
const CalendarBox = styled.div`
  display: flex;
  align-items: center;
  text-align: center;
  margin-left: -6px;
  background-color: #e5e5e5;
  border-radius: 3px;
`;

const CalendarDiv = styled.div`
  padding: 8px 0px 4px 8px;
  min-width: 12vw;
  font-size: 17px;
  letter-spacing: 0.8px;
`;

const ArrowButton = styled.button`
  background-color: transparent;
  border-style: none;
  margin-top: 4px;
  margin-right: 5px;
`;

const ArrowImg = styled.img`
  height: 9px;
  width: 9px;
  color: lightgray;
  object-fit: cover;
`;

const PostingInputBox = styled(InputBox)`
  min-width: 45vw;
  margin-left: -6px;
`;

const BottomBox = styled.div`
  text-align: right;
`;

const HistoryWrap = styled.div`
  margin: 30px 0;
`;
