import React from 'react';
import styled from 'styled-components';
import HistoryList from './HistoryList/HistoryList';
import BOARD_DATA from './HistoryList/boardData';
const History = ({ style }) => {
  return (
    <Container style={{ ...style }}>
      <Table>
        <HeadTr>
          <HeadTd
            style={{
              display: 'flex',
              flexdirection: 'row',
              alignItems: 'center',
            }}
          >
            <div
              style={{
                width: 10,
                height: 45,
                background: '#FD7F36',
              }}
            />
            No.
          </HeadTd>
          <HeadTd>내용</HeadTd>
          <HeadTd>생성갯수</HeadTd>
          <HeadTd>생성일</HeadTd>
        </HeadTr>
        {BOARD_DATA.map(data => (
          <HistoryList
            key={data.id}
            headNumber={data.id}
            contents={data.contents}
            transferNumber={data.transferNumber}
            days={data.days}
            published={data.published}
            // companyName={data.companyName}
            // points={data.points}
            // produced={data.produced}
            // use={data.use}
            // result={data.result}
          />
        ))}
      </Table>
    </Container>
  );
};

const Container = styled.div``;

const Table = styled.table`
  min-width: 75vw;
  margin-right: 550px;
  text-align: center;
  border: 1px solid #dddddd;
`;

const HeadTr = styled.tr`
  background-color: #eeeeee;
`;

const HeadTd = styled.td`
  vertical-align: middle;
`;

export default History;
