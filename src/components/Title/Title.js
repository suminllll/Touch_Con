import React from 'react';
import styled from 'styled-components';

// 사용하기
{
  /* <Title titleText="리워드콘" categoryText="리워드콘 > 생성내역" /> */
}

const Title = props => {
  const { titleText, categoryText } = props;

  return (
    <Section>
      <Article>
        <TitleText>{titleText}</TitleText>
        <CategoryText>{categoryText}</CategoryText>
      </Article>
    </Section>
  );
};

export default Title;

const Section = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-left: 320px;
`;

const Article = styled.article`
  display: flex;
  justify-content: space-between;
  margin-top: 130px;
  min-width: 75vw;
  min-height: 37px;
  border-bottom: 4px solid #fd7f36;
`;

const TitleText = styled.div`
  letter-spacing: 2px;
  font-weight: 800;
  font-size: 23px;
`;

const CategoryText = styled.div`
  font-weight: 400;
  font-size: 16px;
`;
