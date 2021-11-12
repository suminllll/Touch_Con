import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import HistoryList from './HistoryList/HistoryList';
import BOARD_DATA from './HistoryList/boardData';
import Pagination from '../pagination';
import DummyData from '../pagination/boardData';

const RcHistory = ({ style }) => {
  const maxPostCount = 9;
  const [posts, setPosts] = useState(DummyData);
  const [page, setPage] = useState(1); //현재 페이지
  const [totalPage, setTotalPage] = useState(
    parseInt(posts?.length / maxPostCount) + 1
  ); //전체 페이지 수

  useEffect(() => {
    DivisionPage();
  }, [page]);

  const DivisionPage = () => {
    let postArry = [];
    let startPage = (page - 1) * 9;
    let endPagePostIndex = page * 9 - 1;
    for (let i = startPage; i <= endPagePostIndex; i++) {
      if (!DummyData[i]) {
        break;
      } else {
        postArry.push(DummyData[i]);
      }
    }
    setPosts(postArry);
  };

  const onClickPageHandler = (e, code) => {
    e.preventDefault();
    if (code === 'back') {
      setPage(page - 1);
    } else {
      setPage(page + 1);
    }
  };

  return (
    <Container style={{ ...style }}>
      <HeadImg src="images/Rectangle 11.png" />
      <Table>
        <HeadTr>
          <HeadTd> No.</HeadTd>
          <HeadTd>내용</HeadTd>
          <HeadTd>생성</HeadTd>
          <HeadTd>전송</HeadTd>
          <HeadTd>날짜</HeadTd>
        </HeadTr>
        {BOARD_DATA.map(data => (
          <HistoryList
            key={data.id}
            headNumber={data.id}
            contents={data.contents}
            number={data.number}
            day={data.day}
          />
        ))}
      </Table>
      <PageContainer>
        <PageMove
          style={{ marginLeft: 63 }}
          onClick={e => {
            onClickPageHandler(e, 'back');
          }}
          disabled={page === 1}
        >
          이전 페이지
        </PageMove>
        <Pagination page={page} totalPage={totalPage} setPage={setPage} />
        <PageMove
          style={{ marginRight: 55 }}
          onClick={e => {
            onClickPageHandler(e, 'back');
          }}
          disabled={page === totalPage}
        >
          다음 페이지
        </PageMove>
      </PageContainer>
    </Container>
  );
};

const PageContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 100px;
`;
const PageMove = styled.button`
  font-family: Work Sans;
  font-style: normal;
  font-weight: 600;
  font-size: 13px;
  line-height: 15px;
  letter-spacing: -0.02em;
  color: #000000;
  cursor: ${props => (props.disabled ? 'default' : 'pointer')};
  border: none;
  background-color: transparent;
`;

const Container = styled.div`
  width: 1032px;
`;

const Table = styled.table`
  width: 1200px;
  text-align: center;
  border: 1px solid #dddddd;
`;

const HeadTr = styled.tr`
  background-color: #eeeeee;
  text-align: center;
  height: 45px;
`;

const HeadTd = styled.td`
  vertical-align: middle;
`;

const HeadImg = styled.img`
  position: absolute;
`;
export default RcHistory;
