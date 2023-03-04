import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { create } from '../../redux/slices/user.slice';
import { postAuth } from '../../services/auth.service';

const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogin = async () => {
    const resp = await postAuth('/signin', {
      username: 'lc772782',
      password: '12345678',
    });

    console.log(resp);
    dispatch(create(resp));
    navigate('/main', { replace: true });
  };

  return (
    <>
      <h1>Login page</h1>
      <button onClick={handleLogin}>login</button>
    </>
  );
};

export default Login;
