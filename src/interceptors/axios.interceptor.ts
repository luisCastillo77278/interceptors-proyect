import { UserInfo } from '../models/user.model';
import { PersistKey } from '../redux/slices/user.slice';
import { API, saveLocalStorage } from '../utilities';

export const PublicPrivateInterceptor = () => {
  API.interceptors.request.use(
    (config) => {
      const user: UserInfo = JSON.parse(window.localStorage.getItem(PersistKey) as string);
      if (user) {
        const { accessToken } = user;
        config.headers['x-access-token'] = accessToken;
      }
      return config;
    },
    (error) => Promise.reject(error)
  );

  API.interceptors.response.use(
    (response) => response,
    async (error) => {
      console.log({ response: error });
      const originalConfig = error.config;
      if (error.response.status === 401 && !originalConfig._retry) {
        originalConfig._retry = true;
        try {
          const user: UserInfo = JSON.parse(window.localStorage.getItem(PersistKey) as string);
          const resp = await API.post('/api/auth/refreshtoken', {
            refreshToken: user.refreshToken,
            username: user.username,
          });
          console.log(resp.data);
          const { accessToken, refreshToken } = resp.data;
          API.defaults.headers.common['x-access-token'] = accessToken;
          saveLocalStorage(PersistKey, { ...user, accessToken, refreshToken });
          return API(originalConfig);
        } catch (err) {
          return Promise.reject(err);
        }
      }

      return Promise.reject(error);
    }
  );
};
