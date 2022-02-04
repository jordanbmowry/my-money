import { useState } from 'react';
import { useSignup } from '../../hooks/useSignup';
//styled
import styles from './Signup.module.css';

export default function Signup() {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    displayName: '',
  });
  const { signup, isPending, error } = useSignup();

  const handleChange = ({ target }) => {
    const { name, value } = target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const { email, password, displayName } = formData;
    signup(email, password, displayName);
  };

  return (
    <form onSubmit={handleSubmit} className={styles['signup-form']}>
      <h2>Signup</h2>

      <label htmlFor='email'>email:</label>
      <input
        onChange={handleChange}
        type='email'
        name='email'
        id='email'
        value={formData.email}
      ></input>
      <label htmlFor='password'>password:</label>
      <input
        onChange={handleChange}
        type='password'
        name='password'
        id='password'
        value={formData.password}
      ></input>
      <label htmlFor='displayName'>display name:</label>
      <input
        onChange={handleChange}
        type='text'
        name='displayName'
        id='displayName'
        value={formData.displayName}
      ></input>
      {isPending ? (
        <button className='btn' disabled>
          loading...
        </button>
      ) : (
        <button className='btn'>Signup</button>
      )}

      {error && <p>{error}</p>}
    </form>
  );
}
