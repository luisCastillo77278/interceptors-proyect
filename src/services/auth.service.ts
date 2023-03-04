import { API } from '../utilities';

const authApi = '/api/auth';

export interface Auth {
  email?: string;
  password: string;
  username: string;
  roles?: 'admin';
}

export const postAuth = async (route: string, data: Auth) => {
  const resp = await API.post(`${authApi}${route}`, data);
  return resp.data;
};
