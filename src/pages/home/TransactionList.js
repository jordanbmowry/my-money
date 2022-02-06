import { useFirestore } from '../../hooks/useFireStore';
// styles
import styles from './Home.module.css';

export default function TransactionList(props) {
  const { deleteDocument, response } = useFirestore('transactions');
  console.log(response);

  return (
    <ul className={styles.transactions}>
      {props.transactions.map((transaction) => (
        <li key={transaction.id}>
          <p className={styles.name}>{transaction.name}</p>
          <p className={styles.amount}>${transaction.amount}</p>
          <button onClick={() => deleteDocument(transaction.id)}>X</button>
        </li>
      ))}
    </ul>
  );
}
