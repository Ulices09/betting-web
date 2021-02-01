import { FC } from 'react';
import styles from './Layout.module.scss';

const Layout: FC = ({ children }) => {
  return (
    <div className="container">
      <nav className="navbar fixed-top bg-white shadow-sm">
        <h2 className="color-primary">Betting Web</h2>
      </nav>
      <div className={styles.content}>{children}</div>
    </div>
  );
};

export default Layout;
