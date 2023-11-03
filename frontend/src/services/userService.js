import axios from 'axios';
import UniversalCookie from 'universal-cookie';

const cookies = new UniversalCookie();

export const getUser = () => {
  const userCookie = cookies.get('user');
  return userCookie ? userCookie : null;
};

export const login = async (email, password) => {
  const { data } = await axios.post('api/users/login', { email, password });
  cookies.set('user', data, { path: '/' });
  return data;
};

export const register = async registerData => {
  const { data } = await axios.post('api/users/register', registerData);
  cookies.set('user', data, { path: '/' });
  return data;
};

export const logout = () => {
  cookies.remove('user');
};