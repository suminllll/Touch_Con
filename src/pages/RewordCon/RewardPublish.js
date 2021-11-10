/* eslint-disable react/no-danger-with-children */
import React, { useState } from 'react';
import styled from 'styled-components';
import Title from '../../components/Title/Title';
import Radio from '../../components/Radio/Radio';
import { Link } from 'react-router-dom';

const RewardPublish = () => {
  const [inputStatus, setInputStatus] = useState('');
  const [save, setSave] = useState('');

  const handleClickButton = buttonName => {
    setInputStatus(buttonName);
  };

  const saveImg = e => {
    const save = e.target.value;
    setSave(save);
  };

  return (
    <>
      <Title
        titleText="리워드콘 발행"
        categoryText="리워드콘 > 리워드콘 발행"
      />
      <Main>
        <Section>
          <Ul>
            <TitleBox>제목</TitleBox>
            <TitleInputBox />
          </Ul>
          <Ul>
            <MiddleWrap>
              <TitleBox>현재 보유 터치포인트 수량</TitleBox>
              <Won>50,000</Won>
              <TitleBox>(touch/point)</TitleBox>
            </MiddleWrap>
          </Ul>
          <Ul>
            <TitleBox>배분할 터치포인트 수량</TitleBox>
            <InputPlaceholder placeholder="숫자만 입력 해주세요." />
          </Ul>
          <Ul>
            <TitleBox>리워드콘 생성 갯수</TitleBox>
            <InputPlaceholder placeholder="숫자만 입력 해주세요." />
          </Ul>
          <Ul>
            <MiddleWrap>
              <TitleBox />
              <RadioWrapper>
                <Radio
                  handleClickAdmin={handleClickButton}
                  click={inputStatus === 'first'}
                  text="개별발송(준비중)"
                  id="first"
                />
                <Radio
                  handleClickAdmin={handleClickButton}
                  click={inputStatus === 'second'}
                  text="대량발송(준비중)"
                  id="second"
                />
                <Radio
                  handleClickAdmin={handleClickButton}
                  click={inputStatus === 'third'}
                  text="보관"
                  id="third"
                />
              </RadioWrapper>
            </MiddleWrap>
          </Ul>
          <Ul>
            <TitleBox>사진업로드</TitleBox>
            <PhotoSaveBox>{save}</PhotoSaveBox>
            <Lable htmlFor="file">
              파일찾기
              <File onChange={saveImg} />
            </Lable>
          </Ul>
          <Ul>
            <TitleBox>안내 메모</TitleBox>
            <LastInputBox />
          </Ul>
        </Section>
        <RightWrapper>
          <QrBox>
            <Qr alt="qr" src="/images/Qr.png" />
          </QrBox>
          <LinkStyle to="/">
            <PublishButton>발행하기</PublishButton>
          </LinkStyle>
        </RightWrapper>
      </Main>
    </>
  );
};

export default RewardPublish;

const LinkStyle = styled(Link)`
  text-decoration: none;
`;
//부모 input 빈박스
const InputBox = styled.input`
  height: 28px;
  border: 1px solid lightgray;
  border-radius: 3px;
  margin-left: 5px;
`;

const Main = styled.main`
  display: flex;
  justify-content: center;
  margin-left: 310px;
`;

const Section = styled.section`
  margin: 40px 0 0 0;
`;

const Ul = styled.ul`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 10px 0;

  &:last-child {
    align-items: flex-start;
  }
`;

const TitleBox = styled.li`
  margin-right: 40px;
  font-weight: 800;
  font-size: 15px;
  letter-spacing: 1px;
`;

const TitleInputBox = styled(InputBox)`
  min-width: 45vw;
`;

const MiddleWrap = styled.div`
  display: flex;
  align-items: center;
  height: 25px;
`;

const Won = styled.span`
  margin-right: 25px;
  color: ${({ theme }) => theme.orange};
  font-weight: bold;
`;

const InputPlaceholder = styled(InputBox)`
  width: 38vw;

  &::placeholder {
    padding-left: 15px;
    color: lightgray;
    letter-spacing: 1.5px;
  }
`;

const RadioWrapper = styled.div`
  display: flex;
  justify-content: right;
  padding-top: 11px;
  margin-left: 155px;
`;

const PhotoSaveBox = styled.div`
  height: 28px;
  width: 34vw;
  margin-left: 5px;
  margin-right: -10px;
  padding-top: 9px;
  padding-left: 10px;
  border: 1px solid lightgray;
  border-radius: 3px;
`;

const Lable = styled.label`
  background-color: #c4c4c4;
  height: 28px;
  padding: 8px 25px;
  border: none;
  letter-spacing: 0.5px;
  cursor: pointer;
`;

const File = styled.input.attrs({
  id: 'file',
  type: 'file',
  accept: 'image/png, image/jpeg',
})`
  display: none;
`;

const LastInputBox = styled(InputBox)`
  width: 41.3vw;
  height: 124px;
`;

const RightWrapper = styled.aside`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 40px;
  padding-left: 90px;
`;

const QrBox = styled.div`
  border: 10px solid ${({ theme }) => theme.orange};
`;

const Qr = styled.img`
  width: 9vw;
  height: 9vw;
  object-fit: cover;
`;

const PublishButton = styled.button`
  height: 40px;
  width: 14vw;
  margin-top: 30px;
  color: white;
  background-color: ${({ theme }) => theme.orange};
  border: none;
  border-radius: 5px;
  font-size: 18px;
  font-weight: 600;
  cursor: pointer;
`;
