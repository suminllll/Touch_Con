import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import BOARD_DATA from './HistoryList/boardData';
import Pagination from '../pagination';
import DummyData from '../pagination/boardData';
import MtHistoryList from './HistoryList/MtHistoryList';

const MtHistory = ({ style }) => {
  const maxPostCount = 9;
  const [posts, setPosts] = useState(DummyData);
  const [page, setPage] = useState(1); //현재 페이지
  const [totalPage, setTotalPage] = useState(
    parseInt(posts?.length / maxPostCount) + 1
  ); // 전체 페이지 수
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
      <Table>
        <HeadTr>
          <HeadTd>No.</HeadTd>
          <HeadTd>내용</HeadTd>
          <HeadTd>발행</HeadTd>
          <HeadTd>사용</HeadTd>
          <HeadTd>날짜</HeadTd>
        </HeadTr>
        {posts.map(data => (
          <MtHistoryList
            key={data.id}
            headNumber={data.id}
            contents={data.contents}
            published={data.published}
            use={data.use}
            days={data.days}
          />
        ))}
      </Table>
      <PageContainer>
        <PageMove
          style={{ marginRight: 63 }}
          onClick={e => {
            onClickPageHandler(e, 'back');
          }}
          disabled={page === 1}
        >
          이전 페이지
        </PageMove>

        <Pagination page={page} totalPage={totalPage} setPage={setPage} />

        <PageMove
          style={{ marginLeft: 55 }}
          disabled={page === totalPage}
          onClick={e => {
            onClickPageHandler(e, 'next');
          }}
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
  width: 1190px;
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

export default MtHistory;
