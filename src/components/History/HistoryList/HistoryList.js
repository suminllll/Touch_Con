import React from 'react';
import styled from 'styled-components';

const HistoryList = ({ headNumber, contents, number, day }) => {
  return (
    <tbody>
      <BodyTr>
        <BodyTd>{headNumber}</BodyTd>
        <BodyTd>{contents}</BodyTd>
        <BodyTd>{number}</BodyTd>
        <BodyTd>{day}</BodyTd>
      </BodyTr>
    </tbody>
  );
};

const BodyTr = styled.tr`
  height: 45px;
`;

const BodyTd = styled.td`
  vertical-align: middle;
  border-bottom: 1px solid #c4c4c4;
  font-weight: 400;
  font-size: 16px;
`;

export default HistoryList;
