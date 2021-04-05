import styles from "./TransactionHistory.module.css";

const TransactionHistoryItem = ({ type, amount, currency }) => {
  return (
    <tr className={styles.tr}>
      <td className={styles.td}>{type}</td>
      <td className={styles.td}>{amount}</td>
      <td className={styles.td}>{currency}</td>
    </tr>
  );
};

export default TransactionHistoryItem;
