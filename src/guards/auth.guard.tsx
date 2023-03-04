import { useSelector } from 'react-redux';
import { Navigate, Outlet } from 'react-router-dom';
import { AppStore } from '../redux/store';

const AuthGuard = () => {
  const user = useSelector((store: AppStore) => store.user);

  return user.roles?.includes('ROLE_ADMIN') ? <Outlet /> : <Navigate to="/login" />;
};

export default AuthGuard;
