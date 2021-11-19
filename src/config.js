export const API =
  'https://dhucswkkx5chpgbcers4pq5jfy.appsync-api.ap-northeast-2.amazonaws.com/graphql';

export const JSONAPI = 'https://jsonplaceholder.typicode.com/users';

//백엔드 DATA 값이 들어가면 알맞게 적용
export const FILTER = {
  COMPANY: `${API}/=?`,
  TITLE: `${API}/=?`,
  POINT: `${API}/=?`,
  NAME: `${API}/=?`,
};
