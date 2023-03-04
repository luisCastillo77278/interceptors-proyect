import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom';
import './App.css';
import AuthGuard from './guards/auth.guard';
import { Provider } from 'react-redux';
import { store } from './redux';
import { lazy } from 'react';
import SnackbarProvider from './context/snakbar/Snackbar';
import { PublicPrivateInterceptor } from './interceptors/axios.interceptor';

const Main = lazy(() => import('./pages/main/Main'));
const Login = lazy(() => import('./pages/login/Login'));
const Register = lazy(() => import('./pages/register/Register'));

PublicPrivateInterceptor();

function App() {
  return (
    <Provider store={store}>
      <SnackbarProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Navigate to="/main" />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route element={<AuthGuard />}>
              <Route path="/main" element={<Main />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </SnackbarProvider>
    </Provider>
  );
}

export default App;
