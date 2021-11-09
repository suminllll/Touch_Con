import React from 'react';
import { Container, Page } from './styles';

function Pagination({ page, setPage, totalPage }) {
  //page = 현재 페이지
  //totalPage =  전체 페이지 수
  const onClickChagePage = (e, pageNumber) => {
    e.preventDefault();
    setPage(pageNumber);
  };
  const rendering = () => {
    const result = [];
    for (let i = 1; i <= totalPage; i++) {
      result.push(
        <Page
          active={i === page}
          key={i}
          onClick={e => {
            onClickChagePage(e, i);
          }}
        >
          {i}
        </Page>
      );
    }
    return result;
  };
  return <Container>{rendering()}</Container>;
}
export default Pagination;
