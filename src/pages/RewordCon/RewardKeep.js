import React from 'react';
import Title from '../../components/Title/Title';

const RewardKeep = () => {
  return (
    <div
      style={{
        flex: 1,
        marginLeft: 300,
        marginTop: 80,
      }}
    >
      <Title
        titleText={'리워드콘 보관'}
        categoryText={'리워드콘 > 리워드콘 보관'}
      />

      <div
        style={{
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'center',
          alignItems: 'center',
          marginTop: 78,
        }}
      >
        <image
          src="../../assets/rkeep_pic.png"
          style={{ minWidth: 165, minHeight: 366, backgroundColor: 'red' }}
        />
        <image src="/../../assets/rkeep_pic.png" />
        <image src="../../assets/rkeep_pic.png" />
        <image src="../../assets/rkeep_pic.png" />
        <image src="../../assets/rkeep_pic.png" />
      </div>
      <div
        style={{
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <div>2</div>
        <div>2</div>
        <div>2</div>
        <div>2</div>
        <div>2</div>
        <div>2</div>
      </div>
    </div>
  );
};

export default RewardKeep;
