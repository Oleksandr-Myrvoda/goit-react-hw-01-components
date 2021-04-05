import styles from "./FriendList.module.css";

const FriendListItem = ({ avatar, name, isOnline }) => {
  const status = isOnline ? styles.online : styles.offline;
  return (
    <li className={styles.item}>
      <span className={status}></span>
      <img className={styles.avatar} src={avatar} alt={name} width="48" />
      <p className={styles.name}>{name}</p>
    </li>
  );
};

export default FriendListItem;
