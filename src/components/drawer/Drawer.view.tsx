import { FC } from 'react';
import { CloseSvg } from 'assets/svg';
import styles from './Drawer.module.scss';

type IProps = {
  isOpen: boolean;
  onClickClose: () => void;
};

const Drawer: FC<IProps> = ({ children, isOpen, onClickClose }) => {
  return (
    <div className={`${styles.container} ${isOpen && styles.open}`}>
      <div>
        <img
          src={CloseSvg}
          alt="close"
          width={40}
          className={`${styles.close} float-right`}
          onClick={onClickClose}
        />
      </div>
      <div>{children}</div>
    </div>
  );
};

export default Drawer;
