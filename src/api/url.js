let url = 'http://3.35.210.171';
if (process.env.NODE_ENV === 'production') {
  url = '3.35.210.171';
}

export const BASE_URL = url + ':5000/';
