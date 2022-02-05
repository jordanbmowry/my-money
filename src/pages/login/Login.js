import { useState } from 'react';
import { useLogin } from '../../hooks/useLogin';
// styles
import styles from './Login.module.css';

export default function Login() {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });
  const { login, error, isPending } = useLogin();

  const handleChange = ({ target }) => {
    const { name, value } = target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const { email, password } = formData;
    login(email, password);
  };

  return (
    <form onSubmit={handleSubmit} className={styles['login-form']}>
      <h2>Login</h2>
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

      {isPending ? (
        <button disabled className='btn'>
          Loading...
        </button>
      ) : (
        <button className='btn'>Login</button>
      )}
      {error && <p>{error}</p>}
    </form>
  );
}
