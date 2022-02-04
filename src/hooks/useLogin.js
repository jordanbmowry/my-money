import { useState, useEffect } from 'react';
import { projectAuth } from '../firebase/config';
import { useAuthContext } from './useAuthContext';

export function useLogin() {
  const [isCanceled, setIsCanceled] = useState(false);
  const [error, setError] = useState(false);
  const [isPending, setIsPending] = useState(false);
  const { dispatch } = useAuthContext();

  const login = async (email, password) => {
    setError(null);
    setIsPending(true);
    // sign user out
    try {
      const response = await projectAuth.signInWithEmailAndPassword(
        email,
        password
      );
      //   dispatch logout action
      dispatch({ type: 'LOGIN', payload: response.user });
    } catch (error) {
      if (!isCanceled) {
        setError(error.message);
        console.error(error.message);
      }
    } finally {
      if (!isCanceled) {
        setIsPending(false);
      }
    }
  };

  useEffect(() => {
    return () => setIsCanceled(true);
  }, []);

  return { login, error, isPending };
}
