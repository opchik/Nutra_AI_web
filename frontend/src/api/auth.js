import api from './axios';

export const sendCode = (contact) => api.post('send-code/', { contact });

export const verifyCode = (contact, code) =>
  api.post('verify-code/', { contact, code }).then(res => {
    localStorage.setItem('accessToken', res.data.access);
    localStorage.setItem('refreshToken', res.data.refresh);
    return res;
  });
