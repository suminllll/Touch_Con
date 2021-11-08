import React from 'react';
import styled from 'styled-components';
import CheckBox from '../../CheckBox/CheckBox';

const HistoryList = ({ Check, headNumber, contents, number, day }) => {
  return (
    <tbody>
      <BodyTr>
        <CheckTd Check={Check}>
          <CheckBox />
        </CheckTd>
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
  position: relative;
  vertical-align: middle;
  border-bottom: 1px solid #c4c4c4;
  font-weight: 400;
  font-size: 16px;
`;

const CheckTd = styled(BodyTd)`
  display: ${props => (props.Check ? '"";' : 'none;')};
`;

export default HistoryList;
