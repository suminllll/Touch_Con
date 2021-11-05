import React, { useState } from 'react';
import styled from 'styled-components';
import Title from '../../components/Title/Title';
import Radio from '../../components/Radio/Radio';

const RewardPublish = () => {
  const [inputStatus, setInputStatus] = useState({
    first: null,
    second: null,
    third: null,
  });
  const { first, second, third } = inputStatus;

  const handleClickButton = e => {
    const { name, value } = e.target;
    console.log(name, value);
    setInputStatus({ ...inputStatus, [name]: value });
    console.log([name]);
    // console.log(e.currentTarget.innerText);
    // console.log(e.target.name);
    // const test = e.target.name;
    // for (let i in select) {
    //   i === test ? setSelect(select => true) : setSelect(select => false);
    // }
    // console.log(select.test);
    // setSelect(!select);
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
            <></>
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
            <TitleBox>전송일</TitleBox>
            <MiddleWrap>
              <CalendarBox>
                20-07-22 - 21-07-22
                <ArrowButton>
                  <ArrowImg alt="allow" src="/images/Polygon1.png" />
                </ArrowButton>
              </CalendarBox>
              <RadioWrapper>
                <Radio
                  name="first"
                  onClick={handleClickButton}
                  text="개별발송(준비중)"
                />
                <Radio
                  name="second"
                  onClick={handleClickButton}
                  text="대량발송(준비중)"
                />
                <Radio name="third" onClick={handleClickButton} text="보관" />
              </RadioWrapper>
            </MiddleWrap>
          </Ul>
          <Ul>
            <TitleBox>사진업로드</TitleBox>
            <PhotoInputBox />
            <File>파일찾기</File>
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
          <PublishButton>발행하기</PublishButton>
        </RightWrapper>
      </Main>
    </>
  );
};

export default RewardPublish;

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
`;

const Section = styled.section`
  //메뉴만큼 left 300줌
  margin: 50px 0 0 0px;
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
  margin-right: 50px;
  font-weight: 800;
  font-size: 15px;
  letter-spacing: 1px;
`;

const TitleInputBox = styled(InputBox)`
  width: 550px;
`;

const MiddleWrap = styled.div`
  display: flex;
  align-items: center;
  height: 25px;
`;

const Won = styled.span`
  margin: 0 20px;
  color: ${({ theme }) => theme.orange};
  font-weight: bold;
`;

const InputPlaceholder = styled(InputBox)`
  width: 430px;

  &::placeholder {
    padding-left: 15px;
    color: lightgray;
    letter-spacing: 1px;
  }
`;

const CalendarBox = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 6px 2px 6px 8px;
  background-color: #e5e5e5;
  border-radius: 3px;
  font-size: 16px;
  line-height: 18px;
`;

const ArrowButton = styled.button`
  background-color: transparent;
  margin-left: 3px;
  border-style: none;
`;

const ArrowImg = styled.img`
  height: 8px;
  width: 8px;
  color: lightgray;
  object-fit: cover;
`;

const RadioWrapper = styled.div`
  display: flex;
  padding-top: 8px;
  margin-left: 15px;
  margin-right: -5px;
`;
// const SendButtonBox = styled.div`
//   display: flex;
//   align-items: center;
//   justify-content: center;
//   margin-top: 15px;
//   margin-bottom: 20px;
//   margin-left: 10px;
// `;

// const SendButton = styled.input.attrs({
//   type: 'radio',
// })`
//   margin-right: 8px;

//   -webkit-appearance: none;
//   width: 18px;
//   height: 18px;
//   border-radius: 50%;
//   outline: none;
//   border: 2px solid orange;
//   /* ${({ radio }) => {
//     return radio ? `background-color: orange` : `background-color: white`;
//   }} */

//   &:checked:before {
//     background-color: ${({ theme }) => theme.orange};
//   }
// `;

// const SendText = styled.label`
//   margin-right: 15px;
//   padding-top: 5px;
//   font-weight: 800;
//   font-size: 13px;
//   letter-spacing: 0.5px;
// `;

const PhotoInputBox = styled(InputBox)`
  width: 400px;
`;

const File = styled.button`
  background-color: #c4c4c4;
  height: 28px;
  padding: 0 25px 0 25px;
  border: none;
  letter-spacing: 0.5px;
`;

const LastInputBox = styled(InputBox)`
  width: 507px;
  height: 124px;
`;

const RightWrapper = styled.aside`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 40px;
  padding-left: 70px;
  width: 300px;
  height: 350px;
`;

const QrBox = styled.div`
  border: 10px solid ${({ theme }) => theme.orange};
`;

const Qr = styled.img`
  width: 133px;
  height: 130px;
  object-fit: cover;
`;

const PublishButton = styled.button`
  height: 40px;
  width: 193px;
  margin-top: 30px;
  color: white;
  background-color: ${({ theme }) => theme.orange};
  border: none;
  border-radius: 5px;
  font-size: 18px;
  font-weight: 600;
`;
