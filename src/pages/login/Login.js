import { useState } from 'react';
// styles
import styles from './Login.module.css';

export default function Login() {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const handleChange = ({ target }) => {
    const { name, value } = target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(formData);
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
      <button className='btn'>Login</button>
    </form>
  );
}
