import todoLogo from '../assets/logo.svg';

import styles from './Header.module.css';

export function Hearder() {
  return (
    <header className={styles.header}>
      <img src={todoLogo} alt="todo logo" />
    </header>
  );
}