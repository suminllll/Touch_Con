import React from 'react';
import styled from 'styled-components';

const Radio = props => {
  const { handleClickAdmin, click, text } = props;

  return (
    <ButtonBox>
      <AdminText>
        <NomalImg
          onClick={handleClickAdmin}
          alt="nomalImg"
          src="/images/비활성화.png"
          show={click}
        />
        <ChangedImg
          onClick={handleClickAdmin}
          alt="changedImg"
          src="/images/활성화.png"
          show={click}
        />

        {text}
      </AdminText>
    </ButtonBox>
  );
};

export default Radio;

const ButtonBox = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 10px;
  margin-bottom: 20px;
`;

const AdminText = styled.label`
  display: flex;
  align-items: center;
  margin-right: 30px;
  font-weight: 800;
  font-size: 14px;
  line-height: 18px;
`;

const ChangeImg = styled.img`
  margin: 0 8px 0 0;
  width: 20px;
  height: 20px;
  background-color: white;
`;

const NomalImg = styled(ChangeImg)`
  ${({ show }) => {
    return show ? `display:none` : `display:block`;
  }}
`;

const ChangedImg = styled(ChangeImg)`
  ${({ show }) => {
    return show ? `display:block` : `display:none`;
  }}
`;
