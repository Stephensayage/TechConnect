import api from './api-helper';

export const getLikes = async () => {
  const resp = await api.get('/likes');
  return resp.data;
};


export const postLike = async likeData => {
  const resp = await api.post('/likes', { like: likeData });
  return resp.data;
};


export const deleteLike = async (id) => {
  const resp = await api.delete(`/likes/${id}`);
  return resp;
};