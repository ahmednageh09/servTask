import axios from 'axios';
import UniversalCookie from 'universal-cookie';

const cookies = new UniversalCookie();

axios.interceptors.request.use(
  (config) => {
    // const user = localStorage.getItem('user');
    // const token = user && JSON.parse(user).token;
    const token = cookies.get('token');
    if (token) {
      config.headers['Authorization'] = `Bearer ${token}`;
    }
    return config;
  },
  error => {
    return Promise.reject(error);
  }
);

// Set HttpOnly and Secure attributes for the 'token' cookie
// cookies.set('token', token, { 
//   path: '/', 
//   expires: 7, 
//   secure: true, 
//   httpOnly: true,
//   sameSite: 'strict'
// });


axios.interceptors.request.use(
  req => {
    const user = localStorage.getItem('user');
    const token = user && JSON.parse(user).token;
    if (token) {
      req.headers['access_token'] = token;
    }
    return req;
  },
  error => {
    return Promise.reject(error);
  }
);
