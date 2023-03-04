import { useNavigate } from 'react-router-dom';
import { useSnackbarContext } from '../../context/snakbar/Snackbar';
import { postAuth } from '../../services/auth.service';

const Register = () => {
  const navigate = useNavigate();
  const { handleMessage } = useSnackbarContext();

  const handleRegister = async () => {
    const resp = await postAuth('/signup', {
      email: 'lc77278@gmail.com',
      password: '12345678',
      username: 'lc772782',
      roles: 'admin',
    });
    handleMessage(resp.message);
    navigate('/login', { replace: true });
  };

  return (
    <>
      <h1>Register</h1>
      <button onClick={handleRegister}>Registrar</button>
    </>
  );
};

export default Register;
