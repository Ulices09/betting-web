import { FC } from 'react';
import { ISelection } from 'common/types';
import styles from './Selection.module.scss';
import { useBetSlipContext } from 'hooks';

type IProps = {
  selection: ISelection;
  marketName: string;
  onlyTwoItems: boolean;
};

const Selection: FC<IProps> = ({ selection, onlyTwoItems, marketName }) => {
  const { addBet, removeBet, selections } = useBetSlipContext();
  const isSelected = selections.find((s) => s.id === selection.id) != null;

  const onClick = () => {
    if (isSelected) removeBet(selection.id);
    else addBet(selection, marketName);
  };

  return (
    <div className={onlyTwoItems ? 'col-5' : 'col-4'}>
      <div
        className={`${styles.selection} ${
          isSelected && styles.selected
        } rounded p-1`}
        onClick={onClick}
      >
        <div data-test="name" className="text-center">
          {selection.name}
        </div>
        <div data-test="price" className="text-center font-weight-bold">
          {selection.price}
        </div>
      </div>
    </div>
  );
};

export default Selection;
