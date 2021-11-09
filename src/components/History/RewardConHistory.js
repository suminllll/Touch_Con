import React from 'react';
import styled from 'styled-components';
import BOARD_DATA from './HistoryList/boardData';
import RewardConList from './RewardConList';

const RewardConHistory = ({
  Check,
  headNumber,
  contents,
  transferNumber,
  days,
  published,
  result,
}) => {
  return (
    <Container>
      <Table>
        <HeadTr>
          <CheckTd Check={Check} />
          <HeadTd headNumber>{headNumber}</HeadTd>
          <HeadTd contents>{contents}</HeadTd>
          <HeadTd transferNumber>{transferNumber}</HeadTd>
          {/* <HeadTd published>{published}</HeadTd> */}
          {/* <HeadTd result>{result}</HeadTd> */}
          <HeadTd days>{days}</HeadTd>
        </HeadTr>
        {BOARD_DATA.map(data => (
          <RewardConList
            key={data.id}
            Check={Check}
            headNumber={data.id}
            contents={data.contents}
            transferNumber={data.transferNumber}
            // published={data.published}
            // result={data.result}
            days={data.days}
          />
        ))}
      </Table>
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

export default RewardConHistory;
