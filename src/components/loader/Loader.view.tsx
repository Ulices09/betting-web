import { FC } from 'react';
import styles from './Loader.module.scss';

const Loader: FC = () => {
  return (
    <div className="row">
      <div className="col text-center py-5">
        <div className={styles.loader}>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </div>
      </div>
    </div>
  );
};

export default Loader;
