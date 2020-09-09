import api from './api-helper';

export const getUsers = async () => {
  const resp = await api.get('/users');
  return resp.data;
};

export const getUser = async (id) => {
  const resp = await api.get(`/users/${id}`);
  return resp.data;
};

export const deleteUser = async (id) => {
  const resp = await api.delete(`/users/${id}`)
  return resp;
}
