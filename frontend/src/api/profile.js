import api from './axios';

export const getProfile = () => api.get('profile/');
export const updateProfile = (data) => api.post('profile/', data);
