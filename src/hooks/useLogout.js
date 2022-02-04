import { useState } from 'react';
import { projectAuth } from '../firebase/config';
import { useAuthContext } from './useAuthContext';

export function useLogout() {
  const [error, setError] = useState(false);
  const [isPending, setIsPending] = useState(false);
  const { dispatch } = useAuthContext();

  const logout = async () => {
    setError(null);
    setIsPending(true);
    // sign user out
    try {
      await projectAuth.signOut();
      //   dispatch logout action
      dispatch({ type: 'LOGOUT' });
    } catch (error) {
      setError(error.message);
      console.error(error.message);
    } finally {
      setIsPending(false);
    }
  };
  return { logout, error, isPending };
}
