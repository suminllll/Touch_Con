import React from 'react';
import Title from '../../components/Title/Title';

const RewardKeep = () => {
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
            <img
              src={require('../../assets/rkeep_pic.jpg').default}
              style={{
                width: 165,
                height: 350,
              }}
            />
            <img
              src={require('../../assets/rkeep_pic.jpg').default}
              style={{
                width: 165,
                height: 350,
              }}
            />
            <img
              src={require('../../assets/rkeep_pic.jpg').default}
              style={{
                width: 165,
                height: 350,
              }}
            />
            <img
              src={require('../../assets/rkeep_pic.jpg').default}
              style={{
                width: 165,
                height: 350,
              }}
            />
            <img
              src={require('../../assets/rkeep_pic.jpg').default}
              style={{
                width: 165,
                height: 350,
              }}
            />
            <img
              src={require('../../assets/rkeep_pic.jpg').default}
              style={{
                width: 165,
                height: 350,
              }}
            />
            <img
              src={require('../../assets/rkeep_pic.jpg').default}
              style={{
                width: 165,
                height: 350,
              }}
            />
            <img
              src={require('../../assets/rkeep_blank_pic.png').default}
              style={{
                width: 165,
                height: 350,
              }}
            />
            <img
              src={require('../../assets/rkeep_blank_pic.png').default}
              style={{
                width: 165,
                height: 350,
              }}
            />
            <img
              src={require('../../assets/rkeep_blank_pic.png').default}
              style={{
                width: 165,
                height: 350,
              }}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default RewardKeep;
