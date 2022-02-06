import { useState } from 'react';

export default function TransactionForm() {
  const initialFormState = {
    name: '',
    amount: '',
  };

  const [formData, setFormData] = useState(initialFormState);

  const handleFormChange = ({ target }) => {
    const { name, value } = target;

    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();
    console.log({ formData });
  };
  return (
    <>
      <h3>Add a Transaction</h3>
      <form onSubmit={handleFormSubmit}>
        <label htmlFor='name'>Transaction name:</label>
        <input
          id='name'
          name='name'
          type='text'
          value={formData.name}
          onChange={handleFormChange}
          required
        />
        <label htmlFor='amount'>Amount ($):</label>
        <input
          id='amount'
          name='amount'
          type='number'
          value={formData.amount}
          onChange={handleFormChange}
          required
        />
        <button type='submit'>Add Transaction</button>
      </form>
    </>
  );
}
