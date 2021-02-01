import { FC } from 'react';
import styles from './Layout.module.scss';
import { Loader } from 'components';

type IProps = {
  loading?: boolean;
  error?: string;
};

const Layout: FC<IProps> = ({ children, loading, error }) => {
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
      </nav>
      <div className={styles.content}>{renderContent()}</div>
    </div>
  );
};

export default Layout;
