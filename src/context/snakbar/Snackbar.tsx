import { createContext, useState, useContext } from 'react';
import Snackbar from '@mui/material/Snackbar';

type snackbar = {
  handleMessage: (msg: string) => void;
};

export const snackbarContext = createContext<snackbar>({
  handleMessage: () => {},
});

export const useSnackbarContext = () => useContext(snackbarContext);

const SnackbarProvider = ({ children }: { children: JSX.Element | JSX.Element[] }) => {
  const [open, setOpen] = useState(false);
  const [message, setMessage] = useState('');

  const handleMessage = (msg: string) => {
    setMessage(msg);
    setOpen(true);
  };

  return (
    <snackbarContext.Provider value={{ handleMessage }}>
      <Snackbar
        open={open}
        message={message}
        anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
        onClose={() => setOpen(false)}
        autoHideDuration={4000}
      />
      {children}
    </snackbarContext.Provider>
  );
};

export default SnackbarProvider;
