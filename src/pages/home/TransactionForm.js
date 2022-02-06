import { useState, useEffect, useMemo } from 'react';
import { useFirestore } from '../../hooks/useFireStore';

export default function TransactionForm(props) {
  const initialFormState = useMemo(
    () => ({
      name: '',
      amount: '',
    }),
    []
  );

  const [formData, setFormData] = useState(initialFormState);
  const { addDocument, response } = useFirestore('transactions');

  const handleFormChange = ({ target }) => {
    const { name, value } = target;

    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();
    addDocument({ ...formData, uid: props.uid });
  };

  useEffect(() => {
    if (response.success) {
      setFormData(initialFormState);
    }
  }, [initialFormState, response.success]);

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
