import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { AppStore } from '../../redux/store';
import { API } from '../../utilities';

const Main = () => {
  const user = useSelector((store: AppStore) => store.user);
  useEffect(() => {
    API.get('/api/test/user')
      .then((resp) => console.log(resp))
      .catch((error) => console.log(error));
  }, []);
  return (
    <>
      <h1>Main</h1>
      {JSON.stringify(user)}
    </>
  );
};

export default Main;
