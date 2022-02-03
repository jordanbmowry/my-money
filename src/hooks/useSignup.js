import { useState } from 'react';
import { projectAuth } from '../firebase/config';

export const useSignup = () => {
  const [error, setError] = useState(null);
  const [isPending, setIsPending] = useState(false);

  const signup = async (email, password, displayName) => {
    setError(null);
    setIsPending(true);
    try {
      const response = await projectAuth.createUserWithEmailAndPassword(
        email,
        password
      );
      console.log(response.user);
      if (!response) {
        throw new Error('Could not complete signup');
      }
      //   add display name to user
      await response.user.updateProfile({ displayName });
    } catch (error) {
      console.error(error);
      setError(error.message);
    } finally {
      setIsPending(false);
    }
  };

  return { error, isPending, signup };
};
