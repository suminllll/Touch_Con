import React from 'react';
import styled from 'styled-components';
import CheckBox from '../../CheckBox/CheckBox';

const NoticeHistoryList = ({
  Check,
  headNumber,
  contents,
  transferNumber,
  days,
  published,
  companyName,
  points,
  produced,
  use,
  result,
  title,
  writer,
}) => {
  return (
    <tbody>
      <BodyTr>
        <CheckTd Check={Check}>
          <CheckBox />
        </CheckTd>
        <BodyTd headNumber>{headNumber}</BodyTd>
        <BodyTd title>{title}</BodyTd>
        <BodyTd writer>{writer}</BodyTd>
        {/* <BodyTd contents>{contents}</BodyTd> */}
        <BodyTd days>{days}</BodyTd>
        {/* <BodyTd transferNumber>{transferNumber}</BodyTd> */}
        {/* <BodyTd companyName>{companyName}</BodyTd> */}
        {/* <BodyTd points>{points}</BodyTd> */}
        {/* <BodyTd produced>{produced}</BodyTd> */}
        {/* <BodyTd use>{use}</BodyTd> */}
        {/* <BodyTd result>{result}</BodyTd> */}
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

export default NoticeHistoryList;
