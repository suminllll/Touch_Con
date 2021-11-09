import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
`;
export const Page = styled.p`
  font-weight: 600;
  font-size: 13px;
  line-height: 15px;
  letter-spacing: -0.02em;
  padding: 0 16px 5px;
  cursor: pointer;
  margin: 0 3px;
  border-bottom: ${props => (props.active ? ' 3px solid #FD7F36' : null)};
`;
