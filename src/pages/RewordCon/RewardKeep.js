import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import Pagination from '../../components/pagination';
import Title from '../../components/Title/Title';
import { Images } from '../../components/pagination/boardData';

const RewardKeep = () => {
  const maxPostCount = 10;
  const [posts, setPosts] = useState(Images);
  const [page, setPage] = useState(1); // 현재 페이지
  const [totalPage, setTotalPage] = useState(
    parseInt(posts?.length / maxPostCount) + 1
  ); //전체 페이지
  useEffect(() => {
    DivisionPage();
  }, [page]);

  const DivisionPage = () => {
    let postArry = [];
    let startPage = (page - 1) * 10;
    let endPagePostIndex = page * 10 - 1;
    for (let i = startPage; i <= endPagePostIndex; i++) {
      if (!Images[i]) {
        break;
      } else {
        postArry.push(Images[i]);
      }
    }
    setPosts(postArry);
  };

  const onClickPageHandler = (e, code) => {
    e.preventDefault();
    if (code === 'back') {
      setPage(page - 1);
    } else {
      setPage(page + 1);
    }
  };

  return (
    <>
      <Title
        titleText="리워드콘 보관"
        categoryText="리워드콘 > 리워드콘 보관"
      />
      <div
        style={{
          flex: 1,
          marginLeft: 200,
          marginTop: 80,
        }}
      >
        <div>
          <div
            style={{
              display: 'grid',
              width: '90%',
              maxWidth: 1240,
              gridTemplateColumns: '1fr 1fr 1fr 1fr 1fr',
              gridTemplateRows: '2fr',
              marginLeft: 200,
              gap: 20,
              marginBottom: 30,
            }}
          >
            {posts.map(data => (
              <img
                key={data.id}
                headNumber={data.id}
                src={data.img}
                style={{
                  width: 165,
                  height: 350,
                }}
              />
            ))}
          </div>
        </div>
        <PageContainer>
          <PageMove
            style={{ marginLeft: 63 }}
            onClick={e => {
              onClickPageHandler(e, 'back');
            }}
            disabled={page === 1}
          >
            이전 페이지
          </PageMove>
          <Pagination page={page} totalPage={totalPage} setPage={setPage} />
          <PageMove
            style={{ marginRight: 55 }}
            onClick={e => {
              onClickPageHandler(e, 'next');
            }}
            disabled={page === totalPage}
          >
            다음 페이지
          </PageMove>
        </PageContainer>
      </div>
    </>
  );
};

export default RewardKeep;

const PageContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 100px;
`;

const PageMove = styled.button`
  font-family: Work Sans;
  font-style: normal;
  font-weight: 600;
  font-size: 13px;
  line-height: 15px;
  letter-spacing: -0.02em;
  color: #000000;
  cursor: ${props => (props.disabled ? 'default' : 'pointer')};
  border: none;
  background-color: transparent;
`;
