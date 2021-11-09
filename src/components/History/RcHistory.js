import React from 'react';
import styled from 'styled-components';
import HistoryList from './HistoryList/HistoryList';
import BOARD_DATA from './HistoryList/boardData';

const RcHistory = ({ style }) => {
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
    </Container>
  );
};

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

export default RcHistory;
