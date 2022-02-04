import { useState } from 'react';
import { projectAuth } from '../firebase/config';
import { useAuthContext } from '../hooks/useAuthContext';

export const useSignup = () => {
  const [error, setError] = useState(null);
  const [isPending, setIsPending] = useState(false);
  const { dispatch } = useAuthContext();

  const signup = async (email, password, displayName) => {
    setError(null);
    setIsPending(true);
    try {
      const response = await projectAuth.createUserWithEmailAndPassword(
        email,
        password
      );

      if (!response) {
        throw new Error('Could not complete signup');
      }
      //   add display name to user
      await response.user.updateProfile({ displayName });
      // dispatch login action
      dispatch({ type: 'LOGIN', payload: response.user });
    } catch (error) {
      console.error(error);
      setError(error.message);
    } finally {
      setIsPending(false);
    }
  };

  return { error, isPending, signup };
};
