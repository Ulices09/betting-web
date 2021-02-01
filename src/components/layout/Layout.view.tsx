import { FC, useState } from 'react';
import { Loader, Drawer, BetSlip } from 'components';
import { ListSvg } from 'assets/svg';
import styles from './Layout.module.scss';

type IProps = {
  loading?: boolean;
  error?: string;
};

const Layout: FC<IProps> = ({ children, loading, error }) => {
  const [drawerOpen, setDrawerOpen] = useState(false);

  const renderContent = () => {
    if (error)
      return (
        <div className="alert alert-danger" role="alert">
          {error}
        </div>
      );
    if (loading) return <Loader />;
    return children;
  };

  return (
    <div className="container">
      <nav className="navbar fixed-top bg-white shadow-sm">
        <h2 className="color-primary">Betting Web</h2>
        <img
          src={ListSvg}
          alt="list"
          width={30}
          className={styles.menu}
          onClick={() => setDrawerOpen(true)}
        />
      </nav>
      <Drawer isOpen={drawerOpen} onClickClose={() => setDrawerOpen(false)}>
        <BetSlip />
      </Drawer>
      <div className={styles.content}>{renderContent()}</div>
    </div>
  );
};

export default Layout;
