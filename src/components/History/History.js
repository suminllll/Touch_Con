import React from 'react';
import styled from 'styled-components';
import HistoryList from './HistoryList/HistoryList';
import BOARD_DATA from './HistoryList/boardData';

const History = ({ Check }) => {
  {
    /* 사용법 <History Check="Check" / > 라고 쓰면 체크박스 있는 리스트. 그냥 쓰면 체크박스 없는 리스트 */
  }

  return (
    <Container>
      <Table>
        <HeadTr>
          <CheckTd Check={Check} />
          <HeadTd>No.</HeadTd>
          <HeadTd>내용</HeadTd>
          <HeadTd>생성갯수</HeadTd>
          <HeadTd>생성일</HeadTd>
        </HeadTr>
        {BOARD_DATA.map(data => (
          <HistoryList
            key={data.id}
            headNumber={data.id}
            contents={data.contents}
            number={data.number}
            day={data.day}
            Check={Check}
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
  width: 1032px;
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

export default History;
