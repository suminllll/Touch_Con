import React from 'react';
import styled from 'styled-components';
import HistoryList from './HistoryList/HistoryList';
import BOARD_DATA from './HistoryList/boardData';
import { useEffect, useState } from 'react/cjs/react.development';
import Page from './HistoryList/Page';
// import Pagination from 'react-js-pagination';

const History = () => {
  const [historyList, setHistoryList] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [postPerPage, setPostPerPage] = useState(10);
  // api 데이터 샘플
  const getList = () => {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then(res => res.json())
      .then(data => setHistoryList(data));
  };

  useEffect(() => {
    getList();
  }, []);

  const indexOfLastPost = currentPage * postPerPage;
  const indexOfFirstPost = indexOfLastPost - postPerPage;
  const currentList = historyList.slice(indexOfFirstPost, indexOfLastPost);
  console.log(currentList);

  return (
    <Container>
      <Table>
        <HeadTr>
          <HeadTd>
            <Rectangle src="/images/Rectangle.png" />
          </HeadTd>
          <HeadTd>No.</HeadTd>
          <HeadTd>내용</HeadTd>
          <HeadTd>전송갯수</HeadTd>
          <HeadTd>전송일</HeadTd>
        </HeadTr>
        {/* {BOARD_DATA.map(data => (
          <HistoryList
            key={data.id}
            contents={data.contents}
            headNumber={data.id}
            number={data.number}
            day={data.day}
          />
        ))} */}

        {historyList.map(data => (
          <HistoryList
            // page={currentList}
            key={data.userId}
            contents={data.body}
            headNumber={data.id}
            number={data.id}
            day={data.title}
          />
        ))}
      </Table>
    </Container>
  );
};

const Container = styled.section`
  position: relative;
  top: 300px;
  left: 500px;
`;

const Table = styled.table`
  width: 1032px;
  text-align: center;
  border: 1px solid #dddddd;
`;

const Rectangle = styled.img`
  position: absolute;
  left: 0px;
  top: 0px;
`;

const HeadTr = styled.tr`
  background-color: #eeeeee;
  text-align: center;
  height: 45px;
`;

const HeadTd = styled.td`
  vertical-align: middle;
`;

export default History;
