export interface UserInfo {
  id: string;
  username: string;
  email: string;
  accessToken: string;
  refreshToken: string;
  roles?: ['ROLE_ADMIN'];
}
