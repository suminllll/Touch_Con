import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import HistoryList from './HistoryList/HistoryList';
import DummyData from '../pagination/boardData';
import Pagination from '../pagination';
const History = ({
  style,
  Check,
  headNumber,
  contents,
  transferNumber,
  days,
  published,
  result,
}) => {
  const maxPostCount = 9;
  const [posts, setPosts] = useState(DummyData);
  const [page, setPage] = useState(1); // 현재 페이지
  const [totalPage, setTotalPage] = useState(
    parseInt(posts?.length / maxPostCount) + 1
  ); // 전체 페이지 수
  useEffect(() => {
    DivisionPage();
  }, [page]);

  const DivisionPage = () => {
    let postArray = [];
    let startPage = (page - 1) * 9;
    let endPagePostIndex = page * 9 - 1;
    for (let i = startPage; i <= endPagePostIndex; i++) {
      if (!DummyData[i]) {
        break;
      } else {
        postArray.push(DummyData[i]);
      }
    }
    setPosts(postArray);
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
          <HeadTd>생성갯수</HeadTd>
          <HeadTd>생성일</HeadTd>
        </HeadTr>
        {posts.map(data => (
          <HistoryList
            key={data.id}
            headNumber={data.id}
            contents={data.contents}
            transferNumber={data.transferNumber}
            days={data.days}
            // companyName={data.companyName}
            // points={data.points}
            // produced={data.produced}
            // use={data.use}
            // result={data.result}
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
          disabled={page === totalPage}
          style={{ marginLeft: 55 }}
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

const Container = styled.div`
  min-width: 1032px;
`;

const Table = styled.table`
  min-width: 75vw;
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

const CheckTd = styled(HeadTd)`
  display: ${props => (props.Check ? '"";' : 'none;')};
`;
const PageContainer = styled.div`
  display: flex;
  justify-content: center;
  margin: 50px 0;
  bottom: 0;
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

export default History;
