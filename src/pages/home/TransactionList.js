// styles
import styles from './Home.module.css';

export default function TransactionList(props) {
  return (
    <ul className={styles.transactions}>
      {props.transactions.map((transaction) => (
        <li key={transaction.id}>
          <p className={styles.name}>{transaction.name}</p>
          <p className={styles.amount}>${transaction.amount}</p>
        </li>
      ))}
    </ul>
  );
}