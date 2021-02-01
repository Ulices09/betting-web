import { FC } from 'react';
import { ISelection } from 'common/types';
import styles from './Selection.module.scss';

type IProps = {
  selection: ISelection;
  onlyTwoItems: boolean;
};

const Selection: FC<IProps> = ({ selection, onlyTwoItems }) => {
  return (
    <div className={onlyTwoItems ? 'col-5' : 'col-4'}>
      <div className={`${styles.selection} rounded p-1`}>
        <div className="text-center">{selection.name}</div>
        <div className="text-center font-weight-bold">{selection.price}</div>
      </div>
    </div>
  );
};

export default Selection;
