import axios from 'axios';

const baseURL = 'https://6449822bb88a78a8f009cb4c.mockapi.io/api/tweetApp/';
axios.defaults.baseURL = baseURL;
axios.defaults.headers.patch['Access-Control-Allow-Headers'] =
  'X-Requested-With,Content-Type,Cache-Control,access_token';

export const mockapiTest_API = {
  getAllUsers: async () => {
    const response = await axios.get('users');
    return response.data;
  },
  editUser: async (userId, userData) => {
    const response = await axios.put(`users/${userId}`, userData);
    return response.data;
  },
};
